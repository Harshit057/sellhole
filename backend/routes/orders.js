const express = require('express');
const { body, validationResult } = require('express-validator');
const Order = require('../models/Order');
const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, [
  body('orderItems').isArray({ min: 1 }).withMessage('Order must have at least one item'),
  body('orderItems.*.product').isMongoId().withMessage('Valid product ID is required'),
  body('orderItems.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
  body('shippingAddress.fullName').trim().notEmpty().withMessage('Full name is required'),
  body('shippingAddress.address').trim().notEmpty().withMessage('Address is required'),
  body('shippingAddress.city').trim().notEmpty().withMessage('City is required'),
  body('shippingAddress.state').trim().notEmpty().withMessage('State is required'),
  body('shippingAddress.zipCode').trim().notEmpty().withMessage('Zip code is required'),
  body('shippingAddress.phone').isMobilePhone().withMessage('Valid phone number is required'),
  body('paymentMethod').isIn(['cod', 'online', 'wallet']).withMessage('Invalid payment method')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { orderItems, shippingAddress, paymentMethod } = req.body;

    // Validate and calculate order items
    let itemsPrice = 0;
    const processedItems = [];

    for (const item of orderItems) {
      const product = await Product.findById(item.product).populate('vendor', 'name email');
      
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.product}`
        });
      }

      if (!product.isActive) {
        return res.status(400).json({
          success: false,
          message: `Product is not available: ${product.name}`
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${product.name}. Available: ${product.stock}`
        });
      }

      const price = product.discountPrice || product.price;
      const itemTotal = price * item.quantity;
      itemsPrice += itemTotal;

      processedItems.push({
        product: product._id,
        quantity: item.quantity,
        price: price,
        vendor: product.vendor._id
      });

      // Update product stock
      product.stock -= item.quantity;
      await product.save();
    }

    // Calculate shipping and tax
    const shippingPrice = itemsPrice > 500 ? 0 : 50; // Free shipping above ₹500
    const taxPrice = itemsPrice * 0.18; // 18% GST
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    // Create order
    const order = await Order.create({
      user: req.user._id,
      orderItems: processedItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isPaid: paymentMethod === 'online' ? false : false, // Will be updated after payment
      status: 'pending'
    });

    // Populate order details
    await order.populate('orderItems.product', 'name images slug');
    await order.populate('orderItems.vendor', 'name email');
    await order.populate('user', 'name email');

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating order'
    });
  }
});

// @desc    Get user orders
// @route   GET /api/orders/my-orders
// @access  Private
router.get('/my-orders', protect, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const orders = await Order.find({ user: req.user._id })
      .populate('orderItems.product', 'name images slug')
      .populate('orderItems.vendor', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Order.countDocuments({ user: req.user._id });
    const totalPages = Math.ceil(total / parseInt(limit));

    res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        total,
        hasNext: parseInt(page) < totalPages,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching orders'
    });
  }
});

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email phone')
      .populate('orderItems.product', 'name images slug description')
      .populate('orderItems.vendor', 'name email phone address');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user owns the order or is admin/vendor
    if (
      req.user.role !== 'admin' && 
      order.user._id.toString() !== req.user._id.toString() &&
      !order.orderItems.some(item => item.vendor._id.toString() === req.user._id.toString())
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this order'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching order'
    });
  }
});

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private (Admin/Vendor)
router.put('/:id/status', protect, authorize('admin', 'vendor'), [
  body('status').isIn(['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled']).withMessage('Invalid status')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    const { status, trackingNumber, estimatedDelivery, notes } = req.body;

    // Check if vendor owns products in this order (unless admin)
    if (req.user.role !== 'admin') {
      const hasVendorProducts = order.orderItems.some(
        item => item.vendor.toString() === req.user._id.toString()
      );

      if (!hasVendorProducts) {
        return res.status(403).json({
          success: false,
          message: 'Not authorized to update this order'
        });
      }
    }

    // Update order
    const updateData = { status };
    
    if (trackingNumber) updateData.trackingNumber = trackingNumber;
    if (estimatedDelivery) updateData.estimatedDelivery = estimatedDelivery;
    if (notes) updateData.notes = notes;

    if (status === 'delivered') {
      updateData.isDelivered = true;
      updateData.deliveredAt = new Date();
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).populate('orderItems.product', 'name images')
     .populate('orderItems.vendor', 'name');

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: updatedOrder
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating order status'
    });
  }
});

// @desc    Update payment status
// @route   PUT /api/orders/:id/payment
// @access  Private
router.put('/:id/payment', protect, [
  body('paymentResult.id').notEmpty().withMessage('Payment ID is required'),
  body('paymentResult.status').notEmpty().withMessage('Payment status is required')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user owns the order
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this order'
      });
    }

    const { paymentResult } = req.body;

    order.isPaid = true;
    order.paidAt = new Date();
    order.paymentResult = paymentResult;
    order.status = 'confirmed';

    await order.save();

    res.status(200).json({
      success: true,
      message: 'Payment updated successfully',
      data: order
    });
  } catch (error) {
    console.error('Update payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating payment'
    });
  }
});

// @desc    Cancel order
// @route   PUT /api/orders/:id/cancel
// @access  Private
router.put('/:id/cancel', protect, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user owns the order
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this order'
      });
    }

    // Check if order can be cancelled
    if (['shipped', 'delivered'].includes(order.status)) {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel order that has been shipped or delivered'
      });
    }

    // Restore product stock
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product._id);
      if (product) {
        product.stock += item.quantity;
        await product.save();
      }
    }

    order.status = 'cancelled';
    await order.save();

    res.status(200).json({
      success: true,
      message: 'Order cancelled successfully',
      data: order
    });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error cancelling order'
    });
  }
});

// @desc    Get vendor orders
// @route   GET /api/orders/vendor/orders
// @access  Private (Vendor)
router.get('/vendor/orders', protect, authorize('vendor'), async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Build filter for orders containing vendor's products
    const filter = {
      'orderItems.vendor': req.user._id
    };

    if (status) {
      filter.status = status;
    }

    const orders = await Order.find(filter)
      .populate('user', 'name email phone')
      .populate('orderItems.product', 'name images slug')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(filter);
    const totalPages = Math.ceil(total / parseInt(limit));

    res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        total,
        hasNext: parseInt(page) < totalPages,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Get vendor orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching vendor orders'
    });
  }
});

// @desc    Get all orders (Admin)
// @route   GET /api/orders/admin/all
// @access  Private (Admin)
router.get('/admin/all', protect, authorize('admin'), async (req, res) => {
  try {
    const { page = 1, limit = 20, status, startDate, endDate } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const filter = {};

    if (status) {
      filter.status = status;
    }

    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate);
    }

    const orders = await Order.find(filter)
      .populate('user', 'name email')
      .populate('orderItems.product', 'name images')
      .populate('orderItems.vendor', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(filter);
    const totalPages = Math.ceil(total / parseInt(limit));

    // Get order statistics
    const stats = await Order.aggregate([
      { $match: filter },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
          totalOrders: { $sum: 1 },
          averageOrderValue: { $avg: '$totalPrice' }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        total,
        hasNext: parseInt(page) < totalPages,
        hasPrev: parseInt(page) > 1
      },
      stats: stats[0] || { totalRevenue: 0, totalOrders: 0, averageOrderValue: 0 }
    });
  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching orders'
    });
  }
});

module.exports = router;

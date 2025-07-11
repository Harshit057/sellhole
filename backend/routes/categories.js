const express = require('express');
const { body, validationResult } = require('express-validator');
const Category = require('../models/Category');
const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .populate('parentCategory', 'name slug')
      .sort({ level: 1, name: 1 });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching categories'
    });
  }
});

// @desc    Get single category by ID or slug
// @route   GET /api/categories/:identifier
// @access  Public
router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    
    // Try to find by ID first, then by slug
    let category = await Category.findById(identifier).populate('parentCategory', 'name slug');

    if (!category) {
      category = await Category.findOne({ slug: identifier, isActive: true })
        .populate('parentCategory', 'name slug');
    }

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    // Get products in this category
    const products = await Product.find({ category: category._id, isActive: true })
      .populate('vendor', 'name')
      .select('name slug price discountPrice images ratings stock')
      .limit(20)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: {
        category,
        products
      }
    });
  } catch (error) {
    console.error('Get category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching category'
    });
  }
});

// @desc    Create new category
// @route   POST /api/categories
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Category name must be between 2 and 50 characters'),
  body('description').optional().trim().isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
  body('parentCategory').optional().isMongoId().withMessage('Invalid parent category ID')
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

    const { name, description, parentCategory } = req.body;

    // Check if category with same name already exists
    const existingCategory = await Category.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') } 
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: 'Category with this name already exists'
      });
    }

    let level = 0;
    
    // If parent category is provided, verify it exists and set level
    if (parentCategory) {
      const parent = await Category.findById(parentCategory);
      if (!parent) {
        return res.status(400).json({
          success: false,
          message: 'Parent category not found'
        });
      }
      level = parent.level + 1;
    }

    // Create category
    const category = await Category.create({
      name,
      description,
      parentCategory: parentCategory || null,
      level
    });

    await category.populate('parentCategory', 'name slug');

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: category
    });
  } catch (error) {
    console.error('Create category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating category'
    });
  }
});

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private (Admin only)
router.put('/:id', protect, authorize('admin'), [
  body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('Category name must be between 2 and 50 characters'),
  body('description').optional().trim().isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters')
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

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    const { name, description } = req.body;

    // If name is being updated, check for duplicates
    if (name && name !== category.name) {
      const existingCategory = await Category.findOne({ 
        name: { $regex: new RegExp(`^${name}$`, 'i') },
        _id: { $ne: req.params.id }
      });

      if (existingCategory) {
        return res.status(400).json({
          success: false,
          message: 'Category with this name already exists'
        });
      }
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { 
        ...(name && { name }),
        ...(description !== undefined && { description })
      },
      { new: true, runValidators: true }
    ).populate('parentCategory', 'name slug');

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      data: updatedCategory
    });
  } catch (error) {
    console.error('Update category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating category'
    });
  }
});

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private (Admin only)
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    // Check if category has products
    const productsCount = await Product.countDocuments({ category: req.params.id, isActive: true });
    
    if (productsCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete category. It has ${productsCount} active products.`
      });
    }

    // Check if category has subcategories
    const subcategoriesCount = await Category.countDocuments({ parentCategory: req.params.id, isActive: true });
    
    if (subcategoriesCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete category. It has ${subcategoriesCount} subcategories.`
      });
    }

    // Soft delete - mark as inactive
    await Category.findByIdAndUpdate(req.params.id, { isActive: false });

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully'
    });
  } catch (error) {
    console.error('Delete category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting category'
    });
  }
});

// @desc    Get category tree (hierarchical structure)
// @route   GET /api/categories/tree
// @access  Public
router.get('/tree/structure', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ level: 1, name: 1 });
    
    // Build hierarchical structure
    const categoryMap = {};
    const rootCategories = [];

    // First pass: create category map
    categories.forEach(category => {
      categoryMap[category._id] = {
        ...category.toObject(),
        children: []
      };
    });

    // Second pass: build tree structure
    categories.forEach(category => {
      if (category.parentCategory) {
        const parent = categoryMap[category.parentCategory];
        if (parent) {
          parent.children.push(categoryMap[category._id]);
        }
      } else {
        rootCategories.push(categoryMap[category._id]);
      }
    });

    res.status(200).json({
      success: true,
      data: rootCategories
    });
  } catch (error) {
    console.error('Get category tree error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching category tree'
    });
  }
});

module.exports = router;

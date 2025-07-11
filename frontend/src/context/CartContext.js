import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

// Initial state
const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
  totalItems: 0,
  totalAmount: 0,
  loading: false
};

// Action types
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  CALCULATE_TOTALS: 'CALCULATE_TOTALS',
  SET_LOADING: 'SET_LOADING'
};

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case CART_ACTIONS.ADD_TO_CART: {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.product._id === product._id);

      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity }];
      }

      return {
        ...state,
        items: newItems
      };
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payload;
      const newItems = state.items.filter(item => item.product._id !== productId);
      
      return {
        ...state,
        items: newItems
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: CART_ACTIONS.REMOVE_FROM_CART, payload: productId });
      }

      const newItems = state.items.map(item =>
        item.product._id === productId
          ? { ...item, quantity }
          : item
      );

      return {
        ...state,
        items: newItems
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0
      };

    case CART_ACTIONS.CALCULATE_TOTALS: {
      const { totalItems, totalAmount } = state.items.reduce(
        (totals, item) => {
          const price = item.product.discountPrice || item.product.price;
          const itemTotal = price * item.quantity;
          
          totals.totalItems += item.quantity;
          totals.totalAmount += itemTotal;
          
          return totals;
        },
        { totalItems: 0, totalAmount: 0 }
      );

      return {
        ...state,
        totalItems,
        totalAmount
      };
    }

    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calculate totals whenever items change
  useEffect(() => {
    dispatch({ type: CART_ACTIONS.CALCULATE_TOTALS });
  }, [state.items]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    // Check if product is available
    if (!product.isActive) {
      toast.error('This product is currently unavailable');
      return;
    }

    // Check stock
    const existingItem = state.items.find(item => item.product._id === product._id);
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    const newQuantity = currentQuantity + quantity;

    if (newQuantity > product.stock) {
      toast.error(`Only ${product.stock} items available in stock`);
      return;
    }

    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: { product, quantity }
    });

    toast.success(`${product.name} added to cart`);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: productId
    });

    toast.info('Item removed from cart');
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    const item = state.items.find(item => item.product._id === productId);
    
    if (!item) return;

    // Check stock
    if (quantity > item.product.stock) {
      toast.error(`Only ${item.product.stock} items available in stock`);
      return;
    }

    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, quantity }
    });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
    toast.info('Cart cleared');
  };

  // Get item quantity
  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.product._id === productId);
    return item ? item.quantity : 0;
  };

  // Check if item is in cart
  const isInCart = (productId) => {
    return state.items.some(item => item.product._id === productId);
  };

  // Get cart summary
  const getCartSummary = () => {
    const subtotal = state.totalAmount;
    const shipping = subtotal > 500 ? 0 : 50; // Free shipping above ₹500
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;

    return {
      subtotal,
      shipping,
      tax,
      total,
      itemCount: state.totalItems
    };
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
    isInCart,
    getCartSummary
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;

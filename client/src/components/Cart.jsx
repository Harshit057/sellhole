import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-green-700">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
      <div className="space-y-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-green-50 p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              {item.image && (
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              )}
              <div>
                <div className="font-semibold text-lg">{item.name}</div>
                <div className="text-green-700">₹{item.price.toFixed(2)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-green-200 rounded">-</button>
              <span className="px-2">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-green-200 rounded">+</button>
            </div>
            <div className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
            <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600 hover:underline">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8 border-t pt-6">
        <button onClick={clearCart} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Clear Cart</button>
        <div className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

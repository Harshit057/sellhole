import React from 'react';

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f0] to-[#f5f5dc] font-sans p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-6">Buyer Dashboard</h1>
        {/* User Profile */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-5xl text-green-700">👤</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Edit Profile</button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Your Details</h2>
            <p className="text-green-800 mb-2">Manage your name, address, phone, and profile picture.</p>
            <div className="w-full bg-green-100 h-2 rounded-full mb-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <span className="text-green-700 text-sm">Profile completion: 80%</span>
          </div>
        </section>
        {/* Product Discovery */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-green-900">Discover Products</h2>
            <input type="text" placeholder="Search products..." className="px-4 py-2 rounded-lg border border-green-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example product cards */}
            <div className="bg-green-50 rounded-xl p-4 shadow flex flex-col items-center">
              <div className="w-24 h-24 bg-green-200 rounded-lg mb-2 flex items-center justify-center">🧺</div>
              <h3 className="font-bold text-green-900">Handmade Basket</h3>
              <button className="mt-2 text-green-600 hover:underline">Add to Favorites</button>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow flex flex-col items-center">
              <div className="w-24 h-24 bg-green-200 rounded-lg mb-2 flex items-center justify-center">🥬</div>
              <h3 className="font-bold text-green-900">Organic Spinach</h3>
              <button className="mt-2 text-green-600 hover:underline">Add to Favorites</button>
            </div>
            {/* ...more products */}
          </div>
        </section>
        {/* Order Tracking */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Your Orders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Order #5678</h3>
              <span className="text-green-700 text-sm">Product: Handmade Basket</span><br/>
              <span className="text-green-700 text-sm">Status: Shipped</span><br/>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Track Order</button>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Order #5679</h3>
              <span className="text-green-700 text-sm">Product: Organic Spinach</span><br/>
              <span className="text-green-700 text-sm">Status: Delivered</span><br/>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Reorder</button>
            </div>
          </div>
        </section>
        {/* Cart and Checkout */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Your Cart</h2>
          <div className="bg-green-50 rounded-xl p-4 shadow flex flex-col items-center">
            <span className="text-green-900 font-bold">Cart Summary</span>
            <div className="text-green-700">2 items</div>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Checkout</button>
          </div>
        </section>
        {/* Communication & Support */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Messages & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Message Seller</h3>
              <p className="text-green-800">Is this basket available in red?</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Support</h3>
              <p className="text-green-800">Order #5678: Please deliver by Friday.</p>
            </div>
          </div>
        </section>
        {/* Feedback and Reviews */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Feedback & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Review</h3>
              <p className="text-green-800">Loved the basket! Will buy again.</p>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Suggestion</h3>
              <p className="text-green-800">Add more color options for baskets.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuyerDashboard;

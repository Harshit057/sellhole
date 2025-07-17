import React from 'react';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5e9] to-[#b2f2bb] font-sans p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-6">Seller Dashboard</h1>
        {/* Profile & Story */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:w-1/3">
            <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-5xl text-green-700">👤</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Edit Profile</button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Your Story</h2>
            <p className="text-green-800 mb-2">Share your background, journey, and what makes your products special.</p>
            <div className="w-full bg-green-100 h-2 rounded-full mb-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <span className="text-green-700 text-sm">Profile completion: 70%</span>
          </div>
        </section>
        {/* Product Management */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-green-900">Your Products</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Add Product</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example product cards */}
            <div className="bg-green-50 rounded-xl p-4 shadow flex flex-col items-center">
              <div className="w-24 h-24 bg-green-200 rounded-lg mb-2 flex items-center justify-center">🧺</div>
              <h3 className="font-bold text-green-900">Handmade Basket</h3>
              <span className="text-green-700 text-sm">Stock: 12</span>
              <span className="text-green-700 text-sm">Sales: 8</span>
              <button className="mt-2 text-green-600 hover:underline">Edit</button>
              <button className="mt-1 text-red-500 hover:underline">Delete</button>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow flex flex-col items-center">
              <div className="w-24 h-24 bg-green-200 rounded-lg mb-2 flex items-center justify-center">🥬</div>
              <h3 className="font-bold text-green-900">Organic Spinach</h3>
              <span className="text-green-700 text-sm">Stock: 30</span>
              <span className="text-green-700 text-sm">Sales: 15</span>
              <button className="mt-2 text-green-600 hover:underline">Edit</button>
              <button className="mt-1 text-red-500 hover:underline">Delete</button>
            </div>
            {/* ...more products */}
          </div>
        </section>
        {/* Order Management */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Orders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Order #1234</h3>
              <span className="text-green-700 text-sm">Product: Handmade Basket</span><br/>
              <span className="text-green-700 text-sm">Status: Pending</span><br/>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Accept</button>
              <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Reject</button>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Order #1235</h3>
              <span className="text-green-700 text-sm">Product: Organic Spinach</span><br/>
              <span className="text-green-700 text-sm">Status: Dispatched</span><br/>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Mark Delivered</button>
            </div>
          </div>
        </section>
        {/* Payments & Earnings */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Payments & Earnings</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-green-100 rounded-xl p-4 mb-2">
                <span className="text-green-900 font-bold">Total Earnings:</span>
                <span className="text-green-700 ml-2">₹12,500</span>
              </div>
              <div className="bg-green-100 rounded-xl p-4 mb-2">
                <span className="text-green-900 font-bold">This Month:</span>
                <span className="text-green-700 ml-2">₹2,300</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-2">Payment Method: <span className="font-semibold">UPI</span></div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">Request Withdrawal</button>
            </div>
          </div>
        </section>
        {/* Messages & Reviews */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Messages & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Message from Buyer</h3>
              <p className="text-green-800">Can you deliver by Friday?</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 shadow">
              <h3 className="font-bold text-green-900">Review</h3>
              <p className="text-green-800">Great quality and fast delivery!</p>
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </section>
        {/* Dashboard Insights */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Dashboard Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 rounded-xl p-4 text-center">
              <span className="text-green-900 font-bold">Listings</span>
              <div className="text-2xl font-bold text-green-700">5</div>
            </div>
            <div className="bg-green-100 rounded-xl p-4 text-center">
              <span className="text-green-900 font-bold">Pending Orders</span>
              <div className="text-2xl font-bold text-green-700">2</div>
            </div>
            <div className="bg-green-100 rounded-xl p-4 text-center">
              <span className="text-green-900 font-bold">Completed Sales</span>
              <div className="text-2xl font-bold text-green-700">21</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SellerDashboard;

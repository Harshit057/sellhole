import React from 'react';

const Team = () => (
  <div className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-green-700">Our Team</h1>
    <p className="text-lg text-green-900 mb-8">Meet the passionate people behind आपनGaon. We are a diverse group of technologists, designers, and rural advocates working together to empower farmers and artisans across India.</p>
    {/* Add team member cards here */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center mb-4">
          <span className="text-white text-3xl font-bold">A</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Harshit Sharma</h2>
        <p className="text-green-700">Founder & CEO</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center mb-4">
          <span className="text-white text-3xl font-bold">S</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Saisha Dubey</h2>
        <p className="text-green-700">Head of Product</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center mb-4">
          <span className="text-white text-3xl font-bold">R</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Ravi Singh</h2>
        <p className="text-green-700">Community Lead</p>
      </div>
    </div>
  </div>
);

export default Team;

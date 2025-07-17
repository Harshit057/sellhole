import React from 'react';

const Careers = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-green-700">Careers at आपनGaon</h1>
    <p className="text-lg text-green-900 mb-8">Join our mission to transform rural commerce! We are always looking for passionate, talented people who want to make a difference in the lives of farmers and artisans.</p>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-800">Open Positions</h2>
      <ul className="list-disc pl-6 text-green-900">
        <li>Frontend Developer (React, Tailwind CSS)</li>
        <li>Backend Developer (Node.js, MongoDB)</li>
        <li>Community Manager</li>
        <li>Product Designer</li>
      </ul>
      <p className="mt-6 text-green-700">To apply, email your resume to <a href="mailto:careers@apan-gaon.com" className="text-green-600 underline">careers@apan-gaon.com</a></p>
    </div>
  </div>
);

export default Careers;

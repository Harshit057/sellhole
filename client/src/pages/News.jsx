import React from 'react';

const News = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-green-700">आपनGaon News</h1>
    <p className="text-lg text-green-900 mb-8">Stay up to date with the latest stories, updates, and impact from MittiKart and our community.</p>
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2 text-green-800">आपनGaon Launches New Handicraft Marketplace</h2>
        <p className="text-green-700">July 2025  Were excited to announce the launch of our new handicraft section, connecting more artisans to urban buyers.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2 text-green-800">Farmer Success Story: Sunil from Punjab</h2>
        <p className="text-green-700">June 2025  Sunil increased his income by 40% after joining आपनGaon. Read his inspiring journey on our blog.</p>
      </div>
    </div>
  </div>
);

export default News;

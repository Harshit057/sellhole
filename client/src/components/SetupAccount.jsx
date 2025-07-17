import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupAccount = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    alert(`Role selected: ${selectedRole}`);
    // navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex font-sans">
      {/* Left: Seller */}
      <div
        onClick={() => handleSelect('seller')}
        className="w-1/2 flex flex-col justify-center items-center text-white bg-gradient-to-br from-[#2E7D32] to-[#66BB6A] cursor-pointer relative transition-transform hover:scale-[1.01]"
        style={{ perspective: '1200px' }}
      >
        {/* Optional 3D tilt effect */}
        <div className="transform rotate-y-[-2deg] shadow-xl rounded-3xl p-10 text-center max-w-md transition-all duration-300 hover:rotate-y-0 bg-white/90 text-[#2E7D32] border border-green-200">
          <h2 className="text-4xl font-bold mb-4 tracking-tight drop-shadow-lg">I'm a Seller</h2>
          <p className="text-lg mb-6 text-[#2E7D32]">
            Sell your handmade products, crops, or services directly from your village.
          </p>
          {/* Seller SVG Icon */}
          <div className="flex justify-center gap-5 mt-4">
            <svg className="h-14 w-14 drop-shadow-lg icon-3d" viewBox="0 0 48 48" fill="none" stroke="#2E7D32" strokeWidth="2.5">
              <ellipse cx="24" cy="32" rx="14" ry="8" fill="#66BB6A" stroke="#2E7D32" />
              <path d="M10 32c0-8 8-16 14-16s14 8 14 16" stroke="#2E7D32" fill="none" />
              <path d="M18 24c2 2 10 2 12 0" stroke="#2E7D32" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right: Buyer */}
      <div
        onClick={() => handleSelect('buyer')}
        className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-[#fff9f0] to-[#f5f5dc] cursor-pointer text-[#2E7D32] relative transition-transform hover:scale-[1.01]"
        style={{ perspective: '1200px' }}
      >
        <div className="transform rotate-y-[2deg] shadow-xl rounded-3xl p-10 text-center max-w-md transition-all duration-300 hover:rotate-y-0 bg-green-900/90 text-white border border-white/30">
          <h2 className="text-4xl font-bold mb-4 tracking-tight drop-shadow-sm text-white">I'm a Buyer</h2>
          <p className="text-lg mb-6 text-white/90">
            Explore and purchase authentic local goods made with heart from Indian villages.
          </p>
          {/* Buyer SVG Icon */}
          <div className="flex justify-center gap-5 mt-4">
            <svg className="h-14 w-14 drop-shadow-lg icon-3d" viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth="2.5">
              <polygon points="24,10 6,26 10,26 10,38 38,38 38,26 42,26" fill="#2E7D32" stroke="#fff" />
              <rect x="18" y="30" width="12" height="8" fill="#66BB6A" stroke="#fff" />
            </svg>
          </div>
        </div>
      </div>

      {/* Fonts, Animations & 3D Card Effect */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Open+Sans:wght@400;600&display=swap');
        .icon-3d {
          filter: drop-shadow(0 6px 16px rgba(46,125,50,0.25));
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), filter 0.3s cubic-bezier(.4,2,.6,1);
        }
        .hover\:cube-lift:hover .icon-3d {
          transform: translateY(-18px) scale(1.08) rotateX(18deg) rotateY(-10deg) skewY(-2deg);
          filter: drop-shadow(0 16px 32px rgba(46,125,50,0.25));
        }
        .hover\:cube-lift:hover {
          box-shadow: 0 24px 48px 0 rgba(46,125,50,0.18), 0 2px 8px 0 rgba(0,0,0,0.08);
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default SetupAccount;

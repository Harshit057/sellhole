import React, { useState } from 'react';

const OtpVerification = ({ email, onVerified }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resent, setResent] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // TODO: Replace with real API call
    setTimeout(() => {
      setLoading(false);
      // For now, allow any OTP to pass
      onVerified();
      // If you want to require a specific OTP, restore the check below:
      // if (otp === '123456') {
      //   onVerified();
      // } else {
      //   setError('Invalid OTP. Please try again.');
      // }
    }, 1000);
  };

  const handleResend = async () => {
    setResent(false);
    setLoading(true);
    setError('');
    // TODO: Replace with real API call to resend OTP
    setTimeout(() => {
      setLoading(false);
      setResent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-green-900 text-center">Verify Your Email</h2>
        <p className="mb-6 text-green-700 text-center">An OTP has been sent to <span className="font-semibold">{email}</span>. Please enter it below to verify your account.</p>
        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            maxLength={6}
            className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg text-center tracking-widest"
            placeholder="Enter OTP"
            required
          />
          {error && <div className="text-red-600 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleResend}
            className="text-green-600 hover:underline font-medium"
            disabled={loading}
          >
            Resend OTP
          </button>
          {resent && <span className="ml-2 text-green-700">OTP resent!</span>}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;

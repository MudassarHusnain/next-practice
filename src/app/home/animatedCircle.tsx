import React from 'react';

const SpinningCircle = () => {
  return (
      <svg
        className="slow-spin h-60 w-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#90EE90" /> {/* Light green */}
            <stop offset="100%" stopColor="#32CD32" /> {/* Darker green */}
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#gradient8)" // Applying the gradient
          strokeWidth="5"
          fill="none"
          strokeDasharray="314.2"
          strokeDashoffset="39.3"
        />
      </svg>
  );
};

export default SpinningCircle;

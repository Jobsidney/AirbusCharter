"use client";

import { useEffect, useState } from "react";

export function FlightAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200">
      {/* Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/60 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-40 h-20 bg-white/50 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/3 w-36 h-18 bg-white/55 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-32 right-1/3 w-28 h-14 bg-white/45 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-80 left-2/3 w-44 h-22 bg-white/50 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Boeing Airplane */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-fly">
        <svg
          width="200"
          height="80"
          viewBox="0 0 200 80"
          className="drop-shadow-2xl"
        >
          {/* Fuselage */}
          <ellipse
            cx="100"
            cy="40"
            rx="60"
            ry="12"
            fill="#0033a0"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          />
          
          {/* Windows */}
          <circle cx="70" cy="40" r="3" fill="#87ceeb" />
          <circle cx="85" cy="40" r="3" fill="#87ceeb" />
          <circle cx="100" cy="40" r="3" fill="#87ceeb" />
          <circle cx="115" cy="40" r="3" fill="#87ceeb" />
          
          {/* Wings */}
          <path
            d="M 60 40 L 20 20 L 25 25 L 60 40 Z"
            fill="#0033a0"
            opacity="0.9"
          />
          <path
            d="M 60 40 L 20 60 L 25 55 L 60 40 Z"
            fill="#0033a0"
            opacity="0.9"
          />
          
          {/* Tail */}
          <path
            d="M 140 40 L 180 30 L 175 40 L 140 40 Z"
            fill="#0033a0"
          />
          <path
            d="M 140 40 L 180 50 L 175 40 L 140 40 Z"
            fill="#0033a0"
          />
          
          {/* Engines */}
          <ellipse
            cx="45"
            cy="25"
            rx="8"
            ry="12"
            fill="#1a1a1a"
          />
          <ellipse
            cx="45"
            cy="55"
            rx="8"
            ry="12"
            fill="#1a1a1a"
          />
          
          {/* Boeing Logo Text */}
          <text
            x="100"
            y="45"
            textAnchor="middle"
            className="text-xs font-bold fill-white"
            fontSize="8"
            fontFamily="Arial, sans-serif"
          >
            BOEING
          </text>
        </svg>
      </div>

      {/* Flight Path Trail */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A24D]/20 to-transparent animate-trail" />
    </div>
  );
}


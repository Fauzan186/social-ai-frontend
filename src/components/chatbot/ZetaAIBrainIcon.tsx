import React from 'react';

interface ZetaAIBrainIconProps {
  size?: number; // height in px, default 180
}

const ZetaAIBrainIcon: React.FC<ZetaAIBrainIconProps> = ({ size = 180 }) => (
  <>
    <style>{`
      @keyframes pulse {
        0% {
          r: 8;
          opacity: 1;
        }
        50% {
          r: 12;
          opacity: 0.5;
        }
        100% {
          r: 8;
          opacity: 1;
        }
      }
      .pulse-circle {
        animation: pulse 2.5s ease-in-out infinite;
        transform-origin: center;
      }
      .pulse-circle.delay-1 {
        animation-delay: 0.5s;
      }
      .pulse-circle.delay-2 {
        animation-delay: 1.2s;
      }

      /* Triangle pulse scale */
      @keyframes trianglePulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.15);
          opacity: 0.7;
        }
      }
      .animated-triangle {
        transform-origin: center;
        animation: trianglePulse 3s ease-in-out infinite;
        fill: white;
      }
    `}</style>

    <svg
      height={size}
      width="auto"
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated ZetaAI brain illustration"
      style={{ display: 'block', height: size, width: 'auto' }}
    >
      {/* Outer subtle glow */}
      <circle cx="160" cy="160" r="150" fill="#911209" fillOpacity="0.05" />

      {/* Brain shape */}
      <path
        d="M160 60c-55 0-80 45-80 100 0 55 45 85 80 85s80-30 80-85c0-55-25-100-80-100z"
        fill="url(#brainGradient)"
        stroke="#911209"
        strokeWidth="4"
      />

      {/* Animated white triangle inside brain */}
      <polygon
        className="animated-triangle"
        points="160,110 130,170 190,170"
      />

      {/* Neural nodes with pulse animation */}
      <circle className="pulse-circle" cx="110" cy="140" r="8" fill="#911209" />
      <circle className="pulse-circle delay-1" cx="210" cy="140" r="8" fill="#911209" />
      <circle className="pulse-circle delay-2" cx="160" cy="200" r="8" fill="#911209" />

      {/* Connecting lines */}
      <line x1="110" y1="140" x2="160" y2="200" stroke="#911209" strokeWidth="3" />
      <line x1="210" y1="140" x2="160" y2="200" stroke="#911209" strokeWidth="3" />
      <line x1="110" y1="140" x2="210" y2="140" stroke="#911209" strokeWidth="3" />

      {/* Chat bubbles with subtle opacity */}
      <rect x="55" y="220" width="50" height="40" rx="10" ry="10" fill="#911209" fillOpacity="0.15" />
      <rect x="215" y="220" width="50" height="40" rx="10" ry="10" fill="#911209" fillOpacity="0.15" />

      {/* Social media dots */}
      <circle cx="80" cy="240" r="6" fill="#911209" />
      <circle cx="240" cy="240" r="6" fill="#911209" />
      <circle cx="260" cy="250" r="6" fill="#911209" />

      <defs>
        <linearGradient id="brainGradient" x1="80" y1="60" x2="240" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#911209" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4D0604" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  </>
);

export default ZetaAIBrainIcon;

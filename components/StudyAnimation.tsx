import React from 'react';

const StudyAnimation: React.FC = () => {
  const particles = React.useMemo(() => 
    Array.from({ length: 150 }).map(() => ({
      cx: Math.random() * 300,
      cy: 169, // Start at the bottom edge of the viewbox
      r: Math.random() * 1.2 + 0.3,
      delay: `-${Math.random() * 40}s`,
      duration: `${Math.random() * 20 + 20}s`,
    })), []);

  const hariParticles = React.useMemo(() =>
    Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 300,
      y: 169, // Start at the bottom edge of the viewbox
      size: Math.random() * 4 + 6,
      delay: `-${Math.random() * 40}s`,
      duration: `${Math.random() * 25 + 25}s`,
    })), []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <svg viewBox="0 0 300 169" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nebula" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(251, 146, 60, 0.3)" />
              <stop offset="70%" stopColor="rgba(124, 58, 237, 0.2)" />
              <stop offset="100%" stopColor="rgba(17, 24, 39, 0)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background nebula effect */}
          <rect width="300" height="169" fill="url(#nebula)" />
          
          {/* Static Stars */}
           <g className="fill-orange-100/70 dark:fill-orange-200/70 opacity-50">
                <circle cx="50" cy="100" r="1" />
                <circle cx="100" cy="30" r="0.5" />
                <circle cx="200" cy="130" r="0.8" />
                <circle cx="250" cy="50" r="1.2" />
                <circle cx="30" cy="20" r="0.7" />
                <circle cx="280" cy="110" r="0.9" />
           </g>

          {/* Animated particles & text */}
          <g className="fill-amber-300/80 dark:fill-amber-200/80" filter="url(#glow)">
            {particles.map((p, i) => (
              <circle 
                key={`p-${i}`} 
                cx={p.cx} 
                cy={p.cy} 
                r={p.r} 
                className="particle-animation" 
                style={{ 
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }} 
              />
            ))}
            {hariParticles.map((p, i) => (
              <text
                key={`h-${i}`}
                x={p.x}
                y={p.y}
                fontSize={p.size}
                className="particle-animation font-lora"
                style={{
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
                opacity="0.8"
              >
                हरि
              </text>
            ))}
          </g>

        </svg>
    </div>
  );
};

export default StudyAnimation;
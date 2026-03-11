import React, { useEffect, useState } from 'react';

const LeafParticles = ({ count = 15, color = "#C9A96A" }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-falling-leaf"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: color,
            opacity: p.opacity,
            borderRadius: '100% 0% 100% 0%',
            transform: `rotate(${p.rotation}deg)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes falling-leaf {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: inherit;
          }
          90% {
            opacity: inherit;
          }
          100% {
            transform: translateY(110vh) rotate(720deg) translateX(50px);
            opacity: 0;
          }
        }
        .animate-falling-leaf {
          animation-name: falling-leaf;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

export default LeafParticles;

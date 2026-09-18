import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Card3D
 * Reusable 3D perspective tilt container with real-time mouse tracking,
 * dynamic holographic sheen reflection, and isometric depth.
 */
export default function Card3D({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  depth = 20,
  glowColor = 'rgba(114, 191, 68, 0.25)',
  ...props
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates from -1 to 1
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    setCoords({
      x: normY * -maxTilt,
      y: normX * maxTilt
    });

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: 1100 }}
      className="relative transform-gpu"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? coords.x : 0,
          rotateY: isHovered ? coords.y : 0,
          scale: isHovered ? scale : 1,
          z: isHovered ? depth : 0
        }}
        transition={{
          type: 'spring',
          damping: 18,
          stiffness: 220,
          mass: 0.6
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
        {...props}
      >
        {/* Dynamic Holographic Glare Follower */}
        {glare && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.16), transparent 70%)`,
              opacity: isHovered ? 1 : 0
            }}
          />
        )}

        {/* Ambient Hover Glow Border Sheen */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-0.5 rounded-[inherit] z-0 blur-sm transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 70%)`,
              opacity: 0.8
            }}
          />
        )}

        {/* Card Inner Content */}
        <div className="relative z-10 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

/**
 * MouseSpotlight
 * Ambient cursor-following radial lighting effect that creates high-end
 * depth and luminescence across dark luxury backgrounds.
 */
export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(114, 191, 68, 0.07), rgba(168, 85, 247, 0.04) 40%, transparent 80%)`
      }}
    />
  );
}

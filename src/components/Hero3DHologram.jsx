import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Shield, Code2, Sparkles } from 'lucide-react';

/**
 * Hero3DHologram
 * A 3D isometric interactive holographic showcase:
 * Features multi-axis orbital 3D rings, a levitating core with the Zetacoding emblem,
 * and 4 floating 3D satellite cards cleanly positioned in 4 corners with zero overlap.
 */
export default function Hero3DHologram() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: y * -18,
      y: x * 18
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-square flex items-center justify-center select-none py-6 my-2"
      style={{ perspective: 1200 }}
    >
      {/* 3D Container with Spring Physics */}
      <motion.div
        animate={{
          rotateX: isHovered ? tilt.x : 4,
          rotateY: isHovered ? tilt.y : -6,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 180,
          mass: 0.8
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient Glow Aura */}
        <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#72bf44]/25 via-[#a855f7]/20 to-[#38bdf8]/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

        {/* 3D Isometric Base Pedestal Grid */}
        <div
          className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-[#72bf44]/30 pointer-events-none"
          style={{
            transform: 'rotateX(72deg) translateZ(-60px)',
            background: 'radial-gradient(circle, rgba(114, 191, 68, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
            boxShadow: '0 0 45px rgba(114, 191, 68, 0.25)'
          }}
        />

        {/* 3D Gyroscope Orbital Rings */}
        {/* Ring 1 - Emerald Outer Track */}
        <div
          className="absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full border-2 border-dashed border-[#72bf44]/60 pointer-events-none animate-spin-slow"
          style={{
            transform: 'rotateX(68deg) rotateY(15deg) translateZ(0px)',
            boxShadow: '0 0 25px rgba(114, 191, 68, 0.25)'
          }}
        />

        {/* Ring 2 - Purple Middle Track (Reverse Spin) */}
        <div
          className="absolute w-52 sm:w-60 h-52 sm:h-60 rounded-full border-2 border-[#a855f7]/50 pointer-events-none"
          style={{
            transform: 'rotateX(55deg) rotateY(-40deg) translateZ(10px)',
            animation: 'spin-slow 15s linear infinite reverse',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.25)'
          }}
        />

        {/* Ring 3 - High-Tech Cyan Core Orbit */}
        <div
          className="absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-[#38bdf8]/60 pointer-events-none"
          style={{
            transform: 'rotateX(30deg) rotateY(60deg) translateZ(20px)',
            animation: 'spin-slow 10s linear infinite',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.25)'
          }}
        />

        {/* Central 3D Floating Hologram Core */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotateZ: [0, 3, -3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d'
          }}
          className="relative z-20 flex flex-col items-center justify-center"
        >
          {/* Holographic Glowing Core Card */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#1e072b] via-[#2a083d] to-[#0d1f10] border-2 border-[#72bf44] shadow-[0_0_40px_rgba(114,191,68,0.45)] p-3 sm:p-4 flex flex-col items-center justify-center backdrop-blur-xl group cursor-pointer">
            
            {/* Animated Laser Scan Line */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#72bf44] to-transparent top-0 animate-shimmer" />

            {/* Glowing Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/95 p-1.5 shadow-2xl flex items-center justify-center border border-white/20 transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src="/assets/zetacoding_logo_transparent.png"
                alt="ZETACODING"
                className="w-full h-full max-h-7 max-w-7 sm:max-h-8 sm:max-w-8 object-contain filter drop-shadow"
                onError={(e) => { e.target.src = "/assets/page_2_img_1.png"; }}
              />
            </div>

            <div className="mt-1.5 text-center">
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-[#85cc38] uppercase block">
                ZETACODING
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono text-slate-300">
                AI & CLOUD CORE
              </span>
            </div>

            {/* Pulsing Status LED */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#72bf44] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#72bf44] border-2 border-[#1e072b]"></span>
            </span>
          </div>
        </motion.div>

        {/* 4 Orbiting 3D Holographic Satellites - 4 Core Services */}
        
        {/* Satellite 1: Top-Left - Cyber Security Service */}
        <div
          className="absolute -top-1 -left-1 sm:top-1 sm:-left-3 z-30 pointer-events-auto"
          style={{ transform: 'translateZ(65px)' }}
        >
          <Link to="/services">
            <motion.div
              animate={{ y: [4, -6, 4] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#0c101d]/95 border border-[#38bdf8]/60 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-1.5 sm:gap-2.5 hover:scale-105 transition-transform max-w-[155px] sm:max-w-[210px] cursor-pointer group"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#38bdf8]/20 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:scale-110 transition-transform">
                <Shield size={13} className="sm:w-4 sm:h-4" />
              </div>
              <div className="text-left pr-1 truncate">
                <div className="text-[9px] sm:text-[11px] font-black text-white leading-tight truncate group-hover:text-[#38bdf8] transition-colors">
                  Cyber Security
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-[#38bdf8]">
                  VAPT &amp; 24/7 SOC
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Satellite 2: Top-Right - AI Digital Transformation */}
        <div
          className="absolute -top-1 -right-1 sm:top-1 sm:-right-3 z-30 pointer-events-auto"
          style={{ transform: 'translateZ(75px)' }}
        >
          <Link to="/services">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#0c101d]/95 border border-[#72bf44]/60 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-1.5 sm:gap-2.5 hover:scale-105 transition-transform max-w-[155px] sm:max-w-[210px] cursor-pointer group"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#72bf44]/20 border border-[#72bf44]/40 flex items-center justify-center text-[#85cc38] shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles size={13} className="sm:w-4 sm:h-4 animate-spin-slow" />
              </div>
              <div className="text-left pr-1 truncate">
                <div className="text-[9px] sm:text-[11px] font-black text-white leading-tight truncate group-hover:text-[#85cc38] transition-colors">
                  AI Transformation
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-[#85cc38]">
                  SEO &amp; GEO (Pixic AI)
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Satellite 3: Bottom-Left - Web Application Development */}
        <div
          className="absolute -bottom-1 -left-1 sm:bottom-1 sm:-left-3 z-30 pointer-events-auto"
          style={{ transform: 'translateZ(70px)' }}
        >
          <Link to="/services">
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#0c101d]/95 border border-[#f0b31a]/60 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-1.5 sm:gap-2.5 hover:scale-105 transition-transform max-w-[155px] sm:max-w-[210px] cursor-pointer group"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#f0b31a]/20 border border-[#f0b31a]/40 flex items-center justify-center text-[#f0b31a] shrink-0 group-hover:scale-110 transition-transform">
                <Code2 size={13} className="sm:w-4 sm:h-4" />
              </div>
              <div className="text-left pr-1 truncate">
                <div className="text-[9px] sm:text-[11px] font-black text-white leading-tight truncate group-hover:text-[#f0b31a] transition-colors">
                  Web &amp; App Dev
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-[#f0b31a]">
                  AI-Powered Systems
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Satellite 4: Bottom-Right - AI Agents & AI Chatbots */}
        <div
          className="absolute -bottom-1 -right-1 sm:bottom-1 sm:-right-3 z-30 pointer-events-auto"
          style={{ transform: 'translateZ(80px)' }}
        >
          <Link to="/services">
            <motion.div
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-[#0c101d]/95 border border-[#a855f7]/60 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-1.5 sm:gap-2.5 hover:scale-105 transition-transform max-w-[155px] sm:max-w-[210px] cursor-pointer group"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#a855f7]/20 border border-[#a855f7]/40 flex items-center justify-center text-[#c084fc] shrink-0 group-hover:scale-110 transition-transform">
                <Bot size={13} className="sm:w-4 sm:h-4" />
              </div>
              <div className="text-left pr-1 truncate">
                <div className="text-[9px] sm:text-[11px] font-black text-white leading-tight truncate group-hover:text-[#c084fc] transition-colors">
                  AI Agents &amp; Bots
                </div>
                <div className="text-[7px] sm:text-[9px] font-bold text-[#c084fc]">
                  Autonomous Workforce
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

      </motion.div>
    </div>
  );
}

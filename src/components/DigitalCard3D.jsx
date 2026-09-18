import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Wifi, ShieldCheck, Sparkles, Smartphone, Share2, Check, RefreshCw } from 'lucide-react';
import { companyInfo } from '../data/companyData';

/**
 * DigitalCard3D
 * An interactive 3D smart business card mockup with realistic perspective tilt,
 * 3D card flip interaction (front/back), gold/emerald metallic highlights, and NFC simulation.
 */
export default function DigitalCard3D({
  holderName = "Dr. Rajesh Kumar",
  title = "Chief Technology Architect",
  company = "ZETACODING INNOVATIVE SOLUTIONS",
  showFlipButton = true
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: y * -20,
      y: x * 20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 select-none">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full max-w-[340px] sm:max-w-[390px] h-48 sm:h-56 cursor-pointer transform-gpu"
        style={{ perspective: 1200 }}
      >
        <motion.div
          animate={{
            rotateX: isHovered ? tilt.x : 0,
            rotateY: (isHovered ? tilt.y : 0) + (isFlipped ? 180 : 0),
            scale: isHovered ? 1.04 : 1
          }}
          transition={{
            type: 'spring',
            damping: 18,
            stiffness: 200,
            mass: 0.7
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full h-full rounded-2xl shadow-2xl transition-shadow"
        >
          {/* CARD FRONT */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
            className="absolute inset-0 rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[#1b0524] via-[#2d093b] to-[#0c1a10] border-2 border-[#72bf44]/60 shadow-[0_15px_35px_rgba(114,191,68,0.3)] text-white flex flex-col justify-between overflow-hidden"
          >
            {/* Holographic Gloss Foil */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 pointer-events-none animate-shimmer" />

            {/* Top Row: Chip & NFC Icon */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                {/* Gold EMV Chip */}
                <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#f0b31a] via-[#fbbf24] to-[#b45309] border border-amber-300 p-1 flex flex-col justify-between shadow-sm">
                  <div className="w-full h-0.5 bg-amber-900/40 rounded-full" />
                  <div className="w-full h-0.5 bg-amber-900/40 rounded-full" />
                </div>
                <Wifi size={18} className="text-[#85cc38] rotate-90" />
                <span className="text-[10px] font-mono tracking-widest text-[#85cc38] uppercase font-bold">NFC SMART</span>
              </div>

              <div className="w-8 h-8 rounded-lg bg-white/10 p-1 border border-white/20 flex items-center justify-center">
                <img
                  src="/assets/zetacoding_logo_transparent.png"
                  alt="Zetacoding"
                  className="max-h-full object-contain"
                  onError={(e) => { e.target.src = "/assets/page_2_img_1.png"; }}
                />
              </div>
            </div>

            {/* Middle: Name & Title */}
            <div className="relative z-10 my-auto">
              <h4 className="text-xl sm:text-2xl font-black text-white font-display tracking-wide drop-shadow-md">
                {holderName}
              </h4>
              <p className="text-xs text-[#85cc38] font-bold tracking-wider uppercase mt-0.5">
                {title}
              </p>
              <p className="text-[11px] text-slate-300 mt-1 font-semibold truncate">
                {company}
              </p>
            </div>

            {/* Bottom Row: Tap info & Brand */}
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono relative z-10 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1 text-[#85cc38]">
                <Smartphone size={12} />
                <span>TAP TO EXCHANGE</span>
              </span>
              <span className="text-white/80 font-black">ZETACODING • 2026</span>
            </div>
          </div>

          {/* CARD BACK */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className="absolute inset-0 rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[#0c1a10] via-[#1a0a24] to-[#120418] border-2 border-[#85cc38]/60 shadow-[0_15px_35px_rgba(114,191,68,0.3)] text-white flex flex-col justify-between overflow-hidden"
          >
            {/* Magnetic Stripe Bar */}
            <div className="absolute top-4 inset-x-0 h-9 bg-slate-950 border-y border-white/10" />

            <div className="relative z-10 mt-12 flex items-center justify-between gap-4">
              {/* QR Code Container */}
              <div className="w-20 h-20 bg-white rounded-xl p-1.5 shadow-lg border border-[#72bf44] flex items-center justify-center shrink-0">
                <QrCode size={68} className="text-slate-950" />
              </div>

              <div className="space-y-1 text-left text-[11px]">
                <div className="font-bold text-white flex items-center gap-1">
                  <Check size={12} className="text-[#85cc38]" />
                  <span>Instant VCF Auto-Save</span>
                </div>
                <div className="text-slate-300">
                  {companyInfo.phones?.india || "+91 9742682028"}
                </div>
                <div className="text-[#85cc38] font-bold">
                  info@zetacoding.com
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  www.zetacoding.com
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10 font-mono">
              <span>SCAN QR OR TAP NFC</span>
              <span className="text-[#85cc38] font-bold">CLICK TO FLIP FRONT</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Helper Flip Button */}
      {showFlipButton && (
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-[#72bf44]/40 text-xs font-bold transition-all"
        >
          <RefreshCw size={12} className={isFlipped ? 'rotate-180 transition-transform' : ''} />
          <span>Click Card or Here to Flip ({isFlipped ? 'Back' : 'Front'})</span>
        </button>
      )}
    </div>
  );
}

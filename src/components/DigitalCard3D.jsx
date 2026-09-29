import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Wifi, ShieldCheck, Sparkles, Smartphone, Share2, Check, RefreshCw } from 'lucide-react';
import { companyInfo } from '../data/companyData';

/**
 * DigitalCard3D
 * An interactive 3D smart business card mockup with realistic perspective tilt,
 * 3D card flip interaction (front/back), gold/emerald metallic highlights, and NFC simulation.
 * Removed personal name per user instruction; displays sleek corporate brand profile.
 */
export default function DigitalCard3D({
  finish = "Metal Card",
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

  // Dynamic gradient styling based on physical finish
  const getFinishGradient = () => {
    if (finish.includes('Wooden')) {
      return 'from-[#2a170d] via-[#3d2214] to-[#1a0e07] border-[#c28e46]/60 shadow-[0_15px_35px_rgba(194,142,70,0.25)]';
    }
    if (finish.includes('PVC')) {
      return 'from-[#0b101b] via-[#151e2e] to-[#080d16] border-slate-500/60 shadow-[0_15px_35px_rgba(100,116,139,0.2)]';
    }
    if (finish.includes('Keychain')) {
      return 'from-[#1a082b] via-[#2d0e4a] to-[#12051f] border-purple-500/60 shadow-[0_15px_35px_rgba(168,85,247,0.25)]';
    }
    // Default Metal Card (Brushed Titanium / Emerald)
    return 'from-[#141b24] via-[#1c2633] to-[#0d141b] border-[#72bf44]/70 shadow-[0_15px_35px_rgba(114,191,68,0.3)]';
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 select-none w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full max-w-[340px] sm:max-w-[390px] h-52 sm:h-56 cursor-pointer transform-gpu"
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
            className={`absolute inset-0 rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${getFinishGradient()} border-2 text-white flex flex-col justify-between overflow-hidden`}
          >
            {/* Holographic Gloss Foil */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 pointer-events-none animate-shimmer" />

            {/* Top Row: Chip & NFC Icon */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2.5">
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

            {/* Middle: Brand Emblem & Corporate Digital Pass (No personal name per specification) */}
            <div className="relative z-10 my-auto text-left space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white font-display tracking-wider block">
                  ZETA<span className="text-[#85cc38]">CODING</span>
                </span>
              </div>
              <p className="text-xs text-[#85cc38] font-mono font-bold tracking-widest uppercase">
                SMART NFC BUSINESS PROFILE
              </p>
              <p className="text-[11px] text-slate-300 font-medium">
                Tap to Connect • Instant Lead &amp; vCard Sync
              </p>
            </div>

            {/* Bottom Row: Tap info & Brand */}
            <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono relative z-10 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-[#85cc38] font-bold">
                <Smartphone size={13} />
                <span>TAP TO EXCHANGE</span>
              </span>
              <span className="text-white/80 font-bold uppercase">{finish}</span>
            </div>
          </div>

          {/* CARD BACK */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className="absolute inset-0 rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#0c1a10] via-[#1a0a24] to-[#120418] border-2 border-[#85cc38]/60 shadow-[0_15px_35px_rgba(114,191,68,0.3)] text-white flex flex-col justify-between overflow-hidden"
          >
            {/* Magnetic Stripe Bar */}
            <div className="absolute top-4 inset-x-0 h-9 bg-slate-950 border-y border-white/10" />

            <div className="relative z-10 mt-10 flex items-center justify-between gap-4">
              {/* QR Code Container */}
              <div className="w-20 h-20 bg-white rounded-xl p-1.5 shadow-lg border border-[#72bf44] flex items-center justify-center shrink-0">
                <QrCode size={66} className="text-slate-950" />
              </div>

              <div className="space-y-1 text-left text-[11px]">
                <div className="font-bold text-white flex items-center gap-1">
                  <Check size={12} className="text-[#85cc38]" />
                  <span>Instant VCF Auto-Save</span>
                </div>
                <div className="text-slate-300 font-mono font-bold">
                  {companyInfo.phones?.india || "+91 8867845719"}
                </div>
                <div className="text-[#85cc38] font-bold">
                  {companyInfo.emails?.primary || "infor@zetacoding.com"}
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-[#85cc38] bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-white/10 transition-colors"
        >
          <RefreshCw size={12} className={isFlipped ? "rotate-180 transition-transform" : "transition-transform"} />
          <span>Flip Card ({isFlipped ? "Back View" : "Front View"})</span>
        </button>
      )}
    </div>
  );
}

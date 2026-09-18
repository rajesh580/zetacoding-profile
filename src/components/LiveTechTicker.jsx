import React from 'react';
import { 
  ShieldCheck, Award, Building, Sparkles, 
  GraduationCap, Handshake, Zap, Bot, MessageSquare, Globe 
} from 'lucide-react';

export default function LiveTechTicker({ onOpenCertModal }) {
  const tickerItems = [
    { text: 'ISO 9001:2015 Certified (Cert: 23EQLE49)', icon: <Award size={14} className="text-[#f0b31a]" />, action: onOpenCertModal },
    { text: 'Government of Dubai DET License #1485234', icon: <ShieldCheck size={14} className="text-[#85cc38]" />, action: onOpenCertModal },
    { text: 'Govt. of India MSME Registered (UDYAM-KR-03-0447385)', icon: <Building size={14} className="text-[#38bdf8]" /> },
    { text: '14+ Production Enterprise Software Platforms', icon: <Sparkles size={14} className="text-[#85cc38]" /> },
    { text: '25+ AICTE College MOUs & IEEE Research', icon: <GraduationCap size={14} className="text-[#c084fc]" /> },
    { text: '16 Strategic Global Tech Partnerships', icon: <Handshake size={14} className="text-[#2dd4bf]" /> },
    { text: '99.98% Enterprise Cloud SLA Guaranteed', icon: <Zap size={14} className="text-[#f0b31a]" /> },
    { text: 'Official Meta WhatsApp Cloud API Partner', icon: <MessageSquare size={14} className="text-[#85cc38]" /> },
    { text: 'anvex.ai Voice & Vision Autonomous Agents', icon: <Bot size={14} className="text-[#c084fc]" /> },
    { text: 'UAE Corporate Tax & VAT TRN Compliant', icon: <Globe size={14} className="text-[#38bdf8]" /> },
  ];

  // Duplicate items array to create seamless loop
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full relative overflow-hidden py-3 bg-[#06080e]/90 border-y border-[#72bf44]/20 select-none">
      
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Strip */}
      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            onClick={item.action}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono font-medium transition-all ${
              item.action ? 'cursor-pointer hover:border-[#72bf44] hover:bg-[#72bf44]/10 text-slate-200 hover:text-white' : 'text-slate-300'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Milestone, GraduationCap, CheckCircle, 
  ShieldCheck, HeartHandshake, Zap, Clock, Users, DollarSign,
  ChevronRight, Award, Compass, Sparkles, Check, Globe,
  Target, Eye, Gem, Rocket, Shield, Activity, Layers,
  Database, ArrowDown, CheckCircle2, TrendingUp, Radio,
  Flame, Cpu, ExternalLink, ChevronDown, ChevronUp
} from 'lucide-react';
import { journeyTimeline, companyInfo } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';
import { playSubtleClick } from '../utils/soundFX';

export default function AboutJourney({ onOpenCertModal }) {
  const [activeYearFilter, setActiveYearFilter] = useState('all');
  const [expandedYear, setExpandedYear] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(null);

  const pillars = [
    {
      icon: <Globe size={26} className="text-[#85cc38]" />,
      title: "Dual-Hub International Footprint",
      desc: "Engineering Innovation Headquarters in Bengaluru (India) and registered corporate office in Dubai (UAE)."
    },
    {
      icon: <ShieldCheck size={26} className="text-[#c084fc]" />,
      title: "Certified & Audited Compliance",
      desc: "Operating with ISO 9001:2015 quality standards, MSME Govt. of India registration, UAE DED License, and FTA VAT compliance."
    },
    {
      icon: <Zap size={26} className="text-[#fbbf24]" />,
      title: "Pre-Built Battle-Tested Platforms",
      desc: "Deploy in days instead of months with mature platforms across ERP, WhatsApp Cloud CRM, Restaurant OS, and AI agents."
    },
    {
      icon: <GraduationCap size={26} className="text-[#38bdf8]" />,
      title: "Academic-Industry 4.0 Ecosystem",
      desc: "AICTE-approved partnership network with 25+ universities fostering IEEE projects, student training (STPs), and faculty upskilling."
    }
  ];

  const valuesList = [
    {
      icon: <ShieldCheck size={22} className="text-[#85cc38]" />,
      title: "Integrity & Compliance",
      desc: "Full statutory compliance under Government of India MSME and UAE DED licensing, backed by ISO 9001:2015 audited quality governance."
    },
    {
      icon: <Zap size={22} className="text-[#38bdf8]" />,
      title: "Engineering Excellence",
      desc: "Relentless focus on high-throughput architectures, sub-second latency, zero downtime, and battle-tested enterprise scalability."
    },
    {
      icon: <HeartHandshake size={22} className="text-[#c084fc]" />,
      title: "Client-First Partnership",
      desc: "Transparent commercial terms, dedicated architecture consultations, and responsive customer service for long-term compounding growth."
    },
    {
      icon: <GraduationCap size={22} className="text-[#fbbf24]" />,
      title: "Knowledge & Innovation",
      desc: "Empowering next-generation tech talent through IEEE project incubation, faculty development, and cutting-edge GEO and AI research."
    }
  ];

  return (
    <section id="about" className="py-4 space-y-20 text-slate-100 w-full">
      
      {/* 1. AI GENERATED IMAGE SHOWCASE & ABOUT THE COMPANY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* Left Column: About The Company */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider border border-[#72bf44]/30 shadow-sm">
            <Building2 size={14} className="text-[#85cc38]" />
            <span>Corporate Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            About the <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">Company</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            <strong className="text-white font-bold">ZETACODING</strong> is a technology-driven innovation organization delivering industry-grade software, autonomous artificial intelligence solutions, and academic-industry collaborations across <strong className="text-white">India</strong> and the <strong className="text-white">United Arab Emirates</strong>.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            With engineering innovation headquarters in <strong className="text-white">Bengaluru, Karnataka, India</strong> and an established international corporate office in <strong className="text-[#85cc38]">Deira, Dubai (UAE)</strong> under the Department of Economy and Tourism (DET), Zetacoding serves as a high-velocity digital catalyst for modern enterprises.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="text-[11px] text-slate-400 font-mono block">India Entity</span>
              <strong className="text-xs text-white block mt-0.5 font-bold">Innovative Solutions</strong>
              <span className="text-[10px] text-[#85cc38] font-mono">ISO 9001 &amp; MSME</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="text-[11px] text-slate-400 font-mono block">Dubai LLC</span>
              <strong className="text-xs text-white block mt-0.5 font-bold">Information Tech LLC</strong>
              <span className="text-[10px] text-[#38bdf8] font-mono">DED #1485234 &amp; VAT</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 font-mono block">Academic Network</span>
              <strong className="text-xs text-white block mt-0.5 font-bold">25+ AICTE Colleges</strong>
              <span className="text-[10px] text-[#c084fc] font-mono">50,000+ Students</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: AI Generated Image with High-Tech Holographic Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <div className="w-full relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#72bf44]/30 via-[#9333ea]/30 to-[#38bdf8]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#72bf44]/50 shadow-[0_0_50px_rgba(114,191,68,0.25)] bg-[#0d0417]">
              <img 
                src="/assets/about_hero_ai.jpg" 
                alt="Zetacoding AI Enterprise Visualization" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-video sm:aspect-[16/10]"
              />
              
              {/* Overlay Holographic Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0417] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#85cc38] font-bold block">
                    AI Architecture Hub
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white font-display">
                    Neural Enterprise Innovation Core
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-[#72bf44]/50 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#72bf44] animate-ping" />
                  <span className="text-[10px] font-mono text-[#85cc38] font-bold">2026+ Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 2. MISSION, VISION & VALUES SECTION */}
      <div className="w-full space-y-10">
        
        {/* Mission & Vision Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          
          {/* Mission Card */}
          <Card3D maxTilt={8} className="p-6 sm:p-8 md:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#72bf44]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#72bf44]/15 border border-[#72bf44]/40 text-[#85cc38] flex items-center justify-center shadow-lg">
                <Target size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Our <span className="text-[#85cc38]">Mission</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To empower global enterprises, scaling businesses, and academic institutions with intelligent, resilient, and scalable technology architectures. We eliminate operational friction through AI automation, robust cloud ERP, and cybersecurity defense—transforming ambitious ideas into enterprise reality.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#85cc38]">
              <CheckCircle size={15} />
              <span>Measurable Business ROI &amp; Operational Efficiency</span>
            </div>
          </Card3D>

          {/* Vision Card */}
          <Card3D maxTilt={8} className="p-6 sm:p-8 md:p-10 rounded-3xl glass-panel-glow border border-[#38bdf8]/40 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-[#38bdf8] flex items-center justify-center shadow-lg">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Our <span className="text-[#38bdf8]">Vision</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                To become the premier international technology powerhouse bridging India and the Middle East, pioneering Generative Engine Optimization (GEO), multimodal autonomous AI agents, and frictionless enterprise ecosystems that define how commerce is transacted in the next decade.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#38bdf8]">
              <Sparkles size={15} />
              <span>Next-Gen 2026+ Global Innovation Leadership</span>
            </div>
          </Card3D>

        </div>

        {/* Corporate Values */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl glass-panel border border-white/10 text-left">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
              <Gem size={13} />
              <span>Core Principles</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Our Guiding <span className="text-[#85cc38]">Values</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((val, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/60 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold text-white font-display">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. WHY SCALING BUSINESSES CHOOSE ZETACODING (Placed here per Page 2: "Place this to about us") */}
      <div className="w-full text-left space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
            <Shield size={14} className="text-[#85cc38]" />
            <span>Enterprise Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Why Scaling Businesses <span className="text-[#85cc38]">Choose Zetacoding</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl">
            A battle-tested foundation delivering compliant, pre-built enterprise suites across India, the United Arab Emirates, and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {pillars.map((pillar, idx) => (
            <Card3D 
              key={idx} 
              maxTilt={14} 
              className="rounded-3xl glass-panel p-6 border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#72bf44]/60 transition-all">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-black text-white mb-2 font-display">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#85cc38] font-bold">
                <CheckCircle size={14} />
                <span>Enterprise Benchmark</span>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      {/* 4. OUR JOURNEY - ULTRA-HIGH-IMPACT REVERSE CHRONOLOGICAL ROADMAP (2026+ down to 2021) */}
      <div className="w-full text-left space-y-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm">
              <Milestone size={14} className="text-[#85cc38]" />
              <span>Reverse Chronological Evolution Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
              Our Journey <span className="bg-gradient-to-r from-[#85cc38] via-[#72bf44] to-[#38bdf8] bg-clip-text text-transparent">So Far</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Explore our journey starting with our active 2026+ frontier in Autonomous AI Agents and GEO citation dominance, descending through international expansion in Dubai, enterprise platforms, accreditations, and our 2021 founding genesis.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#85cc38]/15 border border-[#85cc38]/40 text-[11px] font-mono font-bold text-[#85cc38] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#85cc38] animate-ping" />
              <span>2026+ Active Frontier</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400 shadow-sm">
              <ArrowDown size={13} className="text-[#85cc38] animate-bounce" />
              <span>Descending to 2021</span>
            </span>
          </div>
        </AnimatedSection>

        {/* Interactive Year Controller / Milestone Scrub Navigator */}
        <div className="flex flex-wrap items-center justify-start gap-2 p-2.5 rounded-2xl bg-[#140625]/80 border border-white/10 backdrop-blur-xl shadow-lg">
          <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400 pl-2 pr-1 flex items-center gap-1.5">
            <Radio size={13} className="text-[#85cc38] animate-pulse" />
            <span className="hidden sm:inline">Milestone Filter:</span>
          </span>

          <button
            onClick={() => {
              playSubtleClick();
              setActiveYearFilter('all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeYearFilter === 'all'
                ? 'bg-gradient-to-r from-[#85cc38] to-[#72bf44] text-slate-950 font-black shadow-[0_0_15px_rgba(114,191,68,0.5)] scale-105'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            All Milestones (5 Phases)
          </button>

          {journeyTimeline.map((jt) => {
            const isSelected = activeYearFilter === jt.year;
            return (
              <button
                key={jt.year}
                onClick={() => {
                  playSubtleClick();
                  setActiveYearFilter(activeYearFilter === jt.year ? 'all' : jt.year);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'text-slate-950 font-black shadow-lg scale-105'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
                style={{
                  backgroundColor: isSelected ? jt.color : undefined,
                  boxShadow: isSelected ? `0 0 16px ${jt.color}60` : undefined
                }}
              >
                <span>{jt.year}</span>
                <span className="text-[10px] opacity-85 hidden md:inline">• {jt.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Infographic Visual Diagram Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-14 rounded-3xl glass-panel-glow border border-[#72bf44]/30 relative overflow-hidden shadow-2xl">
          {/* Ambient Cosmic Purple & Green Light Nebulae with smooth breathing animation */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#72bf44]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#9333ea]/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#38bdf8]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

          {/* Central Vertical Laser Spine (Desktop) */}
          <div className="hidden lg:block absolute top-16 bottom-24 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#85cc38] via-[#38bdf8] via-[#c084fc] via-[#fbbf24] to-[#2dd4bf] shadow-[0_0_20px_rgba(114,191,68,0.6)] z-0 rounded-full">
            {/* Animated Laser Pulse 1 traveling down */}
            <motion.div 
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="w-3 h-20 -ml-[3px] rounded-full bg-gradient-to-b from-transparent via-white to-[#85cc38] shadow-[0_0_25px_#ffffff]"
            />
            {/* Animated Laser Pulse 2 traveling down staggered */}
            <motion.div 
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 5.5, delay: 1.8, repeat: Infinity, ease: "linear" }}
              className="w-3 h-16 -ml-[3px] rounded-full bg-gradient-to-b from-transparent via-cyan-200 to-[#38bdf8] shadow-[0_0_20px_#38bdf8]"
            />
          </div>

          {/* Mobile Left Laser Spine */}
          <div className="lg:hidden absolute top-12 bottom-20 left-6 sm:left-7 w-1 bg-gradient-to-b from-[#85cc38] via-[#38bdf8] via-[#c084fc] via-[#fbbf24] to-[#2dd4bf] shadow-[0_0_12px_rgba(114,191,68,0.5)] z-0 rounded-full" />

          {/* Timeline Items List */}
          <div className="space-y-12 sm:space-y-20 relative z-10">
            {journeyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isFirst = idx === 0;
              const isFilterMatch = activeYearFilter === 'all' || activeYearFilter === item.year;
              const isExpanded = expandedYear === item.year;
              const isHovered = hoveredYear === item.year;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.06 * idx }}
                  className={`relative transition-all duration-500 ${
                    !isFilterMatch ? 'opacity-30 blur-[0.5px] scale-[0.98]' : 'opacity-100'
                  }`}
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* Desktop Layout: 2-sided alternating */}
                  <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 items-center">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 flex justify-end relative">
                      {isEven ? (
                        <div className="w-full relative">
                          <TimelineCard 
                            item={item} 
                            isFirst={isFirst} 
                            isExpanded={isExpanded}
                            onToggleExpand={() => {
                              playSubtleClick();
                              setExpandedYear(isExpanded ? null : item.year);
                            }}
                            isSelected={activeYearFilter === item.year}
                          />
                          {/* Animated Cable connecting Left Card to Center Node */}
                          <TimelineCable direction="right" color={item.color} isHovered={isHovered} />
                        </div>
                      ) : (
                        <div className="w-full flex justify-end relative">
                          <TimelineTelemetry item={item} align="right" isHovered={isHovered} />
                          {/* Animated Cable connecting Left Telemetry to Center Node */}
                          <TimelineCable direction="right" color={item.color} isHovered={isHovered} isDashed={true} />
                        </div>
                      )}
                    </div>

                    {/* Center Column: Node */}
                    <div className="lg:col-span-2 flex flex-col items-center justify-center relative">
                      <TimelineCenterNode 
                        item={item} 
                        isFirst={isFirst} 
                        isSelected={activeYearFilter === item.year}
                        isHovered={isHovered}
                        onSelect={(yr) => setActiveYearFilter(activeYearFilter === yr ? 'all' : yr)}
                      />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 flex justify-start relative">
                      {!isEven ? (
                        <div className="w-full relative">
                          <TimelineCard 
                            item={item} 
                            isFirst={isFirst} 
                            isExpanded={isExpanded}
                            onToggleExpand={() => {
                              playSubtleClick();
                              setExpandedYear(isExpanded ? null : item.year);
                            }}
                            isSelected={activeYearFilter === item.year}
                          />
                          {/* Animated Cable connecting Right Card to Center Node */}
                          <TimelineCable direction="left" color={item.color} isHovered={isHovered} />
                        </div>
                      ) : (
                        <div className="w-full flex justify-start relative">
                          <TimelineTelemetry item={item} align="left" isHovered={isHovered} />
                          {/* Animated Cable connecting Right Telemetry to Center Node */}
                          <TimelineCable direction="left" color={item.color} isHovered={isHovered} isDashed={true} />
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Mobile & Tablet Layout (Left-aligned spine) */}
                  <div className="lg:hidden flex items-start gap-4 sm:gap-6 pl-0">
                    <div className="flex flex-col items-center shrink-0 relative z-10 pt-1">
                      <TimelineMobileNode 
                        item={item} 
                        isFirst={isFirst} 
                        isSelected={activeYearFilter === item.year}
                        onSelect={(yr) => setActiveYearFilter(activeYearFilter === yr ? 'all' : yr)}
                      />
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <TimelineCard 
                        item={item} 
                        isFirst={isFirst} 
                        isExpanded={isExpanded}
                        onToggleExpand={() => {
                          playSubtleClick();
                          setExpandedYear(isExpanded ? null : item.year);
                        }}
                        isSelected={activeYearFilter === item.year}
                      />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Infographic Footer Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs relative z-10">
            <div className="flex items-center gap-3 text-slate-300 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#72bf44]/15 border border-[#72bf44]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(114,191,68,0.3)]">
                <Sparkles size={18} className="text-[#85cc38] animate-pulse" />
              </div>
              <div>
                <strong className="text-white font-bold block text-sm">5+ Years of Audited Innovation</strong>
                <span className="text-slate-400 text-xs">From IEEE Academic Lab in Bengaluru to International Corporate LLC in Dubai</span>
              </div>
            </div>

            <button
              onClick={() => {
                playSubtleClick();
                if (onOpenCertModal) onOpenCertModal();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl btn-3d-green text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg group cursor-pointer"
            >
              <ShieldCheck size={16} className="group-hover:scale-110 transition-transform" />
              <span>Verify Accreditations &amp; Licenses</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

function renderTimelineIcon(iconName, color, size = 16) {
  switch (iconName) {
    case 'Rocket':
      return <Rocket size={size} style={{ color }} />;
    case 'Globe':
      return <Globe size={size} style={{ color }} />;
    case 'Database':
      return <Database size={size} style={{ color }} />;
    case 'ShieldCheck':
      return <ShieldCheck size={size} style={{ color }} />;
    case 'GraduationCap':
      return <GraduationCap size={size} style={{ color }} />;
    default:
      return <Sparkles size={size} style={{ color }} />;
  }
}

function TimelineCable({ direction = "left", color, isHovered, isDashed = false }) {
  return (
    <div className={`hidden lg:flex items-center absolute top-1/2 -translate-y-1/2 ${
      direction === 'right' ? '-right-10 w-10' : '-left-10 w-10'
    } h-6 pointer-events-none z-0 overflow-visible`}>
      <svg className="w-full h-full overflow-visible">
        {/* Glow Line */}
        <line 
          x1={direction === 'right' ? '0%' : '100%'} 
          y1="50%" 
          x2={direction === 'right' ? '100%' : '0%'} 
          y2="50%" 
          stroke={color} 
          strokeWidth="2" 
          strokeOpacity={isHovered ? "0.9" : "0.35"}
        />
        {/* Animated Traveling Laser Pulses */}
        <motion.line 
          x1={direction === 'right' ? '0%' : '100%'} 
          y1="50%" 
          x2={direction === 'right' ? '100%' : '0%'} 
          y2="50%" 
          stroke={color} 
          strokeWidth="3.5" 
          strokeDasharray={isDashed ? "3 6" : "6 12"}
          animate={{ strokeDashoffset: direction === 'right' ? [0, -36] : [0, 36] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
        {/* Terminal Dot */}
        <circle 
          cx={direction === 'right' ? '100%' : '0%'} 
          cy="50%" 
          r="3" 
          fill={color} 
        />
      </svg>
    </div>
  );
}

function TimelineCenterNode({ item, isFirst, isSelected, isHovered, onSelect }) {
  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => {
        playSubtleClick();
        onSelect(item.year);
      }}
      title={`Click to filter & focus ${item.year} - ${item.title}`}
    >
      {/* Outer Pulse Glow Halo */}
      {(isFirst || isSelected || isHovered) && (
        <span 
          className="absolute -inset-4 rounded-3xl blur-xl animate-pulse -z-10 transition-opacity duration-300" 
          style={{ backgroundColor: `${item.color}40` }}
        />
      )}

      {/* Rotating Sci-Fi Ring 1 (Clockwise) */}
      <div 
        className="absolute -inset-3 rounded-full border border-dashed pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity"
        style={{ 
          borderColor: item.color,
          animation: 'spin 12s linear infinite'
        }}
      />

      {/* Rotating Sci-Fi Ring 2 (Counter-Clockwise) */}
      <div 
        className="absolute -inset-1.5 rounded-full border border-dotted pointer-events-none opacity-30 group-hover:opacity-80 transition-opacity"
        style={{ 
          borderColor: item.color,
          animation: 'spin 8s linear infinite reverse'
        }}
      />

      {/* Main High-Tech Node Box */}
      <motion.div 
        whileHover={{ scale: 1.15, rotate: [0, -2, 2, 0] }}
        whileTap={{ scale: 0.95 }}
        className={`w-20 h-20 rounded-2xl bg-[#0f041d] border-2 flex flex-col items-center justify-center shadow-2xl relative z-10 transition-all duration-300 ${
          isSelected ? 'ring-4 ring-offset-2 ring-offset-[#0f041d]' : ''
        }`}
        style={{ 
          borderColor: item.color,
          boxShadow: `0 0 25px ${item.color}45`
        }}
      >
        <span className="text-[9px] font-mono font-black uppercase tracking-wider text-slate-400">
          {item.phase}
        </span>
        <span 
          className="text-base font-black font-mono tracking-tight"
          style={{ color: item.color }}
        >
          {item.year}
        </span>
        <div className="mt-0.5">
          {renderTimelineIcon(item.icon, item.color, 14)}
        </div>

        {/* Live indicator beacon for active 2026+ */}
        {isFirst && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85cc38] opacity-80" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#85cc38] border-2 border-[#0f041d]" />
          </span>
        )}
      </motion.div>
    </div>
  );
}

function TimelineMobileNode({ item, isFirst, isSelected, onSelect }) {
  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => {
        playSubtleClick();
        onSelect(item.year);
      }}
    >
      {isFirst && (
        <span className="absolute -inset-1 rounded-2xl bg-[#85cc38]/30 blur-sm animate-pulse -z-10" />
      )}
      <motion.div 
        whileTap={{ scale: 0.92 }}
        className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#0f041d] border-2 flex flex-col items-center justify-center shadow-lg relative z-10 p-1 ${
          isSelected ? 'ring-2 ring-offset-1 ring-offset-[#0f041d]' : ''
        }`}
        style={{ 
          borderColor: item.color,
          boxShadow: `0 0 15px ${item.color}35`
        }}
      >
        <span 
          className="text-xs sm:text-sm font-black font-mono"
          style={{ color: item.color }}
        >
          {item.year}
        </span>
        <div className="mt-0.5">
          {renderTimelineIcon(item.icon, item.color, 12)}
        </div>
        {isFirst && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85cc38] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#85cc38]" />
          </span>
        )}
      </motion.div>
    </div>
  );
}

function TimelineCard({ item, isFirst, isExpanded, onToggleExpand, isSelected }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card3D 
        maxTilt={7}
        className={`w-full p-5 sm:p-7 rounded-3xl glass-panel border transition-all duration-300 relative overflow-hidden group shadow-xl text-left ${
          isSelected 
            ? 'border-2 shadow-[0_0_35px_rgba(114,191,68,0.3)]' 
            : isFirst 
              ? 'border-[#85cc38]/60 shadow-[0_0_30px_rgba(114,191,68,0.2)]' 
              : 'border-white/10 hover:border-white/30'
        }`}
        style={{
          borderColor: isSelected ? item.color : undefined
        }}
      >
        {/* Corner Ambient Glow on Card */}
        <div 
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-45 transition-opacity duration-500"
          style={{ backgroundColor: item.color }}
        />

        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span 
              className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-sm flex items-center gap-1.5"
              style={{ 
                backgroundColor: item.accentBg, 
                color: item.color,
                borderColor: item.borderColor
              }}
            >
              {isFirst && <span className="w-1.5 h-1.5 rounded-full bg-[#85cc38] animate-ping" />}
              <span>{item.status}</span>
            </span>

            <span className="text-[10px] font-mono uppercase font-bold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              {item.badge}
            </span>
          </div>

          {/* Monospace Metric Pill */}
          <span 
            className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-inner"
            style={{ 
              color: item.color,
              borderColor: item.borderColor,
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}
          >
            {item.metric}
          </span>
        </div>

        {/* Animated Progress Track */}
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mb-3.5 border border-white/5">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '100%' }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }} 
            className="h-full rounded-full shadow-sm" 
            style={{ backgroundColor: item.color }} 
          />
        </div>

        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-black text-white font-display group-hover:text-[#85cc38] transition-colors flex items-center gap-2">
            <span>{item.title}</span>
          </h3>
          <p className="text-xs font-semibold mt-0.5" style={{ color: item.color }}>
            {item.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
          {item.desc}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 pt-3 border-t border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Key Milestones &amp; Capabilities:
          </span>
          {item.highlights && item.highlights.map((hl, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
              <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: item.color }} />
              <span className="leading-snug">{hl}</span>
            </div>
          ))}
        </div>

        {/* Expandable Capabilities Deep Dive Accordion */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden pt-4 mt-3 border-t border-white/10 space-y-3"
            >
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 text-xs font-mono">
                <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu size={13} style={{ color: item.color }} />
                  <span>Architecture &amp; Strategic Delivery Impact</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Enterprise-grade governance aligning dual-hub development protocols with zero downtime, regulatory compliance (ISO 9001 &amp; DET #1485234), and production deployments.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-slate-200">Continuous Telemetry</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-slate-200">Dual-Hub Redundancy</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-slate-200">Zero Technical Debt</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Footer Status & Expand Trigger */}
        <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Activity size={12} style={{ color: item.color }} />
            <span>Timeline Record • {item.year}</span>
          </div>

          <button
            onClick={onToggleExpand}
            className="inline-flex items-center gap-1 text-[11px] font-bold hover:text-white transition-colors px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
            style={{ color: isExpanded ? item.color : undefined }}
          >
            <span>{isExpanded ? 'Less' : 'Scope'}</span>
            {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </Card3D>
    </motion.div>
  );
}

function TimelineTelemetry({ item, align = "left", isHovered }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`w-full max-w-sm ${align === 'right' ? 'text-right' : 'text-left'} space-y-3 p-5 rounded-3xl bg-white/[0.03] border transition-all duration-300 shadow-xl backdrop-blur-md relative overflow-hidden ${
        isHovered ? 'border-white/30 shadow-2xl' : 'border-white/10'
      }`}
      style={{
        boxShadow: isHovered ? `0 0 25px ${item.color}25` : undefined
      }}
    >
      {/* Top Header with Equalizer Visualizer */}
      <div className={`flex items-center gap-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {/* Animated Live Equalizer Waves */}
        <div className="flex items-center gap-1">
          <motion.span 
            animate={{ height: ['4px', '14px', '6px'] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <motion.span 
            animate={{ height: ['12px', '6px', '16px'] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <motion.span 
            animate={{ height: ['6px', '16px', '8px'] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <motion.span 
            animate={{ height: ['14px', '8px', '14px'] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 rounded-full"
            style={{ backgroundColor: item.color }}
          />
        </div>

        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
          Telemetry HUD
        </span>
      </div>

      <div className="text-2xl font-black font-mono tracking-tight" style={{ color: item.color }}>
        {item.year}
      </div>

      <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">
        {item.badge}
      </div>

      {/* Terminal Style Stat Grid */}
      <div className="p-3 rounded-2xl bg-black/50 border border-white/10 text-xs font-mono space-y-1.5 shadow-inner">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Impact Metric:</span>
          <span className="font-bold" style={{ color: item.color }}>{item.metric}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Phase Cycle:</span>
          <span className="text-white font-bold">{item.phase}</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Status:</span>
          <span className="text-slate-300 font-bold">{item.status}</span>
        </div>
      </div>

      {/* Telemetry Highlight Chips */}
      <div className={`flex flex-wrap gap-1.5 pt-1 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {item.highlights && item.highlights.slice(0, 2).map((h, i) => (
          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
            {h.split(' ').slice(0, 3).join(' ')}...
          </span>
        ))}
      </div>
    </motion.div>
  );
}

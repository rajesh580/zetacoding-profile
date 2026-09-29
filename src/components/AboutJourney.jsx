import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Milestone, GraduationCap, CheckCircle, 
  ShieldCheck, HeartHandshake, Zap, Clock, Users, DollarSign,
  ChevronRight, Award, Compass, Sparkles, Check, Globe,
  Target, Eye, Gem, Rocket, Shield, Activity, Layers
} from 'lucide-react';
import { journeyTimeline, companyInfo } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';

export default function AboutJourney({ onOpenCertModal }) {
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

      {/* 4. OUR JOURNEY - INFOGRAPHIC PICTURE (Redesigned per Page 4: "Our journey – make infographic picture") */}
      <div className="w-full text-left space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
            <Milestone size={14} className="text-[#85cc38]" />
            <span>Infographic Evolution Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Our Journey <span className="text-[#85cc38]">So Far</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            From humble beginnings in 2021 to a dual-hub international technology ecosystem.
          </p>
        </div>

        {/* Infographic Visual Diagram Card */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl glass-panel-glow border border-[#72bf44]/40 relative overflow-hidden shadow-2xl">
          {/* Ambient Cosmic Lights */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#72bf44]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#9333ea]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Central Connecting Flow Track (Desktop) */}
          <div className="hidden lg:block absolute top-[94px] left-16 right-16 h-1 bg-gradient-to-r from-[#72bf44]/30 via-[#85cc38] to-[#38bdf8] shadow-[0_0_12px_#72bf44] z-0" />

          {/* Milestone Infographic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {journeyTimeline.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Node Pill with Step Indicator */}
                <div className="w-14 h-14 rounded-2xl bg-[#140625] border-2 border-[#72bf44] text-[#85cc38] flex items-center justify-center font-black text-base shadow-[0_0_20px_rgba(114,191,68,0.4)] group-hover:scale-110 transition-transform mb-4 shrink-0 relative">
                  <span>{item.year.replace('+', '')}</span>
                  {item.year.includes('+') && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#72bf44] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#72bf44]"></span>
                    </span>
                  )}
                </div>

                {/* Card Box */}
                <Card3D 
                  maxTilt={10} 
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/60 transition-all flex flex-col justify-between h-full shadow-lg"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase font-black px-2.5 py-0.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/30 inline-block">
                      {item.badge}
                    </span>
                    <h4 className="text-sm font-black text-white font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Phase 0{idx + 1}</span>
                    <CheckCircle size={13} className="text-[#85cc38]" />
                  </div>
                </Card3D>
              </div>
            ))}
          </div>

          {/* Infographic Footer Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300 text-center sm:text-left">
              <Sparkles size={16} className="text-[#85cc38] shrink-0" />
              <span>5+ Years of Proven Innovation: From IEEE Academic Roots to Dual-Hub Enterprise Deployment</span>
            </div>

            <button
              onClick={onOpenCertModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/20 transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <ShieldCheck size={14} />
              <span>Verify Accreditations &amp; Licenses</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

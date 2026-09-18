import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Milestone, GraduationCap, CheckCircle, 
  ShieldCheck, HeartHandshake, Zap, Clock, Users, DollarSign,
  ChevronRight, Award, Compass, Sparkles, Check
} from 'lucide-react';
import { journeyTimeline } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';

export default function AboutJourney({ onOpenCertModal }) {
  return (
    <section id="about" className="py-4 space-y-16 text-slate-100 w-full">
      
      {/* Section Header */}
      <AnimatedSection className="text-left w-full">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
          <Compass size={14} className="text-[#85cc38] animate-spin" />
          <span>Who We Are & Our Evolution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
          About <span className="text-[#85cc38]">ZETACODING</span>
        </h2>
        <p className="mt-2 text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
          A technology-driven innovation powerhouse delivering high-impact solutions across AI, IoT, Enterprise Cloud Applications, and Industry-Academic collaborations.
        </p>
      </AnimatedSection>

      {/* About Grid Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
        
        {/* Left Column: Global Footprint & 4 Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/30 space-y-4 shadow-xl">
            <h3 className="text-2xl font-black text-white flex items-center gap-2.5 font-display">
              <Building2 className="text-[#85cc38]" size={26} />
              <span>Global Footprint: India & U.A.E</span>
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              Headquartered in <strong className="text-white">Bengaluru</strong> with a branch in <strong className="text-white">Mangaluru, Karnataka, India</strong>, and an established international presence through <strong className="text-[#85cc38]">ZETACODING INFORMATION TECHNOLOGY L.L.C</strong>, registered under the Department of Economic Development, <strong className="text-[#85cc38]">Dubai, U.A.E.</strong>
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Our brand is globally recognized for quality, credibility, and commitment. We are certified with <strong className="text-white">MSME (Govt. of India)</strong>, <strong className="text-white">ISO 9001:2015</strong>, <strong className="text-white">IAF (International Accreditation Forum)</strong>, and <strong className="text-white">AICTE Approved</strong>.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={onOpenCertModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-3d-green text-slate-950 text-xs font-black shadow-md transition-all"
              >
                <ShieldCheck size={16} />
                <span>Inspect Legal Certifications & Licenses</span>
              </button>
            </div>
          </div>

          {/* Why Choose Us 4-Pillar Grid */}
          <div>
            <h4 className="text-xl font-black text-white mb-4 flex items-center gap-2 font-display">
              <Sparkles size={20} className="text-[#85cc38]" />
              <span>Why Choose Zetacoding?</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'End-to-End Complete Solutions', desc: 'From idea validation to implementation, deployment, and 24/7 post-launch support.' },
                { title: 'Industry-Grade Products', desc: 'Robust, scalable ERP, EAP, RPA, and BI architectures designed for real-world stress.' },
                { title: 'Custom Development Expertise', desc: 'Tailored web, mobile, and cloud software aligned with your specific business model.' },
                { title: 'Smart Automation & AI Insights', desc: 'Real-time telemetry and LLM agents to reduce operational overhead & increase velocity.' }
              ].map((pill, idx) => (
                <Card3D key={idx} maxTilt={12} className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-[#72bf44]/50 h-full">
                  <div className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                    <CheckCircle size={16} className="text-[#85cc38] shrink-0" />
                    <span>{pill.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pill.desc}</p>
                </Card3D>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Commitment */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6 shadow-2xl h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black text-white flex items-center gap-2.5 font-display mb-6">
                <HeartHandshake className="text-[#85cc38]" size={24} />
                <span>Client Commitment</span>
              </h4>

              <div className="space-y-6">
                {[
                  { icon: <DollarSign size={20} />, title: "Reasonable & Transparent Pricing", desc: "Flexible pricing models offering enterprise-grade technology without inflated overhead." },
                  { icon: <Clock size={20} />, title: "Fastest Customer Service", desc: "Rapid turnaround, dedicated account management, and round-the-clock technical assistance." },
                  { icon: <Users size={20} />, title: "Expert Cross-Functional Team", desc: "Experienced software architects, AI researchers, cybersecurity professionals, and business consultants." }
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#85cc38] flex items-center justify-center font-bold shrink-0 group-hover:scale-110 group-hover:border-[#72bf44]/60 transition-all">
                      {c.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-base">{c.title}</h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-[#85cc38] font-mono font-bold mb-0.5">Brand Promise</div>
              <div className="text-xs text-white font-medium italic">
                "Empowering Businesses with Smart Technology — Your Trusted Growth Partner"
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive 3D Journey Timeline */}
      <div className="w-full">
        <div className="text-left mb-8">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display flex items-center gap-2">
            <Milestone className="text-[#85cc38]" size={28} />
            <span>Our Journey So Far</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            From humble beginnings in 2021 to an international technology ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {journeyTimeline.map((item, idx) => (
            <Card3D key={idx} maxTilt={14} className="p-5 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#85cc38] font-display group-hover:scale-110 transition-transform inline-block">
                    {item.year}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#72bf44] group-hover:animate-ping" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5 font-display">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

    </section>
  );
}

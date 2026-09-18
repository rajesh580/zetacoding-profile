import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Database, ShieldCheck, UtensilsCrossed, 
  CreditCard, Sparkles, ArrowRight, CheckCircle2,
  Cpu, Zap, Layers, Server, Activity, Terminal
} from 'lucide-react';
import Card3D from './Card3D';
import { playSubtleClick } from '../utils/soundFX';

export default function InteractiveTechRadar() {
  const [activeDomain, setActiveDomain] = useState('ai-agents');

  const domains = [
    {
      id: 'ai-agents',
      name: 'AI & Autonomous Agents',
      badge: 'PROPRIETARY',
      icon: <Bot size={18} className="text-[#85cc38]" />,
      lead: 'anvex.ai Voice & Vision Engine',
      desc: 'Autonomous 24/7 Voice qualification agents, computer vision safety analysis, and multi-agent LLM systems with sub-350ms response latency.',
      stats: [
        { label: 'Latency', val: '< 350ms' },
        { label: 'Uptime', val: '99.98%' },
        { label: 'Language Models', val: 'Gemini, Claude, GPT' }
      ],
      features: [
        'Voice Qualification Bots with human-like telephony cadence',
        'Computer Vision automated PPE, defect & hazard monitoring',
        'ZetaWap CRM Meta Verified WhatsApp Cloud Automation',
        'Generative Engine Optimization (GEO) for AI citations'
      ],
      link: '/products/anvex-ai'
    },
    {
      id: 'cloud-erp',
      name: 'Enterprise Cloud ERP & SAP',
      badge: 'TIER-1 ALLIANCE',
      icon: <Database size={18} className="text-[#38bdf8]" />,
      lead: 'SAP Business One & Cloud ERP Ecosystem',
      desc: 'Multi-branch finance, inventory, UAE Corporate Tax / VAT compliance, Indian GST e-invoicing, and seamless logistics automation.',
      stats: [
        { label: 'Tax Engines', val: 'UAE VAT + Indian GST' },
        { label: 'Deployment', val: 'Cloud & On-Prem' },
        { label: 'Sync Speed', val: 'Real-time WebSocket' }
      ],
      features: [
        'SAP Business One implementation, licensing & custom add-ons',
        'Cloud ERP & AlignBooks cloud accounting with instant reconciliation',
        'ERPNext open architecture modular enterprise customization',
        'Automated real-time purchase order & inventory sync'
      ],
      link: '/products/cloud-erp'
    },
    {
      id: 'industry-os',
      name: 'Industry Vertical OS',
      badge: 'SPECIALIZED',
      icon: <UtensilsCrossed size={18} className="text-[#fbbf24]" />,
      lead: 'TMBill & Autorox Operating Systems',
      desc: 'Purpose-built software platforms tailored specifically for restaurant chains, QSRs, cloud kitchens, and automotive multi-brand workshops.',
      stats: [
        { label: 'Active Outlets', val: '500+' },
        { label: 'Kiosk Support', val: 'Touch & QR Pay' },
        { label: 'Platform Type', val: 'POS + Inventory + CRM' }
      ],
      features: [
        'TMBill Cloud POS, Captain App, Kitchen Display System (KDS)',
        'Swiggy & Zomato direct aggregator menu sync & dispatch',
        'Autorox garage management: digital job cards, parts inventory & billing',
        'XAPA customer loyalty programs with cashback reward engines'
      ],
      link: '/products/tmbill'
    },
    {
      id: 'smart-hardware',
      name: 'Smart Hardware & Identity',
      badge: 'NFC ECOSYSTEM',
      icon: <CreditCard size={18} className="text-[#a855f7]" />,
      lead: 'NFC Metal Cards & Digital Portfolio Hubs',
      desc: 'Instant contactless contact exchange, tap-to-share dynamic portfolios, lead capture forms, and enterprise team analytics.',
      stats: [
        { label: 'Card Materials', val: 'Stainless Steel, Wood, Matte' },
        { label: 'NFC Range', val: 'Universal iOS & Android' },
        { label: 'Eco Impact', val: '100% Zero-Paper' }
      ],
      features: [
        'One-tap instant vCard transfer with no app installation needed',
        'Embedded custom QR fallback code with branded logo engraving',
        'Enterprise dashboard for central management of corporate team profiles',
        'Built-in analytics tracking clicks, connections, and direct inquiries'
      ],
      link: '/products/digital-business-card'
    },
    {
      id: 'cyber-compliance',
      name: 'Cyber Defense & ISO Governance',
      badge: 'GOV ACCREDITED',
      icon: <ShieldCheck size={18} className="text-[#85cc38]" />,
      lead: 'ISO 9001:2015 & Dubai DET Licensed',
      desc: 'Certified quality management benchmarks, commercial cybersecurity operations, vulnerability assessments, and official international accreditation.',
      stats: [
        { label: 'ISO Standard', val: 'ISO 9001:2015 (23EQLE49)' },
        { label: 'Dubai DED', val: 'DET License #1485234' },
        { label: 'MSME Reg', val: 'Govt. of India Udyam' }
      ],
      features: [
        'Enterprise vulnerability scanning & automated penetration testing',
        'Government-verified legal operations in India and Dubai, UAE',
        'IAF-recognized quality management systems for software lifecycle',
        'Academic-industry collaboration with 25+ AICTE colleges & STPs'
      ],
      link: '/certifications'
    }
  ];

  const current = domains.find(d => d.id === activeDomain) || domains[0];

  return (
    <section className="w-full py-12 text-slate-100">
      <div className="w-full text-left mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 border border-[#72bf44]/30 text-[#85cc38] text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Terminal size={14} className="text-[#85cc38]" />
          <span>Interactive Architecture Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
          Multi-Domain <span className="text-[#85cc38]">Enterprise Capabilities</span>
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl">
          Explore our proprietary and strategic engineering pillars. Switch tabs below to inspect system architecture, verified SLAs, and platform scope.
        </p>
      </div>

      {/* Domain Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
        {domains.map((d) => (
          <button
            key={d.id}
            onClick={() => {
              playSubtleClick();
              setActiveDomain(d.id);
            }}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-md ${
              activeDomain === d.id
                ? 'btn-3d-green text-slate-950 font-black'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            <span>{d.icon}</span>
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* Active Domain 3D Deep Dive Card */}
      <Card3D maxTilt={6} className="w-full p-5 sm:p-8 md:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/40 shadow-2xl relative overflow-hidden">
        
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#72bf44]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left 7 Cols: Overview & Scope */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40">
                {current.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Activity size={12} className="text-[#85cc38]" />
                <span>Production Ready • SLA Guaranteed</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {current.lead}
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Checklist of 4 Core Pillars */}
            <div className="space-y-2.5 pt-2">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-[#85cc38] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to={current.link}
                onClick={playSubtleClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-2xl btn-3d-green text-slate-950 font-black text-xs sm:text-sm shadow-xl transition-all group"
              >
                <span>Explore Full Specifications & Live Demos</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right 5 Cols: Benchmarks & SLA Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#090e18]/90 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#85cc38] uppercase">Technical Metrics</span>
                <span className="w-2 h-2 rounded-full bg-[#72bf44] animate-ping" />
              </div>

              {current.stats.map((st, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 text-xs border-b border-white/5 last:border-0">
                  <span className="text-slate-400 font-medium">{st.label}</span>
                  <span className="font-mono font-bold text-white text-right">{st.val}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles size={20} className="text-[#85cc38] shrink-0" />
              <span>Full compliance with Dubai DET Commercial Regulations and Government of India MSME guidelines.</span>
            </div>
          </div>

        </div>

      </Card3D>
    </section>
  );
}

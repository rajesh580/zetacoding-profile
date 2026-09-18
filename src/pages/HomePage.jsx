import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Award, Globe, 
  CheckCircle2, Bot, Database, Zap, Users, TrendingUp, Layers,
  Building2, Phone, CreditCard, MessageSquare, Sparkles,
  UtensilsCrossed, Wrench, Lock, Check, Landmark, GraduationCap,
  Calendar, Star, BarChart3, Clock, DollarSign, HeartHandshake, Shield
} from 'lucide-react';
import { companyInfo, products, journeyTimeline, techPartners, academicMOUs } from '../data/companyData';
import AnimatedSection, { StaggerContainer, StaggerItem, FadeInScale, FloatingElement } from '../components/AnimatedSection';
import Card3D from '../components/Card3D';
import Hero3DHologram from '../components/Hero3DHologram';
import Interactive3DNetwork from '../components/Interactive3DNetwork';
import LiveTechTicker from '../components/LiveTechTicker';
import GlobalHubTelemetry from '../components/GlobalHubTelemetry';
import InteractiveTechRadar from '../components/InteractiveTechRadar';
import { playSubtleClick } from '../utils/soundFX';

export default function HomePage({ onOpenCertModal }) {
  // Top 6 Featured Platforms for Homepage Spotlight
  const featuredPlatforms = products.slice(0, 6);

  return (
    <div className="space-y-16 pb-20 w-full overflow-hidden text-slate-100">
      
      {/* 1. HERO SECTION - FULL WIDTH STRETCHED FROM LEFT */}
      <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#a855f7]/25 shadow-2xl w-full bg-gradient-to-b from-[#24083d] via-[#160527] to-[#0c0417]">
        
        {/* Interactive 3D Particle Constellation & Cyber Mesh Canvas */}
        <Interactive3DNetwork particleCount={70} maxDistance={160} />

        {/* Ambient Cosmic Purple Glow Lights */}
        <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-[#9333ea]/25 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-[#c026d3]/20 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#72bf44]/12 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />

        {/* Top Header Hub Strip Inside Hero - Stretched Full Width */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-3 sm:p-4 rounded-2xl glass-panel flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 border border-white/10 shadow-xl"
          >
            {/* Wordmark & Tagline */}
            <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-lg border border-[#72bf44] flex items-center justify-center shrink-0">
                <img 
                  src="/assets/zetacoding_logo_transparent.png" 
                  alt="ZETACODING" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = "/assets/page_2_img_1.png"; }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-white font-display tracking-wider">
                    ZETA<span className="text-[#85cc38]">CODING</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] font-bold border border-[#72bf44]/40 font-mono">
                    2026+ ARCHITECTURE
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-300 tracking-wider uppercase">
                  Empowering Businesses with Smart Technology
                </p>
              </div>
            </div>

            {/* Dual Circular Country Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 w-full md:w-auto justify-start md:justify-end">
              {/* India Badge */}
              <FloatingElement duration={4} yOffset={6}>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#72bf44]/60 transition-all cursor-pointer group">
                  <div className="w-7 h-7 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                    <img 
                      src="/assets/zetacoding_india_logo.png" 
                      alt="India" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "/assets/zetacoding_logo_transparent.png"; }}
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-black text-white block leading-tight">INDIA HQ</span>
                    <span className="text-[8px] text-[#85cc38] font-mono">Bengaluru</span>
                  </div>
                </div>
              </FloatingElement>

              {/* UAE Badge */}
              <FloatingElement duration={4.5} yOffset={6}>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#72bf44]/60 transition-all cursor-pointer group">
                  <div className="w-7 h-7 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                    <img 
                      src="/assets/zetacoding_uae_logo.png" 
                      alt="UAE" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "/assets/zetacoding_logo_transparent.png"; }}
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-black text-white block leading-tight">U.A.E LLC</span>
                    <span className="text-[8px] text-[#85cc38] font-mono">Dubai</span>
                  </div>
                </div>
              </FloatingElement>
            </div>

          </motion.div>
        </div>

        {/* Main Hero Content - Stretched from the Left */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Headlines, Trust Badges, CTAs */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 xl:col-span-7 space-y-6 text-left"
            >
              
              {/* Animated Glowing Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold border border-[#72bf44]/40 shadow-[0_0_15px_rgba(114,191,68,0.2)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#72bf44] animate-ping" />
                <span>ISO 9001:2015 Certified • UAE DED License No. 1485234</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display tracking-tight text-left">
                Transforming Global Enterprises with{' '}
                <span className="bg-gradient-to-r from-[#85cc38] via-[#72bf44] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(114,191,68,0.3)]">
                  AI, Cloud ERP & Smart Tech
                </span>
              </h1>

              {/* Paragraph Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal text-left">
                ZETACODING delivers high-throughput enterprise software across <strong className="text-white font-semibold">India</strong> and the <strong className="text-white font-semibold">United Arab Emirates</strong>. From Generative Engine Optimization (GEO) and AlignBooks/SAP ERP to autonomous voice/vision AI agents and university MOUs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl btn-3d-green text-slate-950 font-black text-sm tracking-wide transition-all group"
                >
                  <Layers size={18} className="text-slate-950 group-hover:rotate-12 transition-transform" />
                  <span>Explore 14+ Platforms</span>
                  <ArrowRight size={17} className="text-slate-950 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 hover:border-[#72bf44]/60 backdrop-blur-md shadow-lg transition-all"
                >
                  <Phone size={17} className="text-[#85cc38]" />
                  <span>Contact Global Hubs</span>
                </Link>
              </div>

              {/* Trust Accreditation Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4 flex flex-wrap items-center justify-start gap-5 text-xs font-semibold text-slate-300 border-t border-white/10 text-left"
              >
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <CheckCircle2 size={16} className="text-[#85cc38]" />
                  <span>ISO 9001:2015</span>
                </span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <CheckCircle2 size={16} className="text-[#85cc38]" />
                  <span>UAE DED Licensed (LLC)</span>
                </span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <CheckCircle2 size={16} className="text-[#85cc38]" />
                  <span>MSME Govt of India</span>
                </span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <CheckCircle2 size={16} className="text-[#85cc38]" />
                  <span>AICTE Approved Partner</span>
                </span>
              </motion.div>

            </motion.div>

            {/* Right Column: Interactive 3D Holographic Core & Satellites */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end relative"
            >
              <Hero3DHologram />
            </motion.div>

          </div>
        </div>

      </section>

      {/* INFINITE CYBER MARQUEE TICKER */}
      <LiveTechTicker onOpenCertModal={onOpenCertModal} />

      {/* DUAL-HUB OPERATIONAL TELEMETRY & FIBER BRIDGE */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <GlobalHubTelemetry onOpenCertModal={onOpenCertModal} />
      </section>

      {/* 2. GLOBAL KEY STATS - FULL WIDTH STRETCHED */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {companyInfo.stats.map((stat, idx) => (
            <Card3D 
              key={idx} 
              maxTilt={14}
              className="rounded-2xl glass-panel p-5 text-center cursor-pointer border border-white/10 hover:border-[#72bf44]/50 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-white font-display group-hover:text-[#85cc38] group-hover:scale-110 transition-all duration-300 drop-shadow">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-200 mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#85cc38] font-semibold mt-0.5">
                {stat.sub}
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 3. SPOTLIGHT: TOP ENTERPRISE PLATFORMS - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
              <Zap size={14} className="text-[#85cc38] animate-pulse" />
              <span>Flagship Solutions Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              Enterprise Software <span className="text-[#85cc38]">Spotlight</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base font-normal max-w-3xl">
              Engineered for seamless ERP integration, AI automation, omnichannel CRM, and industry compliance across global markets.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 hover:border-[#72bf44]/60 transition-all self-start md:self-auto"
          >
            <span>View All 14+ Platforms</span>
            <ArrowRight size={14} className="text-[#85cc38]" />
          </Link>
        </AnimatedSection>

        {/* 3D Platform Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
          {featuredPlatforms.map((product) => (
            <Card3D
              key={product.id}
              maxTilt={12}
              className="rounded-3xl glass-panel p-7 border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group text-left"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-black text-[#85cc38] bg-[#72bf44]/15 px-3 py-1 rounded-full border border-[#72bf44]/30">
                    {product.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {product.category}
                  </span>
                </div>

                <Link to={`/products/${product.id}`} className="block group/title">
                  <h3 className="text-xl font-black text-white group-hover/title:text-[#85cc38] transition-colors font-display flex items-center justify-between">
                    <span>{product.name}</span>
                    <ArrowRight size={16} className="text-[#85cc38] opacity-0 group-hover/title:opacity-100 transition-opacity transform group-hover/title:translate-x-1" />
                  </h3>
                </Link>

                <p className="text-xs text-[#85cc38] font-semibold mt-1 mb-3 line-clamp-2">
                  {product.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {product.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  {product.highlights && product.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 text-left">
                      <CheckCircle2 size={14} className="text-[#85cc38] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10">
                <Link
                  to={`/products/${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/20 hover:border-transparent transition-all shadow-md"
                >
                  <span>View Product Details & Scope</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE & CAPABILITIES MATRIX */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <InteractiveTechRadar />
      </section>

      {/* 4. GEO & AI SEARCH REVOLUTION - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow relative overflow-hidden w-full text-left">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9333ea]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7e22ce]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider border border-[#72bf44]/40">
                <Sparkles size={14} className="text-[#85cc38] animate-spin" />
                <span>Next-Gen 2026+ Strategy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
                Generative Engine Optimization <span className="text-[#85cc38]">(GEO)</span>
              </h2>

              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Traditional SEO blue links are becoming obsolete. When high-intent decision makers ask ChatGPT, Google Gemini, or Perplexity for enterprise software recommendations, Zetacoding GEO embeds your brand directly inside the AI response.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/40 transition-all text-left">
                  <div className="text-2xl font-black text-white font-display">4.4x</div>
                  <div className="text-xs text-[#85cc38] font-semibold mt-0.5">Conversion Multiplier</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/40 transition-all text-left">
                  <div className="text-2xl font-black text-white font-display">+30%</div>
                  <div className="text-xs text-[#85cc38] font-semibold mt-0.5">AI Visibility in 60 Days</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/40 transition-all text-left">
                  <div className="text-2xl font-black text-white font-display">3x</div>
                  <div className="text-xs text-[#85cc38] font-semibold mt-0.5">Lower Cost Per Lead</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/geo-ai"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-3d-green text-slate-950 font-black text-xs uppercase tracking-wider"
                >
                  <span>Explore GEO AI Search Engine</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* AI Network Box */}
            <div className="lg:col-span-5 bg-slate-950/70 border border-[#72bf44]/30 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl backdrop-blur-xl text-left">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Bot size={20} className="text-[#85cc38]" />
                <span>Multi-Model AI Citation Network</span>
              </h3>
              <p className="text-xs text-slate-300">
                Continuous citation monitoring across all major foundational models:
              </p>

              <div className="space-y-2.5">
                {[
                  { name: "ChatGPT (OpenAI GPT-4o)", stat: "98% Coverage" },
                  { name: "Google Gemini 2.0", stat: "95% Coverage" },
                  { name: "Perplexity AI Pro", stat: "99% Citation Rate" },
                  { name: "Microsoft Copilot", stat: "94% Coverage" },
                  { name: "Claude 3.5 Sonnet", stat: "92% Coverage" }
                ].map((net, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold text-white hover:border-[#72bf44]/50 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Check size={14} className="text-[#85cc38]" />
                      <span>{net.name}</span>
                    </span>
                    <span className="text-[#85cc38] font-mono text-[11px]">{net.stat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ZETACODING - 4 ENTERPRISE PILLARS - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <AnimatedSection className="text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
            <Shield size={14} className="text-[#85cc38]" />
            <span>Enterprise Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Why Scaling Businesses <span className="text-[#85cc38]">Choose Zetacoding</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {[
            {
              icon: <Globe size={24} className="text-[#85cc38]" />,
              title: "Dual-Hub International Footprint",
              desc: "Engineering Innovation Headquarters in Bengaluru & Mangaluru (India) and registered corporate office in Dubai (UAE)."
            },
            {
              icon: <ShieldCheck size={24} className="text-[#c084fc]" />,
              title: "Certified & Audited Compliance",
              desc: "Operating with ISO 9001:2015 quality standards, MSME Govt. of India registration, UAE DED License, and FTA VAT compliance."
            },
            {
              icon: <Zap size={24} className="text-[#fbbf24]" />,
              title: "Pre-Built Battle-Tested Platforms",
              desc: "Deploy in days instead of months with 14+ mature platforms across ERP, WhatsApp Cloud CRM, Restaurant OS, and AI agents."
            },
            {
              icon: <GraduationCap size={24} className="text-[#38bdf8]" />,
              title: "Academic-Industry 4.0 Ecosystem",
              desc: "AICTE-approved partnership network with 25+ universities fostering IEEE projects, student training (STPs), and faculty upskilling."
            }
          ].map((pillar, idx) => (
            <Card3D key={idx} maxTilt={14} className="rounded-3xl glass-panel p-6 border border-white/10 hover:border-[#72bf44]/50 flex flex-col justify-between h-full group text-left">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#72bf44]/60 transition-all">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-black text-white mb-2 font-display">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#85cc38] font-bold">
                <CheckCircle2 size={14} />
                <span>Enterprise Benchmark</span>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 6. TECHNOLOGY PARTNERS & COLLEGE MOUS SPOTLIGHT - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 w-full text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85cc38] uppercase tracking-wider mb-1">
                <Award size={14} />
                <span>Official Strategic Partners & MOUs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                Trusted by Industry Leaders & <span className="text-[#85cc38]">Top Universities</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Strategic platform integrations and academic MOUs empowering 14,000+ businesses and 50,000+ students.
              </p>
            </div>

            <Link
              to="/academic-mous"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/20 transition-all self-start md:self-auto block"
            >
              <span>View All 10 MOUs & Partners</span>
            </Link>
          </div>

          {/* Partner & College Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
            {[
              { name: "AlignBooks", logo: "/assets/partners/alignbooks.png" },
              { name: "SAP Business One", logo: "/assets/partners/sap.png" },
              { name: "TMBill", logo: "/assets/partners/tmbill.png" },
              { name: "HAEGL", logo: "/assets/partners/haegl.png" },
              { name: "BMSIT & M", logo: "/assets/mous/bmsit.png" },
              { name: "SVIT Bangalore", logo: "/assets/mous/svit.png" },
            ].map((item, idx) => (
              <Card3D 
                key={idx} 
                maxTilt={16}
                className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-full h-16 bg-white/95 rounded-xl p-1.5 flex items-center justify-center mb-2 overflow-hidden shadow-md">
                  <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <span className="text-[11px] font-bold text-white group-hover:text-[#85cc38] transition-colors line-clamp-1">{item.name}</span>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL LOCATIONS & SCOPING CONSULTATION CTA - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#72bf44]/40 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden w-full text-left">
          <div className="space-y-2 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-1 border border-[#72bf44]/40">
              <Building2 size={13} className="animate-spin-slow" />
              <span>India HQ • Dubai LLC Corporate Hub</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
              Ready to Upgrade Your Enterprise with Smart Technology?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
              Connect directly with our engineering architects in Bengaluru HQ or Dubai LLC Office for immediate scoping and customized architecture proposals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-3d-green text-slate-950 font-black text-xs sm:text-sm transition-all text-center"
            >
              Contact Offices
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

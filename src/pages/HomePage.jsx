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
import { companyInfo, products, services, journeyTimeline, techPartners, academicMOUs } from '../data/companyData';
import AnimatedSection, { StaggerContainer, StaggerItem, FadeInScale, FloatingElement } from '../components/AnimatedSection';
import Card3D from '../components/Card3D';
import Hero3DHologram from '../components/Hero3DHologram';
import Interactive3DNetwork from '../components/Interactive3DNetwork';
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

        {/* Main Hero Content - Stretched from the Left */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 pt-4 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Headlines, Trust Badges, CTAs */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 xl:col-span-7 space-y-6 text-left"
            >
              
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
                  <span>Explore 5 Product Suites</span>
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

      {/* DUAL-HUB OPERATIONAL TELEMETRY & FIBER BRIDGE */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <GlobalHubTelemetry onOpenCertModal={onOpenCertModal} />
      </section>

      {/* CORE SERVICES SHOWCASE (Added per Page 1: "Add services here") */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
              <Sparkles size={14} className="text-[#85cc38]" />
              <span>Full-Cycle Engineering &amp; AI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              Enterprise <span className="text-[#85cc38]">Services</span>
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base font-normal max-w-3xl">
              Cutting-edge cybersecurity defense, generative engine optimization (GEO), AI-powered web/mobile development, and autonomous intelligent bots.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs transition-all self-start md:self-auto group shrink-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          {services.map((svc) => (
            <Card3D
              key={svc.id}
              maxTilt={12}
              className="rounded-3xl glass-panel p-6 border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#72bf44]/60 transition-all text-[#85cc38]">
                    {svc.id === 'cyber-security' && <Shield size={22} />}
                    {svc.id === 'digital-transformation' && <Sparkles size={22} />}
                    {svc.id === 'web-app-dev' && <Layers size={22} />}
                    {svc.id === 'ai-agents-chatbots' && <Bot size={22} />}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#85cc38] uppercase bg-[#72bf44]/15 px-2.5 py-1 rounded-full border border-[#72bf44]/30">
                    Active Service
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-[#85cc38] transition-colors font-display mb-1.5">
                  {svc.title}
                </h3>

                <p className="text-xs text-[#85cc38] font-semibold mb-3">
                  {svc.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {svc.desc}
                </p>

                {/* Items checklist */}
                <div className="space-y-1.5 pt-3 border-t border-white/10">
                  {svc.items && svc.items.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-[#85cc38] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/10 hover:border-transparent transition-all shadow-sm"
                >
                  <span>Service Details &amp; Scope</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 2. GLOBAL KEY STATS - Hidden presently per user specification */}
      {/* 
      <section className="hidden w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
      */}

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
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/20 hover:border-[#72bf44]/60 transition-all self-start md:self-auto group"
          >
            <span>View all Services</span>
            <ArrowRight size={14} className="text-[#85cc38] group-hover:text-slate-950 transition-colors" />
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

                {/* Included Solutions & Types */}
                <div className="space-y-2 pt-3 border-t border-white/10 text-left">
                  {product.types && (
                    <>
                      <div className="text-[11px] font-bold text-[#85cc38] uppercase tracking-wider">
                        Included Solutions ({product.types.length}):
                      </div>
                      {product.types.slice(0, 3).map((type, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 size={13} className="text-[#85cc38] shrink-0" />
                          <span className="font-semibold text-white">{type.name}</span>
                          {type.subtype && <span className="text-[11px] text-slate-400 truncate">({type.subtype})</span>}
                        </div>
                      ))}
                      {product.types.length > 3 && (
                        <div className="text-[11px] text-slate-400 pl-5">
                          +{product.types.length - 3} more specialized systems...
                        </div>
                      )}
                    </>
                  )}
                  {product.highlights && !product.types && product.highlights.slice(0, 3).map((item, idx) => (
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
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl glass-panel-glow relative overflow-hidden w-full text-left">
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

      {/* GLOBAL LOCATIONS & SCOPING CONSULTATION CTA - FULL WIDTH */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left">
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl glass-panel-glow border border-[#72bf44]/40 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden w-full text-left">
          <div className="space-y-2 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-1 border border-[#72bf44]/40">
              <Building2 size={13} className="animate-spin-slow" />
              <span>India HQ • Dubai LLC Corporate Hub</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
              Ready to Upgrade Your Enterprise with Smart Technology?
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl btn-3d-green text-slate-950 font-black text-xs sm:text-sm transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Award, Globe, 
  CheckCircle2, Bot, Database, Zap, Users, TrendingUp, Layers
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function HeroSection({ onOpenDemoModal, onOpenCertModal }) {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purpleBrand-600/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none"></div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>INDIA HQ (Bengaluru & Mangaluru)</span>
            <span className="text-emerald-500">•</span>
            <span>U.A.E (Dubai Corporate Office)</span>
          </div>

          <button 
            onClick={onOpenCertModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
          >
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>ISO 9001:2015 & DED Licensed</span>
            <ArrowRight size={12} />
          </button>
        </div>

        {/* Main Headline & Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.15]">
            Empowering Businesses with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Smart Technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            A forward-thinking technology enterprise delivering high-impact solutions across{' '}
            <strong className="text-emerald-400 font-semibold">Artificial Intelligence (AI)</strong>,{' '}
            <strong className="text-teal-300 font-semibold">Cloud ERP & SAP</strong>,{' '}
            <strong className="text-purple-400 font-semibold">Autonomous Agents</strong>, and{' '}
            <strong className="text-cyan-300 font-semibold">Academic-Industry Collaboration</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={19} />
              <span>Schedule Live Solution Demo</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-base transition-all hover:border-emerald-500/40"
            >
              <Layers size={18} className="text-emerald-400" />
              <span>Explore Products & Platforms</span>
            </a>
          </div>

          {/* Accreditations Trust Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-400 border-t border-slate-800/80 mt-8">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              MSME Registered (Govt. of India)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              UAE Dept of Economic Development (DED)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              AICTE Approved Partner
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-400" />
              UAE FTA Tax Compliant
            </span>
          </div>
        </div>

        {/* Live Interactive Hero Showcase / Tech Feature Grid */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: AI Agents & Automation */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Bot size={20} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-white">anvex.ai & AI Agents</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30">
                Voice • Vision • NLP
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Autonomous 24/7 Voice qualification, computer vision safety, and multi-turn LLM chatbots.
            </p>
            <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Response Latency</span>
              <span className="text-emerald-400 font-semibold">&lt; 350ms (Real-time)</span>
            </div>
          </div>

          {/* Card 2: GEO - Generative Engine Optimization */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-teal-500/40 transition-all bg-gradient-to-b from-slate-900/90 to-slate-950/90">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-bl-full pointer-events-none"></div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp size={20} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-white">GEO (AI Visibility)</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
                Next-Gen Search
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Be recommended in ChatGPT, Gemini & Perplexity. 4.4x higher conversions than classic SEO.
            </p>
            <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">AI Share of Voice</span>
              <span className="text-teal-400 font-semibold">+30% in 60 Days</span>
            </div>
          </div>

          {/* Card 3: Cloud ERP & SAP B1 */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-indigo-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Database size={20} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-white">Cloud ERP & SAP B1</h2>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                AlignBooks & ERPNext
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              All-in-one multi-branch accounting, POS billing, inventory, and UAE FTA & Indian GST compliance.
            </p>
            <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Deployments</span>
              <span className="text-indigo-400 font-semibold">14,000+ Enterprises</span>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-emerald-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

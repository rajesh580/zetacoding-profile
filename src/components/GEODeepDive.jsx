import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Bot, TrendingUp, AlertTriangle, 
  CheckCircle2, ArrowRight, ShieldAlert, Cpu, Target,
  RefreshCw, BarChart3, Layers, Phone, Zap
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';
import { motion } from 'framer-motion';

export default function GEODeepDive() {
  const [monthlySearches, setMonthlySearches] = useState(15000);
  const [currentCpl, setCurrentCpl] = useState(45);

  const estimatedAIVisits = Math.round(monthlySearches * 0.38);
  const traditionalLeads = Math.round((monthlySearches * 0.02) * (100 / currentCpl));
  const geoLeads = Math.round(traditionalLeads * 4.4);
  const estimatedSavings = Math.round(geoLeads * (currentCpl * 0.65));

  const aiNetworks = [
    { name: "ChatGPT (OpenAI)", coverage: "98% Coverage" },
    { name: "Google Gemini", coverage: "95% Coverage" },
    { name: "Perplexity AI", coverage: "99% Citation Rate" },
    { name: "Microsoft Copilot", coverage: "94% Coverage" },
    { name: "Claude (Anthropic)", coverage: "92% Coverage" },
    { name: "+10 AI Platforms", coverage: "Omni-Network" },
  ];

  return (
    <section id="geo" className="py-4 space-y-16 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <Sparkles size={14} className="animate-spin text-[#85cc38]" />
            <span>Next-Generation AI Search Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Unlocking Unmatched{' '}
            <span className="text-[#85cc38]">
              AI Visibility (GEO)
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-3xl">
            The Search Galaxy is changing from <strong className="text-white">Links</strong> to <strong className="text-[#85cc38]">Recommendations</strong>. Traditional SEO is not enough when AI answers user queries directly.
          </p>
        </AnimatedSection>

        {/* The Evolution: SEO vs AEO vs GEO in 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch w-full">
          
          {/* Box 1: SEO */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Traditional</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs font-mono font-bold">1998 - 2023</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1 font-display">SEO</h3>
              <p className="text-sm font-bold text-slate-300 mb-3">Rank & Get Clicks</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Focuses on page 1 keyword rankings in Google's blue links. Users must click, navigate, and sift through website content manually.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between font-medium">
              <span>Goal:</span>
              <span className="text-white font-bold">Be one of many links</span>
            </div>
          </Card3D>

          {/* Box 2: AEO */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between h-full group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#c084fc]">Answer Optimization</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#c084fc]/15 text-[#c084fc] text-xs font-mono font-bold border border-[#c084fc]/30">2020 - 2024</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1 font-display">AEO</h3>
              <p className="text-sm font-bold text-[#c084fc] mb-3">Be in the Answer Box</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Optimizes for Google featured snippets and direct answers to capture user attention without requiring extra clicks.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between font-medium">
              <span>Goal:</span>
              <span className="text-white font-bold">Direct user attention</span>
            </div>
          </Card3D>

          {/* Box 3: GEO */}
          <Card3D maxTilt={14} className="p-7 rounded-3xl glass-panel-glow border border-[#72bf44]/60 relative flex flex-col justify-between h-full group shadow-[0_0_30px_rgba(114,191,68,0.2)]">
            <div className="absolute -top-3 right-4 px-3.5 py-1 rounded-full btn-3d-green text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
              The Winner (2026+)
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#85cc38]">Generative Engine Optimization</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#72bf44]/15 text-[#85cc38] text-xs font-mono font-bold border border-[#72bf44]/30">2026+ Era</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-1 font-display flex items-center gap-2">
                <span>GEO</span>
                <Sparkles size={22} className="text-[#85cc38] animate-spin" />
              </h3>
              <p className="text-sm font-bold text-[#85cc38] mb-3">Get Recommended & Convert</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                When high-intent users ask ChatGPT or Gemini "What is the best ERP for retail in UAE?", GEO ensures your business is named as the top recommendation with buy intent.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#72bf44]/15 border border-[#72bf44]/30 text-xs flex items-center justify-between font-bold text-white">
              <span>Goal:</span>
              <span className="text-[#85cc38] font-bold flex items-center gap-1">
                <Zap size={14} />
                Achieve 4.4x conversion value
              </span>
            </div>
          </Card3D>

        </div>

        {/* 4-Step GEO Method */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-16 w-full">
          <div className="text-left mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">Our 4-Step GEO Method</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Proprietary AI indexing, sentiment embedding, and citation engineering framework.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: '1. Connect', desc: 'Connect your brand authority, schemas, and documentation to AI training nodes.' },
              { num: '02', title: '2. Monitor', desc: 'Monitor live LLM outputs, citation frequencies, and prompt variances.' },
              { num: '03', title: '3. Measure', desc: 'Measure visibility index, brand sentiment scores, and inbound conversion rates.' },
              { num: '04', title: '4. Optimize', desc: 'Continuously fine-tune entity definitions and authoritative citation clusters.' },
            ].map((step, idx) => (
              <Card3D key={idx} maxTilt={10} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 text-slate-100 cursor-default group h-full">
                <div className="w-10 h-10 rounded-xl bg-[#72bf44]/20 border border-[#72bf44]/30 text-[#85cc38] flex items-center justify-center font-black text-sm mb-3 group-hover:scale-110 group-hover:bg-[#72bf44] group-hover:text-slate-950 transition-all">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>

        {/* Interactive AI Visibility ROI Simulator */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">Interactive Simulator</span>
                <h3 className="text-2xl font-black text-white mt-1 font-display">Estimate Your AI Search Conversion Lift</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Adjust your search reach and current cost metrics to project the impact of Zetacoding GEO.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5 text-slate-300">
                    <span>Estimated Monthly Category Searches:</span>
                    <span className="font-mono text-sm text-[#85cc38]">{monthlySearches.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="3000" 
                    max="100000" 
                    step="1000"
                    value={monthlySearches}
                    onChange={(e) => setMonthlySearches(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#72bf44]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5 text-slate-300">
                    <span>Average Paid Cost Per Lead ($/AED):</span>
                    <span className="font-mono text-sm text-[#85cc38]">${currentCpl}</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="200" 
                    step="5"
                    value={currentCpl}
                    onChange={(e) => setCurrentCpl(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#72bf44]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {aiNetworks.map((net, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 flex items-center gap-1.5"
                  >
                    <Bot size={14} className="text-[#85cc38]" />
                    <span>{net.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Projected Outputs Card */}
            <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 font-bold">Target AI Queries / Mo</div>
                  <div className="text-2xl font-black text-white mt-1 font-display">
                    {estimatedAIVisits.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#85cc38] mt-1 font-semibold">High-Intent Prompts</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 font-bold">Projected Qualified Leads</div>
                  <div className="text-2xl font-black text-white mt-1 font-display">
                    +{geoLeads} Leads
                  </div>
                  <div className="text-[11px] text-[#85cc38] mt-1 font-semibold">4.4x AI Multiplier</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#72bf44]/15 border border-[#72bf44]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-300 font-bold">Estimated Monthly Ad Savings</div>
                  <div className="text-2xl font-black text-white font-display mt-0.5">
                    ${estimatedSavings.toLocaleString()} / mo
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} />
                  <span>Start GEO Project</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

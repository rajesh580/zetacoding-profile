import React from 'react';
import GEODeepDive from '../components/GEODeepDive';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GEOPage() {
  return (
    <div className="space-y-16 pb-20 text-slate-100 w-full">
      
      {/* Page Header */}
      <div className="relative py-16 md:py-20 border-b border-[#a855f7]/30 shadow-xl overflow-hidden w-full bg-gradient-to-b from-[#280a42] via-[#19062b] to-[#0d041a]">
        <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9333ea]/20 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 text-left flex flex-col items-start justify-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-4 border border-[#72bf44]/40 shadow-sm">
            <Sparkles size={15} className="text-[#85cc38] animate-spin" />
            <span>Next-Gen AI Search Strategy (2026+)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-wide text-left">
            Generative Engine <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">Optimization (GEO)</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl font-normal leading-relaxed text-left">
            Transition from legacy SEO blue links to generative AI citations. Get recommended directly inside ChatGPT, Google Gemini, and Perplexity AI.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <GEODeepDive />
      </div>

    </div>
  );
}

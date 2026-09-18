import React from 'react';
import ProductShowcase from '../components/ProductShowcase';
import ZetaWapCRMPreview from '../components/ZetaWapCRMPreview';
import DigitalCardCalculator from '../components/DigitalCardCalculator';
import { Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <div className="space-y-8 pb-20 text-slate-100 w-full">
      
      {/* Page Header with High-Tech Glow - Compact & Starts from the Top */}
      <div className="relative pt-6 pb-6 md:pt-8 md:pb-8 border-b border-[#a855f7]/30 shadow-xl overflow-hidden w-full bg-gradient-to-b from-[#280a42] via-[#19062b] to-[#0d041a]">
        <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9333ea]/20 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 text-left flex flex-col items-start justify-start"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#72bf44]/40 shadow-sm">
            <Layers size={14} />
            <span>Proprietary & Enterprise Software</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-wide text-left">
            Products & <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">Platforms Suite</span>
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl font-normal leading-relaxed text-left">
            14+ battle-tested platforms spanning Cloud ERP, AI Voice/Vision Agents, WhatsApp Cloud CRM, Restaurant & Garage OS, and Cyber Defense.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <ProductShowcase />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <ZetaWapCRMPreview />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <DigitalCardCalculator />
      </div>

    </div>
  );
}

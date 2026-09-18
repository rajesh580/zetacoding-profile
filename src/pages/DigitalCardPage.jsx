import React from 'react';
import DigitalCardCalculator from '../components/DigitalCardCalculator';
import { CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DigitalCardPage() {
  return (
    <div className="space-y-16 pb-20 text-slate-100 w-full">
      
      {/* Page Header */}
      <div className="relative py-16 md:py-20 border-b border-[#72bf44]/30 shadow-xl overflow-hidden w-full bg-gradient-to-b from-[#12051f] via-[#0a0714] to-[#07090e]">
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#72bf44]/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 text-left flex flex-col items-start justify-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-4 border border-[#72bf44]/40 shadow-sm">
            <CreditCard size={15} />
            <span>Next-Gen Smart Business Identity</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-wide text-left">
            Digital Business Card & <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">NFC Hardware</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl font-normal leading-relaxed text-left">
            Make your business card your brand ambassador. Instant contactless contact sharing, dynamic portfolio showcase, and CRM lead capture.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <DigitalCardCalculator />
      </div>

    </div>
  );
}

import React from 'react';
import CertificationsSection from '../components/CertificationsSection';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';
import { legalDetails } from '../data/companyData';
import { motion } from 'framer-motion';

export default function CertificationsPage({ onOpenCertModal }) {
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
            <ShieldCheck size={15} />
            <span>Official Government Licenses & ISO Accreditations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-wide text-left">
            Compliance & <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">Legal Certifications</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl font-normal leading-relaxed text-left">
            Operating with verified corporate licenses, international ISO benchmarks, and corporate tax compliance under the Government of Dubai and Government of India.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <CertificationsSection onOpenCertModal={onOpenCertModal} />

        {/* Detailed Full Document Scope View in Glassmorphic Cards */}
        <div className="mt-12 space-y-8 w-full">
          
          {/* Dubai License Deep Dive */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/30 shadow-2xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider font-mono font-bold text-[#85cc38]">Government of Dubai • DET</span>
                <h3 className="text-2xl font-black text-white mt-1 font-display">{legalDetails.dubaiLicense.companyName}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">Commercial License No.</span>
                <span className="text-2xl font-mono font-black text-[#85cc38]">{legalDetails.dubaiLicense.licenseNo}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">All 10 Approved Commercial & Cyber Activities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {legalDetails.dubaiLicense.activities.map((act, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 size={15} className="text-[#85cc38] shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ISO 9001:2015 & MSME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-7 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-bold mb-3">
                <Award size={22} className="text-[#f0b31a]" />
                <span className="text-lg">ISO 9001:2015 Quality Management</span>
              </div>
              <div className="text-sm text-slate-300 mb-2">
                Certificate No: <span className="font-mono text-[#85cc38] font-bold">{legalDetails.isoCert.certNo}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Scope: {legalDetails.isoCert.scope}
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#f0b31a] font-bold">
                IAF (International Accreditation Forum) Recognized
              </div>
            </div>

            <div className="p-7 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-bold mb-3">
                <Building2 size={22} className="text-[#38bdf8]" />
                <span className="text-lg">MSME Udyam Registration (Govt of India)</span>
              </div>
              <div className="text-sm text-slate-300 mb-2">
                Udyam No: <span className="font-mono text-[#38bdf8] font-bold">{legalDetails.msmeCert.regNo}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Classification: Micro Services. Registered under Ministry of MSME, Government of India.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#38bdf8] font-bold">
                NIC 6209 (IT Services) & NIC 8549 (Education n.e.c.)
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

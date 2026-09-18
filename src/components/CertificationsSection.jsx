import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Building2, Landmark, Globe } from 'lucide-react';
import { legalDetails } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';

export default function CertificationsSection({ onOpenCertModal }) {
  return (
    <section id="certifications" className="py-4 space-y-12 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <ShieldCheck size={14} className="text-[#85cc38]" />
            <span>Official Accreditations & Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Certified, Licensed & <span className="text-[#85cc38]">Globally Compliant</span>
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-normal max-w-3xl">
            ZETACODING operates with official government registrations, international ISO quality benchmarks, and full corporate tax transparency across India and the United Arab Emirates.
          </p>
        </AnimatedSection>

        {/* 4 Legal Pillars Grid with Card3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full">
          
          {/* Dubai DED License */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between shadow-xl h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#85cc38] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#72bf44]/50 transition-all">
                <Landmark size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase text-[#85cc38] bg-[#72bf44]/15 px-2.5 py-1 rounded-md border border-[#72bf44]/30">
                Government of Dubai
              </span>
              <h3 className="text-lg font-black text-white mt-2 font-display">Commercial License</h3>
              <p className="text-xs text-slate-300 mt-1">
                Dept. of Economy and Tourism (DET), Dubai, UAE.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-xs font-medium text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">License No:</span>
                  <span className="font-mono text-white font-bold">{legalDetails.dubaiLicense.licenseNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Register No:</span>
                  <span className="font-mono text-white font-bold">{legalDetails.dubaiLicense.registerNo}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCertModal}
              className="mt-6 w-full py-3 rounded-xl btn-3d-green text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText size={14} />
              <span>View License Details</span>
            </button>
          </Card3D>

          {/* ISO 9001:2015 */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between shadow-xl h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#f0b31a] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#f0b31a]/50 transition-all">
                <Award size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase text-[#f0b31a] bg-[#f0b31a]/15 px-2.5 py-1 rounded-md border border-[#f0b31a]/30">
                International Standard
              </span>
              <h3 className="text-lg font-black text-white mt-2 font-display">ISO 9001:2015 Certified</h3>
              <p className="text-xs text-slate-300 mt-1">
                QRO & IAF Multilateral Recognition for Quality Management.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-xs font-medium text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Certificate No:</span>
                  <span className="font-mono text-white font-bold">{legalDetails.isoCert.certNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Accreditation:</span>
                  <span className="font-mono text-[#f0b31a] font-bold">IAF / QRO</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCertModal}
              className="mt-6 w-full py-3 rounded-xl btn-3d-green text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText size={14} />
              <span>View ISO Certificate</span>
            </button>
          </Card3D>

          {/* MSME Govt of India */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between shadow-xl h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#38bdf8] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#38bdf8]/50 transition-all">
                <Building2 size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase text-[#38bdf8] bg-[#38bdf8]/15 px-2.5 py-1 rounded-md border border-[#38bdf8]/30">
                Govt. of India
              </span>
              <h3 className="text-lg font-black text-white mt-2 font-display">MSME Registered</h3>
              <p className="text-xs text-slate-300 mt-1">
                Ministry of Micro, Small and Medium Enterprises.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-xs font-medium text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Udyam No:</span>
                  <span className="font-mono text-white font-bold">UDYAM-KR-03</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">NIC Codes:</span>
                  <span className="font-mono text-white font-bold">6209 & 8549</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCertModal}
              className="mt-6 w-full py-3 rounded-xl btn-3d-green text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText size={14} />
              <span>View MSME Details</span>
            </button>
          </Card3D>

          {/* UAE Federal Tax Authority (FTA) */}
          <Card3D maxTilt={12} className="p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between shadow-xl h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#85cc38] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#72bf44]/50 transition-all">
                <Globe size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase text-[#85cc38] bg-[#72bf44]/15 px-2.5 py-1 rounded-md border border-[#72bf44]/30">
                UAE Federal Tax
              </span>
              <h3 className="text-lg font-black text-white mt-2 font-display">Tax & VAT Compliant</h3>
              <p className="text-xs text-slate-300 mt-1">
                UAE Corporate Tax (9%) & VAT Law compliant software architecture.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-xs font-medium text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Tax Type:</span>
                  <span className="font-mono text-white font-bold">UAE VAT / CT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-mono text-[#85cc38] font-bold">Compliant</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCertModal}
              className="mt-6 w-full py-3 rounded-xl btn-3d-green text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText size={14} />
              <span>Verify Tax Status</span>
            </button>
          </Card3D>

        </div>

        {/* Quality Policy Box */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 shadow-2xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h3 className="text-2xl font-black text-white font-display flex items-center gap-2">
                <CheckCircle2 className="text-[#85cc38]" size={24} />
                <span>Quality Management System (QMS) Mandate</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
                Every software build, architecture deployment, and academic laboratory module is audited under ISO 9001:2015 frameworks to guarantee 99.9% uptime SLA and zero-trust cybersecurity protocols.
              </p>
            </div>
            <button
              onClick={onOpenCertModal}
              className="px-8 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs transition-all shrink-0 shadow-lg"
            >
              Open Accreditation Vault
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

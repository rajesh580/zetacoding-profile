import React, { useState } from 'react';
import { X, ShieldCheck, Award, FileText, CheckCircle2, Building2, Globe, Landmark } from 'lucide-react';
import { legalDetails } from '../data/companyData';

export default function AccreditationsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('dubai');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 text-slate-100">
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0f1a] border border-[#72bf44]/50 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#150724] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#72bf44] text-slate-950 flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black text-white font-display">Official Accreditations & Licenses Vault</h3>
              <p className="text-xs text-slate-300">Verified Corporate Certifications across India & UAE</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 pt-3 pb-2 border-b border-white/10 bg-[#080a13] flex flex-wrap gap-2">
          {[
            { id: 'dubai', name: 'Dubai Commercial License (DED)' },
            { id: 'iso', name: 'ISO 9001:2015 Certificate' },
            { id: 'msme', name: 'MSME Govt. of India (Udyam)' },
            { id: 'tax', name: 'UAE Federal Tax (Corporate & VAT)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'btn-3d-green text-slate-950 font-black shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-[#0c0f1a]">
          
          {/* Dubai License Tab */}
          {activeTab === 'dubai' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#85cc38] uppercase font-bold">Government of Dubai • DET</span>
                    <h4 className="text-xl font-black text-white mt-0.5">{legalDetails.dubaiLicense.companyName}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">License Number</span>
                    <span className="text-xl font-mono font-bold text-[#85cc38]">{legalDetails.dubaiLicense.licenseNo}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 block">Register No</span>
                    <span className="font-bold text-white">{legalDetails.dubaiLicense.registerNo}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Legal Type</span>
                    <span className="font-bold text-white">Limited Liability Company (LLC)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Issue Date</span>
                    <span className="font-bold text-white">{legalDetails.dubaiLicense.issueDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Expiry Date</span>
                    <span className="font-bold text-white">{legalDetails.dubaiLicense.expiryDate}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Licensed Commercial & IT Activities (Dubai Economy & Tourism):</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {legalDetails.dubaiLicense.activities.map((act, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 size={15} className="text-[#85cc38] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ISO 9001:2015 Tab */}
          {activeTab === 'iso' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#f0b31a] uppercase font-bold">QRO Quality Research Organization</span>
                    <h4 className="text-xl font-black text-white mt-0.5">ISO 9001:2015 Certificate of Registration</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Certificate Number</span>
                    <span className="text-xl font-mono font-bold text-[#f0b31a]">{legalDetails.isoCert.certNo}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="text-[#85cc38] font-bold uppercase">Scope of Certified Activities:</div>
                  <p className="text-slate-300 leading-relaxed">{legalDetails.isoCert.scope}</p>
                </div>
              </div>
            </div>
          )}

          {/* MSME Tab */}
          {activeTab === 'msme' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold">Government of India • Ministry of MSME</span>
                    <h4 className="text-xl font-black text-white mt-0.5">Udyam Registration Certificate</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Udyam Number</span>
                    <span className="text-xl font-mono font-bold text-[#38bdf8]">{legalDetails.msmeCert.regNo}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tax Tab */}
          {activeTab === 'tax' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#85cc38] bg-[#72bf44]/15 px-2 py-0.5 rounded border border-[#72bf44]/30">
                    UAE Federal Tax Authority
                  </span>
                  <h4 className="text-base font-bold text-white">Certificate for Corporate Tax</h4>
                  <div className="pt-2 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">TRN:</span>
                      <span className="font-mono font-bold text-white">{legalDetails.taxRegistrations.corporateTax.trn}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#85cc38] bg-[#72bf44]/15 px-2 py-0.5 rounded border border-[#72bf44]/30">
                    UAE Federal Tax Authority
                  </span>
                  <h4 className="text-base font-bold text-white">Certificate for VAT</h4>
                  <div className="pt-2 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">TRN:</span>
                      <span className="font-mono font-bold text-white">{legalDetails.taxRegistrations.vatRegistration.trn}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080a13] flex items-center justify-between text-xs text-slate-400">
          <span>Official verifiable documentation under Government of Dubai & Govt of India</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl btn-3d-green text-slate-950 font-black transition-all shadow-md"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
}

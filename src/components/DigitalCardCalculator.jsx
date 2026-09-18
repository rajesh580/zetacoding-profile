import React, { useState } from 'react';
import { 
  CreditCard, Smartphone, CheckCircle, Sparkles, 
  QrCode, Share2, Shield, ArrowRight, Layers, Eye, Phone, Check
} from 'lucide-react';
import { products, companyInfo } from '../data/companyData';
import DigitalCard3D from './DigitalCard3D';
import Card3D from './Card3D';

export default function DigitalCardCalculator() {
  const nfcProduct = products.find(p => p.id === 'digital-business-card');
  const [selectedPlan, setSelectedPlan] = useState('Advanced Plan');
  const [cardType, setCardType] = useState('Metal Card');
  const [previewName, setPreviewName] = useState('Dr. Rajesh Kumar');
  const [previewTitle, setPreviewTitle] = useState('Chief Technology Architect');
  const [previewCompany, setPreviewCompany] = useState('ZETACODING INNOVATIVE SOLUTIONS');

  const hardwareTypes = [
    { name: 'Metal Card' },
    { name: 'Eco Wooden' },
    { name: 'Matte PVC' },
    { name: 'NFC Keychain' },
  ];

  const handleOrderViaWhatsApp = (planName) => {
    const text = encodeURIComponent(
      `Hello ZETACODING,\nI want to order the NFC Digital Business Card with:\nPlan: ${planName}\nFinish: ${cardType}\nName on Card: ${previewName}\nDesignation: ${previewTitle}\nCompany: ${previewCompany}`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.india}?text=${text}`, '_blank');
  };

  return (
    <section className="py-8 space-y-12 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30">
            <CreditCard size={14} className="text-[#85cc38]" />
            <span>Smart Hardware & Digital Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Digital Business Card & <span className="text-[#85cc38]">3D NFC Ecosystem</span>
          </h2>
          <p className="mt-2 text-slate-300 text-base font-normal max-w-3xl">
            Make your card your brand ambassador. Tap to instantly share contacts, capture leads, showcase portfolios, and sync with your CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left: 3D Interactive Card Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            <div className="p-4 sm:p-6 rounded-3xl glass-panel-glow border border-[#72bf44]/40 w-full flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#85cc38] uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-1.5 text-center">
                <Sparkles size={13} />
                <span>Interactive 3D Preview (Move / Tap to Flip)</span>
              </span>

              {/* DigitalCard3D Component */}
              <DigitalCard3D
                holderName={previewName}
                title={previewTitle}
                company={previewCompany}
              />
            </div>

            {/* Finish Selector */}
            <div className="w-full glass-panel p-4 sm:p-5 rounded-2xl border border-white/10">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                Select Card Physical Finish:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {hardwareTypes.map((hw) => (
                  <button
                    key={hw.name}
                    onClick={() => setCardType(hw.name)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                      cardType === hw.name
                        ? 'btn-3d-green text-slate-950 font-black'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#72bf44]/40'
                    }`}
                  >
                    {hw.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Editor Box */}
            <div className="w-full p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
              <div className="text-[11px] font-bold text-slate-300 uppercase">Live Card Preview Editor:</div>
              <input
                type="text"
                value={previewName}
                onChange={(e) => setPreviewName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-bold focus:outline-none focus:border-[#72bf44]"
              />
              <input
                type="text"
                value={previewTitle}
                onChange={(e) => setPreviewTitle(e.target.value)}
                placeholder="Designation"
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-semibold focus:outline-none focus:border-[#72bf44]"
              />
              <input
                type="text"
                value={previewCompany}
                onChange={(e) => setPreviewCompany(e.target.value)}
                placeholder="Company Name"
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-semibold focus:outline-none focus:border-[#72bf44]"
              />
            </div>

          </div>

          {/* Right: Software Plans */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-white font-display">Available Software & Cloud Plans</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nfcProduct?.plans?.map((plan) => (
                <Card3D
                  key={plan.name}
                  maxTilt={10}
                  className={`p-6 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between h-full ${
                    selectedPlan === plan.name
                      ? 'glass-panel-glow border-[#72bf44] shadow-[0_0_25px_rgba(114,191,68,0.25)]'
                      : 'glass-panel border-white/10 hover:border-white/25'
                  }`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-[#85cc38] uppercase tracking-wider">{plan.price}</span>
                      {selectedPlan === plan.name && (
                        <CheckCircle size={18} className="text-[#85cc38]" />
                      )}
                    </div>
                    <h4 className="text-base font-black text-white mb-3">{plan.name}</h4>
                    
                    <ul className="space-y-2 text-xs text-slate-300">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check size={13} className="text-[#85cc38] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOrderViaWhatsApp(plan.name);
                      }}
                      className="w-full py-3 rounded-xl text-xs font-black transition-all btn-3d-green text-slate-950 shadow-md"
                    >
                      Order {plan.name}
                    </button>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/10">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Physical Items & Accessories Available:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {nfcProduct?.hardwareRange?.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

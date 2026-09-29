import React, { useState } from 'react';
import { 
  CreditCard, Smartphone, CheckCircle, Sparkles, 
  QrCode, Share2, Shield, ArrowRight, Layers, Eye, Phone, Check,
  Zap, Globe, Database, HelpCircle, MessageSquare
} from 'lucide-react';
import { products, companyInfo } from '../data/companyData';
import DigitalCard3D from './DigitalCard3D';
import Card3D from './Card3D';

export default function DigitalCardCalculator() {
  const digitalProducts = products.find(p => p.id === 'digital-products');
  const nfcProduct = digitalProducts?.types?.find(t => t.id === 'digital-business-card');
  
  const plans = digitalProducts?.plans || [
    {
      name: "Basic Plan",
      price: "Affordable Entry",
      features: [
        "Essential contact info & phone direct dial",
        "Basic profile customization & colors",
        "Integrated dynamic QR code sharing",
        "Direct WhatsApp integration link",
        "One-Time Payment with lifetime access"
      ]
    },
    {
      name: "Advanced Plan",
      price: "Most Popular",
      features: [
        "Everything in Basic Plan",
        "Custom branding, logo & theme styling",
        "Product gallery, brochure PDF & short bio",
        "All social media & portfolio links",
        "Lead capture form with instant notification"
      ]
    },
    {
      name: "Fully Brand Enriched Plan",
      price: "Enterprise Custom",
      features: [
        "Everything in Advanced Plan",
        "Custom domain mapping (card.yourbrand.com)",
        "Multiple cards & centralized team dashboard",
        "Video introduction & interactive showcases",
        "Priority concierge setup & onboarding",
        "Full analytics telemetry & CRM sync"
      ]
    }
  ];

  const hardwareRange = nfcProduct?.hardwareRange || [
    "Custom Metal Cards (Premium Luxury)",
    "Eco Wooden Cards",
    "Matte PVC Cards",
    "NFC Multi-Color Keychains",
    "NFC Smart Stickers (1 Dot / 3 Dot)",
    "QR Countertop Standees for Retailers"
  ];

  const [selectedPlan, setSelectedPlan] = useState('Advanced Plan');
  const [cardType, setCardType] = useState('Metal Card');

  const hardwareTypes = [
    { name: 'Metal Card', tag: 'Brushed Luxury', desc: 'Weighted surgical stainless steel with precision laser engraving' },
    { name: 'Eco Wooden', tag: 'Sustainable', desc: 'Real walnut hardwood with subtle natural grain texture' },
    { name: 'Matte PVC', tag: 'Waterproof', desc: 'Velvet soft-touch matte finish with high-durability core' },
    { name: 'NFC Keychain', tag: 'Compact Carry', desc: 'Pocket-sized smart tag for keys and backpacks' },
  ];

  const handleOrderViaWhatsApp = (planName) => {
    const text = encodeURIComponent(
      `Hello ZETACODING,\nI would like to order the Digital Business Card & 3D NFC Ecosystem:\n• Plan: ${planName}\n• Physical Finish: ${cardType}\nPlease share pricing and delivery details.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.india}?text=${text}`, '_blank');
  };

  const handleCustomQuote = () => {
    const text = encodeURIComponent(
      `Hello ZETACODING,\nI need an Enterprise / Bulk Team Quote for NFC Digital Business Cards (${cardType}). Please connect me with your specialist.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.india}?text=${text}`, '_blank');
  };

  return (
    <section className="py-8 space-y-10 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm">
            <CreditCard size={14} className="text-[#85cc38]" />
            <span>Smart Hardware &amp; Digital Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Digital Business Card &amp; <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">3D NFC Ecosystem</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            Make your card your brand ambassador. Tap to instantly share contacts, capture leads, showcase portfolios, and sync with your CRM — with zero app installation needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column: 3D Interactive Card Visualizer & Hardware Finish Selector */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 w-full">
            
            {/* 3D Card Stage */}
            <div className="p-5 sm:p-7 rounded-3xl glass-panel-glow border border-[#72bf44]/40 w-full flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#85cc38] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Interactive 3D Preview</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40">
                  {cardType}
                </span>
              </div>

              {/* DigitalCard3D Component with selected finish and no personal name */}
              <DigitalCard3D finish={cardType} />

              <p className="mt-4 text-[11px] text-slate-400 font-medium text-center">
                Tilt with mouse or tap card to flip between front &amp; back views
              </p>
            </div>

            {/* Finish Selector */}
            <div className="w-full glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Select Physical Finish:
                </label>
                <span className="text-[10px] text-[#85cc38] font-mono font-semibold">
                  Tap to preview in 3D
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {hardwareTypes.map((hw) => (
                  <button
                    key={hw.name}
                    onClick={() => setCardType(hw.name)}
                    className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                      cardType === hw.name
                        ? 'bg-gradient-to-br from-[#72bf44]/25 to-[#85cc38]/10 border-[#72bf44] text-white shadow-[0_0_15px_rgba(114,191,68,0.25)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{hw.name}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#85cc38] uppercase">
                        {hw.tag}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                      {hw.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Capability Highlights (Replacing old name editor) */}
            <div className="w-full p-5 rounded-2xl glass-panel border border-white/10 space-y-3 text-left">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Zap size={14} className="text-[#85cc38]" />
                <span>Next-Gen Smart Profile Capabilities</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                  <Smartphone size={14} className="text-[#85cc38] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-[11px]">Zero-App Tap</strong>
                    <span className="text-[10px] text-slate-400">Works natively on iOS &amp; Android NFC</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                  <Share2 size={14} className="text-[#85cc38] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-[11px]">Direct vCard Sync</strong>
                    <span className="text-[10px] text-slate-400">One tap saves contact to phonebook</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                  <Globe size={14} className="text-[#85cc38] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-[11px]">Dynamic Updates</strong>
                    <span className="text-[10px] text-slate-400">Update links &amp; info with zero reprints</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                  <Database size={14} className="text-[#85cc38] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-[11px]">CRM Lead Capture</strong>
                    <span className="text-[10px] text-slate-400">Collect visitor info &amp; follow-up</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Software Plans & Hardware Accessories */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-2xl font-black text-white font-display">Available Software &amp; Cloud Plans</h3>
                <p className="text-xs text-slate-400">Select a software tier for your digital profile platform</p>
              </div>
              <span className="text-xs font-mono text-[#85cc38] bg-[#72bf44]/15 px-3 py-1 rounded-full border border-[#72bf44]/30 self-start sm:self-auto">
                Finish: <strong className="text-white">{cardType}</strong>
              </span>
            </div>
            
            {/* 3 Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan.name;
                const isPopular = plan.name.includes('Advanced');

                return (
                  <Card3D
                    key={plan.name}
                    maxTilt={8}
                    className={`p-5 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between h-full relative ${
                      isSelected
                        ? 'glass-panel-glow border-[#72bf44] shadow-[0_0_30px_rgba(114,191,68,0.25)] ring-1 ring-[#72bf44]/50'
                        : 'glass-panel border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#85cc38] to-[#72bf44] text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                        Most Popular
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black text-[#85cc38] uppercase tracking-wider">
                          {plan.price}
                        </span>
                        {isSelected && (
                          <CheckCircle size={18} className="text-[#85cc38]" />
                        )}
                      </div>
                      
                      <h4 className="text-base font-black text-white mb-3">
                        {plan.name}
                      </h4>
                      
                      <ul className="space-y-2 text-xs text-slate-300">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={13} className="text-[#85cc38] shrink-0 mt-0.5" />
                            <span className="leading-tight text-[11px] sm:text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOrderViaWhatsApp(plan.name);
                        }}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'btn-3d-green text-slate-950 shadow-md'
                            : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                        }`}
                      >
                        <MessageSquare size={13} />
                        <span>Order with {cardType}</span>
                      </button>
                    </div>
                  </Card3D>
                );
              })}
            </div>

            {/* Physical Items & Accessories Available */}
            <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <CreditCard size={14} className="text-[#85cc38]" />
                  <span>Full Hardware &amp; Accessories Range:</span>
                </div>
                <button
                  onClick={handleCustomQuote}
                  className="text-[11px] text-[#85cc38] hover:underline font-bold flex items-center gap-1"
                >
                  <span>Request Custom / Bulk Quote</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {hardwareRange.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 flex items-center gap-2 hover:border-[#72bf44]/40 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#85cc38] shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-200 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise & Agency Note */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#1e0a2e]/40 to-slate-900/60 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-purple-300">Need Bulk Corporate Cards for your entire team?</span>
                <p className="text-[11px] text-slate-400">
                  Custom branding, back-office team portal, HR bulk onboarding, and custom domains.
                </p>
              </div>
              <button
                onClick={handleCustomQuote}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Team Quote</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

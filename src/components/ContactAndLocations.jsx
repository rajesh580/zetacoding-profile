import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageSquare, 
  CheckCircle2, Globe, Clock, Sparkles, ShieldCheck, Zap, Award
} from 'lucide-react';
import { officeLocations, companyInfo } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';
import { motion } from 'framer-motion';

export default function ContactAndLocations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Bengaluru (Headquarters)',
    serviceInterest: 'Cyber Security Suite & CIPHER',
    message: ''
  });

  const handleWhatsAppDirect = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const text = encodeURIComponent(
      `Hello ZETACODING team,\n• Name: ${formData.name || 'Visitor'}\n• Phone: ${formData.phone || 'Not provided'}\n• Email: ${formData.email || 'Not provided'}\n• Solution of Interest: ${formData.serviceInterest}\n• Preferred Branch: ${formData.branch}\n• Project Scope: ${formData.message || 'I would like to request technical consultation.'}`
    );
    const targetNumber = formData.branch.includes('Dubai') 
      ? companyInfo.whatsapp.uae 
      : companyInfo.whatsapp.india;
    window.open(`https://wa.me/${targetNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-4 space-y-12 text-slate-100 w-full">
      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <Globe size={14} className="text-[#85cc38] animate-spin" />
            <span>Connect Across Continents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Contact Our <span className="text-[#85cc38]">Global Hubs</span>
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-normal max-w-3xl">
            Reach out to our engineering and consulting teams in Bengaluru or Dubai for rapid project scoping and technical inquiries.
          </p>
        </AnimatedSection>

        {/* 3 Global Location Cards in Card3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
          {officeLocations.map((loc, idx) => (
            <Card3D
              key={idx}
              maxTilt={12}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between shadow-xl h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl group-hover:scale-125 transition-transform inline-block">{loc.flag}</span>
                    <h3 className="text-xl font-black text-white font-display">
                      {loc.city}
                    </h3>
                  </div>
                  <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase ${
                    loc.badge === 'HQ' 
                      ? 'bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40' 
                      : 'bg-white/5 text-slate-300 border border-white/10'
                  }`}>
                    {loc.badge}
                  </span>
                </div>

                <p className="text-xs text-[#85cc38] font-bold mb-4">
                  {loc.type}
                </p>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#85cc38] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#85cc38] shrink-0" />
                    <a href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`} className="hover:text-[#85cc38] transition-colors font-mono font-bold text-white">
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-[#85cc38] shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-[#85cc38] transition-colors text-white">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${loc.whatsapp}?text=Hello%20ZETACODING%20${encodeURIComponent(loc.city)}%20office,%20I%20would%20like%20to%20connect.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs transition-all border border-white/20 hover:border-transparent shadow-md"
                >
                  <MessageSquare size={14} className="text-[#85cc38] group-hover:text-slate-950" />
                  <span>WhatsApp Branch</span>
                </a>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Inquiry & Scoping Section */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#72bf44]/40 w-full shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Consultation Form */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-2 border border-[#72bf44]/30">
                  <Sparkles size={13} />
                  <span>Direct Engineering Scoping</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Request a Technical Consultation or Scoping
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fill out the details below to connect directly with our regional engineering team on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppDirect} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 / +971"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Preferred Office / Region
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c101a] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm font-medium"
                    >
                      <option value="Bengaluru (Headquarters)">Bengaluru HQ (India)</option>
                      <option value="Dubai (Corporate Branch)">Dubai LLC (U.A.E)</option>
                      <option value="Mangaluru (Regional Center)">Mangaluru Center (India)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Platform / Solution of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c101a] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm font-medium"
                  >
                    <option value="Cyber Security Products (CIPHER & Sachet SOC)">Cyber Security Products (CIPHER & Sachet SOC)</option>
                    <option value="ERP Solutions (AlignBooks across 5 Editions)">ERP Solutions (AlignBooks across 5 Editions)</option>
                    <option value="CRM Solutions (Prospect AI & Tech Free)">CRM Solutions (Prospect AI & Tech Free)</option>
                    <option value="Custom Software (Garage, Restaurant, Animal, Saloon, Expense)">Custom Software Solutions</option>
                    <option value="Digital Products (3D NFC Business Card & Smart Ordering)">Digital Products (3D NFC Business Card & Smart Ordering)</option>
                    <option value="Cyber Security Services (VAPT & SOC Defense)">Cyber Security Services (VAPT & SOC Defense)</option>
                    <option value="AI Digital Transformation (Pixis.AI / GEO & SEO)">AI Digital Transformation (Pixis.AI / GEO & SEO)</option>
                    <option value="Web & Mobile Application Development">Web & Mobile Application Development</option>
                    <option value="AI Agents & Autonomous Workforce (BigDot)">AI Agents & Autonomous Workforce (BigDot)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Scope or Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your business requirements, timeline, or current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm transition-all font-medium"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageSquare size={16} className="text-slate-950" />
                    <span>Inquire on WhatsApp Direct</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Right Column: High-Trust SLA & Fast Contact Card */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 space-y-6 text-left border border-white/10 shadow-xl h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#85cc38]">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">Engineering Response SLA</h4>
                    <span className="text-xs text-[#85cc38] font-mono">&lt; 4 Hours Guaranteed</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  When you submit a scoping inquiry, our senior architecture team in Bengaluru HQ or Dubai LLC Office immediately reviews your technical specifications to prepare customized proposals.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-[#85cc38] shrink-0" />
                    <span>Free Architecture & Feasibility Scoping</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-[#85cc38] shrink-0" />
                    <span>Direct Non-Disclosure Agreement (NDA)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-[#85cc38] shrink-0" />
                    <span>ISO 9001:2015 Certified QMS Assurance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 size={16} className="text-[#85cc38] shrink-0" />
                    <span>UAE DED & Indian MSME Compliance</span>
                  </div>
                </div>
              </div>

              {/* Fast Direct Contacts Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 shadow-sm">
                <div className="text-[11px] uppercase tracking-wider text-[#85cc38] font-bold">Direct Hotlines:</div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>🇮🇳 Bengaluru HQ:</span>
                  <a href={`tel:${companyInfo.phones.india.replace(/[^+\d]/g, '')}`} className="font-mono text-white font-bold hover:text-[#85cc38]">
                    {companyInfo.phones.india}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>🇮🇳 Mangaluru Desk:</span>
                  <a href={`tel:${companyInfo.phones.mangaluru.replace(/[^+\d]/g, '')}`} className="font-mono text-white font-bold hover:text-[#85cc38]">
                    {companyInfo.phones.mangaluru}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>🇦🇪 Dubai Hub:</span>
                  <a href={`tel:${companyInfo.phones.uae.replace(/[^+\d]/g, '')}`} className="font-mono text-white font-bold hover:text-[#85cc38]">
                    {companyInfo.phones.uae}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-1 border-t border-white/10">
                  <span>✉️ Email:</span>
                  <a href={`mailto:${companyInfo.emails.primary}`} className="text-white hover:text-[#85cc38]">
                    {companyInfo.emails.primary}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageSquare, Send, 
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
    serviceInterest: 'Enterprise ERP & Cloud Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ZETACODING team,\nMy Name: ${formData.name || 'Visitor'}\nInterested in: ${formData.serviceInterest}\nPreferred Branch: ${formData.branch}\nMessage: ${formData.message || 'I would like to discuss a project.'}`
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
            Reach out to our engineering and consulting teams in Bengaluru, Mangaluru, or Dubai for rapid project scoping and technical inquiries.
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
                    <a href={`tel:${loc.phone}`} className="hover:text-[#85cc38] transition-colors font-mono font-bold text-white">
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
                  Fill out the form below and our regional lead engineer will respond within 4 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#72bf44]/15 border border-[#72bf44]/40 text-left space-y-3 shadow-md">
                  <CheckCircle2 size={46} className="text-[#85cc38] animate-bounce" />
                  <h4 className="text-xl font-black text-white">Thank You for Reaching Out!</h4>
                  <p className="text-sm text-slate-200 max-w-md">
                    Your request has been routed to our <strong>{formData.branch}</strong> team. We will contact you at <strong>{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-3 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#72bf44] shadow-sm transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
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
                      <option value="GEO (Generative Engine Optimization)">GEO (AI Visibility / ChatGPT / Gemini)</option>
                      <option value="AlignBooks Cloud ERP">AlignBooks Cloud ERP (VAT & GST)</option>
                      <option value="SAP Business One">SAP Business One Implementation</option>
                      <option value="anvex.ai Autonomous Agents">anvex.ai Voice / Vision / Agents</option>
                      <option value="ZetaWap Cloud CRM">ZetaWap WhatsApp Cloud CRM</option>
                      <option value="TMBill Restaurant POS">TMBill Restaurant & Cloud Kitchen OS</option>
                      <option value="Autorox Smart Garage">Autorox Garage Management System</option>
                      <option value="Cybersecurity & Defense">CrowdStrike / Cyber Security Suite</option>
                      <option value="Academic MOU & Training">Academic Institution MOU / Student Training</option>
                      <option value="Custom Web / Mobile Engineering">Custom Web & Mobile Development</option>
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

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Submit Inquiry to Engineering</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-white/20 shadow-md"
                    >
                      <MessageSquare size={15} className="text-[#85cc38]" />
                      <span>Inquire on WhatsApp Direct</span>
                    </button>
                  </div>

                </form>
              )}
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
                  <span>🇮🇳 India Hub:</span>
                  <a href={`tel:${companyInfo.phones.india}`} className="font-mono text-white font-bold hover:text-[#85cc38]">
                    {companyInfo.phones.india}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>🇦🇪 Dubai Hub:</span>
                  <a href={`tel:${companyInfo.phones.uae}`} className="font-mono text-white font-bold hover:text-[#85cc38]">
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

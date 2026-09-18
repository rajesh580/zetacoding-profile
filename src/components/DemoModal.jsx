import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function DemoModal({ isOpen, onClose, selectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: selectedProduct ? selectedProduct.name : 'Cloud ERP & AlignBooks',
    hub: 'Dubai Office (UAE)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello ZETACODING,\nI would like to book a Live Solution Demo for: ${formData.solution}\nName: ${formData.name || 'Client'}\nCompany: ${formData.company || 'Enterprise'}\nPreferred Hub: ${formData.hub}`
    );
    const targetNumber = formData.hub.includes('Dubai') 
      ? companyInfo.whatsapp.uae 
      : companyInfo.whatsapp.india;
    window.open(`https://wa.me/${targetNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl bg-white border-2 border-zetaGreen-500 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 bg-zetaPurple-900 border-b border-zetaPurple-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-zetaGreen-500 text-white flex items-center justify-center font-bold">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-lg font-black text-white font-display">Schedule a Free Solution Demo</h3>
              <p className="text-xs text-white/80">Live 1-on-1 walkthrough with Zetacoding Solution Architects</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-zetaPurple-800 hover:bg-zetaPurple-700 text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 bg-white">
          
          {submitted ? (
            <div className="p-8 rounded-2xl bg-zetaGreen-50 border border-zetaGreen-400 text-center space-y-3">
              <CheckCircle2 size={46} className="text-zetaGreen-600 mx-auto animate-bounce" />
              <h4 className="text-xl font-black text-zetaPurple-900 font-display">Demo Scheduled Successfully!</h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                We have received your request for <strong>{formData.solution}</strong>. Our engineer will send a calendar link to <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-zetaGreen-500 hover:bg-zetaGreen-600 text-white font-black text-xs shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-zetaGreen-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Acme Enterprises"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-zetaGreen-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-zetaGreen-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+971 50 ... or +91 974..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-zetaGreen-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Solution</label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({...formData, solution: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-zetaGreen-500"
                  >
                    <option value="GEO (Generative Engine Optimization)">GEO (AI Visibility & Recommendations)</option>
                    <option value="anvex.ai Autonomous Agents">anvex.ai (Voice & Vision AI Agents)</option>
                    <option value="ZetaWap Cloud CRM">ZetaWap WhatsApp Cloud CRM</option>
                    <option value="Cloud ERP & AlignBooks">Cloud ERP Software & AlignBooks (UAE VAT)</option>
                    <option value="SAP Business One">SAP Business One Implementation</option>
                    <option value="TMBill Restaurant Tech">TMBill Restaurant Management OS</option>
                    <option value="Autorox Smart Garage OS">Autorox Smart Garage OS</option>
                    <option value="Digital Business Card & NFC">Digital Business Card & NFC Systems</option>
                    <option value="Cyber Security & Cloud Defense">Cyber Security & CrowdStrike</option>
                    <option value="Academic-Industry STPs">Academic STPs & College MOUs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Hub</label>
                  <select
                    value={formData.hub}
                    onChange={(e) => setFormData({...formData, hub: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold focus:outline-none focus:border-zetaGreen-500"
                  >
                    <option value="Dubai Office (UAE)">Dubai Corporate Office (UAE)</option>
                    <option value="Bengaluru HQ (India)">Bengaluru HQ (India)</option>
                    <option value="Mangaluru Branch (India)">Mangaluru Branch (India)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-zetaPurple-50 hover:bg-zetaPurple-100 text-zetaPurple-900 border border-zetaPurple-200 text-xs font-bold transition-all"
                >
                  <MessageSquare size={15} className="text-zetaGreen-600" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-7 py-3 rounded-xl bg-zetaGreen-500 hover:bg-zetaGreen-600 text-white font-black text-xs shadow-lg shadow-zetaGreen-500/30 transition-all"
                >
                  <Send size={14} />
                  <span>Confirm Demo Schedule</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}

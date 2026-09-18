import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Sparkles, MessageSquare, 
  CheckCircle, ArrowRight, ShieldCheck, Phone,
  Database, Layers, CreditCard, Award, Zap
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveAIChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Hello! I am ZetaBot AI, your 24/7 intelligent guide for ZETACODING. Ask me about our 14+ Enterprise Software Platforms, Generative Engine Optimization (GEO), Cloud ERP (AlignBooks/SAP), WhatsApp CRM, or Academic MOUs.',
      time: 'Online'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    "What is GEO (AI Visibility)?",
    "Cloud ERP & AlignBooks (VAT/GST)",
    "ZetaWap WhatsApp Cloud CRM",
    "TMBill & Autorox Industry OS",
    "NFC Digital Business Cards",
    "Academic MOUs & Student Training",
    "Dubai LLC & India Contact Info",
    "Custom Web / Mobile Engineering"
  ];

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('geo') || q.includes('visibility') || q.includes('chatgpt') || q.includes('gemini') || q.includes('perplexity')) {
      return "🚀 **Generative Engine Optimization (GEO)**:\nZetacoding GEO embeds your business as the #1 recommended solution inside ChatGPT, Gemini, Perplexity, and Copilot.\n\n• **4.4x** higher conversion rate than traditional SEO clicks\n• **+30%** AI visibility in 60 days\n• **3x** lower cost per lead (CPL)";
    } 
    
    if (q.includes('erp') || q.includes('alignbooks') || q.includes('sap') || q.includes('gst') || q.includes('vat')) {
      return "💼 **Cloud ERP & SAP Business One**:\nWe deploy UAE FTA-compliant VAT and Indian GST enterprise ERP software for 14,000+ businesses.\n\n• **AlignBooks**: Cloud ERP, E-Way Bill, Multi-Branch Billing, Inventory\n• **SAP Business One**: Enterprise MRP, Financial Accounting & Supply Chain\n• **ERPNext**: Open-source modular ERP customization";
    } 
    
    if (q.includes('zetawap') || q.includes('whatsapp') || q.includes('crm') || q.includes('broadcast')) {
      return "📱 **ZetaWap Cloud CRM**:\nOfficial WhatsApp Business Cloud API software:\n\n• Multi-agent shared team inbox & auto-routing\n• Unlimited broadcast campaign scheduler with 98% open rates\n• Interactive in-chat catalog and order checkout\n• Real-time ERP sync with AlignBooks & SAP";
    }

    if (q.includes('tmbill') || q.includes('autorox') || q.includes('restaurant') || q.includes('garage') || q.includes('pos')) {
      return "🍽️ **Industry Operating Systems**:\n\n• **TMBill**: Restaurant POS, cloud kitchen management, QR ordering & Swiggy/Zomato aggregator sync (14,000+ outlets)\n• **Autorox**: Cloud garage management & multi-brand automotive repair platform (36,000+ repair centers)";
    } 
    
    if (q.includes('nfc') || q.includes('card') || q.includes('business card') || q.includes('digital')) {
      return "💳 **NFC Smart Digital Business Cards**:\nContactless digital identity cards in Premium Matte PVC, Bamboo Wood, and Laser-Engraved Metal.\n\n• Instant 1-tap contact saving to phone address book\n• Custom corporate subdomains (yourname.yourcompany.com)\n• Dynamic real-time bio link editing & CRM lead capture";
    } 
    
    if (q.includes('mou') || q.includes('college') || q.includes('academic') || q.includes('student') || q.includes('stp') || q.includes('bmsit') || q.includes('svit')) {
      return "🎓 **Academic-Industry Collaborations (MOUs)**:\nAICTE-approved institutional partnerships with top universities (BMSIT, SVIT Bangalore, KNSIT, AITM, East West Group, MIT Kundapura):\n\n• Live IEEE Capstone project mentoring\n• Student Training Programs (STPs) in AI/ML & Cloud\n• Faculty Development Programs (FDPs) and campus placements";
    } 
    
    if (q.includes('dubai') || q.includes('bengaluru') || q.includes('contact') || q.includes('phone') || q.includes('office') || q.includes('email')) {
      return `🌐 **Global Office Coordinates**:\n\n• 🇮🇳 **Bengaluru HQ**: ${companyInfo.phones.india} (Rajanukunte, Bangalore)\n• 🇦🇪 **Dubai LLC Office**: ${companyInfo.phones.uae} (Deira, Dubai, UAE)\n• 🇮🇳 **Mangaluru Center**: City Point, Kodialbail, Mangaluru\n• ✉️ **Email**: ${companyInfo.emails.primary}`;
    }

    if (q.includes('web') || q.includes('app') || q.includes('custom') || q.includes('dev') || q.includes('react') || q.includes('flutter')) {
      return "💻 **Custom Software Engineering**:\nFull-cycle web & mobile architecture:\n\n• React.js, Next.js, Flutter, Kotlin, Python, and Node.js\n• High-throughput cloud-native APIs on AWS and Azure\n• Sub-second latency & enterprise SOC security";
    }

    return `⚡ Thank you for your inquiry about "${query}"! ZETACODING delivers complete smart technology ecosystems across India and the UAE. Connect directly with our engineering desk at ${companyInfo.phones.india} or WhatsApp our Dubai office at ${companyInfo.phones.uae}.`;
  };

  const handleSend = (textInput) => {
    const textToSend = textInput || inputVal;
    if (!textToSend.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMsg = { sender: 'user', text: textToSend, time: timeStr };
    const botReply = { sender: 'bot', text: getAIResponse(textToSend), time: timeStr };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInputVal('');
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50">
      
      {/* 3D Trigger Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full btn-3d-green text-slate-950 font-black text-xs sm:text-sm shadow-2xl transition-all duration-200 border border-white/40"
          aria-label="Open ZetaBot Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
          <Bot size={18} className="sm:w-5 sm:h-5 text-slate-950" />
          <span>Ask ZetaBot AI</span>
          <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-slate-950 font-mono text-[#85cc38] font-bold">24/7</span>
        </motion.button>
      )}

      {/* Expanded Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-[calc(100vw-24px)] max-w-[410px] sm:w-[410px] bg-[#0c0d16]/95 border border-[#72bf44]/50 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden flex flex-col h-[min(540px,82vh)] text-slate-100"
          >
            
            {/* Header */}
            <div className="bg-[#180826] px-4 py-3.5 border-b border-[#72bf44]/30 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 border border-[#72bf44] flex items-center justify-center shadow-md">
                  <img 
                    src="/assets/zetacoding_logo_transparent.png" 
                    alt="ZetaBot" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.src = "/assets/page_2_img_1.png"; }}
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-1.5 font-display">
                    <span>ZetaBot AI</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] font-mono font-bold">24/7</span>
                  </div>
                  <div className="text-[11px] text-[#85cc38] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#85cc38] animate-pulse" />
                    <span>Official AI Assistant • Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Container */}
            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080911] text-xs">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                      m.sender === 'user'
                        ? 'btn-3d-green text-slate-950 font-bold rounded-tr-none'
                        : 'bg-[#141824] border border-white/10 text-slate-100 rounded-tl-none font-medium'
                    }`}
                  >
                    <p className="whitespace-pre-line">
                      {m.text}
                    </p>
                    <span className={`text-[9px] block mt-1.5 text-right font-mono ${
                      m.sender === 'user' ? 'text-slate-900 font-bold' : 'text-slate-400'
                    }`}>
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions Chips */}
            <div className="p-2.5 bg-[#10131e] border-t border-white/10 overflow-x-auto whitespace-nowrap flex gap-1.5 text-[11px]">
              <span className="text-slate-400 font-bold text-[10px] uppercase shrink-0 py-1">Ask:</span>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#72bf44]/20 text-slate-300 hover:text-[#85cc38] border border-white/10 hover:border-[#72bf44]/40 transition-all shrink-0 font-medium text-[10px]"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#10131e] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about GEO, ERP, CRM, MOUs..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#72bf44] font-medium transition-all"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className={`p-2.5 rounded-xl text-slate-950 font-black transition-all shadow-md ${
                  inputVal.trim()
                    ? 'btn-3d-green cursor-pointer'
                    : 'bg-white/10 text-slate-500 opacity-60 cursor-not-allowed'
                }`}
                aria-label="Send query"
              >
                <Send size={16} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

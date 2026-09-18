import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Send, CheckCheck, Bot, Sparkles, 
  Users, Zap, Calendar, BarChart2, ShieldCheck, ArrowRight, Phone,
  Layers, ShoppingBag, Database, Radio, QrCode, Lock, CheckCircle2,
  Workflow, Sliders, Smartphone, Flame, FileSpreadsheet, RefreshCw,
  Check, CreditCard, HelpCircle
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';

export default function ZetaWapCRMPreview() {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: '👋 Welcome to Zetacoding ZetaWap Cloud CRM! Select a topic below or type your requirement:', 
      time: '10:42 AM' 
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatContainerRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const presetResponses = {
    "ERP & SAP Sync": "🔄 **ERP & SAP Integration**: ZetaWap CRM directly syncs in real-time with SAP Business One, AlignBooks, ERPNext, and custom SQL databases. Invoices, order confirmations, and delivery updates are auto-sent over WhatsApp without manual entry.",
    "In-Chat Catalog": "🛒 **WhatsApp Catalog & Checkout**: Display your full product inventory directly inside WhatsApp. Customers can browse, select items, and checkout with native payment gateway integrations.",
    "Multi-Agent Inbox": "👥 **Multi-Agent Routing**: Route incoming customer conversations to department queues (Sales, Support, Billing). Includes team internal notes, role permissions, and live agent chat transfers.",
    "Broadcast Campaigns": "📢 **Broadcast Scheduler**: Send high-conversion promotional updates, festival offers, and event notifications with 98% open rates without risking phone number bans via official Meta API.",
    "UAE VAT Invoicing": "💳 **UAE & India Compliance**: Generate FTA-compliant UAE VAT e-invoices and Indian GST e-way bills with QR codes directly inside the customer chat.",
    "AI Smart Chatbot": "🤖 **24/7 AI Autonomous Agent**: Built-in NLP intelligence trained on your business documents to resolve 80% of customer queries instantly without human intervention.",
    "Pricing & Plans": "💰 **Transparent Pricing**: Scalable monthly plans with unlimited customer contacts, free WhatsApp conversations every month, and multi-agent access.",
    "Book Live Demo": "📞 **Schedule a Demo**: Connect with our senior solution architect in Bengaluru or Dubai for a 1-on-1 walkthrough tailored to your business."
  };

  const getSmartReply = (userQuery) => {
    const q = userQuery.toLowerCase();
    if (presetResponses[userQuery]) {
      return presetResponses[userQuery];
    }
    if (q.includes('erp') || q.includes('sap') || q.includes('alignbooks')) {
      return presetResponses["ERP & SAP Sync"];
    } else if (q.includes('catalog') || q.includes('cart') || q.includes('ecom') || q.includes('shop')) {
      return presetResponses["In-Chat Catalog"];
    } else if (q.includes('price') || q.includes('cost') || q.includes('plan')) {
      return presetResponses["Pricing & Plans"];
    } else if (q.includes('demo') || q.includes('book') || q.includes('call')) {
      return presetResponses["Book Live Demo"];
    } else if (q.includes('broadcast') || q.includes('campaign') || q.includes('marketing')) {
      return presetResponses["Broadcast Campaigns"];
    } else if (q.includes('agent') || q.includes('team') || q.includes('routing')) {
      return presetResponses["Multi-Agent Inbox"];
    }
    return `⚡ Thank you for your inquiry regarding "${userQuery}". ZetaWap Cloud CRM provides official Meta Cloud API integrations, custom automated bot workflows, and ERP sync. Connect with our engineering desk for customized onboarding!`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const textToSend = inputVal.trim();
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMsg = { sender: 'client', text: textToSend, time: timeStr };
    const botReply = { sender: 'bot', text: getSmartReply(textToSend), time: timeStr };
    
    setMessages(prev => [...prev, userMsg, botReply]);
    setInputVal('');
  };

  const handlePresetClick = (presetKey) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMsg = { sender: 'client', text: presetKey, time: timeStr };
    const botReply = { sender: 'bot', text: presetResponses[presetKey], time: timeStr };
    
    setMessages(prev => [...prev, userMsg, botReply]);
  };

  return (
    <section className="py-8 space-y-12 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <MessageSquare size={14} className="text-[#85cc38]" />
            <span>Interactive WhatsApp CRM Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Cloud-Based <span className="text-[#85cc38]">ZetaWap CRM</span> Software
          </h2>
          <p className="mt-2 text-slate-300 text-base font-normal max-w-3xl">
            Where Every Chat Becomes a Business Opportunity. Official WhatsApp Business Cloud API with multi-agent inbox, broadcast scheduler, and automated chatbots.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column: 8 Feature Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white font-display">Everything Your Business Needs to Scale on WhatsApp</h3>
              <p className="text-sm text-slate-300 mt-1">
                Direct integration with your ERP, CRM, and website with zero middleware overhead. Click any feature below to preview it live:
              </p>
            </div>

            {/* 8 Feature Buttons in 3D */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "ERP & SAP Sync", desc: "Automated real-time invoices", icon: <Database size={16} className="text-[#38bdf8]" /> },
                { name: "In-Chat Catalog", desc: "Catalog browsing & checkout", icon: <ShoppingBag size={16} className="text-[#c084fc]" /> },
                { name: "Multi-Agent Inbox", desc: "Routing, queues & tags", icon: <Users size={16} className="text-[#818cf8]" /> },
                { name: "Broadcast Campaigns", desc: "Scheduled promo blasts", icon: <Calendar size={16} className="text-[#fbbf24]" /> },
                { name: "UAE VAT Invoicing", desc: "E-invoice with QR code", icon: <CreditCard size={16} className="text-[#2dd4bf]" /> },
                { name: "AI Smart Chatbot", desc: "24/7 NLP customer support", icon: <Bot size={16} className="text-[#85cc38]" /> },
                { name: "Pricing & Plans", desc: "Flexible monthly tiers", icon: <Zap size={16} className="text-[#f87171]" /> },
                { name: "Book Live Demo", desc: "1-on-1 architect walkthrough", icon: <Phone size={16} className="text-[#85cc38]" /> },
              ].map((feat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePresetClick(feat.name)}
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-[#72bf44]/60 transition-all text-left flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-md"
                >
                  <div className="w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-[#72bf44]/50 transition-transform">
                    {feat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs group-hover:text-[#85cc38] transition-colors leading-tight">{feat.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{feat.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl glass-panel-glow border border-[#72bf44]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="text-xs text-slate-200 font-medium flex items-center gap-2">
                <Sparkles size={18} className="text-[#85cc38] shrink-0" />
                <span><strong>13+ Smart Features:</strong> Unlimited Broadcasts, AI Assistant, Smart Filters, & Webhook Integrations.</span>
              </div>
              <Link
                to="/products/zetawap-crm"
                className="px-6 py-2.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shrink-0 shadow-md flex items-center gap-1.5 transition-all"
              >
                <Phone size={14} />
                <span>Get ZetaWap CRM</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Phone Mockup with WhatsApp Simulator */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-md rounded-3xl border-2 border-[#72bf44]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[540px] bg-[#0c1317]">
              
              {/* Phone Top Notch & Header */}
              <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between text-white border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#72bf44] flex items-center justify-center">
                      <img 
                        src="/assets/zetacoding_logo_transparent.png" 
                        alt="Bot" 
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.src = "/assets/page_2_img_1.png"; }}
                      />
                    </div>
                    <span className="w-2.5 h-2.5 bg-[#72bf44] rounded-full absolute bottom-0 right-0 border border-[#1f2c34]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1">
                      <span>ZetaWap Business AI</span>
                      <CheckCircle2 size={13} className="text-[#85cc38]" />
                    </div>
                    <div className="text-[10px] text-[#85cc38] font-mono">Official Meta Verified</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] font-bold">24/7 Online</span>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0b141a]">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col ${msg.sender === 'client' ? 'items-end' : 'items-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs shadow-md ${
                        msg.sender === 'client'
                          ? 'bg-[#005c4b] text-white rounded-br-none'
                          : 'bg-[#202c33] text-slate-100 rounded-bl-none border border-white/5'
                      }`}
                    >
                      <div className="whitespace-pre-line leading-relaxed">{msg.text}</div>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                        <span>{msg.time}</span>
                        {msg.sender === 'client' && <CheckCheck size={12} className="text-[#53bdeb]" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="bg-[#1f2c34] p-3 flex items-center gap-2 border-t border-white/10">
                <input
                  type="text"
                  placeholder="Type an inquiry (e.g. ERP, catalog, demo)..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#2a3942] text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#72bf44]"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-[#00a884] hover:bg-[#008f6f] text-white flex items-center justify-center transition-transform hover:scale-105"
                >
                  <Send size={15} />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

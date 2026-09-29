import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, CheckCircle2, ArrowRight,
  Sparkles, Terminal, Smartphone, Database, Globe,
  Shield, Cpu, Phone, Bot, Server, Lock,
  Zap, Search, BarChart3, LineChart, MessageSquare, Layers
} from 'lucide-react';
import { services } from '../data/companyData';
import Card3D from './Card3D';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('web-app-dev');

  return (
    <section id="services" className="py-4 space-y-8 text-slate-100 w-full">
      <div className="w-full">
        
        {/* 4 Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-8">
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveTab(svc.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                activeTab === svc.id
                  ? 'btn-3d-green text-slate-950 font-black'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {svc.id === 'cyber-security' && <Shield size={18} />}
              {svc.id === 'digital-transformation' && <Sparkles size={18} />}
              {svc.id === 'web-app-dev' && <Code2 size={18} />}
              {svc.id === 'ai-agents-chatbots' && <Bot size={18} />}
              <span>{svc.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: CYBER SECURITY SERVICE */}
          {activeTab === 'cyber-security' && (
            <motion.div
              key="cyber-security"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Blue PPT Security Framework
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1 font-display">
                      Cyber Security <span className="text-[#85cc38]">Service</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Comprehensive enterprise cyber defense, continuous vulnerability assessments, and 24/7 SOC incident containment aligned with international standards.
                    </p>
                  </div>

                  {/* 4 Security Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center mb-2">
                        <Lock size={16} />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">VAPT Assessments</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Web application, mobile API, network, and cloud vulnerability penetration testing with executive remediation roadmaps.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center mb-2">
                        <Server size={16} />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">24/7 Managed SOC</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Continuous SIEM telemetry ingestion, anomaly detection, alert correlation, and sub-minute incident response.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center mb-2">
                        <Shield size={16} />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">Cloud Defense & Zero Trust</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Hardening AWS, Azure & private cloud perimeters with strict least-privilege IAM and encrypted micro-segmentation.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center mb-2">
                        <Zap size={16} />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">Compliance & Audits</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        100% audit-readiness and governance for ISO 27001, UAE NESA, GDPR, and Indian CERT-In statutory requirements.
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Blue Team Defense Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Static & Dynamic Code Analysis (SAST/DAST)",
                        "External Threat Surface Reconnaissance",
                        "Incident Containment & Forensic Auditing",
                        "Excel & CSV Audit-Ready Telemetry Reports",
                        "Continuous MITRE ATT&CK Threat Mapping",
                        "Cloud Posture Management (CSPM)"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium p-1">
                          <CheckCircle2 size={15} className="text-[#85cc38] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-lg transition-all"
                    >
                      <span>Schedule a Cyber Security Consultation</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right: SOC Command Display */}
                <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Security Operations Center (SOC)
                      </h4>
                    </div>
                    <span className="text-[11px] text-[#85cc38] font-mono font-bold">24/7 Continuous Defense</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs space-y-2 text-slate-300">
                    <div className="text-slate-400 flex items-center justify-between">
                      <span>TELEMETRY STATUS: ACTIVE</span>
                      <span className="text-emerald-400">NORMAL</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      &gt; Ingesting network packets, cloud firewalls & auth endpoints...
                    </div>
                    <div className="text-[11px] text-[#85cc38]">
                      &gt; CIPHER WAF: Real-time SQLi, XSS & DDoS protection active.
                    </div>
                    <div className="text-[11px] text-purple-300">
                      &gt; Sachet SOC: Continuous log correlation & Excel incident reporting.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-black text-[#85cc38] font-display">&lt;60s</div>
                      <div className="text-[11px] text-slate-300 mt-1">Incident Triage Latency</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-black text-white font-display">100%</div>
                      <div className="text-[11px] text-slate-300 mt-1">Compliance Audit Pass</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#72bf44]/10 border border-[#72bf44]/30 space-y-2">
                    <div className="text-xs font-bold text-[#85cc38] uppercase tracking-wider flex items-center gap-1.5">
                      <Shield size={14} />
                      <span>Regulatory Standards Supported</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Audited for ISO 9001:2015, ISO 27001, UAE NESA Cybersecurity Standard, GDPR, and Indian CERT-In guidelines.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: AI DIGITAL TRANSFORMATION */}
          {activeTab === 'digital-transformation' && (
            <motion.div
              key="digital-transformation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      SEO & GEO Services (Pixis.AI)
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1 font-display">
                      AI Digital <span className="text-[#85cc38]">Transformation</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Accelerate brand reach and conversion through Generative Engine Optimization (GEO), omnichannel automation, and high-impact AI digital marketing.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { 
                        title: "SEO & GEO Services (Pixis.AI)", 
                        desc: "Next-generation Generative Engine Optimization ensuring your enterprise is recommended directly by ChatGPT, Google Gemini, Perplexity, and Copilot." 
                      },
                      { 
                        title: "Omnichannel Social Media Automation", 
                        desc: "Automated 24/7 reply engines across Meta (Facebook & Instagram) comments, direct messages, and brand mentions." 
                      },
                      { 
                        title: "Google My Business (GMB) Automation", 
                        desc: "Automated review reply engine, localized SEO blog publishing, and map pack rank elevation." 
                      },
                      { 
                        title: "WhatsApp Cloud API & Conversational Funnels", 
                        desc: "Official Meta-verified WhatsApp Business Cloud API with broadcast sequences, product catalogs, and instant payment links." 
                      },
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5 text-slate-200"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          <div className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-lg transition-all"
                    >
                      <span>Inquire for AI Digital Transformation</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right: Omnichannel & GEO Telemetry */}
                <div className="lg:col-span-6 glass-panel border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Sparkles size={16} className="text-[#85cc38]" />
                      <span>Omnichannel AI Coverage</span>
                    </h4>
                    <span className="text-[11px] text-[#85cc38] font-bold">2026 Engine Ready</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-[#85cc38] mb-1">Pixis.AI (GEO Engine)</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Proprietary knowledge-graph injection for LLM recommendation indexing and brand citation.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Meta Social Auto-Reply</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Zero lead leakage on Instagram & Facebook DMs, ad comment qualification, and story mentions.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Official WhatsApp Cloud</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Verified green-tick multi-agent inbox, automated notifications, and interactive quick-reply flows.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">GMB Review Booster</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        NFC review standees, intelligent sentiment-based replies, and 5-star reputation management.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#72bf44]/10 border border-[#72bf44]/30 space-y-2 mt-4">
                    <div className="text-xs font-bold text-[#85cc38] uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 size={15} />
                      <span>Proven Performance Metrics</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div>
                        <div className="text-lg font-black text-white font-display">+30%</div>
                        <div className="text-[10px] text-slate-300">AI Visibility</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-white font-display">4.4x</div>
                        <div className="text-[10px] text-slate-300">Conversion Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-white font-display">3x</div>
                        <div className="text-[10px] text-slate-300">Lower CPL</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: WEB APPLICATION DEVELOPMENT (AI POWERED - IMPORTANT HIGHLIGHT) */}
          {activeTab === 'web-app-dev' && (
            <motion.div
              key="web-app-dev"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider px-3 py-1 rounded-full bg-[#72bf44]/20 border border-[#72bf44]/30 inline-block">
                      AI Powered — Important Highlight
                    </span>
                    <h3 className="text-3xl font-black text-white mt-3 font-display">
                      You Dream It. <span className="text-[#85cc38]">We Code It.</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Your vision, our engineering expertise, one powerful partnership. We craft fast, responsive, and secure digital web and mobile applications supercharged with AI.
                    </p>
                  </div>

                  {/* 4 Pillars from Page 5 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Globe size={16} className="text-[#85cc38]" />
                        <span className="text-xs font-bold text-white">Static Website Dev</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Sub-second load times, high-converting corporate portals, and SEO-engineered landing pages built for peak lead generation.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Database size={16} className="text-[#85cc38]" />
                        <span className="text-xs font-bold text-white">Dynamic Website Dev</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Complex data-driven cloud web platforms, custom SaaS architectures, role-based dashboards, and high-throughput APIs.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers size={16} className="text-[#85cc38]" />
                        <span className="text-xs font-bold text-white">E-Commerce Apps</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Custom shopping carts, payment gateway integrations (Stripe, UPI, Telr), real-time inventory synchronization, and multi-vendor systems.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Smartphone size={16} className="text-[#85cc38]" />
                        <span className="text-xs font-bold text-white">Mobile Apps Dev</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Native iOS (Swift), Android (Kotlin), and cross-platform Flutter mobile applications with offline sync and push notifications.
                      </p>
                    </div>
                  </div>

                  {/* Capabilities checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">AI Engineering Highlights:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "AI Copilot & Code Generation Integration",
                        "UI/UX Research & Interactive Prototyping",
                        "Headless & Microservices Cloud Architecture",
                        "Continuous Integration & Automated Testing (CI/CD)",
                        "Progressive Web Apps (PWA) with Offline Cache",
                        "Enterprise SLA & 99.9% Uptime Hosting"
                      ].map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium p-1">
                          <CheckCircle2 size={15} className="text-[#85cc38] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-lg transition-all"
                    >
                      <span>Discuss Your Project Architecture</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right: Modern Tech Stack Grid */}
                <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Terminal size={16} className="text-[#85cc38]" />
                      <span>Supported Technology Ecosystem</span>
                    </h4>
                    <span className="text-[11px] text-[#85cc38] font-mono font-bold">Cloud-Native</span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                    {[
                      { name: 'React', type: 'Frontend' },
                      { name: 'Next.js', type: 'Fullstack' },
                      { name: 'Flutter', type: 'Cross-Mobile' },
                      { name: 'Kotlin', type: 'Android' },
                      { name: 'Swift', type: 'iOS' },
                      { name: 'Python', type: 'AI & Data' },
                      { name: 'Django', type: 'Backend' },
                      { name: 'Node.js', type: 'Microservices' },
                      { name: 'Laravel', type: 'PHP API' },
                      { name: 'PostgreSQL', type: 'Relational DB' },
                      { name: 'MongoDB', type: 'NoSQL DB' },
                      { name: 'AWS Cloud', type: 'Infra & DevOps' },
                    ].map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-center shadow-sm hover:border-[#72bf44]/60 transition-colors"
                      >
                        <div className="font-bold text-white text-xs">{tech.name}</div>
                        <div className="text-[10px] text-[#85cc38] mt-0.5">{tech.type}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mt-4 space-y-2">
                    <div className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Turnkey Enterprise Delivery
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Every web and app build undergoes rigorous automated security screening, performance optimization, and SEO readiness before go-live.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: AI AGENTS & AI CHATBOTS */}
          {activeTab === 'ai-agents-chatbots' && (
            <motion.div
              key="ai-agents-chatbots"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider px-3 py-1 rounded-full bg-[#72bf44]/20 border border-[#72bf44]/30 inline-block">
                      anvex.ai & Autonomous Workforce
                    </span>
                    <h3 className="text-3xl font-black text-white mt-3 font-display">
                      AI Agents & <span className="text-[#85cc38]">AI Chatbots</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Designing, training, and deploying purpose-built autonomous AI agents that reason, analyze data, take action, and operate 24/7 across critical business domains.
                    </p>
                  </div>

                  {/* 5 Pillars from Page 5 */}
                  <div className="space-y-3">
                    {[
                      {
                        title: "Building Intelligent Custom Agent",
                        desc: "Domain-specific fine-tuned LLMs trained on company internal knowledge bases, ERP data, and standard operating procedures (SOPs)."
                      },
                      {
                        title: "Business Analyst Agent",
                        desc: "Real-time market intelligence, automated competitor telemetry scraping, financial metric summaries, and automated executive reporting."
                      },
                      {
                        title: "Build Stock / Crypto / Forex Agent",
                        desc: "Algorithmic sentiment analysis, technical telemetry, high-frequency pattern detection, and continuous market monitoring."
                      },
                      {
                        title: "Build Voice Calling Agent",
                        desc: "Ultra-low latency (<450ms) telephony conversational AI with natural tone modulation for inbound receptionist support and outbound follow-up calls."
                      },
                      {
                        title: "Build Digital AI Employees (BigDot)",
                        desc: "24/7 autonomous digital staff capable of handling complex operations, CRM updates, customer onboarding, and technical ticketing without human intervention."
                      }
                    ].map((agent, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5 hover:border-[#72bf44]/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{agent.title}</div>
                          <div className="text-xs text-slate-300 mt-1 leading-relaxed">{agent.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-lg transition-all"
                    >
                      <span>Deploy Autonomous AI Agents</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right: AI Agent Cognitive Architecture */}
                <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Bot size={16} className="text-[#85cc38]" />
                      <span>Cognitive Agent Architecture</span>
                    </h4>
                    <span className="text-[11px] text-[#85cc38] font-mono font-bold">Multi-Modal Core</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-xs">
                        <MessageSquare size={15} className="text-[#85cc38]" />
                        <span>Conversational Intelligence</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Multi-turn contextual reasoning, sentiment tracking, and flawless multilingual language generation.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-xs">
                        <Phone size={15} className="text-[#85cc38]" />
                        <span>Voice Telephony & SIP</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Sub-second duplex conversational voice agent directly integrated with enterprise PBX and Twilio SIP trunks.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-xs">
                        <LineChart size={15} className="text-[#85cc38]" />
                        <span>Financial & Forex Feeds</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Live price streaming, sentiment analysis from financial news, and autonomous algorithmic execution logic.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5 text-white font-bold text-xs">
                        <Cpu size={15} className="text-[#85cc38]" />
                        <span>Digital Employee (BigDot)</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Full workflow automation across ERP, CRM, emails, and internal messaging tools with audit logging.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#72bf44]/10 border border-[#72bf44]/30 space-y-2 mt-4">
                    <div className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Enterprise Security & Privacy
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All custom agents can be hosted on isolated private cloud infrastructure with strict data isolation, ensuring zero training data leakage to public models.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}

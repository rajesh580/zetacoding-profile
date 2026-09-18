import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Megaphone, Code2, GraduationCap, CheckCircle2, ArrowRight,
  Layers, Sparkles, Terminal, Smartphone, Database, Globe,
  Shield, Cpu, BookOpen, Laptop, Phone
} from 'lucide-react';
import { services } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('web-app-dev');

  return (
    <section id="services" className="py-4 space-y-12 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <Cpu size={14} className="text-[#85cc38]" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Our Core <span className="text-[#85cc38]">Services</span>
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-normal max-w-3xl">
            Empowering modern enterprises with AI-driven marketing automation, custom web/mobile engineering, and premier academic-industry 4.0 programs.
          </p>
        </AnimatedSection>

        {/* Top 3 Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveTab(svc.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                activeTab === svc.id
                  ? 'btn-3d-green text-slate-950 font-black'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {svc.id === 'digital-transformation' && <Megaphone size={18} />}
              {svc.id === 'web-app-dev' && <Code2 size={18} />}
              {svc.id === 'academic-industry' && <GraduationCap size={18} />}
              <span>{svc.title}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Web & App Development */}
        <AnimatePresence mode="wait">
          {activeTab === 'web-app-dev' && (
            <motion.div
              key="web-app-dev"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Full-Cycle Engineering
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1 font-display">
                      You Dream It. <span className="text-[#85cc38]">We Code It.</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Your vision, our expertise, one powerful partnership. We build fast, responsive, and secure digital applications engineered for high performance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[#85cc38] font-bold text-xs mb-1">Fast & Responsive</div>
                      <div className="text-[11px] text-slate-300">Sub-second load times & 60fps animations.</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-white font-bold text-xs mb-1">Custom-Built</div>
                      <div className="text-[11px] text-slate-300">Tailored for your brand, not templates.</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-white font-bold text-xs mb-1">Secure by Design</div>
                      <div className="text-[11px] text-slate-300">Enterprise data privacy from Day 1.</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Web & Cloud Applications",
                        "Native iOS & Android Mobile Apps",
                        "UI/UX Research & Prototype Design",
                        "Headless E-Commerce Solutions",
                        "API & Microservices Architecture",
                        "Progressive Web Apps (PWA)"
                      ].map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium p-1">
                          <CheckCircle2 size={15} className="text-[#85cc38]" />
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
                      { name: 'Flutter', type: 'Mobile' },
                      { name: 'Kotlin', type: 'Android' },
                      { name: 'Python', type: 'AI / Backend' },
                      { name: 'Django', type: 'Backend' },
                      { name: 'Laravel', type: 'PHP API' },
                      { name: 'Node.js', type: 'Microservices' },
                      { name: 'MongoDB', type: 'NoSQL' },
                      { name: 'PostgreSQL', type: 'SQL' },
                      { name: 'AWS Cloud', type: 'Infra' },
                      { name: 'Azure', type: 'Cloud' },
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
                </div>

              </div>
            </motion.div>
          )}

          {/* Tab 2: AI-Powered Marketing Suite */}
          {activeTab === 'digital-transformation' && (
            <motion.div
              key="digital-transformation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Omni-Channel Automation
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1 font-display">
                      AI-Powered Marketing & <span className="text-[#85cc38]">Digital Growth</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Automate conversations, manage customer inquiries 24/7 across Meta & Google, and drive compounding brand reach with AI agents.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Social Media Management & Automation", desc: "Auto reply to Facebook & Instagram comments, DMs, and story mentions." },
                      { title: "Google My Business (GMB) Automation", desc: "Automated review reply engine, 150+ monthly localized blogs, QR review standees." },
                      { title: "SEO & SMO Services Automation", desc: "Combined generative engine optimization (GEO) and classical organic positioning." },
                      { title: "Brand Identity & Creative Design", desc: "Logos, corporate style guides, marketing collaterals, and high-impact digital creatives." },
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-slate-200"
                      >
                        <div className="w-7 h-7 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{item.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 glass-panel border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                  <h4 className="text-base font-bold text-white mb-2">Omnichannel AI Coverage</h4>
                  
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Facebook Automation</div>
                      <p className="text-[11px] text-slate-400">Auto replies, ad comment lead routing, and chatbot qualification.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Instagram Automation</div>
                      <p className="text-[11px] text-slate-400">Story mention replies, DM keyword funnels, and anti-spam protection.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">WhatsApp Cloud API</div>
                      <p className="text-[11px] text-slate-400">Official Meta verified business API with broadcast and catalog flows.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Google My Business</div>
                      <p className="text-[11px] text-slate-400">Automated review boosting, map pack rank climbing, and local SEO.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#85cc38] font-bold">99.9% Automation Uptime</span>
                    <Link
                      to="/contact"
                      className="px-6 py-2.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs flex items-center gap-1.5"
                    >
                      <Phone size={14} />
                      <span>Inquire for Marketing AI</span>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Tab 3: Academic - Industry 4.0 Services */}
          {activeTab === 'academic-industry' && (
            <motion.div
              key="academic-industry"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">
                      Education & Industry Collaboration
                    </span>
                    <h3 className="text-3xl font-black text-white mt-1 font-display">
                      Academic - Industry <span className="text-[#85cc38]">Services</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      Accredited by AICTE and collaborating with top engineering institutions to incubate IEEE projects, student internships, and faculty development.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { title: "Student Internships", desc: "Live corporate sprint participation with industry architect mentorship." },
                      { title: "Academic IEEE Projects", desc: "End-to-end guidance for final year capstone & research publications." },
                      { title: "Student Training (STPs)", desc: "Hands-on bootcamps in AI/ML, Cloud DevOps, and Blockchain." },
                      { title: "Faculty Programs (FDPs)", desc: "Upskilling professors and lecturers on next-gen tech stacks." },
                    ].map((col, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="text-xs font-bold text-white mb-1">{col.title}</div>
                        <div className="text-[11px] text-slate-400">{col.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Academic Disciplines */}
                <div className="lg:col-span-6 glass-panel border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Academic Disciplines & Degrees Supported
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
                    {[
                      "CSE (Computer Science)",
                      "Artificial Intelligence & ML",
                      "Data Science & Analytics",
                      "Cyber Security & Forensics",
                      "Blockchain & Web3",
                      "ISE (Info Science)",
                      "ECE (Electronics)",
                      "B.E / B.Tech / M.Tech",
                      "BCA / MCA / B.Sc",
                      "Polytechnic / Diploma",
                      "MBA / BBA Tech Mgmt",
                      "Ph.D Research Labs"
                    ].map((discipline, idx) => (
                      <div 
                        key={idx} 
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium shadow-sm hover:border-[#72bf44]/50 transition-colors"
                      >
                        {discipline}
                      </div>
                    ))}
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

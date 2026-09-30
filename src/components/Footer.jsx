import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ onOpenCertModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#140625] via-[#0b0314] to-[#07020d] border-t border-[#a855f7]/30 text-slate-300 text-xs shadow-2xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-64 bg-[#7e22ce]/22 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[600px] h-64 bg-[#9333ea]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Top Neon Accent Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#72bf44] to-transparent shadow-[0_0_10px_#72bf44]" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand with Illuminated Logo (Transparent Background per specification) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-transparent p-0.5 shadow-xl flex items-center justify-center border-2 border-[#72bf44] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(114,191,68,0.5)] transition-all overflow-hidden shrink-0">
                <img 
                  src="/assets/zetacoding_logo_transparent.png" 
                  alt="Zetacoding Logo" 
                  className="w-full h-full max-h-7 max-w-7 object-contain filter drop-shadow"
                  onError={(e) => {
                    e.target.src = "/assets/page_2_img_1.png";
                  }}
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white font-display tracking-wider block">
                  ZETA<span className="text-[#85cc38]">CODING</span>
                </span>
                <span className="block text-[10px] text-[#85cc38] tracking-widest uppercase font-bold">
                  INDIA (HQ) • U.A.E (DUBAI)
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering businesses with smart technology. Delivering industry-grade software, AI agents, Cloud ERP solutions, and academic-industry collaboration.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-300 pt-2 font-medium">
              <div><strong className="text-white font-bold">India:</strong> {companyInfo.legalNames?.india || companyInfo.legalEntities?.indiaHQ?.name}</div>
              <div><strong className="text-white font-bold">UAE:</strong> {companyInfo.legalNames?.uae || companyInfo.legalEntities?.uaeLLC?.name}</div>
            </div>
          </div>

          {/* Col 2: Key Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#85cc38]" />
              <span>Key Platforms</span>
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">CIPHER Web Security</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">AlignBooks Cloud ERP</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Prospect AI Lead Engine</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Digital Business Cards</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Smart Ordering</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Restaurant OS (TMBill)</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Garage OS (AutoFox)</Link></li>
            </ul>
          </div>

          {/* Col 3: Pages & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>Pages & Services</span>
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">Cyber Security Services</Link></li>
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">AI Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">Web Application Development</Link></li>
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">AI Agents & Chatbots</Link></li>
              <li><Link to="/blogs" className="hover:text-[#85cc38] transition-colors">Blogs & Insights</Link></li>
              <li><Link to="/about" className="hover:text-[#85cc38] transition-colors">About Us & Journey</Link></li>
              <li><Link to="/contact" className="hover:text-[#85cc38] transition-colors">Contact Global Hubs</Link></li>
            </ul>
          </div>

          {/* Col 4: Global Hubs Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Globe size={12} className="text-[#85cc38]" />
              <span>Global Hubs</span>
            </h4>
            <div className="space-y-3 text-[11px] text-slate-400">
              <div>
                <span className="text-white font-bold block text-xs">Bengaluru HQ (India)</span>
                <span className="block text-slate-300">Bengaluru - 560064</span>
                <a href="tel:+918867845719" className="block text-[#85cc38] font-mono font-bold hover:underline mt-0.5">
                  +91 8867845719
                </a>
              </div>

              <div>
                <span className="text-white font-bold block text-xs">Dubai Office (UAE)</span>
                <span className="block">Burj Al Nahar Complex, Deira, Dubai</span>
                <a href={`tel:${companyInfo.phones.uae}`} className="block text-[#38bdf8] font-mono hover:underline mt-0.5">
                  {companyInfo.phones.uae}
                </a>
              </div>

              <div className="pt-2 space-y-1.5">
                <a 
                  href="mailto:info@zetacoding.com" 
                  className="flex items-center gap-1.5 text-slate-200 hover:text-[#85cc38] transition-colors font-medium"
                >
                  <Mail size={13} className="text-[#85cc38]" />
                  <span>info@zetacoding.com</span>
                </a>
                <a 
                  href="https://www.zetacoding.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#85cc38] transition-colors"
                >
                  <Globe size={13} className="text-[#85cc38]" />
                  <span>www.zetacoding.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Bold & Centered Copyright (Bottom links removed per specification) */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-center">
          <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
            &copy; {new Date().getFullYear()} ZETACODING (Zetacoding Innovative Solutions &amp; Zetacoding Information Technology L.L.C). All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#85cc38] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}

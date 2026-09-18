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
          
          {/* Col 1: Brand with Illuminated Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-white/95 p-1.5 shadow-2xl flex items-center justify-center border-2 border-[#72bf44] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(114,191,68,0.5)] transition-all">
                <img 
                  src="/assets/zetacoding_logo_transparent.png" 
                  alt="Zetacoding Logo" 
                  className="w-full h-full object-contain"
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

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenCertModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#72bf44]/15 hover:bg-[#72bf44] text-[#85cc38] hover:text-slate-950 border border-[#72bf44]/40 text-xs font-bold transition-all shadow-md group"
              >
                <ShieldCheck size={14} className="group-hover:scale-110 transition-transform" />
                <span>Verified Legal Licenses & ISO</span>
              </button>
            </div>
          </div>

          {/* Col 2: Key Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#85cc38]" />
              <span>Key Platforms</span>
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><Link to="/geo-ai" className="hover:text-[#85cc38] transition-colors">GEO (AI Visibility)</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">anvex.ai Autonomous Agents</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Cloud ERP & AlignBooks</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">SAP Business One</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">TMBill Restaurant Tech</Link></li>
              <li><Link to="/products" className="hover:text-[#85cc38] transition-colors">Autorox Garage OS</Link></li>
              <li><Link to="/products/digital-business-card" className="hover:text-[#85cc38] transition-colors">NFC Digital Business Cards</Link></li>
            </ul>
          </div>

          {/* Col 3: Pages & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>Pages & Services</span>
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">Web & Mobile App Dev</Link></li>
              <li><Link to="/services" className="hover:text-[#85cc38] transition-colors">AI Marketing Automation</Link></li>
              <li><Link to="/academic-mous" className="hover:text-[#85cc38] transition-colors">IEEE Projects Support</Link></li>
              <li><Link to="/academic-mous" className="hover:text-[#85cc38] transition-colors">Student Training (STPs)</Link></li>
              <li><Link to="/academic-mous" className="hover:text-[#85cc38] transition-colors">Faculty Programs (FDPs)</Link></li>
              <li><Link to="/certifications" className="hover:text-[#85cc38] transition-colors">ISO 9001:2015 & DED</Link></li>
              <li><Link to="/about" className="hover:text-[#85cc38] transition-colors">Our Journey (2021-2026)</Link></li>
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
                <span className="block">Yelahanka, Bengaluru - 560064</span>
                <a href={`tel:${companyInfo.phones.india}`} className="block text-[#85cc38] font-mono hover:underline mt-0.5">
                  {companyInfo.phones.india}
                </a>
              </div>

              <div>
                <span className="text-white font-bold block text-xs">Dubai Office (UAE)</span>
                <span className="block">Burj Al Nahar Complex, Deira, Dubai</span>
                <a href={`tel:${companyInfo.phones.uae}`} className="block text-[#85cc38] font-mono hover:underline mt-0.5">
                  {companyInfo.phones.uae}
                </a>
              </div>

              <div className="pt-2 space-y-1.5">
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#85cc38] transition-colors"
                >
                  <Mail size={13} className="text-[#85cc38]" />
                  <span>{companyInfo.email}</span>
                </a>
                <a 
                  href={companyInfo.url} 
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} ZETACODING (Zetacoding Innovative Solutions & Zetacoding Information Technology L.L.C). All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-slate-300">
            <button
              onClick={onOpenCertModal}
              className="hover:text-[#85cc38] transition-colors font-medium"
            >
              Legal Licenses & Tax Compliance
            </button>
            <span>•</span>
            <Link to="/about" className="hover:text-[#85cc38] transition-colors font-medium">About Us</Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white transition-all flex items-center gap-1 shadow-md"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

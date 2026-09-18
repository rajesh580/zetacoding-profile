import React from 'react';
import { Building2, GraduationCap, Handshake, MapPin, CheckCircle, Award, Sparkles, ExternalLink } from 'lucide-react';
import { techPartners, academicMOUs } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';

export default function TechPartnersMOU() {
  return (
    <section id="academic-mous" className="py-4 space-y-16 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Section Header */}
        <AnimatedSection className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-3 border border-[#72bf44]/30 shadow-sm animate-pulse-glow">
            <Handshake size={14} className="text-[#85cc38]" />
            <span>Alliances & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Our Technology Partners & <span className="text-[#85cc38]">Academic MOUs</span>
          </h2>
          <p className="mt-2 text-slate-300 text-base sm:text-lg font-normal max-w-3xl">
            Collaborating with 16+ global enterprise technology leaders and AICTE-accredited universities across India and the Middle East.
          </p>
        </AnimatedSection>

        {/* 10 Industry-Academic Collaborations (MOUs) Grid */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#72bf44]/30 w-full mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85cc38] uppercase tracking-wider mb-1">
                <Award size={14} />
                <span>Official Institutional Emblems</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Our Industry-Academic Collaborations <span className="text-[#85cc38]">(MOUs)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Bridging academia and modern software engineering with live student training programs, IEEE project labs, and faculty development.
              </p>
            </div>
            <span className="text-xs font-bold text-[#85cc38] bg-[#72bf44]/15 px-4 py-2 rounded-full border border-[#72bf44]/30 self-start md:self-auto shadow-sm">
              10+ Active Institutional MOUs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
            {academicMOUs.map((mou) => (
              <Card3D
                key={mou.id}
                maxTilt={12}
                className="p-5 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Logo Container */}
                  <div className="w-full h-28 rounded-2xl bg-white/95 border border-white/10 p-2 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-md">
                    <img 
                      src={mou.logo} 
                      alt={mou.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <span className="text-[9px] uppercase font-mono font-bold text-[#85cc38] bg-[#72bf44]/15 px-2 py-0.5 rounded border border-[#72bf44]/30 inline-block mb-1.5">
                    {mou.type}
                  </span>

                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#85cc38] transition-colors font-display">
                    {mou.name}
                  </h4>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-2">
                    <MapPin size={12} className="shrink-0 text-[#85cc38]" />
                    <span className="line-clamp-1">{mou.location}</span>
                  </div>

                  <p className="text-[11px] text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {mou.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <span className="flex items-center gap-1 text-[#85cc38] font-semibold">
                    <CheckCircle size={12} className="text-[#85cc38]" />
                    Active MOU
                  </span>
                  <span className="text-slate-400 font-medium">{mou.tagline}</span>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs text-slate-200 flex items-center gap-2 shadow-sm">
            <Sparkles size={16} className="text-[#85cc38] shrink-0" />
            <span>AICTE Approved Academic Partner for Student Training Programs (STPs), IEEE Final-Year Projects, and Faculty Upskilling.</span>
          </div>
        </div>

        {/* 16 Technology Partners Grid */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2 font-display">
                <Building2 className="text-[#85cc38]" size={24} />
                <span>Our Technology Partners</span>
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Strategic software alliances delivering integrated Cloud ERP, AI agents, POS, and cybersecurity suites.
              </p>
            </div>
            <span className="text-xs font-bold text-[#85cc38] bg-[#72bf44]/15 px-3.5 py-1.5 rounded-full border border-[#72bf44]/30 hidden sm:inline-block shadow-sm">
              16 Strategic Alliances
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {techPartners.map((partner, idx) => (
              <Card3D
                key={idx}
                maxTilt={14}
                className="p-5 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-full h-24 rounded-2xl bg-white/95 border border-white/10 p-2.5 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-md">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <span className="text-[10px] uppercase font-mono font-bold text-[#85cc38] bg-[#72bf44]/15 px-2.5 py-1 rounded-md border border-[#72bf44]/30 inline-block mb-2">
                    {partner.type}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#85cc38] transition-colors font-display">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

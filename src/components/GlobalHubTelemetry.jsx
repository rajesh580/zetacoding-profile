import React, { useState, useEffect } from 'react';
import { 
  Globe, Clock, MapPin, Phone, ShieldCheck, 
  Activity, ArrowUpRight, Wifi, Sparkles, Building2, CheckCircle2 
} from 'lucide-react';
import { companyInfo, legalDetails } from '../data/companyData';
import Card3D from './Card3D';
import { playSubtleClick } from '../utils/soundFX';

export default function GlobalHubTelemetry({ onOpenCertModal }) {
  const [indiaTime, setIndiaTime] = useState('');
  const [dubaiTime, setDubaiTime] = useState('');
  const [latency, setLatency] = useState(28);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      
      // IST: UTC + 5:30
      const istOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setIndiaTime(new Intl.DateTimeFormat('en-US', istOptions).format(now));

      // GST: UTC + 4:00
      const gstOptions = { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setDubaiTime(new Intl.DateTimeFormat('en-US', gstOptions).format(now));
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    // Random micro jitter for fiber ping (28-32ms)
    const pingInterval = setInterval(() => {
      setLatency(Math.floor(27 + Math.random() * 6));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <section className="w-full py-8 text-slate-100 relative">
      <div className="w-full p-6 sm:p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/30 shadow-2xl relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#72bf44]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header telemetry banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#72bf44]/15 border border-[#72bf44]/30 text-[#85cc38] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Activity size={13} className="animate-pulse text-[#85cc38]" />
              <span>Global Operational Telemetry • 24/7 Dual-Hub Network</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              India Engineering HQ <span className="text-[#85cc38]">&bull;</span> Dubai Corporate LLC
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Real-time synchronized operations spanning Indian technology innovation and United Arab Emirates commercial execution.
            </p>
          </div>

          {/* Central Telemetry Stats Pill */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shrink-0 self-start md:self-auto">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <Wifi size={14} className="text-[#85cc38]" />
              <span>Subsea Link:</span>
              <span className="text-[#85cc38] font-bold">{latency}ms</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="text-[11px] font-mono text-slate-300">
              <span>Offset: </span>
              <strong className="text-white">+1h 30m IST</strong>
            </div>
          </div>
        </div>

        {/* Dual Hub Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 relative z-10">
          
          {/* HUB 1: Bengaluru HQ (India) */}
          <Card3D maxTilt={10} className="p-6 sm:p-7 rounded-3xl bg-[#0a0f1d]/90 border border-white/10 hover:border-[#72bf44]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-lg border border-[#72bf44] flex items-center justify-center shrink-0">
                    <img 
                      src="/assets/zetacoding_india_logo.png" 
                      alt="India Flag Badge" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "/assets/zetacoding_logo_transparent.png"; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black text-white font-display">Bengaluru HQ</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] font-mono border border-[#72bf44]/30">
                        GLOBAL HQ
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-[#85cc38]" />
                      <span>12.9716° N, 77.5946° E • Yelahanka, Bengaluru</span>
                    </span>
                  </div>
                </div>

                {/* Live Clock IST */}
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-400 font-mono flex items-center justify-end gap-1">
                    <Clock size={12} className="text-[#85cc38]" />
                    <span>IST (India)</span>
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-black text-[#85cc38] tracking-wider">
                    {indiaTime || 'Loading...'}
                  </div>
                </div>
              </div>

              {/* Legal & Operational Scope */}
              <div className="space-y-2 py-3 border-y border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Entity:</span>
                  <span className="text-white font-bold text-right">{companyInfo.legalEntities.indiaHQ.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Accreditation:</span>
                  <span className="text-[#85cc38] font-mono font-bold">ISO 9001:2015 & MSME Udyam</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Regional Branch:</span>
                  <span className="text-slate-200">Mangaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Hub Action Bar */}
            <div className="mt-5 pt-3 flex flex-wrap items-center justify-between gap-3">
              <a 
                href={`tel:${companyInfo.phones.india}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#85cc38] hover:underline"
              >
                <Phone size={13} />
                <span>{companyInfo.phones.india}</span>
              </a>

              <a
                href={`https://wa.me/${companyInfo.whatsapp.india}?text=Hello%20Zetacoding%20Bengaluru%20HQ`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>Connect via WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Card3D>

          {/* HUB 2: Dubai Office (UAE) */}
          <Card3D maxTilt={10} className="p-6 sm:p-7 rounded-3xl bg-[#0a0f1d]/90 border border-white/10 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-lg border border-[#38bdf8] flex items-center justify-center shrink-0">
                    <img 
                      src="/assets/zetacoding_uae_logo.png" 
                      alt="UAE Flag Badge" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = "/assets/zetacoding_logo_transparent.png"; }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black text-white font-display">Dubai LLC</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] font-mono border border-[#38bdf8]/30">
                        MIDDLE EAST DESK
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-[#38bdf8]" />
                      <span>25.2048° N, 55.2708° E • Deira, Dubai, UAE</span>
                    </span>
                  </div>
                </div>

                {/* Live Clock GST */}
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-400 font-mono flex items-center justify-end gap-1">
                    <Clock size={12} className="text-[#38bdf8]" />
                    <span>GST (Dubai)</span>
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-black text-[#38bdf8] tracking-wider">
                    {dubaiTime || 'Loading...'}
                  </div>
                </div>
              </div>

              {/* Legal & Operational Scope */}
              <div className="space-y-2 py-3 border-y border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Entity:</span>
                  <span className="text-white font-bold text-right">{companyInfo.legalEntities.uaeLLC.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Government License:</span>
                  <span className="text-[#38bdf8] font-mono font-bold">DED License No. {legalDetails.dubaiLicense.licenseNo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Tax Status:</span>
                  <span className="text-slate-200 font-mono">FTA Corporate Tax & VAT TRN</span>
                </div>
              </div>
            </div>

            {/* Hub Action Bar */}
            <div className="mt-5 pt-3 flex flex-wrap items-center justify-between gap-3">
              <a 
                href={`tel:${companyInfo.phones.uae}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#38bdf8] hover:underline"
              >
                <Phone size={13} />
                <span>{companyInfo.phones.uae}</span>
              </a>

              <button
                onClick={onOpenCertModal}
                className="px-4 py-2 rounded-xl bg-[#38bdf8]/15 hover:bg-[#38bdf8] hover:text-slate-950 text-[#38bdf8] text-xs font-bold transition-all flex items-center gap-1.5 border border-[#38bdf8]/30"
              >
                <ShieldCheck size={14} />
                <span>View License & DET Cert</span>
              </button>
            </div>
          </Card3D>

        </div>

      </div>
    </section>
  );
}

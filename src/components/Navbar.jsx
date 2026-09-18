import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { playSubtleClick, toggleSound, isSoundEnabled } from '../utils/soundFX';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const location = useLocation();

  const handleNavClick = () => {
    playSubtleClick();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Journey', path: '/about' },
    { name: 'Products & Platforms', path: '/products' },
    { name: 'GEO & AI Search', path: '/geo-ai', badge: 'NEW' },
    { name: 'Services', path: '/services' },
    { name: 'Academic MOUs', path: '/academic-mous' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#140625]/92 backdrop-blur-xl shadow-2xl py-3 border-b border-[#a855f7]/30' 
        : 'bg-[#1b0833]/85 backdrop-blur-lg shadow-lg py-4 border-b border-purple-500/20'
    }`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 group outline-none focus:outline-none">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-white/95 p-1.5 shadow-xl flex items-center justify-center border-2 border-[#72bf44] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(114,191,68,0.5)] transition-all">
                <img 
                  src="/assets/zetacoding_logo_transparent.png" 
                  alt="Zetacoding Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "/assets/page_2_img_1.png";
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-display">
                  ZETA<span className="text-[#85cc38]">CODING</span>
                </span>
                <span className="text-[10px] text-[#85cc38] font-black tracking-widest uppercase flex items-center gap-1">
                  <span>INDIA • U.A.E</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72bf44] animate-ping" />
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 shrink">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className="group relative py-2 px-2 2xl:px-3 text-xs font-bold transition-all flex items-center gap-1 2xl:gap-1.5 rounded-xl hover:bg-white/5 outline-none focus:outline-none select-none whitespace-nowrap"
                >
                  <span 
                    className={`transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#85cc38] font-black' 
                        : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>

                  {link.badge && (
                    <span 
                      className={`text-[9px] px-1.5 py-0.5 rounded-full font-black ${
                        isActive
                          ? 'bg-[#72bf44] text-slate-950 shadow-[0_0_10px_rgba(114,191,68,0.5)]'
                          : 'bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}

                  {/* Active Neon Glow Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#72bf44] to-transparent rounded-full shadow-[0_0_8px_#72bf44]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Audio Toggle, Contact Us 3D Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Subtle Audio Toggle */}
            <button
              onClick={() => {
                const next = toggleSound();
                setSoundOn(next);
              }}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                soundOn 
                  ? 'bg-[#72bf44]/20 border-[#72bf44] text-[#85cc38] shadow-[0_0_10px_rgba(114,191,68,0.3)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={soundOn ? 'Futuristic UI Audio: ON (Click to mute)' : 'Futuristic UI Audio: MUTED (Click to enable)'}
            >
              {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <Link
              to="/contact"
              onClick={playSubtleClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#72bf44] to-[#5ba936] hover:from-[#85d650] hover:to-[#68be3f] text-slate-950 text-xs font-black shadow-lg shadow-[#72bf44]/30 border border-white/30 transition-all hover:scale-105 active:scale-95 outline-none focus:outline-none"
            >
              <Phone size={14} className="text-slate-950" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playSubtleClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 outline-none focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-purple-500/30 bg-[#150628]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-1 mt-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick();
                }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all outline-none focus:outline-none ${
                  isActive
                    ? 'text-[#85cc38] bg-[#72bf44]/15 border-l-4 border-[#72bf44] font-black'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-black bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#72bf44] to-[#5ba936] text-slate-950 font-black text-sm shadow-md flex items-center justify-center gap-2 outline-none focus:outline-none transition-all"
            >
              <Phone size={15} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

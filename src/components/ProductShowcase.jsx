import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Bot, Database, Shield, Wrench, CreditCard,
  CheckCircle2, ArrowRight, Sparkles, Phone, Zap,
  Check, QrCode, Cpu, Workflow, ChevronRight
} from 'lucide-react';
import { products } from '../data/companyData';
import AnimatedSection from './AnimatedSection';
import Card3D from './Card3D';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', label: 'All (5 Products)', icon: <Layers size={15} /> },
    { name: 'Cybersecurity Products', label: 'Cyber Security Products', icon: <Shield size={15} /> },
    { name: 'ERP Solutions', label: 'ERP Solutions', icon: <Database size={15} /> },
    { name: 'CRM Solutions', label: 'CRM Solutions', icon: <Workflow size={15} /> },
    { name: 'Custom Software Solutions', label: 'Custom Software Solutions', icon: <Cpu size={15} /> },
    { name: 'Digital Products', label: 'Digital Products', icon: <CreditCard size={15} /> }
  ];

  const filteredProducts = products.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory || p.name === activeCategory;
  });

  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="text-[#85cc38]" size={26} />;
      case 'Database': return <Database className="text-[#38bdf8]" size={26} />;
      case 'Workflow': return <Workflow className="text-[#fbbf24]" size={26} />;
      case 'Cpu': return <Cpu className="text-[#2dd4bf]" size={26} />;
      case 'CreditCard': return <CreditCard className="text-[#85cc38]" size={26} />;
      default: return <Layers className="text-[#85cc38]" size={26} />;
    }
  };

  return (
    <section id="products" className="py-4 space-y-10 text-slate-100 w-full text-left">
      <div className="w-full">
        
        {/* Category Tabs for the 5 Main Products */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                activeCategory === category.name
                  ? 'btn-3d-green text-slate-950 font-black'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* 5 Enterprise Product Suites Grid */}
        <div className="space-y-10 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="rounded-3xl glass-panel-glow p-5 sm:p-8 md:p-10 border border-white/10 hover:border-[#72bf44]/60 transition-all shadow-2xl relative overflow-hidden text-left">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#72bf44]/10 rounded-full blur-3xl pointer-events-none -z-10" />

                  {/* Top Bar: Number + Category Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner shrink-0">
                        {getProductIcon(product.icon)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-black text-[#85cc38] uppercase bg-[#72bf44]/15 px-2.5 py-0.5 rounded-full border border-[#72bf44]/30">
                            PRODUCT {product.number || '01'}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {product.category}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white font-display mt-0.5">
                          {product.name}
                        </h2>
                      </div>
                    </div>

                    <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/15">
                      {product.badge}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-sm sm:text-base text-[#85cc38] font-bold mb-2">
                    "{product.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl mb-6">
                    {product.desc}
                  </p>

                  {/* Included Types inside this Product (From Page 5 of PDF) */}
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Zap size={14} className="text-[#85cc38]" />
                        <span>Included Types &amp; Software Solutions ({product.types.length}):</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.types.map((type, idx) => (
                        <div 
                          key={type.id || idx}
                          className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#72bf44]/50 transition-all flex flex-col justify-between space-y-3"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-sm font-black text-white flex items-center gap-2">
                                <span className="w-5 h-5 rounded-md bg-[#72bf44]/20 text-[#85cc38] text-[10px] font-black flex items-center justify-center shrink-0">
                                  {idx + 1}
                                </span>
                                <span>{type.name}</span>
                              </span>
                              {type.badge && (
                                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10 font-bold shrink-0">
                                  {type.badge}
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-[#85cc38] font-semibold mb-2">
                              {type.subtype}
                            </p>

                            <p className="text-xs text-slate-300 leading-relaxed mb-3">
                              {type.desc}
                            </p>

                            {/* Key Highlights */}
                            {type.highlights && (
                              <div className="space-y-1.5 pt-2 border-t border-white/10">
                                {type.highlights.slice(0, 3).map((h, hi) => (
                                  <div key={hi} className="flex items-start gap-2 text-xs text-slate-300">
                                    <CheckCircle2 size={13} className="text-[#85cc38] shrink-0 mt-0.5" />
                                    <span className="line-clamp-1">{h}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Special Editions for AlignBooks (5 Editions) */}
                            {type.editions && (
                              <div className="pt-3 border-t border-white/10 space-y-2">
                                <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                                  5 Available Editions:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {type.editions.map((ed, ei) => (
                                    <span 
                                      key={ei} 
                                      className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-bold text-[#85cc38]"
                                      title={ed.desc}
                                    >
                                      {ed.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Special Hardware Range for Digital Business Card */}
                            {type.hardwareRange && (
                              <div className="pt-3 border-t border-white/10 space-y-2">
                                <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                                  Hardware &amp; Form Factors:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {type.hardwareRange.slice(0, 4).map((hw, hwi) => (
                                    <span 
                                      key={hwi} 
                                      className="px-2 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10px] text-slate-300"
                                    >
                                      {hw}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="pt-3 border-t border-white/10">
                            <Link
                              to={`/products/${product.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85cc38] hover:underline"
                            >
                              <span>Explore {type.name} Details</span>
                              <ChevronRight size={14} />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suite Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 font-medium">
                      Enterprise SLA &amp; Architecture Scoping Available in India HQ &amp; Dubai LLC
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      <Link
                        to="/contact"
                        className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 transition-all"
                      >
                        Inquire for {product.name}
                      </Link>

                      <Link
                        to={`/products/${product.id}`}
                        className="w-full sm:w-auto text-center justify-center px-6 py-3 rounded-xl btn-3d-green text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-lg"
                      >
                        <span>View Full Architecture &amp; Scope</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

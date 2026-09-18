import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Bot, Database, ShieldCheck, ShoppingBag, UtensilsCrossed, 
  Wrench, CreditCard, Share2, MessageSquare, Building, Flame,
  CheckCircle2, ArrowRight, Sparkles, Phone, Zap,
  BarChart3, Globe, DollarSign, Package, ShoppingCart, Users,
  FileText, Calendar, Lock, Cpu, Server, Workflow, Check,
  QrCode, Radio, FileSpreadsheet, HardDrive, Sliders, RefreshCw,
  Smartphone
} from 'lucide-react';
import { products } from '../data/companyData';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import Card3D from './Card3D';
import { motion } from 'framer-motion';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Layers size={15} /> },
    { name: 'AI & Automation', icon: <Bot size={15} /> },
    { name: 'Enterprise ERP', icon: <Database size={15} /> },
    { name: 'Industry Platforms & CRM', icon: <Workflow size={15} /> },
    { name: 'Security & Smart Hardware', icon: <ShieldCheck size={15} /> }
  ];

  const getProductCategoryGroup = (cat) => {
    if (cat.includes('AI') || cat.includes('Search') || cat.includes('Autonomous')) return 'AI & Automation';
    if (cat.includes('ERP')) return 'Enterprise ERP';
    if (cat.includes('Hospitality') || cat.includes('Automotive') || cat.includes('PropTech') || cat.includes('CRM') || cat.includes('Loyalty')) return 'Industry Platforms & CRM';
    if (cat.includes('Security') || cat.includes('Hardware')) return 'Security & Smart Hardware';
    return 'Other';
  };

  const filteredProducts = products.filter(p => {
    return activeCategory === 'All' || getProductCategoryGroup(p.category) === activeCategory;
  });

  const getProductIcon = (id) => {
    switch (id) {
      case 'geo-ai': return <Sparkles className="text-[#85cc38] animate-spin" size={24} />;
      case 'anvex-ai': return <Bot className="text-[#c084fc]" size={24} />;
      case 'zetawap-crm': return <MessageSquare className="text-[#85cc38]" size={24} />;
      case 'cloud-erp': return <Database className="text-[#38bdf8]" size={24} />;
      case 'sap-b1': return <Building className="text-[#fbbf24]" size={24} />;
      case 'erpnext': return <Layers className="text-[#818cf8]" size={24} />;
      case 'tmbill': return <UtensilsCrossed className="text-[#85cc38]" size={24} />;
      case 'cyber-security': return <ShieldCheck className="text-[#f87171]" size={24} />;
      case 'autorox': return <Wrench className="text-[#2dd4bf]" size={24} />;
      case 'digital-business-card': return <CreditCard className="text-[#85cc38]" size={24} />;
      case 'social-automation': return <Share2 className="text-[#c084fc]" size={24} />;
      case 'qobrix': return <Building className="text-[#38bdf8]" size={24} />;
      case 'prospect-ai': return <Flame className="text-[#fbbf24]" size={24} />;
      case 'xapa-loyalty': return <ShoppingBag className="text-[#85cc38]" size={24} />;
      default: return <Layers className="text-[#85cc38]" size={24} />;
    }
  };

  const getItemIcon = (text) => {
    const l = text.toLowerCase();
    if (l.includes('bill') || l.includes('pos') || l.includes('sale') || l.includes('cart')) return <ShoppingCart size={14} className="text-[#85cc38] shrink-0 mt-0.5" />;
    if (l.includes('tax') || l.includes('vat') || l.includes('gst') || l.includes('finance') || l.includes('account') || l.includes('price')) return <DollarSign size={14} className="text-[#85cc38] shrink-0 mt-0.5" />;
    if (l.includes('stock') || l.includes('inventory') || l.includes('material') || l.includes('purchase')) return <Package size={14} className="text-[#38bdf8] shrink-0 mt-0.5" />;
    if (l.includes('crm') || l.includes('user') || l.includes('client') || l.includes('hr') || l.includes('payroll')) return <Users size={14} className="text-[#c084fc] shrink-0 mt-0.5" />;
    if (l.includes('cloud') || l.includes('api') || l.includes('server')) return <Server size={14} className="text-[#38bdf8] shrink-0 mt-0.5" />;
    return <CheckCircle2 size={14} className="text-[#85cc38] shrink-0 mt-0.5" />;
  };

  return (
    <section id="products" className="py-4 space-y-10 text-slate-100 w-full">
      <div className="w-full">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                activeCategory === category.name
                  ? 'btn-3d-green text-slate-950 font-black'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProducts.map((product) => (
            <Card3D
              key={product.id}
              maxTilt={12}
              className="rounded-3xl glass-panel p-7 border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Card Top Icon Box */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#72bf44]/50 transition-all shadow-sm">
                    {getProductIcon(product.id)}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#72bf44]/15 text-[#85cc38] border border-[#72bf44]/30 font-black uppercase tracking-wider flex items-center gap-1">
                    <Zap size={11} className="text-[#85cc38]" />
                    <span>{product.badge}</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <Link to={`/products/${product.id}`} className="block group/title">
                  <h3 className="text-xl font-black text-white group-hover/title:text-[#85cc38] transition-colors font-display flex items-center justify-between">
                    <span>{product.name}</span>
                    <ArrowRight size={16} className="text-[#85cc38] opacity-0 group-hover/title:opacity-100 transition-opacity transform group-hover/title:translate-x-1" />
                  </h3>
                </Link>
                
                <p className="text-xs text-[#85cc38] font-semibold mt-1 mb-3 line-clamp-2">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {product.desc}
                </p>

                {/* Highlights / Modules List */}
                <div className="space-y-2 pt-3 border-t border-white/10 text-slate-300">
                  {product.highlights && product.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {getItemIcon(item)}
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}

                  {product.features && product.features.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {getItemIcon(item)}
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  to={`/products/${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#72bf44] hover:text-slate-950 text-white font-bold text-xs border border-white/20 hover:border-transparent transition-all shadow-md"
                >
                  <Layers size={14} />
                  <span>View Product Details & Scope</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}

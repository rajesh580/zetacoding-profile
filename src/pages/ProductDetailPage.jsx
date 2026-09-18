import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Zap, Layers, 
  Sparkles, Phone, MessageSquare, Send, Globe, Database,
  Bot, UtensilsCrossed, Wrench, CreditCard, Building, Flame,
  Share2, Award, ChevronRight, Check, ArrowRight
} from 'lucide-react';
import { products, companyInfo } from '../data/companyData';
import AnimatedSection from '../components/AnimatedSection';
import Card3D from '../components/Card3D';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const product = products.find(p => p.id === productId) || products[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello ZETACODING,\nI would like to inquire about ${product.name}.\nMy Name: ${formData.name || 'Interested Client'}\nCompany: ${formData.company || 'Enterprise'}\nRequirements: ${formData.requirements || 'Product demonstration & pricing'}`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.india}?text=${text}`, '_blank');
  };

  const otherProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-12 pb-20 text-slate-100 w-full">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#0b0e17] border-b border-white/10 py-3.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-[#85cc38] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-[#85cc38] transition-colors">Products & Platforms</Link>
            <ChevronRight size={14} />
            <span className="text-white font-bold">{product.name}</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-[#85cc38] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      {/* Page Header Banner */}
      <div className="relative py-16 md:py-20 border-b border-[#a855f7]/30 shadow-xl overflow-hidden w-full bg-gradient-to-b from-[#280a42] via-[#19062b] to-[#0d041a]">
        <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9333ea]/20 rounded-full blur-[140px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 text-left flex flex-col items-start justify-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72bf44]/20 text-[#85cc38] text-xs font-bold uppercase tracking-wider mb-4 border border-[#72bf44]/40 shadow-sm">
            <Layers size={15} />
            <span>{product.category} • {product.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-wide text-left">
            {product.name}
          </h1>

          <p className="mt-3 text-[#85cc38] text-lg sm:text-xl font-bold max-w-3xl text-left">
            "{product.tagline}"
          </p>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl font-normal leading-relaxed text-left">
            {product.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <a
              href="#inquire-form"
              className="px-8 py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-sm shadow-xl transition-all"
            >
              Request Free Demo & Quote
            </a>
            <button
              onClick={handleWhatsAppInquiry}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-[#85cc38]" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Details Grid */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full Specifications & Capabilities */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview & Architecture Box */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">Enterprise Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 font-display">
                  Platform Capabilities & System Scope
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {product.desc} Engineered for high-throughput concurrency, bulletproof data security, and seamless API interoperability across global enterprise cloud networks.
              </p>

              {/* Modules or Features List */}
              {(product.modules || product.features || product.highlights || product.services) && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white">Core Features & Functional Modules:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {(product.modules || product.features || product.highlights || product.services).map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#85cc38] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Integrations If Present */}
              {product.integrations && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Supported Integrations:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.integrations.map((ing, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-[#85cc38]">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics If Present */}
              {product.metrics && (
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#72bf44]/15 border border-[#72bf44]/30 text-center">
                      <div className="text-xs font-bold text-[#85cc38]">{m}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Plans If Present */}
              {product.plans && (
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white">Available Deployment Plans:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.plans.map((pl, i) => (
                      <div key={i} className="p-5 rounded-2xl glass-panel-glow border border-[#72bf44]/40 shadow-md flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#85cc38] uppercase">{pl.price}</div>
                          <div className="text-base font-bold text-white mt-1 mb-3">{pl.name}</div>
                          <ul className="space-y-1.5 text-xs text-slate-300 font-medium">
                            {pl.features.map((f, fi) => (
                              <li key={fi} className="flex items-start gap-1.5">
                                <Check size={13} className="text-[#85cc38] shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Why Choose This Solution */}
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-white font-display">
                Key Advantages of {product.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#72bf44]/20 text-[#85cc38] flex items-center justify-center font-bold mb-3">
                    <Zap size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">Fast Deployment</h3>
                  <p className="text-xs text-slate-300">Ready to go-live within days with customized business workflows.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#c084fc]/20 text-[#c084fc] flex items-center justify-center font-bold mb-3">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">Enterprise Security</h3>
                  <p className="text-xs text-slate-300">ISO 9001:2015 certified quality, role-based ACLs, and cloud encryption.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#f0b31a]/20 text-[#f0b31a] flex items-center justify-center font-bold mb-3">
                    <Globe size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">Dual-Hub Support</h3>
                  <p className="text-xs text-slate-300">Dedicated engineers in Bengaluru HQ and Dubai LLC Corporate Office.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Demo & Inquiry Form */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Inquiry Form */}
            <div id="inquire-form" className="p-7 sm:p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/40 shadow-2xl space-y-4">
              <div>
                <span className="text-xs font-bold text-[#85cc38] uppercase tracking-wider">Fast Turnaround</span>
                <h3 className="text-xl font-black text-white mt-1 font-display">
                  Inquire for {product.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Submit details to receive product brochure, architecture scoping, and commercial estimate.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#72bf44]/15 border border-[#72bf44]/40 space-y-3">
                  <CheckCircle2 size={36} className="text-[#85cc38] animate-bounce" />
                  <h4 className="text-base font-black text-white">Inquiry Submitted!</h4>
                  <p className="text-xs text-slate-200">
                    Our lead architect for {product.name} will reach out to you within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl btn-3d-green text-slate-950 font-bold text-xs"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-medium focus:outline-none focus:border-[#72bf44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-medium focus:outline-none focus:border-[#72bf44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+971 ... or +91 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-medium focus:outline-none focus:border-[#72bf44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Acme Enterprises"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-medium focus:outline-none focus:border-[#72bf44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Specific Requirements / Notes</label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      placeholder={`Tell us what you need for ${product.name}...`}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white font-medium focus:outline-none focus:border-[#72bf44]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl btn-3d-green text-slate-950 font-black text-xs shadow-lg transition-all"
                  >
                    Submit Project Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 mt-2 border border-white/20"
                  >
                    <MessageSquare size={15} className="text-[#85cc38]" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl glass-panel text-white border border-[#72bf44]/40 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Phone size={18} className="text-[#85cc38]" />
                <span>Talk with an Architect</span>
              </h4>
              <p className="text-xs text-slate-300">
                Need customized enterprise integration or SLA contracts? Connect directly with our engineering heads.
              </p>
              <div className="space-y-2 text-xs font-mono font-bold pt-2 border-t border-white/10">
                <div>🇮🇳 India HQ: {companyInfo.phones.india}</div>
                <div>🇦🇪 Dubai LLC: {companyInfo.phones.uae}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Explore Other Platforms Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-black text-white mb-6 font-display">
            Explore Other <span className="text-[#85cc38]">Enterprise Platforms</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <Card3D
                key={p.id}
                maxTilt={12}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#85cc38] bg-[#72bf44]/15 px-2.5 py-1 rounded-md mb-3 inline-block border border-[#72bf44]/30">
                    {p.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#85cc38] transition-colors font-display">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <Link 
                    to={`/products/${p.id}`}
                    className="flex items-center justify-between text-xs text-[#85cc38] font-bold"
                  >
                    <span>View Product Page</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

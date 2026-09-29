import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Sparkles, Clock, User, ArrowRight, 
  Search, Tag, ChevronRight, Share2, Layers, Bot, Shield, Database 
} from 'lucide-react';
import Card3D from '../components/Card3D';
import { playSubtleClick } from '../utils/soundFX';

export default function BlogsPage() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 'geo-vs-seo-2026',
      title: 'Generative Engine Optimization (GEO): Why Traditional SEO is Dead in 2026',
      excerpt: 'As OpenAI ChatGPT, Google Gemini 2.0, and Perplexity replace blue links with synthesized direct answers, how can enterprise brands ensure they are cited at the top?',
      category: 'AI & Search',
      author: 'Zetacoding Research Lab',
      date: 'Sep 2026',
      readTime: '6 min read',
      tag: 'GEO',
      featured: true,
      image: '/assets/about_hero_ai.jpg'
    },
    {
      id: 'multimodal-ai-agents',
      title: 'Deploying Sub-350ms Voice & Vision Autonomous AI Agents for Enterprise Workflows',
      excerpt: 'Real-time multi-agent orchestrations are reshaping customer support and field operations. Learn how cognitive NLP layers empower voice agents to handle complex negotiations.',
      category: 'Autonomous AI',
      author: 'Engineering Architecture Team',
      date: 'Aug 2026',
      readTime: '8 min read',
      tag: 'AI Agents',
      featured: false
    },
    {
      id: 'cloud-erp-compliance-uae-india',
      title: 'Navigating Dual Tax Frameworks: UAE Corporate Tax, VAT & Indian GST in Cloud ERP',
      excerpt: 'Managing cross-border commerce between Bengaluru and Dubai requires real-time statutory reconciliation. A deep dive into AlignBooks and SAP Business One tax engines.',
      category: 'Enterprise ERP',
      author: 'FinTech Compliance Desk',
      date: 'Jul 2026',
      readTime: '5 min read',
      tag: 'ERP',
      featured: false
    },
    {
      id: 'zero-trust-cloud-defense',
      title: 'Zero Trust Cybersecurity Blueprint: Protecting Distributed APIs and Web Portals',
      excerpt: 'From automated OWASP Top 10 web defenses with CIPHER to rapid SIEM log telemetry with Sachet SOC, how modern enterprises fortify their perimeters.',
      category: 'Cybersecurity',
      author: 'Cyber Defense Unit',
      date: 'Jun 2026',
      readTime: '7 min read',
      tag: 'Cyber Defense',
      featured: false
    },
    {
      id: 'whatsapp-cloud-crm-roi',
      title: '13+ Inbuilt Smart Automations That Turned WhatsApp into a 4x Revenue Channel',
      excerpt: 'How leading retail, dining, and automotive brands deploy Meta-verified WhatsApp Business Cloud APIs to convert ad clicks into paid orders in under 60 seconds.',
      category: 'CRM & Growth',
      author: 'Growth & Strategy Team',
      date: 'May 2026',
      readTime: '5 min read',
      tag: 'CRM',
      featured: false
    },
    {
      id: 'academic-industry-4-bridges',
      title: 'Building Industry 4.0 Ecosystems: Mentoring 50,000+ Students Across 25+ AICTE Colleges',
      excerpt: 'Bridging the academia-industry gap through live corporate sprint internships, IEEE final-year capstone incubations, and faculty upskilling bootcamps.',
      category: 'Academic MOUs',
      author: 'Academic Council',
      date: 'Apr 2026',
      readTime: '6 min read',
      tag: 'Education',
      featured: false
    }
  ];

  const tags = ['All', 'GEO', 'AI Agents', 'ERP', 'Cyber Defense', 'CRM', 'Education'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === 'All' || post.tag === selectedTag;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-20 text-slate-100 w-full">
      {/* Header */}
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
            <BookOpen size={15} />
            <span>Engineering Insights & Technology Trends</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white font-display tracking-wide text-left">
            Zetacoding <span className="bg-gradient-to-r from-[#85cc38] to-[#72bf44] bg-clip-text text-transparent">Blogs & Articles</span>
          </h1>

          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl font-normal leading-relaxed text-left">
            Deep dives, technical architecture blueprints, and strategic insights on GEO, Autonomous AI Agents, Cloud ERP, and Cybersecurity from our engineering teams in Bengaluru and Dubai.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8">
        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  playSubtleClick();
                  setSelectedTag(tag);
                }}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? 'btn-3d-green text-slate-950 font-black'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#72bf44] transition-colors"
            />
          </div>
        </div>

        {/* Featured Post */}
        {selectedTag === 'All' && !searchQuery && blogPosts[0] && (
          <Card3D maxTilt={6} className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-[#72bf44]/20 text-[#85cc38] border border-[#72bf44]/40">
                    FEATURED PUBLICATION
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock size={12} className="text-[#85cc38]" />
                    {blogPosts[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                  {blogPosts[0].title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User size={13} className="text-[#85cc38]" />
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                  </div>

                  <Link
                    to="/geo-ai"
                    onClick={playSubtleClick}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl btn-3d-green text-slate-950 text-xs font-black"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] text-[#85cc38] font-mono font-bold bg-black/60 px-2.5 py-1 rounded-lg border border-[#72bf44]/40">
                  AI Architecture Visual
                </div>
              </div>
            </div>
          </Card3D>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredPosts.map((post) => (
            <Card3D 
              key={post.id} 
              maxTilt={10} 
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#72bf44]/60 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#72bf44]/15 text-[#85cc38] border border-[#72bf44]/30">
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock size={11} className="text-[#85cc38]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-[#85cc38] transition-colors font-display line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">{post.date}</span>
                <Link
                  to="/contact"
                  onClick={playSubtleClick}
                  className="inline-flex items-center gap-1 text-[#85cc38] font-bold group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuss Topic</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </Card3D>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="p-8 rounded-3xl glass-panel-glow border border-[#72bf44]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Have a Technology Architecture Query?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering leads in Bengaluru and Dubai are available for 1-on-1 enterprise consultations.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={playSubtleClick}
            className="px-6 py-3 rounded-xl btn-3d-green text-slate-950 font-black text-xs shrink-0"
          >
            Schedule Architecture Call
          </Link>
        </div>
      </div>
    </div>
  );
}

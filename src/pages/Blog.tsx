import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const categories = ['Hepsi', ...new Set(SITE_DATA.blog.map(p => p.category))];
  const filteredPosts = SITE_DATA.blog.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'Hepsi' || post.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-[#FAFAF8]">
      <SEO title="Makaleler" description="İslami ilimler, tefsir, fıkıh ve güncel dini meseleler üzerine akademik makaleler." />

      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C4A96E]" /> İlmi Araştırmalar
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Makaleler</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* ─── SIDEBAR ─── */}
            <aside className="lg:w-72 shrink-0 order-2 lg:order-1 space-y-10">
              {/* Search */}
              <div>
                <p className="text-[#0C1117] font-bold text-xs tracking-widest uppercase mb-4">Ara</p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Makale ara..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-[#FAFAF8] border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C4A96E] transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
              </div>

              {/* Categories */}
              <div>
                <p className="text-[#0C1117] font-bold text-xs tracking-widest uppercase mb-4">Kategoriler</p>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex items-center justify-between px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-[#0C1117] text-white'
                          : 'bg-[#FAFAF8] text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                      <ChevronRight size={14} className={selectedCategory === cat ? 'opacity-100' : 'opacity-30'} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#0C1117] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#C4A96E]/10 rounded-full blur-2xl" />
                <BookOpen className="text-[#C4A96E] mb-5" size={32} />
                <h3 className="font-serif text-white text-xl mb-3">İlmi Bülten</h3>
                <p className="text-white/40 text-sm mb-6 font-light">Yeni makale ve duyurulardan haberdar olun.</p>
                <form onSubmit={e => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#C4A96E] transition-colors"
                  />
                  <button className="w-full bg-[#C4A96E] text-[#0C1117] text-xs font-bold tracking-widest uppercase py-3 rounded-xl hover:bg-white transition-colors">
                    Abone Ol
                  </button>
                </form>
              </div>
            </aside>

            {/* ─── POSTS ─── */}
            <div className="flex-1 order-1 lg:order-2">
              {filteredPosts.length > 0 ? (
                <div className="flex flex-col gap-10">
                  {filteredPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="group bg-[#FAFAF8] rounded-2xl overflow-hidden border border-slate-100 hover:border-[#C4A96E]/30 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 flex flex-col md:flex-row"
                    >
                      <div className="md:w-80 shrink-0 relative overflow-hidden">
                        <img
                          src={`https://picsum.photos/seed/blog-p-${post.id}/800/800`}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{ minHeight: '220px' }}
                        />
                        <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#C4A96E] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-10 flex flex-col justify-center">
                        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                          <Calendar size={12} /> {post.date}
                        </p>
                        <h2 className="font-serif text-[#0C1117] text-2xl leading-snug mb-4 group-hover:text-[#C4A96E] transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3 mb-8">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#C4A96E] text-xs font-bold tracking-widest uppercase group/link">
                          Devamını Oku <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-white rounded-2xl border border-dashed border-slate-200">
                  <Search className="mx-auto text-slate-200 mb-6" size={48} />
                  <h3 className="font-serif text-[#0C1117] text-2xl mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-slate-400">Arama kriterlerinize uygun makale bulunmamaktadır.</p>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="mt-16 flex justify-center gap-2">
                  {[1, 2, 3].map(n => (
                    <button key={n} className={`w-11 h-11 rounded-xl text-sm font-bold transition-all ${n === 1 ? 'bg-[#0C1117] text-white' : 'bg-[#FAFAF8] text-slate-500 border border-slate-200 hover:border-[#0C1117] hover:text-[#0C1117]'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
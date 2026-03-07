import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, ArrowRight, BookOpen, Share2, Tag } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = SITE_DATA.blog.find(p => String(p.id) === id);
  const others = SITE_DATA.blog.filter(p => String(p.id) !== id).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-[#0C1117] text-4xl mb-4">Makale bulunamadı.</p>
          <Link to="/blog" className="text-[#C4A96E] text-sm font-bold tracking-widest uppercase flex items-center gap-2 justify-center">
            <ArrowLeft size={14} /> Makalelere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF8]">
      <SEO title={post.title} description={post.excerpt} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src={`https://picsum.photos/seed/blog-p-${post.id}/2400/1200`}
            alt={post.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#C4A96E] text-xs font-bold tracking-widest uppercase mb-8 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Makalelere Dön
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#C4A96E]/10 border border-[#C4A96E]/20 text-[#C4A96E] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2">
                <Tag size={12} /> {post.category}
              </span>
            </div>
            <h1 className="font-serif text-white leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLE ─── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/3"
            >
              {/* Excerpt lead */}
              <p className="font-serif text-[#0C1117] text-xl leading-relaxed border-l-4 border-[#C4A96E] pl-8 mb-12 italic">
                {post.excerpt}
              </p>

              {/* Body placeholder */}
              <div className="prose prose-slate prose-lg max-w-none text-slate-500 font-light leading-relaxed space-y-6">
                <p>
                  İslam düşünce tarihinde bu mesele, farklı dönemlerde farklı perspektiflerden ele alınmıştır.
                  Selef ulemasından başlayarak günümüze uzanan bu ilmi yolculuk, pek çok kıymetli eser ve
                  araştırmayla zenginleşmiştir. Bu makalede söz konusu meseleyi hem klasik hem de modern
                  perspektiflerden değerlendirmeye çalışacağız.
                </p>
                <p>
                  Tefsir ilminin temel kavramları çerçevesinde hareket ederek, ayetlerin bağlamını ve
                  siyer bilgisini göz önünde bulundurarak tahlillerimizi sunacağız. Akademik titizlikle
                  yürütülen bu araştırmanın, okuyuculara faydalı bir kaynak teşkil etmesi en büyük temennimizdir.
                </p>
                <h2 className="font-serif text-[#0C1117] text-2xl mt-12 mb-4">Temel Argümanlar</h2>
                <p>
                  Klasik dönem müfessirlerinin bu konudaki görüşleri incelendiğinde, birkaç temel eğilim
                  dikkat çekmektedir. Bilhassa rivayet tefsirine dayalı yaklaşımlar, metni tarihsel
                  bağlamına yerleştirerek anlamlandırma konusunda son derece değerli perspektifler sunmaktadır.
                </p>
                <p>
                  Modern dönem araştırmacıları ise bu mirasa sahip çıkmanın yanı sıra çağdaş dilbilim
                  ve hermenötik yöntemlerini de devreye sokarak yeni okuma biçimleri geliştirmişlerdir.
                  Her iki yaklaşımın güçlü ve zayıf yönlerini bir arada değerlendirmek, daha bütüncül
                  bir anlayışa ulaşmamızı sağlayacaktır.
                </p>
                <h2 className="font-serif text-[#0C1117] text-2xl mt-12 mb-4">Sonuç</h2>
                <p>
                  İlim yolculuğunun hiç bitmediğini hatırlatan bu çalışma, mevcut literatüre mütevazı bir
                  katkı sunma amacındadır. Okuyucuların bu konudaki görüş ve eleştirilerini paylaşmaları,
                  ilmi diyalogu güçlendirecektir.
                </p>
              </div>

              {/* Share */}
              <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Share2 size={16} />
                  <span>Paylaş</span>
                </div>
                <span className="bg-[#FAFAF8] border border-slate-100 text-[#C4A96E] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {post.category}
                </span>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-10">
              {/* Author card */}
              <div className="bg-[#0C1117] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#C4A96E]/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 mb-6">
                    <img src="src/public/images/yasir-hocam.png" alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[#C4A96E] text-xs tracking-widest uppercase font-bold mb-2">Yazar</p>
                  <p className="font-serif text-white text-xl mb-2">{post.author}</p>
                  <p className="text-white/30 text-sm font-light">Tefsir Araştırmacısı & Vaiz</p>
                </div>
              </div>

              {/* Related */}
              <div>
                <p className="text-[#0C1117] font-bold text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                  <BookOpen size={14} className="text-[#C4A96E]" /> İlgili Makaleler
                </p>
                <div className="flex flex-col gap-6">
                  {others.map(other => (
                    <Link
                      key={other.id}
                      to={`/blog/${other.id}`}
                      className="group flex gap-4 items-start hover:opacity-80 transition-opacity"
                    >
                      <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={`https://picsum.photos/seed/blog-p-${other.id}/400/300`}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-[#C4A96E] text-[10px] font-bold uppercase tracking-widest mb-1">{other.category}</p>
                        <p className="text-[#0C1117] text-sm font-medium leading-snug line-clamp-2 group-hover:text-[#C4A96E] transition-colors">
                          {other.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#FAFAF8] border border-slate-100 rounded-2xl p-8">
                <p className="font-serif text-[#0C1117] text-xl mb-3">Görüşleriniz mi Var?</p>
                <p className="text-slate-400 text-sm font-light mb-6">Bu makale hakkında soru ya da görüşlerinizi paylaşabilirsiniz.</p>
                <Link to="/iletisim" className="group inline-flex items-center gap-2 bg-[#0C1117] text-white font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-xl hover:bg-[#C4A96E] hover:text-[#0C1117] transition-colors">
                  İletişime Geç <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
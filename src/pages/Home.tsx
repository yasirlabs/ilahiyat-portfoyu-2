import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown, Mic2, Users, HeartHandshake, BookOpen, Presentation, Quote, Star, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

const iconMap: Record<string, any> = { Mic2, Users, HeartHandshake, BookOpen, Presentation };

const STATS = [
  { value: '12+', label: 'Yıllık Tecrübe' },
  { value: '45+', label: 'Akademik Makale' },
  { value: '120+', label: 'Seminer & Konferans' },
  { value: '500+', label: 'Mezun Öğrenci' },
];

const TESTIMONIALS = [
  { name: 'Prof. Dr. Ahmet Yıldırım', role: 'İlahiyat Fakültesi Dekanı', text: 'Yasir Hoca\'nın tefsir alanındaki derinliği ve pedagojik yaklaşımı, öğrencilere ilmi bir istikamet kazandırıyor.' },
  { name: 'Ayşe Kaya', role: 'Öğrenci', text: 'Derslerinde yalnızca bilgi değil, düşünce sistemi inşa ediliyor. Bu fark, akademik hayatımı kökten değiştirdi.' },
  { name: 'Dr. Mehmet Özkan', role: 'Araştırmacı', text: 'Sahih bilgiye verilen önem ve bilimsel titizlik, her sunumunda kendini açıkça hissettiriyor.' },
];

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      <SEO
        title="Ana Sayfa"
        description="Yasir Alrawi — İlahiyatçı, Araştırmacı ve Vaiz."
        keywords="ilahiyat, vaaz, tefsir, hadis, dini danışmanlık, Yasir Alrawi"
      />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </motion.div>

        {/* Grain overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />

        <motion.div style={{ opacity: heroOpacity }} className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-end gap-16">
            {/* Left: Text */}
            <div className="lg:w-3/5">
              <motion.p
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-8 flex items-center gap-3"
              >
                <span className="inline-block w-10 h-px bg-[#C4A96E]" />
                {SITE_DATA.title}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-white leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
              >
                İlim ve İrfan
                <br />
                <em className="text-[#C4A96E]">Yolunda</em> Bir Ömür
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="text-white/50 text-lg font-light leading-relaxed max-w-xl mb-14"
              >
                {SITE_DATA.about.short}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/hakkimda"
                  className="group inline-flex items-center gap-3 bg-[#C4A96E] text-[#0C1117] font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white transition-colors duration-300"
                >
                  Hakkımda
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-3 border border-white/20 text-white/70 font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:border-white/50 hover:text-white transition-all duration-300"
                >
                  İletişime Geç
                </Link>
              </motion.div>
            </div>

         
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Keşfet</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown size={18} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── MARQUEE BELT ─── */}
      <div className="bg-[#C4A96E] py-4 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[#0C1117] text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-6">
              Tefsir Araştırması
              <span className="text-[#0C1117]/40">✦</span>
              Akademik Dersler
              <span className="text-[#0C1117]/40">✦</span>
              İrşat Hizmetleri
              <span className="text-[#0C1117]/40">✦</span>
              Dini Danışmanlık
              <span className="text-[#0C1117]/40">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── QUOTE ─── */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Quote className="mx-auto text-[#C4A96E]/30 mb-10" size={72} strokeWidth={1} />
            <p className="font-serif text-[#0C1117] leading-snug mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              "İlim, amel ile taçlanmadıkça sahibine yük olur. Hakiki bilgi, kalbe inen ve hayatı güzelleştiren bilgidir."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-[#C4A96E]" />
              <span className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold">Yasir Alrawi</span>
              <div className="w-12 h-px bg-[#C4A96E]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">Hizmetler</p>
              <h2 className="font-serif text-[#0C1117]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Ne Sunuyoruz?
              </h2>
            </div>
            <Link to="/hizmetler" className="group text-sm font-bold tracking-widest uppercase text-[#0C1117] flex items-center gap-2 mt-8 md:mt-0 hover:text-[#C4A96E] transition-colors">
              Tüm Hizmetler <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {SITE_DATA.services.slice(0, 3).map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-[#FAFAF8] hover:bg-[#0C1117] p-12 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C4A96E]/10 text-[#C4A96E] flex items-center justify-center mb-10 group-hover:bg-[#C4A96E]/20 transition-colors">
                    <Icon size={28} />
                  </div>
                  <span className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold mb-4 block">0{idx + 1}</span>
                  <h3 className="font-serif text-[#0C1117] text-2xl mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/50 leading-relaxed text-sm transition-colors mb-10">{service.description}</p>
                  <Link to="/hizmetler" className="inline-flex items-center gap-2 text-[#C4A96E] text-xs font-bold tracking-widest uppercase group/link">
                    İncele <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  {/* bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C4A96E] group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-28 bg-[#0C1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="py-16 px-8 border-r border-white/5 last:border-0 text-center"
              >
                <p className="font-serif text-[#C4A96E] mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{stat.value}</p>
                <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">Akademik Çalışmalar</p>
            <h2 className="font-serif text-[#0C1117]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Son Makaleler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.blog.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/blog-p-${post.id}/800/500`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-[#C4A96E] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-8">
                  <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">{post.date}</p>
                  <h3 className="font-serif text-[#0C1117] text-xl leading-snug mb-4 group-hover:text-[#C4A96E] transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#C4A96E] text-xs font-bold tracking-widest uppercase group/link">
                    Oku <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">Görüşler</p>
            <h2 className="font-serif text-[#0C1117]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Öğrenci & Meslektaş Yorumları</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FAFAF8] rounded-2xl p-10 border border-slate-100"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#C4A96E] text-[#C4A96E]" />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 font-light italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4A96E]/10 text-[#C4A96E] flex items-center justify-center text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[#0C1117] font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0C1117] rounded-3xl overflow-hidden p-16 md:p-28 text-center"
          >
            {/* Background detail */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C4A96E]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C4A96E]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-6">İletişim</p>
              <h2 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Geleceği İlimle<br /><em className="text-[#C4A96E]">İnşa Edelim</em>
              </h2>
              <p className="text-white/40 text-lg font-light max-w-xl mx-auto mb-14 leading-relaxed">
                Dini eğitimler, akademik iş birlikleri veya bireysel danışmanlık için her zaman yanınızdayım.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/iletisim" className="group inline-flex items-center gap-3 bg-[#C4A96E] text-[#0C1117] font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-white transition-colors duration-300">
                  İletişime Geç <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/duyurular" className="inline-flex items-center gap-3 border border-white/15 text-white/60 font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:border-white/40 hover:text-white transition-all duration-300">
                  Etkinlik Takvimi
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
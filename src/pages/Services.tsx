import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mic2, Users, HeartHandshake, BookOpen, Presentation, Clock, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

const iconMap: Record<string, any> = { Mic2, Users, HeartHandshake, BookOpen, Presentation };

const PROCESS = [
  { step: '01', title: 'İlk Temas', desc: 'İhtiyaçlarınızı anlamak için form veya telefon aracılığıyla iletişim kuruyoruz.' },
  { step: '02', title: 'Program Tasarımı', desc: 'Size özel, akademik derinliği olan içerik ve program hazırlıyoruz.' },
  { step: '03', title: 'Zamanlama', desc: 'Online veya yüz yüze görüşme takvimini karşılıklı netleştiriyoruz.' },
  { step: '04', title: 'Gerçekleştirme', desc: 'Belirlenen programı samimi ve irşat odaklı bir dille sunuyoruz.' },
];

export const Services: React.FC = () => {
  return (
    <div className="bg-[#FAFAF8]">
      <SEO title="Hizmetler" description="Vaaz, sohbet, dini danışmanlık, online dersler ve akademik seminer hizmetleri." />

      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C4A96E]" /> Hizmet & Rehberlik
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Hizmetlerimiz</h1>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom space-y-40">
          {SITE_DATA.services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={`https://picsum.photos/seed/service-p-${service.id}/1200/750`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117]/30 to-transparent" />
                  </div>
                  {/* Number badge */}
                  <div className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-20 h-20 bg-[#C4A96E] rounded-2xl flex items-center justify-center shadow-xl`}>
                    <span className="font-serif text-white text-2xl font-bold">0{idx + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 text-[#C4A96E] text-xs font-bold tracking-widest uppercase mb-6 bg-[#C4A96E]/10 px-4 py-2 rounded-full">
                    <Icon size={14} /> {service.title}
                  </div>
                  <h2 className="font-serif text-[#0C1117] leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>
                    {service.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed font-light text-lg mb-12">{service.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-12">
                    <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-2 text-[#C4A96E] mb-2">
                        <Clock size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Süre</span>
                      </div>
                      <p className="text-[#0C1117] font-semibold">{service.duration}</p>
                    </div>
                    <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-2 text-[#C4A96E] mb-2">
                        <CheckCircle size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Kimler İçin</span>
                      </div>
                      <p className="text-[#0C1117] font-semibold">{service.suitableFor}</p>
                    </div>
                  </div>

                  <Link to="/iletisim" className="group inline-flex items-center gap-3 bg-[#0C1117] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#C4A96E] transition-colors duration-300">
                    Bilgi Al & Randevu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-32 bg-[#0C1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">Yol Haritası</p>
            <h2 className="font-serif text-white text-4xl">Hizmet Sürecimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {PROCESS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-10 border-r border-white/5 last:border-0"
              >
                <p className="font-serif text-[#C4A96E]/20 text-7xl font-bold mb-6">{item.step}</p>
                <h3 className="font-serif text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed font-light">{item.desc}</p>
                {idx < 3 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-white/10" size={28} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CUSTOM CTA ─── */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-3xl border border-slate-100 p-16">
            <div>
              <p className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold mb-4">Özel Program</p>
              <h2 className="font-serif text-[#0C1117] text-3xl mb-4">Kurumunuz İçin<br />Tasarlanmış İçerik?</h2>
              <p className="text-slate-500 font-light max-w-lg">
                Vakıflar, kurumlar ve gruplar için özel temalı seminer ve ders programları hazırlıyoruz.
              </p>
            </div>
            <Link to="/iletisim" className="group inline-flex items-center gap-3 bg-[#0C1117] text-white font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-[#C4A96E] transition-colors duration-300 whitespace-nowrap">
              Teklif Alın <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
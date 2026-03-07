import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight, Bell, History } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const Announcements: React.FC = () => {
  return (
    <div className="bg-[#FAFAF8]">
      <SEO title="Duyurular" description="Yaklaşan dersler, sohbetler, seminerler ve etkinlikler hakkında güncel bilgiler." />

      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C4A96E]" /> Güncel Etkinlikler
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Duyurular</h1>
          </motion.div>
        </div>
      </section>

      {/* ─── UPCOMING ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-[#C4A96E]/10 text-[#C4A96E] rounded-2xl flex items-center justify-center">
              <Bell size={22} />
            </div>
            <h2 className="font-serif text-[#0C1117] text-3xl">Yaklaşan Etkinlikler</h2>
          </div>

          <div className="flex flex-col gap-6">
            {SITE_DATA.announcements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-[#FAFAF8] border border-slate-100 hover:border-[#C4A96E]/30 hover:shadow-xl hover:shadow-slate-200/40 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col lg:flex-row"
              >
                {/* Date block */}
                <div className="lg:w-52 shrink-0 bg-[#0C1117] group-hover:bg-[#C4A96E] p-10 flex flex-col items-center justify-center text-center transition-colors duration-500">
                  <p className="font-serif text-white text-5xl font-bold leading-none mb-2">{item.date.split(' ')[0]}</p>
                  <p className="text-white/40 group-hover:text-white/70 text-xs tracking-[0.3em] uppercase font-bold transition-colors">{item.date.split(' ')[1]}</p>
                </div>

                {/* Content */}
                <div className="flex-1 p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div>
                    <h3 className="font-serif text-[#0C1117] text-2xl mb-4 group-hover:text-[#C4A96E] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-[#C4A96E]" /> {item.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#C4A96E]" /> {item.location}
                      </span>
                    </div>
                  </div>
                  <button className="shrink-0 group/btn inline-flex items-center gap-3 bg-[#0C1117] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#C4A96E] transition-colors duration-300">
                    Detaylar <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAST EVENTS ─── */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center">
              <History size={22} />
            </div>
            <h2 className="font-serif text-slate-400 text-3xl">Geçmiş Etkinlikler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 grayscale">
            {[
              { title: 'Tefsir Okumaları: Bakara Suresi', date: '15 Ocak 2024', location: 'Kültür Merkezi' },
              { title: 'İslam ve Modernite Paneli', date: '10 Aralık 2023', location: 'Üniversite Konferans Salonu' },
            ].map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{event.date}</p>
                <h3 className="font-serif text-[#0C1117] text-xl mb-4">{event.title}</h3>
                <p className="text-slate-400 text-sm flex items-center gap-2"><MapPin size={14} /> {event.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="text-slate-400 text-xs font-bold tracking-widest uppercase hover:text-[#C4A96E] transition-colors">
              Tüm Geçmiş Etkinlikleri Gör
            </button>
          </div>
        </div>
      </section>

      {/* ─── SUBSCRIPTION CTA ─── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="relative bg-[#0C1117] rounded-3xl p-16 md:p-24 text-center overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C4A96E]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C4A96E]/5 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-6">Bildirimler</p>
              <h2 className="font-serif text-white text-4xl mb-6">Hiçbir Etkinliği<br /><em className="text-[#C4A96E]">Kaçırmayın</em></h2>
              <p className="text-white/40 font-light leading-relaxed mb-12">
                Yeni dersler, seminerler ve duyurular yayınlandığında anında haberdar olmak için abone olun.
              </p>
              <form onSubmit={e => e.preventDefault()} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C4A96E] transition-colors"
                />
                <button className="bg-[#C4A96E] text-[#0C1117] font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-white transition-colors whitespace-nowrap">
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
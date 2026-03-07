import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Target, Eye, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAFAF8]">
      <SEO
        title="Hakkımda"
        description="Yasir Alrawi'nin biyografisi, eğitimi ve uzmanlık alanları."
      />

      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/50 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C4A96E]" /> Birikim & Tecrübe
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Hakkımda</h1>
          </motion.div>
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-2/5 relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://picsum.photos/seed/scholar-bio-p/800/1000"
                  alt={SITE_DATA.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117]/30 to-transparent" />
              </div>
              {/* Name plate */}
              <div className="absolute -bottom-8 left-8 right-8 bg-[#0C1117] text-white rounded-2xl px-8 py-6">
                <p className="font-serif text-xl">{SITE_DATA.name}</p>
                <p className="text-[#C4A96E] text-xs tracking-widest uppercase font-bold mt-1">Tefsir Araştırmacısı & Vaiz</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-3/5 pt-10 lg:pt-0"
            >
              <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-6">İlmi Bir Yolculuk</p>
              <h2 className="font-serif text-[#0C1117] text-4xl mb-8 leading-snug">
                Sahih Bilgiyi Toplumla<br /><em>Buluşturmak</em>
              </h2>
              <div className="space-y-5 text-slate-500 font-light leading-relaxed mb-16">
                <p>{SITE_DATA.about.bio}</p>
                <p>
                  Akademik çalışmalarımda temel prensibim, "hikmet müminin yitik malıdır" düsturuyla hareket ederek,
                  sahih dini bilgiyi modern dünyanın ihtiyaç duyduğu rasyonel ve ahlaki çerçevede sunmaktır.
                </p>
              </div>

              {/* Education & Expertise */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                  <h3 className="flex items-center gap-3 text-[#0C1117] font-serif text-xl mb-8">
                    <GraduationCap className="text-[#C4A96E]" size={24} /> Eğitim
                  </h3>
                  <div className="space-y-8">
                    {SITE_DATA.about.education.map((edu, idx) => (
                      <div key={idx} className="relative pl-6 border-l border-[#C4A96E]/20">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#C4A96E]" />
                        <p className="font-bold text-[#0C1117]">{edu.degree}</p>
                        <p className="text-slate-500 text-sm">{edu.school}</p>
                        <p className="text-[#C4A96E] text-xs font-bold mt-1">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 text-[#0C1117] font-serif text-xl mb-8">
                    <Award className="text-[#C4A96E]" size={24} /> Uzmanlıklar
                  </h3>
                  <div className="flex flex-col gap-3">
                    {SITE_DATA.about.expertise.map((exp, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
                        <CheckCircle2 className="text-[#C4A96E] shrink-0" size={16} />
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-32 bg-[#FAFAF8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-3xl p-14"
            >
              <div className="w-16 h-16 bg-[#C4A96E]/10 rounded-2xl flex items-center justify-center text-[#C4A96E] mb-10">
                <Target size={32} />
              </div>
              <p className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold mb-4">Misyon</p>
              <h2 className="font-serif text-[#0C1117] text-3xl mb-6">Neden Buradayız?</h2>
              <p className="text-slate-500 leading-relaxed font-light text-lg">{SITE_DATA.about.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#0C1117] rounded-3xl p-14 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#C4A96E]/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#C4A96E] mb-10">
                  <Eye size={32} />
                </div>
                <p className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold mb-4">Vizyon</p>
                <h2 className="font-serif text-white text-3xl mb-6">Nereye Gidiyoruz?</h2>
                <p className="text-white/40 leading-relaxed font-light text-lg">{SITE_DATA.about.vision}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">İlkeler</p>
            <h2 className="font-serif text-[#0C1117] text-4xl">Temel Değerlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { num: '01', title: 'Sahih Bilgi', desc: 'Kur\'an ve Sünnet eksenli, hurafe ve aşırılıktan uzak, delile dayalı bilgi üretimi.' },
              { num: '02', title: 'Akademik Titizlik', desc: 'Bilimsel yöntemlere sadık, eleştirel düşünceyi önemseyen araştırmacı yaklaşım.' },
              { num: '03', title: 'Toplumsal Fayda', desc: 'Bilginin sadece teoride kalmadığı, hayatın içine dokunan çözüm üreten bir anlayış.' },
            ].map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#FAFAF8] hover:bg-[#0C1117] p-12 transition-colors duration-500"
              >
                <p className="text-[#C4A96E] text-xs tracking-[0.3em] uppercase font-bold mb-6">{v.num}</p>
                <h3 className="font-serif text-[#0C1117] group-hover:text-white text-2xl mb-4 transition-colors">{v.title}</h3>
                <p className="text-slate-500 group-hover:text-white/40 leading-relaxed text-sm transition-colors">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container-custom text-center">
          <h2 className="font-serif text-[#0C1117] text-3xl mb-6">Sorularınız mı Var?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Her türlü görüş, soru ve iş birliği için iletişime geçebilirsiniz.</p>
          <Link to="/iletisim" className="group inline-flex items-center gap-3 bg-[#0C1117] text-white font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-[#C4A96E] transition-colors duration-300">
            İletişime Geç <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
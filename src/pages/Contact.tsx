import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { SITE_DATA } from '../data';
import { SEO } from '../components/SEO';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'E-posta', getValue: () => SITE_DATA.email, getLink: () => `mailto:${SITE_DATA.email}` },
  { icon: Phone, label: 'Telefon', getValue: () => SITE_DATA.phone, getLink: () => `tel:${SITE_DATA.phone}` },
  { icon: MapPin, label: 'Adres', getValue: () => SITE_DATA.address, getLink: () => null },
  { icon: Clock, label: 'Çalışma Saatleri', getValue: () => 'Hafta içi: 09:00 – 18:00', getLink: () => null },
];

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız başarıyla iletildi. En kısa sürede dönüş yapılacaktır.');
  };

  return (
    <div className="bg-[#FAFAF8]">
      <SEO title="İletişim" description="Yasir Alrawi ile iletişime geçin." />

      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-end pb-24 overflow-hidden bg-[#0C1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2400"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1117] via-[#0C1117]/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C4A96E]" /> Bize Ulaşın
            </p>
            <h1 className="font-serif text-white" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>İletişim</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* ─── LEFT: Info ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:w-5/12 space-y-16"
            >
              <div>
                <p className="text-[#C4A96E] text-xs tracking-[0.35em] uppercase font-bold mb-4">İletişim</p>
                <h2 className="font-serif text-[#0C1117] text-4xl mb-6">İrtibat Bilgileri</h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  Her türlü soru, görüş ve iş birliği talepleriniz için aşağıdaki kanallardan ulaşabilirsiniz.
                </p>
              </div>

              <div className="space-y-8">
                {CONTACT_ITEMS.map((item, idx) => {
                  const link = item.getLink();
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="w-13 h-13 w-14 h-14 rounded-2xl bg-[#FAFAF8] border border-slate-100 text-[#C4A96E] flex items-center justify-center shrink-0 group-hover:bg-[#0C1117] group-hover:text-[#C4A96E] transition-all duration-300">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                        {link ? (
                          <a href={link} className="text-[#0C1117] font-medium hover:text-[#C4A96E] transition-colors">
                            {item.getValue()}
                          </a>
                        ) : (
                          <p className="text-[#0C1117] font-medium">{item.getValue()}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAFAF8] border border-slate-100 relative flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#0C1117] text-[#C4A96E] flex items-center justify-center mx-auto mb-4">
                    <MapPin size={28} />
                  </div>
                  <p className="font-serif text-[#0C1117] text-lg mb-2">Harita Görünümü</p>
                  <p className="text-slate-400 text-sm">API anahtarı entegrasyonu gereklidir.</p>
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT: Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:w-7/12"
            >
              <div className="bg-[#FAFAF8] rounded-3xl border border-slate-100 p-12 md:p-16">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-[#C4A96E]/10 text-[#C4A96E] rounded-2xl flex items-center justify-center">
                    <MessageSquare size={22} />
                  </div>
                  <h2 className="font-serif text-[#0C1117] text-3xl">Mesaj Gönderin</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Ad Soyad</label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Yasir Alrawi"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C4A96E] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">E-posta</label>
                      <input
                        type="email"
                        required
                        placeholder="Örn: yasir@mail.com"
                        className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C4A96E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Konu</label>
                    <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C4A96E] transition-colors appearance-none cursor-pointer">
                      <option>Genel Soru</option>
                      <option>Randevu Talebi</option>
                      <option>İş Birliği</option>
                      <option>Ders / Seminer Talebi</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Mesajınız</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C4A96E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-[#0C1117] text-white font-bold text-sm tracking-widest uppercase py-5 rounded-xl hover:bg-[#C4A96E] hover:text-[#0C1117] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Gönder
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
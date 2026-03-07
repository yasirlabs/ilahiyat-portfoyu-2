import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data';

const LINKS = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımda', to: '/hakkimda' },
  { label: 'Hizmetler', to: '/hizmetler' },
  { label: 'Makaleler', to: '/blog' },
  { label: 'Duyurular', to: '/duyurular' },
];

const SERVICES = [
  'Vaaz & İrşat',
  'Dini Sohbetler',
  'İslami Eğitimler',
  'Dini Danışmanlık',
  'Akademik Seminerler',
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1117] text-white/40">
      {/* Top stripe */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C4A96E]/30 to-transparent" />

      <div className="container-custom pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <img src="src/public/images/logo.png" alt="Logo" className="w-full h-full object-contain p-1.5" />
              </div>
              <span className="font-serif text-white text-xl font-bold">Yasir Alrawi</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-light">
              İslami ilimler ve akademik araştırmalar ışığında sahih bilgiyi toplumla buluşturma gayesiyle hizmet veriyoruz.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: SITE_DATA.social.twitter },
                { Icon: Facebook, href: SITE_DATA.social.facebook },
                { Icon: Instagram, href: SITE_DATA.social.instagram },
                { Icon: Youtube, href: SITE_DATA.social.youtube },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-[#C4A96E]/10 hover:border-[#C4A96E]/30 hover:text-[#C4A96E] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="text-white font-bold text-xs tracking-widest uppercase mb-6">Sayfalar</p>
            <ul className="space-y-3">
              {LINKS.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-white font-bold text-xs tracking-widest uppercase mb-6">Hizmetler</p>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s}>
                  <Link to="/hizmetler" className="text-sm hover:text-white transition-colors flex items-center gap-1 group">
                    {s}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-white font-bold text-xs tracking-widest uppercase mb-6">İletişim</p>
            <ul className="space-y-5">
              <li>
                <a href={`mailto:${SITE_DATA.email}`} className="text-sm hover:text-white transition-colors flex items-start gap-3">
                  <Mail size={16} className="text-[#C4A96E] mt-0.5 shrink-0" />
                  {SITE_DATA.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_DATA.phone}`} className="text-sm hover:text-white transition-colors flex items-start gap-3">
                  <Phone size={16} className="text-[#C4A96E] mt-0.5 shrink-0" />
                  {SITE_DATA.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-[#C4A96E] mt-0.5 shrink-0" />
                {SITE_DATA.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Yasir Alrawi. Tüm Hakları Saklıdır.</p>
          <p>Profesyonel İlahiyatçı Portfolyosu</p>
        </div>
      </div>
    </footer>
  );
};
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/hakkimda' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Makaleler', path: '/blog' },
  { name: 'Duyurular', path: '/duyurular' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const isHome = location.pathname === '/';
  const lightNav = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden ${
              scrolled ? 'bg-[#0C1117]' : 'bg-white/15 backdrop-blur-sm'
            }`}>
              <img src="https://res.cloudinary.com/dvx6nsrd9/image/upload/v1773341308/logo_ycwliy.png" alt="Logo" className="w-full h-full object-contain p-1.5" />
            </div>
            <span className={`font-serif font-bold text-lg transition-colors duration-300 ${
              lightNav ? 'text-white' : 'text-[#0C1117]'
            }`}>
              Yasir Alrawi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 relative group ${
                  lightNav
                    ? location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                    : location.pathname === link.path ? 'text-[#C4A96E]' : 'text-slate-500 hover:text-[#0C1117]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${lightNav ? 'bg-[#C4A96E]' : 'bg-[#C4A96E]'}`}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/iletisim"
              className={`text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                lightNav
                  ? 'bg-white text-[#0C1117] hover:bg-[#C4A96E] hover:text-white'
                  : 'bg-[#0C1117] text-white hover:bg-[#C4A96E]'
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              lightNav ? 'text-white hover:bg-white/10' : 'text-[#0C1117] hover:bg-slate-100'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="container-custom py-8 space-y-2">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#C4A96E] bg-[#C4A96E]/5'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/iletisim"
                  className="block w-full text-center bg-[#0C1117] text-white font-bold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-[#C4A96E] transition-colors"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL, TICKER_TEXT, WHATSAPP_LINK } from '../constants';
import { motion } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Ticker Faixa Correndo */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-magenta text-white py-1.5 overflow-hidden text-xs font-bold uppercase tracking-widest border-b border-white/10">
        <div className="animate-marquee flex whitespace-nowrap">
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
        </div>
      </div>

      <nav 
        id="navbar"
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="reflection-container"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-brand-magenta/20 animate-shine reflection-image">
                  <img 
                    src={LOGO_URL} 
                    alt="Ame Lev Lave Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="reflection-effect rounded-xl overflow-hidden">
                   <img 
                    src={LOGO_URL} 
                    alt="" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter text-brand-magenta leading-none">
                  Ame Lev Lave
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mt-1">
                  Lavanderia Self Service
                </span>
              </div>
            </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand-magenta transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl transition-all active:scale-95"
            >
              Pedir Coleta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-magenta hover:text-brand-orange transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-brand-magenta hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-gradient text-white px-5 py-4 rounded-2xl text-base font-bold shadow-lg"
              >
                Pedir Coleta Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

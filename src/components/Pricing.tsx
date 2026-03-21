import React from 'react';
import { motion } from 'motion/react';
import { PRICING_CARDS } from '../constants';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Economia por <span className="text-brand-magenta">Horário</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Nossos preços são ajustados para garantir que encontre sempre máquinas disponíveis e o máximo conforto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[3rem] border-2 transition-all ${
                card.highlight 
                  ? 'border-brand-magenta bg-brand-magenta/5 shadow-2xl shadow-brand-magenta/10' 
                  : 'border-slate-100 bg-slate-50 hover:border-brand-orange/30'
              }`}
            >
              {card.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {card.tag}
                </span>
              )}
              
              <div className={`mb-8 inline-flex p-5 rounded-2xl ${card.highlight ? 'bg-brand-magenta text-white' : 'bg-white text-brand-orange shadow-sm'}`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-6">{card.time}</p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-slate-400">R$</span>
                <span className={`text-6xl font-black ${card.highlight ? 'text-brand-magenta' : 'text-slate-900'}`}>{card.price}</span>
              </div>
              
              <p className="text-slate-600 font-bold mb-8 leading-relaxed">
                {card.slogan}
              </p>
              
              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${
                card.highlight 
                  ? 'bg-brand-magenta text-white shadow-xl shadow-brand-magenta/20 hover:bg-brand-magenta/90' 
                  : 'bg-white text-slate-800 border-2 border-slate-100 hover:bg-slate-50'
              }`}>
                Escolher Horário
              </button>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-12 font-medium">
          * Preços reajustados a partir de Março/2026. Valores válidos para cada ciclo de lavagem ou secagem.
        </p>
      </div>
    </section>
  );
};

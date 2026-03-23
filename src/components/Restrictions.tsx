import React from 'react';
import { motion } from 'motion/react';
import { RESTRICTIONS, WHATSAPP_LINK } from '../constants';

export const Restrictions = () => {
  return (
    <section id="restrictions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-magenta font-bold tracking-widest uppercase text-xs">Segurança & Higiene</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-8 tracking-tight">
              Para sua segurança e <span className="text-brand-magenta">cuidado</span> com as roupas
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Para garantir a eficiência de nossas máquinas e a higiene de todos os clientes, existem alguns itens que não podemos processar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {RESTRICTIONS.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-magenta/20 transition-colors">
                  <div className="p-3 bg-white rounded-xl text-brand-magenta shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-sm leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-brand-gradient p-1 rounded-[3rem] shadow-2xl">
              <div className="bg-white p-12 rounded-[2.8rem] text-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Dúvida rápida?</h3>
                <p className="text-slate-500 mb-10 font-medium">"Posso lavar o tapete da minha sala?"</p>
                <div className="p-8 bg-slate-50 rounded-3xl border-l-8 border-brand-magenta text-left">
                  <p className="text-slate-700 font-bold leading-relaxed">
                    Infelizmente não. Tapetes, calçados e itens PET exigem higienização industrial específica que pode comprometer o tambor para roupas de uso pessoal.
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-brand-magenta font-black text-lg hover:gap-4 transition-all"
                >
                  Tirar outra dúvida <span className="text-2xl">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

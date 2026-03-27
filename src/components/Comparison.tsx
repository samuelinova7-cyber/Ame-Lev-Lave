import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Lave mais, <span className="text-brand-magenta">pague menos</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            O nosso cesto é 34% maior que o padrão do mercado. Compare e comprove a economia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-brand-magenta relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-brand-magenta text-white px-8 py-2 rounded-bl-3xl font-bold text-sm">
              NOSSA VANTAGEM
            </div>
            <h3 className="text-3xl font-bold text-brand-magenta mb-8">Ame Lev Lave</h3>
            <div className="flex items-center gap-8 mb-10">
              <div className="relative">
                <div className="w-32 h-40 bg-brand-magenta/10 border-4 border-brand-magenta rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-black text-brand-magenta">43L</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
              </div>
              <div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Capacidade</p>
                <p className="text-2xl font-bold text-slate-900">Cesto Gigante</p>
                <p className="text-slate-600 mt-2 font-medium">Rende muito mais por lavagem.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <CheckCircle2 className="text-brand-magenta" size={20} />
                <span>Preço Inicial: R$ 13,50</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold">
                <CheckCircle2 className="text-brand-magenta" size={20} />
                <span>Lave mais e pague menos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-200/50 p-12 rounded-[3rem] border-2 border-slate-200 opacity-80"
          >
            <h3 className="text-3xl font-bold text-slate-500 mb-8">Concorrência</h3>
            <div className="flex items-center gap-8 mb-10">
              <div className="relative">
                <div className="w-24 h-32 bg-slate-300 border-4 border-slate-400 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-slate-500">32L</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg">
                  <XCircle className="text-red-400" size={32} />
                </div>
              </div>
              <div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Capacidade</p>
                <p className="text-2xl font-bold text-slate-400">Cesto Padrão</p>
                <p className="text-slate-500 mt-2 font-medium">O tamanho do cesto pesa no bolso.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <XCircle size={20} />
                <span>Preço Inicial: R$ 14,99</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <XCircle size={20} />
                <span>Espaço Limitado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../constants';

export const Differentials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Por que escolher a <span className="text-brand-magenta">Ame Lev Lave</span>?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Praticidade e tecnologia em nossa lavanderia self service para entregar o melhor resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-magenta/10 transition-all group border border-transparent hover:border-brand-magenta/10 text-center"
            >
              <div className="mb-8 inline-flex p-6 rounded-3xl bg-white shadow-sm group-hover:bg-brand-magenta group-hover:text-white transition-all group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

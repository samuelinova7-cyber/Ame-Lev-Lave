import React from 'react';
import { motion } from 'motion/react';
import { STRUCTURE_VIDEO_URL } from '../constants';
import { Coffee, Wifi, Tv, Music, Thermometer, BookOpen } from 'lucide-react';

export const Structure = () => {
  const features = [
    { icon: <Wifi size={24} />, title: 'Wi-Fi Grátis', description: 'Trabalhe ou navegue enquanto espera.' },
    { icon: <Coffee size={24} />, title: 'Ambiente Aconchegante', description: 'Espaço pensado para o seu conforto.' },
    { icon: <Tv size={24} />, title: 'Entretenimento', description: 'TV com suas séries e filmes favoritos.' },
    { icon: <Music size={24} />, title: 'Som Ambiente', description: 'Peça sua música favorita para a Alexa.' },
    { icon: <Thermometer size={24} />, title: 'Ar Condicionado', description: 'Clima sempre agradável em qualquer estação.' },
    { icon: <BookOpen size={24} />, title: 'Cantinho da Leitura', description: 'Livros disponíveis para passar o tempo.' },
  ];

  return (
    <section id="structure" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <video 
                src={STRUCTURE_VIDEO_URL}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Nossa <span className="text-brand-magenta">Estrutura</span> <br />
              Pensada em <span className="text-brand-orange">Você</span>.
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
              Muito mais que uma lavanderia. Criamos um espaço onde você pode relaxar, trabalhar ou simplesmente curtir o momento enquanto suas roupas ficam prontas.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-brand-magenta/10 p-3 rounded-xl text-brand-magenta flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-tight">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK, HERO_IMAGE_URL } from '../constants';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-magenta/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand-orange/5 rounded-full blur-[120px]" />
        
        {/* Floating Stars/Glows */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 text-brand-orange/20"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/4 right-20 text-brand-magenta/20"
        >
          <Sparkles size={60} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Sua vida mais <span className="text-brand-magenta">leve</span>, <br />
              suas roupas mais <span className="text-brand-orange">limpas</span>.
            </h1>
            
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
              Cuidamos das suas roupas como se fossem nossas. Ganhe tempo para o que realmente importa enquanto nós cuidamos do resto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-brand-gradient text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-brand-magenta/30 transition-all active:scale-95"
              >
                <MessageCircle size={24} />
                Pedir Coleta Agora
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center gap-3 bg-white text-slate-800 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all active:scale-95"
              >
                Ver Preços
                <ArrowRight size={24} />
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/ame${i}/100/100`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Aprovado por +1.200 clientes</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Sparkles key={i} className="text-brand-orange" size={12} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative reflection-container">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(181,25,111,0.2)] border-8 border-white animate-shine reflection-image"
              >
                <img
                  src={HERO_IMAGE_URL}
                  alt="Ame Lev Lave Hero"
                  className="w-full h-[650px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/20 via-transparent to-transparent" />
              </motion.div>
              
              <div className="reflection-effect rounded-[3rem] overflow-hidden opacity-20">
                <img
                  src={HERO_IMAGE_URL}
                  alt=""
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Info Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50"
            >
              <div className="flex items-center gap-5">
                <div className="bg-brand-orange/10 p-4 rounded-2xl">
                  <Sparkles className="text-brand-orange" size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Resultado</p>
                  <p className="text-xl font-bold text-slate-900">Brilhando de Limpa</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

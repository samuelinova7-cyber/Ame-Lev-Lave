import React from 'react';
import { motion } from 'motion/react';
import { LOCKER_VIDEO_URL, WHATSAPP_LINK } from '../constants';
import { Lock, Sparkles, Bell, MessageCircle } from 'lucide-react';

export const LockerService = () => {
  return (
    <section id="locker" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-brand-magenta/10 rounded-full">
              <Lock className="text-brand-magenta" size={16} />
              <span className="text-sm font-bold tracking-tight text-brand-magenta uppercase">
                Serviço Exclusivo
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Deixou, <span className="text-brand-magenta">Lavou</span>.
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
              Não tem tempo de esperar o ciclo terminar? Utilize nossos armários inteligentes! Você deixa suas roupas, nós cuidamos de tudo e você retira quando puder.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-magenta">
                  <Lock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Armários Seguros</h4>
                  <p className="text-slate-500 font-medium">Deixe suas roupas em nossos lockers com total segurança e privacidade.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-magenta">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Cuidado Profissional</h4>
                  <p className="text-slate-500 font-medium">Nossa equipe realiza o processo completo de lavagem e secagem para você.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-magenta">
                  <Bell size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Aviso de Retirada</h4>
                  <p className="text-slate-500 font-medium">Te avisamos assim que suas roupas estiverem prontas, dobradas e cheirosas.</p>
                </div>
              </div>
            </div>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-brand-magenta text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-brand-magenta/20 hover:bg-brand-magenta/90 transition-all"
            >
              <MessageCircle size={24} />
              Saber mais sobre os Armários
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <video 
                src={LOCKER_VIDEO_URL}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-magenta/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

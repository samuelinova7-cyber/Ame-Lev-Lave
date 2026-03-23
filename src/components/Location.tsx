import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, ADDRESS, PHONE_DISPLAY } from '../constants';

export const Location = () => {
  const address = ADDRESS;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Onde nos <span className="text-brand-magenta">encontrar</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Estamos localizados no coração de Juiz de Fora, prontos para facilitar sua rotina com a melhor lavanderia self-service da região.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="bg-brand-magenta/10 p-4 rounded-2xl text-brand-magenta">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-2xl font-bold text-slate-900 leading-tight">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-brand-magenta text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-brand-magenta/20 hover:bg-brand-magenta/90 transition-all"
              >
                <Navigation size={24} />
                Como Chegar
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-white text-brand-magenta border-2 border-brand-magenta/10 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-brand-magenta/5 transition-all"
              >
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.123456789!2d-43.35123456789!3d-21.76123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b603939603b39%3A0x3939603939603b39!2sAme%20Lev%20Lave!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

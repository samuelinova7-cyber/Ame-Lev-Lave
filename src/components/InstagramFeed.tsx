import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';
import { INSTAGRAM_FEED, INSTAGRAM_LINK } from '../constants';

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-brand-magenta/10 rounded-full text-brand-magenta"
          >
            <Instagram size={20} />
            <span className="text-sm font-bold tracking-tight uppercase">Instagram</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6"
          >
            Siga-nos e fique por <span className="text-brand-magenta">dentro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Acompanhe nosso dia a dia, dicas de lavagem e promoções exclusivas diretamente no nosso perfil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INSTAGRAM_FEED.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl border-4 border-slate-50 group"
            >
              {post.type === 'video' ? (
                <video
                  src={post.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={post.url}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors pointer-events-none" />
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <Instagram size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-magenta to-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-brand-magenta/20 transition-all"
          >
            <Instagram size={24} />
            Seguir no Instagram
            <ExternalLink size={20} className="opacity-60" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Camera, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { REVIEWS, REVIEW_GUIDE } from '../constants';

export const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            O que nossos <span className="text-brand-magenta">clientes</span> dizem
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            A satisfação de quem já experimentou a Ame Lev Lave é o nosso maior orgulho.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-24">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-magenta border border-slate-100">
              <ChevronLeft size={24} />
            </div>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-magenta border border-slate-100">
              <ChevronRight size={24} />
            </div>
          </div>

          <motion.div 
            ref={carouselRef}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-6"
            >
              {REVIEWS.map((review, index) => (
                <motion.div
                  key={`${review.name}-${index}`}
                  className="flex-shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full"
                >
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-slate-500 text-sm">{review.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1.5 bg-brand-magenta/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-magenta"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span className="text-xs font-black text-brand-magenta uppercase tracking-[0.2em]">Arraste para explorar</span>
              <div className="w-12 h-1.5 bg-brand-magenta/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-magenta"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Review Guide Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-brand-magenta/5 border border-brand-magenta/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Gostou da experiência? <br />
                <span className="text-brand-magenta">Deixe sua avaliação!</span>
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Sua opinião é fundamental para continuarmos oferecendo o melhor serviço de Juiz de Fora. 
                Siga o passo a passo ao lado para nos avaliar no Google.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" /> 5 Estrelas
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
                  <Camera size={16} className="text-brand-magenta" /> Com Foto
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium">
                  <MessageSquare size={16} className="text-brand-magenta" /> Comentário
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {REVIEW_GUIDE.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-magenta text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-brand-magenta/20">
                    {item.step}
                  </div>
                  <p className="text-slate-700 text-lg pt-1 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
              
              <motion.a
                href="https://www.google.com/search?q=Ame+Lev+Lave+Juiz+de+Fora#lrd=0x989b603939603b39:0x3939603939603b39,3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-magenta text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-magenta/20 hover:bg-brand-magenta/90 transition-all mt-4 w-full justify-center"
              >
                <MapPin size={20} />
                Avaliar no Google Maps
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

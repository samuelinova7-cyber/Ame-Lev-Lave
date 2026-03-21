import React from 'react';
import { Instagram, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { INSTAGRAM_LINK, WHATSAPP_LINK, LOGO_URL } from '../constants';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="reflection-container"
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-brand-magenta/40 animate-shine reflection-image">
                  <img 
                    src={LOGO_URL} 
                    alt="Ame Lev Lave Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="reflection-effect rounded-2xl overflow-hidden opacity-40">
                   <img 
                    src={LOGO_URL} 
                    alt="" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <span className="text-3xl font-bold tracking-tighter">Ame Lev Lave</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed font-medium">
              Cuidamos das suas roupas como se fossem nossas. Transformando a tarefa de lavar roupas em um momento de leveza e praticidade.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-brand-magenta transition-all hover:scale-110 shadow-lg"
              >
                <Instagram size={28} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-all hover:scale-110 shadow-lg"
              >
                <Phone size={28} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-8 tracking-tight">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="text-brand-orange flex-shrink-0" size={24} />
                <span className="font-medium">R. São Mateus, 100 - São Mateus, Juiz de Fora - MG, 36033-000</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone className="text-brand-magenta flex-shrink-0" size={24} />
                <span className="font-medium">(21) 95111-8800</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail className="text-brand-orange flex-shrink-0" size={24} />
                <span className="font-medium">contato@amelevlave.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-8 tracking-tight">Horário de Funcionamento</h4>
            <div className="space-y-4 p-6 bg-slate-800/50 rounded-3xl border border-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Todos os dias</span>
                <span className="font-bold text-brand-orange">24 Horas</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                * Atendimento presencial em horário comercial. Autoatendimento disponível 24h.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>© 2026 Ame Lev Lave. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

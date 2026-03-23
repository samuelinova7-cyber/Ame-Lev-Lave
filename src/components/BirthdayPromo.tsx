import React from 'react';
import { motion } from 'motion/react';
import { Gift, Calendar, RefreshCw, Ban, Copy } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const BirthdayPromo = () => {
  const copyCode = () => {
    navigator.clipboard.writeText('ANIVERSARIO90');
    alert('Cupom copiado!');
  };

  return (
    <section id="birthday" className="py-24 bg-brand-gradient text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex p-4 bg-white/20 rounded-full mb-6"
          >
            <Gift size={48} />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">
            Mês do Aniversário: <br />O Presente é Seu! 🎈
          </h2>
          <p className="text-white text-xl max-w-2xl mx-auto font-medium">
            Desejamos um novo ciclo com mais leveza, boas energias… e roupas cheirosas, claro!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: O Presente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Gift className="text-brand-orange" /> O Presente
            </h3>
            <p className="text-4xl font-black mb-4">90% OFF</p>
            <p className="text-lg font-bold text-white leading-relaxed">
              O cupom é válido para qualquer horário! Se usado durante o Corujão (00h às 05:59), sua lavagem sai por apenas <span className="text-brand-orange font-black">R$ 1,35</span> - o menor valor possível.
            </p>
            
            <div className="mt-8 p-6 bg-white rounded-3xl flex flex-col items-center gap-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Use o Cupom</span>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-brand-magenta tracking-tighter">ANIVERSARIO90</span>
                <button 
                  onClick={copyCode}
                  className="p-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-brand-magenta hover:text-white transition-all"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Como Resgatar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <RefreshCw className="text-brand-orange" /> Como Resgatar
            </h3>
            <ul className="space-y-6">
              {[
                '1. Vá até o nosso Totem.',
                '2. Selecione o serviço e a máquina.',
                '3. Digite o código no campo CUPOM DE DESCONTO.'
              ].map((step) => (
                <li key={step} className="text-lg font-bold flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-sm flex-shrink-0">{step[0]}</span>
                  <span className="text-white">{step.substring(3)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Regras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="text-brand-orange" /> Regras de Ouro
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Calendar className="text-white flex-shrink-0" size={24} />
                <span className="font-bold text-white">Válido até o último dia do seu mês de aniversário.</span>
              </li>
              <li className="flex items-start gap-4">
                <RefreshCw className="text-white flex-shrink-0" size={24} />
                <span className="font-bold text-white">Uso único por CPF cadastrado.</span>
              </li>
              <li className="flex items-start gap-4">
                <Ban className="text-brand-orange flex-shrink-0" size={24} />
                <span className="font-black text-brand-orange uppercase">Atenção: Não confunda com "Voucher"!</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-magenta px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all active:scale-95"
          >
            Ver Unidade Mais Próxima
          </a>
        </div>
      </div>
    </section>
  );
};

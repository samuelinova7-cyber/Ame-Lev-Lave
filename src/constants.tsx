import React from 'react';
import { Shield, Clock, ThumbsUp, Sparkles, Leaf, Heart, Truck, Moon, Sun, Sunrise, Ban, Dog, Footprints, Layers, Gem } from 'lucide-react';

export const NAV_ITEMS = [
  { href: '#home', label: 'Início' },
  { href: '#structure', label: 'Estrutura' },
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#pricing', label: 'Preços' },
  { href: '#locker', label: 'Deixou, Lavou' },
  { href: '#testimonials', label: 'Avaliações' },
  { href: '#birthday', label: 'Aniversário' },
  { href: '#restrictions', label: 'Cuidados' },
  { href: '#faq', label: 'FAQ' },
  { href: '#location', label: 'Localização' },
];

export const STRUCTURE_VIDEO_URL = 'https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/cgi/SnapInsta.to_AQOflDk6F35JedLlsOMiVBZp99OnP-dA2A73dY9_0bV94c2yY948MJgDoyqTK_yvJbfvZUgHtyHdMH5zHF979aIxAThYkZOxxgWVBfg.mp4';

export const DIFFERENTIALS = [
  {
    icon: <Leaf className="text-brand-magenta" size={32} />,
    title: 'Lavagem Ecológica',
    description: 'Produtos biodegradáveis que cuidam das suas roupas e do meio ambiente.',
  },
  {
    icon: <Truck className="text-brand-magenta" size={32} />,
    title: 'Entrega Rápida',
    description: 'Sua roupa limpa e cheirosa entregue no horário combinado.',
  },
  {
    icon: <Heart className="text-brand-magenta" size={32} />,
    title: 'Lavanderia Self Service',
    description: 'Você mesmo cuida das suas roupas com a melhor tecnologia e praticidade.',
  }
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Você solicita',
    description: 'Peça a coleta pelo site ou WhatsApp em poucos segundos.'
  },
  {
    step: '2',
    title: 'Nós buscamos',
    description: 'Retiramos suas roupas no conforto da sua casa.'
  },
  {
    step: '3',
    title: 'Lavamos com amor',
    description: 'Praticidade total em nosso sistema self-service moderno.'
  },
  {
    step: '4',
    title: 'Entregamos cheirosa',
    description: 'Roupas prontas para usar, dobradas e perfumadas.'
  }
];

export const PRICING_CARDS = [
  {
    icon: <Sunrise size={32} />,
    title: 'Manhã',
    time: '06h às 11h59',
    price: '15,00',
    slogan: 'Manhã Produtiva, Preço Equilibrado.',
    highlight: false
  },
  {
    icon: <Sun size={32} />,
    title: 'Tarde/Noite',
    time: '12h às 23h59',
    price: '16,50',
    slogan: 'Horário Nobre!',
    highlight: false
  },
  {
    icon: <Moon size={32} />,
    title: 'Corujão',
    time: '00h às 05h59',
    price: '13,50',
    slogan: 'O menor valor da região!',
    highlight: true,
    tag: 'TOP - Economia Máxima'
  }
];

export const RESTRICTIONS = [
  { icon: <Dog size={24} />, label: 'Linha PET (Roupas e Pelos)' },
  { icon: <Layers size={24} />, label: 'Travesseiros e Almofadas' },
  { icon: <Gem size={24} />, label: 'Vestidos de Noiva e Ternos' },
  { icon: <Footprints size={24} />, label: 'Tapetes e Calçados' },
  { icon: <Ban size={24} />, label: 'Peças de Couro' },
  { icon: <Ban size={24} />, label: 'Roupas com Pedrarias/Metais' },
];

export const FAQ_ITEMS = [
  {
    question: 'Posso lavar o tapete da minha sala?',
    answer: 'Para garantir a eficiência de nossas máquinas e a higiene de todos os clientes, não permitimos a lavagem de tapetes, calçados ou itens PET.',
  },
  {
    question: 'Como funciona o desconto de aniversário?',
    answer: 'No mês do seu aniversário, use o cupom ANIVERSARIO90 no totem durante o horário do Corujão (00h às 05:59) para ganhar 90% de desconto.',
  },
  {
    question: 'Qual o tamanho do cesto?',
    answer: 'Nosso cesto tem capacidade de 43 Litros, sendo 34% maior que o padrão do mercado, permitindo que você lave mais por menos.',
  },
  {
    question: 'Preciso levar sabão e amaciante?',
    answer: 'Não! Nossas máquinas já dosam automaticamente sabão e amaciante profissionais de alta qualidade em todos os ciclos.',
  },
  {
    question: 'Quanto tempo demora o ciclo de lavagem?',
    answer: 'O ciclo de lavagem dura aproximadamente 30 minutos, e o de secagem mais 45 minutos. Suas roupas prontas em pouco mais de 1 hora!',
  },
  {
    question: 'Quais as formas de pagamento aceitas?',
    answer: 'Aceitamos cartões de crédito, débito e PIX diretamente no totem da loja.',
  },
  {
    question: 'Posso lavar edredom?',
    answer: 'Sim! Nossas máquinas de 43L comportam edredons de casal e até king size com facilidade.',
  },
  {
    question: 'A lavanderia funciona aos domingos?',
    answer: 'Sim! Funcionamos 24 horas por dia, 7 dias por semana, inclusive feriados.',
  },
  {
    question: 'As roupas saem passadas?',
    answer: 'As roupas saem quentes e macias da secadora. Se você dobrá-las imediatamente, a maioria das peças nem precisará de ferro!',
  },
  {
    question: 'O ambiente é seguro durante a noite?',
    answer: 'Sim, nossa loja possui monitoramento por câmeras 24h e iluminação reforçada para sua total segurança no Corujão.',
  }
];

export const REVIEWS = [
  {
    name: 'Sofia Muñoz',
    rating: 5,
    text: 'Fiquei extremamente satisfeita! O ambiente é limpo, organizado e as máquinas funcionam perfeitamente. Adorei os livros disponíveis para leitura enquanto aguardamos.',
    date: '9 meses atrás'
  },
  {
    name: 'Juliana Barbosa',
    rating: 5,
    text: 'Um ambiente acolhedor, tudo bem explicadinho, o cheirinho do amaciante é uma delícia e o preço é super acessível! Eu amei demais.',
    date: '6 meses atrás'
  },
  {
    name: 'Pedro Estrada',
    rating: 5,
    text: 'A experiência foi ótima. O local tem cadeiras para sentar e aguardar, tem uma Alexa e toca a música que você pedir, tem ar condicionado e Wi-Fi.',
    date: '2 meses atrás'
  },
  {
    name: 'Marcelo Vidal',
    rating: 5,
    text: 'Melhor lavanderia de Juiz de Fora. Melhor relação custo-benefício. Máquinas novas, ambiente limpo e confortável. Atendimento de excelência.',
    date: '10 meses atrás'
  },
  {
    name: 'ANA JÚLIA (JULY)',
    rating: 5,
    text: 'Muito prático, preço acessível e as roupas saem bem secas e cheirosas. O espaço tem livros, Wi-Fi e TV para assistir série ou ouvir música.',
    date: '4 meses atrás'
  },
  {
    name: 'Ricardo Santos',
    rating: 5,
    text: 'Excelente custo benefício. O sistema de autoatendimento é muito intuitivo e as máquinas são de última geração. Recomendo muito!',
    date: '1 mês atrás'
  },
  {
    name: 'Beatriz Oliveira',
    rating: 5,
    text: 'Adorei a praticidade! Lavei e sequei tudo em menos de uma hora. O cheiro das roupas fica maravilhoso por dias.',
    date: '3 meses atrás'
  },
  {
    name: 'Fernando Costa',
    rating: 5,
    text: 'O horário do corujão é imbatível. Economia real e o lugar é super seguro e bem iluminado. Nota 10!',
    date: '5 meses atrás'
  },
  {
    name: 'Camila Lima',
    rating: 5,
    text: 'Espaço muito bem pensado. Enquanto a roupa batia, consegui trabalhar no notebook com o Wi-Fi estável. Muito bom!',
    date: '7 meses atrás'
  },
  {
    name: 'Gabriel Mendes',
    rating: 5,
    text: 'Melhor amaciante que já usei em lavanderias self-service. O atendimento via WhatsApp também é muito rápido e prestativo.',
    date: '8 meses atrás'
  }
];

export const REVIEW_GUIDE = [
  { step: '1', text: 'Abra o Google Maps e pesquise por "Ame Lev Lave".' },
  { step: '2', text: 'Clique na aba "Avaliações" e selecione "Escrever uma avaliação".' },
  { step: '3', text: 'Dê 5 estrelas ⭐ e escreva um comentário detalhado sobre sua experiência.' },
  { step: '4', text: 'Adicione uma foto 📸 das suas roupas ou do nosso ambiente aconchegante.' },
  { step: '5', text: 'Clique em "Postar" e ajude nossa comunidade a crescer! ❤️' }
];

export const WHATSAPP_LINK = 'https://wa.me/5521951118800';
export const INSTAGRAM_LINK = 'https://www.instagram.com/amelevlave/';

export const LOCKER_VIDEO_URL = 'https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/cgi/SnapInsta.to_AQOjDp4rJtifm6IWbYkK7rkvA2IrKfxEbdvPfnJXgRYOhFyoJr1Q0dG6j7HLTI6xluRElPOoaSWajwP40-0NUemNGbv-pO3sGNLhgTY.mp4';

export const LOGO_URL = 'https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/cgi/WhatsApp%20Image%202026-03-20%20at%206.45.23%20PM.jpeg';
export const HERO_IMAGE_URL = 'https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/cgi/WhatsApp%20Image%202026-03-20%20at%207.03.31%20PM.jpeg';

export const TICKER_TEXT = "Ame Lev Lave - Sua vida mais leve, suas roupas mais limpas! • Atendimento 24h • Lavagem Ecológica • Entrega Rápida • Lavanderia Self Service • Capacidade 43L • Economia Máxima no Corujão! • ";

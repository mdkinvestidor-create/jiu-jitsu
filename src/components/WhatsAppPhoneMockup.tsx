import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCheck, ArrowLeft, Video, Phone, MoreVertical, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

interface ChatPrint {
  id: number;
  contactName: string;
  contactStatus: string;
  avatarIcon: string;
  buyerName: string;
  value: string;
  feedbackText: string;
  time: string;
}

const PRINTS: ChatPrint[] = [
  {
    id: 1,
    contactName: 'Entrega Automática VIP',
    contactStatus: 'Conta comercial verificada',
    avatarIcon: '🥋',
    buyerName: 'Mestre Roberto Silva',
    value: 'R$ 19,90',
    feedbackText: 'Sensacional! Acabei de aplicar na aula das 18h com a turminha de 5 a 8 anos. Foi a primeira vez que ninguém dispersou no tatame! Parabéns pelo material.',
    time: '18:45',
  },
  {
    id: 2,
    contactName: 'Suporte Dinâmicas Jiu-Jitsu',
    contactStatus: 'Conta comercial verificada',
    avatarIcon: '🥋',
    buyerName: 'Prof. Carlos Eduardo',
    value: 'R$ 19,90',
    feedbackText: 'O certificado no final da aula deu um orgulho gigante nas crianças e os pais no WhatsApp da academia só elogiaram! Já quero as próximas atualizações.',
    time: '19:20',
  },
  {
    id: 3,
    contactName: 'Área de Membros Jiu-Jitsu',
    contactStatus: 'Conta comercial verificada',
    avatarIcon: '🥋',
    buyerName: 'Sensei Juliana Mendes',
    value: 'R$ 19,90',
    feedbackText: 'Material muito completo e super organizado. Os 100 exercícios de preparação física facilitaram 100% o meu planejamento semanal de treinos!',
    time: '10:15',
  },
  {
    id: 4,
    contactName: 'Central de Membros',
    contactStatus: 'Conta comercial verificada',
    avatarIcon: '🥋',
    buyerName: 'Academia Gracie Team',
    value: 'R$ 19,90',
    feedbackText: 'Compramos pro dojô inteiro. Nossos 4 instrutores já estão usando as fichas impressas. Engajamento nota 1000!',
    time: '16:30',
  },
];

export default function WhatsAppPhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PRINTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PRINTS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = PRINTS[currentIndex];

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto select-none flex items-center justify-center">
      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Depoimento Anterior"
        className="absolute -left-3 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-blue-500/60 shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo Depoimento"
        className="absolute -right-3 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-blue-500/60 shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Realistic Smartphone Shell with Blue Borders and Blue Ambient Glow */}
      <div className="w-[300px] sm:w-[330px] bg-slate-950 rounded-[42px] p-3 shadow-2xl border-4 border-blue-600 ring-4 ring-blue-500/30 relative shadow-[0_0_35px_rgba(0,87,217,0.3)]">
        {/* Notch / Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2 border border-blue-500/30">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
          <div className="w-10 h-1 bg-slate-800 rounded-full" />
        </div>

        {/* Screen Container */}
        <div className="w-full bg-[#efeae2] rounded-[34px] overflow-hidden flex flex-col pt-5 text-slate-800 relative font-sans shadow-inner border-2 border-blue-400/40">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 pt-1 pb-1 text-[10px] font-bold text-slate-800">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-4 h-2 border border-slate-800 rounded-sm relative">
                <div className="w-3 h-full bg-slate-800" />
              </div>
            </div>
          </div>

          {/* WhatsApp Header */}
          <div className="bg-[#005e54] text-white px-3 py-2 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-base border border-emerald-400">
                {current.avatarIcon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-xs leading-tight truncate max-w-[130px]">
                    {current.contactName}
                  </span>
                  <ShieldCheck className="w-3 h-3 text-emerald-300 flex-shrink-0" />
                </div>
                <span className="text-[9px] text-emerald-100/90 leading-none">
                  {current.contactStatus}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-white/90">
              <Video className="w-4 h-4" />
              <Phone className="w-4 h-4" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Messages Body with WhatsApp background pattern */}
          <div className="p-3 space-y-2.5 text-[11px] bg-[#efeae2] min-h-[380px] max-h-[420px] overflow-y-auto">
            {/* Date Pill */}
            <div className="text-center my-1">
              <span className="bg-white/80 text-slate-600 text-[9px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                HOJE
              </span>
            </div>

            {/* Message 1: Payment Confirmed Notification */}
            <div className="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm max-w-[90%] border border-slate-200/60 relative">
              <div className="flex items-center gap-1 text-emerald-700 font-bold text-[10px] mb-1">
                <span className="text-xs">🎉</span>
                <span>Pagamento Confirmado!</span>
              </div>
              <p className="text-[10px] text-slate-700 mb-1">
                Olá <strong>{current.buyerName}</strong> 👋
              </p>
              <p className="text-[9.5px] text-slate-600 mb-1.5 leading-relaxed">
                Seu pagamento foi confirmado com sucesso para o produto <strong>"+500 Dinâmicas Interativas de Jiu Jitsu"</strong>.
              </p>
              <div className="bg-slate-50 rounded p-1.5 space-y-0.5 text-[9px] border border-slate-100 font-medium">
                <div className="text-emerald-600 font-bold">✅ Status: APROVADO</div>
                <div className="text-slate-700">💰 Valor: <strong>{current.value}</strong></div>
              </div>
              <p className="text-[9px] text-slate-500 mt-1">Obrigado pela sua compra! 🥋</p>
              <div className="flex justify-end items-center gap-0.5 text-[8px] text-slate-400 mt-0.5">
                <span>08:42</span>
                <CheckCheck className="w-3 h-3 text-sky-500" />
              </div>
            </div>

            {/* Message 2: Product Delivery & Access Link */}
            <div className="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm max-w-[92%] border border-slate-200/60 relative">
              {/* Product Thumbnail inside chat */}
              <div className="bg-[#002f87] text-white rounded p-2 mb-1.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-amber-400 text-slate-900 flex items-center justify-center font-black text-xs flex-shrink-0">
                  500+
                </div>
                <div>
                  <div className="text-[9px] font-bold leading-tight">Área de Membros - Dinâmicas Interativas</div>
                  <div className="text-[7.5px] text-amber-300">Acesse todo o material agora...</div>
                </div>
              </div>

              <div className="text-[10px] font-bold text-slate-800 mb-1 flex items-center gap-1">
                <span>📦</span> Produto Entregue!
              </div>
              <p className="text-[9.5px] text-slate-700 mb-1 leading-snug">
                Olá! Seu produto <strong>"+500 Dinâmicas Interativas de Jiu Jitsu"</strong> está pronto!
              </p>
              <div className="bg-blue-50 border border-blue-200/80 rounded p-1.5 text-[9px] text-blue-900 space-y-0.5 mb-1 font-mono">
                <div className="font-sans font-bold text-blue-700 flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> Seus dados de acesso:
                </div>
                <div>🔗 Link: <u>membros.jiujitsu.app</u></div>
                <div>✉️ Login: Liberado</div>
                <div>🔑 Senha: Criada no checkout</div>
              </div>
              <p className="text-[9px] text-emerald-700 font-semibold">Aproveite sua compra! 🥋</p>
              <div className="flex justify-end items-center gap-0.5 text-[8px] text-slate-400 mt-0.5">
                <span>08:43</span>
                <CheckCheck className="w-3 h-3 text-sky-500" />
              </div>
            </div>

            {/* Message 3: Customer Feedback (Green Bubble) */}
            <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-2.5 shadow-sm max-w-[88%] ml-auto border border-emerald-200/80 relative">
              <p className="text-[9.5px] text-slate-800 leading-snug">
                "{current.feedbackText}"
              </p>
              <div className="flex justify-end items-center gap-0.5 text-[8px] text-slate-500 mt-1">
                <span>{current.time}</span>
                <CheckCheck className="w-3 h-3 text-sky-600" />
              </div>
            </div>

          </div>

          {/* Bottom Home Indicator */}
          <div className="py-2 flex justify-center bg-[#efeae2]">
            <div className="w-24 h-1 bg-slate-400 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}

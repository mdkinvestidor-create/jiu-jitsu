import { useState, useEffect } from 'react';
import { X, Sparkles, Check, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptOffer: () => void;
  onDeclineToBasic: () => void;
}

export default function SpecialOfferModal({
  isOpen,
  onClose,
  onAcceptOffer,
  onDeclineToBasic,
}: SpecialOfferModalProps) {
  // Timer de contagem regressiva de urgência (10 minutos)
  const [timeLeft, setTimeLeft] = useState(600);

  // Efeito de confetes ao abrir o popup
  useEffect(() => {
    if (isOpen) {
      // Primeira explosão de confetes no centro superior
      confetti({
        particleCount: 90,
        spread: 90,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.35 },
        colors: ['#FFD700', '#FFA500', '#0057D9', '#16A34A', '#FF4500', '#9333EA'],
        disableForReducedMotion: true,
        zIndex: 99999,
      });

      // Segunda onda rápida lateral
      const timer = setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0.2, y: 0.4 },
          colors: ['#FFD700', '#00D26A', '#38BDF8', '#F59E0B'],
          zIndex: 99999,
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 0.8, y: 0.4 },
          colors: ['#FFD700', '#00D26A', '#38BDF8', '#F59E0B'],
          zIndex: 99999,
        });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(600);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const standardBenefits = [
    '+500 Dinâmicas Interativas de Jiu-Jitsu',
    'Atualizações Mensais',
    'Suporte VIP Prioritário',
    'Acesso Vitalício',
    'Metodologia Comprovada',
    'Garantia de 7 dias',
  ];

  const bonusBenefits = [
    'Área de Membros Exclusiva',
    'Certificado Jiu-Jiteiro',
    '20 Jogos de lutas interativas',
    '100 Exercícios de preparação física',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-amber-400 text-slate-800 relative my-auto animate-in zoom-in-95 duration-200 max-h-[94vh] flex flex-col">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-700 bg-slate-100/90 hover:bg-slate-200 rounded-full p-1.5 transition-colors z-20 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Attention Alert Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white px-4 py-2.5 text-center font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-inner shrink-0">
          <Flame className="w-4 h-4 text-yellow-200 animate-bounce" />
          <span>ESPERE! OFERTA EXCLUSIVA DESBLOQUEADA</span>
          <Flame className="w-4 h-4 text-yellow-200 animate-bounce" />
        </div>

        <div className="p-4 sm:p-6 text-center overflow-y-auto">
          {/* Header Title */}
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0057d9] border border-blue-200/80 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Condição Única &amp; Imediata</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
            Leve o <span className="text-[#0057d9]">KIT COMPLETO 🌟</span> com Super Desconto!
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Tudo o que você precisa para transformar suas aulas com desconto especial:
          </p>

          {/* Product Image Box */}
          <div className="my-3 relative flex justify-center">
            <div className="relative">
              <img
                src="https://i.ibb.co/C51gnSvc/Gemini-Generated-Image-ss4vhhss4vhhss4v.jpg"
                alt="Kit Completo VIP"
                className="w-48 sm:w-56 mx-auto rounded-2xl shadow-lg border-2 border-blue-300/80 object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-400 text-[10px] sm:text-xs font-black px-3 py-0.5 rounded-full uppercase tracking-wider border border-amber-400/50 whitespace-nowrap shadow-md">
                ⚡ OFERTA EXPIRA EM: {formattedTime}
              </div>
            </div>
          </div>

          {/* Complete Benefits List */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 my-3 text-left text-xs sm:text-sm space-y-2">
            <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1">
              O Que Está Incluso no Kit Completo:
            </div>
            
            {/* Core Features */}
            {standardBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-800 font-semibold">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}

            {/* Bonus Features */}
            <div className="pt-2 border-t border-slate-200 space-y-2">
              {bonusBenefits.map((bonus, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-900 font-bold bg-amber-50/80 border border-amber-200/60 rounded-xl px-2.5 py-1.5">
                  <span className="text-base shrink-0">🎁</span>
                  <span>{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Box */}
          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3 mb-3.5">
            <div className="text-xs text-slate-500 line-through font-semibold">
              De R$ 37,90 por apenas:
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#16a34a] leading-none mt-0.5">
              R$ 21<span className="text-2xl">,90</span>
            </div>
            <div className="text-[11px] font-extrabold text-[#15803d] uppercase tracking-wider mt-1">
              PAGAMENTO ÚNICO • ACESSO VITALÍCIO
            </div>
          </div>

          {/* Accept CTA Button */}
          <button
            type="button"
            onClick={onAcceptOffer}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-sm sm:text-base py-3.5 px-5 rounded-2xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>SIM! QUERO O KIT COMPLETO POR R$ 21,90</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Decline / Continue with basic link */}
          <button
            type="button"
            onClick={onDeclineToBasic}
            className="w-full text-slate-400 hover:text-slate-600 text-xs font-semibold underline mt-2.5 py-1 transition-colors cursor-pointer"
          >
            Não, prefiro continuar com o Kit Básico por R$ 10,00 sem os bônus
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500 font-semibold pt-3 border-t border-slate-100 mt-2.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantia de 7 Dias
            </span>
            <span>•</span>
            <span>Acesso Imediato</span>
            <span>•</span>
            <span>Compra 100% Segura</span>
          </div>
        </div>

      </div>
    </div>
  );
}

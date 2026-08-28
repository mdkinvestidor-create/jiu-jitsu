import React, { useEffect, useRef } from 'react';
import { Check, ShieldCheck, Award, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  onSelectPlan: (plan: 'basic' | 'premium') => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const kitCompletoHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasTriggeredConfettiRef = useRef(false);

  const fireConfetti = () => {
    if (!kitCompletoHeadingRef.current) return;
    const rect = kitCompletoHeadingRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Explosão em cone saindo do ponto da palavra
    confetti({
      particleCount: 70,
      spread: 80,
      startVelocity: 35,
      origin: { x, y },
      colors: ['#FFD700', '#FFA500', '#0057D9', '#16A34A', '#FF4500', '#9333EA'],
      disableForReducedMotion: true,
      zIndex: 9999,
    });

    // Segunda onda rápida para efeito mais vibrante de estouro
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: Math.max(0.1, x - 0.05), y },
        colors: ['#FFD700', '#00D26A', '#38BDF8', '#F59E0B'],
        zIndex: 9999,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: Math.min(0.9, x + 0.05), y },
        colors: ['#FFD700', '#00D26A', '#38BDF8', '#F59E0B'],
        zIndex: 9999,
      });
    }, 150);
  };

  useEffect(() => {
    const heading = kitCompletoHeadingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredConfettiRef.current) {
            hasTriggeredConfettiRef.current = true;
            // Dispara quando entra no campo de visão
            fireConfetti();
          }
        });
      },
      { threshold: 0.7 }
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="planos" className="w-full bg-slate-50/70 py-10 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Pricing Cards (2 Columns on desktop, perfectly proportioned cards on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[360px] sm:max-w-md md:max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Plano Completo */}
          <div
            id="kit-basico-card"
            className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow relative w-full"
          >
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Plano Completo
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Para quem está começando agora.
              </p>

              {/* Price */}
              <div className="my-5">
                <span className="text-xs text-slate-400 line-through block font-medium">
                  De R$ 67
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#16a34a] leading-none mt-1">
                  R$ 10<span className="text-2xl">,00</span>
                </div>
                <span className="text-xs text-slate-400 font-medium block mt-1">
                  Pagamento Único
                </span>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5 my-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>+500 Dinâmicas Interativas de Jiu-Jitsu</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Metodologia Comprovada</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions & Trust */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onSelectPlan('basic')}
                className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-slate-800 font-extrabold text-sm py-4 px-6 rounded-xl uppercase tracking-wider text-center transition-colors cursor-pointer"
              >
                ESCOLHER PLANO COMPLETO
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-between mt-4 px-2 text-[10px] text-slate-500 font-semibold">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  <span>Satisfação Garantida</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dados Protegidos</span>
                </div>
              </div>

              {/* WhatsApp Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  RECEBA O CONTEÚDO DIRETAMENTE NO SEU
                </p>
                <div className="flex items-center justify-center gap-1 text-[#16a34a] font-black text-sm mt-0.5">
                  <span>📱</span>
                  <span>WHATSAPP</span>
                  <span>📱</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: KIT COMPLETO (Featured) */}
          <div
            id="kit-completo-card"
            className="bg-white border-2 border-[#0057d9] rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col justify-between text-left shadow-xl relative w-full"
          >
            {/* O Mais Vendido Pill Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#002875] text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
              <span>🌟</span>
              <span>O MAIS VENDIDO</span>
            </div>

            <div>
              <h3
                ref={kitCompletoHeadingRef}
                onClick={fireConfetti}
                title="Clique para soltar confetes!"
                className="text-2xl font-black text-slate-900 flex items-center gap-1.5 cursor-pointer select-none group w-fit"
              >
                <span className="group-hover:text-[#0057d9] transition-colors">KIT COMPLETO</span>
                <span className="inline-block transition-transform group-hover:scale-125 duration-300">🌟</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                O arsenal completo para suas aulas.
              </p>

              {/* Bundle Cover Mockup Graphic */}
              <div className="my-3 text-center">
                <a
                  href="https://ibb.co/9986qd2D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-[1.02]"
                >
                  <img
                    src="https://i.ibb.co/C51gnSvc/Gemini-Generated-Image-ss4vhhss4vhhss4v.jpg"
                    alt="Gemini-Generated-Image-ss4vhhss4vhhss4v"
                    className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto rounded-2xl shadow-lg border border-blue-200/60 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>

              {/* Checklist */}
              <ul className="space-y-2 my-4 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span className="font-bold">+500 Dinâmicas Interativas de Jiu-Jitsu</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Atualizações Mensais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Suporte VIP Prioritário</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Metodologia Comprovada</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#16a34a] flex-shrink-0 stroke-[3]" />
                  <span>Garantia de 7 dias</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-900">
                  <span className="text-sm">🎁</span>
                  <span className="font-semibold text-slate-900">Área de Membros Exclusiva</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-900">
                  <span className="text-sm">🎁</span>
                  <span className="font-semibold text-slate-900">Certificado Jiu-Jiteiro</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-900">
                  <span className="text-sm">🎁</span>
                  <span className="font-semibold text-slate-900">20 Jogos de lutas interativas</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-900">
                  <span className="text-sm">🎁</span>
                  <span className="font-semibold text-slate-900">100 Exercícios de preparação física</span>
                </li>
              </ul>

              {/* Price Area */}
              <div className="my-5 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-400 line-through block font-medium">
                  De R$ 147 por:
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#16a34a] leading-none mt-1">
                  R$ 37<span className="text-2xl">,90</span>
                </div>
                <span className="text-[11px] text-[#16a34a] font-extrabold block mt-1 tracking-wider uppercase">
                  ACESSO VITALÍCIO
                </span>
              </div>
            </div>

            {/* Bottom Actions & Trust */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectPlan('premium')}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-xl uppercase tracking-wider text-center shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                QUERO O KIT COMPLETO
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-between mt-4 px-2 text-[10px] text-slate-500 font-semibold">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  <span>Satisfação Garantida</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dados Protegidos</span>
                </div>
              </div>

              {/* WhatsApp Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  RECEBA O CONTEÚDO DIRETAMENTE NO SEU
                </p>
                <div className="flex items-center justify-center gap-1 text-[#16a34a] font-black text-sm mt-0.5">
                  <span>📱</span>
                  <span>WHATSAPP</span>
                  <span>📱</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-2">
                  ✓ Garantia de 7 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

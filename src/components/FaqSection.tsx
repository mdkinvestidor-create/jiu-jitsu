import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-acesso',
    question: 'Como vou acessar o material?',
    answer:
      'Após a confirmação do pagamento, você receberá instantaneamente no seu e-mail e WhatsApp os dados de acesso à nossa Área de Membros exclusiva, onde poderá visualizar e baixar todas as dinâmicas em PDF e bônus em qualquer celular, tablet ou computador.',
  },
  {
    id: 'faq-idade',
    question: 'Serve para qual idade?',
    answer:
      'As dinâmicas foram desenvolvidas especialmente para crianças de 4 a 14 anos (turmas Kids e Juvenil), além de conter variações e adaptações para turmas de iniciantes de todas as idades.',
  },
  {
    id: 'faq-tradicao',
    question: 'O material segue a tradição do Jiu-Jitsu?',
    answer:
      'Sim! Todo o conteúdo respeita a essência, a hierarquia, a disciplina e os fundamentos técnicos do Jiu-Jitsu tradicional, combinando metodologia pedagógica moderna e lúdica para reter a atenção dos pequenos no tatame.',
  },
  {
    id: 'faq-garantia',
    question: 'Tenho garantia?',
    answer:
      'Sim, você tem 7 dias de garantia incondicional. Se por qualquer motivo o material não atender às suas expectativas, basta nos mandar uma mensagem e devolveremos 100% do seu valor imediatamente.',
  },
];

interface FaqSectionProps {
  onCtaClick: () => void;
}

export default function FaqSection({ onCtaClick }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-white py-14 sm:py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8 sm:mb-10">
          Perguntas Frequentes
        </h2>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-base sm:text-lg py-4 sm:py-5 px-10 sm:px-16 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            QUERO COMEÇAR AGORA!
          </button>
        </div>
      </div>
    </section>
  );
}

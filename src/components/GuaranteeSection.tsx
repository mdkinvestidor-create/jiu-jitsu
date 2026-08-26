import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="w-full bg-white py-12 sm:py-16 px-4 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-50/80 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-10 text-center shadow-lg relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            Risco Zero Para Você
          </div>

          {/* Gold Guarantee Seal Image */}
          <div className="flex justify-center mb-4">
            <a href="https://ibb.co/5X9QyKJ4" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
              <img
                src="https://i.ibb.co/KcGtkK8h/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1.png"
                alt="Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1"
                className="w-36 sm:w-44 h-auto mx-auto drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Garantia Incondicional de 7 Dias
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Acesse todo o material, explore as dinâmicas e teste com a sua turma por <strong className="text-slate-900 font-extrabold">7 dias completos</strong>.
            <br />
            Se por qualquer motivo você não ficar 100% satisfeito, devolvemos{' '}
            <strong className="text-slate-900 font-extrabold underline decoration-amber-500 underline-offset-4">100% do seu dinheiro</strong> de volta sem perguntas e sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}


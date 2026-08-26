import React from 'react';

const TARGET_ITEMS = [
  {
    id: 'target-senseis',
    avatar: '🥋',
    title: 'Professores e Senseis',
    description: 'Que querem aulas mais dinâmicas e alunos mais engajados no tatame.',
  },
  {
    id: 'target-pais',
    avatar: '👨‍👩‍👧‍👦',
    title: 'Pais de Alunos',
    description: 'Que desejam ensinar Jiu-Jitsu de forma lúdica e divertida em casa.',
  },
  {
    id: 'target-academias',
    avatar: '⛩️',
    title: 'Academias e Dojos',
    description: 'Que precisam de material pronto para turmas infantis e iniciantes.',
  },
  {
    id: 'target-educadores',
    avatar: '📚',
    title: 'Educadores Físicos',
    description: 'Que buscam atividades alinhadas à BNCC com base em artes marciais.',
  },
];

export default function TargetAudienceSection() {
  return (
    <section id="para-quem-e" className="w-full bg-white py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pill Badge */}
        <div className="inline-block bg-[#0052cc] text-white text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider mb-3">
          PARA QUEM É?
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Este kit foi feito <span className="text-[#0057d9]">para você se...</span>
        </h2>

        {/* 4 Target Cards (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {TARGET_ITEMS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-left shadow-xs hover:shadow-sm transition-shadow"
            >
              {/* Circle Avatar Icon Container */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-slate-100/90 border border-slate-200/60 flex-shrink-0 flex items-center justify-center text-2xl select-none">
                {item.avatar}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

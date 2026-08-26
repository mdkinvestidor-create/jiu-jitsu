import { CertificateGraphic, FightGamesGraphic, ExercisesGraphic } from './BonusCardGraphics';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export default function BonusSection({ onCtaClick }: BonusSectionProps) {
  return (
    <section id="bonus-exclusivos" className="w-full bg-[#002875] text-white py-14 sm:py-18 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Pill Badge */}
        <div className="inline-block bg-[#0047ba] text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider mb-2">
          BÔNUS EXCLUSIVOS
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
          Receba 3 Bônus Incríveis GRÁTIS!
        </h2>

        {/* Subtitle with Strikethrough & Free text */}
        <p className="text-slate-200 text-sm sm:text-base mt-2 font-medium">
          Valor total dos bônus:{' '}
          <span className="line-through text-slate-300 font-bold decoration-2">R$97,00</span>{' '}
          <span className="text-amber-300 font-extrabold text-sm sm:text-base">(Hoje sai de graça)</span>
        </p>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          
          {/* Bonus 1 */}
          <div
            id="bonus-card-certificado"
            className="bg-[#001f5c]/70 border border-blue-400/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xs shadow-lg hover:border-blue-300/60 transition-all"
          >
            <div>
              <CertificateGraphic />
              <h3 className="text-base sm:text-lg font-black text-white mt-4 leading-tight">
                Certificado de Jiu-Jiteiro
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Valor separado: <span className="line-through text-slate-400 font-bold">R$27</span>
              </p>
            </div>
            <button
              type="button"
              onClick={onCtaClick}
              className="mt-4 w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xs sm:text-sm py-2.5 px-4 rounded-lg tracking-wider uppercase text-center shadow-md transition-colors cursor-pointer"
            >
              HOJE GRÁTIS
            </button>
          </div>

          {/* Bonus 2 */}
          <div
            id="bonus-card-jogos"
            className="bg-[#001f5c]/70 border border-blue-400/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xs shadow-lg hover:border-blue-300/60 transition-all"
          >
            <div>
              <FightGamesGraphic />
              <h3 className="text-base sm:text-lg font-black text-white mt-4 leading-tight">
                Jogos de Luta
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Valor separado: <span className="line-through text-slate-400 font-bold">R$37</span>
              </p>
            </div>
            <button
              type="button"
              onClick={onCtaClick}
              className="mt-4 w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xs sm:text-sm py-2.5 px-4 rounded-lg tracking-wider uppercase text-center shadow-md transition-colors cursor-pointer"
            >
              HOJE GRÁTIS
            </button>
          </div>

          {/* Bonus 3 */}
          <div
            id="bonus-card-exercicios"
            className="bg-[#001f5c]/70 border border-blue-400/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-xs shadow-lg hover:border-blue-300/60 transition-all"
          >
            <div>
              <ExercisesGraphic />
              <h3 className="text-base sm:text-lg font-black text-white mt-4 leading-tight">
                100 exercícios de Jiu-jitsu
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Valor separado: <span className="line-through text-slate-400 font-bold">R$33</span>
              </p>
            </div>
            <button
              type="button"
              onClick={onCtaClick}
              className="mt-4 w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xs sm:text-sm py-2.5 px-4 rounded-lg tracking-wider uppercase text-center shadow-md transition-colors cursor-pointer"
            >
              HOJE GRÁTIS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

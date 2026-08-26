interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="hero" className="w-full bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="flex flex-col items-center justify-center font-black tracking-tight leading-tight select-none">
          <span className="text-6xl sm:text-7xl md:text-8xl text-[#003882] drop-shadow-xs font-black tracking-tighter">
            +500
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl text-[#0057d9] font-black mt-1 sm:mt-2">
            Dinâmicas de Jiu-Jitsu
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl text-[#ca8a04] font-extrabold mt-1 sm:mt-2">
            prontas para aplicar
          </span>
        </h1>

        {/* Big CTA Button */}
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-base sm:text-lg md:text-xl py-4 sm:py-5 px-8 sm:px-14 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            QUERO MINHAS DINÂMICAS AGORA!
          </button>
        </div>
      </div>
    </section>
  );
}

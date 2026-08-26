import WhatsAppPhoneMockup from './WhatsAppPhoneMockup';

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full bg-white py-14 sm:py-20 px-4 text-center border-y border-blue-100">
      <div className="max-w-4xl mx-auto">
        {/* Pill Badge */}
        <div className="inline-block bg-[#0052cc] border border-blue-400/40 text-white text-xs font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
          RESULTADOS REAIS
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          O QUE NOSSOS <span className="text-[#0057d9]">MESTRE ESTÃO FALANDO</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-xs sm:text-base mt-2.5 max-w-2xl mx-auto font-medium">
          Veja prints reais de mestres e academias que já utilizam nossas dinâmicas e transformaram suas aulas.
        </p>

        {/* Phone Carousel Mockup */}
        <div className="mt-10 sm:mt-12">
          <WhatsAppPhoneMockup />
        </div>
      </div>
    </section>
  );
}

import { Star, Gift, Users, Smartphone, Printer, Check } from 'lucide-react';

const FEATURES = [
  {
    id: 'feature-dinamicas',
    icon: Star,
    iconFill: true,
    title: '+500 Dinâmicas',
    description: 'Atividades prontas para aplicar direto no tatame.',
  },
  {
    id: 'feature-bonus',
    icon: Gift,
    iconFill: false,
    title: 'Bônus Exclusivos',
    description: 'Jogos, exercícios e certificado sem custo adicional.',
  },
  {
    id: 'feature-membros',
    icon: Users,
    iconFill: false,
    title: 'Área de Membros',
    description: 'Todo o conteúdo organizado em um só lugar.',
  },
  {
    id: 'feature-digital',
    icon: Smartphone,
    iconFill: false,
    title: 'Acesso Digital',
    description: 'Pelo celular ou tablet, a qualquer hora.',
  },
  {
    id: 'feature-imprimir',
    icon: Printer,
    iconFill: false,
    title: 'Pronto para Imprimir',
    description: 'Leve para o tatame sem depender de tecnologia.',
  },
  {
    id: 'feature-bncc',
    icon: Check,
    iconFill: false,
    title: 'Alinhado à BNCC',
    description: 'Metodologia reconhecida para educadores e pais.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="o-que-vai-receber" className="w-full bg-slate-50/50 py-12 sm:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          O Que Você <span className="text-[#0057d9]">Vai Receber?</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto font-medium">
          Chega de repetir as mesmas atividades. Tenha novas ideias para suas aulas de Jiu-Jitsu
        </p>

        {/* 6 Feature Cards Grid (3 columns on desktop, 1 or 2 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[190px]"
              >
                {/* Solid Blue Rounded Icon Container */}
                <div className="w-14 h-14 bg-[#0057d9] text-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon className={`w-7 h-7 text-white stroke-[2.2] ${item.iconFill ? 'fill-white' : ''}`} />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-[240px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

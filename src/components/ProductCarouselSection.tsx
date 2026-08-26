import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface CarouselItem {
  id: string;
  imgUrl: string;
  linkUrl: string;
  alt: string;
}

// 5 images for the top row (moving to the right)
const TOP_ROW_IMAGES: CarouselItem[] = [
  {
    id: 'top-1',
    imgUrl: 'https://i.ibb.co/spRJK44Y/Gemini-Generated-Image-kpgl2okpgl2okpgl.jpg',
    linkUrl: 'https://ibb.co/8ns4rwwZ',
    alt: 'Material de Jiu-Jitsu Infantil 1',
  },
  {
    id: 'top-2',
    imgUrl: 'https://i.ibb.co/4kB8FRs/Gemini-Generated-Image-5r5xyf5r5xyf5r5x.jpg',
    linkUrl: 'https://ibb.co/pqCf1jW',
    alt: 'Material de Jiu-Jitsu Infantil 2',
  },
  {
    id: 'top-3',
    imgUrl: 'https://i.ibb.co/205qwDdN/Gemini-Generated-Image-go0h6jgo0h6jgo0h.jpg',
    linkUrl: 'https://ibb.co/nqRrTHjC',
    alt: 'Material de Jiu-Jitsu Infantil 3',
  },
  {
    id: 'top-4',
    imgUrl: 'https://i.ibb.co/GvM5dBwD/Gemini-Generated-Image-pv5azkpv5azkpv5a.jpg',
    linkUrl: 'https://ibb.co/FbYDhNv1',
    alt: 'Material de Jiu-Jitsu Infantil 4',
  },
  {
    id: 'top-5',
    imgUrl: 'https://i.ibb.co/fGzcmhKC/Gemini-Generated-Image-c5lkc2c5lkc2c5lk.jpg',
    linkUrl: 'https://ibb.co/rfRWnCLZ',
    alt: 'Material de Jiu-Jitsu Infantil 5',
  },
];

// 5 images for the bottom row (moving to the left)
const BOTTOM_ROW_IMAGES: CarouselItem[] = [
  {
    id: 'bot-1',
    imgUrl: 'https://i.ibb.co/FqVp1YBY/Gemini-Generated-Image-oqcyjioqcyjioqcy.jpg',
    linkUrl: 'https://ibb.co/sJH741F1',
    alt: 'Material de Jiu-Jitsu Infantil 6',
  },
  {
    id: 'bot-2',
    imgUrl: 'https://i.ibb.co/mrH0T19H/Gemini-Generated-Image-paxnfdpaxnfdpaxn.jpg',
    linkUrl: 'https://ibb.co/zWSFxjXS',
    alt: 'Material de Jiu-Jitsu Infantil 7',
  },
  {
    id: 'bot-3',
    imgUrl: 'https://i.ibb.co/0jhWSnSg/Gemini-Generated-Image-vho39hvho39hvho3.jpg',
    linkUrl: 'https://ibb.co/FbgfMhMS',
    alt: 'Material de Jiu-Jitsu Infantil 8',
  },
  {
    id: 'bot-4',
    imgUrl: 'https://i.ibb.co/7NtF2M9d/Gemini-Generated-Image-9twcok9twcok9twc.jpg',
    linkUrl: 'https://ibb.co/cXhdDfmS',
    alt: 'Material de Jiu-Jitsu Infantil 9',
  },
  {
    id: 'bot-5',
    imgUrl: 'https://i.ibb.co/mFtTDrq7/Gemini-Generated-Image-p861ojp861ojp861.jpg',
    linkUrl: 'https://ibb.co/n8fmgqcS',
    alt: 'Material de Jiu-Jitsu Infantil 10',
  },
];

export default function ProductCarouselSection() {
  // Multiply sets to achieve seamless infinite loop
  const topRowTrack = [...TOP_ROW_IMAGES, ...TOP_ROW_IMAGES, ...TOP_ROW_IMAGES];
  const bottomRowTrack = [...BOTTOM_ROW_IMAGES, ...BOTTOM_ROW_IMAGES, ...BOTTOM_ROW_IMAGES];

  return (
    <section id="produto-receber" className="w-full bg-white py-14 sm:py-20 px-0 overflow-hidden border-b border-slate-100">
      <div className="max-w-5xl mx-auto text-center px-4 mb-8 sm:mb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#0057d9]/10 text-[#0057d9] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Prévia Do Material</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Veja o Material Que Você <span className="text-[#0057d9]">Vai Receber</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto font-medium">
          Confira abaixo uma prévia visual das apostilas, fichas ilustradas e atividades práticas prontas para aplicar em suas aulas.
        </p>
      </div>

      {/* Carousels Container with Pause on Hover */}
      <div className="relative w-full space-y-6 pause-on-hover select-none">
        
        {/* Left & Right Soft Fade Gradients (White) */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* TOP ROW: Moving to the RIGHT (aspect 9:16) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right gap-4 sm:gap-6 pr-4 sm:pr-6">
            {topRowTrack.map((item, idx) => (
              <a
                key={`${item.id}-${idx}`}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-36 sm:w-48 md:w-56 aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 border-slate-200 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.03] flex-shrink-0 bg-slate-100"
              >
                <img
                  src={item.imgUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Ver em alta resolução
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Moving to the LEFT (aspect 9:16) */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left gap-4 sm:gap-6 pr-4 sm:pr-6">
            {bottomRowTrack.map((item, idx) => (
              <a
                key={`${item.id}-${idx}`}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-36 sm:w-48 md:w-56 aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border-2 border-slate-200 hover:border-[#0057d9] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.03] flex-shrink-0 bg-slate-100"
              >
                <img
                  src={item.imgUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-bold text-blue-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Ver em alta resolução
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

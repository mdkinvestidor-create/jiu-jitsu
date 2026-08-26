import React from 'react';

interface FloatingImageItem {
  id: string;
  imgUrl: string;
  linkUrl: string;
  alt: string;
  animationClass: string;
}

const FLOATING_IMAGES: FloatingImageItem[] = [
  {
    id: 'floating-1',
    imgUrl: 'https://i.ibb.co/f5hMJ3g/img-0136-4.png',
    linkUrl: 'https://ibb.co/j2chtCN',
    alt: 'img-0136-4',
    animationClass: 'animate-float',
  },
  {
    id: 'floating-2',
    imgUrl: 'https://i.ibb.co/b5tBcGpf/img-0136-3.png',
    linkUrl: 'https://ibb.co/zVdRqtKk',
    alt: 'img-0136-3',
    animationClass: 'animate-float-delayed',
  },
  {
    id: 'floating-3',
    imgUrl: 'https://i.ibb.co/PGgS3xkb/img-0136-2.png',
    linkUrl: 'https://ibb.co/5hL7tTZz',
    alt: 'img-0136-2',
    animationClass: 'animate-float-slow',
  },
  {
    id: 'floating-4',
    imgUrl: 'https://i.ibb.co/mrDghL2z/img-0136-1.png',
    linkUrl: 'https://ibb.co/4wm346XN',
    alt: 'img-0136-1',
    animationClass: 'animate-float-alt',
  },
];

export default function FloatingImagesSection() {
  return (
    <section className="w-full bg-slate-900 py-12 sm:py-16 px-4 overflow-hidden relative border-y border-slate-800">
      {/* Background ambient blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-blue-600/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Responsive Grid with 4 Floating Cards with Blue Back Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-center justify-center">
          {FLOATING_IMAGES.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center ${item.animationClass}`}
            >
              {/* Card with blue back border & blue ambient shadow */}
              <div className="relative group w-full max-w-[240px]">
                {/* Blue Backplate / Outer Blue Glow Border */}
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl blur-xs opacity-85 group-hover:opacity-100 group-hover:blur-sm transition-all duration-300 shadow-[0_0_25px_rgba(0,87,217,0.6)]" />
                
                {/* Blue Offset Outline effect */}
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />

                {/* Inner Card & Image Container */}
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-slate-950 rounded-xl overflow-hidden border-2 border-blue-400 shadow-xl transition-all duration-300 group-hover:scale-[1.03]"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:brightness-105"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

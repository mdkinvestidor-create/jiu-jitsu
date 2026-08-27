import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let hasEnded = false;

    // Listen to messages from YouTube iframe player to detect when it finishes
    const handleWindowMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          // YT.PlayerState.ENDED is 0
          if (data.event === 'onStateChange' && data.info === 0) {
            hasEnded = true;
          }
        }
      } catch {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener('message', handleWindowMessage);

    const handlePause = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      }
    };

    const handlePlay = () => {
      if (hasEnded) return; // Do not resume if the video already finished
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
      }
    };

    // IntersectionObserver to detect when video scrolls out of or back into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handlePlay();
          } else {
            handlePause();
          }
        });
      },
      {
        threshold: 0.35, // Plays when 35%+ in view, pauses when leaving
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
      observer.disconnect();
      window.removeEventListener('message', handleWindowMessage);
    };
  }, []);

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

        {/* VSL Video Player Layout */}
        <div ref={containerRef} className="mt-8 sm:mt-10 w-full max-w-[290px] sm:max-w-[330px] mx-auto">
          {/* VSL Card Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border-[3px] border-slate-900 ring-4 ring-blue-500/20">
            
            {/* VSL Top Sound/Attention Header Bar */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-[11px] sm:text-xs font-bold py-2 px-3 flex items-center justify-center gap-1.5 border-b border-white/10 shadow-md">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="text-amber-400 font-black tracking-wide uppercase">ASSISTA COM SOM</span>
              <span className="text-slate-300">🔊</span>
            </div>

            {/* Video Player Frame with Clean VSL Crop */}
            <div className="relative w-full aspect-[9/16] overflow-hidden bg-black select-none">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/WGl2BaOtkSQ?enablejsapi=1&autoplay=1&mute=0&controls=0&disablekb=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&showinfo=0&fs=0"
                title="Apresentação das Dinâmicas de Jiu-Jitsu"
                className="absolute -top-[14%] -left-[12%] w-[124%] h-[128%] border-0 pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* Invisible touch/click interceptor layer to prevent accidental pause while running */}
              <div 
                className="absolute inset-0 z-10 cursor-default bg-transparent"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

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

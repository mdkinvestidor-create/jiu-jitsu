import { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const hasEndedRef = useRef(false);
  const isPlayingRef = useRef(false);

  const startPlayback = () => {
    setIsPlaying(true);
    isPlayingRef.current = true;
    hasEndedRef.current = false;
    setIsEnded(false);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: '' }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
        '*'
      );
    }
  };

  const handleRestartAndPlay = () => {
    hasEndedRef.current = false;
    setIsEnded(false);
    setIsPlaying(true);
    isPlayingRef.current = true;

    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: '' }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
        '*'
      );
    }
  };

  useEffect(() => {
    // Listen to messages from YouTube iframe player to detect when it finishes or state changes
    const handleWindowMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          // YT.PlayerState.ENDED is 0
          if (data.event === 'onStateChange' && data.info === 0) {
            hasEndedRef.current = true;
            isPlayingRef.current = false;
            setIsEnded(true);
            setIsPlaying(false);
          } else if (data.event === 'onStateChange' && data.info === 1) {
            // YT.PlayerState.PLAYING is 1
            hasEndedRef.current = false;
            isPlayingRef.current = true;
            setIsPlaying(true);
            setIsEnded(false);
          }
        }
      } catch {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener('message', handleWindowMessage);

    const handlePause = () => {
      if (isPlayingRef.current && iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      }
    };

    const handleResume = () => {
      if (isPlayingRef.current && !hasEndedRef.current && iframeRef.current && iframeRef.current.contentWindow) {
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
            handleResume();
          } else {
            handlePause();
          }
        });
      },
      {
        threshold: 0.25, // Pauses when 75%+ of video leaves viewport
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

        {/* Subheadline */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-semibold max-w-2xl px-2 leading-relaxed">
          500+ dinâmicas prontas para manter as crianças envolvidas enquanto aprendem Jiu-Jitsu de verdade.
        </p>

        {/* VSL Video Player Layout */}
        <div ref={containerRef} className="mt-8 sm:mt-10 w-full max-w-[290px] sm:max-w-[330px] mx-auto">
          {/* VSL Card Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border-[3px] border-slate-900 ring-4 ring-blue-500/20">
            
            {/* Video Player Frame with Clean VSL Crop (YouTube Shorts: WGl2BaOtkSQ) */}
            <div className="relative w-full aspect-[9/16] overflow-hidden bg-black select-none">
              <iframe
                ref={iframeRef}
                src="https://www.youtube-nocookie.com/embed/WGl2BaOtkSQ?enablejsapi=1&autoplay=0&mute=0&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&fs=0"
                title="Apresentação das Dinâmicas de Jiu-Jitsu"
                className="absolute -top-[14%] -left-[12%] w-[124%] h-[128%] border-0 pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Initial Active Play Button Overlay */}
              {!isPlaying && !isEnded && (
                <div 
                  className="absolute inset-0 z-20 bg-slate-950/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer group"
                  onClick={startPlayback}
                  onTouchStart={startPlayback}
                >
                  {/* Glowing Animated Play Button */}
                  <div className="relative flex items-center justify-center mb-3">
                    <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#16a34a]/30 animate-ping" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        startPlayback();
                      }}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-2xl ring-4 ring-white/40 transform group-hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
                      aria-label="Iniciar vídeo com som"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                    </button>
                  </div>
                  <span className="text-white font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5 drop-shadow-md uppercase bg-black/50 px-3.5 py-1 rounded-full border border-white/10">
                    Clique para Assistir
                  </span>
                </div>
              )}

              {/* Video is actively playing: protective layer so taps do not pause/interrupt */}
              {isPlaying && !isEnded && (
                <div 
                  className="absolute inset-0 z-10 cursor-default bg-transparent"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  aria-hidden="true"
                />
              )}

              {/* Replay / Play Overlay when video finishes */}
              {isEnded && (
                <div 
                  className="absolute inset-0 z-20 bg-black/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer"
                  onClick={handleRestartAndPlay}
                  onTouchStart={handleRestartAndPlay}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRestartAndPlay();
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center justify-center shadow-2xl ring-4 ring-white/30 transform hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer mb-3"
                    aria-label="Assistir novamente"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                  </button>
                  <span className="text-white font-black text-sm sm:text-base tracking-wide flex items-center gap-1.5 drop-shadow-md">
                    <RotateCcw className="w-4 h-4 text-emerald-400" />
                    Assistir Novamente
                  </span>
                </div>
              )}
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



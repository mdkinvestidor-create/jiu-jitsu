import React from 'react';
import { Sparkles, Trophy, CheckCircle2, Gift } from 'lucide-react';

export default function MockupCover() {
  return (
    <div className="w-full max-w-[280px] mx-auto my-3 relative select-none">
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
      
      {/* 3D Box Mockup Graphic */}
      <div className="relative bg-gradient-to-br from-[#002f87] via-[#0047ba] to-[#021b4f] rounded-xl p-3 border-2 border-amber-400/80 shadow-2xl text-white overflow-hidden">
        {/* Decorative corner shine */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-lg pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className="bg-amber-400 text-slate-950 font-black text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
            KIT COMPLETO VIP
          </span>
          <span className="text-[8px] font-bold text-amber-300 flex items-center gap-0.5">
            <Sparkles className="w-2.5 h-2.5" /> +500 DINÂMICAS
          </span>
        </div>

        {/* Main Cover Mockup Layout */}
        <div className="bg-[#0b1c3d] rounded-lg p-2.5 border border-blue-400/30 text-center flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center font-black text-xs shadow-md mb-1 border-2 border-white">
            +500
          </div>
          <div className="text-[11px] font-black text-white tracking-tight uppercase leading-tight">
            Dinâmicas Interativas
          </div>
          <div className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">
            De Jiu Jitsu
          </div>

          {/* Mini Cards Grid within the Bundle */}
          <div className="grid grid-cols-3 gap-1 w-full mt-2 pt-2 border-t border-white/15">
            <div className="bg-blue-900/60 rounded p-1 text-center border border-blue-400/20">
              <span className="text-[9px] block">📜</span>
              <span className="text-[6.5px] font-bold text-slate-200 block truncate">Certificados</span>
            </div>
            <div className="bg-blue-900/60 rounded p-1 text-center border border-blue-400/20">
              <span className="text-[9px] block">🤼</span>
              <span className="text-[6.5px] font-bold text-slate-200 block truncate">20 Jogos</span>
            </div>
            <div className="bg-blue-900/60 rounded p-1 text-center border border-blue-400/20">
              <span className="text-[9px] block">🎯</span>
              <span className="text-[6.5px] font-bold text-slate-200 block truncate">100 Exerc.</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 rounded py-1 px-2 flex items-center justify-center gap-1 font-black text-[8px] uppercase tracking-wider shadow">
          <Gift className="w-3 h-3" />
          <span>ÁREA DE MEMBROS + BÔNUS INCLUSOS</span>
        </div>
      </div>
    </div>
  );
}

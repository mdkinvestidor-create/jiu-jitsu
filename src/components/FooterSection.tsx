import React from 'react';

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-[#0a0f1d] text-white py-10 px-4 text-center select-none border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Name */}
        <div className="text-lg sm:text-xl font-black text-white tracking-widest uppercase">
          JIU-JITSU INTERATIVO
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-400 font-medium mt-3">
          © 2026 Dinâmicas Interativas de Jiu-Jitsu. Todos os direitos reservados.
        </p>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mt-3 font-medium">
          <a href="#termos" onClick={(e) => { e.preventDefault(); alert('Termos de Uso: Todos os materiais são protegidos por direitos autorais e licenciados para uso educacional.'); }} className="hover:text-slate-200 transition-colors">
            Termos de Uso
          </a>
          <span className="text-slate-600">•</span>
          <a href="#privacidade" onClick={(e) => { e.preventDefault(); alert('Política de Privacidade: Seus dados estão 100% seguros e protegidos.'); }} className="hover:text-slate-200 transition-colors">
            Política de Privacidade
          </a>
          <span className="text-slate-600">•</span>
          <a href="#contato" onClick={(e) => { e.preventDefault(); alert('Contato de Suporte: suporte@dinamicasjiujitsu.com.br'); }} className="hover:text-slate-200 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

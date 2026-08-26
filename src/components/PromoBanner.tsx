import { useState, useEffect } from 'react';

function getFormattedDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  const daysOfWeek = [
    'DOMINGO',
    'SEGUNDA-FEIRA',
    'TERÇA-FEIRA',
    'QUARTA-FEIRA',
    'QUINTA-FEIRA',
    'SEXTA-FEIRA',
    'SÁBADO',
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];

  return `PROMOÇÃO VÁLIDA ATÉ O DIA ${day}/${month}/${year} ${dayOfWeek}`;
}

export default function PromoBanner() {
  const [promoText, setPromoText] = useState(getFormattedDate);

  useEffect(() => {
    // Check every minute to automatically change when the day turns at midnight
    const interval = setInterval(() => {
      setPromoText(getFormattedDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="promo-banner-fixed"
      className="fixed top-0 left-0 right-0 z-50 bg-[#dc2626] text-white py-2 px-4 text-center font-black text-xs sm:text-sm tracking-wider uppercase shadow-md select-none animate-flash-banner"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <span className="text-sm sm:text-base">🔥</span>
        <span>{promoText}</span>
        <span className="text-sm sm:text-base">🔥</span>
      </div>
    </div>
  );
}

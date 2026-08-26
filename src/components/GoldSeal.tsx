export default function GoldSeal({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className} select-none`}>
      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#ca8a04" />
            <stop offset="75%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="gold-inner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ca8a04" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
        </defs>

        {/* Outer Sawtooth / Rosette Sunburst */}
        <g fill="url(#gold-gradient)" stroke="#854d0e" strokeWidth="1">
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 360) / 36;
            return (
              <polygon
                key={i}
                points="80,10 84,22 76,22"
                transform={`rotate(${angle} 80 80)`}
              />
            );
          })}
        </g>

        {/* Outer Ring */}
        <circle cx="80" cy="80" r="66" fill="url(#gold-gradient)" stroke="#713f12" strokeWidth="1.5" />
        
        {/* Inner Black/Dark Circle */}
        <circle cx="80" cy="80" r="54" fill="url(#gold-inner)" stroke="url(#gold-gradient)" strokeWidth="3" />
        
        {/* Dotted decorative inner circle */}
        <circle cx="80" cy="80" r="48" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />

        {/* Top Text Arc */}
        <text
          x="80"
          y="48"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="11"
          fontWeight="900"
          letterSpacing="2.5"
          fontFamily="Montserrat, sans-serif"
        >
          GARANTIA
        </text>

        {/* Big 7 Number */}
        <text
          x="80"
          y="83"
          textAnchor="middle"
          fill="url(#gold-gradient)"
          fontSize="36"
          fontWeight="900"
          fontFamily="Montserrat, sans-serif"
          style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.8))" }}
        >
          7
        </text>

        {/* Small DIAS Text */}
        <text
          x="80"
          y="98"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="10"
          fontWeight="900"
          letterSpacing="2"
          fontFamily="Montserrat, sans-serif"
        >
          DIAS
        </text>

        {/* Bottom Text Arc */}
        <text
          x="80"
          y="120"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="10"
          fontWeight="900"
          letterSpacing="2"
          fontFamily="Montserrat, sans-serif"
        >
          GARANTIA
        </text>

        {/* Stars */}
        <path d="M 40 80 L 42 75 L 47 75 L 43 78 L 45 83 L 40 80 Z" fill="#facc15" />
        <path d="M 120 80 L 118 75 L 113 75 L 117 78 L 115 83 L 120 80 Z" fill="#facc15" />
      </svg>
    </div>
  );
}

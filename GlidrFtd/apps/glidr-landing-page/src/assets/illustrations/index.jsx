const TEAL = "#00C9A7";
const WHITE = "#FFFFFF";

export function GlidrLogo({ color = TEAL, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="Glidr logo">
      <circle cx="14" cy="14" r="13" stroke={color} strokeWidth="2" />
      <path
        d="M8 14 C8 10 11 8 14 8 C17 8 20 10 20 14 C20 16 18 18 16 18 L14 18"
        stroke={color} strokeWidth="2" strokeLinecap="round"
      />
      <circle cx="14" cy="18" r="1.5" fill={color} />
    </svg>
  );
}

export function ShopperIllustration({ className }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="20" y="40" width="130" height="160" rx="4" stroke={TEAL} strokeWidth="1.5" />
      <rect x="20" y="80" width="130" height="2" fill={TEAL} opacity="0.4" />
      <rect x="20" y="120" width="130" height="2" fill={TEAL} opacity="0.4" />
      <rect x="20" y="160" width="130" height="2" fill={TEAL} opacity="0.4" />
      {[0, 1, 2].map(row =>
        [0, 1, 2].map(col => (
          <rect
            key={`${row}-${col}`}
            x={30 + col * 38} y={50 + row * 40}
            width="28" height="24" rx="3"
            stroke={TEAL} strokeWidth="1.2"
            fill={TEAL} fillOpacity="0.08"
          />
        ))
      )}
      <circle cx="210" cy="70" r="18" stroke={TEAL} strokeWidth="1.5" />
      <line x1="210" y1="88" x2="210" y2="140" stroke={TEAL} strokeWidth="2" />
      <line x1="210" y1="105" x2="190" y2="125" stroke={TEAL} strokeWidth="1.5" />
      <line x1="210" y1="105" x2="230" y2="120" stroke={TEAL} strokeWidth="1.5" />
      <line x1="210" y1="140" x2="195" y2="175" stroke={TEAL} strokeWidth="1.5" />
      <line x1="210" y1="140" x2="225" y2="175" stroke={TEAL} strokeWidth="1.5" />
      <rect x="240" y="130" width="55" height="40" rx="3" stroke={TEAL} strokeWidth="1.5" />
      <path d="M230 130 L240 130" stroke={TEAL} strokeWidth="1.5" />
      <path d="M225 120 L230 130" stroke={TEAL} strokeWidth="1.5" />
      <circle cx="252" cy="175" r="5" stroke={TEAL} strokeWidth="1.5" />
      <circle cx="282" cy="175" r="5" stroke={TEAL} strokeWidth="1.5" />
      <rect x="228" y="110" width="20" height="32" rx="3" stroke={TEAL} strokeWidth="1.2" fill={WHITE} />
      <rect x="231" y="113" width="14" height="22" rx="1" fill={TEAL} fillOpacity="0.15" />
    </svg>
  );
}

export function ForkliftIllustration({ className }) {
  return (
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="60" y="90" width="120" height="70" rx="4" stroke={TEAL} strokeWidth="1.5" />
      <rect x="80" y="60" width="50" height="35" rx="3" stroke={TEAL} strokeWidth="1.5" />
      <line x1="170" y1="30" x2="170" y2="160" stroke={TEAL} strokeWidth="2" />
      <line x1="185" y1="30" x2="185" y2="160" stroke={TEAL} strokeWidth="2" />
      <rect x="170" y="65" width="30" height="15" fill={TEAL} fillOpacity="0.15" stroke={TEAL} strokeWidth="1.2" />
      <line x1="185" y1="80" x2="230" y2="80" stroke={TEAL} strokeWidth="2.5" />
      <line x1="185" y1="90" x2="230" y2="90" stroke={TEAL} strokeWidth="2.5" />
      <rect x="195" y="50" width="35" height="30" rx="2" stroke={TEAL} strokeWidth="1.2" fill={TEAL} fillOpacity="0.12" />
      <circle cx="90" cy="165" r="15" stroke={TEAL} strokeWidth="1.5" />
      <circle cx="155" cy="165" r="15" stroke={TEAL} strokeWidth="1.5" />
      <circle cx="105" cy="50" r="14" stroke={TEAL} strokeWidth="1.5" />
      <line x1="105" y1="64" x2="105" y2="95" stroke={TEAL} strokeWidth="2" />
    </svg>
  );
}

export function PhoneAppIllustration({ className }) {
  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="70" y="20" width="140" height="240" rx="16" stroke={TEAL} strokeWidth="2" fill={WHITE} />
      <rect x="82" y="35" width="116" height="185" rx="6" fill={TEAL} fillOpacity="0.07" stroke={TEAL} strokeWidth="1" />
      <rect x="92" y="50" width="96" height="12" rx="3" fill={TEAL} fillOpacity="0.3" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x="92" y={75 + i * 45} width="40" height="35" rx="4" fill={TEAL} fillOpacity="0.12" stroke={TEAL} strokeWidth="1" />
          <rect x="140" y={80 + i * 45} width="48" height="6" rx="2" fill={TEAL} fillOpacity="0.3" />
          <rect x="140" y={92 + i * 45} width="35" height="4" rx="2" fill={TEAL} fillOpacity="0.15" />
        </g>
      ))}
      <rect x="92" y="210" width="96" height="22" rx="11" fill={TEAL} />
      <circle cx="228" cy="180" r="16" stroke={TEAL} strokeWidth="1.5" />
      <line x1="228" y1="196" x2="228" y2="235" stroke={TEAL} strokeWidth="2" />
      <line x1="228" y1="210" x2="210" y2="228" stroke={TEAL} strokeWidth="1.5" />
      <line x1="228" y1="210" x2="246" y2="225" stroke={TEAL} strokeWidth="1.5" />
      <line x1="228" y1="235" x2="215" y2="265" stroke={TEAL} strokeWidth="1.5" />
      <line x1="228" y1="235" x2="241" y2="265" stroke={TEAL} strokeWidth="1.5" />
      <rect x="248" y="215" width="30" height="22" rx="2" stroke={TEAL} strokeWidth="1.2" />
      <circle cx="255" cy="240" r="3.5" stroke={TEAL} strokeWidth="1" />
      <circle cx="272" cy="240" r="3.5" stroke={TEAL} strokeWidth="1" />
    </svg>
  );
}

export function SearchManIllustration({ className }) {
  return (
    <svg viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="130" cy="85" r="55" stroke={WHITE} strokeWidth="2" />
      <circle cx="130" cy="85" r="42" stroke={WHITE} strokeWidth="1.5" fill={WHITE} fillOpacity="0.08" />
      <circle cx="118" cy="73" r="20" stroke={WHITE} strokeWidth="2" />
      <line x1="132" y1="87" x2="148" y2="103" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
      <rect x="105" y="60" width="26" height="22" rx="3" fill={WHITE} fillOpacity="0.25" stroke={WHITE} strokeWidth="1.2" />
      <circle cx="185" cy="140" r="18" stroke={WHITE} strokeWidth="1.5" />
      <line x1="185" y1="158" x2="185" y2="200" stroke={WHITE} strokeWidth="2" />
      <line x1="185" y1="172" x2="160" y2="190" stroke={WHITE} strokeWidth="1.5" />
      <line x1="185" y1="172" x2="205" y2="188" stroke={WHITE} strokeWidth="1.5" />
      <line x1="185" y1="200" x2="172" y2="228" stroke={WHITE} strokeWidth="1.5" />
      <line x1="185" y1="200" x2="198" y2="228" stroke={WHITE} strokeWidth="1.5" />
      <rect x="192" y="155" width="22" height="30" rx="2" stroke={WHITE} strokeWidth="1.2" fill={WHITE} fillOpacity="0.15" />
      <line x1="196" y1="163" x2="210" y2="163" stroke={WHITE} strokeWidth="1" />
      <line x1="196" y1="169" x2="210" y2="169" stroke={WHITE} strokeWidth="1" />
      <line x1="196" y1="175" x2="204" y2="175" stroke={WHITE} strokeWidth="1" />
    </svg>
  );
}

export function CartIllustration({ className }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="80" y="100" width="120" height="90" rx="6" stroke={WHITE} strokeWidth="2" fill={WHITE} fillOpacity="0.08" />
      <path d="M60 80 L80 100" stroke={WHITE} strokeWidth="2" />
      <path d="M48 62 L60 80" stroke={WHITE} strokeWidth="2" />
      <circle cx="105" cy="200" r="10" stroke={WHITE} strokeWidth="2" />
      <circle cx="170" cy="200" r="10" stroke={WHITE} strokeWidth="2" />
      <rect x="93" y="115" width="28" height="35" rx="3" fill={WHITE} fillOpacity="0.2" stroke={WHITE} strokeWidth="1" />
      <rect x="128" y="118" width="28" height="32" rx="3" fill={WHITE} fillOpacity="0.2" stroke={WHITE} strokeWidth="1" />
      <rect x="163" y="120" width="28" height="30" rx="3" fill={WHITE} fillOpacity="0.2" stroke={WHITE} strokeWidth="1" />
      <circle cx="210" cy="75" r="18" stroke={WHITE} strokeWidth="1.5" />
      <line x1="210" y1="93" x2="210" y2="145" stroke={WHITE} strokeWidth="2" />
      <line x1="210" y1="112" x2="185" y2="135" stroke={WHITE} strokeWidth="1.5" />
      <line x1="210" y1="112" x2="230" y2="130" stroke={WHITE} strokeWidth="1.5" />
      <line x1="210" y1="145" x2="197" y2="175" stroke={WHITE} strokeWidth="1.5" />
      <line x1="210" y1="145" x2="223" y2="175" stroke={WHITE} strokeWidth="1.5" />
      <rect x="225" y="118" width="18" height="28" rx="3" stroke={WHITE} strokeWidth="1.2" fill={WHITE} fillOpacity="0.15" />
      <circle cx="100" cy="55" r="18" fill={WHITE} fillOpacity="0.15" stroke={WHITE} strokeWidth="1.5" />
      <path d="M91 55 L97 61 L109 49" stroke={WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CategoryIcon({ type }) {
  const stroke = TEAL;
  const icons = {
    all: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth="1.5" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke={stroke} strokeWidth="1.5" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke={stroke} strokeWidth="1.5" />
        <rect x="18" y="18" width="10" height="10" rx="2" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    grocery: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M6 8 L8 22 L24 22 L26 8" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 8 L28 8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="26" r="2" stroke={stroke} strokeWidth="1.5" />
        <circle cx="20" cy="26" r="2" stroke={stroke} strokeWidth="1.5" />
        <path d="M11 14 Q16 11 21 14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    dairy: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="10" y="4" width="12" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
        <path d="M10 12 L22 12" stroke={stroke} strokeWidth="1" opacity="0.5" />
        <circle cx="16" cy="18" r="2" fill={stroke} fillOpacity="0.3" stroke={stroke} strokeWidth="1" />
      </svg>
    ),
    kitchen: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke={stroke} strokeWidth="1.5" />
        <path d="M8 14 L8 10 Q8 6 12 6 L20 6 Q24 6 24 10 L24 14" stroke={stroke} strokeWidth="1.5" />
        <line x1="16" y1="14" x2="16" y2="28" stroke={stroke} strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    health: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M16 27 C16 27 5 20 5 12 C5 8 8 5 12 5 C14 5 16 7 16 7 C16 7 18 5 20 5 C24 5 27 8 27 12 C27 20 16 27 16 27Z" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    beverages: (
      <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
        <path d="M10 6 L22 6 L20 26 L12 26 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 6 L8 6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 6 L24 6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 14 Q16 11 20 14" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  };
  return icons[type] ?? icons.all;
}

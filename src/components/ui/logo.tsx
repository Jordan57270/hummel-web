"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icône écran */}
      <rect
        x="2"
        y="6"
        width="28"
        height="20"
        rx="3"
        stroke="#22d3ee"
        strokeWidth="2"
        fill="none"
      />
      {/* Pied de l'écran */}
      <line x1="11" y1="26" x2="11" y2="31" stroke="#22d3ee" strokeWidth="2" />
      <line x1="19" y1="26" x2="19" y2="31" stroke="#22d3ee" strokeWidth="2" />
      <line x1="7" y1="31" x2="23" y2="31" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      {/* Curseur / code dans l'écran */}
      <path
        d="M10 13L7 16L10 19"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13L23 16L20 19"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="14" y1="11" x2="16" y2="21" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />

      {/* Texte "je" */}
      <text x="36" y="24" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="17" fill="white">
        je
      </text>
      {/* Texte "cree" */}
      <text x="53" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" fill="#22d3ee">
        cree
      </text>
      {/* Texte "votre" */}
      <text x="89" y="24" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="17" fill="white">
        votre
      </text>
      {/* Texte "site" */}
      <text x="131" y="24" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" fill="#22d3ee">
        site
      </text>
      {/* Point */}
      <circle cx="163" cy="22" r="2.5" fill="#22d3ee" />
      {/* .fr */}
      <text x="168" y="24" fontFamily="system-ui, sans-serif" fontWeight="300" fontSize="12" fill="white" opacity="0.5">
        fr
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="20"
        rx="3"
        stroke="#22d3ee"
        strokeWidth="2"
        fill="none"
      />
      <line x1="11" y1="22" x2="11" y2="27" stroke="#22d3ee" strokeWidth="2" />
      <line x1="21" y1="22" x2="21" y2="27" stroke="#22d3ee" strokeWidth="2" />
      <line x1="7" y1="27" x2="25" y2="27" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M10 9L7 12L10 15"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9L25 12L22 15"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="14" y1="7" x2="18" y2="17" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

import React from 'react';

function Logo({ height = 44 }) {
  const ratio = 200 / 48;
  const width = height * ratio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Desarrollos Nerd"
    >
      {/* Badge */}
      <rect
        x="1" y="1" width="46" height="46" rx="11"
        fill="rgba(139,92,246,0.12)"
        stroke="rgba(139,92,246,0.45)"
        strokeWidth="1.5"
      />

      {/* Code symbol top */}
      <text
        x="24" y="18"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="9"
        fill="#64748b"
      >{'</>'}</text>

      {/* DN monogram */}
      <text
        x="24" y="36"
        textAnchor="middle"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#a78bfa"
      >DN</text>

      {/* DESARROLLOS label */}
      <text
        x="62" y="20"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="8"
        fontWeight="500"
        fill="#64748b"
        letterSpacing="2.8"
      >DESARROLLOS</text>

      {/* NERD label */}
      <text
        x="60" y="41"
        fontFamily="'Space Grotesk', system-ui, sans-serif"
        fontSize="23"
        fontWeight="700"
        fill="#f1f5f9"
        letterSpacing="-0.5"
      >NERD</text>
    </svg>
  );
}

export default Logo;

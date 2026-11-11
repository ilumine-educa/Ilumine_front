
export default function CallToActionDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Pequeno brilho - região superior central */}
      <svg
        className="absolute left-[48%] top-[5%] h-7 w-7 text-secondary opacity-50"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 2L24 16L38 20L24 24L20 38L16 24L2 20L16 16Z"
          fill="currentColor"
        />
      </svg>
      {/* Brilho difuso - superior esquerdo */}
      <div
        className="
          absolute -left-20 top-[15%]
          h-64 w-64 rounded-full
          bg-white/15 blur-[90px]
        "
      />

      {/* Brilho difuso - centro direito */}
      <div
        className="
          absolute right-[15%] top-[35%]
          h-48 w-48 rounded-full
          bg-secondary/20 blur-[85px]
        "
      />

      {/* Brilho difuso - inferior esquerdo */}
      <div
        className="
          absolute bottom-[-10%] left-[35%]
          h-56 w-56 rounded-full
          bg-white/10 blur-[100px]
        "
      />

      {/* Pequenos pontos luminosos */}
      <div className="absolute left-[20%] top-[25%] h-2 w-2 rounded-full bg-white/70 shadow-[0_0_15px_5px_rgba(255,255,255,0.25)]" />

      <div className="absolute right-[30%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_14px_5px_rgba(255,255,255,0.3)]" />

      <div className="absolute bottom-[22%] right-[18%] h-2 w-2 rounded-full bg-white/60 shadow-[0_0_18px_6px_rgba(255,255,255,0.2)]" />

      {/* Cruz de brilho */}
      <svg
        className="absolute bottom-[35%] left-[12%] h-8 w-8 text-white/50"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 2V38M2 20H38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

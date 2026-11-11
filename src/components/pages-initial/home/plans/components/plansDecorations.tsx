
export default function PlansDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Mancha azul esquerda */}
      <svg
        className="absolute -left-28 top-[15%] w-72 opacity-30"
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50 30C100 -5 170 30 190 90C220 150 180 220 110 250C40 280 -20 210 5 130C15 80 10 55 50 30Z"
          fill="var(--decoration-blue)"
        />
      </svg>

      {/* Forma laranja direita */}
      <svg
        className="absolute -right-24 top-[45%] w-64 opacity-25"
        viewBox="0 0 250 250"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M125 5C195 5 245 70 240 130C235 200 180 245 110 240C40 235 5 185 10 115C15 45 65 5 125 5Z"
          fill="var(--secondary)"
        />
      </svg>

      {/* Estrela superior */}
      <svg
        className="absolute right-[12%] top-[12%] h-14 w-14 text-secondary opacity-80"
        viewBox="0 0 60 60"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M30 2L36 23L58 30L36 36L30 58L23 36L2 30L23 23Z"
          fill="currentColor"
        />
      </svg>

      {/* Brilho inferior */}
      <svg
        className="absolute bottom-[12%] left-[12%] h-16 w-16 text-primary opacity-40"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 5L47 32L75 40L47 47L40 75L32 47L5 40L32 32Z"
          fill="currentColor"
        />
      </svg>

      {/* Caminho pontilhado */}
      <svg
        className="absolute right-[5%] bottom-[10%] hidden w-56 opacity-40 lg:block"
        viewBox="0 0 240 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 80C60 5 100 110 150 55C180 25 200 35 235 10"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeDasharray="6 9"
          strokeLinecap="round"
        />
      </svg>

    </div>
  );
}

export default function ImpactDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Mancha orgânica azul - superior esquerda */}
      <svg
        className="absolute -left-24 top-[8%] w-64 opacity-20 sm:w-80"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M72 15C120 -5 183 25 221 68C260 112 278 169 247 216C214 266 151 288 94 264C37 240 4 180 15 119C23 72 32 33 72 15Z"
          fill="var(--decoration-blue)"
        />
      </svg>

      {/* Círculos decorativos - superior direita */}
      <div className="absolute right-[8%] top-[7%] flex gap-3 opacity-50">
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="mt-5 h-2 w-2 rounded-full bg-secondary" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary-light" />
      </div>

      {/* Estrela - lado direito */}
      <svg
        className="absolute right-[4%] top-[32%] h-12 w-12 rotate-12 text-secondary opacity-60 sm:right-[8%] sm:h-16 sm:w-16"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M30 2L36 23L58 30L36 36L30 58L23 36L2 30L23 23Z"
          fill="currentColor"
        />
      </svg>

      {/* Forma orgânica laranja - inferior direita */}
      <svg
        className="absolute -right-24 bottom-[5%] w-64 opacity-20 sm:w-80"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M147 10C208 8 274 51 285 116C296 181 248 254 185 278C122 302 48 270 20 210C-8 150 18 78 73 37C95 21 119 12 147 10Z"
          fill="var(--secondary)"
        />
      </svg>

      {/* Brilho em formato de estrela - inferior esquerda */}
      <svg
        className="absolute bottom-[13%] left-[7%] h-10 w-10 -rotate-12 text-primary opacity-50 sm:h-14 sm:w-14"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M40 5L47 32L75 40L47 47L40 75L32 47L5 40L32 32Z"
          fill="currentColor"
        />
      </svg>

      {/* Grade de pontos - lateral esquerda */}
      <svg
        className="absolute left-[3%] top-[52%] hidden h-24 w-24 opacity-30 sm:block"
        viewBox="0 0 100 100"
        fill="var(--primary)"
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="2.5"
            />
          )),
        )}
      </svg>

      {/* Linha curva pontilhada - parte inferior */}
      <svg
        className="absolute bottom-[3%] right-[25%] hidden w-52 opacity-30 lg:block"
        viewBox="0 0 220 90"
        fill="none"
      >
        <path
          d="M5 75C45 5 90 100 130 45C155 10 185 20 215 5"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
      </svg>

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
    </div>
  );
}

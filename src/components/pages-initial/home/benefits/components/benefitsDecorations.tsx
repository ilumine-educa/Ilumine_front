export default function BenefitsDecorations() {
  return (
    <>
      {/* Elementos decorativos de fundo */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Mancha orgânica esquerda */}
        <svg
          className="
            absolute -left-24 top-[28%]
            w-64 opacity-40 sm:w-80
          "
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M50 30C100 -5 170 30 190 90C220 150 180 220 110 250C40 280 -20 210 5 130C15 80 10 55 50 30Z"
            fill="var(--decoration-blue)"
          />
        </svg>

        {/* Mancha orgânica direita */}
        <svg
          className="
            absolute -right-28 bottom-[5%]
            w-72 opacity-30 sm:w-96
          "
          viewBox="0 0 350 350"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M170 15C245 0 340 70 330 150C325 230 265 320 175 330C85 340 10 270 25 185C40 105 95 30 170 15Z"
            fill="var(--primary-light)"
          />
        </svg>

        {/* Caminho pontilhado */}
        <svg
          className="
            absolute right-[3%] top-[17%]
            hidden h-48 w-64 opacity-50 lg:block
          "
          viewBox="0 0 260 190"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 20C80 0 65 100 130 85C190 70 150 160 245 170"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray="7 10"
            strokeLinecap="round"
          />

          <circle cx="10" cy="20" r="5" fill="var(--secondary)" />
          <circle cx="245" cy="170" r="5" fill="var(--secondary)" />
        </svg>

        {/* Estrela superior esquerda */}
        <svg
          className="
            absolute left-[8%] top-[17%]
            h-10 w-10 text-secondary
            sm:h-14 sm:w-14
          "
          viewBox="0 0 60 60"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M30 2L36 23L58 30L36 36L30 58L23 36L2 30L23 23Z"
            fill="currentColor"
          />
        </svg>

        {/* Brilho direito */}
        <svg
          className="
            absolute right-[13%] top-[43%]
            h-12 w-12 text-secondary
            sm:h-16 sm:w-16
          "
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 2L39 25L62 32L39 39L32 62L25 39L2 32L25 25Z"
            fill="currentColor"
          />
        </svg>

        {/* Raios decorativos */}
        <svg
          className="
            absolute left-[4%] bottom-[15%]
            h-20 w-20 text-secondary
            sm:h-24 sm:w-24
          "
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M25 15L34 30M65 8L61 27M85 48L67 51"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        {/* Círculos decorativos */}
        <svg
          className="
            absolute right-[8%] bottom-[20%]
            h-24 w-24 opacity-60
          "
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray="5 8"
          />

          <circle
            cx="50"
            cy="50"
            r="18"
            fill="var(--decoration-blue)"
          />
        </svg>

        {/* Pontinhos espalhados */}
        <svg
          className="
            absolute left-[43%] top-[13%]
            h-12 w-12 opacity-70
          "
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="4" fill="var(--secondary)" />
          <circle cx="34" cy="16" r="3" fill="var(--primary)" />
          <circle cx="22" cy="38" r="5" fill="var(--decoration-blue)" />
        </svg>

      </div>
    </>
  );
}
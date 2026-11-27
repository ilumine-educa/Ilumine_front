import Image from "next/image";

import { IconBrain, IconChartBar } from "@tabler/icons-react";

import FloatingInfoCard from "./floatingInfoCard";

export default function SoluctionDecoration() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Brilho de fundo */}
      <div
        className="
          pointer-events-none absolute
          inset-[15%] -z-10 rounded-full
          bg-primary/20 blur-[100px]
        "
      />

      {/* Decoração SVG - Fundo */}
      <svg
        className="
          pointer-events-none absolute
          -left-12 top-10 -z-10
          h-48 w-48 text-primary/20
        "
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="72"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="5 8"
        />

        <circle
          cx="100"
          cy="100"
          r="52"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle cx="100" cy="100" r="5" fill="currentColor" />
      </svg>

      {/* Decoração SVG - Estrela superior */}
      <svg
        className="
          pointer-events-none absolute
          -right-3 top-24 z-10
          h-12 w-12 text-secondary
          animate-[float_4s_ease-in-out_infinite]
        "
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 2L28.5 19.5L46 24L28.5 28.5L24 46L19.5 28.5L2 24L19.5 19.5L24 2Z"
          fill="currentColor"
          fillOpacity=".75"
        />
      </svg>

      {/* Decoração SVG - Pontilhado */}
      <svg
        className="
          pointer-events-none absolute
          -right-5 bottom-16 z-0
          h-24 w-24 text-primary/50
        "
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 18}
              cy={10 + row * 18}
              r="2.5"
            />
          )),
        )}
      </svg>

      {/* Decoração SVG - Curvas */}
      <svg
        className="
          pointer-events-none absolute
          -left-8 bottom-28 z-10
          h-32 w-32 text-secondary/60
        "
        viewBox="0 0 140 140"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 110C30 90 15 55 50 45C80 35 80 10 120 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />

        <circle cx="10" cy="110" r="4" fill="currentColor" />
        <circle cx="120" cy="10" r="4" fill="currentColor" />
      </svg>

      {/* Card superior */}
      <FloatingInfoCard
        icon={<IconBrain size={23} />}
        label="Experiência"
        title="Personalizada"
        variant="primary"
        animationDuration={5}
        className="-right-2 top-5 lg:-right-5"
      />

      {/* Card inferior */}
      <FloatingInfoCard
        icon={<IconChartBar size={23} />}
        label="Desenvolvimento"
        title="Cada conquista importa"
        variant="secondary"
        animationDuration={6}
        className="bottom-8 left-0 lg:-left-5"
      />

      {/* Dispositivos */}
      <div
        className="
    relative
    w-full
    aspect-[9/9]
    max-w-5xl
  "
      >
        <Image
          src="/images/projeto/mockup.png"
          fill
          alt="Imagem das telas de monitoramento e jogos"
          className="object-contain"
          priority
        />
      </div>
      {/* Legenda */}
      <p className="mt-4 text-center text-xs text-text-secondary">
        Tecnologia que respeita o tempo e a individualidade de cada criança.
      </p>
    </div>
  );
}

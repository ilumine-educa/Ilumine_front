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
        className="-bottom-3 left-0 lg:-left-5"
      />

      {/* Dispositivos */}
      <div
        className="
          relative mx-auto
          h-[390px] w-full
          sm:h-[500px]
          [perspective:1400px]
        "
      >
        {/* Tablet */}
        <div
          className="
            absolute right-[2%] top-[5%]
            h-[78%] w-[76%]
            rounded-[2rem] border-[7px]
            border-neutral-800 bg-neutral-900
            p-2 shadow-2xl
            transition-transform duration-700
            [transform:rotateY(-13deg)_rotateX(4deg)]
            hover:[transform:rotateY(-5deg)_rotateX(0deg)]
            sm:rounded-[2.5rem] sm:border-[10px]
          "
        >
          <div
            className="
              absolute left-1/2 top-1 z-20
              h-2 w-2 -translate-x-1/2
              rounded-full bg-neutral-700
            "
          />

          <div
            className="
              relative h-full w-full
              overflow-hidden rounded-[1.3rem]
              bg-white sm:rounded-[1.8rem]
            "
          >
            <Image
              src="/images/ilumine-dashboard.png"
              alt="Painel de acompanhamento do Ilumine Educa"
              fill
              priority
              sizes="(max-width: 768px) 70vw, 500px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Celular */}
        <div
          className="
            absolute bottom-[2%] left-[3%] z-20
            h-[68%] w-[39%]
            rounded-[2.5rem] border-[6px]
            border-neutral-800 bg-neutral-900
            p-1.5 shadow-2xl
            transition-transform duration-700
            [transform:rotateY(12deg)_rotateX(3deg)]
            hover:[transform:rotateY(3deg)_rotateX(0deg)]
            sm:rounded-[3rem] sm:border-[8px]
          "
        >
          <div
            className="
              absolute left-1/2 top-1.5 z-20
              h-4 w-16 -translate-x-1/2
              rounded-full bg-neutral-900
              sm:h-5 sm:w-20
            "
          />

          <div
            className="
              relative h-full w-full
              overflow-hidden rounded-[2rem]
              bg-white sm:rounded-[2.5rem]
            "
          >
            <Image
              src="/images/ilumine-mobile.png"
              alt="Experiência interativa do Ilumine Educa"
              fill
              sizes="(max-width: 768px) 40vw, 250px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Legenda */}
      <p className="mt-4 text-center text-xs text-text-secondary">
        Tecnologia que respeita o tempo e a individualidade de cada criança.
      </p>
    </div>
  );
}

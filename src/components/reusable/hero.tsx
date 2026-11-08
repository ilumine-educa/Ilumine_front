import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type HeroAction = {
  label: string;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

type HeroProps = {
  title: ReactNode;
  highlight?: ReactNode;
  description: ReactNode;
  actions?: HeroAction[];
  visual: ReactNode;
  align?: "left" | "center";
  fullHeight?: boolean;
  wave?: boolean;
  decorations?: boolean;
  className?: string;
};

export default function Hero({
  title,
  highlight,
  description,
  actions = [],
  visual,
  align = "left",
  fullHeight = false,
  wave = false,
  decorations = true,
  className = "",
}: HeroProps) {
  return (
    <section
      className={`
        relative isolate overflow-hidden
        text-text-primary
        ${fullHeight ? "min-h-dvh" : "py-20 sm:py-24 lg:py-28"}
        ${className}
      `}
    >
      {/* Decorações de fundo */}
      {decorations && (
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* Círculo superior esquerdo */}
          <svg
            className="
              absolute -left-20 -top-24
              h-72 w-72 opacity-30
              sm:h-96 sm:w-96
            "
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle
              cx="200"
              cy="200"
              r="145"
              fill="var(--primary)"
              fillOpacity=".07"
            />
            <circle
              cx="200"
              cy="200"
              r="110"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="5 9"
              opacity=".5"
            />
            <circle
              cx="200"
              cy="200"
              r="80"
              stroke="var(--decoration-blue)"
              strokeWidth="2"
              opacity=".5"
            />
          </svg>

          {/* Pontos superiores direitos */}
          <svg
            className="
              absolute -right-4 top-[8%]
              h-40 w-40 opacity-40
              sm:right-[4%] sm:h-52 sm:w-52
            "
            viewBox="0 0 200 200"
            fill="var(--primary)"
          >
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={20 + col * 35}
                  cy={20 + row * 35}
                  r="2.5"
                  opacity={(row + col) % 2 === 0 ? ".7" : ".25"}
                />
              )),
            )}
          </svg>

          {/* Linhas curvas laterais */}
          <svg
            className="
              absolute -right-20 top-[35%]
              h-72 w-72 opacity-30
              sm:right-0 sm:h-96 sm:w-96
            "
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M400 20C240 20 320 180 160 180S80 340 0 340"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="7 9"
            />
            <path
              d="M400 65C260 65 340 225 180 225S100 385 20 385"
              stroke="var(--decoration-blue)"
              strokeWidth="2"
            />
          </svg>

          {/* Brilho superior */}
          <svg
            className="
              absolute left-[45%] top-[12%]
              h-9 w-9 text-secondary
              opacity-60 sm:h-12 sm:w-12
            "
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 0C23 12 28 17 40 20C28 23 23 28 20 40C17 28 12 23 0 20C12 17 17 12 20 0Z" />
          </svg>

          {/* Brilho lateral */}
          <svg
            className="
              absolute bottom-[28%] left-[4%]
              h-6 w-6 text-primary
              opacity-50 sm:h-9 sm:w-9
            "
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 0C23 12 28 17 40 20C28 23 23 28 20 40C17 28 12 23 0 20C12 17 17 12 20 0Z" />
          </svg>

          {/* Pequenos círculos */}
          <svg
            className="
              absolute bottom-[18%] right-[38%]
              h-20 w-20 opacity-40
            "
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="var(--secondary)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="var(--primary)"
              fillOpacity=".35"
            />
          </svg>

          {/* Mancha orgânica inferior direita */}
          <svg
            className="
              absolute -bottom-20 -right-20
              h-72 w-72 opacity-30
              sm:h-96 sm:w-96
            "
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M200 20C310 10 390 100 380 220C370 340 280 390 160 370C40 350 0 270 30 160C60 50 100 30 200 20Z"
              fill="var(--decoration-blue)"
              fillOpacity=".35"
            />
            <path
              d="M200 65C285 55 345 125 340 220C335 300 260 350 170 330C80 310 40 250 65 165C90 80 125 75 200 65Z"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
          </svg>
        </div>
      )}

      {/* Conteúdo principal */}
      <div
        className={`
          relative z-10 mx-auto grid w-full
          max-w-[1600px] grid-cols-1 items-center
          gap-10 px-4 sm:px-8
          md:grid-cols-[1.1fr_1fr] md:gap-8
          lg:px-12
          ${fullHeight ? "min-h-dvh pt-24 pb-28" : ""}
        `}
      >
        {/* Conteúdo */}
        <div
          className={`
            relative z-10 min-w-0
            ${align === "center" ? "text-center" : "text-left"}
          `}
        >
          <h1
            className="
              font-heading font-semibold tracking-tight
              text-[clamp(2.1rem,3.5vw,5.5rem)]
              leading-[1.08]
            "
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          <div
            className={`
              mt-6 max-w-[34em]
              text-[clamp(1rem,1.25vw,1.4rem)]
              leading-relaxed text-text-secondary
              ${align === "center" ? "mx-auto" : ""}
            `}
          >
            {description}
          </div>

          {/* Ações */}
          {actions.length > 0 && (
            <div
              className={`
                mt-9 flex flex-wrap gap-3
                ${align === "center" ? "justify-center" : "justify-start"}
              `}
            >
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${index}`}
                  href={action.href}
                  className={`
                    inline-flex min-h-11 items-center
                    justify-center gap-3 rounded-full
                    px-6 py-3 text-sm font-semibold
                    transition-colors
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-primary
                    motion-reduce:transition-none
                    ${
                      action.variant === "secondary"
                        ? "border border-border bg-surface text-text-primary hover:bg-surface-secondary"
                        : "bg-primary text-text-inverse hover:bg-primary-hover"
                    }
                  `}
                >
                  {action.label}
                  {action.icon ?? <IconArrowNarrowRight size={20} />}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Elemento visual */}
        <div className="relative mx-auto w-full min-w-0 max-w-lg md:max-w-none">
          {visual}
        </div>
      </div>

      {/* Decoração inferior */}
      {wave && (
        <svg
          className="
            pointer-events-none absolute inset-x-0
            -bottom-px z-0 h-[clamp(3rem,7vw,10rem)]
            w-full
          "
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 42C94 2 105 125 240 119H0Z" fill="var(--primary)" />
          <path
            d="M620 120c128-101 212-17 359-35 205-24 265-97 461-74v109Z"
            fill="color-mix(in srgb, var(--decoration-blue) 55%, var(--surface))"
          />
          <path
            d="M876 120c238 0 349-121 564-70v70Z"
            fill="var(--decoration-blue)"
          />
        </svg>
      )}
    </section>
  );
}

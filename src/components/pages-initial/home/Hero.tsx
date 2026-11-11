import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className={`${styles.hero} relative isolate overflow-hidden text-text-primary`}
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid w-full h-dvh grid-cols-1 items-center px-2 pt-26 sm:px-4 md:grid-cols-[1.1fr_1fr] md:gap-4 md:py-[clamp(1rem,3vw,5rem)] lg:px-12">
        <div className="relative z-2 min-w-0 pb-2 md:py-6">
          <h1
            id="hero-title"
            className="font-heading text-[clamp(2.1rem,3.5vw,5.5rem)] leading-[1.02] font-semibold tracking-tight"
          >
            Cada criança
            <br />
            <span
              className={`${styles.highlight} relative isolate inline-block`}
            >
              aprende de um jeito.
            </span>
          </h1>
          <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[32em] text-[clamp(1rem,1.25vw,1.75rem)] leading-relaxed">
            Com a <strong className="font-semibold">Ilumine.Educa</strong>, o
            aprendizado se torna mais acessível, divertido e personalizado.
          </p>

          {/* Os destinos dos botões serão definidos na próxima etapa. */}
          <div className="mt-[clamp(1.25rem,2vw,3rem)] flex flex-wrap gap-[clamp(.75rem,1vw,1.5rem)]">
            <Link
              href={"/auth/cadastro"}
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-primary px-[clamp(1.25rem,1.6vw,2.5rem)] py-[clamp(.75rem,1vw,1.25rem)] text-[clamp(.875rem,1vw,1.375rem)] font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              Comece agora
              <IconArrowNarrowRight size={20}/>
            </Link>
            <Link
              href={"/quem-somos"}
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-text-primary bg-surface px-[clamp(1.25rem,1.6vw,2.5rem)] py-[clamp(.75rem,1vw,1.25rem)] text-[clamp(.875rem,1vw,1.375rem)] font-semibold transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              Saiba mais
              <IconPlayerPlay size={20}/>
            </Link>
          </div>
        </div>

        <div className="relative isolate mx-auto aspect-[1.05] w-full min-w-0 max-w-lg md:max-w-none">
          <div className={styles.blueShape} aria-hidden="true" />
          <Image
            src="/images/hero/crianca-tablet.png"
            alt="Criança sorrindo enquanto utiliza um tablet."
            width={1254}
            height={1254}
            sizes="(max-width: 767px) min(77vw, 430px), (max-width: 2435px) 36vw, 860px"
            loading="eager"
            fetchPriority="high"
            className="absolute bottom-0 left-0 h-auto w-[84%] object-contain"
          />
        </div>
      </div>
      <svg
        className="pointer-events-none absolute inset-x-0 -bottom-px z-1 h-[clamp(3rem,7vw,10rem)] w-full"
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
    </section>
  );
}

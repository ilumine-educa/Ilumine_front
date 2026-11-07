import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={`${styles.hero} relative isolate overflow-hidden bg-surface text-text-primary`} aria-labelledby="hero-title">
      <div className="mx-auto grid w-[92%] max-w-[140rem] grid-cols-1 items-center gap-6 px-2 pt-8 sm:px-4 md:grid-cols-[1.1fr_1fr] md:gap-4 md:py-[clamp(1rem,3vw,5rem)] lg:px-6">
        <div className="relative z-2 min-w-0 pb-2 md:py-6">
          <h1 id="hero-title" className="font-heading text-[clamp(2.1rem,3.5vw,5.5rem)] leading-[1.02] font-semibold tracking-tight">
            Cada criança<br />
            <span className={`${styles.highlight} relative isolate inline-block`}>aprende de um jeito.</span>
          </h1>
          <p className="mt-[clamp(1rem,1.5vw,2rem)] max-w-[32em] text-[clamp(1rem,1.25vw,1.75rem)] leading-relaxed">
            Com a <strong className="font-semibold">Ilumine.Educa</strong>, o aprendizado se torna mais
            acessível, divertido e personalizado.
          </p>

          {/* Os destinos dos botões serão definidos na próxima etapa. */}
          <div className="mt-[clamp(1.25rem,2vw,3rem)] flex flex-wrap gap-[clamp(.75rem,1vw,1.5rem)]">
            <button type="button" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-primary px-[clamp(1.25rem,1.6vw,2.5rem)] py-[clamp(.75rem,1vw,1.25rem)] text-[clamp(.875rem,1vw,1.375rem)] font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
              Comece agora
              <svg className="size-[1.4em] shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-text-primary bg-surface px-[clamp(1.25rem,1.6vw,2.5rem)] py-[clamp(.75rem,1vw,1.25rem)] text-[clamp(.875rem,1vw,1.375rem)] font-semibold transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
              Saiba mais
              <svg className="size-[1.1em] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="m8 5 11 7-11 7Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative isolate mx-auto aspect-[1.05] w-full min-w-0 max-w-[32rem] md:max-w-none">
          <div className={styles.blueShape} aria-hidden="true" />
          <svg className="absolute top-[8%] left-0 w-[13%] text-warning" viewBox="0 0 100 90" fill="none" aria-hidden="true">
            <path d="m49 32-6-22M67 38l12-18M31 50 10 44" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
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
          <Image src="/images/hero/abelhinha.svg" alt="" width={220} height={230}
            className="absolute top-[8%] right-0 h-auto w-[27%] rotate-12 object-contain" />
          <svg className="absolute top-[42%] right-0 -z-1 w-[23%] -rotate-12 text-text-primary" viewBox="0 0 180 170" fill="none" aria-hidden="true">
            <path d="M10 18c70-26 99 11 72 40-26 27-60-4-38-28 32-34 118 7 111 68-3 25-23 47-61 56" stroke="currentColor" strokeWidth="2" strokeDasharray="6 9" strokeLinecap="round" />
          </svg>
          <svg className="absolute top-[45%] left-0 w-[8%] text-primary" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <path d="m12 12 8 17M5 43l18 2" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <svg className="pointer-events-none absolute inset-x-0 -bottom-px z-1 h-[clamp(3rem,7vw,10rem)] w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 42C94 2 105 125 240 119H0Z" fill="var(--primary)" />
        <path d="M620 120c128-101 212-17 359-35 205-24 265-97 461-74v109Z" fill="color-mix(in srgb, var(--decoration-blue) 55%, var(--surface))" />
        <path d="M876 120c238 0 349-121 564-70v70Z" fill="var(--decoration-blue)" />
      </svg>
    </section>
  );
}

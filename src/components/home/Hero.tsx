import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={`${styles.hero} relative isolate overflow-hidden bg-surface text-text-primary`} aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 pt-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-0 md:pt-0">
        <div className="relative z-2 pb-2 md:py-6">
          <h1 id="hero-title" className="font-heading text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.02] font-semibold tracking-tight">
            Cada criança<br />
            <span className={`${styles.highlight} relative isolate inline-block`}>aprende de um jeito.</span>
          </h1>
          <p className="mt-4 max-w-[450px] text-base leading-relaxed lg:text-lg lg:leading-snug">
            Com a <strong className="font-semibold">Ilumine.Educa</strong>, o aprendizado se torna mais
            acessível, divertido e personalizado.
          </p>

          {/* Os destinos dos botões serão definidos na próxima etapa. */}
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
              Comece agora
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-text-primary bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
              Saiba mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="m8 5 11 7-11 7Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative isolate mx-auto h-[300px] w-full max-w-[440px] md:h-[320px] md:max-w-none lg:h-[340px]">
          <div className={styles.blueShape} aria-hidden="true" />
          <svg className="absolute top-8 left-0 w-14 text-warning lg:-left-8 lg:w-16" viewBox="0 0 100 90" fill="none" aria-hidden="true">
            <path d="m49 32-6-22M67 38l12-18M31 50 10 44" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
          <Image
            src="/images/hero/crianca-tablet.png"
            alt="Criança sorrindo enquanto utiliza um tablet."
            width={1254}
            height={1254}
            sizes="(max-width: 767px) 75vw, (max-width: 1023px) 36vw, 380px"
            loading="eager"
            fetchPriority="high"
            className="absolute bottom-[-50px] left-0 h-auto w-[85%] max-w-[350px] md:bottom-[-30px] md:w-[90%] lg:bottom-[-40px] lg:w-[380px] lg:max-w-none"
          />
          <Image src="/images/hero/abelhinha.svg" alt="" width={220} height={230}
            className="absolute top-5 right-0 h-auto w-[100px] rotate-12 lg:top-3 lg:-right-2 lg:w-[150px]" />
          <svg className="absolute top-[42%] -right-5 -z-1 w-24 -rotate-12 text-text-primary lg:-right-16 lg:w-36" viewBox="0 0 180 170" fill="none" aria-hidden="true">
            <path d="M10 18c70-26 99 11 72 40-26 27-60-4-38-28 32-34 118 7 111 68-3 25-23 47-61 56" stroke="currentColor" strokeWidth="2" strokeDasharray="6 9" strokeLinecap="round" />
          </svg>
          <svg className="absolute top-[45%] left-0 w-10 text-primary" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <path d="m12 12 8 17M5 43l18 2" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <svg className="pointer-events-none absolute inset-x-0 -bottom-px z-1 h-16 w-full md:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 42C94 2 105 125 240 119H0Z" fill="var(--primary)" />
        <path d="M620 120c128-101 212-17 359-35 205-24 265-97 461-74v109Z" fill="color-mix(in srgb, var(--decoration-blue) 55%, var(--surface))" />
        <path d="M876 120c238 0 349-121 564-70v70Z" fill="var(--decoration-blue)" />
      </svg>
    </section>
  );
}

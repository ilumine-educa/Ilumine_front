import Image from "next/image";
import logo from "../../assets/logo-horizontal.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} relative isolate overflow-hidden bg-[#fcfcff] text-[#132454]`} aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-6 pt-7 min-[761px]:px-8 min-[761px]:pt-[38px] min-[1001px]:px-12">
        <Image
          src={logo}
          alt="Ilumine.Educa"
          className="h-auto w-[210px] min-[761px]:w-[260px]"
          sizes="(max-width: 600px) 210px, 260px"
          loading="eager"
        />

        <div className="mt-[46px] grid grid-cols-1 items-center gap-[34px] min-[761px]:mt-[38px] min-[761px]:grid-cols-2 min-[761px]:gap-5">
          <div className="relative z-2 min-[761px]:pb-10">
            <h1 id="hero-title" className="m-0 text-[clamp(2.75rem,8.5vw,4rem)] leading-[1.04] font-semibold! tracking-[-0.035em]
                min-[761px]:text-[clamp(2.8rem,5.5vw,3.5rem)] min-[1001px]:text-[clamp(3.3rem,5.5vw,4.75rem)]">
              Cada criança<br />
              aprende de<br />
              <span className={`${styles.highlight} relative isolate inline-block whitespace-nowrap`}>um jeito.</span>
            </h1>

            <p className="mt-[23px] max-w-[460px] text-base leading-[1.75] text-[#374569] min-[761px]:mt-7
                min-[761px]:max-w-[450px] min-[1001px]:text-lg">
              Com a <strong className="font-semibold text-[#132454]">Ilumine.Educa</strong>, o aprendizado se torna mais
              acessível, divertido e personalizado.
            </p>

            {/* Os destinos dos botões serão definidos na próxima etapa. */}
            <div className="mt-6 flex flex-wrap gap-3 min-[761px]:mt-[30px] min-[761px]:gap-3.5">
              <button type="button" className="inline-flex min-h-14 flex-[1_1_145px] cursor-pointer items-center justify-center gap-2.5 rounded-full
                border-[1.5px] px-4 py-3.5 text-sm font-semibold whitespace-nowrap
                transition-[background-color,box-shadow] duration-160 ease-[ease] focus-visible:outline-3
                focus-visible:outline-offset-[5px] focus-visible:outline-[#132454] motion-reduce:transition-none
                min-[761px]:flex-none min-[761px]:px-5 min-[761px]:text-[0.9375rem] min-[1001px]:gap-[15px]
                min-[1001px]:px-[25px] border-transparent bg-[#1867d3] text-white shadow-[0_7px_18px_#1867d31c]
                hover:bg-[#1256b5] hover:shadow-[0_8px_22px_#1867d32b]">
                Comece agora
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" className="inline-flex min-h-14 flex-[1_1_145px] cursor-pointer items-center justify-center gap-2.5 rounded-full
                border-[1.5px] px-4 py-3.5 text-sm font-semibold whitespace-nowrap
                transition-[background-color,box-shadow] duration-160 ease-[ease] focus-visible:outline-3
                focus-visible:outline-offset-[5px] focus-visible:outline-[#132454] motion-reduce:transition-none
                min-[761px]:flex-none min-[761px]:px-5 min-[761px]:text-[0.9375rem] min-[1001px]:gap-[15px]
                min-[1001px]:px-[25px] border-[#132454] bg-white/50 text-[#132454] hover:bg-[#eaf3ff]">
                Saiba mais
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative isolate mx-auto w-[90%] min-w-0 max-w-[480px] min-[761px]:mx-0 min-[761px]:w-auto min-[761px]:max-w-none">
            <div className={styles.blueShape} aria-hidden="true" />

            <svg className="absolute top-[5%] -left-[4%] w-[17%]" viewBox="0 0 100 90" fill="none" aria-hidden="true">
              <path d="m49 32-6-22M67 38l12-18M31 50 10 44" stroke="#F9BD32" strokeWidth="10" strokeLinecap="round" />
              <path d="m21 80 12-2" stroke="#3085E8" strokeWidth="6" strokeLinecap="round" />
            </svg>

            <Image
              src="/images/hero/crianca-tablet.png"
              alt="Criança sorrindo enquanto utiliza um tablet."
              width={1254}
              height={1254}
              sizes="(max-width: 760px) 90vw, (max-width: 1200px) 48vw, 580px"
              loading="eager"
              fetchPriority="high"
              className="relative block h-auto w-full"
            />

            <Image
              src="/images/hero/abelhinha.svg"
              alt=""
              width={220}
              height={230}
              className="absolute top-[2%] -right-[7%] h-auto w-[28%] rotate-[13deg]"
            />

            <svg className="absolute top-[35%] -right-[11%] -z-1 w-[27%] -rotate-12" viewBox="0 0 180 170" fill="none" aria-hidden="true">
              <path d="M10 18c70-26 99 11 72 40-26 27-60-4-38-28 32-34 118 7 111 68-3 25-23 47-61 56" stroke="#22356A" strokeWidth="2" strokeDasharray="6 9" strokeLinecap="round" />
            </svg>

            <svg className="absolute bottom-[20%] -left-[6%] w-[7%] rotate-[13deg]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="m24 4 5 14 15 6-15 5-5 15-6-15-14-5 14-6Z" stroke="#F1A12C" strokeWidth="3" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <svg className="pointer-events-none absolute inset-x-0 -bottom-px z-1 h-[75px] w-full min-[761px]:h-[115px]" 
      viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 42C94 2 105 125 240 119H0Z" fill="#3085E8" />
        <path d="M620 120c128-101 212-17 359-35 205-24 265-97 461-74v109Z" fill="#D5E8FF" />
        <path d="M876 120c238 0 349-121 564-70v70Z" fill="#A4C9FA" />
      </svg>
    </section>
  );
}

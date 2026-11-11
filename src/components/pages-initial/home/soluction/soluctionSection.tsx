import SectionHeader from "../../../reusable/sectionHeader";

import SolutionSteps from "./components/soluctionSteps";
import SoluctionDecoration from "./components/soluctionDecoration";

export default function SolutionSection() {
  return (
    <section
      id="solucao"
      className="
        relative isolate overflow-hidden
        bg-background px-4 py-20
        sm:px-6 sm:py-24
        lg:px-12 lg:py-32
      "
    >
      {/* Decoração superior */}
      <svg
        className="
          pointer-events-none absolute inset-x-0 top-[-1px]
          z-0 h-[clamp(3rem,7vw,10rem)]
          w-full rotate-180 scale-x-[-1]
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

      {/* Conteúdo */}
      <div
        className="
          mx-auto grid max-w-7xl
          items-center gap-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-10
        "
      >
        {/* Conteúdo textual */}
        <div className="relative z-10 max-w-xl">
          <SectionHeader
            title="Cada criança aprende de um jeito."
            highlight="Nossa tecnologia acompanha essa diferença."
            description="
              O Ilumine transforma a experiência de aprendizagem
              com atividades interativas, personalizadas e
              acompanhamento do desenvolvimento de cada criança.
            "
            align="left"
          />

          <SolutionSteps />
        </div>

        {/* Demonstração visual */}
        <SoluctionDecoration />
      </div>
    </section>
  );
}

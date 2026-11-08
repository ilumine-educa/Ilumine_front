import { benefits } from "./benefits.data";

import BenefitCard from "./components/benefitCard";
import BenefitsDecorations from "./components/benefitsDecorations";
import SectionHeader from "../../reusable/sectionHeader";

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="
        relative isolate w-full
        overflow-hidden
        bg-background
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-12 lg:py-28
      "
    >
      {/* Decorações */}
      <BenefitsDecorations />

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <SectionHeader
          id="benefits"
          title="Mais do que aprender,"
          highlight="é evoluir no próprio ritmo."
        />

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-6
          "
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

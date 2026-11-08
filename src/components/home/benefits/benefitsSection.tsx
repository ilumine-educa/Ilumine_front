import { benefits } from "./benefits.data";
import BenefitsDecorations from "./components/benefitsDecorations";
import SectionHeader from "../../reusable/sectionHeader";
import InfoCard from "../../reusable/infoCard";

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
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            id="benefits"
            title="Mais do que aprender,"
            highlight="é evoluir no próprio ritmo."
          />
        </div>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-6
          "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <InfoCard
                key={benefit.title}
                variant="benefit"
                icon={<Icon size={30} stroke={1.8} />}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

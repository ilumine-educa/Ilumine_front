import { impacts } from "./impact.data";
import SectionHeader from "../../reusable/sectionHeader";
import InfoCard from "../../reusable/card/infoCard";
import ImpactDecoration from "./components/ImpactDecoration";

export default function ImpactSection() {
  return (
    <section
      id="impacto"
      className="
        relative isolate overflow-hidden
        bg-surface px-4 py-20
        sm:px-6 sm:py-28
        lg:px-12
      "
    >
      <ImpactDecoration />

      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            title="Mais do que ensinar,"
            highlight="transformar a forma de aprender."
            description="Acreditamos que uma educação mais inclusiva começa
            quando reconhecemos que cada criança tem seu próprio
            jeito de aprender."
          />
        </div>

        {/* Cards de impacto */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {impacts.map((impact) => {
            const Icon = impact.icon;

            return (
              <InfoCard
                key={impact.number}
                variant="impact"
                number={impact.number}
                audience={impact.audience}
                icon={<Icon size={29} stroke={1.7} />}
                title={impact.title}
                description={impact.description}
                color={impact.color}
                decoration={impact.decoration}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

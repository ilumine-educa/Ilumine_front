import SectionHeader from "@/src/components/reusable/sectionHeader";
import { pillars } from "../about.data";

export default function JourneySection() {
  return (
    <section className="bg-surface px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            label="Nossa maneira de transformar"
            title="Uma jornada de aprendizagem diferente."
            description="Nosso propósito se traduz em três princípios que orientam a
            experiência do Ilumine."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.number}
                className="relative border-t-2 border-primary-light pt-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-primary/25">
                    {pillar.number}
                  </span>

                  <Icon size={34} stroke={1.5} className="text-primary" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-text-primary">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

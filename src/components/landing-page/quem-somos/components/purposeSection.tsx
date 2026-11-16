import { values, purposes } from "../about.data";
import SectionHeader from "@/src/components/reusable/sectionHeader";

export default function PurposeSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            label="Nosso propósito"
            title="O que nos move?"
            description="Mais do que desenvolver tecnologia, queremos contribuir para uma educação que reconhece e valoriza cada criança."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Missão e visão */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
            {purposes.map((purpose) => {
              const Icon = purpose.icon;

              return (
                <article
                  key={purpose.title}
                  className={`
                    flex min-h-56 flex-col justify-center
                    rounded-3xl p-7 sm:p-9
                    border border-border bg-surface text-text-primary
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  `}
                >
                  <Icon
                    size={42}
                    stroke={1.5}
                    className={
                      purpose.variant === "primary"
                        ? "text-primary"
                        : "text-secondary"
                    }
                  />

                  <h3 className="mt-6 text-2xl font-bold">{purpose.title}</h3>

                  <p
                    className={` mt-3 max-w-lg text-sm leading-relaxed sm:text-base text-text-secondary`}
                  >
                    {purpose.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Valores */}
          <div
            className="
            grid grid-cols-1 gap-4
            sm:gap-5 sm:grid-cols-2
          "
          >
            {[values[0], values[2], values[1], values[3]].map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="
                    flex aspect-square flex-col
                    items-center justify-center
                    gap-5 rounded-3xl
                    border border-border bg-surface
                    p-4 sm:p-6
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <div
                    className={`
                      flex h-12 w-12 items-center
                    justify-center rounded-2xl
                      ${value.color}
                    `}
                  >
                    <Icon size={26} stroke={1.7} />
                  </div>

                  <h3
                    className="
                    mt-5 text-lg font-bold text-text-primary
                  "
                  >
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { IconCheck, IconLock, IconSparkles } from "@tabler/icons-react";

import type { PricingPlan } from "../plans.type";

type PricingCardProps = {
  plan: PricingPlan;
  index: number;
};

export default function PricingCard({ plan, index }: PricingCardProps) {
  const Icon = plan.icon;

  return (
    <article
      aria-label={`Plano ${plan.name}`}
      data-home-reveal="scroll"
      data-home-delay={index}
      className={`
        group relative flex h-full min-w-0 flex-col
        rounded-3xl border p-6
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        sm:p-8
        ${
          plan.featured
            ? "z-10 border-primary bg-surface shadow-xl shadow-primary/10 lg:scale-[1.04]"
            : "border-border bg-surface shadow-sm hover:border-primary-light"
        }
      `}
    >
      {/* Selo recomendado */}
      {plan.featured && (
        <span
          className="
            absolute -top-4 left-1/2
            inline-flex -translate-x-1/2
            items-center gap-1.5
            whitespace-nowrap rounded-full
            bg-primary px-5 py-2
            text-xs font-semibold text-white
            shadow-md shadow-primary/20
          "
        >
          <IconSparkles size={15} />
          Mais recomendado
        </span>
      )}

      {/* Cabeçalho */}
      <div className="text-center">
        <div
          className={`
            mx-auto mb-5 flex h-14 w-14
            items-center justify-center
            rounded-2xl transition-transform duration-300
            group-hover:scale-110
            ${
              plan.featured
                ? "bg-primary text-white"
                : "bg-primary-light text-primary"
            }
          `}
        >
          <Icon size={29} stroke={1.8} />
        </div>

        <h3 className="font-heading text-2xl font-semibold text-text-primary">
          {plan.name}
        </h3>

        <p className="mx-auto mt-2 max-w-[250px] text-sm leading-relaxed text-text-secondary">
          {plan.description}
        </p>

        {/* Preço */}
        <div className="mt-7 flex items-baseline justify-center gap-1 text-primary tabular-nums">
          <span className="text-xl font-medium">R$</span>

          <span className="text-5xl font-bold tracking-tight">
            {plan.price}
          </span>

          {plan.period && (
            <span className="text-sm font-medium text-text-secondary">
              {plan.period}
            </span>
          )}
        </div>
      </div>

      {/* Benefícios */}
      <div className="my-8 flex-1 border-t border-border pt-7">
        <h4 className="mb-5 text-sm font-semibold text-text-primary">
          O que está incluído:
        </h4>

        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="
                flex items-start gap-3
                text-sm leading-relaxed
                text-text-secondary
              "
            >
              <span
                className="
                  mt-0.5 flex h-5 w-5 shrink-0
                  items-center justify-center
                  rounded-full bg-[#279B58]/10
                  text-[#279B58]
                "
              >
                <IconCheck size={14} stroke={2.5} />
              </span>

              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Botão */}
      <button
        type="button"
        disabled
        className={`
          flex min-h-12 w-full cursor-not-allowed
          items-center justify-center gap-2
          rounded-full px-4 py-3
          text-sm font-semibold
          ${
            plan.featured
              ? "bg-primary text-white"
              : "border border-primary/20 bg-primary-light/40 text-primary"
          }
        `}
      >
        <IconLock size={17} />
        {plan.availability}
      </button>
    </article>
  );
}

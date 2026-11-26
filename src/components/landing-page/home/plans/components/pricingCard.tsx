import { IconCheck, IconLock, IconSparkles } from "@tabler/icons-react";

import type { BillingPeriod, PricingPlan } from "../plans.type";

type PricingCardProps = {
  plan: PricingPlan;
  index: number;
  billingPeriod?: BillingPeriod;
};

export default function PricingCard({ plan, index, billingPeriod = "monthly" }: PricingCardProps) {
  const annual = billingPeriod === "annual";
  const paid = plan.monthlyCents > 0;
  const formatPrice = (cents: number) => (cents / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: cents % 100 ? 2 : 0,
    maximumFractionDigits: 2,
  });
  const monthly = formatPrice(plan.monthlyCents);
  const equivalent = formatPrice(plan.annualCents / 12);

  return (
    <article
      aria-label={`Plano ${plan.name}`}
      data-home-reveal="scroll"
      data-home-delay={index}
      className={`
        group relative flex h-full min-w-0 flex-col
        motion-reduce:transition-none
        rounded-3xl border p-6
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        sm:p-8
        ${
          plan.featured
            ? "z-10 border-primary bg-surface shadow-xl shadow-primary/10"
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
            text-xs font-semibold text-text-inverse
            shadow-md shadow-primary/20
          "
        >
          <IconSparkles size={15} />
          Mais recomendado
        </span>
      )}

      {/* Cabeçalho */}
      <div className="pt-2 text-center">

        <h3 className="font-heading text-2xl font-semibold text-text-primary">
          {plan.name}
        </h3>

        <p className="mx-auto mt-2 max-w-62.5 text-sm leading-relaxed text-text-secondary">
          {plan.description}
        </p>

        {/* Preço */}
        <p className="sr-only">R$ {annual ? equivalent : monthly}{paid && " por mês"}</p>
        <div aria-hidden="true" className="mt-5 flex items-end justify-center gap-1 text-primary tabular-nums">
          <span className="text-xl font-medium">R$</span>
          <span className="block h-[1.1em] overflow-hidden text-5xl font-bold leading-[1.1] tracking-tight">
            <span className={`grid motion-safe:transition-transform motion-safe:duration-300 ${annual && paid ? "-translate-y-1/2" : ""}`}>
              <span>{monthly}</span>
              <span>{equivalent}</span>
            </span>
          </span>
          {paid && <span className="text-sm font-medium text-text-secondary">/mês</span>}
        </div>
        {annual && <p className="mt-2 text-sm text-text-secondary">
          {paid ? `R$ ${formatPrice(plan.annualCents)} cobrados anualmente` : "Sem cobrança anual"}
        </p>}
      </div>

      {/* Benefícios */}
      <div className="my-6 flex-1 border-t border-border pt-5">
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
              ? "bg-primary text-text-inverse"
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

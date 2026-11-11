import { IconLock } from "@tabler/icons-react";

import { plans } from "./plans.data";

import PlansDecorations from "./components/plansDecorations";
import PricingCard from "./components/pricingCard";
import SectionHeader from "../../../reusable/sectionHeader";

export default function PlansSection() {
  return (
    <section
      id="planos"
      aria-labelledby="plans-heading"
      className="
        relative isolate w-full
        overflow-hidden
        bg-surface
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-12 lg:py-28
      "
    >
      {/* Decorações */}
      <PlansDecorations />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <SectionHeader
            id="plans-heading"
            title="Nossos planos"
            highlight="para evoluir juntos."
          />
        </div>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 items-stretch
            gap-8 sm:grid-cols-2
            lg:grid-cols-3 lg:gap-7
            lg:items-center
          "
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Aviso */}
        <div
          id="plans-availability"
          className="
            mx-auto mt-12 flex max-w-3xl
            items-start justify-center gap-3
            rounded-2xl border border-border
            bg-background/80 p-4
            text-center sm:text-left
          "
        >
          <IconLock size={20} className="mt-0.5 shrink-0 text-primary" />

          <p className="text-xs leading-relaxed text-text-secondary sm:text-sm">
            Os planos estão em desenvolvimento. Os preços e benefícios
            apresentados fazem parte do protótipo e poderão sofrer alterações. A
            contratação ainda não está disponível.
          </p>
        </div>
      </div>
    </section>
  );
}

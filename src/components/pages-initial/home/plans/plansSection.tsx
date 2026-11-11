"use client";

import { useState } from "react";
import { IconLock } from "@tabler/icons-react";

import { plans } from "./plans.data";
import type { BillingPeriod } from "./plans.type";

import PlansDecorations from "./components/plansDecorations";
import PricingCard from "./components/pricingCard";
import SectionHeader from "../../../reusable/sectionHeader";

export default function PlansSection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

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
            spacing={false}
          />
          <fieldset className="mt-8" aria-describedby="billing-description">
            <legend className="sr-only">Período de cobrança</legend>
            <div className="relative mx-auto grid w-60 max-w-full grid-cols-2 rounded-full border border-border bg-surface-secondary p-1">
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-200 ease-out motion-reduce:transition-none ${billingPeriod === "annual" ? "translate-x-full" : "translate-x-0"}`}
              />
              <label className="relative cursor-pointer">
                <input
                  className="peer sr-only"
                  type="radio"
                  name="billing-period"
                  value="monthly"
                  checked={billingPeriod === "monthly"}
                  onChange={() => setBillingPeriod("monthly")}
                />
                <span className="flex min-h-11 items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-text-primary transition-colors duration-200 peer-checked:text-text-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-primary motion-reduce:transition-none">Mensal</span>
              </label>
              <label className="relative cursor-pointer">
                <input
                  className="peer sr-only"
                  type="radio"
                  name="billing-period"
                  value="annual"
                  checked={billingPeriod === "annual"}
                  onChange={() => setBillingPeriod("annual")}
                />
                <span className="flex min-h-11 items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-text-primary transition-colors duration-200 peer-checked:text-text-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-primary motion-reduce:transition-none">Anual</span>
              </label>
            </div>
            <p id="billing-description" className="mt-4 text-sm text-text-secondary" role="status" aria-atomic="true">
              {billingPeriod === "annual"
                ? "Cobrança anual total, com 20% de desconto sobre 12 mensalidades. O plano Gratuito continua sem custo."
                : "Valores mensais. O plano Gratuito continua sem custo."}
            </p>
          </fieldset>
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
            <PricingCard key={plan.name} plan={plan} index={index} billingPeriod={billingPeriod} />
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

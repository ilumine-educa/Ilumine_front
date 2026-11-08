import type { Benefit } from "../benefits.types";

type BenefitCardProps = {
  benefit: Benefit;
};

export default function BenefitCard({
  benefit,
}: BenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <article
      className="
        group relative flex flex-col
        rounded-2xl border border-border
        bg-surface/95 p-6
        shadow-sm backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary-light
        hover:shadow-lg
        sm:p-8
      "
    >
      {/* Ícone */}
      <div
        className={`
          mb-6 flex h-14 w-14
          items-center justify-center
          rounded-2xl
          ${benefit.color}
          transition-transform duration-300
          group-hover:scale-110
        `}
      >
        <Icon size={30} stroke={1.8} />
      </div>

      {/* Conteúdo */}
      <h3
        className="
          mb-3 text-xl font-semibold
          text-text-primary
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          text-sm leading-relaxed
          text-text-secondary sm:text-base
        "
      >
        {benefit.description}
      </p>

      {/* Detalhe decorativo */}
      <div
        className="
          mt-7 h-1 w-10 rounded-full
          bg-primary-light
          transition-all duration-300
          group-hover:w-16
          group-hover:bg-primary
        "
      />
    </article>
  );
}
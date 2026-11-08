
import type { ReactNode } from "react";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  number?: string;
  audience?: string;
  color?: string;
  decoration?: string;
  variant?: "impact" | "benefit";
};

export default function InfoCard({
  icon,
  title,
  description,
  number,
  audience,
  color = "bg-primary-light text-primary",
  decoration = "bg-primary-light/40",
  variant = "benefit",
}: InfoCardProps) {
  const isImpact = variant === "impact";

  return (
    <article
      className={`
        group relative flex flex-col
        overflow-hidden rounded-3xl
        border border-border
        transition-all duration-300
        hover:-translate-y-2
        hover:border-primary/30
        hover:shadow-xl
        ${isImpact
          ? "isolate min-h-85 bg-background p-7 sm:p-8"
          : "bg-surface/95 p-6 shadow-sm backdrop-blur-sm sm:p-8 hover:-translate-y-1 hover:shadow-lg"
        }
      `}
    >
      {/* Decoração */}
      {isImpact && (
        <div
          className={`
            pointer-events-none absolute
            -right-12 -top-12 -z-10
            h-40 w-40 rounded-full
            transition-transform duration-500
            group-hover:scale-150
            ${decoration}
          `}
        />
      )}

      {/* Cabeçalho */}
      <div
        className={`
          flex items-center
          ${isImpact ? "justify-between" : ""}
        `}
      >
        {isImpact && number && (
          <span
            className="
              text-sm font-bold
              tracking-wider text-text-secondary/70
            "
          >
            {number}
          </span>
        )}

        <div
          className={`
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-2xl
            ${color}
            transition-transform duration-300
            group-hover:scale-110
            ${isImpact ? "group-hover:rotate-6" : ""}
            ${!isImpact && !number ? "" : ""}
          `}
        >
          {icon}
        </div>
      </div>

      {/* Conteúdo */}
      <div className={isImpact ? "mt-auto pt-12" : "mt-6"}>
        {isImpact && audience && (
          <span
            className="
              text-xs font-bold uppercase
              tracking-wider text-primary
            "
          >
            {audience}
          </span>
        )}

        <h3
          className={`
            font-bold text-text-primary
            ${isImpact
              ? "mt-3 text-2xl leading-snug"
              : "mb-3 text-xl font-semibold"
            }
          `}
        >
          {title}
        </h3>

        <p
          className="
            text-sm leading-relaxed
            text-text-secondary sm:text-base
          "
        >
          {description}
        </p>
      </div>

      {/* Detalhe inferior do benefício */}
      {!isImpact && (
        <div
          className="
            mt-7 h-1 w-10 rounded-full
            bg-primary-light
            transition-all duration-300
            group-hover:w-16
            group-hover:bg-primary
          "
        />
      )}
    </article>
  );
}

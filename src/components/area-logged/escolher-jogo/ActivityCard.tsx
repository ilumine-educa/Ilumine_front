import Link from "next/link";
import type { ComponentType } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

interface ActivityCardProps {
  title: string;
  description: string;
  label: string;
  href: string;

  icon: ComponentType<{
    size?: number;
    stroke?: number;
    className?: string;
  }>;

  background: string;
  iconBackground: string;
  iconColor: string;
  labelColor: string;
}

export default function ActivityCard({
  title,
  description,
  label,
  href,
  icon: Icon,
  background,
  iconBackground,
  iconColor,
  labelColor,
}: ActivityCardProps) {
  return (
    <Link
      href={href}
      className={`
        group relative flex min-h-80 flex-col
        overflow-hidden rounded-4xl
        border border-border/70
        p-7 sm:p-8
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-lg
        ${background}
      `}
    >
      {/* Ícone */}
      <div
        className={`
          flex size-16 items-center justify-center
          rounded-2xl ${iconBackground}
          transition-transform duration-300
          group-hover:rotate-6 group-hover:scale-110
        `}
      >
        <Icon size={34} stroke={1.8} className={iconColor} />
      </div>

      {/* Identificação */}
      <span
        className={`
          mt-6 w-fit rounded-full
          px-3 py-1 text-xs font-semibold
          ${labelColor}
        `}
      >
        {label}
      </span>

      {/* Conteúdo */}
      <h2 className="mt-4 font-heading text-3xl font-bold text-text-primary">
        {title}
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      {/* Ação */}
      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-semibold text-primary">
          Vamos começar?
        </span>

        <div
          className="
            flex size-10 items-center justify-center
            rounded-full bg-white text-primary shadow-sm
            transition-all duration-300
            group-hover:translate-x-1
          "
        >
          <IconArrowUpRight size={22} />
        </div>
      </div>
    </Link>
  );
}
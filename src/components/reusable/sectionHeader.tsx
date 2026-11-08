import type { ReactNode } from "react";
import { IconSparkles } from "@tabler/icons-react";

type SectionHeaderProps = {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  icon?: ReactNode;
  id?: string;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  icon = <IconSparkles size={15} />,
  id,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`
        mx-auto mb-16 max-w-3xl text-center
        ${className}
      `}
    >
      {label && (
        <span
          className="
            inline-flex items-center gap-2
            rounded-full bg-primary-light
            px-4 py-2
            text-xs font-semibold uppercase
            tracking-wider text-primary
          "
        >
          {icon}
          {label}
        </span>
      )}

      <h2
        id={id}
        className="
          mt-5 font-heading
          text-3xl font-semibold
          leading-tight text-text-primary
          sm:text-4xl lg:text-5xl
        "
      >
        {title}

        {highlight && <span className="text-primary"> {highlight}</span>}
      </h2>

      {description && (
        <p
          className="
            mx-auto mt-5 max-w-2xl
            text-sm leading-relaxed
            text-text-secondary sm:text-base
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

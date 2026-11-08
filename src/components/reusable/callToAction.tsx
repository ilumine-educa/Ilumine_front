import Link from "next/link";
import type { ReactNode } from "react";

import {
  IconArrowUpRight,
  IconSparkles,
  IconHeartHandshake,
  IconStar,
} from "@tabler/icons-react";

type CallToActionProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction?: {
    label: string;
    href: string;
  };

  footer?: string;
  footerIcon?: ReactNode;
  badgeIcon?: ReactNode;

  className?: string;
  size?: "default" | "compact";
  layout?: "center" | "horizontal";
};

export default function CallToAction({
  eyebrow,
  title,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  footer,
  footerIcon,
  badgeIcon,
  className = "",
  size = "default",
  layout = "center",
}: CallToActionProps) {
  const compact = size === "compact";
  const horizontal = layout === "horizontal";

  return (
    <section
      className={`
        relative isolate overflow-hidden
        rounded-[2rem] bg-primary
        shadow-xl shadow-primary/15
        ${compact ? "px-6 py-8 sm:px-10 sm:py-10" : "px-6 py-14 sm:px-12 sm:py-20 lg:px-16"}
        ${className}
      `}
    >
      {/* Decorações */}
      <div
        className={`
          pointer-events-none absolute -left-28 -top-32 -z-10
          rounded-full border border-white/10
          ${compact ? "h-56 w-56 border-[22px]" : "h-80 w-80 border-[35px]"}
        `}
      />

      <div
        className={`
          pointer-events-none absolute -bottom-40 -right-24 -z-10
          rounded-full bg-white/10 blur-3xl
          ${compact ? "h-64 w-64" : "h-[26rem] w-[26rem]"}
        `}
      />

      <svg
        className={`
          pointer-events-none absolute -right-12 -top-16 -z-10
          rotate-12 text-white/10
          ${compact ? "h-40 w-40" : "h-48 w-48 sm:h-64 sm:w-64"}
        `}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 5C145 5 190 42 190 95C190 148 151 190 98 190C45 190 10 153 10 101C10 49 49 5 100 5Z"
          stroke="currentColor"
          strokeWidth="18"
        />
      </svg>

      <div className="pointer-events-none absolute right-[14%] top-8 -z-10 hidden rotate-12 text-white/40 sm:block">
        <IconStar size={compact ? 28 : 42} stroke={1.5} />
      </div>

      {!compact && (
        <div className="pointer-events-none absolute bottom-[25%] right-[7%] -z-10 hidden text-white/30 sm:block">
          <IconSparkles size={34} stroke={1.5} />
        </div>
      )}

      {/* Conteúdo */}
      <div
        className={`
          relative z-10 mx-auto
          ${
            horizontal
              ? "flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
              : "max-w-3xl text-center"
          }
        `}
      >
        {/* Textos */}
        <div className={horizontal ? "flex-1" : ""}>
          {eyebrow && (
            <span
              className={`
                inline-flex items-center gap-2
                rounded-full border border-white/20
                bg-white/10 px-4 py-2
                text-xs font-bold uppercase
                tracking-wider text-white
                ${horizontal ? "" : "mx-auto"}
              `}
            >
              {badgeIcon ?? <IconSparkles size={16} />}
              {eyebrow}
            </span>
          )}

          <h2
            className={`
              font-heading font-bold leading-tight
              tracking-tight text-white
              ${compact ? "mt-4 text-2xl sm:text-3xl" : "mt-6 text-3xl sm:text-4xl lg:text-5xl"}
              ${horizontal ? "max-w-2xl" : ""}
            `}
          >
            {title}

            {highlight && (
              <span className="mt-1 block text-white/75">{highlight}</span>
            )}
          </h2>

          <p
            className={`
              leading-relaxed text-white/80
              ${compact ? "mt-3 text-sm sm:text-base" : "mt-5 text-base sm:text-lg"}
              ${horizontal ? "max-w-2xl" : "mx-auto max-w-2xl"}
            `}
          >
            {description}
          </p>
        </div>

        {/* Ações */}
        <div
          className={`
            flex flex-col gap-3
            ${
              horizontal
                ? "w-full shrink-0 sm:flex-row lg:w-auto lg:flex-col xl:flex-row"
                : "mt-8 items-center justify-center sm:flex-row"
            }
            ${compact ? "sm:mt-5 lg:mt-0" : ""}
          `}
        >
          <Link
            href={primaryAction.href}
            className="
              inline-flex min-h-11 items-center justify-center
              gap-2 rounded-full bg-white px-6 py-3
              text-sm font-bold text-primary
              shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:bg-white/90
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            {primaryAction.label}
            <IconArrowUpRight size={18} />
          </Link>

          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="
                inline-flex min-h-11 items-center justify-center
                gap-2 rounded-full border border-white/30
                bg-white/10 px-6 py-3
                text-sm font-bold text-white
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white/20
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-white
              "
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>

      {/* Complemento */}
      {footer && (
        <div
          className={`
            relative z-10 flex items-center gap-2
            text-sm text-white/75
            ${horizontal ? "mt-7 justify-start" : "mt-8 justify-center"}
          `}
        >
          {footerIcon ?? <IconHeartHandshake size={19} />}
          <span>{footer}</span>
        </div>
      )}
    </section>
  );
}

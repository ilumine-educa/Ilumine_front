"use client";

import Link from "next/link";

import {
  IconChevronDown,
  IconChevronRight,
  IconSparkles,
  IconStar,
} from "@tabler/icons-react";

type ProfileOption = {
  id: string;
  label: string;
  description?: string;
};

type ProfileCardProps = {
  title: string;
  description: string;

  href?: string;
  onClick?: () => void;

  options?: ProfileOption[];
  selectedValue?: string;
  onSelect?: (value: string) => void;

  auxiliaryLink?: {
    label: string;
    href: string;
  };

  className?: string;
};

export default function ProfileCard({
  title,
  description,
  href,
  onClick,
  options,
  selectedValue,
  onSelect,
  className = "",
}: ProfileCardProps) {
  const isSelectable = !!options;

  const content = (
    <>
      {/* Decorações */}
      <div className="pointer-events-none absolute -left-24 -top-28 z-0 size-64 rounded-full border-30 border-white/5" />

      <div className="pointer-events-none absolute -bottom-32 -right-16 z-0 size-72 rounded-full bg-white/5 blur-3xl" />

      <IconStar
        size={500}
        stroke={1.5}
        className={`pointer-events-none absolute right-[-200] top-[-300] rotate-45 text-white/5`}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-start gap-4">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-text-inverse">
              {description}
            </p>
          </div>
        </div>

        {/* Seleção */}
        {isSelectable && (
          <div
            className="w-full shrink-0 sm:max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <select
                value={selectedValue ?? ""}
                onChange={(e) => onSelect?.(e.target.value)}
                className="
                  w-full cursor-pointer appearance-none rounded-2xl
                  border border-border bg-surface px-4 py-4 pr-12
                  text-sm font-medium text-text-primary outline-none
                  transition-all
                "
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>

                {options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>

              <IconChevronDown
                size={20}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary"
              />
            </div>
            <p className="text-center text-sm text-text-inverse">
              Clique no card para continuar.
            </p>
          </div>
        )}

        {/* Indicador de navegação */}
        <IconChevronRight
          size={100}
          className={`hidden shrink-0 text-white/15 transition-transform group-hover:translate-x-5 xl:block`}
        />
      </div>
    </>
  );

  const baseClass = `
    group relative isolate block overflow-hidden rounded-4xl
    border border-border bg-primary p-6 shadow-sm
    transition-all duration-300
    hover:translate-x-5 hover:shadow-md
    sm:p-8
    ${onClick || href ? "cursor-pointer" : ""}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <div
      role={onClick ? "link" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      className={baseClass}
    >
      {content}
    </div>
  );
}

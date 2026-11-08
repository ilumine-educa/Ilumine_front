import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

export type NavigationItem = {
  label: string;
  href: string;
};

type SectionNavigationProps = {
  title?: string;
  items: NavigationItem[];
  className?: string;
};

export default function SectionNavigation({
  title = "Nesta página",
  items,
  className = "",
}: SectionNavigationProps) {
  return (
    <nav
      aria-label={title}
      className={`
        rounded-2xl border border-border
        bg-surface p-5 sm:p-6
        ${className}
      `}
    >
      <h2 className="mb-4 font-heading text-lg font-semibold text-text-primary">
        {title}
      </h2>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                group flex items-center justify-between gap-3
                rounded-lg px-3 py-2.5
                text-sm text-text-secondary
                transition-colors
                hover:bg-primary-light hover:text-primary
              "
            >
              <span>{item.label}</span>

              <IconChevronRight
                size={17}
                className="shrink-0 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

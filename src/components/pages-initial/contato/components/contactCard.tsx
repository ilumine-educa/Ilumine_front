
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import type { ContactOption } from "../contact.types";

type ContactCardProps = {
  option: ContactOption;
};

export default function ContactCard({ option }: ContactCardProps) {
  const Icon = option.icon;

  return (
    <article
      className="
        group flex flex-col rounded-3xl
        border border-border bg-surface p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl sm:p-8
      "
    >
      <div
        className={`
          flex h-14 w-14 items-center
          justify-center rounded-2xl
          ${option.color}
          transition-transform duration-300
          group-hover:scale-110
        `}
      >
        <Icon size={28} stroke={1.7} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-text-primary">
        {option.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {option.description}
      </p>

      <Link
        href={option.href}
        className="
          mt-7 inline-flex items-center
          gap-2 text-sm font-bold
          text-primary transition-all
          hover:gap-3
        "
      >
        {option.action}
        <IconArrowUpRight size={18} />
      </Link>
    </article>
  );
}

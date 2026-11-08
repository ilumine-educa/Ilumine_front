import type { ReactNode } from "react";

type PolicyItem = {
  title: string;
  content: ReactNode;
};

type PolicyCardProps = {
  id?: string;
  number?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  items: PolicyItem[];
  className?: string;
};

export default function PolicyCard({
  id,
  number,
  title,
  description,
  icon,
  items,
  className = "",
}: PolicyCardProps) {
  return (
    <section
      id={id}
      className={`
        scroll-mt-32
        rounded-2xl border border-border
        bg-surface p-6 sm:p-10
        ${className}
      `}
    >
      {icon && (
        <div className="mb-8 flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          {icon}
        </div>
      )}

      <div className="mb-6">
        {number && (
          <span className="text-sm font-semibold text-primary">{number}</span>
        )}

        <h2 className="mt-1 font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={`${item.title}-${index}`}>
            <h3 className="font-semibold text-text-primary">{item.title}</h3>

            <div className="mt-2 space-y-3 text-sm leading-7 text-text-secondary sm:text-base">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

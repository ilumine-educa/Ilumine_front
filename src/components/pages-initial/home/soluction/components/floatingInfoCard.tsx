
import type { ReactNode } from "react";

type FloatingInfoCardProps = {
  icon: ReactNode;
  label: string;
  title: string;
  variant?: "primary" | "secondary";
  className?: string;
  animationDuration?: number;
};

export default function FloatingInfoCard({
  icon,
  label,
  title,
  variant = "primary",
  className = "",
  animationDuration = 5,
}: FloatingInfoCardProps) {
  const styles = {
    primary: {
      icon: "bg-primary-light text-primary",
    },
    secondary: {
      icon: "bg-secondary-light text-secondary",
    },
  };

  return (
    <div
      style={{
        animationDuration: `${animationDuration}s`,
      }}
      className={`
        absolute z-30
        hidden items-center gap-3
        rounded-2xl border border-border
        bg-surface p-3 shadow-xl
        animate-[float_ease-in-out_infinite]
        sm:flex
        ${className}
      `}
    >
      <div
        className={`
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-xl
          ${styles[variant].icon}
        `}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs text-text-secondary">
          {label}
        </p>

        <p className="text-sm font-bold text-text-primary">
          {title}
        </p>
      </div>
    </div>
  );
}


"use client";

import { useId, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type AuthFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
};

export default function AuthField({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
  required = true,
  minLength,
}: AuthFieldProps) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-text-primary"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
          className="
            min-h-12 w-full rounded-xl
            border border-border bg-surface
            px-4 py-3 pr-12 text-sm text-text-primary
            outline-none transition-all
            placeholder:text-text-secondary/60
            focus:border-primary focus:ring-2
            focus:ring-primary/10
          "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="
              absolute right-4 top-1/2
              -translate-y-1/2 text-text-secondary
              transition-colors hover:text-primary
            "
          >
            {showPassword ? (
              <IconEyeOff size={20} />
            ) : (
              <IconEye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

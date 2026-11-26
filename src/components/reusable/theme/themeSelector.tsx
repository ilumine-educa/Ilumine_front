
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import {
  IconPalette,
  IconChevronDown,
  IconCheck,
  IconSnowflake,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

type Theme = "cold" | "warm" | "dark";

const themes = [
  {
    id: "cold" as Theme,
    label: "Tons Frios",
    description: "Azul e Laranja",
    icon: IconSnowflake,
  },
  {
    id: "warm" as Theme,
    label: "Tons Quentes",
    description: "Areia, caramelo e marrom",
    icon: IconSun,
  },
  {
    id: "dark" as Theme,
    label: "Modo escuro",
    description: "Marinho e grafite",
    icon: IconMoon,
  },
];

function readTheme(): Theme {
  const saved = localStorage.getItem("ilumine-theme");
  return saved === "warm" || saved === "dark" ? saved : "cold";
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("ilumine-theme-change", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("ilumine-theme-change", listener);
  };
}

export function ThemeSync() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "cold");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
}

export default function ThemeSelector({ floating = false }: { floating?: boolean }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "cold");
  const [open, setOpen] = useState(false);

  function handleThemeChange(newTheme: Theme) {
    localStorage.setItem("ilumine-theme", newTheme);
    window.dispatchEvent(new Event("ilumine-theme-change"));

    setOpen(false);
  }

  return (
    <div className={floating ? "static" : "relative"}>
      {/* Botão do seletor */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Alterar tema"
        aria-haspopup="true"
        aria-expanded={open}
        className="
          flex w-full items-center justify-center gap-2
          rounded-full border border-border
          px-3 py-2.5
          text-text-primary
          transition-all duration-200
          hover:bg-surface-secondary
        "
      >
        <IconPalette size={20} stroke={1.8} />

        <span className="text-sm font-medium">Tema</span>

        <IconChevronDown
          size={16}
          className={`
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Menu de temas */}
      <div
        className={`
          z-[60]
          rounded-2xl border border-border
          bg-surface p-2 shadow-lg
          transition-all duration-200

          ${floating ? "absolute right-0 top-full w-60" : "w-full xl:absolute xl:right-0 xl:top-full"}
          xl:mt-3 xl:w-64

          ${
            open
              ? "visible mt-3 translate-y-0 opacity-100"
              : "invisible absolute h-0 translate-y-2 overflow-hidden opacity-0 xl:h-auto"
          }
        `}
      >
        <div className="px-3 py-2">
          <p className="text-sm font-semibold text-text-primary">
            Aparência
          </p>

          <p className="text-xs text-text-secondary">
            Escolha seu tema preferido
          </p>
        </div>

        <div className="mt-1 flex flex-col gap-1">
          {themes.map((item) => {
            const Icon = item.icon;
            const active = theme === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleThemeChange(item.id)}
                aria-pressed={active}
                className={`
                  flex w-full items-center gap-3
                  rounded-xl p-3 text-left
                  transition-colors duration-200
                  ${
                    active
                      ? "bg-primary-light"
                      : "hover:bg-surface-secondary"
                  }
                `}
              >
                <span
                  className={`
                    flex size-10 shrink-0 items-center
                    justify-center rounded-xl
                    ${
                      active
                        ? "bg-primary text-text-inverse"
                        : "bg-surface-secondary text-text-secondary"
                    }
                  `}
                >
                  <Icon size={21} stroke={1.8} />
                </span>

                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm font-semibold text-text-primary">
                    {item.label}
                  </span>

                  <span className="text-xs text-text-secondary">
                    {item.description}
                  </span>
                </span>

                {active && (
                  <IconCheck
                    size={19}
                    className="shrink-0 text-primary"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

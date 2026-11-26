import type { ReactNode } from "react";

export const dashboardContainer = "mx-auto w-full max-w-[96rem] px-4 sm:px-8 lg:px-10";

export const inputClass = "mt-2 w-full min-w-0 rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
export const buttonClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60 motion-safe:transition-colors";
export const panelClass = "rounded-3xl border border-border bg-surface p-4 shadow-sm sm:p-5";

export function PageHeading({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">Área do responsável</p>
      <h1 className="font-heading text-3xl font-semibold text-text-primary sm:text-4xl lg:text-[clamp(2.25rem,2.4vw,3rem)]">{title}</h1>
      <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">{description}</p>
    </div>
    {action}
  </header>;
}

export function PreferenceToggle({ name, title, description, defaultChecked }: { name: string; title: string; description: string; defaultChecked: boolean }) {
  return <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-border p-4">
    <span><span className="block text-sm font-semibold">{title}</span><span className="mt-1 block text-xs leading-relaxed text-text-secondary">{description}</span></span>
    <input name={name} type="checkbox" defaultChecked={defaultChecked} className="size-5 shrink-0 accent-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" />
  </label>;
}

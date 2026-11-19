import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export const pageWidth = "mx-auto w-full max-w-[84rem] px-4 py-6 sm:px-8 lg:py-10";
export const panel = "rounded-3xl border border-border bg-surface p-5 sm:p-8";
export const button = "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-2 font-semibold text-text-inverse focus-visible:outline-offset-4";

export function Back({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-xl font-semibold text-text-primary hover:underline"><IconArrowLeft size={20} aria-hidden />{children}</Link>;
}

export function Heading({ title, description }: { title: string; description: string }) {
  return <header className="mb-6 sm:mb-9">
    <h1 className="font-heading text-4xl leading-tight sm:text-5xl">{title}</h1>
    <p className="mt-2 max-w-2xl text-lg text-text-primary">{description}</p>
  </header>;
}

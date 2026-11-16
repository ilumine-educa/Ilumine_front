"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { IconChartBar, IconUsers, IconSettings, IconArrowLeft, IconHeart } from "@tabler/icons-react";
import type { AccountSettings, PublicAccount } from "@/src/lib/responsible/types";
import styles from "./dashboardShell.module.css";

export default function DashboardShell({ account, accessibility, children }: { account: PublicAccount; accessibility: AccountSettings["accessibility"]; children: ReactNode }) {
  const pathname = usePathname();
  const base = `/dashboard/${account.id}`;
  const links = [
    { href: base, label: "Monitoramento", icon: IconChartBar },
    { href: `${base}/filhos`, label: "Filhos", icon: IconUsers },
    { href: `${base}/configuracoes`, label: "Configurações", icon: IconSettings },
  ];
  return <div className={`${styles.shell} mx-auto max-w-[96rem] px-4 py-6 text-text-primary sm:px-8 sm:py-8 lg:px-10`} data-high-contrast={accessibility.highContrast} data-large-text={accessibility.largeText} data-reduced-motion={accessibility.reducedMotion}>
    <a href="#painel-responsavel" className="sr-only focus:not-sr-only focus:inline-block focus:rounded-xl focus:bg-surface focus:p-3">Pular para o conteúdo</a>
    <div className="grid min-w-0 gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8">
      <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl border border-border bg-surface p-4 shadow-sm lg:p-5">
          <div className="mb-5 hidden items-center gap-3 lg:flex">
            <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-light/40 font-heading text-xl text-primary">{account.name.trim().charAt(0)}</span>
            <div className="min-w-0"><p className="text-xs text-text-secondary">Seu espaço de cuidado</p><p className="break-words text-sm font-semibold">{account.name}</p></div>
          </div>
          <nav aria-label="Área do responsável" className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:transition-colors ${pathname === href ? "bg-primary text-text-inverse shadow-sm" : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"}`}><Icon className="size-5 shrink-0" aria-hidden="true" />{label}</Link>)}
          </nav>
          <Link href={`/escolha-perfil/${account.id}`} className="mt-5 flex min-h-11 items-center gap-2 border-t border-border pt-4 text-sm text-text-secondary hover:text-primary"><IconArrowLeft className="size-4" aria-hidden="true" />Trocar de perfil</Link>
        </div>
        <div className="mt-5 hidden rounded-3xl bg-primary-light/20 p-5 lg:block"><IconHeart className="mb-3 size-6 text-primary" aria-hidden="true" /><p className="font-heading text-lg">Cada descoberta importa.</p><p className="mt-2 text-xs leading-relaxed text-text-secondary">Acompanhe com carinho, respeitando o ritmo e as escolhas de cada criança.</p></div>
      </aside>
      <div id="painel-responsavel" tabIndex={-1} className="min-w-0 space-y-7 outline-none">
        {children}
        <footer className="pb-2 pt-3 text-xs text-text-secondary">Ilumine.Educa · Aprender, acolher e acompanhar.</footer>
      </div>
    </div>
  </div>;
}

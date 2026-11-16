"use client";

import { useState } from "react";
import Link from "next/link";
import { IconActivity, IconClock, IconCalendar, IconChartBar, IconArrowRight, IconSparkles } from "@tabler/icons-react";
import type { ChildProfile } from "@/src/lib/responsible/types";
import { PageHeading, buttonClass, inputClass, panelClass } from "./dashboardUi";

export default function Monitoring({ profiles: children, responsibleId, today }: { profiles: ChildProfile[]; responsibleId: number; today: string }) {
  const [childId, setChildId] = useState(children[0]?.id ?? "");
  const [period, setPeriod] = useState("7");
  const child = children.find((item) => item.id === childId);
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(`${today}T12:00:00`);
    date.setDate(date.getDate() - 6 + index);
    return { label: date.toLocaleDateString("pt-BR", { weekday: "short" }), date: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) };
  });
  return <>
    <PageHeading title="Monitoramento" description="Um olhar atento para as descobertas, sem pressa para aprender. Acompanhe cada criança no seu próprio ritmo." />
    <div className="flex items-start gap-4 rounded-3xl border border-primary/15 bg-primary-light/20 p-5">
      <IconSparkles aria-hidden="true" className="size-6 shrink-0 text-primary" />
      <div><h2 className="font-heading text-xl">Pequenos passos, novas possibilidades</h2><p className="mt-1 text-sm leading-relaxed text-text-secondary">{children.length ? "Os perfis da sua família estão reunidos aqui. Escolha uma criança para acompanhar seu espaço." : "Comece criando o primeiro perfil da sua família. Você pode personalizar os interesses e apoios de cada criança."}</p></div>
    </div>
    <section className={panelClass} aria-label="Filtros de monitoramento">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold" htmlFor="monitor-child">Criança<select id="monitor-child" value={childId} disabled={!children.length} onChange={(event) => setChildId(event.target.value)} className={inputClass}>{!children.length && <option value="">Nenhuma criança cadastrada</option>}{children.map((item) => <option key={item.id} value={item.id}>{item.name} · {item.age} anos</option>)}</select></label>
        <label className="text-sm font-semibold" htmlFor="monitor-period">Período<select id="monitor-period" value={period} onChange={(event) => setPeriod(event.target.value)} className={inputClass}><option value="7">Últimos 7 dias</option><option value="30">Últimos 30 dias</option></select></label>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-text-secondary">A coleta de atividades e tempo de uso ainda não está integrada. Nenhum resultado é estimado ou gerado automaticamente.</p>
    </section>
    <div className="grid gap-4 md:grid-cols-3" aria-live="polite">
      {[
        { title: "Atividades realizadas", icon: IconActivity, color: "bg-success/10 text-success", note: "As descobertas terão seu espaço aqui." },
        { title: "Tempo de uso", icon: IconClock, color: "bg-primary-light/30 text-primary", note: "Ainda não há duração registrada." },
        { title: "Dias com atividade", icon: IconCalendar, color: "bg-secondary-light/40 text-secondary-hover", note: "Cada dia é uma nova oportunidade." },
      ].map(({ title, icon: Icon, color, note }) => <article key={title} className={panelClass}><div className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${color}`}><Icon aria-hidden="true" className="size-6" /></div><h2 className="text-base font-semibold">{title}</h2><p className="my-3 font-heading text-4xl" aria-label="Sem registros">—</p><p className="text-xs font-medium text-text-secondary">Sem registros nos últimos {period} dias</p><p className="mt-2 text-xs leading-relaxed text-text-secondary">{note}</p></article>)}
    </div>
    <section className={panelClass} aria-labelledby="week-title">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2"><h2 id="week-title" className="font-heading text-xl sm:text-2xl">Rotina da semana</h2><span className="text-xs text-text-secondary">Últimos 7 dias · {days[0].date} a {days[6].date}</span></div>
      <ol className="grid grid-cols-7 gap-1 sm:gap-3">{days.map((day) => <li key={day.date} className="min-w-0 text-center"><span className="text-xs text-text-secondary">{day.label}</span><div className="my-2 flex min-h-12 items-center justify-center rounded-xl border border-border bg-background text-text-muted" aria-label={`${day.date}: sem registros`}>—</div><span className="text-[0.65rem] text-text-secondary sm:text-xs">{day.date}</span></li>)}</ol>
      <p className="mt-5 text-xs leading-relaxed text-text-secondary">A ausência de registros na plataforma não indica ausência de aprendizagem ou de atividades fora dela.</p>
    </section>
    <section className={panelClass} aria-labelledby="history-title">
      <h2 id="history-title" className="font-heading text-xl sm:text-2xl">Histórico de atividades</h2>
      <div className="mt-5 flex flex-col items-start gap-5 rounded-2xl bg-background p-5 sm:flex-row sm:items-center"><span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-primary"><IconChartBar className="size-7" aria-hidden="true" /></span><div className="min-w-0 flex-1"><h3 className="font-semibold">{child ? `O espaço de ${child.name} está pronto` : "Vamos conhecer sua família?"}</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">{child ? "Você já pode acessar a atividade de comunicação. O registro automático do histórico será disponibilizado em uma próxima etapa." : "Adicione uma criança para organizar seu perfil, interesses e preferências."}</p></div></div>
      <Link className={`${buttonClass} mt-5`} href={child ? `/escolher-jogo/${responsibleId}/${child.id}/comunicacao` : `/dashboard/${responsibleId}/filhos?novo=1`}>{child ? "Explorar comunicação" : "Adicionar criança"}<IconArrowRight className="size-5" aria-hidden="true" /></Link>
    </section>
  </>;
}

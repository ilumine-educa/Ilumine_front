import Link from "next/link";
import { IconCheck, IconLock, IconPlayerPlay, IconRoute } from "@tabler/icons-react";
import { Back, pageWidth, panel } from "@/src/components/area-logged/escolher-jogo/childUi";
import { disciplines } from "@/src/lib/trilha/lessons";
import { loadTrail } from "@/src/lib/trilha/progress";

export default async function MapPage({ params }: PageProps<"/escolher-jogo/[idResp]/[idKid]/trilha/[disciplina]">) {
  const { idResp, idKid, disciplina } = await params;
  const { subject, completed } = await loadTrail(idResp, idKid, disciplina);
  const course = disciplines[subject];
  const base = `/escolher-jogo/${idResp}/${idKid}/trilha`;
  const total = course.phases.length;

  return <div className={pageWidth}>
    <Back href={base}>Escolher disciplina</Back>
    <div className="grid items-start gap-5 lg:grid-cols-[16rem_minmax(0,1fr)]">
      <nav aria-label="Disciplinas" className={panel + " flex flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col"}>
        {Object.entries(disciplines).map(([slug, item]) =>
          <Link key={slug} href={base + "/" + slug} aria-current={slug === subject ? "page" : undefined}
            className="rounded-xl border border-border px-4 py-3 font-semibold aria-[current=page]:border-primary aria-[current=page]:bg-primary-light/40">{item.name}</Link>)}
      </nav>
      <div className="min-w-0 space-y-5">
        <header className="rounded-3xl border border-border bg-primary-light/35 p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl">{course.name}</h1>
          <p className="my-3 text-lg">{course.game}</p>
          <label className="flex max-w-md flex-wrap items-center gap-3 text-sm font-semibold">
            {completed} de {total} fases concluídas
            <progress value={completed} max={total} className="h-3 w-36 accent-primary" />
          </label>
        </header>
        {course.units.map((unit, index) => <section key={unit} className={panel}>
          <div className="flex items-center gap-3">
            <IconRoute className="text-primary" aria-hidden />
            <h2 className="text-xl sm:text-2xl">Unidade {index + 1} · {unit}</h2>
          </div>
          <ol start={index * 2 + 1} className="mx-auto mt-6 max-w-xl space-y-3 border-l-4 border-dashed border-primary-light pl-3 sm:pl-6">
            {course.phases.slice(index * 2, index * 2 + 2).map((phase, step) => {
              const number = index * 2 + step;
              const locked = number > completed;
              const done = number < completed;
              const Icon = locked ? IconLock : done ? IconCheck : IconPlayerPlay;
              const content = <>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface shadow-sm"><Icon aria-hidden /></span>
                <span><strong className="block">Fase {number + 1} · {phase.label}</strong>
                  <span className="text-sm">{locked ? "Conclua a fase anterior" : done ? "Concluída · Jogar de novo" : "Começar fase"}</span>
                </span>
              </>;
              const style = "flex items-center gap-3 rounded-2xl border border-border p-3 sm:p-4 ";
              return <li key={phase.label} className={step === 1 ? "ml-5 sm:ml-12" : ""}>
                {locked ? <div className={style + "bg-surface-secondary"}>{content}</div> :
                  <Link className={style + "bg-primary-light/40 hover:border-primary"} href={`${base}/${subject}/${number + 1}`}>{content}</Link>}
              </li>;
            })}
          </ol>
        </section>)}
      </div>
    </div>
  </div>;
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { IconPlus, IconPencil, IconHeart, IconAdjustments, IconAccessible, IconUsers } from "@tabler/icons-react";
import type { ChildProfile } from "@/src/lib/responsible/types";
import { PageHeading, PreferenceToggle, buttonClass, inputClass, panelClass } from "./dashboardUi";

export default function ChildrenManager({ profiles: children, responsibleId, createInitially }: { profiles: ChildProfile[]; responsibleId: number; createInitially: boolean }) {
  const [editing, setEditing] = useState<ChildProfile | "new" | null>(createInitially ? "new" : null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const addButton = useRef<HTMLButtonElement>(null);
  const profile = editing && editing !== "new" ? editing : undefined;

  function open(profile: ChildProfile | "new") {
    setEditing(profile);
    // O formulário fica na própria página, com foco no título ao abrir.
    requestAnimationFrame(() => formHeading.current?.focus());
  }

  function close() {
    setEditing(null);
    addButton.current?.focus();
  }

  return <>
    <PageHeading title="Filhos" description="Conheça e personalize o espaço de cada criança. Diferentes interesses, diferentes jeitos de aprender." action={<button ref={addButton} type="button" className={`${buttonClass} shrink-0 self-start`} onClick={() => open("new")}><IconPlus className="size-5" aria-hidden="true" />Adicionar criança</button>} />
    {editing && <section className={panelClass} aria-labelledby="child-form-title">
      <h2 id="child-form-title" ref={formHeading} tabIndex={-1} className="font-heading text-2xl outline-none">{profile ? `Editar perfil de ${profile.name}` : "Um novo perfil para sua família"}</h2>
      <p className="mt-2 text-sm text-text-secondary">Preencha apenas o necessário. Interesses e apoios são opcionais.</p>
      <div key={profile?.id ?? "new"} className="mt-6 space-y-6">
        <fieldset className="space-y-6 disabled:opacity-60">
          <legend className="sr-only">Informações da criança</legend>
          <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
            <label className="text-sm font-medium">Nome da criança<input autoComplete="off" name="name" required maxLength={80} defaultValue={profile?.name ?? ""} className={inputClass} /></label>
            <label className="text-sm font-medium">Idade (anos)<input name="age" type="number" required min={0} max={17} step={1} defaultValue={profile?.age ?? ""} className={inputClass} /></label>
          </div>
          <label className="block text-sm font-medium">Interesses<input name="interests" maxLength={409} defaultValue={profile?.interests.join(", ") ?? ""} placeholder="Separe os interesses por vírgulas" aria-describedby="interests-hint" className={inputClass} /><span id="interests-hint" className="mt-2 block text-xs font-normal text-text-secondary">Até 10 interesses, com até 40 caracteres cada.</span></label>
          <fieldset className="space-y-3"><legend className="mb-3 font-heading text-xl">Preferências individuais</legend><PreferenceToggle name="sound" title="Áudio nas atividades" description="Preferência por atividades com apoio sonoro." defaultChecked={profile?.preferences.sound ?? true} /><label className="block text-sm font-medium">Ritmo preferido<select name="pace" defaultValue={profile?.preferences.pace ?? "livre"} className={inputClass}><option value="livre">Livre, no próprio ritmo</option><option value="pausado">Com pausas entre as etapas</option></select></label></fieldset>
          <fieldset className="space-y-3"><legend className="mb-3 font-heading text-xl">Apoios de acessibilidade</legend>
            <PreferenceToggle name="largeText" title="Texto ampliado" description="Preferência por letras maiores." defaultChecked={profile?.accessibility.largeText ?? false} />
            <PreferenceToggle name="highContrast" title="Maior contraste" description="Preferência por elementos mais destacados." defaultChecked={profile?.accessibility.highContrast ?? false} />
            <PreferenceToggle name="reducedMotion" title="Menos movimento" description="Preferência por menos animações e estímulos visuais." defaultChecked={profile?.accessibility.reducedMotion ?? false} />
          </fieldset>
          <p className="rounded-2xl bg-primary-light/20 p-4 text-xs leading-relaxed text-text-secondary">Estas escolhas ficam salvas somente neste perfil. A aplicação automática das preferências e dos apoios nos jogos ainda está em desenvolvimento.</p>
        </fieldset>
        <p className="text-sm text-text-secondary">Demonstração local. Os perfis não serão salvos.</p>
        <div className="flex flex-wrap gap-3"><button className={buttonClass} type="button" disabled>Salvar perfil</button><button type="button" onClick={close} className="min-h-11 rounded-xl border border-border px-5 py-3 text-sm font-medium hover:bg-background">Cancelar</button></div>
      </div>
    </section>}
    <div className="flex items-start gap-3 rounded-2xl bg-primary-light/20 p-5"><IconUsers className="size-6 shrink-0 text-primary" aria-hidden="true" /><p className="text-sm leading-relaxed"><strong>Cada criança, uma experiência.</strong> As escolhas de um perfil não alteram os demais.</p></div>
    <section aria-labelledby="family-title">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 id="family-title" className="font-heading text-2xl">Perfis da família</h2><span className="rounded-full bg-surface-secondary px-3 py-1 text-xs text-text-secondary">{children.length} {children.length === 1 ? "criança" : "crianças"}</span></div>
      {children.length ? <div className="grid gap-5 xl:grid-cols-2">{children.map((child) => <article key={child.id} className={`${panelClass} flex min-w-0 flex-col`}>
        <div className="flex items-center gap-4"><span aria-hidden="true" className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-light/35 font-heading text-2xl text-primary">{child.name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("")}</span><div className="min-w-0"><h3 className="break-words font-heading text-2xl">{child.name}</h3><p className="mt-1 text-xs text-text-secondary">{child.age} {child.age === 1 ? "ano" : "anos"}</p></div></div>
        <dl className="my-6 divide-y divide-border text-sm">
          <div className="py-4"><dt className="flex items-center gap-2 font-semibold"><IconHeart className="size-5 text-primary" aria-hidden="true" />Interesses</dt><dd className="mt-2 break-words text-text-secondary">{child.interests.length ? child.interests.join(" · ") : "Ainda não informados."}</dd></div>
          <div className="py-4"><dt className="flex items-center gap-2 font-semibold"><IconAdjustments className="size-5 text-primary" aria-hidden="true" />Preferências</dt><dd className="mt-2 text-text-secondary">{child.preferences.sound ? "Com áudio" : "Sem áudio"} · {child.preferences.pace === "livre" ? "Ritmo livre" : "Com pausas"}</dd></div>
          <div className="py-4"><dt className="flex items-center gap-2 font-semibold"><IconAccessible className="size-5 text-primary" aria-hidden="true" />Acessibilidade</dt><dd className="mt-2 text-text-secondary">{[child.accessibility.largeText && "Texto ampliado", child.accessibility.highContrast && "Maior contraste", child.accessibility.reducedMotion && "Menos movimento"].filter(Boolean).join(" · ") || "Nenhum apoio selecionado."}</dd></div>
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-3"><button type="button" onClick={() => open(child)} className={buttonClass} aria-label={`Editar perfil de ${child.name}`}><IconPencil className="size-4" aria-hidden="true" />Editar perfil</button><Link href={`/dashboard/${responsibleId}`} className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-primary hover:underline">Monitoramento</Link></div>
      </article>)}</div> : <div className={`${panelClass} py-10 text-center`}><IconUsers className="mx-auto size-10 text-primary" aria-hidden="true" /><h3 className="mt-4 font-heading text-2xl">Há espaço para novas descobertas</h3><p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">Sua família ainda não tem perfis infantis cadastrados. Use “Adicionar criança” para começar.</p></div>}
    </section>
  </>;
}

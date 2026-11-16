"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconShieldCheck } from "@tabler/icons-react";
import type { AccountSettings, PublicAccount } from "@/src/lib/responsible/types";
import { PageHeading, PreferenceToggle, buttonClass, inputClass, panelClass } from "./dashboardUi";

export default function SettingsForm({ account, settings }: { account: PublicAccount; settings: AccountSettings }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true); setMessage(""); setError("");
    try {
      const response = await fetch("/api/responsavel/configuracoes", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("name"), notifications: { platform: form.has("platform"), reminders: form.has("reminders") }, accessibility: { largeText: form.has("largeText"), highContrast: form.has("highContrast"), reducedMotion: form.has("reducedMotion") } }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Não foi possível salvar.");
      setMessage("Configurações salvas. Os ajustes de acessibilidade foram aplicados à área do responsável.");
      router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : "Falha de conexão. Tente novamente."); }
    finally { setBusy(false); }
  }
  return <>
    <PageHeading title="Configurações" description="Seu espaço, do seu jeito. Cuide da conta e escolha como prefere usar a área do responsável." />
    <form onSubmit={save} className="space-y-6">
      <fieldset disabled={busy} className="space-y-6 disabled:opacity-60">
        <legend className="sr-only">Configurações da conta</legend>
        <section className={panelClass} aria-labelledby="account-title">
          <h2 id="account-title" className="font-heading text-2xl">Conta do responsável</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Seu nome<input name="name" autoComplete="name" defaultValue={settings.name} required maxLength={80} className={inputClass} /></label><label className="text-sm font-medium">E-mail da conta<input type="email" readOnly value={account.email} className={`${inputClass} opacity-80`} aria-describedby="account-note" /></label></div>
          <p id="account-note" className="mt-4 text-xs leading-relaxed text-text-secondary">O nome pode ser atualizado. Alteração de e-mail e senha ainda não está disponível nesta versão.</p>
        </section>
        <div className="grid gap-6 xl:grid-cols-2">
          <section className={panelClass} aria-labelledby="notifications-title"><h2 id="notifications-title" className="font-heading text-2xl">Notificações</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-text-secondary">Suas preferências ficam salvas. O envio de notificações e lembretes ainda não está disponível.</p><div className="space-y-3"><PreferenceToggle name="platform" title="Novidades da plataforma" description="Preferência por receber atualizações da Ilumine." defaultChecked={settings.notifications.platform} /><PreferenceToggle name="reminders" title="Lembretes de atividades" description="Preferência por receber lembretes no futuro." defaultChecked={settings.notifications.reminders} /></div></section>
          <section className={panelClass} aria-labelledby="privacy-title"><span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-success/10 text-success"><IconShieldCheck aria-hidden="true" className="size-6" /></span><h2 id="privacy-title" className="font-heading text-2xl">Privacidade e dados</h2><p className="mt-3 text-sm leading-relaxed text-text-secondary">Os perfis desta área pertencem à sua conta. Não há compartilhamento com outras contas ou profissionais nesta versão.</p><p className="mt-3 text-xs leading-relaxed text-text-secondary">Esta versão usa armazenamento local no servidor. Exportação e exclusão de conta ainda não estão disponíveis.</p><Link href="/termos-e-privacidade" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline underline-offset-4">Consultar política de privacidade</Link></section>
        </div>
        <section className={panelClass} aria-labelledby="accessibility-title"><h2 id="accessibility-title" className="font-heading text-2xl">Acessibilidade para você</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-text-secondary">Estes ajustes se aplicam à área do responsável depois de salvar. Os perfis infantis têm suas próprias preferências.</p><div className="grid gap-3 xl:grid-cols-2"><PreferenceToggle name="highContrast" title="Maior contraste" description="Reforça textos secundários e bordas." defaultChecked={settings.accessibility.highContrast} /><PreferenceToggle name="largeText" title="Texto ampliado" description="Aumenta textos, campos e controles desta área." defaultChecked={settings.accessibility.largeText} /><PreferenceToggle name="reducedMotion" title="Reduzir movimentos" description="Desativa transições e animações desta área." defaultChecked={settings.accessibility.reducedMotion} /></div><p className="mt-5 text-xs text-text-secondary">Idioma: Português (Brasil). A preferência de redução de movimento do seu dispositivo também é respeitada.</p></section>
      </fieldset>
      {error && <p role="alert" className="rounded-2xl border border-error bg-surface p-4 text-sm">{error}</p>}
      <div className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"><p role="status" aria-live="polite" className="text-sm leading-relaxed">{message || "Revise suas escolhas. As alterações serão aplicadas ao salvar."}</p><button type="submit" disabled={busy} className={`${buttonClass} shrink-0`}>{busy ? "Salvando…" : "Salvar configurações"}</button></div>
    </form>
  </>;
}

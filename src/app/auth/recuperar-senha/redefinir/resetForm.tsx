"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthField from "@/src/components/reusable/auth/authField";
import { resetPassword } from "../actions";
import { base, button, Heading, link, LoginLink, useRecovery } from "../recoveryFlow";

export default function ResetForm({ token, reason }: { token?: string; reason?: string }) {
  const router = useRouter();
  const { setCompleted, setRequest } = useRecovery();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  return <>
    <Heading title="Redefinir senha">{reason ?? "Escolha uma senha com pelo menos 8 caracteres."}</Heading>
    <form method="post" onSubmit={async event => {
      event.preventDefault();
      if (!token) return;
      const form = new FormData(event.currentTarget);
      const password = String(form.get("password") ?? "");
      const confirmation = String(form.get("confirmation") ?? "");
      if (password !== confirmation) return setError("As senhas precisam ser iguais.");
      setError("");
      setBusy(true);
      try {
        const failure = await resetPassword(token, password, confirmation);
        if (failure) return setError(failure);
        setCompleted(true);
        setRequest(null);
        router.replace(base + "/concluida");
      } catch {
        setError("Não foi possível confirmar a alteração. Tente novamente.");
      } finally {
        setBusy(false);
      }
    }}>
      <fieldset className="space-y-5" disabled={!token || busy}>
        <AuthField label="Nova senha" name="password" type="password" autoComplete="new-password" minLength={8} placeholder="Digite a nova senha" />
        <AuthField label="Confirmar nova senha" name="confirmation" type="password" autoComplete="new-password" minLength={8} placeholder="Repita a nova senha" />
        {error && <p role="alert">{error}</p>}
        <button className={button}>{busy ? "Salvando…" : "Salvar nova senha"}</button>
      </fieldset>
    </form>
    <Link href={base} className={link + " mt-3"}>Solicitar outro link</Link>
    <LoginLink />
  </>;
}

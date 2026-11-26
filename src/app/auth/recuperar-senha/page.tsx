"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthField from "@/src/components/reusable/auth/authField";
import { requestLink } from "./actions";
import { base, button, Heading, LoginLink, useRecovery } from "./recoveryFlow";

export default function ForgotPassword() {
  const router = useRouter();
  const { setRequest, setCompleted } = useRecovery();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return <>
    <Heading title="Esqueci minha senha">Informe o e-mail que você usa para entrar na Ilumine.Educa.</Heading>
    <form method="post" className="space-y-5" onSubmit={async event => {
      event.preventDefault();
      const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
      setBusy(true);
      setError("");
      setCompleted(false);
      try {
        const result = await requestLink(email);
        if (result === "invalid") return setError("Confira o endereço de e-mail.");
        if (result === "error") return setError("Não foi possível solicitar o link. Tente novamente.");
        setRequest({ email, accepted: result === "accepted" });
        router.push(base + "/verificacao");
      } catch {
        setError("Não foi possível conectar ao servidor. Tente novamente.");
      } finally {
        setBusy(false);
      }
    }}>
      <AuthField label="E-mail da conta" name="email" type="email" autoComplete="email" placeholder="seuemail@exemplo.com" />
      {error && <p role="alert">{error}</p>}
      <button className={button} disabled={busy}>{busy ? "Solicitando…" : "Solicitar recuperação"}</button>
    </form>
    <LoginLink />
  </>;
}

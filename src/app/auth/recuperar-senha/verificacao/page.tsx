"use client";

import { useState } from "react";
import Link from "next/link";
import { requestLink } from "../actions";
import { base, button, Heading, link, LoginLink, useRecovery } from "../recoveryFlow";

export default function VerifyEmail() {
  const { request, setRequest } = useRecovery();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function resend() {
    if (!request) return;
    setBusy(true);
    setMessage("");
    try {
      const result = await requestLink(request.email);
      setRequest({ ...request, accepted: result === "accepted" });
      setMessage(result === "accepted" ? "Solicitação de reenvio recebida." :
        result === "unavailable" ? "O reenvio continua indisponível. Nenhum link foi enviado." : "Falha ao solicitar o reenvio. Tente novamente.");
    } catch {
      setMessage("Falha de conexão. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }
  return <>
    <Heading title="Verificação de e-mail">
      {!request ? "Informe o e-mail da conta para solicitar um link de recuperação." :
        request.accepted ? `Se houver uma conta para ${request.email}, confira sua caixa de entrada e a pasta de spam. Abra o link para escolher sua nova senha.` :
        "O envio de links de recuperação ainda está indisponível. Nenhum e-mail foi enviado."}
    </Heading>
    {request && <button type="button" className={button} onClick={resend} disabled={busy}>{busy ? "Solicitando…" : "Reenviar link"}</button>}
    <p role="status" className="mt-3 text-sm">{message}</p>
    <Link href={base} className={link}>{request ? "Alterar e-mail" : "Informar e-mail"}</Link>
    <LoginLink />
  </>;
}

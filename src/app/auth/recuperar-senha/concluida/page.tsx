"use client";

import Link from "next/link";
import { base, button, Heading, link, useRecovery } from "../recoveryFlow";

export default function RecoveryComplete() {
  const { completed } = useRecovery();
  return <>
    <Heading title={completed ? "Recuperação concluída" : "Recuperação de conta"}>
      {completed ? "Sua senha foi alterada. Use a nova senha para entrar na sua conta." :
        "Para recuperar sua conta, comece solicitando um link por e-mail."}
    </Heading>
    <Link className={button} href="/auth/login">Voltar ao login</Link>
    {!completed && <Link className={link + " mt-3"} href={base}>Solicitar recuperação</Link>}
  </>;
}

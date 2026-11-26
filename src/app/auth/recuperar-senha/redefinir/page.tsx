import { Suspense } from "react";
import { getRecoveryService } from "@/src/lib/auth/recoveryService";
import ResetForm from "./resetForm";

type Props = { searchParams: Promise<{ token?: string | string[] }> };

async function ResetWithLink({ searchParams }: Props) {
  const { token } = await searchParams;
  const service = getRecoveryService();
  let reason = "A redefinição de senha ainda está indisponível.";
  let validToken: string | undefined;
  if (service && typeof token === "string" && token.length > 0 && token.length <= 2048) {
    try {
      if (await service.isTokenValid(token)) validToken = token;
      else reason = "Este link é inválido ou expirou. Solicite outro link.";
    } catch {
      reason = "Não foi possível verificar o link. Tente novamente.";
    }
  } else if (service) {
    reason = "Abra o link de recuperação recebido por e-mail.";
  }
  return validToken ? <ResetForm token={validToken} /> : <ResetForm reason={reason} />;
}

export default function ResetPage(props: Props) {
  return <Suspense fallback={<p role="status">Verificando o link…</p>}><ResetWithLink {...props} /></Suspense>;
}

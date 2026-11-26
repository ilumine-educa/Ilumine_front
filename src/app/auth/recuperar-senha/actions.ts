"use server";

import { getRecoveryService } from "@/src/lib/auth/recoveryService";

export async function requestLink(email: string) {
  if (typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "invalid";
  }
  const service = getRecoveryService();
  if (!service) return "unavailable";
  try {
    await service.requestLink(email.trim());
    return "accepted";
  } catch {
    return "error";
  }
}

export async function resetPassword(token: string, password: string, confirmation: string) {
  if (typeof password !== "string" || password.length < 8 || password.length > 256 || password !== confirmation) {
    return "Use de 8 a 256 caracteres e confirme a mesma senha nos dois campos.";
  }
  const service = getRecoveryService();
  if (!service) return "A redefinição de senha ainda está indisponível.";
  if (typeof token !== "string" || !token || token.length > 2048) return "Link inválido.";
  try {
    if (await service.resetPassword(token, password)) return null;
    return "Este link é inválido ou expirou. Solicite outro link.";
  } catch {
    return "Não foi possível confirmar a alteração. Tente novamente.";
  }
}

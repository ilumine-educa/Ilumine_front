import "server-only";

// O provedor deverá limitar tentativas e responder da mesma forma para e-mails
// cadastrados e desconhecidos. O link aponta para /auth/recuperar-senha/redefinir?token=...
interface RecoveryService {
  requestLink(email: string): Promise<void>;
  isTokenValid(token: string): Promise<boolean>;
  // Revalidar e consumir o token de uso único ao persistir a senha e revogar sessões.
  resetPassword(token: string, password: string): Promise<boolean>;
}

export function getRecoveryService(): RecoveryService | null {
  return null;
}

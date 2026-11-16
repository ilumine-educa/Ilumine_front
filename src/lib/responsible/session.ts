import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { users } from "@/src/database/users";
import { getFamily, getStore, updateStore } from "./store";

export const sessionCookie = "ilumine-session";
const hash = (token: string) => createHash("sha256").update(token).digest("hex");

export async function createSession(userId: number, remember: boolean, oldToken?: string) {
  const token = randomBytes(32).toString("hex");
  const seconds = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 12;
  await updateStore((store) => {
    store.sessions = store.sessions.filter((session) => session.expiresAt > Date.now() && session.tokenHash !== (oldToken ? hash(oldToken) : ""));
    store.sessions.push({ tokenHash: hash(token), userId, expiresAt: Date.now() + seconds * 1000 });
  });
  return { token, seconds };
}

export async function getCurrentUser() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const store = await getStore();
  const session = store.sessions.find((item) => item.tokenHash === hash(token) && item.expiresAt > Date.now());
  const user = session && users.find((item) => item.id === session.userId);
  return user ? { id: user.id, name: user.name, email: user.email } : null;
}

export async function requireFamily(responsibleId: string) {
  const user = await getCurrentUser();
  if (!user) redirect("/auth/login");
  if (String(user.id) !== responsibleId) notFound();
  return getFamily(user.id);
}

export async function revokeSession() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (token) await updateStore((store) => {
    store.sessions = store.sessions.filter((session) => session.tokenHash !== hash(token));
  });
}

// APIs de escrita aceitam somente JSON da mesma origem. O ID da conta
// sempre vem da sessão, nunca de um campo enviado pelo navegador.
export function isSameOrigin(request: Request) {
  return request.headers.get("origin") === new URL(request.url).origin;
}

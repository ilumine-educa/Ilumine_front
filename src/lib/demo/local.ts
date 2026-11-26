import "server-only";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import type { AccountSettings, ChildProfile, PublicAccount } from "../responsible/types";

export async function isLocalDemo() {
  if (process.env.NODE_ENV !== "development") return false;
  const host = (await headers()).get("host") ?? "";
  return /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(host);
}

const account: PublicAccount = { id: 1, name: "Família Demo", email: "familia@example.invalid" };
const accessibility = { largeText: false, highContrast: false, reducedMotion: false };
const settings: AccountSettings = {
  name: account.name, notifications: { platform: false, reminders: false }, accessibility,
};
const children: ChildProfile[] = [{
  id: "lia", responsibleId: String(account.id), name: "Lia", age: 6, interests: ["Animais"],
  preferences: { sound: false, pace: "livre" }, accessibility,
}];

export const demoProfilePath = `/escolha-perfil/${account.id}`;

export async function getDemoFamily(responsibleId: string) {
  if (!await isLocalDemo()) redirect("/auth/login");
  if (responsibleId !== String(account.id)) notFound();
  return { account, settings, children };
}
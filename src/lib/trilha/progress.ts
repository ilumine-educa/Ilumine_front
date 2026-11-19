import "server-only";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/src/lib/responsible/session";
import { getStore } from "@/src/lib/responsible/store";
import { isSubject } from "./lessons";

export async function loadTrail(idResp: string, idKid: string, slug: string) {
  const account = await getCurrentUser();
  if (!account || String(account.id) !== idResp || !isSubject(slug)) notFound();
  const store = await getStore();
  const child = store.children.find(item => item.responsibleId === idResp && item.id === idKid);
  if (!child) notFound();
  return { child, subject: slug, completed: store.trails?.[idKid]?.[slug] ?? 0 };
}

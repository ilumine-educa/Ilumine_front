import "server-only";
import { notFound } from "next/navigation";
import { getDemoFamily } from "@/src/lib/demo/local";
import { isSubject } from "./lessons";

export async function loadTrail(idResp: string, idKid: string, slug: string) {
  const family = await getDemoFamily(idResp);
  const child = family.children.find(item => item.responsibleId === idResp && item.id === idKid);
  if (!child || !isSubject(slug)) notFound();
  return { child, subject: slug, completed: 0 };
}

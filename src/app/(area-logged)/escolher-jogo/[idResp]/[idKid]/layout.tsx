import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { requireFamily } from "@/src/lib/responsible/session";

export default async function ChildAreaLayout({ children, params }: { children: ReactNode; params: Promise<{ idResp: string; idKid: string }> }) {
  const { idResp, idKid } = await params;
  const family = await requireFamily(idResp);
  if (!family.children.some((child) => child.id === idKid)) notFound();
  return children;
}

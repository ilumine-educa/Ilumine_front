import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { requireFamily } from "@/src/lib/responsible/session";

export default async function ChildAreaLayout({ children, params }: { children: ReactNode; params: Promise<{ idResp: string; idKid: string }> }) {
  const { idResp, idKid } = await params;
  const family = await requireFamily(idResp);
  const profile = family.children.find(child => child.id === idKid);
  if (!profile) notFound();
  return <div className={profile.accessibility.highContrast
    ? "[--text-secondary:var(--text-primary)] [--border:var(--text-primary)]"
    : undefined}>
    {children}
  </div>;
}

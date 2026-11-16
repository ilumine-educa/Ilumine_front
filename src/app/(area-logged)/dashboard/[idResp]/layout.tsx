import type { ReactNode } from "react";
import { requireFamily } from "@/src/lib/responsible/session";
import DashboardShell from "@/src/components/area-logged/responsible/dashboardShell";

export default async function ResponsibleLayout({ children, params }: { children: ReactNode; params: Promise<{ idResp: string }> }) {
  const { idResp } = await params;
  const { account, settings } = await requireFamily(idResp);
  return <DashboardShell account={account} accessibility={settings.accessibility}>{children}</DashboardShell>;
}

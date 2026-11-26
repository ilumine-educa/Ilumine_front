import type { ReactNode } from "react";
import { getDemoFamily } from "@/src/lib/demo/local";
import DashboardShell from "@/src/components/area-logged/responsible/dashboardShell";

export default async function ResponsibleLayout({ children, params }: { children: ReactNode; params: Promise<{ idResp: string }> }) {
  const { idResp } = await params;
  const { account, settings } = await getDemoFamily(idResp);
  return <DashboardShell account={account} accessibility={settings.accessibility}>{children}</DashboardShell>;
}

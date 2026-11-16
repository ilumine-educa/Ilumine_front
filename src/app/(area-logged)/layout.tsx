import { Suspense, type ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/lib/responsible/session";

import DashboardNavbar from "@/src/components/area-logged/template/dashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Suspense fallback={<p role="status" className="p-8 text-center">Carregando seu espaço…</p>}><AuthenticatedArea>{children}</AuthenticatedArea></Suspense>;
}

async function AuthenticatedArea({ children }: DashboardLayoutProps) {
  if (!await getCurrentUser()) redirect("/auth/login");
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
    </div>
  );
}

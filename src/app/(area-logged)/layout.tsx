import { Suspense, type ReactNode } from "react";
import { redirect } from "next/navigation";
import { isLocalDemo } from "@/src/lib/demo/local";

import DashboardNavbar from "@/src/components/area-logged/template/dashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Suspense fallback={<p role="status" className="p-8 text-center">Carregando seu espaço…</p>}><DemoArea>{children}</DemoArea></Suspense>;
}

async function DemoArea({ children }: DashboardLayoutProps) {
  if (!await isLocalDemo()) redirect("/auth/login");
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
    </div>
  );
}

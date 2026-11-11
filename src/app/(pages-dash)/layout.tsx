
import type { ReactNode } from "react";

import DashboardNavbar from "@/src/components/dashboard/template/dashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      <main className="min-h-[calc(100vh-5rem)]">
        {children}
      </main>
    </div>
  );
}

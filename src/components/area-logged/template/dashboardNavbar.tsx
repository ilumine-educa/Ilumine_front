"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { dashboardContainer } from "../responsible/dashboardUi";
import { profileContainer } from "../profile/profileLayout";
import LogoutButton from "./logoutButton";
import { childContainer } from "../escolher-jogo/childUi";

import ThemeSelector from "../../reusable/theme/themeSelector";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const isGameSelection = pathname.split("/").includes("escolher-jogo");

  const isDashboard = pathname.startsWith("/dashboard/");
  const container = isDashboard ? dashboardContainer : isGameSelection ? childContainer : profileContainer;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface backdrop-blur-md">
      <nav className={`flex items-center justify-between ${container} ${isDashboard ? "h-16" : "h-20"}`}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Ilumine"
            width={160}
            height={55}
            priority
            className="brand-logo h-auto w-28 sm:w-36 lg:w-44"
          />
        </Link>

        {/* Ações */}
        <div className="relative flex items-center gap-3">
          <ThemeSelector floating />

          {!isGameSelection && (
            <LogoutButton />
          )}
        </div>
      </nav>
    </header>
  );
}

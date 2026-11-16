"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LogoutButton from "./logoutButton";

import ThemeSelector from "../../reusable/theme/themeSelector";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const isGameSelection = pathname.split("/").includes("escolher-jogo");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Ilumine"
            width={160}
            height={55}
            priority
            className="h-auto w-28 sm:w-36 lg:w-44"
          />
        </Link>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <ThemeSelector />

          {!isGameSelection && (
            <LogoutButton />
          )}
        </div>
      </nav>
    </header>
  );
}

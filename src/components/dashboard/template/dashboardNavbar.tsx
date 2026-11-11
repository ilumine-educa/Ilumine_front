import Link from "next/link";

import { IconSparkles, IconLogout } from "@tabler/icons-react";
import Image from "next/image";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md">
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
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text-secondary transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500"
          >
            <IconLogout size={18} />
            <span>Sair</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

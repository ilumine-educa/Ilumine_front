import Link from "next/link";
import { IconLogout } from "@tabler/icons-react";

export default function LogoutButton() {
  return <Link href="/auth/login" replace className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold text-text-secondary hover:bg-surface-secondary hover:text-error">
    <IconLogout className="size-5" aria-hidden="true" /> Sair
  </Link>;
}

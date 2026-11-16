"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconLogout } from "@tabler/icons-react";

export default function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function logout() {
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error();
      router.replace("/auth/login");
      router.refresh();
    } catch { setError("Não foi possível sair. Tente novamente."); setBusy(false); }
  }
  return <div className="relative"><button type="button" onClick={logout} disabled={busy} className="flex min-h-11 items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-semibold text-text-secondary hover:bg-surface-secondary hover:text-error focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-60"><IconLogout className="size-5" aria-hidden="true" /><span>{busy ? "Saindo…" : "Sair"}</span></button>{error && <p role="alert" className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-error bg-surface p-3 text-xs">{error}</p>}</div>;
}

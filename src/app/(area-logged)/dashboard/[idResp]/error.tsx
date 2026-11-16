"use client";

export default function DashboardError({ reset }: { reset: () => void }) {
  return <div className="m-6 rounded-3xl border border-border bg-surface p-8"><h1 className="font-heading text-2xl">Não foi possível abrir seu espaço</h1><p className="my-4 text-sm text-text-secondary">Seus dados não foram substituídos. Tente carregar novamente.</p><button onClick={reset} className="rounded-xl bg-primary px-5 py-3 text-text-inverse">Tentar novamente</button></div>;
}

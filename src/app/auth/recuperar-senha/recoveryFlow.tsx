"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Link from "next/link";

export const base = "/auth/recuperar-senha";
export const button = "flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover disabled:opacity-60";
export const link = "inline-flex min-h-11 items-center justify-center text-sm font-semibold text-primary hover:underline";
type Request = { email: string; accepted: boolean };
type Flow = {
  request: Request | null; setRequest(value: Request | null): void;
  completed: boolean; setCompleted(value: boolean): void;
};
const Context = createContext<Flow | null>(null);

export function RecoveryFlow({ children }: { children: ReactNode }) {
  // Os dados da navegação expiram ao sair do fluxo ou recarregar a página.
  const [request, setRequest] = useState<Request | null>(null);
  const [completed, setCompleted] = useState(false);
  return <Context.Provider value={{ request, setRequest, completed, setCompleted }}>{children}</Context.Provider>;
}

export function useRecovery() {
  const flow = useContext(Context);
  if (!flow) throw new Error("RecoveryFlow ausente");
  return flow;
}

export function Heading({ title, children }: { title: string; children: ReactNode }) {
  return <header className="mb-8">
    <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">{title}</h2>
    <p className="mt-3 leading-relaxed text-text-secondary">{children}</p>
  </header>;
}

export function LoginLink() {
  return <Link href="/auth/login" className={link + " mt-5 w-full"}>Voltar ao login</Link>;
}

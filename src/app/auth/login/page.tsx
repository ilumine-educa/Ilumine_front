"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AuthField from "@/src/components/reusable/auth/authField";
import { IconArrowRight, IconLoader2 } from "@tabler/icons-react";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.user) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      setError(data.message || "E-mail ou senha inválidos.");
    } catch {
      setError("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Que bom ter você de volta!
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
          Entre na sua conta para continuar sua jornada com o Ilumine.
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <AuthField
          label="E-mail"
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
        />

        <div>
          <AuthField
            label="Senha"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
          />

          <div className="mt-3 flex justify-end">
            <Link
              href="/recuperar-senha"
              className="text-xs font-semibold text-primary transition-colors hover:text-secondary"
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary">
          <input
            type="checkbox"
            name="remember"
            className="size-4 accent-primary"
          />
          Manter conectado
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? (
            <>
              <IconLoader2 size={18} className="animate-spin" />
              Entrando...
            </>
          ) : (
            <>
              Entrar na minha conta
              <IconArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 border-t border-border pt-6 text-center">
        <p className="text-sm text-text-secondary">
          Ainda não tem uma conta?{" "}
          <Link
            href="/auth/cadastro"
            className="font-semibold text-primary hover:text-secondary"
          >
            Criar conta
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-8 block text-center text-sm font-medium text-text-secondary transition-colors hover:text-primary"
      >
        Voltar para a página inicial
      </Link>
    </>
  );
}

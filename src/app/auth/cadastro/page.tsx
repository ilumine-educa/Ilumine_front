import Link from "next/link";

import AuthField from "@/src/components/reusable/auth/authField";

import { IconArrowRight } from "@tabler/icons-react";

export default function CadastroPage() {
  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Vamos começar?
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
          Crie sua conta e faça parte de uma aprendizagem mais inclusiva.
        </p>
      </div>

      <form className="space-y-5">
        <AuthField
          label="E-mail"
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
        />

        <AuthField
          label="Senha"
          name="password"
          type="password"
          placeholder="Crie uma senha"
          autoComplete="new-password"
          minLength={8}
        />

        <AuthField
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          placeholder="Digite sua senha novamente"
          autoComplete="new-password"
          minLength={8}
        />

        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-text-secondary">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-0.5 size-4 shrink-0 accent-primary"
          />

          <span>
            Li e concordo com os{" "}
            <Link
              href="/termos-e-privacidade"
              target="_blank"
              className="font-semibold text-primary hover:text-secondary"
            >
              Termos de Uso e Política de Privacidade
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-secondary"
        >
          Criar minha conta
          <IconArrowRight size={18} />
        </button>
      </form>

      <div className="mt-8 border-t border-border pt-6 text-center">
        <p className="text-sm text-text-secondary">
          Já possui uma conta?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-primary hover:text-secondary"
          >
            Fazer login
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-8 text-center text-sm font-medium text-text-secondary hover:text-primary"
      >
        Voltar para a página inicial
      </Link>
    </>
  );
}

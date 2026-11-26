import { Suspense } from "react";
import { demoProfilePath, isLocalDemo } from "@/src/lib/demo/local";
import Link from "next/link";

import AuthField from "@/src/components/reusable/auth/authField";
import { IconArrowRight } from "@tabler/icons-react";

async function DemoAccess() {
  if (!await isLocalDemo()) return <p>O login estará disponível após a integração com a API.</p>;
  return <Link href={demoProfilePath} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-text-inverse hover:bg-primary-hover">
    Entrar na demonstração local <IconArrowRight size={18} />
  </Link>;
}

export default function LoginPage() {
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

      <div className="space-y-5">
        <fieldset disabled className="space-y-5">
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
                href="/auth/recuperar-senha"
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
        </fieldset>
        <Suspense fallback={null}><DemoAccess /></Suspense>
      </div>

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

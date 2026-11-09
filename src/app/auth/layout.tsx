
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Painel de apresentação */}
        <section className="relative hidden overflow-hidden bg-primary p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">

          {/* Decoração */}
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border-[50px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full border-[50px] border-white/5" />

          <Link href="/" className="relative z-10 w-fit">
            <Image
              src="/logo.png"
              alt="Ilumine Educa"
              width={160}
              height={55}
              className="h-12 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          <div className="relative z-10 max-w-lg">

            <h1 className="font-heading text-white text-4xl font-bold leading-tight xl:text-5xl">
              Cada criança aprende de um jeito.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 xl:text-lg">
              Uma jornada de aprendizagem mais inclusiva, acessível e
              pensada para respeitar o ritmo de cada criança.
            </p>
          </div>

          <p className="relative z-10 text-sm text-white/60">
            Ilumine Educa © {new Date().getFullYear()}
          </p>
        </section>

        {/* Conteúdo das páginas */}
        <section className="flex min-h-screen flex-col px-5 py-8 sm:px-10 lg:justify-center lg:px-12 xl:px-20">

          {/* Logo mobile */}
          <Link href="/" className="mb-10 flex justify-center lg:hidden">
            <Image
              src="/logo.png"
              alt="Ilumine Educa"
              width={150}
              height={55}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
            {children}
          </div>

        </section>
      </div>
    </main>
  );
}

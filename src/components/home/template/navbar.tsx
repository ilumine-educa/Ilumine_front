import Image from "next/image";
import Link from "next/link";

export default function HomeNavbar() {
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Planos", href: "#planos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="relative z-10 bg-surface">
      <div className="mx-auto flex min-h-20 max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-3">
      {/* Logo */}
      <Link href="/" aria-label="Ilumine Educa - início" className="shrink-0">
        <Image
          src="/logo.png"
          alt="Ilumine"
          width={160}
          height={55}
          loading="eager"
          className="h-auto w-28 sm:w-36 lg:w-44"
        />
      </Link>

      {/* Navegação */}
      <nav aria-label="Navegação principal" className="hidden lg:block">
        <ul
          className="
          flex items-center gap-6
          text-sm font-medium
          xl:gap-7
        "
        >
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={item.href === "#inicio" ? "page" : undefined}
                className="
                  relative py-2
                  text-text-primary
                  transition-colors duration-200
                  hover:text-primary

                  after:absolute after:bottom-0
                  after:left-0 after:h-0.5
                  after:w-0 after:rounded-full
                  after:bg-primary
                  after:transition-all
                  hover:after:w-full aria-[current=page]:after:w-full
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ações */}
      <div
        className="
        flex shrink-0 items-center gap-2
        text-xs font-semibold
        sm:text-sm
      "
      >
        <Link
          href="/login"
          className="
            inline-flex items-center justify-center
            whitespace-nowrap rounded-full
            border border-secondary
            px-4 py-2.5
            text-secondary
            transition-all duration-200
            hover:bg-secondary hover:text-white
            lg:px-5
          "
        >
          Entrar
        </Link>

        <Link
          href="/cadastro"
          className="
            inline-flex items-center justify-center
            whitespace-nowrap rounded-full
            bg-secondary
            px-4 py-2.5
            text-white
            transition-all duration-200
            hover:bg-secondary-hover
            hover:shadow-md
            lg:px-5
          "
        >
          Criar Conta
        </Link>
      </div>
      </div>
    </header>
  );
}

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
    <header
      className="
      flex w-full items-center justify-between gap-5
      bg-surface
      px-5 py-3
      lg:px-20 lg:py-8
    "
    >
      {/* Logo */}
      <Link href="/" aria-label="Ilumine Educa - início" className="shrink-0">
        <Image
          src="/logo.png"
          alt="Ilumine"
          width={160}
          height={55}
          priority
          className="h-auto w-28 lg:w-40"
        />
      </Link>

      {/* Navegação */}
      <nav aria-label="Navegação principal" className="hidden lg:block">
        <ul
          className="
          flex items-center gap-6
          text-sm font-medium
          xl:gap-9 xl:text-base
        "
        >
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
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
                  hover:after:w-full
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
            lg:px-6
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
            lg:px-6
          "
        >
          Criar Conta
        </Link>
      </div>
    </header>
  );
}

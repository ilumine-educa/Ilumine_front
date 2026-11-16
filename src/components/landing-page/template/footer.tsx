import Image from "next/image";
import Link from "next/link";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconArrowUpRight,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Solução", href: "/#solucao" },
  { label: "Quem somos", href: "/quem-somos/" },
  { label: "Contato", href: "/contato/" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: IconBrandInstagram,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: IconBrandLinkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: IconBrandYoutube,
  },
];

export default function HomeFooter() {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div
        className="
          mx-auto w-full
          px-4 py-12
          sm:px-6 sm:py-14
          lg:px-12 lg:py-10
          xl:px-20
        "
      >
        {/* Conteúdo principal */}
        <div
          className="
            grid grid-cols-1 gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr]
            lg:gap-12
          "
        >
          {/* Logo e descrição */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Ilumine Educa - início"
              className="inline-block"
            >
              <Image
                src="/logo-vertical.png"
                alt="Ilumine Educa"
                width={160}
                height={55}
                className="h-auto w-32 sm:w-36"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Um projeto dedicado à alfabetização inclusiva, respeitando as
              diferentes formas e ritmos de aprendizagem de cada criança.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-primary">
              Navegação
            </h2>

            <nav aria-label="Navegação do rodapé">
              <ul className="mt-4 flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
                        inline-flex min-h-9 items-center
                        text-sm text-text-secondary
                        transition-colors duration-200
                        hover:text-primary
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Projeto */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-secondary">
              O projeto
            </h2>

            <p className="mt-4 max-w-56 text-sm leading-relaxed text-text-secondary">
              Educação, inclusão e respeito ao ritmo de aprendizagem de cada
              criança.
            </p>

            <Link
              href="/quem-somos/"
              className="
                mt-3 inline-flex min-h-9 items-center gap-1
                text-sm font-semibold text-secondary
                transition-colors hover:text-secondary-hover
              "
            >
              Conheça o Ilumine
              <IconArrowUpRight size={16} />
            </Link>

            <span className="mt-3 block text-xs text-text-secondary">
              Projeto em desenvolvimento
            </span>
          </div>

          {/* Redes sociais */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-primary">
              Nossas Redes
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Acompanhe nossas novidades e iniciativas.
            </p>

            <ul className="mt-3 flex flex-col gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acesse nosso ${name}`}
                    className="
                      group inline-flex min-h-9
                      items-center gap-2
                      text-sm text-text-secondary
                      transition-colors duration-200
                      hover:text-primary
                    "
                  >
                    <Icon
                      size={19}
                      stroke={1.8}
                      className="
                        transition-transform duration-200
                        group-hover:-translate-y-0.5
                      "
                    />

                    {name}

                    <IconArrowUpRight
                      size={14}
                      className="
                        opacity-0 transition-opacity
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          className="
            mt-12 flex flex-col gap-4
            border-t border-border pt-6
            text-sm text-text-secondary
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Ilumine Educa. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-5 items-center">
            <Link
              href="/termos-e-privacidade"
              className="
              inline-flex min-h-9 items-center gap-1
              text-text-secondary
              transition-colors hover:text-primary
            "
            >
              Termos de Uso e Aviso de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateScrolled = () => {
      frame = 0;

      setScrolled((previous) =>
        previous ? window.scrollY > 8 : window.scrollY > 32,
      );
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Solução", href: "/#solucao" },
    { label: "Quem somos", href: "/quem-somos/" },
    { label: "Nossa Equipe", href: "/equipe/" },
    { label: "Contato", href: "/contato/" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      data-scrolled={scrolled}
      className="
    fixed z-50
    top-4 inset-x-6 lg:inset-x-[10%]
    rounded-3xl bg-surface shadow-lg

    data-[scrolled=true]:top-0
    data-[scrolled=true]:inset-x-0
    data-[scrolled=true]:rounded-none
    data-[scrolled=true]:shadow-sm

    motion-safe:transition-[top,inset-inline,border-radius,box-shadow]
    motion-safe:duration-600
    motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
  "
    >
      <div
        className="
        mx-auto flex w-full min-h-20
        items-center justify-between gap-3
        px-4 py-3 sm:px-6
        lg:px-8 2xl:px-20
      "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ilumine Educa - início"
          className="shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Ilumine"
            width={160}
            height={55}
            priority
            className="h-auto w-28 sm:w-36 lg:w-44"
          />
        </Link>

        {/* Navegação Desktop */}
        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul
            className="
            flex items-center gap-5 whitespace-nowrap
            font-medium 2xl:gap-7
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

        {/* Ações Desktop */}
        <div
          className="
          hidden shrink-0 items-center gap-2
          text-sm font-semibold xl:flex
        "
        >
          <Link
            href="/auth/login"
            className="
              inline-flex items-center justify-center
              whitespace-nowrap rounded-full
              border border-secondary
              px-5 py-2.5 text-secondary
              transition-all duration-200
              hover:bg-secondary hover:text-white
            "
          >
            Entrar
          </Link>

          <Link
            href="/auth/cadastro"
            className="
              inline-flex items-center justify-center
              whitespace-nowrap rounded-full
              bg-secondary px-5 py-2.5
              text-white
              transition-all duration-200
              hover:bg-secondary-hover
              hover:shadow-md
            "
          >
            Criar Conta
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="
            flex items-center justify-center
            rounded-xl p-2
            text-primary
            transition-colors
            hover:bg-primary-light
            xl:hidden
          "
        >
          {menuOpen ? (
            <IconX size={28} stroke={2} />
          ) : (
            <IconMenu2 size={28} stroke={2} />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`
          absolute left-0 top-full w-full
          overflow-hidden bg-surface
          shadow-md xl:hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "visible max-h-125 opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <nav aria-label="Navegação mobile" className="px-5 pb-6 pt-3">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block rounded-lg px-4 py-3
                    font-medium text-text-primary
                    transition-colors
                    hover:bg-primary-light
                    hover:text-primary
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Ações Mobile */}
          <div
            className="
            mt-4 flex flex-col gap-3
            border-t border-border pt-5
          "
          >
            <Link
              href="/auth/login"
              onClick={closeMenu}
              className="
                flex items-center justify-center
                rounded-full border border-secondary
                px-5 py-3 font-semibold
                text-secondary
                transition-colors
                hover:bg-secondary hover:text-white
              "
            >
              Entrar
            </Link>

            <Link
              href="/auth/cadastro"
              onClick={closeMenu}
              className="
                flex items-center justify-center
                rounded-full bg-secondary
                px-5 py-3 font-semibold
                text-white
                transition-colors
                hover:bg-secondary-hover
              "
            >
              Criar Conta
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

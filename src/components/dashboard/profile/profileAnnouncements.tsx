import Link from "next/link";

import {
  IconBrandInstagram,
  IconArrowUpRight,
  IconSparkles,
  IconPhone,
  IconShieldCheck,
} from "@tabler/icons-react";
import FeatureBanner from "../../reusable/card/featureBanner";

const announcements = [
  {
    title: "Siga nossas redes!",
    description:
      "Fique por dentro de dicas, novidades e conteúdos sobre aprendizagem infantil.",
    link: "https://www.instagram.com/",
    linkLabel: "Conhecer Instagram",
    icon: IconBrandInstagram,
    color: "bg-primary-light text-primary",
  },
  {
    title: "Conheça nossos planos",
    description:
      "Descubra recursos e possibilidades para tornar a experiência de aprendizagem ainda melhor.",
    link: "/planos",
    linkLabel: "Ver planos",
    icon: IconSparkles,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Fique por dentro!",
    description:
      "Estamos sempre trabalhando para trazer novas experiências e ferramentas para o Ilumine.",
    link: "/novidades",
    linkLabel: "Ver novidades",
    icon: IconPhone,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Sua privacidade importa!",
    description:
      "Saiba como cuidamos dos seus dados e protegemos as informações da sua família durante o uso do Ilumine Educa.",
    link: "/termos-de-privacidade",
    linkLabel: "Saiba mais sobre os termos",
    icon: IconShieldCheck,
    color: "bg-primary-light text-primary",
  },
];

export default function ProfileAnnouncements() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
      {/* Card principal */}
      <FeatureBanner
        title="Comece já!"
        description="Descubra novas possibilidades para acompanhar o desenvolvimento e a aprendizagem da sua criança."
        image="/images/escolha-perfil/pai_e_filha.png"
        imageAlt="Pai sorrindo com sua filha"
        backgroundColor="bg-surface"
        titleColor="text-text-primary"
        descriptionColor="text-text-secondary/85"
        decorationColor="text-decoration-blue/30"
        minHeight=""
        imageClassName="-rotate-30 right-0 -top-9 md:rotate-0 md:left-0 md:top-72 "
      />

      {/* Cards secundários */}
      <div className="grid gap-5 sm:grid-cols-2">
        {announcements.map((announcement) => {
          const Icon = announcement.icon;
          const isExternal = announcement.link.startsWith("https://");

          return (
            <article
              key={announcement.title}
              className="
            group relative flex min-h-64 flex-col
            overflow-hidden rounded-4xl
            border border-border bg-surface p-6 sm:p-7
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          "
            >
              <Icon
                size={300}
                stroke={1.7}
                className="pointer-events-none absolute
            -right-30 -top-20 rotate-30 text-decoration-blue/30"
              />

              <div className="z-10 flex flex-col flex-1">
                {/* Conteúdo */}
                <h3 className="mt-7 max-w-40 font-heading text-xl font-bold text-text-primary">
                  {announcement.title}
                </h3>

                <p className="flex-1 mt-3 text-sm leading-relaxed text-text-secondary">
                  {announcement.description}
                </p>

                {/* Link */}
                <div className="mt-auto pt-6">
                  <Link
                    href={announcement.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="
                inline-flex items-center gap-2
                text-sm font-semibold text-primary
                transition-colors hover:text-secondary
              "
                  >
                    {announcement.linkLabel}
                    <IconArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

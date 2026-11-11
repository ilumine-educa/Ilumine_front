import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconHeartHandshake, IconUsers } from "@tabler/icons-react";
import SectionHeader from "@/src/components/reusable/sectionHeader";
import TeamMemberCard from "@/src/components/equipe/teamMemberCard";
import { teamMembers, teamPhoto } from "@/src/components/equipe/teamData";

export const metadata: Metadata = {
  title: "Nossa Equipe | Ilumine.Educa",
  description:
    "Conheça as pessoas por trás da Ilumine.Educa e nosso compromisso com uma educação mais inclusiva, acessível e personalizada.",
};

export default function TeamPage() {
  return (
    <div className="bg-background pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-primary">
            <IconUsers size={18} aria-hidden="true" />
            Nossa Equipe
          </span>
          <h1 className="mt-5 font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-primary">
            Conheça <span className="text-primary">nossa equipe</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-text-primary sm:text-xl">
            As pessoas por trás da Ilumine.Educa
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Acreditamos na força da colaboração para tornar a aprendizagem mais
            inclusiva, acessível e personalizada. Nosso compromisso é construir
            uma educação que respeite cada jeito de aprender.
          </p>
        </header>

        <figure className="mt-10 sm:mt-12">
          <div className="relative isolate flex min-h-64 w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-primary-light/25 sm:aspect-[3/1]">
            {teamPhoto.src ? (
              <Image
                src={teamPhoto.src}
                alt={teamPhoto.alt ?? "Equipe da Ilumine.Educa reunida"}
                fill
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover"
              />
            ) : (
              <>
                <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-28 -z-10 size-80 rounded-full border-32 border-primary-light/40" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-12 -z-10 size-64 rounded-full bg-secondary-light/60" />
                <div className="flex flex-col items-center px-6 py-10 text-center">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-surface text-primary shadow-sm">
                    <IconUsers size={32} stroke={1.5} aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-heading text-2xl text-text-primary sm:text-3xl">
                    Um espaço para estarmos juntos
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">Foto da equipe em breve</p>
                </div>
              </>
            )}
          </div>
          <figcaption className="mt-4 text-center text-sm text-text-secondary">
            Diferentes olhares. Um propósito em comum.
          </figcaption>
        </figure>

        <section aria-labelledby="integrantes" className="py-14 sm:py-20">
          <SectionHeader
            id="integrantes"
            title="Quem faz"
            highlight="acontecer"
            description="Conheça as pessoas que colaboram para construir uma educação com mais possibilidades para cada criança."
            className="mx-auto"
            spacing={false}
          />
          <ul className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 sm:mt-10 sm:gap-6">
            {teamMembers.map((member) => (
              <li key={member.id} className="min-w-0">
                <TeamMemberCard member={member} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="juntos" className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <IconHeartHandshake size={32} className="text-primary" aria-hidden="true" />
            <h2 id="juntos" className="mt-4 font-heading text-3xl leading-tight text-text-primary">
              Juntos, abrimos espaço para aprender.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              Cada contribuição importa. Com colaboração, escuta e respeito às
              diferenças, podemos construir caminhos mais inclusivos para a educação.
            </p>
          </div>
          <Link href="/quem-somos/" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-text-inverse hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-safe:transition-colors">
            Conheça a Ilumine.Educa
            <IconArrowRight size={18} className="shrink-0" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
}

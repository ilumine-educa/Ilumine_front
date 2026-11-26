import Image from "next/image";
import SectionHeader from "@/src/components/reusable/sectionHeader";
import TeamMemberCard from "@/src/components/landing-page/equipe/teamMemberCard";
import { teamMembers, teamPhoto } from "@/src/components/landing-page/equipe/teamData";
import Hero from "@/src/components/reusable/hero";
import CallToAction from "@/src/components/reusable/cta/callToAction";

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Conheça"
        highlight="nossa equipe"
        description="Acreditamos na força da colaboração para tornar a aprendizagem mais
            inclusiva, acessível e personalizada. Nosso compromisso é construir
            uma educação que respeite cada jeito de aprender."
        fullHeight
        visual={
          <>
            <div className="relative flex min-h-96 w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-primary-light/25">
              <Image
                src={teamPhoto.src}
                alt={teamPhoto.alt}
                fill
                sizes="(min-width: 1921px) min(56.667vw, 1451px), (min-width: 1152px) 1088px, 100vw"
                className="object-cover"
              />
            </div>
          </>
        }
      />
      <div className="py-16 ">
        <div className="flex flex-col gap-10 mx-auto max-w-6xl px-6 lg:px-8">
          <section aria-labelledby="integrantes">
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

          <CallToAction
            title="Juntos, abrimos espaço para"
            highlight="aprender."
            description="Cada contribuição importa. Com colaboração, escuta e respeito às
                diferenças, podemos construir caminhos mais inclusivos para a
                educação."
            primaryAction={{
              label: "Conheça-nos",
              href: "/sobre",
            }}
            size="compact"
            layout="horizontal"
          />
        </div>
      </div>
    </>
  );
}

import Hero from "@/src/components/reusable/hero";

import AboutHeroVisual from "@/src/components/quem-somos/components/aboutHeroVisual";
import EssenceSection from "@/src/components/quem-somos/components/essenceSection";
import PurposeSection from "@/src/components/quem-somos/components/purposeSection";
import JourneySection from "@/src/components/quem-somos/components/journeySection";
import CallToAction from "@/src/components/reusable/cta/callToAction";

export default function quemSomosPage() {
  return (
    <>
      {/* HERO */}
      <Hero
        title={<>Acreditamos em uma educação que</>}
        highlight={<>respeita cada jeito de aprender.</>}
        description={
          <>
            O Ilumine nasceu com um propósito: tornar a aprendizagem mais
            inclusiva, acessível e personalizada, reconhecendo o potencial de
            cada criança.
          </>
        }
        actions={[
          {
            label: "Conheça nossa proposta",
            href: "/#sobre",
          },
        ]}
        decorations
        fullHeight
        visual={<AboutHeroVisual />}
      />

      {/* SEÇÕES */}
      <EssenceSection />
      <PurposeSection />
      <JourneySection />

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-12">
        <CallToAction
          title="Cada criança tem seu jeito."
          highlight="E todo jeito merece espaço para evoluir."
          description="Conheça o Ilumine e descubra como
                  podemos construir uma experiência
                  de aprendizagem mais inclusiva."
          primaryAction={{
            label: "Começar agora",
            href: "/cadastro",
          }}
        />
      </section>
    </>
  );
}

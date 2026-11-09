import Image from "next/image";
import BenefitsSection from "../../components/home/benefits/benefitsSection";
import CallToActionSection from "../../components/home/cta/CallToActionSection";
import ImpactSection from "../../components/home/impact/impactSection";
import PlansSection from "../../components/home/plans/plansSection";
import SolutionSection from "../../components/home/soluction/soluctionSection";
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Hero from "../../components/reusable/hero";
export default function homePage() {
  return (
    <>
      <Hero
        title={<>Cada criança</>}
        highlight={<>aprende de um jeito.</>}
        description={
          <>
            Com a{" "}
            <strong className="font-semibold text-text-primary">
              Ilumine.Educa
            </strong>
            , o aprendizado se torna mais acessível, divertido e personalizado.
          </>
        }
        fullHeight
        decorations
        wave
        actions={[
          {
            label: "Comece agora",
            href: "/cadastro",
            icon: <IconArrowNarrowRight size={20} />,
          },
          {
            label: "Saiba mais",
            href: "/quem-somos",
            icon: <IconPlayerPlay size={20} />,
            variant: "secondary",
          },
        ]}
        visual={
          <div className="relative isolate mx-auto aspect-[1.05] w-full">
            {/* Forma decorativa */}
            <div
              className="
              absolute inset-[8%] rounded-full
              bg-primary-light/40 blur-3xl
            "
              aria-hidden="true"
            />

            <Image
              src="/images/hero/crianca-tablet.png"
              alt="Criança sorrindo enquanto utiliza um tablet."
              width={1254}
              height={1254}
              sizes="(max-width: 767px) min(77vw, 430px), 36vw"
              priority
              className="
              absolute bottom-0 left-0
              h-auto w-[84%] object-contain
            "
            />
          </div>
        }
      />

      <SolutionSection />
      <ImpactSection />
      <BenefitsSection />
      <PlansSection />
      <CallToActionSection />
    </>
  );
}

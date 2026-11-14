import Image from "next/image";
import BenefitsSection from "@/src/components/pages-initial/home/benefits/benefitsSection";
import CallToActionSection from "@/src/components/pages-initial/home/cta/CallToActionSection";
import ImpactSection from "@/src/components/pages-initial/home/impact/impactSection";
import PlansSection from "@/src/components/pages-initial/home/plans/plansSection";
import SolutionSection from "@/src/components/pages-initial/home/soluction/soluctionSection";
import { IconArrowNarrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Hero from "../../components/reusable/hero";
import styles from "@/src/components/pages-initial/home/Hero.module.css";
export default function homePage() {
  return (
    <>
      <Hero
        title={<>Cada criança</>}
        highlight={
          <span className="text-text-primary">
            <span className={`${styles.homeHighlight} relative isolate`}>aprende</span> de um jeito.
          </span>
        }
        description={
          <span className="text-text-primary">
            Com a{" "}
            <strong className="font-semibold text-text-primary">
              Ilumine.Educa
            </strong>
            , o aprendizado se torna mais acessível, divertido e personalizado.
          </span>
        }
        fullHeight
        decorations={false}
        // Acima de Full HD, o conjunto cresce até 1/3, incluindo o container
        // que determina o tamanho da criança. As telas menores ficam iguais.
        className={`${styles.hero}
          [&_h1]:text-[clamp(2.1rem,4.2vw,4.2rem)]
          [&_h1+div]:text-[clamp(1rem,1.4vw,1.4rem)]
          [&_a]:text-[clamp(.875rem,1vw,1rem)]
          min-[1921px]:[&>div]:max-w-[min(83.333vw,133.333rem)]
          min-[1921px]:[&>div]:px-[min(2.5vw,4rem)]
          min-[1921px]:[&>div]:gap-[min(1.667vw,2.667rem)]
          min-[1921px]:[&_h1]:text-[min(3.5vw,5.6rem)]
          min-[1921px]:[&_h1+div]:text-[min(1.167vw,1.867rem)]
          min-[1921px]:[&_a]:text-[min(.8333vw,1.333rem)]
          min-[1921px]:[&_a]:px-[min(1.25vw,2rem)]
          min-[1921px]:[&_a]:py-[min(.625vw,1rem)]
          min-[1921px]:[&_a_svg]:size-[min(1.042vw,1.667rem)]
        `}
        wave
        actions={[
          {
            label: "Comece agora",
            href: "/auth/cadastro",
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
              className={styles.blueShape}
              aria-hidden="true"
            />

            <Image
              src="/images/hero/crianca-tablet.png"
              alt="Criança sorrindo enquanto utiliza um tablet."
              width={1254}
              height={1254}
              sizes="(max-width: 767px) min(84vw, 430px), (max-width: 1599px) 40vw, (max-width: 1920px) 589px, min(31vw, 786px)"
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

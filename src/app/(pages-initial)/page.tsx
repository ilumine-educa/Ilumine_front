import BenefitsSection from "../../components/home/benefits/benefitsSection";
import CallToActionSection from "../../components/home/cta/CallToActionSection";
import ImpactSection from "../../components/home/impact/impactSection";
import PlansSection from "../../components/home/plans/plansSection";
import SolutionSection from "../../components/home/soluction/soluctionSection";
import Hero from "../../components/home/Hero";
export default function homePage() {
  return (
    <>
      <Hero />
      <SolutionSection />
      <ImpactSection />
      <BenefitsSection />
      <PlansSection />
      <CallToActionSection />
    </>
  );
}

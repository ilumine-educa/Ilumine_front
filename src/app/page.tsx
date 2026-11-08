import BenefitsSection from "../components/home/benefits/benefitsSection";
import Hero from "../components/home/Hero";
import PlansSection from "../components/home/plans/plansSection";
import HomeNavbar from "../components/home/template/navbar";
export default function Home() {
  return (
    <>
    <HomeNavbar/>
      <main>
        <Hero/>
        <BenefitsSection/>
        <PlansSection/>
      </main>
    </>
  );
}

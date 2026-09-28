import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemStats from "@/components/ProblemStats";
import HowItWorks from "@/components/HowItWorks";
import Variants from "@/components/Variants";
import Flywheel from "@/components/Flywheel";
import AppSection from "@/components/AppSection";
import ImpactNumbers from "@/components/ImpactNumbers";
import WomenAgents from "@/components/WomenAgents";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ProblemStats />
        <HowItWorks />
        <Variants />
        <Flywheel />
        <AppSection />
        <ImpactNumbers />
        <WomenAgents />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

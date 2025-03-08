import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { BeneficiariesSection } from "@/components/sections/beneficiaries-section";
import { GetInvolvedSection } from "@/components/sections/get-involved-section";
import { GoalsSection } from "@/components/sections/goals-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <BeneficiariesSection />
        <GetInvolvedSection />
        <GoalsSection />
      </main>
      <Footer />
    </div>
  );
}

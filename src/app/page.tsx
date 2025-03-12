import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { BeneficiariesSection } from "@/components/sections/beneficiaries-section";
import { GetInvolvedSection } from "@/components/sections/get-involved-section";
import { GoalsSection } from "@/components/sections/goals-section";
import { CalendarSection } from "@/components/sections/calendar-section";
import { GoogleCalendarEvents } from "@/components/sections/google-calendar-integration";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <BeneficiariesSection />
        <CalendarSection />
        {/* <GoogleCalendarEvents  /> */}
        <GetInvolvedSection />
        <GoalsSection />
      </main>
      <Footer />
    </div>
  );
}

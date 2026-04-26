import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { BeneficiariesSection } from "@/components/sections/beneficiaries-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TeamSection } from "@/components/sections/team-section";
import { GoalsSection } from "@/components/sections/goals-section";
import { CalendarSection } from "@/components/sections/calendar-section";
import { GetInvolvedSection } from "@/components/sections/get-involved-section";
import { DonateSection } from "@/components/sections/donate-section";
import { buildGalleryGroups, getGalleryItems } from "@/lib/gallery";

export default async function Home() {
  const galleryItems = await getGalleryItems();
  const galleryGroups = buildGalleryGroups(galleryItems);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ProgramsSection />
        <BeneficiariesSection />
        <GallerySection items={galleryItems} groups={galleryGroups} />
        <TeamSection />
        <GoalsSection />
        <CalendarSection />
        <GetInvolvedSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}

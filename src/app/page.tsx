import { ExpertSection } from "@/components/home/ExpertSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningJourneySection } from "@/components/home/LearningJourneySection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProgramsSection />
      <LearningJourneySection />
      <ExpertSection />
    </>
  );
}

import { ExpertSection } from "@/components/home/ExpertSection";
import { FeaturedContentSection } from "@/components/home/FeaturedContentSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningJourneySection } from "@/components/home/LearningJourneySection";
import { ParentTestimonialsSection } from "@/components/home/ParentTestimonialsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { StudentOutcomesSection } from "@/components/home/StudentOutcomesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TrialRegistrationSection } from "@/components/home/TrialRegistrationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProgramsSection />
      <LearningJourneySection />
      <ExpertSection />
      <StudentOutcomesSection />
      <ParentTestimonialsSection />
      <FeaturedContentSection />
      <TrialRegistrationSection />
    </>
  );
}

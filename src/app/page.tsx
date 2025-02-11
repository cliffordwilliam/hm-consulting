import HeroSection from "./ui/hero";
import InnovationSection from "./ui/innovation";
import AboutSection from "./ui/about-section";
import { CarouselComponent } from "./ui/carousel";
import BusinessTeamsSection from "./ui/BusinessTeamsSection";
import TeamSection from "./ui/TeamSection";

export default function MyPage() {
  return (
    <div>
      <HeroSection />
      <InnovationSection />
      <AboutSection />
      <TeamSection />
      <CarouselComponent />
      <BusinessTeamsSection />
    </div>
  );
}

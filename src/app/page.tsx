import BrandingSection from "./Sections/BrandingSection";
import HeroSection from "./Sections/HeroSection";
import StepsSection from "./Sections/StepsSection";
import TransitionSection from "./Sections/LetsBuildSection";
import WebsiteSection from "./Sections/WebsiteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WebsiteSection />
      <BrandingSection/>
      <TransitionSection />
      <StepsSection/>
    </>
  );
}

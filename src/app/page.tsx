import BrandingSection from "./Sections/BrandingSection";
import HeroSection from "./Sections/HeroSection";
import TransitionSection from "./Sections/TransitionSection";
import WebsiteSection from "./Sections/WebsiteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WebsiteSection />
      <BrandingSection/>
      <TransitionSection />
    </>
  );
}

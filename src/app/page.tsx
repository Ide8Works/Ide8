import BrandingSection from "./Sections/BrandingSection";
import HeroSection from "./Sections/HeroSection";
import StepsSection from "./Sections/StepsSection";
import TransitionSection from "./Sections/LetsBuildSection";
import WebsiteSection from "./Sections/WebsiteSection";
import WhatWeBuildSection from "./Sections/WhatWeBuildSection";
import WhyWorkWithUsSection from "./Sections/WhyWorkWithUsSection";
import SocialMediaSection from "./Sections/SocialMediaSection";
import LegalSection from "./Sections/LegalSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TransitionSection />
      <LegalSection/>
      <WhatWeBuildSection />
      <WebsiteSection />
      <BrandingSection />
      <SocialMediaSection />
      <WhyWorkWithUsSection />
      <StepsSection />
    </>
  );
}

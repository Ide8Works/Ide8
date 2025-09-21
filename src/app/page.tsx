import BrandingSection from "./Sections/BrandingSection";
import HeroSection from "./Sections/HeroSection";
import StepsSection from "./Sections/StepsSection";
import TransitionSection from "./Sections/LetsBuildSection";
import WebsiteSection from "./Sections/WebsiteSection";
import WhatWeBuildSection from "./Sections/WhatWeBuildSection";
import WhyWorkWithUsSection from "./Sections/WhyWorkWithUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TransitionSection />
      <WhatWeBuildSection />
      <WebsiteSection />
      <BrandingSection />
      <WhyWorkWithUsSection />
      <StepsSection />
    </>
  );
}

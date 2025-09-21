import BrandingSection from "./Sections/BrandingSection";
import HeroSection from "./Sections/HeroSection";
import StepsSection from "./Sections/StepsSection";
import LetsBuildSection from "./Sections/LetsBuildSection";
import WebsiteSection from "./Sections/WebsiteSection";
import WhatWeBuildSection from "./Sections/WhatWeBuildSection";
import WhyWorkWithUsSection from "./Sections/WhyWorkWithUsSection";
import SocialMediaSection from "./Sections/SocialMediaSection";
import LegalSection from "./Sections/LegalSection";
import CTABannerSection from "./Sections/CTABannerSection";
import TestimonialSection from "./Sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LetsBuildSection />
      <LegalSection />
      <WhatWeBuildSection />
      <WebsiteSection />
      <BrandingSection />
      <SocialMediaSection />
      <WhyWorkWithUsSection />
      <StepsSection />
      <TestimonialSection/>
      <CTABannerSection />
    </>
  );
}

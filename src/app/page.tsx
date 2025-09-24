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
import ScrollStackedSection from "./Components/ScrollStackedSection";
import Footer from "./Components/Footer";
import XFactors from "./Sections/XFactors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LetsBuildSection />
      <WhatWeBuildSection />
      <ScrollStackedSection zIndex={1}>
        <LegalSection />
      </ScrollStackedSection>
      <ScrollStackedSection zIndex={2}>
        <WebsiteSection />
      </ScrollStackedSection>
     <ScrollStackedSection zIndex={3}>
        <BrandingSection />
      </ScrollStackedSection>
      <SocialMediaSection />
      <WhyWorkWithUsSection />
      <XFactors/>
      <StepsSection />
      <TestimonialSection />
      <CTABannerSection />
      <Footer/>
    </>
  );
}

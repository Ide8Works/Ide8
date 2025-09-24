"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skiper39 } from "@/components/ui/skiper-ui/skiper39";
import Navbar from "../Components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const DemoSkiper39 = () => {
  return <Skiper39 />;
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
    });

    tl.to(element, {
      scale: 0.9,
      transformOrigin: "center center",
      ease: "none",
    });

    tl.to(
      element,
      {
        opacity: 0.9,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div
        ref={heroRef}
        className="relative h-screen md:h-screen 2xl:h-[800px] w-full overflow-hidden flex items-center justify-center mb-5"
      >
        <div className="absolute z-10 px-4 sm:px-6 md:px-10 top-1/6 sm:top-1/5 md:top-20 flex flex-col items-center text-center text-white font-aglight">
          <h1 className="font-semibold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
            got an <span className="text-black font-agheavy">idea</span>?
          </h1>
          <h2 className="max-w-[90%] sm:max-w-2xl md:max-w-3xl text-sm sm:text-lg md:text-xl font-courier tracking-tight leading-tight">
            <span className="italic">everyone</span> has but, it’s nothing
            without <span className="font-semibold">execution!</span>
          </h2>
        </div>

        <DemoSkiper39 />
      </div>
    </div>
  );
};

export default HeroSection;

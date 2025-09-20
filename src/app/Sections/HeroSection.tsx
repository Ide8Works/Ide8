"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skiper39 } from "@/components/ui/skiper-ui/skiper39";

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
    <div ref={heroRef} className="relative h-screen">
      <div className="absolute z-10 w-full flex flex-col items-center text-white top-20 font-aglight">
        <h1 className="font-semibold text-5xl sm:text-7xl text-center">
          got an <span className="text-black font-agheavy">idea</span>?
        </h1>
        <h2 className="w-1/2 text-center leading-3.5 mt-2 sm:w-fit sm:ml-10 sm:-mt-1 sm:leading-normal font-courier">
          <span className="italic">everyone</span> have but, its nothing without
          execution!
        </h2>
      </div>
      <DemoSkiper39 />
    </div>
  );
};

export default HeroSection;

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  zIndex: number;
}

const ScrollStackedSection: React.FC<Props> = ({ children, zIndex }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    gsap.set(el, { zIndex });

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "100%",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

  }, []);

  return (
    <div ref={sectionRef} className="relative w-full">
      {children}
    </div>
  );
};

export default ScrollStackedSection;

"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const LegalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          width: "70%",
          height: "400px",
          borderRadius: "70px",
        },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#ffa800] flex flex-col items-center justify-center text-white text-2xl mx-auto mt-40 overflow-hidden" // 👈 overflow hidden
      style={{
        width: "40%",
        height: "200px",
        borderRadius: "30px",
      }}
    >
      <section className="w-full">
        {" "}
        {/* 👈 forces Marquee to respect parent width */}
        <div className="px-4 py-10 text-center">
          <h2 className="mb-4 font-agheavy text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-10 tracking-tight">
            Anything (but illegal)
          </h2>
          <p className="text-sm text-white max-w-xl mx-auto font-courier tracking-tight leading-tight">
            If it’s <span className="italic">creative</span>,{" "}
            <span className="italic">ethical</span>, and{" "}
            <span className="italic">helps you win</span> — we’ll make it
            happen.
          </p>
        </div>
        <Marquee
          pauseOnHover
          speed={50}
          gradient={false}
          className="w-full px-6 pb-12"
        >
          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3"></div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3"></div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3"></div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3"></div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
            <div className="flex-1 flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg"></div>
          </div>
          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3"></div>
        </Marquee>
      </section>
    </div>
  );
};

export default LegalSection;

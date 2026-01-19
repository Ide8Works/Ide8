"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const LegalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (context) => {
        const conditions = context.conditions as { isDesktop: boolean; isMobile: boolean };

        const isDesktop = conditions?.isDesktop ?? false;

        gsap.killTweensOf(sectionRef.current);

        gsap.fromTo(
          sectionRef.current,
          {
            width: isDesktop ? "70%" : "90%",
            height: isDesktop ? "200px" : "300px",
            borderRadius: isDesktop ? "70px" : "40px",
          },
          {
            width: "100%",
            height: "100vh",
            borderRadius: "0px",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom-=300 center",
              scrub: true,
            },
          }
        );
      }
    );

    const items = sectionRef.current.querySelectorAll(".fade-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);


  return (
    <div
      ref={sectionRef}
      className="min-h-screen sticky top-0 bg-[#ffa800] flex flex-col items-center justify-center text-white text-2xl mx-auto overflow-hidden"
      style={{
        width: "40%",
        height: "100px",
        borderRadius: "30px",
      }}
    >
      <section className="w-full">
        <div className="px-4 py-10 text-center fade-item">
          <h2 className="mb-4 font-agheavy text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-16 tracking-tight">
            Anything (but illegal)
          </h2>
          <p className="text-sm text-white max-w-xl mx-auto font-courier tracking-tight leading-tight">
            If it’s <span className="italic">creative</span>,{" "}
            <span className="italic">ethical</span>, and{" "}
            <span className="italic">helps you win</span> — we’ll make it
            happen.
          </p>
        </div>
        <div className="fade-item">
          <Marquee
            pauseOnHover
            speed={50}
            gradient={false}
            className="px-6 pb-12"
          >
            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-1 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 1"
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 2"
                />
              </div>
            </div>

            <div className=" bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Illegal Section Video Placeholder 1"
              />
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 3"
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 4"
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Illegal Section Video Placeholder 2"
              />
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 5"
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 6"
                />
              </div>
            </div>
            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Illegal Section Video Placeholder 3"
              />
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 7"
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 8"
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Illegal Section Video Placeholder 4"
              />
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 9"
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/image.png"
                  alt="Illegal Section Placeholder 10"
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Illegal Section Final Placeholder"
              />
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default LegalSection;

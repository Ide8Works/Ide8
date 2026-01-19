"use client";
import gsap from "gsap/all";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";


const SocialMediaSection: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      });

      return () => ctx.revert();
    }, []);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(scrollRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      });

      return () => ctx.revert();
    }, []);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="socialmedia"
      className="min-h-screen w-screen relative z-40 bg-white py-8 md:py-10 lg:py-12"
    >
      <div className="px-4 py-10 text-center" ref={titleRef}>
        <h2 className="mb-4 font-agheavy text-4xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight">
          Social Media
        </h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto font-courier tracking-tight leading-tight">
          Posts, reels, carousels that engage your audience{" "}
          <br className="hidden md:block" />
          and keep your brand top-of-mind.
        </p>
      </div>

      <div className="w-full" ref={scrollRef}>

        <Marquee pauseOnHover speed={70} gradient={false} className="px-6 pb-12">
          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-1 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Social Media Branding"
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Creative Post"
              />
            </div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/image.png"
              alt="Creative Video Placeholder"
            />
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Digital Marketing"
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Branding Design"
              />
            </div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/image.png"
              alt="Social Video"
            />
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="UI UX Design"
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Gradient Design"
              />
            </div>
          </div>
          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/image.png"
              alt="Creative Design"
            />
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Art Design"
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Work Design"
              />
            </div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/image.png"
              alt="Abstract Design"
            />
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Modern Branding"
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/image.png"
                alt="Identity Design"
              />
            </div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/image.png"
              alt="Final Social Media Placeholder"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SocialMediaSection;

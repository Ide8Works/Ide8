"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center py-12 max-w-6xl mx-auto h-screen px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center lg:text-right gap-3 w-full lg:w-1/2">
        <h2 className="font-courier tracking-tight text-sm sm:text-2xl">
          Brand Is Not What You Say
        </h2>
        <h1 className="font-aglight text-3xl md:text-5xl lg:text-6xl tracking-tight">
          It is What <br className="hidden md:block" />
          <span className="font-agheavy text-[#ffa800]">They</span> Say
        </h1>
        <h2 className="font-courier tracking-tight text-sm sm:text-lg">
          and they say, <em>what they see!</em>
        </h2>
      </div>

      <div className="w-full  h-full overflow-hidden grid grid-cols-2 md:pl-16">
        <div className="flex justify-start h-full">
          <Marquee direction="up" speed={70} pauseOnHover gradient={false}  >
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
          </Marquee>
        </div>

        <div className="flex justify-start h-full">
          <Marquee direction="down" speed={70} pauseOnHover gradient={false}>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-white rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-18 sm:px-40 sm:py-36 "></div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

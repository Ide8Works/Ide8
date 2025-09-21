"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center py-12 max-w-7xl mx-auto h-screen">
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

      <div className="w-full lg:w-1/2 h-full overflow-hidden grid grid-cols-2">
        <div className="flex justify-start h-full gap-2" >
          <Marquee
            direction="up"
            speed={30} 
            pauseOnHover
            gradient={false}
          >
            <div className="bg-white rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-white rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
          </Marquee>
        </div>

        <div className="flex justify-start" >
          <Marquee
            direction="down"
            speed={30} 
            pauseOnHover
            gradient={false}
          >
            <div className="bg-white rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-white rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
            <div className="bg-[#ffa800] rounded-lg border-2 border-black p-16 sm:px-28 sm:py-24 m-2"></div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const SocialMediaSection: React.FC = () => {
  return (
    <section id="socialmedia" className=" w-full bg-white py-8 md:py-10 lg:py-12 max-w-7xl mx-auto">
      <div className="px-4 py-10 text-center">
        <h2 className="mb-4 font-agheavy text-4xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight">Social Media</h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto font-courier tracking-tight leading-tight">
          Posts, reels, carousels that engage your audience <br className="hidden md:block" />
          and keep your brand top-of-mind.
        </p>
      </div>

      <Marquee pauseOnHover speed={50} gradient={false} className="px-6 pb-12">
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
      </Marquee>
    </section>
  );
};

export default SocialMediaSection;

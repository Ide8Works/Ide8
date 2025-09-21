"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const BrandingSection: React.FC = () => {
  const cards = Array(6).fill(null);

  return (
    <section className="w-full bg-[#ffa800] py-8 md:py-10 lg:py-12 md:h-screen 2xl:h-auto flex flex-col items-center justify-start md:justify-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-agheavy font-bold tracking-tight leading-tight">
          Branding <span className="font-aglight">and</span> UI/UX
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-white mb-10 font-courier tracking-tight leading-tight">
          From just a logo to a complete identity — fonts,
          <br className="hidden sm:block" />
          colors, voice, and everything in between.
        </p>
      </div>

      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={false}
        className="py-4 2xl:max-w-7xl 2xl:mx-auto"
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-80 sm:w-80 md:w-[380px] lg:w-[470px] h-96 sm:h-64 md:h-72 lg:h-80 mx-3 sm:mx-4 bg-orange-200 rounded-xl group cursor-pointer overflow-hidden"
          >
            <img
              src={item?.image}
              alt={item?.name}
              className="w-full h-full object-cover rounded-xl"
            />

            <div className="absolute flex items-center justify-between mx-5 px-6 py-2 border-1 border-white/55 bg-black/8 backdrop-blur-xl rounded-full bottom-4 left-0 right-0 md:translate-y-30 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-400 ease-out">
              <div className="text-white text-left">
                <h3 className="text-sm md:text-lg font-semibold font-agheavy">
                  {item?.name}
                </h3>
              </div>
              <a
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:shadow-md font-aglight"
              >
                <span className="hidden md:block">View Details</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandingSection;

"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const BrandingSection: React.FC = () => {
  const cards = Array(6).fill(null);

  return (
    <section className="w-full bg-[#ffa800] py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-agheavy font-bold">
          Branding <span className="font-aglight">and</span> UI/UX
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-white mb-10 font-courier">
          From just a logo to a complete identity — fonts,
          <br className="hidden sm:block" />
          colors, voice, and everything in between.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={40} gradient={false} className="py-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-[380px] lg:w-[470px] h-56 sm:h-64 md:h-72 lg:h-80 mx-3 sm:mx-4 bg-white/65 rounded-xl group cursor-pointer overflow-hidden"
          >
            <img
              src={item?.image}
              alt={item?.name}
              className="w-full h-full object-cover rounded-xl"
            />

            <div className="absolute flex items-center justify-between mx-5 px-6 py-2 border-1 border-white/55 bg-black/8 backdrop-blur-xl rounded-full bottom-4 left-0 right-0 transform translate-y-30 group-hover:translate-y-0 transition-transform duration-400 ease-out">
              <div className="text-white text-left">
                <h3 className="text-lg font-semibold font-agheavy">
                  {item?.name}
                </h3>
              </div>
              <a
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:shadow-md font-aglight"
              >
                View Details
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

import React from "react";

const XFactors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-10 font-aglight tracking-tight leading-tight">
        Here&apos;s all we bring to the{" "}
        <span className="font-agheavy text-[#ffa800]">table</span>
      </h2>

      <div className="flex justify-center pointer-events-none">
        <img
          src="/media/xFactors.png"
          alt="X Factors"
          className="w-full max-w-[1000px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default XFactors;



"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Project {
  name: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Connect",
    image: "/media/steps.png",
    description: "Because good work isn’t just about design",
  },
  {
    name: "Discussions",
    image: "/media/steps.png",
    description: "Because good work isn’t just about design",
  },
  {
    name: "Let us Cook",
    image: "/media/steps.png",
    description: "Because good work isn’t just about design",
  },
];

const StepsCard = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-16 flex items-center justify-center w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.div
        style={{
          scale,
          top: `calc(-1vh + ${i * 80}px)`,
        }}
        className="relative flex flex-col md:flex-row h-auto md:h-[420px] lg:h-[470px] w-full origin-top overflow-hidden rounded-xl bg-[#ffa800] border-2 border-white shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 gap-4"
      >
        
        <div className="w-full md:w-[40%] h-40 md:h-auto bg-white  rounded-xl flex items-center justify-center">
          <img
            src={project.image}
            alt={project.name}
            className="object-cover h-full w-full py-5 rounded-xl"
          />
        </div>

        <div className="flex-1 w-full flex flex-col gap-4 md:gap-6 md:ml-2">
          <div className="bg-white p-4 sm:p-6 rounded-xl h-full">
            <p className="font-aglight text-base sm:text-lg md:text-2xl lg:text-3xl">
              Step 0
              <span className="font-agheavy text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1">
                {i + 1}
              </span>
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-agheavy mt-2">
              {project.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-justify font-courier mt-2">
              {project.description}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl h-full">
            <p className="font-aglight text-base sm:text-lg md:text-2xl lg:text-3xl">
              Step 0
              <span className="font-agheavy text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1">
                {i + 1}
              </span>
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-agheavy mt-2">
              {project.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-justify font-courier mt-2">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StepsSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="relative flex w-full flex-col items-center justify-center my-[5vh] py-8 md:py-12 2xl:max-w-7xl 2xl:mx-auto"
    >
      <h2 className="sticky text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 font-aglight">
        All it takes are{" "}
        <span className="font-agheavy">3 Steps</span>
      </h2>

      {projects.map((project, i) => {
        const targetScale = Math.max(0, 1 - (projects.length - i - 1) * 0.1);

        return (
          <StepsCard
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default StepsSection;

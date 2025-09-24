"use client";
import gsap from "gsap/all";
import { ArrowUpRight } from "lucide-react";
import React, {  useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";


const BrandingSection: React.FC = () => {
  const cards = [
    {
      name: "Qubit",
      link: "https://www.figma.com/design/63p3DqmHSMFK9Po8M08ZpF/Qubit_Design?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.57.28%E2%80%AFPM.png", 
    },
    {
      name: "Agrictech",
      link: "https://www.figma.com/design/YVEnFMZ7vS31gx541e6Xbw/Agrictech?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%2010.00.25%E2%80%AFPM.png",
    },
    {
      name: "Chatkara",
      link: "https://www.figma.com/design/xLrdHH1Fpr26rHi6nYhMGZ/Untitled?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.49.28%E2%80%AFPM.png",
    },
    {
      name: "FindJobFast",
      link: "https://www.figma.com/design/IwEWlpNs4LIcnJLa9yAIr1/FindJobFast?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.49.44%E2%80%AFPM.png",
    },
    {
      name: "Restaurants",
      link: "https://www.figma.com/design/o5x63T3jQDMTpn1Rq2WHGK/Dine-in-Restaurants?m=auto&t=rji2apA1A0HfpKhq-6",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.50.21%E2%80%AFPM.png",
    },
    {
      name: "Flicksy",
      link: "https://www.figma.com/design/q78Znr5dgw2HIs78mMTb4h/Flicksy?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.50.34%E2%80%AFPM.png",
    },
    {
      name: "Khetify",
      link: "https://www.figma.com/design/L0b1vyXCPplBiwBNjyqcDz/Khetify?m=auto&t=rji2apA1A0HfpKhq-1",
      image: "https://ik.imagekit.io/mcit5snjx/IDE8/Screenshot%202025-09-22%20at%209.50.57%E2%80%AFPM.png",
    },
  ];

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
    id="brandings"
      ref={sectionRef}
      className="min-h-screen w-full bg-[#ffa800] py-8 md:py-10 lg:py-12 md:h-screen 2xl:h-auto flex flex-col items-center justify-start md:justify-center"
    >
      <div ref={titleRef} className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-agheavy font-bold tracking-tight leading-tight">
          Branding <span className="font-aglight">and</span> UI/UX
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-white mb-10 font-courier tracking-tight leading-tight">
          From just a logo to a complete identity — fonts,
          <br className="hidden sm:block" />
          colors, voice, and everything in between.
        </p>
      </div>

      <div className="w-full" ref={scrollRef}>

      <Marquee
        pauseOnHover={true}
        speed={100}
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

              <div className="absolute flex items-center justify-between mx-5 px-6 py-2 border border-white/55 bg-black/8 backdrop-blur-xl rounded-full bottom-4 left-0 right-0 transition-all duration-400 ease-out">
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
      </div>
    </section>
  );
};

export default BrandingSection;

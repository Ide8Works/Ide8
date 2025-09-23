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
      const isMobile = conditions?.isMobile ?? false;

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
          <h2 className="mb-4 font-agheavy text-4xl md:text-4xl lg:text-5xl font-extrabold text-center mt-10 tracking-tight">
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
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108217/CAAS/POSTS/Post_04_PH_zr8tyl.png"
                  alt=""
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108213/CAAS/POSTS/9_qnplcd.png"
                  alt=""
                />
              </div>
            </div>

            <div className=" bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124388/CAAS/reels/Physio_therapy_j9nubi.mp4"
              ></video>
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108201/CAAS/POSTS/Post-7_Pasta_1_wkqz3w.png"
                  alt=""
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728111410/CAAS/POSTS/posts2/Post-8_Goa_noytv3.png"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              {" "}
              <video
                autoPlay
                loop
                muted
                className="rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124384/CAAS/reels/Myths_vs._Reality_1_hu01n9.mp4"
              ></video>
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728112220/CAAS/POSTS/posts2/WhatsApp_Image_2024-10-05_at_11.47.27_5897fe8b_r0lwob.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108203/CAAS/POSTS/Prioritize_Self-Care_Today_and_Every_Day_IG_bb0drf.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              {" "}
              <video
                autoPlay
                loop
                muted
                className="rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124375/CAAS/reels/Ganesh_Ji_1_uyargm.mp4"
              ></video>
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728111868/CAAS/POSTS/posts2/Post-6__Fries_and_Drinks_ynfy5b.png"
                  alt=""
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728111868/CAAS/POSTS/posts2/Post-15_qfeb69.png"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              {" "}
              <video
                autoPlay
                loop
                muted
                className="rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1727631523/CAAS/video2_g0yulw.mp4"
              ></video>
            </div>

            <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108203/CAAS/POSTS/Post_1_avrkzo.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
                <img
                  className="object-cover rounded-lg"
                  src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108209/CAAS/POSTS/bluesky_daycare_02_rjgzjp.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
              {" "}
              <video
                autoPlay
                loop
                muted
                className="rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1727631248/CAAS/hanumanVideo_uud0a5.mp4"
              ></video>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default LegalSection;

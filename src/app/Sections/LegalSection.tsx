"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const LegalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          width: "70%",
          height: "200px",
          borderRadius: "70px",
        },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="sticky top-0 bg-[#ffa800] flex flex-col items-center justify-center text-white text-2xl mx-auto mt-16 overflow-hidden"
      style={{
        width: "40%",
        height: "200px",
        borderRadius: "30px",
      }}
    >
      <section className="w-full">
        {" "}
        <div className="px-4 py-10 text-center">
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
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108221/CAAS/POSTS/Post_30_lhapxs.png"
                alt=""
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108220/CAAS/POSTS/Post_07_PH_iijbpq.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-[#f28e35]/65 rounded-xl aspect-[9/16] w-72 flex items-center justify-center text-gray-500 font-bold text-2xl mx-3">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg"
              src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124387/CAAS/reels/Strawberry_Breakfast_Rolls_blzolu.mp4"
            ></video>
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108202/CAAS/POSTS/Post-2_Sandwich_nbaduf.png"
                alt=""
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108221/CAAS/POSTS/Post_30_lhapxs.png"
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
              src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124383/CAAS/reels/Banana_Lentil_Muffins_xsxxnc.mp4"
            ></video>
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108203/CAAS/POSTS/Post-1_Hero_Post_ldoer9.png"
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
              src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124377/CAAS/reels/Rings_Collection_1_liesiu.mp4"
            ></video>
          </div>

          <div className="rounded-xl w-72 h-[32rem] flex flex-col gap-4 overflow-hidden mx-3">
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728111410/CAAS/POSTS/posts2/Post-6_DharamShala_McLeod_Ganj_pysm2f.png"
                alt=""
              />
            </div>
            <div className="flex-1 aspect-square flex items-center justify-center text-gray-500 font-bold text-2xl bg-[#f28e35]/65 rounded-lg">
              <img
                className="object-cover rounded-lg"
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728112220/CAAS/POSTS/posts2/WhatsApp_Image_2024-10-05_at_11.47.27_5897fe8b_r0lwob.jpg"
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
                src="https://res.cloudinary.com/dwwd1oncs/image/upload/f_webp,q_auto,w_300/f_auto,q_auto/v1728108197/CAAS/POSTS/Post-8_Online_Delivery_gqju90.jpg"
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
              src="https://res.cloudinary.com/dwwd1oncs/video/upload/f_webm/v1728124377/CAAS/reels/MSc-IT_pwj6vy.mp4"
            ></video>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default LegalSection;

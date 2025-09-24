"use client";
import React from "react";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Arjun Mehta",
    body: "The website they built for my startup is lightning-fast and stunning. Best web development team I've worked with!",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Priya Sharma",
    body: "Their social media creatives tripled our engagement! Every post feels fresh, on-brand, and perfectly tailored to our audience.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Rahul Verma",
    body: "Our new brand identity completely transformed how customers perceive us. The fonts, colors, and messaging are flawless!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Ananya Patel",
    body: "From concept to launch, their web development process was seamless. Our e-commerce site now converts better!",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Vikram Singh",
    body: "The Instagram reels and carousels they designed went viral! Social media creatives that actually drive sales.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Divya Iyer",
    body: "They captured our company's essence perfectly in the rebrand. Professional, modern, and uniquely us!",
    img: "https://avatar.vercel.sh/divya",
  },
  {
    name: "Karan Malhotra",
    body: "Responsive, clean, and SEO-optimized – our new website exceeded all expectations. Web dev done right!",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name: "Meera Reddy",
    body: "Their social media strategy + creatives helped us grow better in 3 months. Game-changer!",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Aditya Joshi",
    body: "The branding package included everything – logo, style guide, business cards. Cohesive and premium quality!",
    img: "https://avatar.vercel.sh/aditya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  body,
  isAlternate,
}: {
  name: string;
  body: string;
  isAlternate?: boolean;
}) => {
  return (
    <figure
      className={cn(
        "border relative h-full w-38 sm:w-64 md:w-80 cursor-pointer overflow-hidden rounded-2xl p-3 md:p-6 flex-shrink-0",
        isAlternate
          ? "bg-[#ffa800] border-[#ffa800] text-white"
          : "bg-white border-black text-black"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black/75 flex items-center justify-center text-white font-courier rounded-full">{name.charAt(0)}</div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold">{name}</figcaption>
        </div>
      </div>
      <blockquote
        className={`mt-4 text-xs sm:text-base italic ${
          isAlternate ? "text-white" : "text-black"
        }`}
      >
        “{body}”
      </blockquote>
      <div
        className={`absolute bottom-4 right-4 text-xl ${
          isAlternate ? "text-white/70" : "text-[#ffa800]"
        }`}
      >
        ❝
      </div>
    </figure>
  );
};

const TestimonialSection = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center py-12 max-w-6xl mx-auto h-screen px-4 md:px-0">
      <div className="flex flex-col items-center justify-center lg:text-right gap-3 w-full lg:w-1/2 text-right">
        <h2 className="font-courier tracking-tight text-sm sm:text-lg w-full">
          Brand Is Not What You Say
        </h2>
        <h1 className="font-aglight text-3xl md:text-5xl lg:text-6xl tracking-tight w-full">
          It is What <br className="hidden md:block" />
          <span className="font-agheavy text-[#ffa800]">They</span> Say
        </h1>
        <h2 className="font-courier tracking-tight text-sm sm:text-lg mb-8 md:mb-0 w-full">
          and they say, <em>what they see!</em>
        </h2>
      </div>

      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[duration:2s] gap-6">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} isAlternate={index % 2 === 0} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[duration:2s] gap-6">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} isAlternate={index % 2 === 0} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;

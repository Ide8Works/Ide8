"use client";
import React from "react";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
  isAlternate,
}: {
  img: string;
  name: string;
  body: string;
  isAlternate?: boolean;
}) => {
  return (
    <figure
      className={cn(
        "border relative h-full w-32 sm:w-64 md:w-80 cursor-pointer overflow-hidden rounded-2xl p-3 md:p-6 flex-shrink-0",
        isAlternate
          ? "bg-[#ffa800] border-[#ffa800] text-white"
          : "bg-white border-black text-black"
      )}
    >
      <div className="flex items-center gap-3">
        <img
          className={`rounded-full ${isAlternate ? "border-white" : ""}`}
          width={40}
          height={40}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold">{name}</figcaption>
          
        </div>
      </div>
      <blockquote className={`mt-4 text-xs sm:text-base italic ${isAlternate ? "text-white" : "text-black"}`}>
        “{body}”
      </blockquote>
      <div className={`absolute bottom-4 right-4 text-xl ${isAlternate ? "text-white/70" : "text-[#ffa800]"}`}>
        ❝
      </div>
    </figure>
  );
};

const TestimonialSection = () => {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center py-12 max-w-6xl mx-auto h-screen px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center lg:text-right gap-3 w-full lg:w-1/2">
        <h2 className="font-courier tracking-tight text-sm sm:text-2xl">
          Brand Is Not What You Say
        </h2>
        <h1 className="font-aglight text-3xl md:text-5xl lg:text-6xl tracking-tight">
          It is What <br className="hidden md:block" />
          <span className="font-agheavy text-[#ffa800]">They</span> Say
        </h1>
        <h2 className="font-courier tracking-tight text-sm sm:text-lg mb-8 md:mb-0">
          and they say, <em>what they see!</em>
        </h2>
      </div>

      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[duration:5s] gap-6">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} isAlternate={index % 2 === 0} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[duration:5s] gap-6">
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

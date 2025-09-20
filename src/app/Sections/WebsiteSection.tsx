"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

interface Website {
  name: string;
  link: string;
  description: string;
  image: string;
}

const WebsiteSection: React.FC = () => {
  const websites: Website[] = [
    {
      name: "CAAS",
      link: "https://www.creativityaas.com",
      description:
        "A sleek and vibrant agency site showcasing creative services, projects, and branding solutions with a modern, aesthetic layout.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
    {
      name: "Pepper",
      link: "https://pepperpizza.vercel.app",
      description:
        "A stylish and appetizing restaurant website with menu browsing, ordering features, and a contemporary food-brand look.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
    {
      name: "Trybe",
      link: "https://trybefashion.vercel.app",
      description:
        "An edgy and modern online clothing store inspired by streetwear fashion, featuring bold visuals and trendy product displays.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
    {
      name: "Fanta",
      link: "https://fantareimagine.vercel.app",
      description:
        "A creative reimagining of the Fanta brand website, packed with vibrant colors, playful UI elements, and a fresh digital experience.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
    {
      name: "Curemeet",
      link: "https://curemeet.vercel.app",
      description:
        "A user-friendly healthcare platform for booking doctor appointments online with a clean and professional interface.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
    {
      name: "Portfolio",
      link: "https://www.amanrajgupta.me",
      description:
        "A modern personal portfolio showcasing skills, projects, and achievements of a developer with a clean and professional design.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/b62cd5225851605.Y3JvcCw1NzUzLDQ1MDAsMTI4LDA.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-aglight font-bold">
          Websites
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-[#020202] mb-10 font-courier">
          Landing pages, portfolios, ecommerce, dashboards —
          <br className="hidden sm:block" />
          designed to impress and built to perform.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={40} gradient={false} className="py-4">
        {websites.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-[380px] lg:w-[470px] h-56 sm:h-64 md:h-72 lg:h-80 mx-3 sm:mx-4 bg-orange-200 rounded-xl group cursor-pointer overflow-hidden"
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

export default WebsiteSection;

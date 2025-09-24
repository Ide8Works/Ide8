"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#ffa800] w-full z-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between h-12 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/media/invertedLogo.png"
                alt="Logo"
                className="h-20 md:h-40"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full 
          bg-[#ffa800]/75 backdrop-blur-md text-white z-40 transform 
          transition-transform duration-500 ease-in-out will-change-transform
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer focus:outline-none text-white"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 z-100">
          <a
            href="#websites"
            onClick={(e) => handleScroll(e, "#websites")}
            className="text-3xl md:text-5xl font-semibold text-white font-agheavy transition-colors"
          >
            Websites
          </a>
          <a
            href="#brandings"
            onClick={(e) => handleScroll(e, "#brandings")}
            className="text-3xl md:text-5xl font-semibold text-white font-agheavy transition-colors"
          >
            UI / UX
          </a>
          <a
            href="#socialmedia"
            onClick={(e) => handleScroll(e, "#socialmedia")}
            className="text-3xl md:text-5xl font-semibold text-white font-agheavy transition-colors"
          >
            Social Media
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="text-3xl md:text-5xl font-semibold text-white font-agheavy transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { name: "What we Build", id: "what-we-build" },
    { name: "Our Websites", id: "websites" },
    { name: "Branding We Made", id: "branding" },
    { name: "Social Media Creatives", id: "social-media" },
    { name: "Why Work with Us?", id: "why-work-with-us" },
    { name: "The 3 Steps", id: "steps" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "cta-banner" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/9262734111",
    },
    { icon: <FaPhone className="w-5 h-5" />, href: "tel:7428247674" },
  ];

  return (
    <footer className="bg-[#ffa800] text-white pt-4 sm:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src="/media/logo2.png"
              alt="Logo"
              className="h-20 md:h-40 -mt-14"
            />
            <p className="text-white max-w-xs mb-6">
              Got an Idea? Let&lsquo;s Build it Together!
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:scale-105 ease-in-out transition-colors duration-200"
                  aria-label={`Visit our ${
                    social.href.includes("instagram")
                      ? "Instagram"
                      : social.href.includes("linkedin")
                      ? "LinkedIn"
                      : social.href.includes("wa.me")
                      ? "WhatsApp"
                      : "Phone"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 md:mt-4">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-black transition-colors ease-in-out duration-300 text-left cursor-pointer font-courier"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-2 text-white font-courier">
              <p>
                Made with ❤️ by{" "}
                <a
                  href="https://github.com/Amanrajguptaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="font-black hover:text-black duration-300 transition-colors ease-in-out">
                    Aman
                  </span>
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/NishB369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="font-black hover:text-black duration-300 transition-colors ease-in-out">
                    Nishchay
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

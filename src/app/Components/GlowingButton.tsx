// components/GlowingButton.tsx
"use client"; // Required for event handlers in Next.js 13+ App Router

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface GlowingButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const GlowingButton = ({
  children,
  className = "",
  ...props
}: GlowingButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-[#ffa800] text-white font-medium rounded-full px-12 py-2 cursor-pointer 
                 transition-all duration-300 ease-in-out hover:scale-105 relative overflow-hidden
                 ${className}`}
      style={{
        boxShadow: "0 0 15px 5px rgba(255, 168, 0, 0.5)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 10px 5px rgba(255, 168, 0, 0.7)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px 5px rgba(255, 168, 0, 0.5)";
      }}
    >
      {children}
    </button>
  );
};

export default GlowingButton;

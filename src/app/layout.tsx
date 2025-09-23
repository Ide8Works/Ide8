import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ide8 – Got an Idea? Let's Build It Together!",
  description:
    "Ide8 transforms bold ideas into stunning websites, powerful brands, and engaging content that delivers real results. Let’s build something amazing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JD0PFJ6S6N" />
    </html>
  );
}

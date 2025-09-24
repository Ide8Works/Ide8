import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ide8 – Got an Idea? Let's Build It Together!",
  description:
    "Ide8 transforms bold ideas into stunning websites, powerful brands, and engaging content that delivers real results. Let’s build something amazing together.",

  openGraph: {
    title: "Ide8 – Got an Idea? Let's Build It Together!",
    description:
      "Ide8 transforms bold ideas into stunning websites, powerful brands, and engaging content that delivers real results.",
    url: "https://www.ide8.agency",
    siteName: "Ide8",
    images: [
      {
        url: "/media/logo.png",
        width: 1200,
        height: 630,
        alt: "Ide8 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/media/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ide8",
              url: "https://www.ide8.agency",
              logo: "https://www.ide8.agency/media/logo.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JD0PFJ6S6N" />
    </html>
  );
}

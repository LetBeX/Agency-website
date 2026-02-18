import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css"; // Import Lenis CSS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll"; // Import SmoothScroll component
import { BookingProvider } from "@/components/BookingContext";
import BookingModal from "@/components/BookingModal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#060010",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Accessbiliity best practice not to restrict zoom too much, but for "usability" score sometimes sticking to standard is safer. Default is usually fine.
  // The report mentioned "Potential Culprit 2: Viewport Tag".
  // Let's stick to standard.
};

export const metadata: Metadata = {
  metadataBase: new URL("https://letbex.com"),
  title: {
    default: "LetBeX | ROI-Driven Web Design & Development",
    template: "%s | LetBeX",
  },
  description: "We help businesses make more revenue with strategy-led websites. Expert web design, development, and branding agency focused on ROI.",
  keywords: ["web design agency", "ROI-driven web design", "Next.js developers", "branding agency", "conversion optimization", "LetBeX"],
  authors: [{ name: "LetBeX Team" }],
  creator: "LetBeX",
  publisher: "LetBeX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letbex.com",
    title: "LetBeX | ROI-Driven Web Design & Development",
    description: "We engineer digital experiences that turn visitors into customers. Premium web design & development.",
    siteName: "LetBeX",
    images: [
      {
        url: "/opengraph-image.png", // We will need to ensure this exists or use a default one
        width: 1200,
        height: 630,
        alt: "LetBeX Agency - ROI Driven Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LetBeX | ROI-Driven Web Design & Development",
    description: "We help businesses make more revenue with strategy-led websites.",
    creator: "@letbex", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${outfit.variable} antialiased font-sans`}
      >
        <BookingProvider>
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Letbex | ROI-Driven Web Design & Development",
    template: "%s | Letbex",
  },
  description: "Letbex is a leading ROI-driven web design and development agency dedicated to empowering businesses to significantly increase their revenue with revenue-generating websites.",
  keywords: ["Letbex", "ROI-driven web design", "web development agency", "revenue-generating websites", "high-converting landing pages", "Next.js developers", "UI/UX design", "conversion optimization"],
  authors: [{ name: "Letbex Team" }],
  creator: "Letbex",
  publisher: "Letbex",
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
    title: "Letbex: ROI-Driven Web Design & Development for Enhanced Online Presence",
    description: "Partner with Letbex for expert website design, robust web development, and high-converting marketing assets that drive tangible business outcomes.",
    siteName: "Letbex",
    images: [
      {
        url: "/opengraph-image.png", // We will need to ensure this exists or use a default one
        width: 1200,
        height: 630,
        alt: "Letbex Agency - ROI Driven Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letbex | ROI-Driven Web Design & Development",
    description: "Partner with Letbex for expert website design, robust web development, and high-converting marketing assets.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HESDQ347JK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HESDQ347JK');
          `}
        </Script>
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

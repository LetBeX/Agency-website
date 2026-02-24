
"use client";

import MagicBento, { BentoCardProps } from "./MagicBento";


const featuredProjects: BentoCardProps[] = [
  {
    title: "Cafe Show",
    description: "Modern website for a coffee brand. Increased bookings by 40%.",
    label: "Website",
    img: "/cafeshow.vercel.app_.png",
    color: "#0a0a0a",
    url: "https://cafeshow.vercel.app/"
  },
  {
    title: "Travel Explorer",
    description: "Immersive landing page for a boutique travel agency. 3x increase in lead generation.",
    label: "Landing Page",
    img: "/travel.png",
    color: "#0a0a0a",
    url: "#"
  },
  {
    title: "YeuLink Landing",
    description: "High-impact landing page for a SaaS startup.",
    label: "Landing Page",
    img: "/yeulink.vercel.app_.png",
    color: "#0a0a0a",
    url: "https://yeulink.vercel.app/"
  },
  {
    title: "Plumber Show",
    description: "Local service website dominating search results in 3 regions.",
    label: "Local Business",
    img: "/plumbershow.vercel.app_.png",
    color: "#0a0a0a",
    url: "https://plumbershow.vercel.app/"
  },
  {
    title: "Pi Ecommerce",
    description: "Conversion-optimized product page with 98% SEO score.",
    label: "Ecommerce",
    img: "/ecommerceshow-pi.vercel.app_.png",
    color: "#0a0a0a",
    url: "https://ecommerceshow-pi.vercel.app/"
  },
  {
    title: "Salon Omega",
    description: "Luxury salon portal with integrated appointment scheduling.",
    label: "Beauty",
    img: "/salonapp-omega.vercel.app_.png",
    color: "#0a0a0a",
    url: "https://salonapp-omega.vercel.app/"
  }
];

export default function FeaturedWorkSection() {
  return (
    <section className="featured-work-section" id="work" style={{ padding: "80px 24px 60px", background: "#060010" }}>
      <div className="container mx-auto">
        <div style={{ textAlign: "center", marginBottom: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fff", marginBottom: "0.5rem" }}>
            Featured Web Design Projects.
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
            Proof over promises. We build digital experiences that drive real business results.
          </p>
        </div>

        <MagicBento 
          cards={featuredProjects}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </div>
    </section>
  );
}

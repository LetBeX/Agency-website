import HeroSection from "@/components/HeroSection";
import CurvedLoop from "@/components/CurvedLoop";
import CoreServices from "@/components/CoreServices";
import PainSolutionSection from "@/components/PainSolutionSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <main>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn={false}
        hoverDuration={0.2}
        activationSelector=".core-services"
      />
      <HeroSection />
      <section className="bg-black pb-40 pt-20 text-white relative z-10">
        <CurvedLoop
          marqueeText="Trusted ✦ by ✦ startups ✦ & ✦ growing ✦ brands ✦"
          speed={1.5}
          curveAmount={200}
          direction="right"
          interactive
          className="fill-white"
        />
      </section>
      <CoreServices />
      <PainSolutionSection />
      <FeaturedWorkSection />
      <ProcessSection />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Agency",
            "name": "LetBeX",
            "url": "https://letbex.com",
            "logo": "https://letbex.com/icon.png", // Assuming icon exists, or use a specific logo URL
            "description": "We help businesses make more revenue with strategy-led websites.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN" // Modify as needed
            },
            "sameAs": [
              "https://twitter.com/letbex",
              "https://linkedin.com/company/letbex",
              "https://instagram.com/letbex"
            ],
            "priceRange": "$$$",
            "image": "https://letbex.com/opengraph-image.png"
          }),
        }}
      />
    </main>
  );
}

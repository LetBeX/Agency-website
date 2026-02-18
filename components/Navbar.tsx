"use client";

import { useEffect, useState } from "react";
import GooeyNav from "./GooeyNav";
import { useBooking } from "./BookingContext";

const items = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Book an Intro Call", href: "#", action: "booking" },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { openModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset for better detection
      
      const sections = items.map((item: { href: string }) => {
        if (item.href === "#" || !item.href.startsWith("#")) return null;
        const section = document.querySelector(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          return {
            id: item.href,
            offset: offsetTop,
            height: offsetHeight,
          };
        }
        return null;
      }).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offset) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "1.25rem 0",
      }}
    >
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        manualActiveIndex={activeIndex}
        onBooking={openModal}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  );
}

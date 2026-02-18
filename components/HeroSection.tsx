"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useBooking } from "./BookingContext";

const GridScan = dynamic(
  () => import("./GridScan").then((mod) => ({ default: mod.GridScan })),
  { ssr: false }
);

import "./HeroSection.css";

/* ── animated counter ─────────────────────────────────────────── */
function AnimatedStat({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const tick = () => {
            current = Math.min(current + step, end);
            setCount(current);
            if (current < end) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="hero-stat">
      <span className="hero-stat__number">
        {count}
        {suffix}
      </span>
      <span className="hero-stat__label">{label}</span>
    </div>
  );
}

/* ── hero section ─────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* GridScan background */}
      <div className="hero__bg" aria-hidden="true">
        {mounted && (
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost={!isMobile}
            bloomIntensity={isMobile ? 0 : 0.6}
            chromaticAberration={isMobile ? 0 : 0.002}
            noiseIntensity={isMobile ? 0.005 : 0.01}
            className=""
            style={{}}
          />
        )}
      </div>

      {/* Gradient overlays for readability */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>LetBeX - ROI-Driven Web Design</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          We help businesses make more revenue with strategyled websites
        </h1>

        {/* Subtext */}
        <p className="hero__subtext">
          We design and build revenue-generating websites, landing pages, and marketing assets that drive sales and ROI without hiring a full in-house team.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <button onClick={openModal} className="hero__cta hero__cta--primary">
            Book an Intro Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a href="#work" className="hero__cta hero__cta--secondary">
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

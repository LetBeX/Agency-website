"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Ballpit from './Ballpit';
import { useBooking } from './BookingContext';

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });
  const { openModal } = useBooking();

  return (
    <section 
      ref={sectionRef}
      id="contact"
      style={{ minHeight: '100vh', backgroundColor: '#060010', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Background Animation */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Ballpit
          count={typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 50}
          gravity={0.5}
          friction={0.995}
          wallBounce={0.8}
          followCursor={true}
          colors={[0x7d5fff, 0xC97AFF, 0xffffff]}
          ambientColor={0xffffff}
          lightIntensity={100}
          paused={!isInView}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white mb-4 leading-tight">
          Ready to Build a Website<br />That <span style={{ color: '#C97AFF' }}>Actually Works?</span>
        </h2>
        
        <p className="text-xl text-white/50 mb-12 font-light tracking-wide">
          No distractions here.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button style={{
            padding: '16px 48px',
            fontSize: '18px',
            fontWeight: '600',
            backgroundColor: '#C97AFF',
            color: 'white',
            borderRadius: '100px',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            boxShadow: '0 10px 30px rgba(201, 122, 255, 0.4)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={openModal}
          >
            Book an Intro Call
          </button>
        </div>
      </div>
    </section>
  );
}

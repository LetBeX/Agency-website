import React from 'react';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Header */}
        <div className="footer-header">
          <h2 className="footer-title">
            LET'S <span className="do-script">Do</span> WOR<span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>K</span>!
          </h2>
        </div>

       

        {/* Links Grid */}
        <div className="footer-links-grid">
          {/* Column 1: Explore */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">Explore</h3>
            <a href="#work" className="footer-link">Our Work</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#contact" className="footer-link">Reach Out</a>
          </div>

          {/* Column 2: Follow */}
          <div className="footer-links-column" style={{ alignItems: 'center' }}>
            {/* Center alignment logic handled in CSS for desktop */}
            <h3 className="footer-column-title">Follow</h3>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Facebook</a>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-links-column">
            <h3 className="footer-column-title">Contact</h3>
          <span className="footer-email">work@letbex.com</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>All Rights Reserved LetBeX 2025</span>
        <span>Site by LetBeX</span>
        </div>
      </div>
    </footer>
  );
}

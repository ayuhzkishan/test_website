import React, { useEffect, useState } from 'react';

// Continuous flat binary string — no fixed newlines, CSS wraps it to fill full width
const BINARY_CHUNK = '01001000011000010110001101101011011101000111001001101111011011100100100001100001011000110110101101110100011100100110111101101110110001011010101001001010110011000011010110010011110110110101011011001011010101010001110001101101111000010011001001001000100010101011001010010011010001000101001100010000110100010001011001010011000101000011001001010001000011010100101100001110101001001010110011000011010110010011110110110101011011001011010101010001110001101101111000010011 ';
const ASCII_MAP = BINARY_CHUNK.repeat(6000);

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ paddingTop: 80 }}>
      {/* Dot-grid background */}
      <div className="hero-bg" />

      {/* ASCII texture — fills entire hero */}
      <div className="hero-ascii">
        <pre className="hero-ascii-text">{ASCII_MAP}</pre>
      </div>

      {/* Central copy */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Your DevSecOps teammate<br />
          for cloud security
        </h1>
        <p className="hero-sub">
          Ayush Kishan collaborates in your workflow, builds secure cloud systems,
          and empowers teams like a senior security engineer.
        </p>
        <div className="hero-ctas">
          <a href="#portfolio" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.76rem', cursor: 'none' }}>
            VIEW PROJECTS ↗
          </a>
          <a href="#contact" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '0.76rem', cursor: 'none' }}>
            BOOK A CALL ↗
          </a>
        </div>
      </div>

      {/* Bottom-left: client diagnostics only */}
      <div className="diag-panel diag-panel-left">
        <div className="diag-box" />
        <div className="diag-text">
          <div>CLIENT: Google Chrome</div>
          <div>ROLE: Android · DevOps · Security</div>
          <div>DEPTH: 32BIT</div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import TopoBackground from './TopoBackground';
import anurag  from '../assets/images/anurag.jpeg';
import pratyush from '../assets/images/Pratyush.jpeg';
import narayan  from '../assets/images/Narayan.jpeg';

const TESTIMONIALS = [
  {
    quote: "Ayush's expertise in Android development and DevOps has been instrumental in modernizing our tech stack. His ability to bridge technical and business requirements is exceptional.",
    name:  'Anurag Mahapatra',
    role:  'AI/ML Lead · Enigma',
    img:   anurag,
  },
  {
    quote: "The security implementations Ayush developed have significantly enhanced our system's resilience against cyber threats. His proactive approach to security is commendable.",
    name:  'Pratyush Kumar Sahu',
    role:  'Web Developer & CS · IIC',
    img:   pratyush,
  },
  {
    quote: "Working with Ayush in E-Cell has been a game-changer. His leadership and public speaking skills greatly enhanced our engagement and success executing large events.",
    name:  'Narayan Agarwal',
    role:  'Event Manager · E-Cell VSSUT',
    img:   narayan,
  },
];

const mono: React.CSSProperties = { fontFamily: 'JetBrains Mono, monospace' };

function TestiCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.85 } // Triggers when 85% of the card is in the viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Use scroll intersection on mobile, mouse hover on desktop
  const isActive = isMobile ? isVisible : hovered;

  // Split quote to mimic screenshot typography
  const splitIndex = t.quote.indexOf('. ');
  const part1 = splitIndex !== -1 ? t.quote.substring(0, splitIndex + 1) : t.quote;
  const part2 = splitIndex !== -1 ? t.quote.substring(splitIndex + 1) : '';

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isActive ? '#0d0505' : 'transparent',
        padding: '28px 32px',
        position: 'relative',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        border: isActive ? '1px solid rgba(220,38,38,0.35)' : '1px solid rgba(253,251,247,0.1)',
        boxShadow: isActive ? 'inset 0 0 40px rgba(220,38,38,0.04)' : 'none',
        cursor: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 280
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Top-left quote mark */}
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: '2rem', fontWeight: 900,
          color: isActive ? 'rgba(220,38,38,0.2)' : 'rgba(253,251,247,0.06)',
          lineHeight: 1, marginBottom: 8, transition: 'color 0.4s ease',
        }}>“</div>

        {/* Primary Quote */}
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500,
          color: isActive ? '#fdfbf7' : '#eaddc5', lineHeight: 1.5,
          letterSpacing: '-0.02em', marginBottom: 12, transition: 'color 0.4s ease',
        }}>
          {part1}
        </p>

        {/* Secondary Quote */}
        {part2 && (
          <p style={{
            ...mono, fontSize: '0.65rem', color: isActive ? '#a39185' : '#7a6a60',
            lineHeight: 1.7, marginBottom: 16, transition: 'color 0.4s ease',
          }}>
            {part2}
          </p>
        )}

        {/* Bottom-right quote mark */}
        <div style={{
          fontFamily: 'Inter, sans-serif', fontSize: '2rem', fontWeight: 900,
          color: isActive ? 'rgba(220,38,38,0.2)' : 'rgba(253,251,247,0.06)',
          lineHeight: 1, textAlign: 'right', transition: 'color 0.4s ease',
        }}>”</div>
      </div>

      {/* Author & Logo */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginTop: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src={t.img} alt={t.name}
            style={{
              width: 38, height: 38, objectFit: 'cover',
              filter: isActive ? 'grayscale(0%) brightness(0.9)' : 'grayscale(100%) brightness(0.6)',
              border: isActive ? '1px solid rgba(220,38,38,0.4)' : '1px solid transparent',
              transition: 'filter 0.5s ease, border-color 0.4s ease',
            }}
          />
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem',
              color: isActive ? '#fdfbf7' : '#a39185', transition: 'color 0.4s ease',
            }}>{t.name}</div>
            <div style={{
              ...mono, fontSize: '0.55rem', color: isActive ? 'rgba(220,38,38,0.7)' : '#5a4a45',
              marginTop: 2, transition: 'color 0.4s ease',
            }}>{t.role}</div>
          </div>
        </div>

        {/* Abstract logo box like screenshot */}
        <div style={{
          width: 32, height: 32, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: isActive ? 1 : 0.4, transition: 'opacity 0.4s ease'
        }}>
          {/* Corner brackets */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: 6, height: 6, borderTop: '1px solid #7a6a60', borderLeft: '1px solid #7a6a60' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 6, height: 6, borderTop: '1px solid #7a6a60', borderRight: '1px solid #7a6a60' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 6, height: 6, borderBottom: '1px solid #7a6a60', borderLeft: '1px solid #7a6a60' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 6, height: 6, borderBottom: '1px solid #7a6a60', borderRight: '1px solid #7a6a60' }} />
          {/* Star/Crosshair */}
          <span style={{ fontSize: '1rem', color: isActive ? 'rgba(220,38,38,0.8)' : '#7a6a60', transition: 'color 0.4s ease' }}>✻</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="testimonials" className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="center-wide" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">TESTIMONIALS</span>
        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontWeight: 600, 
          color: '#fdfbf7', 
          letterSpacing: '-0.03em', 
          marginBottom: 16,
          lineHeight: 1.1
        }}>
          We protect the teams<br />building tomorrow
        </h2>
        <p style={{ ...mono, fontSize: '0.8rem', color: '#a39185', lineHeight: 1.7, marginBottom: 60, maxWidth: 640 }}>
          When you're shipping the future, you don't get second chances. Here's why ambitious engineering teams trust us.
        </p>

        {/* 3-col card grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}
          className="testi-grid"
        >
          {TESTIMONIALS.map(t => (
            <TestiCard key={t.name} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
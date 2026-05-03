import React, { useState } from 'react';
import TopoBackground from './TopoBackground';
import anurag  from '../assets/images/anurag.jpeg';
import pratyush from '../assets/images/Pratyush.jpeg';
import narayan  from '../assets/images/Narayan.jpeg';

const TESTIMONIALS = [
  {
    quote: "Ayush's expertise in Android development and DevOps has been instrumental in modernizing our tech stack. His ability to bridge technical and business requirements is exceptional.",
    name:  'Anurag Mahapatra',
    role:  'AI/ML Lead · Enigma, VSSUT',
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
    role:  'Outreach, Enigma · Event Manager, E-Cell VSSUT',
    img:   narayan,
  },
];

const mono: React.CSSProperties = { fontFamily: 'JetBrains Mono, monospace' };

function TestiCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0d0505' : '#060303',
        padding: 32,
        position: 'relative',
        transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        borderLeft: hovered ? '1px solid rgba(220,38,38,0.35)' : '1px solid transparent',
        boxShadow: hovered ? 'inset 0 0 40px rgba(220,38,38,0.04)' : 'none',
        cursor: 'none',
      }}
    >
      {/* Animated quote mark */}
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '5rem',
        fontWeight: 900,
        color: hovered ? 'rgba(220,38,38,0.15)' : 'rgba(253,251,247,0.04)',
        lineHeight: 1,
        position: 'absolute',
        top: 10, left: 20,
        userSelect: 'none',
        transition: 'color 0.25s ease',
      }}>"</div>

      {/* Quote text */}
      <p style={{
        ...mono,
        fontSize: '0.75rem',
        color: hovered ? '#a39185' : '#71717a',
        lineHeight: 1.9,
        paddingTop: 20,
        marginBottom: 28,
        transition: 'color 0.25s ease',
      }}>
        {t.quote}
      </p>

      {/* Author */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderTop: hovered ? '1px solid rgba(220,38,38,0.2)' : '1px solid rgba(253,251,247,0.06)',
        paddingTop: 18,
        transition: 'border-color 0.25s ease',
      }}>
        <img
          src={t.img}
          alt={t.name}
          style={{
            width: 38, height: 38,
            borderRadius: '50%',
            objectFit: 'cover',
            filter: hovered ? 'grayscale(0%) brightness(0.9)' : 'grayscale(100%) brightness(0.6)',
            border: hovered ? '1px solid rgba(220,38,38,0.4)' : '1px solid rgba(253,251,247,0.1)',
            transition: 'filter 0.35s ease, border-color 0.25s ease',
          }}
        />
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '0.85rem',
            color: hovered ? '#fdfbf7' : '#a39185',
            transition: 'color 0.25s ease',
          }}>{t.name}</div>
          <div style={{
            ...mono,
            fontSize: '0.58rem',
            color: hovered ? 'rgba(220,38,38,0.7)' : '#3f3f46',
            marginTop: 2,
            transition: 'color 0.25s ease',
          }}>{t.role}</div>
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
        <span className="section-label">Testimonials</span>
        <h2 className="section-title" style={{ marginBottom: 14 }}>
          What colleagues say<br />about my work.
        </h2>
        <p className="section-sub" style={{ marginBottom: 60 }}>
          When you're shipping the future, you don't get second chances. Here's what the people I've worked alongside say.
        </p>

        {/* 3-col card grid with 1px dividers */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(253,251,247,0.05)' }}
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
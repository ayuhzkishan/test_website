import React, { useState } from 'react';
import TopoBackground from './TopoBackground';
import anurag  from '../assets/images/anurag.jpeg';
import pratyush from '../assets/images/Pratyush.jpeg';
import narayan  from '../assets/images/Narayan.jpeg';

const TESTIMONIALS = [
  {
    quoteMain: "Ayush's expertise in Android development and DevOps has been instrumental in modernizing our tech stack.",
    quoteSub: "His ability to bridge technical and business requirements is exceptional and drove immediate results.",
    name:  'Anurag Mahapatra',
    role:  'AI/ML Lead',
    company: 'Enigma, VSSUT',
    img:   anurag,
  },
  {
    quoteMain: "The security implementations Ayush developed have significantly enhanced our system's resilience against cyber threats.",
    quoteSub: "His proactive approach to security is commendable and highly valued by our engineering team.",
    name:  'Pratyush Kumar Sahu',
    role:  'Web Developer & CS',
    company: 'IIC',
    img:   pratyush,
  },
  {
    quoteMain: "Working with Ayush in E-Cell has been a game-changer. His leadership and public speaking skills greatly enhanced our engagement.",
    quoteSub: "He consistently drives success when executing large-scale events and programs.",
    name:  'Narayan Agarwal',
    role:  'Event Manager',
    company: 'E-Cell VSSUT',
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
        background: hovered ? 'rgba(253,251,247,0.02)' : 'transparent',
        border: '1px solid rgba(253,251,247,0.15)',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'background 0.25s ease',
        cursor: 'none',
        height: '100%',
      }}
    >
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '2.5rem',
        fontWeight: 900,
        color: 'rgba(253,251,247,0.15)',
        marginBottom: 16,
        lineHeight: 0.8,
      }}>“</div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.2rem',
        fontWeight: 400,
        color: '#fdfbf7',
        lineHeight: 1.5,
        marginBottom: 16,
      }}>
        {t.quoteMain}
      </p>

      <p style={{
        ...mono,
        fontSize: '0.75rem',
        color: '#a39185',
        lineHeight: 1.6,
        marginBottom: 16,
      }}>
        {t.quoteSub}
      </p>

      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '2.5rem',
        fontWeight: 900,
        color: 'rgba(253,251,247,0.15)',
        textAlign: 'right',
        lineHeight: 0.8,
        marginBottom: 40,
      }}>”</div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={t.img}
            alt={t.name}
            style={{
              width: 52, height: 52,
              objectFit: 'cover',
              filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.8)',
              transition: 'filter 0.35s ease',
            }}
          />
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              color: '#fdfbf7',
            }}>{t.name}</div>
            <div style={{
              ...mono,
              fontSize: '0.65rem',
              color: '#a39185',
              marginTop: 4,
            }}>{t.role}</div>
            <div style={{
              ...mono,
              fontSize: '0.65rem',
              color: '#a39185',
            }}>{t.company}</div>
          </div>
        </div>

        <div style={{
           width: 36, height: 36, 
           position: 'relative',
           display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
           <div style={{ position:'absolute', top:0, left:0, width:8, height:8, borderTop:'1px solid rgba(253,251,247,0.4)', borderLeft:'1px solid rgba(253,251,247,0.4)' }} />
           <div style={{ position:'absolute', bottom:0, left:0, width:8, height:8, borderBottom:'1px solid rgba(253,251,247,0.4)', borderLeft:'1px solid rgba(253,251,247,0.4)' }} />
           <div style={{ position:'absolute', top:0, right:0, width:8, height:8, borderTop:'1px solid rgba(253,251,247,0.4)', borderRight:'1px solid rgba(253,251,247,0.4)' }} />
           <div style={{ position:'absolute', bottom:0, right:0, width:8, height:8, borderBottom:'1px solid rgba(253,251,247,0.4)', borderRight:'1px solid rgba(253,251,247,0.4)' }} />
           <span style={{ fontSize: '1.2rem', color: 'rgba(253,251,247,0.3)' }}>✦</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div id="testimonials" className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="center-wide" />
      <div className="section" style={{ position: 'relative', zIndex: 1, padding: '80px 28px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <span style={{ ...mono, fontSize: '0.65rem', color: '#a39185', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TESTIMONIALS</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(253,251,247,0.1)' }} />
        </div>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          fontWeight: 500, 
          color: '#fdfbf7', 
          letterSpacing: '-0.02em', 
          marginBottom: 16,
          lineHeight: 1.1
        }}>
          What colleagues say<br />about my work.
        </h2>

        <p style={{ ...mono, fontSize: '0.8rem', color: '#fdfbf7', lineHeight: 1.6, marginBottom: 50 }}>
          When you're shipping the future, you don't get second chances.<br/>
          <span style={{ color: '#a39185' }}>Here's what the people I've worked alongside say.</span>
        </p>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}
          className="testi-grid"
        >
          {TESTIMONIALS.slice(0, 2).map(t => (
            <TestiCard key={t.name} t={t} />
          ))}
        </div>
        
        {/* Render 3rd card optionally or centered below */}
        {TESTIMONIALS.length > 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginTop: 32 }} className="testi-grid">
            <TestiCard key={TESTIMONIALS[2].name} t={TESTIMONIALS[2]} />
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
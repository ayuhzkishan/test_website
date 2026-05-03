import React from 'react';
import MyImage from '../assets/images/cool.jpg';
import TopoBackground from './TopoBackground';

export default function About() {
  return (
    <div className="section-wrap" id="about" style={{ position: 'relative' }}>
      <TopoBackground variant="top-right" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">About</span>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}
          className="two-col"
        >
          {/* ── Left: copy + stats ── */}
          <div>
            <h2 className="section-title">
              I build things<br />that actually work.
            </h2>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#a39185', lineHeight: 1.9, marginBottom: 20 }}>
              I'm a passionate technologist and undergrad at VSSUT, Burla — specialising in Android development, DevOps, and cybersecurity. My work is defined by one principle: ship secure, reliable software.
            </p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#a39185', lineHeight: 1.9, marginBottom: 44 }}>
              Beyond code, I lead teams, organise large-scale events, and translate complex technical concepts into clear communication for stakeholders and communities alike.
            </p>

            {/* Stat pills */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { num: '3+',   label: 'Years Building'   },
                { num: '10+',  label: 'Projects Shipped' },
                { num: '4',    label: 'Core Domains'     },
                { num: '500+', label: 'Event Attendees'  },
              ].map(s => (
                <div key={s.label} className="card" style={{ padding: '16px 22px', textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#fdfbf7', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: '#7a6a60', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: photo with terminal overlay ── */}
          <div style={{ position: 'relative', width: '100%' }}>
            <img
              src={MyImage}
              alt="Ayush Kishan"
              style={{
                width: '100%',
                maxWidth: 460,
                display: 'block',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.08)',
                filter: 'grayscale(100%) brightness(0.85)',
                transition: 'filter 0.4s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(20%) brightness(1)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) brightness(0.85)')}
            />
            {/* Terminal metadata overlay */}
            <div style={{
              position: 'absolute',
              bottom: 12, left: 12,
              background: 'rgba(0,0,0,0.88)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '10px 14px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              color: '#7a6a60',
              lineHeight: 2,
              borderRadius: 1,
            }}>
              <div>NAME: &nbsp;Ayush Kishan</div>
              <div>LOC: &nbsp;&nbsp;Sambalpur, Odisha IN</div>
              <div>ROLE: &nbsp;Dev · DevOps · Security</div>
              <div>STATUS: <span className="status-dot" style={{ marginRight: 4 }} /> AVAILABLE</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
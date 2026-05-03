import React from 'react';
import TopoBackground from './TopoBackground';

const GROUPS = [
  {
    id: 'SKL-01',
    label: 'Android Development',
    items: ['Kotlin', 'Java', 'Jetpack Compose', 'MVVM Architecture', 'Firebase', 'Room DB', 'Retrofit', 'Material 3'],
  },
  {
    id: 'SKL-02',
    label: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'Terraform', 'GitHub Actions', 'Linux', 'Nginx'],
  },
  {
    id: 'SKL-03',
    label: 'Cybersecurity',
    items: ['Penetration Testing', 'Secure Coding', 'Threat Modeling', 'Security Auditing', 'OWASP Top 10', 'Vulnerability Assessment'],
  },
  {
    id: 'SKL-04',
    label: 'Leadership & Comms',
    items: ['Public Speaking', 'Team Leadership', 'Event Management', 'Content Strategy', 'Stakeholder Communication'],
  },
];

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

export default function Skills() {
  return (
    <div className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="bottom-left" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Technical Expertise</span>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 72, alignItems: 'start' }} className="skills-layout">
          {/* Left sticky headline */}
          <div style={{ position: 'sticky', top: 80 }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Skills &amp; tools<br />I use every day.
            </h2>
            <p className="section-sub" style={{ marginTop: 16 }}>
              Full-stack — mobile to cloud to pentest.
            </p>
          </div>

          {/* Right — skill groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {GROUPS.map(g => (
              <div key={g.id}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
                  paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{ ...techMono, fontSize: '0.85rem', color: '#a39185' }}>{g.id}</span>
                  <span style={{ ...mono, fontSize: '0.85rem', color: '#eaddc5', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                    {g.label}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {g.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
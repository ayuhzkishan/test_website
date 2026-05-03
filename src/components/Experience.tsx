import React from 'react';
import TopoBackground from './TopoBackground';

const EXPS = [
  {
    id: 'EXP-001',
    period: '2023 — 2027',
    org: 'VSSUT, Burla',
    title: 'B.Tech Undergrad — Computer Science',
    desc: 'Pursuing Computer Science & Engineering with strong foundations in DBMS, Data Structures, Networks, OOP, Java, and Python.',
    highlights: [
      'Active participant in technical workshops and competitive programming',
      'Maintained academic excellence while leading multiple student clubs',
      'Contributor to co-curricular and inter-college technical events',
    ],
  },
  {
    id: 'EXP-002',
    period: 'Mar 2024 — Present',
    org: 'E-Cell, VSSUT',
    title: 'Public Relations Core Member',
    desc: "Core member of VSSUT's Entrepreneurship Cell — leading content creation, public engagement, and multi-stakeholder event logistics.",
    highlights: [
      'Organized E-Summit 2024 — 500+ participants, key industry leaders',
      'Hosted BOEING BUILD 4.0 sensitization camp with KIIT TBI',
      'Led Chai Pe Charcha and a Financial Management & Stock Market bootcamp',
    ],
  },
  {
    id: 'EXP-003',
    period: 'Mar 2024 — Present',
    org: 'Enigma, VSSUT',
    title: 'Android Developer & Cybersecurity Lead',
    desc: "Technical lead for Android and security at Enigma — VSSUT's premier CS club. Focus on building innovative apps and secure coding standards.",
    highlights: [
      'Built college data-collection app streamlining job induction for recruiters & students',
      'Led security audits and code reviews for all club projects',
      'Mentored junior members on Android architecture and security practices',
    ],
  },
];

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

export default function Experience() {
  return (
    <div id="experience" className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="center-left" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label">Professional Journey</span>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 72 }} className="exp-layout">
          {/* Left sticky headline */}
          <div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', position: 'sticky', top: 80 }}>
              Where I've been building.
            </h2>
          </div>

          {/* Right timeline */}
          <div className="timeline">
            {EXPS.map((exp, i) => (
              <div key={exp.id} className="tl-item">
                <div className="tl-dot" />

                {/* meta row */}
                <div style={{ ...techMono, fontSize: '0.58rem', color: '#7a6a60', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {exp.id} · {exp.period}
                </div>

                <div className="card" style={{ padding: '28px 32px' }}>
                  <div style={{ ...mono, fontSize: '0.6rem', color: '#7a6a60', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>
                    {exp.org}
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fdfbf7', letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {exp.title}
                  </h3>
                  <p style={{ ...mono, fontSize: '0.73rem', color: '#a39185', lineHeight: 1.85, marginBottom: 20 }}>
                    {exp.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {exp.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', gap: 10, ...mono, fontSize: '0.7rem', color: '#a39185', lineHeight: 1.6 }}>
                        <span style={{ color: '#fdfbf7', flexShrink: 0 }}>→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
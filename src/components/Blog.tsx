import React from 'react';
import TopoBackground from './TopoBackground';

const POSTS = [
  {
    id: 'POST-001',
    cat: 'Android · Security',
    title: 'Building Secure Android Apps with Jetpack Compose',
    excerpt: 'A deep-dive into end-to-end encryption, certificate pinning, and secure storage in modern Android apps.',
    date: '2024-03-15',
    time: '8 min',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'POST-002',
    cat: 'DevOps',
    title: 'DevOps Best Practices for Mobile CI/CD',
    excerpt: 'How to build an automated, security-first delivery pipeline for Android apps using GitHub Actions and Docker.',
    date: '2024-03-10',
    time: '6 min',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'POST-003',
    cat: 'Cybersecurity',
    title: 'Zero Trust Security in Modern Applications',
    excerpt: "Understanding and implementing zero trust architecture in distributed systems — without slowing delivery.",
    date: '2024-03-05',
    time: '10 min',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
];

const mono: React.CSSProperties = { fontFamily: 'JetBrains Mono, monospace' };

export default function Blog() {
  return (
    <div id="blog" className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="bottom-right" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="section-label">Blog</span>
            <h2 className="section-title" style={{ margin: 0 }}>
              Insights &amp; research.
            </h2>
          </div>
          <a href="#" className="btn btn-outline" style={{ cursor: 'none', fontSize: '0.7rem' }}>View All ↗</a>
        </div>

        {/* 3-col grid with 1px dividers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,0.06)' }} className="blog-grid">
          {POSTS.map(p => (
            <article key={p.id} className="post-card" style={{ background: '#060303' }}>
              <div style={{ position: 'relative' }}>
                <img src={p.img} alt={p.title} className="post-img" />
                <span style={{ position: 'absolute', top: 10, left: 10, ...mono, fontSize: '0.55rem', color: '#7a6a60', background: 'rgba(0,0,0,0.85)', padding: '3px 7px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {p.id}
                </span>
              </div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ ...mono, fontSize: '0.58rem', color: '#7a6a60', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.cat}</span>
                  <span style={{ ...mono, fontSize: '0.55rem', color: '#4a3a35' }}>{p.date} · {p.time}</span>
                </div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fdfbf7', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ ...mono, fontSize: '0.7rem', color: '#a39185', lineHeight: 1.8, marginBottom: 18 }}>
                  {p.excerpt}
                </p>
                <a href="#" style={{ ...mono, fontSize: '0.65rem', color: '#7a6a60', transition: 'color 0.15s', cursor: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#a39185')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a6a60')}>
                  Read post →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
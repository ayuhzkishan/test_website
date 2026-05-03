import React, { useEffect, useRef, useState } from 'react';
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

function BlogCard({ p }: { p: typeof POSTS[0] }) {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

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
      { threshold: 0.7 } // Triggers when 70% of the card is in the viewport
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

  const isActive = isMobile ? isVisible : hovered;

  return (
    <article 
      ref={cardRef} 
      className="post-card" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        background: '#060303',
        borderColor: isActive ? 'rgba(253,251,247,0.25)' : 'rgba(255,255,255,0.06)',
        transition: 'border-color 0.4s ease'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={p.img} 
          alt={p.title} 
          className="post-img" 
          style={{
            filter: isActive ? 'grayscale(20%) brightness(0.85)' : 'grayscale(100%) brightness(0.45)',
            transform: isActive ? 'scale(1.03)' : 'scale(1)',
            transition: 'filter 0.5s ease, transform 0.5s ease'
          }}
        />
        <span style={{ position: 'absolute', top: 12, left: 12, ...mono, fontSize: '0.55rem', color: '#7a6a60', background: 'rgba(0,0,0,0.85)', padding: '4px 8px', border: '1px solid rgba(255,255,255,0.06)' }}>
          {p.id}
        </span>
      </div>
      <div style={{ padding: '28px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ ...mono, fontSize: '0.58rem', color: isActive ? '#a39185' : '#7a6a60', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'color 0.4s ease' }}>{p.cat}</span>
          <span style={{ ...mono, fontSize: '0.55rem', color: '#4a3a35' }}>{p.date} · {p.time}</span>
        </div>
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fdfbf7', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: 12 }}>
          {p.title}
        </h3>
        <p style={{ ...mono, fontSize: '0.72rem', color: '#a39185', lineHeight: 1.8, marginBottom: 20 }}>
          {p.excerpt}
        </p>
        <a href="#" style={{ ...mono, fontSize: '0.65rem', color: isActive ? '#fdfbf7' : '#7a6a60', transition: 'color 0.4s ease', cursor: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#a39185')}
          onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#fdfbf7' : '#7a6a60')}>
          Read post →
        </a>
      </div>
    </article>
  );
}

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

        {/* 3-col grid with proper gaps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, background: 'transparent' }} className="blog-grid">
          {POSTS.map(p => (
            <BlogCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
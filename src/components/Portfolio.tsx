import React, { useEffect, useRef, useState } from 'react';
import TopoBackground from './TopoBackground';

const PROJECTS = [
  {
    id: 'PROJ-001',
    category: 'Android · Security',
    title: 'SecureChat Messenger',
    desc: 'End-to-end encrypted messaging with Material You design. Zero-knowledge architecture, Kotlin + Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'E2E Encryption', 'Firebase'],
    img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
    github: '#', live: '#',
  },
  {
    id: 'PROJ-002',
    category: 'DevOps · Cloud',
    title: 'Cloud Infra Automation',
    desc: 'Infrastructure-as-Code framework for scalable AWS deployments. Automates provisioning, monitoring, and rollback.',
    tags: ['Terraform', 'AWS', 'Docker', 'GitHub Actions'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    github: '#', live: '#',
  },
  {
    id: 'PROJ-003',
    category: 'Cybersecurity · Python',
    title: 'Security Audit Dashboard',
    desc: 'Real-time threat detection platform. Aggregates vulnerability feeds, tracks CVSS scores, auto-generates reports.',
    tags: ['Python', 'React', 'Machine Learning', 'OWASP'],
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    github: '#', live: '#',
  },
  {
    id: 'PROJ-004',
    category: 'DevOps · Security',
    title: 'DevSecOps Pipeline',
    desc: 'Security-first CI/CD integrating SAST, DAST, and dependency scanning before every deployment.',
    tags: ['Jenkins', 'OWASP ZAP', 'GitLab', 'Docker'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    github: '#', live: '#',
  },
];

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

function ProjectCard({ p }: { p: typeof PROJECTS[0] }) {
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
    <div 
      ref={cardRef} 
      className="proj-card" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        background: '#060303', 
        overflow: 'hidden',
        borderRadius: 2,
        border: '1px solid',
        borderColor: isActive ? 'rgba(253,251,247,0.25)' : 'rgba(255,255,255,0.06)',
        transition: 'border-color 0.4s ease'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={p.img} 
          alt={p.title} 
          className="proj-img" 
          style={{
            filter: isActive ? 'grayscale(30%) brightness(0.65)' : 'grayscale(100%) brightness(0.45)',
            transform: isActive ? 'scale(1.03)' : 'scale(1)',
            transition: 'filter 0.5s ease, transform 0.5s ease'
          }}
        />
        <span style={{ position: 'absolute', top: 12, right: 12, ...techMono, fontSize: '0.58rem', color: '#7a6a60', background: 'rgba(0,0,0,0.8)', padding: '3px 8px', border: '1px solid rgba(255,255,255,0.06)' }}>
          {p.id}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '28px 32px' }}>
        <div style={{ ...techMono, fontSize: '0.6rem', color: isActive ? '#a39185' : '#7a6a60', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12, transition: 'color 0.4s ease' }}>
          {p.category}
        </div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#fdfbf7', letterSpacing: '-0.02em', marginBottom: 12 }}>
          {p.title}
        </h3>
        <p style={{ ...mono, fontSize: '0.72rem', color: '#a39185', lineHeight: 1.8, marginBottom: 20 }}>
          {p.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.62rem' }}>{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 18, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 16 }}>
          {[['[ GITHUB ]', p.github], ['[ LIVE DEMO ↗ ]', p.live]].map(([label, href]) => (
            <a key={label as string} href={href as string} style={{ ...mono, fontSize: '0.65rem', color: isActive ? '#fdfbf7' : '#7a6a60', transition: 'color 0.4s ease', cursor: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a39185')}
              onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#fdfbf7' : '#7a6a60')}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div id="portfolio" className="section-wrap" style={{ position: 'relative' }}>
      <TopoBackground variant="top-left" />
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title" style={{ margin: 0 }}>
              Real code.<br />Real impact.
            </h2>
          </div>
          <a href="#contact" className="btn btn-outline" style={{ cursor: 'none', fontSize: '0.7rem' }}>View All ↗</a>
        </div>

        {/* 2×2 grid with proper gaps */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, background: 'transparent' }} className="proj-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
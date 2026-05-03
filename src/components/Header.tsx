import React, { useEffect, useState } from 'react';

const TICKER =
  'Ayush Kishan · Android Developer · DevOps Practitioner · Cybersecurity Enthusiast · VSSUT Burla · Available for Internships · Built with precision · PoC || GTFO · ';

const NAV = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#portfolio'  },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog',       href: '#blog'       },
];

function useLiveMeta() {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return {
    utc:   t.toUTCString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'),
    local: t.toLocaleTimeString('en-IN', { hour12: false }),
    unix:  Math.floor(t.getTime() / 1000),
  };
}

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

export default function Header() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const meta = useLiveMeta();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* ── Scrolling ticker bar ── */}
      <div className="ticker">
        <div className="ticker-track">
          {/* doubled for seamless loop */}
          <span className="ticker-item">{TICKER}</span>
          <span className="ticker-item">{TICKER}</span>
          <span className="ticker-item">{TICKER}</span>
          <span className="ticker-item">{TICKER}</span>
        </div>
      </div>

      {/* ── Navbar ── */}
      <header
        className="navbar"
        style={{ borderBottomColor: scrolled ? 'rgba(253,251,247,0.12)' : 'rgba(253,251,247,0.07)' }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo">
            <div className="nav-logo-icon">AK</div>
            <span>AYUSH KISHAN</span>
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>

          {/* Live clock — UTC / LOCAL */}
          <div className="nav-clock" style={{
            ...techMono,
            fontSize: '0.58rem',
            color: '#a39185', /* Warm yellowish grey */
            lineHeight: 1.6,
            textAlign: 'right',
            flexShrink: 0,
          }}>
            <div>UTC: {meta.utc} &nbsp; LOCAL: {meta.local}</div>
            <div>UNIX: {meta.unix} &nbsp; GMT+5:30 &nbsp;<span className="status-dot" />ON</div>
          </div>

          {/* Desktop CTAs */}
          <div className="nav-actions">
            <a href="#portfolio" className="btn btn-outline">View Work ↗</a>
            <a href="#contact"   className="btn btn-primary">Hire Me ↗</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-btn"
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(253,251,247,0.1)',
              color: '#fdfbf7',
              padding: '6px 12px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.62rem',
              cursor: 'none',
            }}
            aria-label="Toggle menu"
          >
            {open ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            position: 'absolute',
            top: '54px', /* height of the navbar */
            left: 0,
            width: '100%',
            background: 'rgba(6,3,3,0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(253,251,247,0.07)',
            padding: '16px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}>
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ ...mono, fontSize: '0.75rem', color: '#a39185', padding: '8px 0', cursor: 'none', borderBottom: '1px solid rgba(253,251,247,0.05)' }}
              >
                {n.label}
              </a>
            ))}
            {/* Clock in mobile too */}
            <div style={{ ...techMono, fontSize: '0.62rem', color: '#5a4a45', paddingTop: 8, lineHeight: 1.8 }}>
              <div>UTC: {meta.utc} · LOCAL: {meta.local}</div>
              <div>UNIX: {meta.unix}</div>
            </div>
            <div style={{ paddingTop: 8, paddingBottom: 16 }}>
              <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Hire Me ↗</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
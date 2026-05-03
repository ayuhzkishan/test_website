import React, { useEffect, useState } from 'react';

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

/* User Agent Parser */
function parseUA(ua: string) {
  let os = 'UNKNOWN OS';
  if (ua.includes('Win')) os = 'WINDOWS';
  else if (ua.includes('Mac')) os = 'MACOS';
  else if (ua.includes('Linux')) os = 'LINUX';
  else if (ua.includes('Android')) os = 'ANDROID';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'IOS';

  let browser = 'UNKNOWN BROWSER';
  if (ua.includes('Chrome')) browser = 'CHROME';
  else if (ua.includes('Firefox')) browser = 'FIREFOX';
  else if (ua.includes('Safari')) browser = 'SAFARI';
  else if (ua.includes('Edge')) browser = 'EDGE';

  return { os, browser };
}

/* Live diagnostics hook */
function useDiagnostics() {
  const [diag, setDiag] = useState({
    platform: 'DETECTING...',
    network: 'UNKNOWN',
    cores: '—',
    viewport: '—',
    screen: '—',
    colorDepth: '—',
    pixelRatio: '—',
    timezone: '—',
    host: '—',
    cookies: 'DISABLED',
    java: 'DISABLED',
    webgl: 'DETECTING',
    battery: '—',
    geolocation: 'UNKNOWN',
    localStorage: 'UNKNOWN',
    sessionStorage: 'UNKNOWN',
    indexedDB: 'UNKNOWN',
    userAgent: '—',
    memory: '—',
    uptime: '—',
  });

  useEffect(() => {
    const nav = navigator as any;
    const win = window as any;
    const uaInfo = parseUA(nav.userAgent);

    // WebGL renderer
    let webglInfo = 'DISABLED';
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl');
      if (gl) webglInfo = 'ENABLED';
    } catch (_) {}

    // Battery
    if (nav.getBattery) {
      nav.getBattery().then((b: any) => {
        setDiag(d => ({ ...d, battery: `${Math.round(b.level * 100)}% ${b.charging ? 'CHG' : ''}` }));
      });
    }

    // Page uptime
    const start = Date.now();
    const tick = setInterval(() => {
      const secs = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(secs / 3600)).padStart(2, '0');
      const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
      const s = String(secs % 60).padStart(2, '0');
      setDiag(d => ({ ...d, uptime: `${h}:${m}:${s}` }));
    }, 1000);

    setDiag({
      platform: `${uaInfo.browser} / ${uaInfo.os}`,
      network: (nav.connection?.effectiveType || 'UNKNOWN').toUpperCase(),
      cores: String(nav.hardwareConcurrency || '—'),
      viewport: `${window.innerWidth}×${window.innerHeight}`,
      screen: `${window.screen.width}×${window.screen.height}`,
      colorDepth: `${window.screen.colorDepth}BIT`,
      pixelRatio: String(window.devicePixelRatio),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      host: window.location.hostname || 'LOCALHOST',
      cookies: nav.cookieEnabled ? 'ENABLED' : 'DISABLED',
      java: 'DISABLED',
      webgl: webglInfo,
      battery: '—',
      geolocation: 'geolocation' in nav ? 'AVAILABLE' : 'UNAVAILABLE',
      localStorage: (() => { try { localStorage.setItem('t', '1'); localStorage.removeItem('t'); return 'AVAILABLE'; } catch { return 'UNAVAILABLE'; } })(),
      sessionStorage: (() => { try { sessionStorage.setItem('t', '1'); sessionStorage.removeItem('t'); return 'AVAILABLE'; } catch { return 'UNAVAILABLE'; } })(),
      indexedDB: 'indexedDB' in win ? 'AVAILABLE' : 'UNAVAILABLE',
      userAgent: nav.userAgent,
      memory: nav.deviceMemory ? `${nav.deviceMemory * 1024}MB` : 'UNKNOWN',
      uptime: '00:00:00',
    });

    return () => clearInterval(tick);
  }, []);

  return diag;
}

const NAV_COLS = [
  {
    heading: 'NAVIGATE',
    links: [
      { l: 'About',      h: '#about' },
      { l: 'Skills',     h: '#skills' },
      { l: 'Projects',   h: '#portfolio' },
      { l: 'Blog',       h: '#blog' },
      { l: 'Contact',    h: '#contact' },
    ],
  },
  {
    heading: 'DEVSECOPS',
    links: [
      { l: 'Advisories',  h: '#devsecops' },
      { l: 'Pipeline',    h: '#devsecops' },
      { l: 'GitHub ↗',   h: 'https://github.com/ayuhzkishan', ext: true },
    ],
  },
  {
    heading: 'CONNECT',
    links: [
      { l: 'Book a Call',  h: '#contact' },
      { l: 'Email',        h: 'mailto:ayush.kishan29@gmail.com' },
    ],
  },
  {
    heading: 'SOCIAL',
    links: [
      { l: 'GitHub ↗',    h: 'https://github.com/ayuhzkishan', ext: true },
      { l: 'LinkedIn ↗',  h: '#', ext: true },
      { l: 'Twitter ↗',   h: '#', ext: true },
    ],
  },
];

const TICKER_TEXT = 'AK · AYUSH KISHAN · PoC || GTFO · SEC ENGINEERING · CLOUD · DEVSECOPS · ';

function DiagRow({ label, value, label2, value2 }: { label: string; value: string; label2?: string; value2?: string }) {
  return (
    <div className="diag-row" style={{ gap: '4px 8px', marginBottom: 5 }}>
      <span style={{ ...techMono, fontSize: '0.55rem', color: '#4a3a35', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
      <span style={{ ...mono, fontSize: '0.55rem', color: '#7a6a60', letterSpacing: '0.04em' }}>{value}</span>
      {label2 && <span style={{ ...techMono, fontSize: '0.55rem', color: '#4a3a35', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label2}</span>}
      {value2 && <span style={{ ...mono, fontSize: '0.55rem', color: '#7a6a60', letterSpacing: '0.04em' }}>{value2}</span>}
    </div>
  );
}

const linkStyle: React.CSSProperties = { ...mono, fontSize: '0.72rem', color: '#3f3f46', transition: 'color 0.15s', cursor: 'none', display: 'block', marginBottom: 10 };

export default function Footer() {
  const diag = useDiagnostics();

  return (
    <footer style={{ background: '#060303', borderTop: '1px solid rgba(253,251,247,0.07)' }}>

      {/* ── Main two-panel layout ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(253,251,247,0.06)' }} className="footer-main-grid">

          {/* ── LEFT panel ── */}
          <div style={{ background: '#060303', padding: '40px 36px' }}>
            {/* About blurb */}
            <div style={{ ...techMono, fontSize: '0.55rem', color: '#4a3a35', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>ABOUT</div>
            <p style={{ ...mono, fontSize: '0.72rem', color: '#7a6a60', lineHeight: 1.85, marginBottom: 36, maxWidth: 460 }}>
              Ayush Kishan is a security-first engineer specializing in DevSecOps pipelines, cloud infrastructure hardening, and Android development. Building resilient systems from Sambalpur, India.
            </p>

            {/* 4-col nav links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="footer-nav-grid">
              {NAV_COLS.map(col => (
                <div key={col.heading}>
                  <div style={{ ...techMono, fontSize: '0.5rem', color: '#4a3a35', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>{col.heading}</div>
                  {col.links.map(link => (
                    <a
                      key={link.l}
                      href={link.h}
                      target={'ext' in link && link.ext ? '_blank' : undefined}
                      rel={'ext' in link && link.ext ? 'noreferrer' : undefined}
                      style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fdfbf7')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#3f3f46')}
                    >
                      {link.l}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom row of left panel */}
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(253,251,247,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              {/* Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ ...mono, fontSize: '0.55rem', fontWeight: 700, color: '#dc2626' }}>AK</span>
                </div>
                <span style={{ ...mono, fontSize: '0.7rem', color: '#7a6a60', letterSpacing: '0.08em' }}>PORTFOLIO CENTER</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e' }} />
                <span style={{ ...mono, fontSize: '0.58rem', color: '#7a6a60', letterSpacing: '0.08em' }}>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>

            {/* Legal row */}
            <div style={{ marginTop: 16, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(t => (
                <a key={t} href="#" style={{ ...mono, fontSize: '0.58rem', color: '#27272a', cursor: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7a6a60')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#27272a')}>
                  {t}
                </a>
              ))}
            </div>
            <div style={{ ...mono, fontSize: '0.55rem', color: '#27272a', marginTop: 10 }}>
              Ayush Kishan © {new Date().getFullYear()}
            </div>
          </div>

          {/* ── RIGHT panel: Diagnostics ── */}
          <div style={{ background: '#060303', padding: '40px 36px' }}>
            <div style={{ ...techMono, fontSize: '0.55rem', color: '#4a3a35', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>DIAGNOSTICS</div>

            <DiagRow label="Platform"       value={diag.platform}       label2="Language"      value2={navigator.language} />
            <DiagRow label="Network"        value={diag.network}        label2="Memory"        value2={diag.memory} />
            <DiagRow label="Cores"          value={diag.cores}          label2="Uptime"        value2={diag.uptime} />
            <DiagRow label="Viewport"       value={diag.viewport}       label2="Screen"        value2={diag.screen} />
            <DiagRow label="Color Depth"    value={diag.colorDepth}     label2="Pixel Ratio"   value2={diag.pixelRatio} />
            <DiagRow label="Timezone"       value={diag.timezone}       label2="Host"          value2={diag.host} />
            <DiagRow label="Cookies"        value={diag.cookies}        label2="Java"          value2={diag.java} />
            <DiagRow label="WebGL"          value={diag.webgl}          label2="Battery"       value2={diag.battery} />
            <DiagRow label="Geolocation"    value={diag.geolocation}    label2="Local Storage" value2={diag.localStorage} />
            <DiagRow label="Session Storage" value={diag.sessionStorage} label2="IndexedDB"    value2={diag.indexedDB} />

            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', flexShrink: 0 }} />
              <span style={{ ...techMono, fontSize: '0.55rem', color: '#7a6a60' }}>ON TNF</span>
            </div>

            <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid rgba(253,251,247,0.04)' }}>
              <div style={{ ...techMono, fontSize: '0.5rem', color: '#4a3a35', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>User Agent</div>
              <div style={{ ...techMono, fontSize: '0.52rem', color: '#5a4a45', lineHeight: 1.7, wordBreak: 'break-all' }}>
                {navigator.userAgent}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom scrolling ticker ── */}
      <div style={{
        overflow: 'hidden',
        background: '#060303',
        borderTop: '1px solid rgba(253,251,247,0.06)',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
      }}>
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'footer-ticker 30s linear infinite',
          willChange: 'transform',
        }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{ ...techMono, fontSize: '0.65rem', color: '#3f3f46', padding: '0 32px', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 16, height: 16, background: '#fdfbf7', clipPath: 'polygon(4px 0%,100% 0%,100% 100%,0% 100%,0% 4px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ ...techMono, fontSize: '0.4rem', fontWeight: 900, color: '#060303' }}>AK</span>
                </span>
                AYUSH KISHAN
              </span>
              <span style={{ color: '#27272a' }}>·</span>
              <span>PoC || GTFO</span>
              <span style={{ color: '#27272a' }}>·</span>
              <span>SEC ENGINEERING</span>
              <span style={{ color: '#27272a' }}>·</span>
              <span>CLOUD</span>
              <span style={{ color: '#27272a' }}>·</span>
              <span>DEVSECOPS</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .diag-row {
          display: grid;
          grid-template-columns: 120px 1fr 100px 1fr;
        }
        @keyframes footer-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
          .footer-nav-grid  { grid-template-columns: 1fr 1fr !important; }
          .diag-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-nav-grid  { grid-template-columns: 1fr !important; }
          .diag-row { grid-template-columns: 120px 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

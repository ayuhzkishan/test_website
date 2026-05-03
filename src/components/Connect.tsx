import React from 'react';

const ASCII_BAT = `
       _==/          i     i          \\==_
     /XX/            |\\___/|            \\XX\\
   /XXXX\\            |XXXXX|            /XXXX\\
  |XXXXXX\\_         _XXXXXXX_         _/XXXXXX|
 XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
 XXXXXX/^^^^"\\XXXXXXXXXXXXXXXXXXXXX/^^^^^\\XXXXXX
  |XXX|       \\XXX/^^\\XXXXX/^^\\XXX/       |XXX|
    \\X\\         \\X\\    \\X/    /X/         /X/
       \\         \\X\\   /X\\   /X/         /
                  \\X\\ /XXX\\ /X/
                   \\X\\XXXXX/X/
                    \\X\\XXX/X/
                     \\X\\X/X/
                      \\XXX/
                       \\X/
`;

const SOCIALS = [
  { name: 'TryHackMe', id: '@ayuhzkishan',  icon: 'THM' },
  { name: 'LinkedIn',  id: '/in/ayuhzkishan', icon: 'IN' },
  { name: 'X / Twitter', id: '@ayuhzkishan', icon: 'X' },
  { name: 'LeetCode',  id: '/ayuhzkishan',  icon: 'LC' },
  { name: 'GitHub',    id: '@ayuhzkishan',  icon: 'GH' },
];

const mono: React.CSSProperties = { fontFamily: 'JetBrains Mono, monospace' };

export default function Connect() {
  return (
    <div id="connect" className="section-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section" style={{ padding: '60px 28px', maxWidth: 1280, margin: '0 auto' }}>
        
        {/* The Outer Frame matching the screenshot */}
        <div style={{ 
          border: '1px solid rgba(253,251,247,0.15)', 
          background: '#060303', 
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
        }} className="connect-layout">

          {/* Top border decorative ASCII */}
          <div style={{ 
            position: 'absolute', top: -14, left: 16, 
            background: '#060303', padding: '0 8px',
            ...mono, fontSize: '0.55rem', color: '#7a6a60', letterSpacing: '0.15em',
            whiteSpace: 'nowrap'
          }}>
            ABOUT /       ( #        ( (#          # . ) %  ,       / @  @#).( #          , / ) ,  @  #    @ % . /
          </div>
          <div style={{ 
            position: 'absolute', top: -14, right: 16, 
            background: '#060303', padding: '0 8px',
            ...mono, fontSize: '0.55rem', color: '#7a6a60', letterSpacing: '0.15em' 
          }}>
            TRUSTED BY
          </div>

          {/* ── Left Side: Content & ASCII Bg ── */}
          <div style={{ position: 'relative', padding: '40px 32px', overflow: 'hidden', borderRight: '1px solid rgba(253,251,247,0.06)' }}>
            
            {/* ASCII Batman Bg */}
            <pre style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 0,
              color: 'rgba(253,251,247,0.08)', /* Reduced visibility for readability */
              textShadow: '0 0 10px rgba(220, 38, 38, 0.3), 0 0 25px rgba(220, 38, 38, 0.15)', /* Softer red glow */
              ...mono,
              fontSize: '14px',
              lineHeight: '14px',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0
            }}>
              {ASCII_BAT}
            </pre>

            <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
              <h2 style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', 
                fontWeight: 500, 
                color: '#fdfbf7', 
                letterSpacing: '-0.02em', 
                marginBottom: 24,
                lineHeight: 1.1
              }}>
                Stop chasing alerts. Start fixing what's real.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, ...mono, fontSize: '0.75rem', color: '#a39185', lineHeight: 1.6 }}>
                <p>You probably use lots of security tools.</p>
                <p>You probably get lots of alerts.</p>
                <p>You probably spend lots of time chasing them down.</p>
                <p style={{ color: '#eaddc5', fontWeight: 600 }}>But in the end, how many of them were actually worth your time?</p>
                <p>
                  Hacktron finds exploitable vulnerabilities and helps your team<br/>fix what matters.
                </p>
                <p style={{ marginTop: 12 }}>
                  Built by elite hackers who've spent careers exploiting the most<br/>
                  complex and high-value targets, we operate by one principle:<br/>
                  <span style={{ color: '#fdfbf7', fontWeight: 700 }}>PoC || GTFO.</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Side: Scrolling Socials ── */}
          <div style={{ position: 'relative', overflow: 'hidden', height: '100%', background: '#060303' }}>
            
            {/* Fade gradients top/bottom */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, #060303, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, #060303, transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div className="v-scroll-track" style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 0, left: 0, right: 0 }}>
              {/* Double array for seamless loop */}
              {[...SOCIALS, ...SOCIALS].map((s, i) => (
                <div key={i}>
                  {/* Bracket Separator |-   -| */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.3 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: 1, height: 16, background: '#fdfbf7' }} />
                      <div style={{ width: 24, height: 1, background: '#fdfbf7' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: 24, height: 1, background: '#fdfbf7' }} />
                      <div style={{ width: 1, height: 16, background: '#fdfbf7' }} />
                    </div>
                  </div>

                  {/* Logo Text Box */}
                  <a 
                    href="#" 
                    className="social-box"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: 120, /* Fixed height per logo */
                      textDecoration: 'none',
                      cursor: 'none',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: '1.8rem', 
                      fontWeight: 700, 
                      color: '#a39185', 
                      letterSpacing: '-0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12
                    }}>
                      {/* Fake brand icons to mimic the image */}
                      {s.icon === 'THM' && <span style={{fontSize:'1.4rem'}}>🛡️</span>}
                      {s.icon === 'IN' && <span style={{fontSize:'1.4rem'}}>💼</span>}
                      {s.icon === 'X' && <span style={{fontSize:'1.4rem'}}>𝕏</span>}
                      {s.icon === 'LC' && <span style={{fontSize:'1.4rem'}}>⌨️</span>}
                      {s.icon === 'GH' && <span style={{fontSize:'1.4rem'}}>🐙</span>}
                      {s.name.toLowerCase()}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes horizontal-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .v-scroll-track {
          animation: vertical-scroll 15s linear infinite;
        }
        .v-scroll-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 900px) {
          .connect-layout { grid-template-columns: 1fr !important; }
          .v-scroll-track { 
            animation: horizontal-scroll 20s linear infinite !important; 
            flex-direction: row !important; 
            width: max-content;
            position: relative !important; 
          }
          .social-box { min-width: 200px; height: 80px !important; }
          /* Hide brackets on mobile to keep the ticker clean */
          .v-scroll-track > div > div:first-child { display: none !important; }
        }
      `}</style>
    </div>
  );
}

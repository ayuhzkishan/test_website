import React, { useState } from 'react';

const mono: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" };
const techMono: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div id="contact" className="section-wrap">
      <div className="section">
        <span className="section-label">Get in Touch</span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }} className="contact-layout">
          {/* Left — copy + info */}
          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Let's work<br />together.
            </h2>
            <p className="section-sub" style={{ marginBottom: 48 }}>
              Open to internships, collaborations, and interesting engineering problems. Reach out — let's build something worthwhile.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {[
                { label: 'EMAIL',    val: 'ayush.kishan29@gmail.com', href: 'mailto:ayush.kishan29@gmail.com' },
                { label: 'PHONE',    val: '+91 78949-74368',          href: 'tel:+917894974368' },
                { label: 'LOCATION', val: 'Sambalpur, Odisha, India', href: null },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ ...techMono, fontSize: '0.55rem', color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} 
                      className="contact-info-link"
                      style={{ ...mono, fontSize: '0.82rem', transition: 'color 0.15s', cursor: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#fdfbf7')}
                      onMouseLeave={e => (e.currentTarget.style.color = '')}>
                      {item.val}
                    </a>
                  ) : (
                    <span className="contact-info-link" style={{ ...mono, fontSize: '0.82rem' }}>{item.val}</span>
                  )}
                </div>
              ))}

              {/* Social links */}
              <div style={{ marginTop: 12, display: 'flex', gap: 16 }}>
                {[['[ GITHUB ]','https://github.com/ayuhzkishan'],['[ LINKEDIN ]','#'],['[ TWITTER ]','#']].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="footer-link"
                    style={{ ...mono, fontSize: '0.65rem', transition: 'color 0.15s', cursor: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#a1a1aa')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card" style={{ padding: '36px' }}>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { id: 'name',    label: 'Your Name',      type: 'text',  placeholder: 'Ayush Kishan' },
                { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'you@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="form-label">{f.label}</label>
                  <input
                    className="form-input"
                    id={f.id} name={f.id} type={f.type}
                    placeholder={f.placeholder}
                    value={(form as any)[f.id]}
                    onChange={handle}
                    style={{ cursor: 'none' }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-input"
                  id="message" name="message" rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handle}
                  style={{ cursor: 'none' }}
                />
              </div>
              <button type="submit" className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.75rem', cursor: 'none', marginTop: 4 }}>
                SEND MESSAGE ↗
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
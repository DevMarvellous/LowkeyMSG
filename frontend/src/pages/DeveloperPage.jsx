import React from 'react';

export default function DeveloperPage() {
  return (
    <main className="page">
      <section className="card" style={{ maxWidth: 720, marginInline: 'auto' }}>
        <div className="dev-header">
          <div className="dev-avatar">
            <span>MA</span>
          </div>
          <div>
            <h1 className="hero-title">About the developer</h1>
            <p className="hero-subtitle">
              Lowkey MSG was designed and built by{' '}
              <span className="hero-highlight">Marvellous Adepoju</span>, a developer who enjoys
              crafting clean, focused experiences with the MERN stack.
            </p>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-title">Connect with Marvellous</h2>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.75rem' }}>
            Say hi, share feedback, or reach out for collaborations on any of these platforms.
          </p>

          <div className="dev-links">
            <a
              className="dev-link-item"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dev-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V24h-4.5V8.25zM8.5 8.25h4.3v2.14h.06c.6-1.1 2.06-2.27 4.24-2.27 4.54 0 5.38 2.98 5.38 6.86V24h-4.5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24h-4.5V8.25z" />
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              className="dev-link-item"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dev-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>

            <a
              className="dev-link-item"
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dev-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.5 3c.3 1.6 1.5 3 3.1 3.4V9c-1.5-.1-2.9-.6-4.1-1.4v6.9c0 3.7-2.5 5.5-5.1 5.5-2.7 0-5-2-5-4.9 0-2.9 2.2-4.9 4.9-4.9.5 0 1 .1 1.5.2v2.7c-.4-.3-.9-.4-1.4-.4-1.1 0-2.1.9-2.1 2.3 0 1.3 1 2.3 2.1 2.3 1.1 0 2.1-.8 2.1-2.3V3h4z" />
                </svg>
              </span>
              <span>TikTok</span>
            </a>

            <a
              className="dev-link-item"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dev-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3h4.3l3.1 5.3L13.8 3H21l-6.2 8.4L21 21h-4.3l-3.4-5.7L9 21H3l6.5-8.6L3 3z" />
                </svg>
              </span>
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


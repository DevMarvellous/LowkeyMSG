import React from 'react';

export default function DeveloperPage() {
  return (
    <main className="page">
      <section className="card" style={{ maxWidth: 720, marginInline: 'auto' }}>
        <div className="dev-header">
          <div className="dev-avatar">
            <img
              src="/1767461339832.png"
              alt="Portrait of Marvellous Adepoju"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.textContent = 'MA';
              }}
            />
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
              href="https://www.linkedin.com/in/marvellous-adepoju-a33a893a2"
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
              href="https://www.instagram.com/marvel_develops"
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
              href="https://www.tiktok.com/@adepojumarvellou1"
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
              href="https://x.com/marvel_14_code"
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

            <a
              className="dev-link-item"
              href="https://github.com/DevMarvellous"
              target="_blank"
              rel="noreferrer"
            >
              <span className="dev-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.48 0-.24-.01-1.02-.01-1.85-2.48.55-3-1.09-3-1.09-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-1.98-.23-4.07-1.03-4.07-4.6 0-1.02.35-1.85.93-2.5-.09-.23-.4-1.18.09-2.45 0 0 .75-.25 2.46.95A8.23 8.23 0 0 1 12 7.5c.76 0 1.53.11 2.25.32 1.71-1.2 2.46-.95 2.46-.95.49 1.27.18 2.22.09 2.45.58.65.93 1.48.93 2.5 0 3.58-2.09 4.37-4.08 4.6.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


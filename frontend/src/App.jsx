import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { api } from './api';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import PublicProfilePage from './pages/PublicProfilePage.jsx';
import DeveloperPage from './pages/DeveloperPage.jsx';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-badge">LM</div>
        <span>Lowkey MSG</span>
      </Link>
      <nav className="navbar-links">
        {user ? (
          <>
            <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
              Dashboard
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/developer')}>
              Developer
            </button>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline" onClick={() => navigate('/login')}>
              Log in
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/developer')}>
              Developer
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              Join Lowkey
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

function Landing({ user }) {
  return (
    <main className="page">
      <section className="card">
        <div>
          <h1 className="hero-title">
            Drop your <span className="hero-highlight">Lowkey MSGs</span>.
          </h1>
          <p className="hero-subtitle">
            Create a profile link, share it anywhere, and collect honest anonymous messages from
            friends, followers, and strangers. No signup needed for senders—just pure, lowkey
            feedback.
          </p>

          <div className="chip-row">
            <span className="chip">
              <span className="chip-dot" />
              Online status hidden
            </span>
            <span className="chip">No account needed to send</span>
            <span className="chip">Built with Mongo, Express, React, Node</span>
          </div>

          {user ? (
            <div className="profile-link-box">
              <div className="pill">
                Logged in as <strong>{user.username}</strong>
              </div>
              <p style={{ marginTop: '0.4rem' }}>
                Head to your dashboard to copy your personal message link and start sharing.
              </p>
            </div>
          ) : (
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#e5e7eb' }}>
              Ready to get real? <strong>Sign up</strong> to claim your Lowkey MSG link, or send an
              anonymous note to a friend who already has one.
            </p>
          )}
        </div>

        <div className="form-section">
          <h2 className="form-title">Get your Lowkey link</h2>
          <p
            style={{
              fontSize: '0.85rem',
              color: '#9ca3af',
              marginBottom: '0.75rem',
            }}
          >
            {user
              ? 'Jump back into your inbox and see what people are saying.'
              : 'Create a free account in seconds, then share your link on socials, bio, or DMs.'}
          </p>
          {user ? (
            <Link to="/dashboard">
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Open my dashboard
              </button>
            </Link>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.3rem' }}>
                  Sign up with email
                </button>
              </Link>
              <p style={{ marginTop: '0.9rem', fontSize: '0.83rem', color: '#9ca3af' }}>
                Already have an account?{' '}
                <Link to="/login" className="link">
                  Log in here
                </Link>
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get('/auth/me');
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  if (loading) {
    return (
      <div className="app-shell">
        <Navbar user={null} setUser={setUser} />
        <main className="page">
          <div style={{ color: '#e5e7eb' }}>Loading Lowkey MSG...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} />} />
        <Route path="/dashboard" element={<DashboardPage user={user} />} />
        <Route path="/u/:profileSlug" element={<PublicProfilePage />} />
        <Route path="/developer" element={<DeveloperPage />} />
      </Routes>
      <footer className="footer">
        <span>Developed by Marvellous Adepoju · Lowkey MSG · MERN stack demo</span>
      </footer>
    </div>
  );
}


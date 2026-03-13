import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api';

export default function RegisterPage({ setUser }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/auth/register', form);
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="card" style={{ maxWidth: 760 }}>
        <div>
          <h1 className="hero-title">
            Claim your <span className="hero-highlight">Lowkey MSG</span> link.
          </h1>
          <p className="hero-subtitle">
            Pick a username, drop your email, and you’re in. Share your link and start receiving
            honest, anonymous messages in your private inbox.
          </p>
          <div className="chip-row">
            <span className="chip">Email stays private</span>
            <span className="chip">You can log out anytime</span>
          </div>
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          <h2 className="form-title">Create account</h2>
          {error && <div className="error-text">{error}</div>}
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={30}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                style={{ paddingRight: '3rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  color: '#6b7280',
                  padding: 0,
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <small>Use at least 6 characters.</small>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? 'Creating account…' : 'Create account'}
          </button>
          <p style={{ marginTop: '0.9rem', fontSize: '0.83rem', color: '#9ca3af' }}>
            Already on Lowkey MSG?{' '}
            <Link to="/login" className="link">
              Log in here
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}


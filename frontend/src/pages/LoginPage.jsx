import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api';

export default function LoginPage({ setUser }) {
  const [form, setForm] = useState({ emailOrUsername: '', password: '' });
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
      const res = await api.post('/auth/login', form);
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="card" style={{ maxWidth: 720 }}>
        <div>
          <h1 className="hero-title">
            Welcome back to <span className="hero-highlight">Lowkey MSG</span>.
          </h1>
          <p className="hero-subtitle">
            Log in to see what people have been saying, copy your link again, or clear your inbox.
          </p>
          <div className="chip-row">
            <span className="chip">Use your email or username</span>
            <span className="chip">Messages stay anonymous</span>
          </div>
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          <h2 className="form-title">Log in</h2>
          {error && <div className="error-text">{error}</div>}
          <div className="field">
            <label htmlFor="emailOrUsername">Email or username</label>
            <input
              id="emailOrUsername"
              name="emailOrUsername"
              value={form.emailOrUsername}
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
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
            {loading ? 'Logging in…' : 'Log in'}
          </button>
          <p style={{ marginTop: '0.9rem', fontSize: '0.83rem', color: '#9ca3af' }}>
            New here?{' '}
            <Link to="/register" className="link">
              Create a Lowkey MSG account
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}


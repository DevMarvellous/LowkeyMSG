import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';

export default function PublicProfilePage() {
  const { profileSlug } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/users/profile/${profileSlug}`);
        setProfile(res.data.user);
      } catch (err) {
        setError('Profile not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileSlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setSending(true);
    setError('');
    try {
      await api.post(`/messages/send/${profileSlug}`, { content });
      setContent('');
      setSent(true);
      setTimeout(() => setSent(false), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not send message');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <main className="page">
        <div style={{ color: '#e5e7eb' }}>Loading profile…</div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="page">
        <section className="card" style={{ maxWidth: 640 }}>
          <div>
            <h1 className="hero-title">
              Lowkey <span className="hero-highlight">MSG</span>
            </h1>
            <p className="hero-subtitle">
              This profile link is not active. Ask your friend to share their current Lowkey MSG link
              or create your own.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="card" style={{ maxWidth: 760 }}>
        <div>
          <h1 className="hero-title">
            Send a Lowkey message to <span className="hero-highlight">@{profile.username}</span>
          </h1>
          <p className="hero-subtitle">
            They won’t see who you are. Share a compliment, confession, feedback, or anything you’ve
            been too shy to say out loud.
          </p>
          <div className="chip-row">
            <span className="chip">No login needed</span>
            <span className="chip">Totally anonymous</span>
          </div>
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          <h2 className="form-title">Drop your message</h2>
          {error && <div className="error-text">{error}</div>}
          <div className="field">
            <label htmlFor="content">Your anonymous message</label>
            <textarea
              id="content"
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={2000}
              placeholder="Type something real, kind, or honest…"
              required
            />
            <small>{content.length}/2000 characters</small>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send anonymously'}
          </button>
          {sent && (
            <p style={{ marginTop: '0.7rem', fontSize: '0.8rem', color: '#bbf7d0' }}>
              Message sent! They’ll see it in their Lowkey MSG inbox.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}


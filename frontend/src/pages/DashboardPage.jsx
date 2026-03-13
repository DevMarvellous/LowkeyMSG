import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export default function DashboardPage({ user }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const fetchMessages = async () => {
    if (!user) return;
    setLoading(true);
    setError('');
    try {
      const res = await api.get('/messages/my');
      setMessages(res.data.messages || []);
    } catch (err) {
      setError('Could not load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchMessages();
  }, [user, navigate]);

  if (!user) return null;

  const publicUrl = `${window.location.origin}/u/${user.profileSlug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="page">
      <section className="card">
        <div>
          <h1 className="hero-title">
            Hey <span className="hero-highlight">{user.username}</span> 👋
          </h1>
          <p className="hero-subtitle">
            This is your Lowkey MSG inbox. Share your link, then come back here to read what people
            are sending you—completely anonymously.
          </p>
          <div className="profile-link-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#e5e7eb' }}>Your public message link</span>
              <span className="badge">Share this</span>
            </div>
            <div className="profile-link-row">
              <span className="profile-link-text">{publicUrl}</span>
              <button className="btn btn-outline" type="button" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <p style={{ marginTop: '0.6rem', fontSize: '0.8rem', color: '#9ca3af' }}>
            Tip: Drop it in your Instagram bio, TikTok profile, Discord status, or send it directly
            in chats to start getting Lowkey MSGs.
          </p>
        </div>

        <div className="form-section">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <h2 className="form-title" style={{ marginBottom: 0 }}>
              Inbox <span style={{ opacity: 0.7 }}>({messages.length})</span>
            </h2>
            <button
              type="button"
              className="btn btn-outline"
              onClick={fetchMessages}
              disabled={loading}
            >
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>
          {error && <div className="error-text">{error}</div>}
          {loading ? (
            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Loading messages…</p>
          ) : messages.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
              No messages yet. Share your link and check back later to see what people send you.
            </p>
          ) : (
            <div className="messages-list">
              {messages.map((m) => (
                <article key={m._id} className="message-item">
                  <div className="message-meta">
                    <span>Anonymous</span>
                    <span>{new Date(m.createdAt).toLocaleString()}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>{m.content}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


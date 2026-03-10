import { useState } from 'react';

const POPULAR_TAGS = ['Writing AI', 'Video AI', 'Coding AI', 'Image AI', 'Research AI'];

export default function HeroSection({ searchTerm, setSearchTerm }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section className="hero-section" style={{ padding: '80px 24px 40px', textAlign: 'center' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Discover the Best AI Tools
            </h1>
            <p className="hero-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                Find powerful AI tools for writing, coding, design, research, and productivity.
            </p>

            <div className="search-wrapper" style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
                <svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: isFocused ? 'var(--primary)' : 'var(--text-muted)', transition: 'color 0.2s' }}
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    role="searchbox"
                    className="hero-search-input"
                    placeholder="Search AI tools by name or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        padding: '20px 24px 20px 56px',
                        fontSize: '1.1rem',
                        borderRadius: '99px',
                        background: 'var(--card-bg)',
                        border: `2px solid ${isFocused ? 'var(--primary)' : 'var(--card-border)'}`,
                        color: 'var(--text-main)',
                        boxShadow: isFocused ? '0 0 0 4px var(--primary-glow)' : '0 8px 32px rgba(0,0,0,0.3)',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                    }}
                />
            </div>

            <div className="popular-tags" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
                {POPULAR_TAGS.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '99px',
                            border: '1px solid var(--card-border)',
                            background: 'var(--panel-bg)',
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => {
                            e.target.style.background = 'var(--primary-glow)';
                            e.target.style.color = 'var(--primary)';
                            e.target.style.borderColor = 'var(--primary)';
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = 'var(--panel-bg)';
                            e.target.style.color = 'var(--text-muted)';
                            e.target.style.borderColor = 'var(--card-border)';
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </section>
    );
}

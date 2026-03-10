import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubmitToolPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        website: '',
        category: 'Writing AI',
        description: '',
        logoUrl: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for submitting! Your tool will be reviewed for inclusion in the directory.');
        navigate('/');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '64px auto', padding: '0 24px' }}>
            <button
                onClick={() => navigate(-1)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer', fontSize: '1rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Directory
            </button>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px', padding: '48px', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>Submit Your AI Tool</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px' }}>
                    Join the fastest growing directory of AI tools. Increase your visibility and acquire new users.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontWeight: 600, color: 'var(--text-main)' }}>Tool Name</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g. ChatGPT"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel-bg)', border: '1px solid var(--card-border)', color: 'white', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontWeight: 600, color: 'var(--text-main)' }}>Website URL</label>
                            <input
                                required
                                type="url"
                                placeholder="https://example.com"
                                value={formData.website}
                                onChange={e => setFormData({ ...formData, website: e.target.value })}
                                style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel-bg)', border: '1px solid var(--card-border)', color: 'white', fontSize: '1rem', outline: 'none' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 600, color: 'var(--text-main)' }}>Category</label>
                        <select
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                            style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel-bg)', border: '1px solid var(--card-border)', color: 'white', fontSize: '1rem', outline: 'none', cursor: 'pointer' }}
                        >
                            <option>AI Assistant</option>
                            <option>Writing AI</option>
                            <option>Video AI</option>
                            <option>Image AI</option>
                            <option>Coding AI</option>
                            <option>Research AI</option>
                            <option>Marketing AI</option>
                            <option>Automation</option>
                            <option>Productivity</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 600, color: 'var(--text-main)' }}>Logo URL</label>
                        <input
                            type="url"
                            placeholder="https://example.com/logo.png"
                            value={formData.logoUrl}
                            onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
                            style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel-bg)', border: '1px solid var(--card-border)', color: 'white', fontSize: '1rem', outline: 'none' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 600, color: 'var(--text-main)' }}>Short Description</label>
                        <textarea
                            required
                            rows="4"
                            placeholder="Explain what your AI tool does in 1-2 sentences..."
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel-bg)', border: '1px solid var(--card-border)', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            marginTop: '16px',
                            padding: '16px 32px',
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 0 20px var(--primary-glow)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 30px var(--primary-glow)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 20px var(--primary-glow)'; }}
                    >
                        Submit AI Tool
                    </button>
                </form>
            </div>
        </div>
    );
}

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { toolsData } from '../data/tools';

export default function ToolDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const tool = useMemo(() => {
        return toolsData.find(t => t.id === id);
    }, [id]);

    if (!tool) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px', color: 'var(--text-main)' }}>
                <h2>Tool Not Found</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The AI tool you are looking for does not exist in our directory.</p>
                <button onClick={() => navigate('/')} className="visit-btn" style={{ padding: '12px 24px', cursor: 'pointer' }}>Return Home</button>
            </div>
        );
    }

    // Related tools from the same category
    const relatedTools = useMemo(() => {
        return toolsData.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 3);
    }, [tool]);

    return (
        <div className="tool-detail-page" style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto', color: 'var(--text-main)' }}>
            <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Directory
            </button>

            <div className="tool-detail-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '24px', padding: '48px', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>

                    <div style={{ width: '128px', height: '128px', flexShrink: 0, borderRadius: '24px', background: 'var(--panel-bg)', padding: '16px', border: '1px solid var(--card-hover-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={tool.logoUrl} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'block'; }} />
                        <div style={{ display: 'none', color: 'var(--primary)' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>{tool.name}</h1>
                            <span className="category-tag">{tool.category}</span>
                        </div>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                            {tool.description}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                                {tool.pricing}
                            </div>
                        </div>

                        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--primary)', color: 'white', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', transition: 'all 0.2s', boxShadow: '0 0 20px var(--primary-glow)' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 30px var(--primary-glow)'; }} onMouseLeave={(e) => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 0 20px var(--primary-glow)'; }}>
                            Visit Official Website
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>

                </div>
            </div>

            {/* SEO / Related Tools Section */}
            {relatedTools.length > 0 && (
                <div style={{ marginTop: '64px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        More {tool.category} Tools
                    </h3>
                    <div className="tool-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                        {relatedTools.map(t => (
                            <Link to={`/tool/${t.id}`} key={t.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="tool-card" style={{ height: '100%' }}>
                                    <div className="card-header">
                                        <img src={t.logoUrl} alt={t.name} style={{ width: '40px', height: '40px', borderRadius: '8px' }} onError={(e) => e.target.style.display = 'none'} />
                                        <span className="category-tag">{t.category}</span>
                                    </div>
                                    <h4 className="card-title" style={{ marginTop: '16px', marginBottom: '8px' }}>{t.name}</h4>
                                    <p className="card-desc">{t.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

import { useState } from 'react';

// Subcomponent to handle logo fallbacks gracefully
function ToolLogo({ toolName, domain, preGeneratedLogoUrl }) {
    const [errorLevel, setErrorLevel] = useState(0);

    // 1. Try provided Google Favicon URL first
    // 2. Try Clearbit (high quality but sometimes misses or blocks)
    // 3. Try Icon.horse (good generic fallback for favicons)
    const sources = [
        preGeneratedLogoUrl, // Mostly Google Favicon
        `https://logo.clearbit.com/${domain}`,
        `https://icon.horse/icon/${domain}`
    ].filter(Boolean);

    const handleError = () => {
        setErrorLevel(prev => prev + 1);
    };

    if (errorLevel < sources.length && domain) {
        return (
            <img
                src={sources[errorLevel]}
                alt={`${toolName} logo`}
                className="tool-logo"
                onError={handleError}
            />
        );
    }

    // Final fallback: A generic AI logo (Sparkles/Magic icon)
    return (
        <div className="tool-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-glow)', color: 'var(--text-main)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
        </div>
    );
}

export default function ToolCard({ tool }) {
    let domain = '';
    try {
        domain = new URL(tool.link).hostname;
        if (domain.startsWith('www.')) domain = domain.substring(4);
    } catch (e) {
        domain = '';
    }

    return (
        <div className="tool-card">
            <div className="card-header">
                <ToolLogo toolName={tool.name} domain={domain} preGeneratedLogoUrl={tool.logoUrl} />
                <span className="category-tag">{tool.category}</span>
            </div>
            <h3 className="card-title">{tool.name}</h3>
            <p className="card-desc" title={tool.description}>{tool.description}</p>
            {tool.use_case && (
                <div style={{ fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '16px', fontWeight: '500' }}>
                    {tool.use_case}
                </div>
            )}

            <div className="card-footer">
                <span className="pricing-label">
                    {/* Tag icon */}
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {tool.pricing}
                </span>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                    Visit Tool
                    {/* External link icon */}
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

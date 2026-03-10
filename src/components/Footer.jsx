export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="logo-icon" style={{ marginBottom: '16px' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>
                    </div>
                    <h3 className="footer-title">AI Tools Directory</h3>
                    <p className="footer-desc">
                        Discover the best AI tools to supercharge your workflow. The ultimate directory for modern professionals.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Explore</h4>
                        <a href="#tools">AI Tools</a>
                        <a href="#categories">Categories</a>
                        <a href="/submit">Submit Tool</a>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#privacy">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AI Tools Directory. All rights reserved.</p>
                <p className="disclaimer">
                    All product names, logos, and brands are property of their respective owners.
                    This website lists AI tools for discovery purposes and does not claim ownership of any tools.
                </p>
            </div>
        </footer>
    );
}

import ToolCard from './ToolCard';

export default function FeaturedSection({ tools, title, icon }) {
    if (!tools || tools.length === 0) return null;

    return (
        <section style={{ padding: '64px 0 32px' }}>
            <h2 className="section-title">
                {icon || '⭐'}
                {title || 'Featured AI Tools'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </section>
    );
}

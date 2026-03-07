import ToolCard from './ToolCard';

export default function ToolGrid({ tools }) {
    if (tools.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--text-muted)' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No tools found 🧐</p>
                <p>Try adjusting your search or category filter.</p>
            </div>
        );
    }

    return (
        <div className="tool-grid">
            {tools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
            ))}
        </div>
    );
}

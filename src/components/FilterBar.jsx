export default function FilterBar({ categories, activeCategory, setActiveCategory }) {
    return (
        <div className="filter-bar">
            <button
                className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

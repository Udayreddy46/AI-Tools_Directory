import { useState, useMemo } from 'react';
import { toolsData } from '../data/tools';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import ToolGrid from '../components/ToolGrid';

const ITEMS_PER_PAGE = 12;

// Helper to detect if a search string maps to a specific category
const detectCategoryKeywords = (query) => {
    const q = query.toLowerCase();

    if (q.includes('writ') || q.includes('copy')) return 'Writing';
    if (q.includes('video')) return 'Video';
    if (q.includes('image') || q.includes('art') || q.includes('photo')) return 'Image';
    if (q.includes('cod') || q.includes('develop') || q.includes('program')) return 'Coding';
    if (q.includes('research')) return 'Research';
    if (q.includes('audio') || q.includes('voice') || q.includes('music') || q.includes('sound')) return 'Audio';
    if (q.includes('productiv') || q.includes('workspace') || q.includes('task')) return 'Productivity';
    if (q.includes('market') || q.includes('seo') || q.includes('sale')) return 'Marketing';
    if (q.includes('automat')) return 'Automation';
    if (q.includes('assistant') || q.includes('chat')) return 'AI Assistant';

    return null;
};

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(toolsData.map(t => t.category));
        return Array.from(cats).sort();
    }, []);

    // Filter tools
    const filteredTools = useMemo(() => {
        const lowerSearch = searchTerm.toLowerCase().trim();
        const inferredCategory = lowerSearch ? detectCategoryKeywords(lowerSearch) : null;

        return toolsData.filter(tool => {
            // 1. Direct Text Match
            const matchesSearchText =
                tool.name.toLowerCase().includes(lowerSearch) ||
                tool.description.toLowerCase().includes(lowerSearch) ||
                tool.category.toLowerCase().includes(lowerSearch);

            // 2. Synonymous Category Match
            const matchesInferredCategory = Boolean(inferredCategory && tool.category === inferredCategory);

            const matchesSearch = lowerSearch === '' || matchesSearchText || matchesInferredCategory;
            const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;

            const isMatch = matchesSearch && matchesCategory;

            // Highlight logic: Only highlight if there is an active search term
            if (isMatch) {
                tool.highlighted = Boolean(lowerSearch !== '');
            } else {
                tool.highlighted = false;
            }

            return isMatch;
        });
    }, [searchTerm, activeCategory]);

    // Pagination slice
    const displayedTools = filteredTools.slice(0, visibleCount);
    const hasMore = visibleCount < filteredTools.length;

    // Handlers
    const handleLoadMore = () => setVisibleCount(prev => prev + ITEMS_PER_PAGE);

    const handleSearchChange = (val) => {
        setSearchTerm(val);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleCategoryChange = (val) => {
        setActiveCategory(val);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    return (
        <>
            <Header searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
            <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={handleCategoryChange}
            />
            <ToolGrid tools={displayedTools} />

            {hasMore && (
                <div className="pagination">
                    <button className="load-more-btn" onClick={handleLoadMore}>
                        Load More Tools
                    </button>
                </div>
            )}
        </>
    );
}

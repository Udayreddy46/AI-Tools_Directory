import { useState, useMemo } from 'react';
import { toolsData } from './data/tools';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ToolGrid from './components/ToolGrid';

const ITEMS_PER_PAGE = 12;

function App() {
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
    return toolsData.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
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
    <div className="app-container">
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

      <footer style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid var(--card-border)', marginTop: 'auto', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} AI Tools Directory. Created by You.</p>
      </footer>
    </div>
  );
}

export default App;

export default function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className="header">
            <h1>AI Tools Directory</h1>
            <p>Discover the best artificial intelligence tools to boost your productivity.</p>
            <div className="search-container">
                <svg
                    className="search-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search AI tools by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </header>
    );
}

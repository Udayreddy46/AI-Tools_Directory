import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ToolDetailPage from './pages/ToolDetailPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tool/:id" element={<ToolDetailPage />} />
      </Routes>

      <footer style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid var(--card-border)', marginTop: 'auto', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} AI Tools Directory. Created by You.</p>
        <p style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.7 }}>
          Disclaimer: All product names, logos, and brands are property of their respective owners.
          This directory lists AI tools only for discovery purposes and does not claim ownership or partnership with any listed product.
        </p>
      </footer>
    </div>
  );
}

export default App;

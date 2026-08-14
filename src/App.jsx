import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif' }}>
        {/* Navbar */}
        <nav style={{ backgroundColor: '#333', padding: '15px', color: '#fff', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Home</Link>
          <Link to="/details" style={{ color: '#fff', textDecoration: 'none' }}>📰 News Details</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>📞 Contact Us</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
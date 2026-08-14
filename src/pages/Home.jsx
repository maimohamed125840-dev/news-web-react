import React, { useState, useEffect } from 'react';
import { getTopNews } from '../api/newsApi';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopNews().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>جاري تحميل الأخبار... ⌛</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>آخر الأخبار 📰</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {articles.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            {item.urlToImage && (
              <img 
                src={item.urlToImage} 
                alt={item.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
              />
            )}
            <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{item.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>{item.description?.slice(0, 90)}...</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
              قراءة التفاصيل ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
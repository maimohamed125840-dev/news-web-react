import React from 'react';

function NewsDetails() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📌 Full Article Details</h2>
      <hr />
      <h3>Latest Innovations in Artificial Intelligence</h3>
      <p style={{ lineHeight: '1.8', color: '#333' }}>
        This is a sample layout for full news story content. Here you can display full article paragraphs, attached photos, author info, and publication timestamps.
      </p>
      <button style={{ padding: '8px 15px', cursor: 'pointer' }}>🔙 Back to Home</button>
    </div>
  );
}

export default NewsDetails;
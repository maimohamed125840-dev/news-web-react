import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📞 Contact Editorial Team</h2>
      <hr />
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" style={{ padding: '8px' }} />

        <label>Email Address:</label>
        <input type="email" placeholder="email@example.com" style={{ padding: '8px' }} />

        <label>Message / Suggestion:</label>
        <textarea rows="4" placeholder="Write your message here..." style={{ padding: '8px' }}></textarea>

        <button type="button" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}

export default Contact;
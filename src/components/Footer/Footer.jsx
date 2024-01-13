
import React from 'react';
import './Footer.css'; // Import your Footer-specific styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Add text or icon links to your GitHub, LinkedIn, and other platforms */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more links as needed */}
      </div>
    </footer>
  );
};

export default Footer;

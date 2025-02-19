import React from 'react';
import './cssfiles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Location</h2>
          <p>123 Street Name</p>
          <p>Dhemaji, Assam</p>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Phone: +916001332087</p>
          <p>Email: purnota@example.com</p>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Website copyright</p>
      </div>
    </footer>
  );
}

export default Footer;

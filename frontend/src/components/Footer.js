import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">SellHole</h3>
            <p className="footer-description">
              Connecting rural vendors with urban markets. Bringing fresh, authentic products 
              directly from farmers and artisans to your doorstep.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FiFacebook />
              </a>
              <a href="#" className="social-link">
                <FiTwitter />
              </a>
              <a href="#" className="social-link">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/categories/agriculture">Agriculture</Link></li>
              <li><Link to="/categories/handicrafts">Handicrafts</Link></li>
              <li><Link to="/categories/textiles">Textiles</Link></li>
              <li><Link to="/categories/food">Food Products</Link></li>
              <li><Link to="/categories/organic">Organic</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>support@sellhole.com</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+91 12345 67890</span>
              </div>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>123 Market Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SellHole. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

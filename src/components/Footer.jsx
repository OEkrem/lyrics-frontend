import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './footer.css';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? 'footer-dark' : 'footer-light'}`}>
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <NavLink to="/" className="footer-logo-link">
            <img
              src={`${process.env.PUBLIC_URL}/image/i2i-systems-logo.png`}
              alt="Company Logo"
              className="footer-logo-img"
            />
            <span className="footer-logo-text">i2i Systems</span>
          </NavLink>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/OEkrem" target="_blank" rel="noopener noreferrer" className="footer-social-link">Github</a>
          <a href="https://www.linkedin.com/in/onurekremyildirim" target="_blank" rel="noopener noreferrer" className="footer-social-link">Linkedin</a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} i2i Systems. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}

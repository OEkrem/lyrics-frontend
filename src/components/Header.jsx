import { NavLink } from 'react-router-dom';
import './header.css';
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <nav className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="nav-container">
        {/* Sol Kısım - Logo */}
        <NavLink className="leftside" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/image/i2i-systems-logo.png`}
            alt="Company Logo"
            className="logo"
          />
          <span className="companyName">i2i Systems</span>
        </NavLink>

        {/* Sağ Kısım - Menü */}
        <div className="rightside">
          <ul>
            <li>
              <button className="theme-toggle-btn" onClick={toggleMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
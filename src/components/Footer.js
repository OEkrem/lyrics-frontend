import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {

  const { darkMode } = useContext(ThemeContext);

  return (

    <footer className= {darkMode ? 
    "bg-dark py-4 border-top" :
    "bg-light py-4 border-top"}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Sol Taraf - Şirket İkonu ve İsmi */}
        <NavLink to="/" className="d-flex align-items-center text-decoration-none text-dark mb-3 mb-md-0">
          <img src={`${process.env.PUBLIC_URL}/image/i2i-systems-logo.png`} alt="Company Logo" width="40" height="25" className="me-2" />
          <span className={darkMode ? "fw-bold text-light" : "fw-bold text-dark"}>i2i Systems</span>
        </NavLink>

        {/* Orta - Sayfa Linkleri */}
        <ul className="nav justify-content-center mb-3 mb-md-0">
          <li className="nav-item">
            <NavLink className= {darkMode ? "nav-link text-light" : "nav-link text-dark"} to="/">Anasayfa</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={darkMode ? "nav-link text-light" : "nav-link text-dark"} to="/">Hakkımızda</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={darkMode ? "nav-link text-light" : "nav-link text-dark"} to="/">İletişim</NavLink>
          </li>
        </ul>

        {/* Sağ Taraf - Sosyal Medya İkonları / İletişim */}
        <div className="d-flex gap-3">
          <NavLink to="https://github.com/OEkrem" target='blank' className= {darkMode ? "text-decoration-none text-light" : "text-decoration-none text-dark"}>Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/onurekremyildirim" target='blank' className={darkMode ? "text-decoration-none text-light" : "text-decoration-none text-dark"}>Linkedin</NavLink>
        </div>
      </div>

      {/* Alt Kısım - Telif Hakkı */}
      <div className="text-center mt-3 text-secondary">
        © {new Date().getFullYear()} Onur Ekrem Yıldırım. Tüm Hakları Saklıdır.
      </div>
    </footer>
  )
}

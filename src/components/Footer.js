import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (

    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Sol Taraf - Şirket İkonu ve İsmi */}
        <NavLink to="/" className="d-flex align-items-center text-decoration-none text-dark mb-3 mb-md-0">
          <img src="/image/i2i-systems-logo.png" alt="Company Logo" width="40" height="25" className="me-2" />
          <span className="fw-bold">i2i Systems</span>
        </NavLink>

        {/* Orta - Sayfa Linkleri */}
        <ul className="nav justify-content-center mb-3 mb-md-0">
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="/">Anasayfa</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="/">Hakkımızda</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark" to="/">İletişim</NavLink>
          </li>
        </ul>

        {/* Sağ Taraf - Sosyal Medya İkonları / İletişim */}
        <div className="d-flex gap-3">
          <NavLink to="https://github.com/OEkrem" target='blank' className="text-dark text-decoration-none">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/onurekremyildirim" target='blank' className="text-dark text-decoration-none">Linkedin</NavLink>
        </div>
      </div>

      {/* Alt Kısım - Telif Hakkı */}
      <div className="text-center mt-3 text-secondary">
        © {new Date().getFullYear()} Onur Ekrem Yıldırım. Tüm Hakları Saklıdır.
      </div>
    </footer>
  )
}

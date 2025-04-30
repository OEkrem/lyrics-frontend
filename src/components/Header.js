import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        {/* Sol Kısım - Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/image/i2i-systems-logo.png" alt="Company Logo" width="275" height="135" className="me-2" />
          <span className="fw-bold">i2i Systems</span>
        </NavLink>


        {/* Sağ Kısım - Menü */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Anasayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">İletişim</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  )
}


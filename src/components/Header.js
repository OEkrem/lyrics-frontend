import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Sol Taraf - Şirket İkonu ve İsmi */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/image/i2i-systems-logo.png" alt="Company Logo" width="275" height="135" className="me-2" />
          <span className="fw-bold">i2i Systems</span>
        </NavLink>

        {/* Orta Kısım - Home, Products, Categories */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Lyrics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Artists</NavLink>
            </li>
          </ul>
        </div>

        {/* Sağ Taraf - Login ve Register 
        <div className="d-flex">
            <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
            <NavLink className="btn btn-primary" to="/register">Register</NavLink>
        </div>
        */}
      </div>
    </nav>

  )
}


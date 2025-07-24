import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Desarrollos Nerd Logo" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/proyectos" className="nav-link">Proyectos</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
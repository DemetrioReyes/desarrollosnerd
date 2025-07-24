import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Desarrollos Nerd Logo" className="logo-image" />
          </Link>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-link" onClick={closeMenu}>Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/proyectos" className="nav-link" onClick={closeMenu}>Proyectos</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
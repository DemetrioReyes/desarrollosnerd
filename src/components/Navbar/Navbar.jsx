import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useLang } from '../../contexts/LanguageContext';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <Logo height={36} />
        </Link>

        {/* Links — slide-in on mobile */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>{t.nav.home}</Link></li>
          <li><Link to="/servicios" className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}>{t.nav.services}</Link></li>
          <li><Link to="/contacto" className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}>{t.nav.contact}</Link></li>
          <li className="nav-cta-item">
            <Link to="/contacto" className="btn-nav-cta">
              <i className="fab fa-whatsapp"></i>
              {t.nav.cta}
            </Link>
          </li>
        </ul>

        {/* Always-visible right side */}
        <div className="navbar-end">
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

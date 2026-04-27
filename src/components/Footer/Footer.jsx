import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useLang } from '../../contexts/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Logo height={36} />
          <p className="footer-tagline">{t.footer.tagline}</p>
          <div className="footer-social">
            <a href="https://instagram.com/desarrollosnerd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/18094059011" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t.footer.servicesTitle}</h4>
          <ul className="footer-links-list">
            {t.footer.serviceItems.map((item, i) => (
              <li key={i}><Link to="/servicios">{item}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.contactTitle}</h4>
          <div className="footer-contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:contacto@desarrollosnerd.com">contacto@desarrollosnerd.com</a>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+18094059011">+1 (809) 405-9011</a>
          </div>
          <div className="footer-contact-item">
            <i className="fab fa-whatsapp"></i>
            <a href="https://wa.me/18094059011?text=¡Hola! Estoy interesado en sus servicios." target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Santo Domingo Este, RD</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Desarrollos Nerd. {t.footer.rights}</p>
        <div className="footer-bottom-links">
          <Link to="/privacidad">{t.footer.privacy}</Link>
          <Link to="/terminos">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

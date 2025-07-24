import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:rdemetrio72@yahoo.com">contacto@desarrollosnerd.dev</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+18094059011">+1 (809) 405-9011</a>
            </li>
            <li>
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/18094059011?text=¡Hola! Me interesa conocer más sobre sus servicios de desarrollo." target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Santo Domingo Este, República Dominicana</span>
            </li>
          </ul>
        </div>

        <div className="footer-section services-section">
          <h3>Servicios</h3>
          <div className="services-grid">
            <div className="service-category">
              <h4>Desarrollo</h4>
              <ul>
                <li><a href="#software-medida">Software a Medida</a></li>
                <li><a href="#apps-moviles">Apps iOS y Android</a></li>
                <li><a href="#web-apps">Aplicaciones Web</a></li>
                <li><a href="#ecommerce">E-commerce</a></li>
              </ul>
            </div>
            <div className="service-category">
              <h4>Especialidades</h4>
              <ul>
                <li><a href="#asterisk">Centrales VoIP</a></li>
                <li><a href="#seguridad">Ciberseguridad</a></li>
                <li><a href="#scraping">Web Scraping</a></li>
                <li><a href="#consultoria">Consultoría IT</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <div className="social-links">
            <a href="https://github.com/DemetrioReyes" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/desarrollosnerd" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Desarrollos Nerd. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/privacidad">Política de Privacidad</a>
          <a href="/terminos">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
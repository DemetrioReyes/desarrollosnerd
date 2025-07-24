import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Servicios.css';

function Servicios() {
  return (
    <div className="servicios-page">
      <Navbar />
      
      <header className="servicios-header">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones tecnológicas personalizadas para impulsar tu negocio</p>
      </header>

      <main className="servicios-content">
        {/* Desarrollo de Software */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-code"></i>
            <h2>Servicios de Desarrollo</h2>
          </div>
          <div className="servicios-grid">
            <div className="servicio-card">
              <i className="fas fa-cogs"></i>
              <h3>Desarrollo de Software a Medida</h3>
              <ul>
                <li>Sistemas de Gestión Empresarial (ERP/CRM)</li>
                <li>Herramientas de Productividad Personalizadas</li>
                <li>Integración de Sistemas Existentes</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Desarrollo de Aplicaciones Móviles</h3>
              <ul>
                <li>Apps Nativas (iOS, Android)</li>
                <li>Apps Multiplataforma</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-globe"></i>
              <h3>Desarrollo de Aplicaciones Web y Sitios Web</h3>
              <ul>
                <li>Plataformas de Comercio Electrónico (E-commerce)</li>
                <li>Portales y Plataformas Web Complejas</li>
                <li>Sitios Web Corporativos y de Marca</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-robot"></i>
              <h3>Web Scraping y Automatización</h3>
              <ul>
                <li>Recopilación de Datos para Inteligencia de Negocio</li>
                <li>Automatización de Procesos con Web Scraping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Servicios Especializados */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-server"></i>
            <h2>Servicios Especializados</h2>
          </div>
          <div className="servicios-grid">
            <div className="servicio-card">
              <i className="fas fa-phone-volume"></i>
              <h3>Centrales Telefónicas (Asterisk)</h3>
              <ul>
                <li>Sistemas de Voz sobre IP (VoIP)</li>
                <li>Integración con Software Existente (CTI)</li>
                <li>Soporte y Optimización</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Ciberseguridad Aplicada al Desarrollo</h3>
              <ul>
                <li>Auditorías de Seguridad (Apps y Web)</li>
                <li>Implementación de Medidas de Seguridad</li>
                <li>Consultoría en Buenas Prácticas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integraciones y Adaptaciones */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-puzzle-piece"></i>
            <h2>Integraciones y Adaptaciones</h2>
          </div>
          <div className="servicios-grid">
            <div className="servicio-card">
              <i className="fas fa-sync"></i>
              <h3>Integraciones con Servicios Preexistentes</h3>
              <ul>
                <li>Conexión con APIs y Servicios Externos</li>
                <li>Integración con Sistemas Legacy</li>
                <li>Sincronización de Datos entre Plataformas</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-wrench"></i>
              <h3>Adaptaciones y Correcciones</h3>
              <ul>
                <li>Modificación de Sistemas Existentes</li>
                <li>Corrección de Errores y Bugs</li>
                <li>Mejoras de Rendimiento y Optimización</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-code-branch"></i>
              <h3>Migraciones y Actualizaciones</h3>
              <ul>
                <li>Migración a Nuevas Tecnologías</li>
                <li>Actualización de Versiones</li>
                <li>Modernización de Aplicaciones Legacy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Soporte y Consultoría */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-handshake"></i>
            <h2>Servicios de Soporte y Consultoría</h2>
          </div>
          <div className="servicios-grid">
            <div className="servicio-card">
              <i className="fas fa-tools"></i>
              <h3>Mantenimiento y Actualización de Software</h3>
              <ul>
                <li>Preventivo y Correctivo</li>
                <li>Optimización de Rendimiento</li>
                <li>Actualizaciones Tecnológicas</li>
              </ul>
            </div>

            <div className="servicio-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Consultoría Tecnológica</h3>
              <ul>
                <li>Análisis de Viabilidad de Proyectos</li>
                <li>Asesoramiento en Estrategia Digital</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Servicios; 
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import { useLang } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO/SEO';
import './Contacto.css';

function Contacto() {
  const form = useRef();
  const { t } = useLang();
  const c = t.contact;

  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '',
    empresa: '', asunto: '', mensaje: '',
    tipoProyecto: 'No especificado',
  });

  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l7c1624', 'template_183qklm', form.current, '0p1HNeMwdEFpSp3LN')
      .then(() => {
        setModalConfig({ isOpen: true, type: 'success', message: c.successMsg });
        setFormData({ nombre: '', email: '', telefono: '', empresa: '', asunto: '', mensaje: '', tipoProyecto: 'No especificado' });
      })
      .catch(() => {
        setModalConfig({ isOpen: true, type: 'error', message: c.errorMsg });
      });
  };

  return (
    <div className="contacto-page">
      <Navbar />

      <SEO
        title={c.title}
        description={lang === 'es'
          ? 'Contáctanos para tu proyecto de software, automatización o ciberseguridad. Primera consulta gratuita. WhatsApp: +1 (809) 405-9011.'
          : 'Contact us for your software, automation or cybersecurity project. Free first consultation. WhatsApp: +1 (809) 405-9011.'}
        path="/contacto"
      />
      <header className="page-header">
        <div className="page-header-orb" aria-hidden="true"></div>
        <span className="page-eyebrow">{c.eyebrow}</span>
        <h1>{c.title}</h1>
        <p>{c.subtitle}</p>
      </header>

      <main className="contacto-content">
        <div className="contacto-container">

          <div className="contacto-info">
            <div className="info-section">
              <h3>{c.infoTitle}</h3>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:contacto@desarrollosnerd.com">contacto@desarrollosnerd.com</a>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+18094059011">+1 (809) 405-9011</a>
              </div>
              <div className="info-item">
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/18094059011?text=¡Hola! Estoy interesado en sus servicios." target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Santo Domingo Este, República Dominicana</span>
              </div>
            </div>

            <div className="social-section">
              <h3>{c.followTitle}</h3>
              <div className="social-links">
                <a href="https://instagram.com/desarrollosnerd" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/18094059011?text=¡Hola! Estoy interesado en sus servicios." target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <form ref={form} className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">{c.nameLabel}</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder={c.namePlaceholder} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{c.emailLabel}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder={c.emailPlaceholder} />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">{c.phoneLabel}</label>
                <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder={c.phonePlaceholder} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="empresa">{c.companyLabel}</label>
              <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} placeholder={c.companyPlaceholder} />
            </div>

            <div className="form-group">
              <label htmlFor="tipoProyecto">{c.projectLabel}</label>
              <select id="tipoProyecto" name="tipoProyecto" value={formData.tipoProyecto} onChange={handleChange}>
                <option value="No especificado">{c.selectOption}</option>
                <option value="Desarrollo Web">{c.projectOptions.web}</option>
                <option value="Aplicación Móvil">{c.projectOptions.mobile}</option>
                <option value="Software a Medida">{c.projectOptions.custom}</option>
                <option value="E-commerce">{c.projectOptions.ecommerce}</option>
                <option value="Automatización / IA">{c.projectOptions.automation}</option>
                <option value="Consultoría">{c.projectOptions.consulting}</option>
                <option value="Otro">{c.projectOptions.other}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">{c.subjectLabel}</label>
              <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required placeholder={c.subjectPlaceholder} />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">{c.messageLabel}</label>
              <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required placeholder={c.messagePlaceholder} rows="5"></textarea>
            </div>

            <button type="submit" className="submit-button">{c.submitBtn}</button>
          </form>
        </div>
      </main>

      <Modal isOpen={modalConfig.isOpen} onClose={() => setModalConfig(p => ({ ...p, isOpen: false }))} type={modalConfig.type} message={modalConfig.message} />
      <Footer />
    </div>
  );
}

export default Contacto;

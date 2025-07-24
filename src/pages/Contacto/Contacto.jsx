import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
import './Contacto.css';

function Contacto() {
  const form = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    asunto: '',
    mensaje: '',
    tipoProyecto: 'No especificado'
  });

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l7c1624',
      'template_183qklm',
      form.current,
      '0p1HNeMwdEFpSp3LN'
    )
    .then((result) => {
      console.log('Email enviado exitosamente:', result.text);
      setModalConfig({
        isOpen: true,
        type: 'success',
        message: '¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      // Resetear el formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        asunto: '',
        mensaje: '',
        tipoProyecto: 'No especificado'
      });
    })
    .catch((error) => {
      console.error('Error al enviar el email:', error);
      setModalConfig({
        isOpen: true,
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="contacto-page">
      <Navbar />
      
      <main className="contacto-content">
        <header className="contacto-header">
          <h1>Contáctanos</h1>
          <p>¿Tienes un proyecto en mente? Cuéntanos sobre él</p>
        </header>

        <div className="contacto-container">
          <div className="contacto-info">
            <div className="info-section">
              <h3>Información de Contacto</h3>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:rdemetrio72@yahoo.com">contacto@desarrollosnerd.dev</a>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+18094059011">+1 (809) 405-9011</a>
              </div>
              <div className="info-item">
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/18094059011?text=¡Hola! Estoy interesado en conocer más sobre sus servicios de desarrollo." target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Santo Domingo Este, República Dominicana</span>
              </div>
            </div>

            <div className="social-section">
              <h3>Síguenos</h3>
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

          <form ref={form} className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+1 (809) XXX-XXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nombre de tu empresa (opcional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tipoProyecto">Tipo de Proyecto</label>
              <select
                id="tipoProyecto"
                name="tipoProyecto"
                value={formData.tipoProyecto}
                onChange={handleChange}
              >
                <option value="No especificado">Selecciona una opción</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Aplicación Móvil">Aplicación Móvil</option>
                <option value="Software a Medida">Software a Medida</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Consultoría">Consultoría</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder="Asunto de tu mensaje"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </main>

      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        type={modalConfig.type}
        message={modalConfig.message}
      />

      <Footer />
    </div>
  );
}

export default Contacto; 
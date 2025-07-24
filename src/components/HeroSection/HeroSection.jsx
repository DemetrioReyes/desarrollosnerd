// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Archivo CSS para los estilos de esta sección

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Transformamos tus ideas en soluciones digitales brillantes.</h1>
        <p>Tu visión, nuestro código.</p>
        <div className="hero-cta-buttons">
          <button className="btn btn-primary" onClick={() => window.location.href='/servicios'}>Explora Nuestros Servicios</button>
          <button className="btn btn-secondary" onClick={() => window.location.href='/contacto'}>Cuéntanos Tu Idea</button>
        </div>
      </div>
      {/* Elementos gráficos abstractos de fondo irán aquí, quizás con animaciones CSS */}
      <div className="hero-background-elements">
        {/* Ejemplo: Pequeños cuadrados o líneas que simulan código */}
        <span className="bg-element element-1"></span>
        <span className="bg-element element-2"></span>
        <span className="bg-element element-3"></span>
      </div>
    </section>
  );
};

export default HeroSection;
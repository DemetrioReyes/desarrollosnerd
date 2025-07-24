import React from 'react';
import './MisionVision.css';

function MisionVision() {
  return (
    <section className="mision-vision-section">
      <div className="mision-vision-container">
        <h2 className="section-title">Nuestra Esencia</h2>
        
        <div className="mvv-cards">
          <div className="mvv-card mision">
            <div className="card-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Misión</h3>
            <p>
              Transformar ideas en soluciones tecnológicas innovadoras, 
              desarrollando software a medida que impulse el crecimiento 
              y la eficiencia de nuestros clientes, con un compromiso 
              inquebrantable con la calidad y la excelencia.
            </p>
          </div>

          <div className="mvv-card vision">
            <div className="card-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Visión</h3>
            <p>
              Ser reconocido como un referente en el desarrollo de 
              software personalizado, destacando por la innovación, 
              la calidad técnica y la capacidad de convertir desafíos 
              complejos en soluciones elegantes y eficientes.
            </p>
          </div>

          <div className="mvv-card valores">
            <div className="card-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Valores</h3>
            <ul>
              <li>Excelencia técnica</li>
              <li>Innovación constante</li>
              <li>Compromiso con el cliente</li>
              <li>Transparencia</li>
              <li>Mejora continua</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision; 
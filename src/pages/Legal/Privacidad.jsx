import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Legal.css';

function Privacidad() {
  return (
    <div className="legal-page">
      <Navbar />
      <main className="legal-content">
        <header className="legal-header">
          <span className="legal-eyebrow">// legal</span>
          <h1>Política de Privacidad</h1>
          <p className="legal-date">Última actualización: 27 de abril de 2026</p>
        </header>

        <div className="legal-body">
          <div className="legal-section">
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>Desarrollos Nerd</strong> (en adelante "la Empresa"), con domicilio en Santo Domingo Este,
              República Dominicana, es el responsable del tratamiento de los datos personales que usted nos
              proporcione a través del sitio web <strong>www.desarrollosnerd.com</strong>.
            </p>
            <p>Contacto: <a href="mailto:contacto@desarrollosnerd.com">contacto@desarrollosnerd.com</a></p>
          </div>

          <div className="legal-section">
            <h2>2. Datos que Recopilamos</h2>
            <p>Recopilamos únicamente los datos que usted nos proporciona voluntariamente a través del formulario de contacto:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono (opcional)</li>
              <li>Nombre de empresa (opcional)</li>
              <li>Descripción del proyecto o mensaje</li>
            </ul>
            <p>No recopilamos datos bancarios, contraseñas ni información sensible de ningún tipo.</p>
          </div>

          <div className="legal-section">
            <h2>3. Finalidad del Tratamiento</h2>
            <p>Sus datos personales son utilizados exclusivamente para:</p>
            <ul>
              <li>Responder a sus consultas y solicitudes de información</li>
              <li>Elaborar propuestas y presupuestos para proyectos de desarrollo de software</li>
              <li>Establecer y mantener la relación comercial con usted o su empresa</li>
              <li>Enviarle comunicaciones relacionadas con el estado de sus proyectos</li>
            </ul>
            <p>No utilizamos sus datos para enviar publicidad no solicitada ni los compartimos con terceros con fines comerciales.</p>
          </div>

          <div className="legal-section">
            <h2>4. Base Legal</h2>
            <p>
              El tratamiento de sus datos se basa en el consentimiento que usted otorga al enviarnos su información
              a través del formulario de contacto, así como en el interés legítimo de atender su solicitud comercial.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Conservación de Datos</h2>
            <p>
              Conservamos sus datos personales durante el tiempo necesario para atender su solicitud y, en caso de
              convertirse en cliente, durante la vigencia de la relación contractual más un período adicional de
              hasta 5 años conforme a obligaciones legales aplicables.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Compartición con Terceros</h2>
            <p>No vendemos, alquilamos ni cedemos sus datos personales a terceros. Podemos compartir información con:</p>
            <ul>
              <li><strong>Proveedores de servicios técnicos</strong> (hosting, email) que actúan como encargados del tratamiento bajo acuerdos de confidencialidad.</li>
              <li><strong>Autoridades competentes</strong> cuando sea requerido por ley o disposición judicial.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>7. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas razonables para proteger sus datos contra accesos no
              autorizados, pérdida o destrucción, incluyendo cifrado de comunicaciones (HTTPS) y acceso restringido
              a la información.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Sus Derechos</h2>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> solicitar información sobre los datos que tenemos de usted.</li>
              <li><strong>Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos ("derecho al olvido").</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, contáctenos en:</p>
            <div className="legal-contact-box">
              <p><strong>Email:</strong> <a href="mailto:contacto@desarrollosnerd.com">contacto@desarrollosnerd.com</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/18094059011" target="_blank" rel="noopener noreferrer">+1 (809) 405-9011</a></p>
            </div>
          </div>

          <div className="legal-section">
            <h2>9. Cookies</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas esenciales para su funcionamiento. No utilizamos
              cookies de rastreo, publicidad ni análisis de comportamiento de terceros.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Cambios en esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos la versión actualizada en
              esta página con la fecha de revisión. Le recomendamos revisarla periódicamente.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Privacidad;

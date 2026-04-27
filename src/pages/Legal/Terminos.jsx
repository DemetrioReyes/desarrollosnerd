import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import './Legal.css';

function Terminos() {
  return (
    <div className="legal-page">
      <SEO title="Términos y Condiciones" description="Términos y condiciones de contratación de Desarrollos Nerd. Pagos, propiedad intelectual, garantías y jurisdicción dominicana." path="/terminos" />
      <Navbar />
      <main className="legal-content">
        <header className="legal-header">
          <span className="legal-eyebrow">// legal</span>
          <h1>Términos y Condiciones</h1>
          <p className="legal-date">Última actualización: 27 de abril de 2026</p>
        </header>

        <div className="legal-body">
          <div className="legal-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web <strong>www.desarrollosnerd.com</strong> o contratar cualquiera de
              nuestros servicios, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo
              con alguna parte de estos términos, le pedimos que no utilice nuestros servicios.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Descripción de los Servicios</h2>
            <p>Desarrollos Nerd ofrece servicios profesionales de tecnología, incluyendo pero no limitándose a:</p>
            <ul>
              <li>Desarrollo de software a medida (web, móvil, escritorio)</li>
              <li>Automatización de procesos empresariales</li>
              <li>Consultoría tecnológica y para startups</li>
              <li>Integración de sistemas y APIs</li>
              <li>Implementación de sistemas VoIP con Asterisk</li>
              <li>Auditorías y consultoría en ciberseguridad</li>
              <li>Mantenimiento y soporte de software</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>3. Propuestas y Contratación</h2>
            <p>
              Todo proyecto comienza con una consulta inicial gratuita y sin compromiso. Tras evaluar sus necesidades,
              emitiremos una propuesta formal que incluirá alcance, plazos y costos. El inicio del proyecto queda
              condicionado a la aceptación escrita de la propuesta y el pago del anticipo acordado.
            </p>
            <p>
              Las propuestas tienen una validez de <strong>30 días calendario</strong> desde su emisión, salvo
              indicación contraria.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Pagos y Facturación</h2>
            <p>Las condiciones de pago estándar son:</p>
            <ul>
              <li><strong>50%</strong> de anticipo al inicio del proyecto.</li>
              <li><strong>50%</strong> restante al momento de la entrega final o según los hitos acordados.</li>
            </ul>
            <p>
              Los pagos pueden realizarse mediante transferencia bancaria, efectivo o métodos digitales acordados.
              El incumplimiento de los plazos de pago puede resultar en la suspensión temporal del proyecto.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Propiedad Intelectual</h2>
            <p>
              Una vez completado el pago total del proyecto, el cliente adquiere todos los derechos sobre el software
              desarrollado a su medida, incluyendo el código fuente, salvo acuerdo diferente establecido por escrito.
            </p>
            <p>
              Desarrollos Nerd retiene el derecho de mencionar el proyecto como referencia en su portafolio, a menos
              que el cliente solicite expresamente confidencialidad.
            </p>
            <p>
              Las herramientas, frameworks y librerías de terceros utilizadas en el desarrollo quedan sujetas a sus
              respectivas licencias.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Confidencialidad</h2>
            <p>
              Desarrollos Nerd se compromete a mantener absoluta confidencialidad sobre la información, datos y
              detalles del negocio que el cliente comparta durante el desarrollo del proyecto. Esta obligación
              persiste indefinidamente, incluso después de finalizada la relación comercial.
            </p>
            <p>
              Podemos firmar un Acuerdo de No Divulgación (NDA) formal a solicitud del cliente sin costo adicional.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Plazos de Entrega</h2>
            <p>
              Los plazos acordados son estimaciones basadas en el alcance definido en la propuesta. Desarrollos Nerd
              se compromete a comunicar con anticipación cualquier retraso justificado. Los cambios de alcance
              solicitados por el cliente durante el desarrollo pueden afectar los plazos y costos establecidos.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Garantía y Soporte</h2>
            <p>
              Todo software desarrollado incluye una garantía de <strong>30 días</strong> posterior a la entrega,
              durante la cual corregiremos sin costo adicional cualquier error o defecto que sea directamente
              atribuible a nuestro trabajo y que no haya sido causado por modificaciones del cliente o terceros.
            </p>
            <p>
              El soporte técnico extendido más allá de este período debe contratarse por separado mediante un
              plan de mantenimiento.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Limitación de Responsabilidad</h2>
            <p>
              Desarrollos Nerd no será responsable por daños indirectos, pérdidas de negocio, lucro cesante ni
              cualquier consecuencia derivada del uso del software entregado más allá del valor del contrato
              original. El cliente es responsable de mantener copias de seguridad de sus datos.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Cancelación del Proyecto</h2>
            <p>
              En caso de cancelación por parte del cliente, el anticipo pagado no es reembolsable. Si la cancelación
              ocurre en una etapa avanzada del proyecto, se facturará el trabajo realizado hasta la fecha según las
              horas invertidas. Desarrollos Nerd se reserva el derecho de cancelar un proyecto si el cliente incumple
              sus obligaciones de pago, tras notificación previa de 7 días.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Uso Aceptable del Sitio Web</h2>
            <p>Al utilizar este sitio web, usted acepta no:</p>
            <ul>
              <li>Enviar información falsa, engañosa o fraudulenta a través del formulario de contacto.</li>
              <li>Intentar acceder a sistemas o datos no autorizados.</li>
              <li>Utilizar el sitio para actividades ilegales o contrarias a la buena fe.</li>
              <li>Realizar scraping masivo del contenido sin autorización previa.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>12. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la <strong>República Dominicana</strong>. Cualquier disputa
              que no pueda resolverse amigablemente será sometida a los tribunales competentes de Santo Domingo,
              República Dominicana.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Contacto</h2>
            <p>Para cualquier consulta sobre estos Términos y Condiciones:</p>
            <div className="legal-contact-box">
              <p><strong>Email:</strong> <a href="mailto:contacto@desarrollosnerd.com">contacto@desarrollosnerd.com</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/18094059011" target="_blank" rel="noopener noreferrer">+1 (809) 405-9011</a></p>
              <p><strong>Dirección:</strong> Santo Domingo Este, República Dominicana</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Terminos;

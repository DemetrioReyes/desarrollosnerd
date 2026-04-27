import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useLang } from '../../contexts/LanguageContext';
import './Servicios.css';

function Servicios() {
  const { t, lang } = useLang();
  const s = t.services;

  const dev = lang === 'es' ? {
    title: 'Software a Medida', items: ['Sistemas ERP/CRM personalizados', 'Herramientas de Productividad', 'Integración de Sistemas Existentes'],
  } : { title: 'Custom Software', items: ['Custom ERP/CRM Systems', 'Productivity Tools', 'Existing Systems Integration'] };

  const mobile = lang === 'es' ? {
    title: 'Apps Móviles', items: ['Apps Nativas (iOS, Android)', 'Apps Multiplataforma (React Native, Flutter)'],
  } : { title: 'Mobile Apps', items: ['Native Apps (iOS, Android)', 'Cross-platform (React Native, Flutter)'] };

  const web = lang === 'es' ? {
    title: 'Aplicaciones Web y Sitios', items: ['Plataformas E-commerce', 'Portales y Plataformas Web Complejas', 'Sitios Corporativos y de Marca'],
  } : { title: 'Web Applications', items: ['E-commerce Platforms', 'Complex Web Portals & Platforms', 'Corporate & Brand Websites'] };

  const scraping = lang === 'es' ? {
    title: 'Automatización y Web Scraping', items: ['Extracción de Datos para Business Intelligence', 'Automatización de Procesos Empresariales'],
  } : { title: 'Automation & Web Scraping', items: ['Data Extraction for Business Intelligence', 'Business Process Automation'] };

  return (
    <div className="servicios-page">
      <Navbar />

      <header className="page-header">
        <div className="page-header-orb" aria-hidden="true"></div>
        <span className="page-eyebrow">{s.eyebrow}</span>
        <h1>{s.title}</h1>
        <p>{s.subtitle}</p>
      </header>

      <main className="servicios-content">

        {/* DESARROLLO */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-code"></i>
            <h2>{s.devSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-cogs" title={dev.title} items={dev.items} />
            <ServiceCard icon="fas fa-mobile-alt" title={mobile.title} items={mobile.items} />
            <ServiceCard icon="fas fa-globe" title={web.title} items={web.items} />
            <ServiceCard icon="fas fa-code-branch" title={scraping.title} items={scraping.items} />
          </div>
        </section>

        {/* IA & AUTOMATIZACIÓN */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-brain"></i>
            <h2>{s.aiSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-robot" title={lang === 'es' ? 'Automatización de Procesos (RPA)' : 'Process Automation (RPA)'} items={lang === 'es' ? [
              'Eliminación de tareas repetitivas y manuales',
              'Flujos de trabajo automatizados (workflows)',
              'Integración entre plataformas sin código manual',
              'Reportes y alertas automáticas',
            ] : [
              'Elimination of repetitive manual tasks',
              'Automated workflows',
              'No-code platform integration',
              'Automatic reports and alerts',
            ]} />
            <ServiceCard icon="fas fa-microchip" title={lang === 'es' ? 'Soluciones con Inteligencia Artificial' : 'Artificial Intelligence Solutions'} items={lang === 'es' ? [
              'Chatbots y asistentes virtuales con IA',
              'Clasificación y análisis de datos con ML',
              'Integración con APIs de OpenAI / Claude / Gemini',
              'Procesamiento de lenguaje natural (NLP)',
            ] : [
              'AI chatbots and virtual assistants',
              'Data classification & ML analysis',
              'OpenAI / Claude / Gemini API integration',
              'Natural language processing (NLP)',
            ]} />
            <ServiceCard icon="fas fa-file-alt" title={lang === 'es' ? 'Digitalización Empresarial' : 'Business Digitalization'} items={lang === 'es' ? [
              'Conversión de procesos físicos a digitales',
              'Digitalización de documentos y formularios',
              'Firma digital y gestión documental',
              'Dashboards en tiempo real',
            ] : [
              'Physical-to-digital process conversion',
              'Document & form digitalization',
              'Digital signatures & document management',
              'Real-time dashboards',
            ]} />
            <ServiceCard icon="fas fa-chart-line" title={lang === 'es' ? 'Business Intelligence y Datos' : 'Business Intelligence & Data'} items={lang === 'es' ? [
              'Extracción y procesamiento de datos (ETL)',
              'Visualización de métricas e indicadores clave',
              'Web scraping para inteligencia competitiva',
              'Análisis predictivo para toma de decisiones',
            ] : [
              'Data extraction & processing (ETL)',
              'KPI metrics visualization',
              'Web scraping for competitive intelligence',
              'Predictive analytics for decision-making',
            ]} />
          </div>
        </section>

        {/* CIBERSEGURIDAD */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-shield-alt"></i>
            <h2>{s.cyberSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-bug" title={lang === 'es' ? 'Pentesting y Pruebas de Intrusión' : 'Pentesting & Intrusion Testing'} items={lang === 'es' ? [
              'Pruebas de penetración en apps web y móviles',
              'Simulación de ataques reales (ethical hacking)',
              'Explotación controlada de vulnerabilidades (OWASP Top 10)',
              'Informe ejecutivo y técnico con hallazgos priorizados',
            ] : [
              'Penetration testing on web & mobile apps',
              'Real attack simulation (ethical hacking)',
              'Controlled vulnerability exploitation (OWASP Top 10)',
              'Executive & technical report with prioritized findings',
            ]} />
            <ServiceCard icon="fas fa-search" title={lang === 'es' ? 'Auditorías de Seguridad' : 'Security Audits'} items={lang === 'es' ? [
              'Revisión de código fuente (SAST)',
              'Análisis de seguridad en infraestructura cloud',
              'Evaluación de APIs y endpoints expuestos',
              'Revisión de configuraciones y políticas de acceso',
            ] : [
              'Source code review (SAST)',
              'Cloud infrastructure security analysis',
              'API & exposed endpoint evaluation',
              'Access policy & configuration review',
            ]} />
            <ServiceCard icon="fas fa-network-wired" title={lang === 'es' ? 'Seguridad en Redes e Infraestructura' : 'Network & Infrastructure Security'} items={lang === 'es' ? [
              'Escaneo y análisis de puertos y servicios expuestos',
              'Configuración de firewalls, VPN y segmentación',
              'Detección de dispositivos vulnerables (IoT)',
              'Hardening de servidores Linux/Windows',
            ] : [
              'Port scanning & exposed services analysis',
              'Firewall, VPN & network segmentation setup',
              'Vulnerable device detection (IoT)',
              'Linux/Windows server hardening',
            ]} />
            <ServiceCard icon="fas fa-lock" title={lang === 'es' ? 'Desarrollo Seguro (DevSecOps)' : 'Secure Development (DevSecOps)'} items={lang === 'es' ? [
              'Integración de seguridad en el ciclo de desarrollo',
              'Gestión segura de credenciales y secrets',
              'Autenticación fuerte (MFA, OAuth2, JWT)',
              'Cifrado de datos en tránsito y en reposo',
            ] : [
              'Security integration in the dev lifecycle',
              'Secure credentials & secrets management',
              'Strong authentication (MFA, OAuth2, JWT)',
              'Data encryption in transit & at rest',
            ]} />
            <ServiceCard icon="fas fa-user-secret" title={lang === 'es' ? 'Ingeniería Social y Concienciación' : 'Social Engineering & Awareness'} items={lang === 'es' ? [
              'Simulaciones de phishing para medir vulnerabilidad',
              'Capacitación en seguridad para equipos',
              'Políticas de contraseñas y buenas prácticas',
              'Plan de respuesta ante incidentes',
            ] : [
              'Phishing simulations to measure vulnerability',
              'Security training for teams',
              'Password policies & best practices',
              'Incident response planning',
            ]} />
            <ServiceCard icon="fas fa-clipboard-check" title={lang === 'es' ? 'Cumplimiento y Normativas' : 'Compliance & Standards'} items={lang === 'es' ? [
              'Alineación con ISO 27001 y NIST',
              'Preparación para PCI-DSS, GDPR',
              'Políticas de seguridad documentadas',
              'Análisis de riesgos y plan de tratamiento',
            ] : [
              'ISO 27001 & NIST alignment',
              'PCI-DSS, GDPR compliance preparation',
              'Documented security policies',
              'Risk analysis & treatment plan',
            ]} />
          </div>
        </section>

        {/* ESPECIALIZADO */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-server"></i>
            <h2>{s.specialSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-phone-volume" title={lang === 'es' ? 'Centrales Telefónicas (Asterisk/VoIP)' : 'Phone Systems (Asterisk/VoIP)'} items={lang === 'es' ? [
              'Sistemas de Voz sobre IP (VoIP)',
              'Integración con Software Existente (CTI)',
              'Soporte y Optimización',
            ] : [
              'Voice over IP (VoIP) systems',
              'Integration with existing software (CTI)',
              'Support & optimization',
            ]} />
          </div>
        </section>

        {/* INTEGRACIONES */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-puzzle-piece"></i>
            <h2>{s.integSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-sync" title={lang === 'es' ? 'Integraciones con APIs y Servicios' : 'API & Service Integrations'} items={lang === 'es' ? [
              'Conexión con APIs y Servicios Externos',
              'Integración con Sistemas Legacy',
              'Sincronización de Datos entre Plataformas',
            ] : [
              'External API & service connections',
              'Legacy system integration',
              'Cross-platform data sync',
            ]} />
            <ServiceCard icon="fas fa-wrench" title={lang === 'es' ? 'Adaptaciones y Correcciones' : 'Adaptations & Bug Fixes'} items={lang === 'es' ? [
              'Modificación de Sistemas Existentes',
              'Corrección de Errores y Bugs',
              'Mejoras de Rendimiento',
            ] : [
              'Existing system modifications',
              'Bug & error corrections',
              'Performance improvements',
            ]} />
            <ServiceCard icon="fas fa-code-branch" title={lang === 'es' ? 'Migraciones y Actualizaciones' : 'Migrations & Upgrades'} items={lang === 'es' ? [
              'Migración a Nuevas Tecnologías',
              'Actualización de Versiones',
              'Modernización de Apps Legacy',
            ] : [
              'Migration to new technologies',
              'Version upgrades',
              'Legacy app modernization',
            ]} />
          </div>
        </section>

        {/* SOPORTE */}
        <section className="servicio-section">
          <div className="section-header">
            <i className="fas fa-handshake"></i>
            <h2>{s.supportSection}</h2>
          </div>
          <div className="servicios-grid">
            <ServiceCard icon="fas fa-tools" title={lang === 'es' ? 'Mantenimiento de Software' : 'Software Maintenance'} items={lang === 'es' ? [
              'Mantenimiento Preventivo y Correctivo',
              'Optimización de Rendimiento',
              'Actualizaciones Tecnológicas',
            ] : [
              'Preventive & corrective maintenance',
              'Performance optimization',
              'Technology updates',
            ]} />
            <ServiceCard icon="fas fa-lightbulb" title={lang === 'es' ? 'Consultoría Tecnológica' : 'Technology Consulting'} items={lang === 'es' ? [
              'Análisis de Viabilidad de Proyectos',
              'Asesoramiento en Estrategia Digital',
            ] : [
              'Project feasibility analysis',
              'Digital strategy advisory',
            ]} />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, items }) {
  return (
    <div className="servicio-card">
      <i className={icon}></i>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default Servicios;

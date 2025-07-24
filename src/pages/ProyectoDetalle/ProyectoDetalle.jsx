import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logo from '/logo3.png';
import './ProyectoDetalle.css';

function ProyectoDetalle() {
  const { id } = useParams();

  // Memoizamos el objeto de proyectos para evitar recreaciones
  const proyectos = useMemo(() => ({
    'app-movil-para-la-mejora-de-la-colaboracion-social': {
      title: 'App móvil para la mejora de la colaboración social',
      industry: 'Desarrollo Móvil / Impacto Social',
      challenge: 'Desarrollar una aplicación móvil y backoffice para mejorar la colaboración social en la comunidad.',
      solution: {
        general: 'Implementamos una solución integral usando Vue y Apache Cordova para el frontend, con un robusto backend en Spring Boot.',
        technologies: 'Vue.js, Apache Cordova, Spring Boot, PostgreSQL, PostGIS',
        features: 'Geolocalización, chat en tiempo real, gestión de eventos, panel de administración.',
        results: 'Incremento del 200% en participación comunitaria y 85% de satisfacción de usuarios.'
      },
      conclusions: 'La aplicación transformó la manera en que la comunidad colabora y participa.',
      tags: ['APLICACIONES', 'SPRING BOOT', 'POSTGRESQL', 'PLATAFORMA']
    },
    'migracion-a-spring-cloud-y-postgresql': {
      title: 'Migración a Spring Cloud y PostgreSQL',
      industry: 'Hotelería / Cloud Computing',
      challenge: 'Modernizar un sistema legacy de reservas hoteleras migrándolo a la nube y tecnologías modernas.',
      solution: {
        general: 'Implementamos una migración gradual a Spring Cloud con PostgreSQL como base de datos.',
        technologies: 'Spring Cloud, PostgreSQL, Docker, Kubernetes',
        features: 'Microservicios, alta disponibilidad, escalado automático, monitoreo en tiempo real.',
        results: 'Reducción del 60% en costos operativos y mejora del 300% en rendimiento.'
      },
      conclusions: 'La migración mejoró significativamente la eficiencia y redujo costos.',
      tags: ['POSTGRESQL', 'SPRING BOOT', 'BASE DE DATOS']
    },
    'creacion-de-apis-para-la-venta-de-producto-textil': {
      title: 'Creación de Apis para la venta de producto textil',
      industry: 'Textil / E-commerce',
      challenge: 'Desarrollar APIs escalables para gestionar ventas B2B y B2C en el sector textil.',
      solution: {
        general: 'Creamos una API robusta con Spring Boot y MySQL para manejar operaciones complejas.',
        technologies: 'Spring Boot, MySQL, Redis, Docker',
        features: 'Gestión de inventario, procesamiento de pedidos, integración B2B/B2C.',
        results: 'Aumento del 150% en eficiencia operativa y reducción del 40% en errores de pedidos.'
      },
      conclusions: 'Las APIs mejoraron significativamente la operación del negocio.',
      tags: ['SPRING BOOT', 'SQL', 'BASE DE DATOS']
    },
    'plataforma-sobre-precios-con-machine-learning': {
      title: 'Plataforma sobre precios con Machine Learning',
      industry: 'Hotelería / Inteligencia Artificial',
      challenge: 'Crear una plataforma de pricing dinámico utilizando Machine Learning para optimizar precios hoteleros.',
      solution: {
        general: 'Desarrollamos una plataforma avanzada que utiliza algoritmos de ML para ajuste de precios.',
        technologies: 'Python, TensorFlow, PostgreSQL, React, Spring Boot',
        features: 'Predicción de precios, análisis de competencia, optimización automática.',
        results: 'Incremento del 25% en ingresos y mejora del 40% en ocupación.'
      },
      conclusions: 'La plataforma revolucionó la estrategia de pricing del sector.',
      tags: ['POSTGRESQL', 'SPRING BOOT', 'REACT']
    },
    'plataforma-para-la-reserva-de-mesas': {
      title: 'Plataforma para la reserva de mesas',
      industry: 'Restauración / Reservas',
      challenge: 'Desarrollar una plataforma de gestión de reservas con integración en TheFork.',
      solution: {
        general: 'Implementamos una solución moderna con Spring Boot y React.',
        technologies: 'Spring Boot, React, PostgreSQL, Redis',
        features: 'Reservas en tiempo real, gestión de disponibilidad, integración TheFork.',
        results: 'Aumento del 80% en reservas online y reducción del 60% en no-shows.'
      },
      conclusions: 'La plataforma mejoró significativamente la gestión de reservas.',
      tags: ['PLATAFORMA', 'SPRING BOOT', 'REACT', 'POSTGRESQL']
    },
    'aplicacion-web-solidaria-para-mallorca-sense-fam': {
      title: 'Aplicación web solidaria para Mallorca Sense Fam',
      industry: 'ONG / Gestión Social',
      challenge: 'Crear una plataforma de gestión de citas para la distribución eficiente de alimentos.',
      solution: {
        general: 'Desarrollamos una solución integral usando Spring Boot y React.',
        technologies: 'Spring Boot, React, PostgreSQL, Docker',
        features: 'Gestión de citas, inventario de alimentos, reportes estadísticos.',
        results: 'Mejora del 200% en eficiencia de distribución y reducción del 70% en tiempo de espera.'
      },
      conclusions: 'La aplicación optimizó significativamente la distribución de ayuda.',
      tags: ['SPRING BOOT', 'REACT', 'PLATAFORMA', 'POSTGRESQL', 'BASE DE DATOS']
    },
    'plataforma-iot-para-el-control-de-suministros': {
      title: 'Plataforma IoT para el control de suministros',
      industry: 'Infraestructura Portuaria / IoT',
      challenge: 'Desarrollar una plataforma IoT para monitorear y gestionar eficientemente el consumo de suministros en puertos.',
      solution: {
        general: 'Implementamos una solución IoT completa con tecnología LoRa y una plataforma web.',
        technologies: 'LoRaWAN, React, Spring Boot, sistemas embebidos',
        features: 'Monitoreo en tiempo real, alertas automáticas, facturación automatizada.',
        results: 'Reducción del 25% en pérdidas y mejora del 40% en precisión de facturación.'
      },
      conclusions: 'La plataforma revolucionó la gestión de suministros portuarios.',
      tags: ['PLATAFORMA', 'REACT', 'SPRING BOOT']
    },
    'plataforma-de-gestion-de-cursos-formativos': {
      title: 'Plataforma de gestión de cursos formativos',
      industry: 'Educación / Administración Pública',
      challenge: 'Crear una solución J2EE para la gestión de cursos formativos en la Administración Pública.',
      solution: {
        general: 'Desarrollamos una plataforma completa con tecnologías J2EE.',
        technologies: 'JBoss, JSP, Servlets, Oracle Database',
        features: 'Gestión de cursos, inscripciones automatizadas, certificaciones digitales.',
        results: 'Optimización del 50% en procesos administrativos.'
      },
      conclusions: 'La plataforma mejoró la eficiencia en gestión formativa.',
      tags: ['JAVA', 'PLATAFORMA']
    },
    'mantenimientos-y-evolutivos-gestion-de-viviendas': {
      title: 'Mantenimientos y evolutivos gestión de viviendas',
      industry: 'Administración Pública / Vivienda Social',
      challenge: 'Mantener y mejorar las aplicaciones de gestión de Alquiler Social.',
      solution: {
        general: 'Implementamos mejoras continuas y mantenimiento de aplicaciones existentes.',
        technologies: 'Java, Spring Framework, PostgreSQL, Angular',
        features: 'Sistema de seguimiento, gestión documental, reportes automatizados.',
        results: 'Mejora del 35% en satisfacción del usuario.'
      },
      conclusions: 'El proyecto optimizó la gestión de vivienda social.',
      tags: ['APLICACIONES', 'PLATAFORMA']
    },
    'creacion-software-saas-para-la-gestion-de-fincas': {
      title: 'Creación Software SaaS para la gestión de fincas',
      industry: 'Gestión Inmobiliaria / SaaS',
      challenge: 'Desarrollar una solución SaaS para simplificar la gestión de fincas.',
      solution: {
        general: 'Creamos una plataforma SaaS moderna con Spring MVC y AngularJS.',
        technologies: 'Spring MVC, AngularJS, PostgreSQL, Docker',
        features: 'Gestión de propiedades, facturación automatizada, mantenimiento predictivo.',
        results: 'Incremento del 80% en eficiencia operativa.'
      },
      conclusions: 'La plataforma revolucionó la gestión de fincas.',
      tags: ['JAVA', 'SPRING BOOT', 'PLATAFORMA']
    }
  }), []);

  // Memoizamos el proyecto actual
  const proyecto = useMemo(() => proyectos[id], [id, proyectos]);

  // Componente para secciones del proyecto
  const ProjectSection = React.memo(({ title, content }) => (
    <div className="proyecto-section">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  ));

  if (!proyecto) {
    return (
      <div className="proyecto-detalle">
        <Navbar />
        <main className="proyecto-content">
          <div className="proyecto-header">
            <h1>Proyecto no encontrado</h1>
            <p className="industry">El proyecto que buscas no existe</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="proyecto-detalle">
      <Navbar />
      <main className="proyecto-content">
        <div className="proyecto-header">
          <h1>{proyecto.title}</h1>
          <p className="industry">{proyecto.industry}</p>
        </div>

        <div className="proyecto-body">
          <div className="proyecto-image">
            <h2 className="proyecto-title">{proyecto.title}</h2>
            <LazyLoadImage
              src={logo}
              alt="Logo"
              className="proyecto-logo"
              effect="blur"
              threshold={100}
            />
          </div>

          <ProjectSection title="Desafío" content={proyecto.challenge} />
          
          <div className="proyecto-section">
            <h3>Solución Implementada</h3>
            <div className="solution-details">
              <ProjectSection title="Descripción General" content={proyecto.solution.general} />
              <ProjectSection title="Tecnologías Utilizadas" content={proyecto.solution.technologies} />
              <ProjectSection title="Características Destacadas" content={proyecto.solution.features} />
              <ProjectSection title="Resultados" content={proyecto.solution.results} />
            </div>
          </div>

          <ProjectSection title="Conclusiones" content={proyecto.conclusions} />

          <div className="proyecto-tags">
            {proyecto.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default React.memo(ProyectoDetalle); 
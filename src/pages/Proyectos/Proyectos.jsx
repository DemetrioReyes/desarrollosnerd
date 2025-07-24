import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logo from '/logo3.png';
import './Proyectos.css';

function Proyectos() {
  const [selectedTag, setSelectedTag] = useState('');

  // Memoizamos los tags para evitar recálculos innecesarios
  const tags = useMemo(() => [
    'APLICACIONES',
    'SPRING BOOT',
    'POSTGRESQL',
    'PLATAFORMA',
    'E-COMMERCE',
    'DESARROLLO WEB',
    'MÓVIL'
  ], []);

  // Memoizamos los proyectos para evitar recreaciones innecesarias
  const projects = useMemo(() => [
    {
      title: 'App móvil para la mejora de la colaboración social',
      description: 'Desarrollo de app móvil y backoffice con Vue y Apache Cordova, integrados con un API en Spring Boot y PostgreSQL con PostGIS',
      tags: ['APLICACIONES', 'SPRING BOOT', 'POSTGRESQL', 'PLATAFORMA']
    },
    {
      title: 'Migración a Spring Cloud y PostgreSQL',
      description: 'Modernización del sistema de reserva hotelero con migración a la nube y tecnologías avanzadas reduciendo los costos operativos',
      tags: ['POSTGRESQL', 'SPRING BOOT', 'BASE DE DATOS']
    },
    {
      title: 'Creación de Apis para la venta de producto textil',
      description: 'Desarrollo de API escalable con Spring Boot y MySQL, integrando procesos B2B y B2C para un mayorista textil balear',
      tags: ['SPRING BOOT', 'SQL', 'BASE DE DATOS']
    },
    {
      title: 'Plataforma sobre precios con Machine Learning',
      description: 'Plataforma avanzada para ajuste dinámico de precios hoteleros utilizando Machine Learning y análisis estadístico',
      tags: ['POSTGRESQL', 'SPRING BOOT', 'REACT']
    },
    {
      title: 'Plataforma para la reserva de mesas',
      description: 'Plataforma de gestión de reservas hotelera con integración en TheFork desarrollada con Spring Boot y React',
      tags: ['PLATAFORMA', 'SPRING BOOT', 'REACT', 'POSTGRESQL']
    },
    {
      title: 'Aplicación web solidaria para Mallorca Sense Fam',
      description: 'Plataforma de Gestión de Citas para "Mallorca Sense Fam": Solución integral en Spring Boot y React para la distribución de alimentos',
      tags: ['SPRING BOOT', 'REACT', 'PLATAFORMA', 'POSTGRESQL', 'BASE DE DATOS']
    },
    {
      title: 'Plataforma IoT para el control de suministros',
      description: 'Plataforma IoT con LoRa para monitorear y gestionar consumo en puertos, permitiendo facturación justa y eficiente',
      tags: ['PLATAFORMA', 'REACT', 'SPRING BOOT']
    },
    {
      title: 'Plataforma de gestión de cursos formativos',
      description: 'Solución J2EE para Administración Pública con JBoss, JSP y Servlets, optimizando gestión formativa y seguridad de datos',
      tags: ['JAVA', 'PLATAFORMA']
    },
    {
      title: 'Mantenimientos y evolutivos gestión de viviendas',
      description: 'Mantenimiento y mejora de apps para la Administración Pública en Alquiler Social. Eficiencia y transparencia en servicios críticos',
      tags: ['APLICACIONES', 'PLATAFORMA']
    },
    {
      title: 'Creación Software SaaS para la gestión de fincas',
      description: 'Software de gestión de fincas con Spring MVC evolucionando a REST y AngularJS, garantizando simplicidad y eficiencia',
      tags: ['JAVA', 'SPRING BOOT', 'PLATAFORMA']
    }
  ], []);

  // Memoizamos el filtrado de proyectos
  const filteredProjects = useMemo(() => 
    selectedTag
      ? projects.filter(project => project.tags.includes(selectedTag))
      : projects,
    [selectedTag, projects]
  );

  // Función para generar URLs seguros
  const generateSafeUrl = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  return (
    <div className="proyectos-page">
      <Navbar />
      <header className="proyectos-header">
        <h1>Nuestros Proyectos</h1>
        <p>Soluciones tecnológicas que han transformado negocios</p>
      </header>
      
      <main className="proyectos-content">
        <div className="tags-filter">
          <button
            className={`tag ${selectedTag === '' ? 'active' : ''}`}
            onClick={() => setSelectedTag('')}
          >
            Todos
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const url = generateSafeUrl(project.title);
            return (
              <Link
                to={`/proyectos/${url}`}
                className="project-card"
                key={index}
              >
                <div className="project-image">
                  <h2 className="project-title">{project.title}</h2>
                  <LazyLoadImage
                    src={logo}
                    alt="Logo"
                    className="project-logo"
                    effect="blur"
                    threshold={100}
                  />
                </div>
                <div className="project-info">
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default React.memo(Proyectos); 
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Proyectos.css';
import { Link } from 'react-router-dom';

// Importar logo
import logo from '/logo3.png';

function Proyectos() {
  const [selectedTag, setSelectedTag] = useState('');

  const tags = [
    'APLICACIONES', 'BASE DE DATOS', 'JAVA', 'JAVASCRIPT', 'METODOLOGÍAS',
    'MICROSERVICIOS', 'PLATAFORMA', 'POSTGRESQL', 'REACT', 'SPRING BOOT'
  ];

  const projects = [
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
  ];

  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

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
            className={!selectedTag ? 'tag-btn active' : 'tag-btn'}
            onClick={() => setSelectedTag('')}
          >
            TODOS
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              className={selectedTag === tag ? 'tag-btn active' : 'tag-btn'}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link 
              to={`/proyectos/${project.title
                .toLowerCase()
                .replace(/ /g, '-')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')}`}
              className="project-card" 
              key={index}
              onClick={(e) => {
                const url = project.title
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '');
                console.log('URL generada:', url); // Para debug
              }}
            >
              <div className="project-image">
                <h2 className="project-title">{project.title}</h2>
                <img src={logo} alt="Logo" className="project-logo" />
              </div>
              <div className="project-info">
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="tag"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTag(tag);
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Proyectos; 
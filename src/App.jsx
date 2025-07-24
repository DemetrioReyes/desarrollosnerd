// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy loading de componentes
const Home = lazy(() => import('./pages/Home/Home'));
const Servicios = lazy(() => import('./pages/Servicios/Servicios'));
const Proyectos = lazy(() => import('./pages/Proyectos/Proyectos'));
const ProyectoDetalle = lazy(() => import('./pages/ProyectoDetalle/ProyectoDetalle'));
const Contacto = lazy(() => import('./pages/Contacto/Contacto'));

// Componente de carga
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Cargando...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
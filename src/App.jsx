// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';
import Proyectos from './pages/Proyectos/Proyectos';
import ProyectoDetalle from './pages/ProyectoDetalle/ProyectoDetalle';
import Contacto from './pages/Contacto/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
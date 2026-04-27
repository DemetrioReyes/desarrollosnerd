import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';
import Contacto from './pages/Contacto/Contacto';
import Privacidad from './pages/Legal/Privacidad';
import Terminos from './pages/Legal/Terminos';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';

function App() {
  return (
    <HelmetProvider>
    <LanguageProvider>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
    </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;

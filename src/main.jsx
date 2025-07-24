// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/colors.css'; // <--- ¡Asegúrate de importar tu archivo de colores!
import './index.css'; // Un archivo CSS general para estilos básicos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
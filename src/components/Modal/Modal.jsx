import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, type, message }) => {
  useEffect(() => {
    if (isOpen) {
      // Cerrar automáticamente después de 3 segundos
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className={`modal-icon ${type}`}>
          <i className={`fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-triangle'}`}></i>
        </div>
        <h3 className="modal-title">
          {type === 'success' ? '¡Mensaje Enviado!' : 'Error'}
        </h3>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          {type === 'success' ? 'Excelente' : 'Intentar nuevamente'}
        </button>
      </div>
    </div>
  );
};

export default Modal; 
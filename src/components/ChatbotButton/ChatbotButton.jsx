import React from 'react';
import './ChatbotButton.css';

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <button 
      className={`chatbot-button ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      aria-label="Abrir chat de ayuda"
    >
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      {!isOpen && <span className="pulse"></span>}
    </button>
  );
};

export default ChatbotButton; 
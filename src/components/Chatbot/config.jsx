import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'NerdBot';

// Componentes de widgets
const MainOptions = (props) => {
  const options = [
    { text: "💻 Servicios", handler: () => props.actionProvider.handleServices(), id: 1 },
    { text: "🔄 Proceso", handler: () => props.actionProvider.handleProcess(), id: 2 },
    { text: "📞 Agendar Consulta", handler: () => props.actionProvider.handleCall(), id: 3 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const ServiceOptions = (props) => {
  const options = [
    { text: "💻 Desarrollo Web", handler: () => props.actionProvider.handleServiceDetail('web'), id: 1 },
    { text: "📱 Apps Móviles", handler: () => props.actionProvider.handleServiceDetail('mobile'), id: 2 },
    { text: "🔧 Software a Medida", handler: () => props.actionProvider.handleServiceDetail('custom'), id: 3 },
    { text: "🛒 E-commerce", handler: () => props.actionProvider.handleServiceDetail('ecommerce'), id: 4 },
    { text: "📊 Consultoría", handler: () => props.actionProvider.handleServiceDetail('consulting'), id: 5 },
    { text: "🕷️ Web Scraping", handler: () => props.actionProvider.handleServiceDetail('scraping'), id: 6 },
    { text: "🛡️ Ciberseguridad", handler: () => props.actionProvider.handleServiceDetail('security'), id: 7 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const NextStepOptions = (props) => {
  const options = [
    { text: "📞 Agendar Consulta", handler: () => props.actionProvider.handleCall(), id: 1 },
    { text: "🔄 Ver Proceso", handler: () => props.actionProvider.handleProcess(), id: 2 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const QuotationOptions = (props) => {
  const options = [
    { text: "📞 Agendar Llamada", handler: () => props.actionProvider.handleCall(), id: 1 },
    { text: "📧 Enviar Requisitos", handler: () => props.actionProvider.handleContactForm(), id: 2 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const ScheduleOptions = (props) => {
  const options = [
    { text: "🌅 Mañana (9AM - 12PM)", handler: () => props.actionProvider.handleScheduleTime("Mañana (9AM - 12PM)"), id: 1 },
    { text: "☀️ Tarde (2PM - 5PM)", handler: () => props.actionProvider.handleScheduleTime("Tarde (2PM - 5PM)"), id: 2 },
    { text: "🌙 Noche (6PM - 8PM)", handler: () => props.actionProvider.handleScheduleTime("Noche (6PM - 8PM)"), id: 3 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const StartProjectOptions = (props) => {
  const options = [
    { text: "✅ ¡Sí, comencemos!", handler: () => props.actionProvider.handleCall(), id: 1 },
    { text: "🤔 Necesito más información", handler: () => props.actionProvider.handleServices(), id: 2 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

const ContactForm = (props) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    selectedTime: props.selectedTime || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.actionProvider.handleContactSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="selected-time">
        Horario seleccionado: {formData.selectedTime}
      </div>
      <input
        type="text"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        required
      />
      <button type="submit" className="submit-button">
        Agendar Llamada
      </button>
    </form>
  );
};

const config = {
  initialMessages: [
    createChatBotMessage(`¡Hola! Soy ${botName}, tu asistente virtual de Desarrollos Nerd. 👋`, {
      delay: 500,
    }),
    createChatBotMessage('¿En qué puedo ayudarte hoy?', {
      delay: 1000,
      widget: 'mainOptions',
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'var(--color-primary)',
    },
    chatButton: {
      backgroundColor: 'var(--color-primary)',
    },
  },
  widgets: [
    {
      widgetName: 'mainOptions',
      widgetFunc: (props) => <MainOptions {...props} />,
    },
    {
      widgetName: 'serviceOptions',
      widgetFunc: (props) => <ServiceOptions {...props} />,
    },
    {
      widgetName: 'nextStepOptions',
      widgetFunc: (props) => <NextStepOptions {...props} />,
    },
    {
      widgetName: 'startProjectOptions',
      widgetFunc: (props) => <StartProjectOptions {...props} />,
    },
    {
      widgetName: 'quotationOptions',
      widgetFunc: (props) => <QuotationOptions {...props} />,
    },
    {
      widgetName: 'scheduleOptions',
      widgetFunc: (props) => <ScheduleOptions {...props} />,
    },
    {
      widgetName: 'contactForm',
      widgetFunc: (props) => <ContactForm {...props} />,
    },
  ],
};

export default config; 
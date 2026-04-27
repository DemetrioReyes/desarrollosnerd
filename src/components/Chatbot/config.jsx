import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'NerdBot';

/* ---- Widgets ---- */

const MainOptions = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const options = [
    { text: isEn ? '💻 Services' : '💻 Servicios', handler: () => props.actionProvider.handleServices(), id: 1 },
    { text: isEn ? '🔄 Our Process' : '🔄 Proceso', handler: () => props.actionProvider.handleProcess(), id: 2 },
    { text: isEn ? '📞 Book a Call' : '📞 Agendar Consulta', handler: () => props.actionProvider.handleCall(), id: 3 },
  ];
  return (
    <div className="options-container">
      {options.map(o => <button key={o.id} onClick={o.handler} className="option-button">{o.text}</button>)}
    </div>
  );
};

const ServiceOptions = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const options = [
    { text: isEn ? '💻 Web Dev' : '💻 Desarrollo Web', handler: () => props.actionProvider.handleServiceDetail('web'), id: 1 },
    { text: isEn ? '📱 Mobile Apps' : '📱 Apps Móviles', handler: () => props.actionProvider.handleServiceDetail('mobile'), id: 2 },
    { text: isEn ? '🔧 Custom Software' : '🔧 Software a Medida', handler: () => props.actionProvider.handleServiceDetail('custom'), id: 3 },
    { text: isEn ? '🛒 E-commerce' : '🛒 E-commerce', handler: () => props.actionProvider.handleServiceDetail('ecommerce'), id: 4 },
    { text: isEn ? '🤖 AI & Automation' : '🤖 IA & Automatización', handler: () => props.actionProvider.handleServiceDetail('automation'), id: 5 },
    { text: isEn ? '🛡️ Cybersecurity' : '🛡️ Ciberseguridad', handler: () => props.actionProvider.handleServiceDetail('security'), id: 6 },
    { text: isEn ? '📊 Consulting' : '📊 Consultoría', handler: () => props.actionProvider.handleServiceDetail('consulting'), id: 7 },
  ];
  return (
    <div className="options-container">
      {options.map(o => <button key={o.id} onClick={o.handler} className="option-button">{o.text}</button>)}
    </div>
  );
};

const NextStepOptions = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const options = [
    { text: isEn ? '📞 Book a Call' : '📞 Agendar Consulta', handler: () => props.actionProvider.handleCall(), id: 1 },
    { text: isEn ? '🔄 See Process' : '🔄 Ver Proceso', handler: () => props.actionProvider.handleProcess(), id: 2 },
  ];
  return (
    <div className="options-container">
      {options.map(o => <button key={o.id} onClick={o.handler} className="option-button">{o.text}</button>)}
    </div>
  );
};

const ScheduleOptions = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const options = [
    { text: isEn ? '🌅 Morning (9AM–12PM)' : '🌅 Mañana (9AM–12PM)', handler: () => props.actionProvider.handleScheduleTime(isEn ? 'Morning (9AM–12PM)' : 'Mañana (9AM–12PM)'), id: 1 },
    { text: isEn ? '☀️ Afternoon (2PM–5PM)' : '☀️ Tarde (2PM–5PM)', handler: () => props.actionProvider.handleScheduleTime(isEn ? 'Afternoon (2PM–5PM)' : 'Tarde (2PM–5PM)'), id: 2 },
    { text: isEn ? '🌙 Evening (6PM–8PM)' : '🌙 Noche (6PM–8PM)', handler: () => props.actionProvider.handleScheduleTime(isEn ? 'Evening (6PM–8PM)' : 'Noche (6PM–8PM)'), id: 3 },
  ];
  return (
    <div className="options-container">
      {options.map(o => <button key={o.id} onClick={o.handler} className="option-button">{o.text}</button>)}
    </div>
  );
};

const StartProjectOptions = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const options = [
    { text: isEn ? "✅ Yes, let's start!" : '✅ ¡Sí, comencemos!', handler: () => props.actionProvider.handleCall(), id: 1 },
    { text: isEn ? '🤔 Tell me more' : '🤔 Necesito más información', handler: () => props.actionProvider.handleServices(), id: 2 },
  ];
  return (
    <div className="options-container">
      {options.map(o => <button key={o.id} onClick={o.handler} className="option-button">{o.text}</button>)}
    </div>
  );
};

const ContactForm = (props) => {
  const { lang } = props.state || {};
  const isEn = lang === 'en';
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', selectedTime: props.selectedTime || '' });
  const handleSubmit = (e) => { e.preventDefault(); props.actionProvider.handleContactSubmit(formData); };
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="selected-time">
        {isEn ? 'Selected time:' : 'Horario:'} {formData.selectedTime}
      </div>
      <input type="text" placeholder={isEn ? 'Full name' : 'Nombre completo'} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
      <input type="tel" placeholder={isEn ? 'Phone' : 'Teléfono'} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
      <button type="submit" className="submit-button">{isEn ? 'Book Call' : 'Agendar Llamada'}</button>
    </form>
  );
};

/* ---- Config factory ---- */

export const createConfig = (lang = 'es') => {
  const isEn = lang === 'en';
  return {
    initialMessages: [
      createChatBotMessage(
        isEn
          ? `Hi! I'm ${botName}, Desarrollos Nerd's virtual assistant. 👋`
          : `¡Hola! Soy ${botName}, tu asistente de Desarrollos Nerd. 👋`,
        { delay: 500 }
      ),
      createChatBotMessage(
        isEn ? 'How can I help you today?' : '¿En qué puedo ayudarte hoy?',
        { delay: 1000, widget: 'mainOptions' }
      ),
    ],
    botName,
    state: { lang },
    customStyles: {
      botMessageBox: { backgroundColor: '#8b5cf6' },
      chatButton: { backgroundColor: '#8b5cf6' },
    },
    widgets: [
      { widgetName: 'mainOptions', widgetFunc: (props) => <MainOptions {...props} /> },
      { widgetName: 'serviceOptions', widgetFunc: (props) => <ServiceOptions {...props} /> },
      { widgetName: 'nextStepOptions', widgetFunc: (props) => <NextStepOptions {...props} /> },
      { widgetName: 'startProjectOptions', widgetFunc: (props) => <StartProjectOptions {...props} /> },
      { widgetName: 'scheduleOptions', widgetFunc: (props) => <ScheduleOptions {...props} /> },
      { widgetName: 'contactForm', widgetFunc: (props) => <ContactForm {...props} /> },
    ],
  };
};

export default createConfig('es');

import emailjs from '@emailjs/browser';
import { getLang } from './chatbotLang';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  get isEn() { return getLang() === 'en'; }

  t(es, en) { return this.isEn ? en : es; }

  handleHello = () => {
    const msg = this.createChatBotMessage(
      this.t('¡Hola! Soy el asistente de Desarrollos Nerd. ¿Cómo puedo ayudarte?', "Hi! I'm Desarrollos Nerd's assistant. How can I help?"),
      { widget: 'mainOptions' }
    );
    this.updateChatbotState(msg);
  };

  handleServices = () => {
    const msg = this.createChatBotMessage(
      this.t('Estos son nuestros servicios principales:', 'Here are our main services:'),
      { delay: 500, widget: 'serviceOptions' }
    );
    this.updateChatbotState(msg);
  };

  handleServiceDetail = (service) => {
    const details = {
      web: {
        title: this.t('💻 Desarrollo Web', '💻 Web Development'),
        desc: this.t('Creamos aplicaciones web modernas y responsivas:', 'We build modern, responsive web applications:'),
        items: this.t([
          '• Landing pages profesionales',
          '• Aplicaciones web complejas',
          '• Portales empresariales',
          '• Integraciones con APIs',
          '• SEO optimizado',
        ], [
          '• Professional landing pages',
          '• Complex web applications',
          '• Business portals',
          '• API integrations',
          '• SEO optimized',
        ]),
      },
      mobile: {
        title: this.t('📱 Apps Móviles', '📱 Mobile Apps'),
        desc: this.t('Desarrollamos apps nativas y multiplataforma:', 'We develop native and cross-platform apps:'),
        items: this.t([
          '• Apps iOS y Android',
          '• React Native / Flutter',
          '• Notificaciones push',
          '• Integración con backend',
          '• Diseño UX/UI personalizado',
        ], [
          '• iOS and Android apps',
          '• React Native / Flutter',
          '• Push notifications',
          '• Backend integration',
          '• Custom UX/UI design',
        ]),
      },
      custom: {
        title: this.t('🔧 Software a Medida', '🔧 Custom Software'),
        desc: this.t('Soluciones personalizadas para tu negocio:', 'Custom solutions tailored to your business:'),
        items: this.t([
          '• Automatización de procesos',
          '• Sistemas de gestión (ERP/CRM)',
          '• Integración con sistemas existentes',
          '• Migración de datos',
          '• Mantenimiento continuo',
        ], [
          '• Process automation',
          '• Management systems (ERP/CRM)',
          '• Legacy system integration',
          '• Data migration',
          '• Ongoing maintenance',
        ]),
      },
      ecommerce: {
        title: this.t('🛒 E-commerce', '🛒 E-commerce'),
        desc: this.t('Plataformas de comercio electrónico:', 'Full e-commerce platforms:'),
        items: this.t([
          '• Tiendas online completas',
          '• Pasarelas de pago',
          '• Gestión de inventario',
          '• Panel administrativo',
          '• Análisis de ventas',
        ], [
          '• Full online stores',
          '• Payment gateways',
          '• Inventory management',
          '• Admin dashboard',
          '• Sales analytics',
        ]),
      },
      automation: {
        title: this.t('🤖 IA & Automatización', '🤖 AI & Automation'),
        desc: this.t('Soluciones inteligentes para tu empresa:', 'Smart solutions for your business:'),
        items: this.t([
          '• Chatbots con IA (OpenAI, Claude)',
          '• Automatización RPA',
          '• Digitalización de procesos',
          '• Business Intelligence',
          '• Web scraping y datos',
        ], [
          '• AI chatbots (OpenAI, Claude)',
          '• RPA automation',
          '• Process digitalization',
          '• Business Intelligence',
          '• Web scraping & data',
        ]),
      },
      security: {
        title: this.t('🛡️ Ciberseguridad', '🛡️ Cybersecurity'),
        desc: this.t('Protección integral para tu empresa:', 'Comprehensive security for your business:'),
        items: this.t([
          '• Pentesting y ethical hacking',
          '• Auditorías de seguridad',
          '• Hardening de servidores',
          '• DevSecOps',
          '• Cumplimiento ISO 27001 / GDPR',
        ], [
          '• Pentesting & ethical hacking',
          '• Security audits',
          '• Server hardening',
          '• DevSecOps',
          '• ISO 27001 / GDPR compliance',
        ]),
      },
      consulting: {
        title: this.t('📊 Consultoría', '📊 Consulting'),
        desc: this.t('Asesoramiento tecnológico estratégico:', 'Strategic technology advisory:'),
        items: this.t([
          '• Análisis de requerimientos',
          '• Arquitectura de sistemas',
          '• Optimización de procesos',
          '• Auditorías técnicas',
          '• Planificación estratégica',
        ], [
          '• Requirements analysis',
          '• System architecture',
          '• Process optimization',
          '• Technical audits',
          '• Strategic planning',
        ]),
      },
    };

    const d = details[service];
    const msgs = [
      this.createChatBotMessage(d.title, { delay: 500 }),
      this.createChatBotMessage(d.desc, { delay: 1000 }),
      this.createChatBotMessage(d.items.join('\n'), { delay: 1500 }),
      this.createChatBotMessage(
        this.t('¿Te gustaría agendar una consulta gratuita?', 'Would you like to book a free consultation?'),
        { delay: 2000, widget: 'nextStepOptions' }
      ),
    ];
    msgs.forEach(this.updateChatbotState);
  };

  handleProcess = () => {
    const msgs = [
      this.createChatBotMessage(this.t('🔄 Nuestro proceso de trabajo:', '🔄 Our work process:'), { delay: 500 }),
      this.createChatBotMessage(
        this.t(
          '1. 📋 Análisis y Planificación\n   • Reunión inicial\n   • Definición de requisitos\n\n2. 🎨 Diseño\n   • Wireframes y prototipos\n\n3. 💻 Desarrollo\n   • Iterativo con revisiones\n\n4. 🚀 Entrega\n   • Pruebas + despliegue\n\n5. 🛠️ Soporte\n   • Mantenimiento continuo',
          '1. 📋 Analysis & Planning\n   • Kickoff meeting\n   • Requirements definition\n\n2. 🎨 Design\n   • Wireframes & prototypes\n\n3. 💻 Development\n   • Iterative with reviews\n\n4. 🚀 Delivery\n   • Testing + deployment\n\n5. 🛠️ Support\n   • Ongoing maintenance'
        ),
        { delay: 1000 }
      ),
      this.createChatBotMessage(
        this.t('¿Te gustaría comenzar un proyecto?', 'Would you like to start a project?'),
        { delay: 1500, widget: 'startProjectOptions' }
      ),
    ];
    msgs.forEach(this.updateChatbotState);
  };

  handleCall = () => {
    const msgs = [
      this.createChatBotMessage(
        this.t('📞 ¡Excelente! Primera consulta totalmente gratuita.', '📞 Great! First consultation is completely free.'),
        { delay: 500 }
      ),
      this.createChatBotMessage(
        this.t('Selecciona el horario que prefieras:', 'Select your preferred time slot:'),
        { delay: 1000, widget: 'scheduleOptions' }
      ),
    ];
    msgs.forEach(this.updateChatbotState);
  };

  handleScheduleTime = (time) => {
    const msgs = [
      this.createChatBotMessage(`✅ ${this.t('Horario seleccionado', 'Selected time')}: ${time}`, { delay: 500 }),
      this.createChatBotMessage(
        this.t('Para confirmar, necesito algunos datos:', 'To confirm, I need a few details:'),
        { delay: 1000, widget: 'contactForm', props: { selectedTime: time } }
      ),
    ];
    msgs.forEach(this.updateChatbotState);
  };

  handleContactSubmit = (data) => {
    const templateParams = {
      nombre: data.name, email: data.email, telefono: data.phone,
      horario: data.selectedTime || 'N/A',
      tipo: 'Chatbot Call Request',
      asunto: 'New Call Request via Chatbot',
      mensaje: `Call request:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nTime: ${data.selectedTime || 'N/A'}`,
    };

    emailjs.send('service_l7c1624', 'template_183qklm', templateParams, '0p1HNeMwdEFpSp3LN')
      .then(() => {
        const msgs = [
          this.createChatBotMessage(
            this.t('✅ ¡Perfecto! Hemos registrado tu solicitud.', '✅ Perfect! We have registered your request.'),
            { delay: 500 }
          ),
          this.createChatBotMessage(
            this.t('Pronto nos pondremos en contacto contigo. ¿Algo más?', "We'll be in touch soon. Anything else?"),
            { delay: 1000, widget: 'mainOptions' }
          ),
        ];
        msgs.forEach(this.updateChatbotState);
      })
      .catch(() => {
        const msg = this.createChatBotMessage(
          this.t(
            '❌ Error al enviar. Contáctanos en contacto@desarrollosnerd.com',
            '❌ Error sending. Contact us at contacto@desarrollosnerd.com'
          ),
          { delay: 500 }
        );
        this.updateChatbotState(msg);
      });
  };

  handleDefault = () => {
    const msg = this.createChatBotMessage(
      this.t('Disculpa, no entendí. Selecciona una opción:', "Sorry, I didn't understand. Please select an option:"),
      { widget: 'mainOptions' }
    );
    this.updateChatbotState(msg);
  };

  updateChatbotState = (message) => {
    this.setState(prev => ({ ...prev, messages: [...prev.messages, message] }));
  };
}

export default ActionProvider;

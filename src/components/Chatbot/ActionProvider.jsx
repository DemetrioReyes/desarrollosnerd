import emailjs from '@emailjs/browser';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatBotMessage(
      '¡Hola! Soy el asistente virtual de Desarrollos Nerd. ¿Cómo puedo ayudarte hoy?',
      {
        widget: 'mainOptions',
      }
    );
    this.updateChatbotState(message);
  };

  handleServices = () => {
    const messages = [
      this.createChatBotMessage('Estos son nuestros servicios principales:', {
        delay: 500,
        widget: 'serviceOptions',
      })
    ];
    messages.forEach(this.updateChatbotState);
  };

  handleServiceDetail = (service) => {
    const serviceDetails = {
      web: {
        title: '💻 Desarrollo Web',
        description: 'Creamos sitios web modernos y responsivos:',
        features: [
          '• Landing pages profesionales',
          '• Aplicaciones web complejas',
          '• Portales empresariales',
          '• Integraciones con APIs',
          '• SEO optimizado'
        ]
      },
      mobile: {
        title: '📱 Aplicaciones Móviles',
        description: 'Desarrollamos apps nativas y multiplataforma:',
        features: [
          '• Apps iOS y Android',
          '• React Native',
          '• Notificaciones push',
          '• Integración con backend',
          '• Diseño UX/UI personalizado'
        ]
      },
      custom: {
        title: '🔧 Software a Medida',
        description: 'Soluciones personalizadas para tu negocio:',
        features: [
          '• Automatización de procesos',
          '• Sistemas de gestión',
          '• Integraciones con sistemas existentes',
          '• Migración de datos',
          '• Mantenimiento continuo'
        ]
      },
      ecommerce: {
        title: '🛒 E-commerce',
        description: 'Plataformas de comercio electrónico:',
        features: [
          '• Tiendas online completas',
          '• Integración con pasarelas de pago',
          '• Gestión de inventario',
          '• Panel administrativo',
          '• Análisis de ventas'
        ]
      },
      consulting: {
        title: '📊 Consultoría',
        description: 'Asesoramiento tecnológico integral:',
        features: [
          '• Análisis de requerimientos',
          '• Arquitectura de sistemas',
          '• Optimización de procesos',
          '• Auditorías técnicas',
          '• Planificación estratégica'
        ]
      },
      scraping: {
        title: '🕷️ Web Scraping',
        description: 'Extracción y análisis de datos web:',
        features: [
          '• Extracción automatizada de datos',
          '• Monitoreo de precios y productos',
          '• Análisis de competencia',
          '• Recopilación de información de mercado',
          '• Actualización automática de datos',
          '• APIs personalizadas',
          '• Dashboards de visualización'
        ]
      },
      security: {
        title: '🛡️ Ciberseguridad',
        description: 'Protección y seguridad informática integral:',
        features: [
          '• Auditorías de seguridad',
          '• Pentesting (Pruebas de penetración)',
          '• Análisis de vulnerabilidades',
          '• Seguridad en aplicaciones web',
          '• Protección contra malware y ransomware',
          '• Configuración de firewalls',
          '• Monitoreo de seguridad 24/7',
          '• Respuesta a incidentes',
          '• Formación en seguridad',
          '• Cumplimiento normativo (GDPR, HIPAA, etc.)'
        ]
      }
    };

    const detail = serviceDetails[service];
    const messages = [
      this.createChatBotMessage(detail.title, { delay: 500 }),
      this.createChatBotMessage(detail.description, { delay: 1000 }),
      this.createChatBotMessage(detail.features.join('\n'), { delay: 1500 }),
      this.createChatBotMessage('¿Te gustaría conocer nuestros precios o agendar una llamada?', {
        delay: 2000,
        widget: 'nextStepOptions',
      }),
    ];
    messages.forEach(this.updateChatbotState);
  };

  handlePricing = () => {
    const messages = [
      this.createChatBotMessage(
        '💡 Cada proyecto es único y se adapta a tus necesidades específicas.',
        { delay: 500 }
      ),
      this.createChatBotMessage(
        'Para brindarte un presupuesto preciso, necesitamos conocer:\n' +
        '• Alcance del proyecto\n' +
        '• Funcionalidades requeridas\n' +
        '• Plazos de entrega\n' +
        '• Requerimientos específicos',
        { delay: 1000 }
      ),
      this.createChatBotMessage(
        '¿Te gustaría agendar una llamada de consulta gratuita para discutir tu proyecto?',
        {
          delay: 1500,
          widget: 'scheduleOptions',
        }
      ),
    ];
    messages.forEach(this.updateChatbotState);
  };

  handleProcess = () => {
    const messages = [
      this.createChatBotMessage('🔄 Nuestro proceso de trabajo:', { delay: 500 }),
      this.createChatBotMessage(
        '1. 📋 Análisis y Planificación\n' +
        '   • Reunión inicial\n' +
        '   • Definición de requisitos\n' +
        '   • Propuesta técnica\n\n' +
        '2. 🎨 Diseño\n' +
        '   • Wireframes\n' +
        '   • Prototipos\n' +
        '   • Aprobación del cliente\n\n' +
        '3. 💻 Desarrollo\n' +
        '   • Desarrollo iterativo\n' +
        '   • Revisiones periódicas\n' +
        '   • Control de calidad\n\n' +
        '4. 🚀 Implementación\n' +
        '   • Pruebas finales\n' +
        '   • Despliegue\n' +
        '   • Capacitación\n\n' +
        '5. 🛠️ Soporte\n' +
        '   • Mantenimiento\n' +
        '   • Actualizaciones\n' +
        '   • Soporte técnico',
        { delay: 1000 }
      ),
      this.createChatBotMessage('¿Te gustaría comenzar un proyecto con nosotros?', {
        delay: 1500,
        widget: 'startProjectOptions',
      }),
    ];
    messages.forEach(this.updateChatbotState);
  };

  handleCall = () => {
    const messages = [
      this.createChatBotMessage(
        '📞 ¡Excelente! Podemos agendar una llamada de consulta gratuita.',
        { delay: 500 }
      ),
      this.createChatBotMessage(
        'Por favor, selecciona el horario que prefieras:',
        {
          delay: 1000,
          widget: 'scheduleOptions',
        }
      ),
    ];
    messages.forEach(this.updateChatbotState);
  };

  handleScheduleTime = (time) => {
    const messages = [
      this.createChatBotMessage(
        `✅ Has seleccionado: ${time}`,
        { delay: 500 }
      ),
      this.createChatBotMessage(
        'Para confirmar la llamada, necesito algunos datos:',
        {
          delay: 1000,
          widget: 'contactForm',
          props: {
            selectedTime: time
          }
        }
      ),
    ];
    messages.forEach(this.updateChatbotState);
  };

  handleContactSubmit = (data) => {
    // Preparar el template para EmailJS
    const templateParams = {
      nombre: data.name,
      email: data.email,
      telefono: data.phone,
      horario: data.selectedTime || 'No especificado',
      tipo: 'Solicitud de Llamada desde Chatbot',
      asunto: 'Nueva Solicitud de Llamada',
      mensaje: `Solicitud de llamada:\n
        Nombre: ${data.name}\n
        Email: ${data.email}\n
        Teléfono: ${data.phone}\n
        Horario preferido: ${data.selectedTime || 'No especificado'}`
    };

    // Enviar email usando EmailJS
    emailjs.send(
      'service_l7c1624',
      'template_183qklm',
      templateParams,
      '0p1HNeMwdEFpSp3LN'
    )
    .then((result) => {
      console.log('Email enviado exitosamente:', result.text);
      const messages = [
        this.createChatBotMessage(
          '✅ ¡Perfecto! He registrado tus datos:',
          { delay: 500 }
        ),
        this.createChatBotMessage(
          `Nombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nHorario: ${data.selectedTime || 'No especificado'}`,
          { delay: 1000 }
        ),
        this.createChatBotMessage(
          '📧 Te hemos enviado un correo de confirmación. Pronto nos pondremos en contacto contigo.',
          { delay: 1500 }
        ),
        this.createChatBotMessage(
          '¿Hay algo más en lo que pueda ayudarte?',
          {
            delay: 2000,
            widget: 'mainOptions',
          }
        ),
      ];
      messages.forEach(this.updateChatbotState);
    })
    .catch((error) => {
      console.error('Error al enviar el email:', error);
      const errorMessages = [
        this.createChatBotMessage(
          '❌ Lo siento, ha ocurrido un error al procesar tu solicitud.',
          { delay: 500 }
        ),
        this.createChatBotMessage(
          'Por favor, intenta nuevamente o contáctanos directamente a rdemetrio72@yahoo.com',
          { delay: 1000 }
        ),
      ];
      errorMessages.forEach(this.updateChatbotState);
    });
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      'Disculpa, no entendí tu pregunta. ¿Podrías seleccionar una de estas opciones?',
      {
        widget: 'mainOptions',
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider; 
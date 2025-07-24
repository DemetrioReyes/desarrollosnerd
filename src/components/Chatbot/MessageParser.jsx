class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes('hola') || lowerCase.includes('hi') || lowerCase.includes('hey')) {
      this.actionProvider.handleHello();
      return;
    }

    if (lowerCase.includes('servicio') || lowerCase.includes('servicios')) {
      this.actionProvider.handleServices();
      return;
    }

    if (lowerCase.includes('precio') || lowerCase.includes('costo') || lowerCase.includes('presupuesto')) {
      this.actionProvider.handlePricing();
      return;
    }

    if (lowerCase.includes('proceso') || lowerCase.includes('trabajo') || lowerCase.includes('metodología')) {
      this.actionProvider.handleProcess();
      return;
    }

    if (lowerCase.includes('llamada') || lowerCase.includes('reunión') || lowerCase.includes('contactar')) {
      this.actionProvider.handleCall();
      return;
    }

    if (lowerCase.includes('scraping') || lowerCase.includes('extracción') || lowerCase.includes('datos') || 
        lowerCase.includes('web scraping') || lowerCase.includes('extraer información')) {
      this.actionProvider.handleServiceDetail('scraping');
      return;
    }

    if (lowerCase.includes('seguridad') || lowerCase.includes('ciberseguridad') || lowerCase.includes('hacking') || 
        lowerCase.includes('pentesting') || lowerCase.includes('vulnerabilidades') || lowerCase.includes('auditoría') ||
        lowerCase.includes('malware') || lowerCase.includes('firewall')) {
      this.actionProvider.handleServiceDetail('security');
      return;
    }

    this.actionProvider.handleDefault();
  }
}

export default MessageParser; 
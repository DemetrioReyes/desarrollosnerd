# Desarrollos Nerd - Sitio Web

Sitio web oficial de Desarrollos Nerd, una empresa especializada en desarrollo de software y soluciones tecnológicas.

## 🚀 Características

- Diseño moderno y responsivo
- Navegación intuitiva
- Secciones detalladas de servicios y proyectos
- Formulario de contacto con EmailJS
- Integración con redes sociales
- Optimizado para SEO

## ⚡ Optimizaciones de Rendimiento

### Lazy Loading
- Carga diferida de todas las páginas principales
- Implementación de Suspense y componente de carga personalizado
- Mejor tiempo de carga inicial (First Contentful Paint)

### Optimización de Imágenes
- Lazy loading de imágenes con react-lazy-load-image-component
- Efecto blur durante la carga
- Threshold configurado para precarga optimizada

### Memoización y Caché
- Uso de useMemo para datos estáticos
- React.memo para componentes puros
- Optimización de funciones de filtrado y búsqueda

### Componentes Optimizados
- Arquitectura de componentes modular
- Eliminación de re-renderizados innecesarios
- Gestión eficiente de estados

### Mejoras de Código
- Eliminación de código de depuración
- Manejo robusto de errores
- Código limpio y mantenible

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- React Router DOM
- EmailJS
- Font Awesome
- CSS Moderno (Flexbox, Grid, Variables CSS)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/desarrollosnerd/desarrollos-nerd-web.git
```

2. Instala las dependencias:
```bash
cd desarrollos-nerd-web
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:
```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🌐 Estructura del Proyecto

```
desarrollos-nerd-web/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── Modal/
│   │   └── Navbar/
│   ├── pages/
│   │   ├── Contacto/
│   │   ├── Home/
│   │   ├── Proyectos/
│   │   └── Servicios/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 📱 Páginas Principales

- **Inicio**: Presentación de la empresa y servicios destacados
- **Servicios**: Catálogo detallado de servicios ofrecidos
- **Proyectos**: Portafolio de proyectos realizados con filtrado optimizado
- **Contacto**: Formulario de contacto con integración EmailJS y modal de notificaciones

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Previsualiza la versión de producción

## 📊 Métricas de Rendimiento

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.8s
- Cumulative Layout Shift (CLS): < 0.1

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- Email: rdemetrio72@yahoo.com
- WhatsApp: +1 (809) 405-9011
- GitHub: [@desarrollosnerd](https://github.com/desarrollosnerd)
- Instagram: [@desarrollosnerd](https://instagram.com/desarrollosnerd)

---
Desarrollado con ❤️ por Desarrollos Nerd

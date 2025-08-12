# JSFly - Fotografía y Video Aéreo Profesional

Sitio web profesional para servicios de fotografía y video aéreo con drones, especializado en el sector inmobiliario y publicitario.

## 🚁 Características

- **Fotografía Inmobiliaria**: Captura profesional de inmuebles desde el aire
- **Video Aéreo Publicitario**: Contenido visual impactante para marketing
- **Documentación de Terrenos**: Análisis y documentación aérea
- **Certificaciones AESA**: Piloto certificado con todas las normativas vigentes
- **Diseño Responsivo**: Optimizado para todos los dispositivos

## 🛠️ Tecnologías

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Imágenes**: Optimizadas para web

## 📋 Instalación Local

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd jsfly

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🚀 Despliegue en Netlify

### Opción 1: Despliegue Automático (Recomendado)

1. **Conectar con GitHub**:
   - Ve a [Netlify](https://netlify.com)
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio de GitHub
   - Configuración automática:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Variables de entorno** (si las necesitas):
   - Ve a Site settings > Environment variables
   - Agrega las variables necesarias

### Opción 2: Despliegue Manual

1. **Construir el proyecto**:
   ```bash
   npm run build
   ```

2. **Subir a Netlify**:
   - Ve a [Netlify](https://netlify.com)
   - Arrastra la carpeta `dist` al área de deploy

## 📁 Estructura del Proyecto

```
jsfly/
├── public/
│   ├── images/          # Imágenes del portfolio
│   ├── _redirects       # Redirecciones para SPA
│   └── index.html       # HTML principal
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx   # Navegación principal
│   │   ├── Hero.jsx     # Sección hero
│   │   ├── About.jsx    # Información sobre mí
│   │   ├── Portfolio.jsx # Galería de trabajos
│   │   ├── Contact.jsx  # Formulario de contacto
│   │   └── Footer.jsx   # Pie de página
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── netlify.toml         # Configuración de Netlify
└── package.json         # Dependencias y scripts
```

## 🎨 Personalización

### Colores Principales
- **Azul**: `#3B82F6` (blue-500)
- **Gris**: `#6B7280` (gray-500)
- **Blanco**: `#FFFFFF`

### Fuentes
- **Principal**: Inter (sistema)
- **Fallback**: system-ui, sans-serif

## 📞 Contacto

- **Email**: juliansantanatoglia@gmail.com
- **Teléfono**: +34 695 547 905
- **Ubicación**: Almería, España
- **Instagram**: [@jsglia](https://www.instagram.com/jsglia)
- **TikTok**: [@jsglia](https://www.tiktok.com/jsglia)
- **Portfolio Web**: [jsgliadev.netlify.app](https://jsgliadev.netlify.app)

## 📄 Licencia

Este proyecto es privado y está destinado para uso comercial de JSFly.

---

**JSFly** - Capturando el mundo desde las alturas 🚁

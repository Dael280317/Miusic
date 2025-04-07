# Miusic - Reproductor de Música

![Miusic Logo](/public/music-note.svg)

Miusic es una aplicación web para reproducir música que utiliza la API de Deezer para buscar y reproducir canciones. La aplicación está construida con React, Material UI y utiliza un servidor proxy para comunicarse con la API de Deezer.

## Características

- 🎵 Reproducción de música con controles de reproducción
- 🔍 Búsqueda de canciones
- 📚 Biblioteca de música
- 🎨 Interfaz de usuario moderna y atractiva
- 📱 Diseño responsive para diferentes dispositivos

## Requisitos Previos

Antes de instalar y ejecutar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v14.0.0 o superior)
- npm (normalmente viene con Node.js)

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio o descárgalo como ZIP y descomprímelo

```bash
git clone https://github.com/Dael280317/Miusic.git
cd Miusic
```

2. Instala las dependencias del proyecto

```bash
npm install
```

## Configuración

La aplicación utiliza un servidor proxy para comunicarse con la API de Deezer. No se requiere ninguna configuración adicional, pero si deseas modificar los puertos, puedes hacerlo en los siguientes archivos:

- Servidor proxy: `server/proxy.js` (puerto 3001 por defecto)
- Aplicación frontend: `vite.config.js` (puerto 3000 por defecto)

## Ejecución

Para ejecutar la aplicación, necesitas iniciar tanto el servidor proxy como la aplicación frontend:

1. Inicia el servidor proxy (en una terminal):

```bash
node server/proxy.js
```

2. En otra terminal, inicia la aplicación frontend:

```bash
npm run dev
```

3. Abre tu navegador y visita: [http://localhost:3000](http://localhost:3000)

## Uso

### Página de Inicio

La página de inicio muestra las canciones más populares. Puedes reproducir cualquier canción haciendo clic en el botón de reproducción.

### Búsqueda

Utiliza la página de búsqueda para encontrar tus canciones favoritas. Simplemente escribe el nombre de la canción, artista o álbum en el campo de búsqueda.

### Biblioteca

La página de biblioteca muestra tus canciones guardadas (si has implementado esta funcionalidad).

### Reproductor

El reproductor se muestra en la parte inferior de la aplicación y te permite:

- Reproducir/pausar la canción actual
- Ver el progreso de la canción
- Controlar el volumen

## Estructura del Proyecto

```
Miusic/
├── public/               # Archivos públicos
├── server/               # Servidor proxy
│   └── proxy.js          # Configuración del servidor proxy
├── src/                  # Código fuente
│   ├── components/       # Componentes reutilizables
│   ├── context/          # Contextos de React
│   ├── pages/            # Páginas de la aplicación
│   ├── services/         # Servicios para API
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── theme.js          # Configuración del tema
├── .gitignore            # Archivos ignorados por git
├── index.html            # Archivo HTML principal
├── package.json          # Dependencias y scripts
└── vite.config.js        # Configuración de Vite
```

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - React Router
  - Material UI
  - Axios

- **Backend**:
  - Express (servidor proxy)

- **Herramientas de desarrollo**:
  - Vite
  - ESLint

## Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

Desarrollado con ❤️ por [Dael280317]
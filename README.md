# Lab Sheets Manual

Manual de usuario interactivo para la aplicación web Lab Sheets - Sistema de desarrollo de esmaltes cerámicos.

## Descripción

Lab Sheets es una aplicación web que digitaliza el proceso completo de desarrollo de esmaltes cerámicos, integrando en un único entorno los módulos de:

- 📊 Datos del proyecto
- 🧪 Hoja de formulación
- 🔬 Aplicación de pruebas
- 📋 Revisión técnica
- 📈 Pantalla de resultados

Este manual interactivo proporciona una guía completa sobre cómo utilizar todas las funcionalidades de la aplicación.

## Características

- ✨ Interfaz moderna y responsive
- 🎨 Diseño intuitivo con navegación clara
- 📱 Compatible con dispositivos móviles
- 🖼️ Galería de imágenes interactiva
- 🔍 Funcionalidad de búsqueda
- 📑 Tabla de contenidos dinámica

## Tecnologías Utilizadas

- **React** - Framework de JavaScript
- **Vite** - Herramienta de build
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Iconos
- **Shadcn/ui** - Componentes de UI

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/lab-sheets-manual.git
```

2. Navega al directorio del proyecto:
```bash
cd lab-sheets-manual
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── ImageGallery.jsx
│   ├── SearchBar.jsx
│   └── TableOfContents.jsx
├── assets/             # Imágenes y recursos estáticos
├── hooks/              # Custom hooks
├── lib/                # Utilidades
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Para más información sobre Lab Sheets o este manual, contacta con el equipo de desarrollo.

---

**Lab Sheets** - Digitalizando el desarrollo de esmaltes cerámicos 🏺✨
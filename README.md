# Portafolio profesional — Christiam Mendoza

Portafolio one-page estático: Product Design, Futures & Innovation.

Director del Programa de Diseño y Profesor Emprendedor (EAAD, Tecnológico de Monterrey) · Experto del Futures Design Lab.

## Demo

Abre `index.html` en el navegador. Sin build ni dependencias.

## Estructura

```text
portafolio_profesional/
├── index.html        # Contenido y secciones
├── styles.css        # Estilos (referencia visual: herramientas-diseno/)
├── script.js         # Modales, menú móvil, formulario mailto
├── logo_cimg.png     # Logo del header
└── foto_christiam.jpg
```

## Secciones

- Hero con enlaces rápidos (LinkedIn, YouTube, guía de herramientas)
- Sobre mí · Trayectoria y formación · Enfoque (3 pilares)
- Proyectos destacados (modales) · Blog/recursos · Contacto

## Formulario

Solo cliente: arma un `mailto:mail@christiam.me` y abre el correo del visitante. Sin backend. Para envío directo sin cliente de correo, migrar a Formspree / Basin / Netlify Forms.

## Personalizar

- Textos: `index.html`
- Colores/estilos: variables en `styles.css` (`--grad`, `--bg`, `--ink`)
- Proyectos/modales: objeto `MODALES` en `script.js`
- Correo: `mailto:` en `index.html` (2 lugares) y `script.js` (1 lugar)

## Publicar en GitHub Pages

1. Sube esta carpeta como repo (p. ej. `portafolio`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. URL: `https://<usuario>.github.io/<repo>/`.

## Enlaces

- Blog: https://www.christiam.me
- Guía de herramientas: https://christiamme.github.io/herramientas-diseno/
- LinkedIn: https://www.linkedin.com/in/christiammendoza/
- YouTube: https://www.youtube.com/c/ChristiamMendoza
- Futures Design Lab: https://fdl.tec.mx/es/semblanza/christiam-mendoza
- Contacto: mail@christiam.me

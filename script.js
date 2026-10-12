// Menú móvil
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('topnav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Datos de modales de proyectos
const MODALES = {
  m1: {
    accent: 'linear-gradient(90deg, #9933cc, #cc33aa)',
    titulo: 'Guía interactiva: 50+ herramientas del proceso de diseño',
    cuerpo: `
      <p>Recurso abierto que organiza <strong>6 fases del proceso de diseño</strong> con decenas de herramientas accionables: de brainstorming, personas y FODA a métodos poco conocidos de libros, cursos y práctica profesional.</p>
      <h3 style="margin:1rem 0 .3rem">Qué incluye</h3>
      <ul><li>Navegación por fases con fichas detalladas</li><li>Descripciones, usos y ejemplos por herramienta</li><li>Diseño responsive listo para el aula</li></ul>
      <h3 style="margin:1rem 0 .3rem">Rol</h3>
      <p>Concepto, curaduría, contenido y desarrollo front-end.</p>
      <p style="margin-top:1rem"><a href="https://christiamme.github.io/herramientas-diseno/" target="_blank" rel="noopener">Abrir la guía ↗</a> · <a href="https://christiam.me/publique-una-guia-interactiva-con-mas-de-50-herramientas-del-proceso-de-diseno/" target="_blank" rel="noopener">Leer el post ↗</a></p>`
  },
  m2: {
    accent: 'linear-gradient(90deg, #3399ff, #33ccbb)',
    titulo: 'Portal de convocatorias y becas',
    cuerpo: `
      <p>Las oportunidades para estudiantes de diseño están dispersas: webs universitarias, Instagram, LinkedIn. Este portal las <strong>centraliza en un solo lugar</strong> y se construyó en una mañana usando IA como acelerador.</p>
      <h3 style="margin:1rem 0 .3rem">Aprendizajes</h3>
      <ul><li>Prototipar rápido con IA sin sacrificar criterio de diseño</li><li>Curaduría como valor: menos scroll, más señal</li><li>Distribución pensada para estudiantes</li></ul>
      <p style="margin-top:1rem"><a href="https://christiam.me/construi-un-portal-de-convocatorias-y-becas-en-una-manana-y-esto-aprendi/" target="_blank" rel="noopener">Leer el caso ↗</a></p>`
  },
  m3: {
    accent: 'linear-gradient(90deg, #ff9933, #ff5577)',
    titulo: 'IA para profesores',
    cuerpo: `
      <p>Serie de guías y cursos sobre <strong>IA generativa en educación</strong>: del stack 2023 (Craiyon, ChatGPT-3) al panorama 2026. Enfoque práctico para profesores de diseño.</p>
      <h3 style="margin:1rem 0 .3rem">Temas</h3>
      <ul><li>Herramientas vigentes por tarea docente</li><li>Integridad académica y criterio</li><li>Flujos de aula con IA</li></ul>
      <p style="margin-top:1rem"><a href="https://christiam.me/ia-para-profesores-2026-lo-que-cambio-y-lo-que-necesitas-saber/" target="_blank" rel="noopener">Leer guía 2026 ↗</a></p>`
  },
  m4: {
    accent: 'linear-gradient(90deg, #6633ee, #3399ff)',
    titulo: 'Canal de YouTube + Blog',
    cuerpo: `
      <p>Contenido en español sobre <strong>Vizcom AI, Design Sprint, Design Thinking, Lean Startup y creatividad</strong>, incluyendo la charla de la Reunión Nacional de Profesores del Tec.</p>
      <h3 style="margin:1rem 0 .3rem">Formatos</h3>
      <ul><li>Tutoriales de herramientas</li><li>Reflexiones de innovación y emprendimiento</li><li>Clips verticales para Instagram / TikTok</li></ul>
      <p style="margin-top:1rem"><a href="https://www.youtube.com/c/ChristiamMendoza" target="_blank" rel="noopener">Ver canal ↗</a> · <a href="https://www.christiam.me" target="_blank" rel="noopener">Ver blog ↗</a></p>`
  }
};

const overlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.tarjeta[data-modal]').forEach(card => {
  card.addEventListener('click', () => {
    const d = MODALES[card.dataset.modal];
    if (!d) return;
    modalBody.innerHTML = `<div class="modal-accent" style="background:${d.accent}"></div><h2>${d.titulo}</h2>${d.cuerpo}`;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Formulario demo (mailto)
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portafolio — ${data.get('nombre')}`);
  const body = encodeURIComponent(`${data.get('mensaje')}\n\n— ${data.get('nombre')} (${data.get('email')})`);
  window.location.href = `mailto:mail@christiam.me?subject=${subject}&body=${body}`;
  note.textContent = 'Abriendo tu correo para enviar el mensaje…';
  form.reset();
});

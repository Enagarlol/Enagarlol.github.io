// ——— Datos ———
const STACK = {
  Backend: [
    ['C#', 'ti-brand-c-sharp'], ['.NET / ASP.NET', 'ti-code'], ['EF Core', 'ti-database-cog'],
    ['Node.js', 'ti-brand-nodejs'], ['Express', 'ti-server'], ['Prisma', 'ti-brand-prisma'],
    ['API REST', 'ti-api'], ['gRPC', 'ti-arrows-exchange'], ['Keycloak', 'ti-shield-lock'],
    ['JWT', 'ti-key'], ['PHP / Laravel', 'ti-brand-laravel']
  ],
  Frontend: [
    ['HTML', 'ti-brand-html5'], ['CSS / SCSS', 'ti-brand-css3'], ['JavaScript', 'ti-brand-javascript'],
    ['TypeScript', 'ti-brand-typescript'], ['React', 'ti-brand-react'], ['Angular', 'ti-brand-angular'],
    ['Svelte / SvelteKit', 'ti-brand-svelte'], ['Astro', 'ti-brand-astro'], ['Bootstrap', 'ti-brand-bootstrap']
  ],
  'Escritorio y móvil': [
    ['WinUI 3', 'ti-brand-windows'], ['MVVM', 'ti-layers-subtract'], ['Kotlin', 'ti-brand-kotlin']
  ],
  Datos: [
    ['SQL Server', 'ti-database'], ['T-SQL', 'ti-sql'], ['PostgreSQL', 'ti-database'],
    ['MySQL', 'ti-brand-mysql'], ['SQLite', 'ti-database']
  ],
  Herramientas: [
    ['Git', 'ti-brand-git'], ['GitHub', 'ti-brand-github'], ['xUnit / NSubstitute', 'ti-test-pipe'],
    ['FlaUI (UI tests)', 'ti-click'], ['QuestPDF', 'ti-file-type-pdf'], ['EPPlus', 'ti-file-spreadsheet'],
    ['IA aplicada al desarrollo', 'ti-sparkles']
  ]
};

const EXPERIENCE = [
  {
    role: 'SACS Copilot',
    company: 'SAO Insurtech',
    date: 'Ene 2026 – May 2026',
    points: [
      'Migré y adapté servicios existentes para integrarlos en la nueva plataforma SACS.',
      'Diseñé e implementé la arquitectura base: seguridad con Keycloak, roles y permisos, y la configuración para el despliegue y la operación del sistema.'
    ],
    tech: ['C#', '.NET', 'Keycloak', 'gRPC']
  },
  {
    role: 'Mysis — Punto de venta multiempresa',
    company: 'Stac Los Cabos',
    date: 'Dic 2025 – Jun 2026',
    points: [
      'Desarrollé desde cero una aplicación de punto de venta de escritorio con arquitectura multi-tenant: una base central de configuración y una base independiente por empresa.',
      'Diseñé una arquitectura por features en capas (Domain, Application, Infrastructure, Presentation) con inyección de dependencias y unit tests con xUnit y NSubstitute.'
    ],
    tech: ['C# 13', '.NET 9', 'WinUI 3', 'EF Core 9', 'SQL Server', 'MVVM']
  },
  {
    role: 'Xyphiaz — Sistema de punto de venta',
    company: 'Stac Los Cabos',
    date: 'Ene 2024 – Mar 2025',
    points: [
      'Lideré la migración del sistema a nuevas versiones de la tecnología, optimizando el código existente.',
      'Corregí errores de lógica en el punto de venta y agregué nuevas funcionalidades, mejorando la estabilidad y la precisión de los procesos.'
    ],
    tech: ['C#', '.NET', 'SQL Server', 'QuestPDF', 'EPPlus', 'JavaScript']
  },
  {
    role: 'IIA-PROJECT — API para gestión académica',
    company: 'DSoft Solution',
    date: 'Sep 2023 – Dic 2023',
    points: [
      'Desarrollé los endpoints para gestionar estudiantes, cursos y pagos con una estructura escalable.',
      'Implementé rutas para la administración de roles, horarios, cursos y métodos de pago.'
    ],
    tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT']
  }
];

// cat: escritorio | web | backend
const PROJECTS = [
  {
    id: 'mysis', title: 'Mysis POS', cat: 'escritorio', featured: true, icon: 'ti-building-store', accent: '#4361EE',
    org: 'Stac Los Cabos', year: '2025 – 2026', window: 'Mysis — Punto de venta',
    short: 'Punto de venta de escritorio multiempresa con facturación electrónica (CFDI 4.0) integrada.',
    desc: 'Sistema de punto de venta para Windows pensado para varias empresas en una sola instalación: una base de datos central para usuarios, licencias y configuración, y una base independiente por empresa para su operación diaria.',
    role: [
      'Desarrollo desde cero con arquitectura por features y separación en capas.',
      'Modelo multi-tenant con EF Core 9: contexto central y contexto por empresa, con migraciones propias.',
      'Facturación CFDI: generación, sellado, timbrado, PDF y notas de crédito.',
      'Sistema de diseño propio en XAML y pruebas unitarias y de interfaz (xUnit, NSubstitute, FlaUI).'
    ],
    stack: ['C# 13', '.NET 9', 'WinUI 3', 'EF Core 9', 'SQL Server', 'MVVM', 'xUnit', 'FlaUI']
  },
  {
    id: 'sacs', title: 'SACS Copilot', cat: 'backend', icon: 'ti-shield-check', accent: '#7B61FF',
    org: 'SAO Insurtech', year: '2026', window: 'sacs · services', code: true,
    short: 'Plataforma para el sector asegurador: arquitectura base, seguridad y migración de servicios.',
    desc: 'Nueva plataforma SACS para operaciones de seguros. Reúne servicios que antes vivían por separado bajo una misma arquitectura, con autenticación centralizada y permisos por rol.',
    role: [
      'Diseño e implementación de la arquitectura base de la solución.',
      'Integración de seguridad con Keycloak: roles, permisos y sesiones.',
      'Migración y adaptación de servicios existentes; comunicación entre servicios con gRPC.'
    ],
    stack: ['C#', '.NET', 'Keycloak', 'gRPC', 'SQL Server']
  },
  {
    id: 'brokers', title: 'SACS para brókers de seguros', cat: 'web', icon: 'ti-briefcase', accent: '#4CC9F0',
    org: 'SAO Insurtech', year: '2025 – 2026', window: 'Bróker — Panel de pólizas',
    short: 'Implementaciones de SACS para brókers como Plasencia, Sicurika e IsureSacs.',
    desc: 'Sistemas web de administración para brókers de seguros construidos sobre SACS: pólizas, usuarios, catálogos y procesos internos de cada cliente.',
    role: [
      'Nuevas funcionalidades de punta a punta: base de datos, servicios y vistas.',
      'Consultas y procedimientos en T-SQL; pantallas en TypeScript y SCSS.',
      'Mantenimiento y corrección de errores en las implementaciones de varios clientes.'
    ],
    stack: ['ASP.NET', 'C#', 'T-SQL', 'TypeScript', 'SCSS', 'JavaScript']
  },
  {
    id: 'xiphias', title: 'Xiphias', cat: 'web', featured: true, icon: 'ti-receipt', accent: '#3A86FF',
    org: 'Stac Los Cabos · Xyphiaz', year: '2024 – 2025', window: 'Xiphias — Ventas y compras',
    short: 'Sistema web de punto de venta y compras; lideré su migración a versiones nuevas de .NET.',
    desc: 'Sistema web de punto de venta y administración para comercios, con su módulo de compras. Genera reportes en PDF y Excel y se integra con la operación diaria de las tiendas.',
    role: [
      'Lideré la migración a nuevas versiones de la tecnología, asegurando compatibilidad.',
      'Corrección de errores de lógica en ventas y nuevas funcionalidades.',
      'Desarrollo del módulo de compras y reportes con QuestPDF y EPPlus.'
    ],
    stack: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'SCSS', 'QuestPDF', 'EPPlus']
  },
  {
    id: 'procrea', title: 'Procrea', cat: 'web', icon: 'ti-heart-rate-monitor', accent: '#F72585',
    org: 'SAO Insurtech', year: '2025', window: 'Procrea — Panel central',
    short: 'Backend base y panel central para las aplicaciones de Procrea.',
    desc: 'Proyecto base para el backend de las aplicaciones de Procrea, junto con su panel central de administración.',
    role: [
      'Desarrollo en el backend base en .NET con procedimientos en T-SQL.',
      'Pantallas y servicios en el panel central hecho en Angular.'
    ],
    stack: ['C#', '.NET', 'T-SQL', 'Angular', 'TypeScript']
  },
  {
    id: 'poslite', title: 'PosLite', cat: 'escritorio', icon: 'ti-shopping-cart', accent: '#06D6A0',
    org: 'Proyecto personal', year: '2026', window: 'PosLite — Caja',
    short: 'Punto de venta sencillo para una tienda de abarrotes, con base de datos local.',
    desc: 'Punto de venta ligero para una tienda de abarrotes: ventas rápidas, inventario e instalador listo para usarse en una sola computadora, sin servidor.',
    role: [
      'Diseño y desarrollo completos, del modelo de datos al instalador.',
      'Base de datos local con SQLite, sin depender de un servidor.'
    ],
    stack: ['C#', '.NET 9', 'WinUI 3', 'SQLite']
  },
  {
    id: 'iia', title: 'IIA-PROJECT', cat: 'backend', icon: 'ti-school', accent: '#FFB703',
    org: 'DSoft Solution', year: '2023', window: 'iia-api · routes', code: true, repo: 'https://github.com/Enagarlol/IIA-PROJECT',
    short: 'API para una app de inglés individual: estudiantes, cursos, pagos, roles y horarios.',
    desc: 'Backend de una aplicación modular para administrar usuarios, reportar avances, calendarizar y agendar clases, y llevar el control administrativo interno de una escuela de inglés.',
    role: [
      'Endpoints para estudiantes, cursos y pagos con una estructura escalable.',
      'Rutas para roles, horarios, cursos y métodos de pago; autenticación con JWT.'
    ],
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT']
  },
  {
    id: 'policard', title: 'Policard', cat: 'web', icon: 'ti-id-badge-2', accent: '#8338EC',
    org: 'Mexicode · UPTap', year: '2023', window: 'Policard — Credencial digital',
    short: 'Credencialización digital para la Universidad Politécnica de Tapachula.',
    desc: 'Plataforma de credencialización digital de la Universidad Politécnica de Tapachula: la credencial del estudiante vive en la web y en el teléfono.',
    role: [
      'Desarrollo de vistas y componentes en la versión web con SvelteKit.',
      'Trabajo en equipo dentro de la comunidad Mexicode.'
    ],
    stack: ['Svelte', 'SvelteKit', 'JavaScript', 'CSS']
  },
  {
    id: 'mexicode', title: 'Sitio de Mexic0de', cat: 'web', icon: 'ti-rocket', accent: '#FB5607',
    org: 'Mexicode', year: '2023', window: 'mexic0de.com', public: true,
    short: 'Página web oficial de la comunidad de desarrollo Mexic0de.',
    desc: 'Sitio oficial de Mexic0de, comunidad de desarrollo de software, hecho con Astro para que cargue rápido.',
    role: ['Secciones y componentes del sitio en Astro.'],
    stack: ['Astro', 'HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/MexicodeInc2023/Mexic0de'
  }
];

const MORE = [
  ['Rhina', '.NET'], ['Octopus', 'Laravel'], ['DevMetrics', '.NET'], ['Importador de pólizas', 'C#'],
  ['Estado de cuenta CONTPAQi', 'C#'], ['Comercial API', 'C#'], ['Siusa', '.NET · TypeScript'], ['Chatbot services', 'Python']
];

const CATS = { todos: 'Todos', escritorio: 'Escritorio', web: 'Web', backend: 'Backend / API' };
const CAT_ICON = { escritorio: 'ti-device-desktop', web: 'ti-world-www', backend: 'ti-server-2' };

// ——— Utilidades ———
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function previewHtml(p) {
  const body = p.code
    ? `<div class="win-body"><span class="k">const</span> <span class="f">${p.id}</span> = <span class="k">await</span> app.<span class="f">build</span>({
  auth: <span class="s">'jwt'</span>,
  modules: [<span class="s">'roles'</span>, <span class="s">'users'</span>],
});
app.<span class="f">listen</span>(<span class="s">'🔒 privado'</span>);</div>`
    : `<div class="win-body"><div class="win-side"><i></i><i></i><i></i><i></i><i></i></div><div class="win-main"><i style="width:45%"></i><div class="win-row"><span></span><span></span><span></span></div><i></i><i style="width:80%"></i><i style="width:65%"></i></div></div>`;
  return `<div class="preview-icon"><i class="ti ${p.icon}"></i></div>
    <div class="win${p.code ? ' code' : ''}"><div class="win-bar"><b></b><b></b><b></b><em>${esc(p.window)}</em></div>${body}</div>`;
}

// ——— Tema ———
function initTheme() {
  const btn = $('#themeToggle');
  const current = () => document.documentElement.dataset.theme
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const paint = () => { btn.querySelector('i').className = current() === 'light' ? 'ti ti-moon' : 'ti ti-sun'; };
  btn.addEventListener('click', () => {
    const next = current() === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* sin almacenamiento */ }
    paint();
  });
  paint();
}

// ——— Texto que se escribe solo ———
function initTyped() {
  const el = $('#typed');
  const words = ['Full Stack', 'Backend .NET', 'Frontend', 'de escritorio WinUI', '100 % remoto'];
  if (reduceMotion) return;
  let w = 0;
  let i = words[0].length;
  let deleting = true;
  const tick = () => {
    i += deleting ? -1 : 1;
    el.textContent = words[w].slice(0, i);
    let delay = deleting ? 45 : 85;
    if (!deleting && i === words[w].length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && i === 0) {
      deleting = false;
      w = (w + 1) % words.length;
      delay = 300;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

// ——— Reloj de la zona horaria ———
function initClock() {
  const el = $('#clock');
  const fmt = new Intl.DateTimeFormat('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Mexico_City' });
  const draw = () => { el.textContent = fmt.format(new Date()); };
  draw();
  setInterval(draw, 15000);
}

// ——— Contadores ———
function animateCount(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  const dur = 1400;
  const step = (t) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ——— Stack ———
function initStack() {
  const tabs = $('#stackTabs');
  const chips = $('#stackChips');
  const names = Object.keys(STACK);
  tabs.innerHTML = names.map((n, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-tab="${esc(n)}">${esc(n)}</button>`).join('');
  const show = (name) => {
    tabs.querySelectorAll('.tab').forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
    chips.innerHTML = STACK[name].map(([label, icon], i) => `<span class="chip" style="animation-delay:${i * 35}ms"><i class="ti ${icon}"></i>${esc(label)}</span>`).join('');
  };
  tabs.addEventListener('click', (e) => { const b = e.target.closest('.tab'); if (b) show(b.dataset.tab); });
  show(names[0]);

  const all = names.flatMap((n) => STACK[n]);
  const item = ([label, icon]) => `<span><i class="ti ${icon}"></i>${esc(label)}</span>`;
  $('#marquee').innerHTML = all.map(item).join('') + all.map(item).join('');
}

// ——— Experiencia ———
function initTimeline() {
  $('#timeline').innerHTML = EXPERIENCE.map((x) => `
    <li class="tl-item">
      <div class="tl-top"><h4>${esc(x.role)}</h4><span class="tl-date">${esc(x.date)}</span></div>
      <div class="tl-company">${esc(x.company)}<span class="tl-remote"><i class="ti ti-wifi"></i> Remoto</span></div>
      <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      <div class="tl-tech">${x.tech.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    </li>`).join('');
}

// ——— Proyectos ———
function initProjects() {
  const grid = $('#projects');
  grid.innerHTML = PROJECTS.map((p) => `
    <button class="card project reveal${p.featured ? ' featured' : ''}" data-id="${p.id}" data-cat="${p.cat}" style="--accent:${p.accent}" aria-haspopup="dialog">
      <div class="preview">${previewHtml(p)}</div>
      <div class="project-body">
        <div class="project-top">
          <span class="project-cat"><i class="ti ${CAT_ICON[p.cat]}"></i> ${CATS[p.cat]}</span>
          ${p.public || p.repo ? '<span class="lock public"><i class="ti ti-world"></i>Público</span>' : '<span class="lock"><i class="ti ti-lock"></i>Privado</span>'}
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.short)}</p>
        <div class="tl-tech">${p.stack.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        <span class="project-open">Ver vista previa <i class="ti ti-arrow-right"></i></span>
      </div>
    </button>`).join('');

  const filters = $('#filters');
  filters.innerHTML = Object.entries(CATS).map(([k, v]) => {
    const n = k === 'todos' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === k).length;
    return `<button class="filter" data-filter="${k}" aria-pressed="${k === 'todos'}">${v}<span class="count">${n}</span></button>`;
  }).join('');
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('.filter');
    if (!b) return;
    filters.querySelectorAll('.filter').forEach((f) => f.setAttribute('aria-pressed', String(f === b)));
    grid.querySelectorAll('.project').forEach((card) => {
      const match = b.dataset.filter === 'todos' || card.dataset.cat === b.dataset.filter;
      card.classList.toggle('hide', !match);
      card.classList.toggle('featured', match && b.dataset.filter === 'todos' && PROJECTS.find((p) => p.id === card.dataset.id).featured);
    });
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.project');
    if (card) openProject(PROJECTS.find((p) => p.id === card.dataset.id));
  });

  $('#moreList').innerHTML = MORE.map(([n, t]) => `<span class="more-item"><strong>${esc(n)}</strong><span>${esc(t)}</span></span>`).join('');
}

function openProject(p) {
  const modal = $('#projectModal');
  modal.style.setProperty('--accent', p.accent);
  $('#modalPreview').innerHTML = previewHtml(p);
  const lock = p.public || p.repo ? '<span class="lock public"><i class="ti ti-world"></i>Público</span>' : '<span class="lock"><i class="ti ti-lock"></i>Repositorio privado</span>';
  $('#modalMeta').innerHTML = `${lock}<span>${esc(p.org)}</span><span>·</span><span>${esc(p.year)}</span>`;
  $('#modalTitle').textContent = p.title;
  $('#modalDesc').textContent = p.desc;
  $('#modalRole').innerHTML = p.role.map((r) => `<li>${esc(r)}</li>`).join('');
  $('#modalStack').innerHTML = p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join('');
  $('#modalLink').innerHTML = p.repo
    ? `<div class="cta"><a class="btn btn-primary" href="${p.repo}" target="_blank" rel="noopener"><i class="ti ti-brand-github"></i>Ver repositorio</a></div>`
    : '<p class="modal-note"><i class="ti ti-lock"></i><span>El código es de un cliente o empresa, así que no puedo publicarlo. Con gusto te cuento más detalles en una llamada.</span></p>';
  modal.showModal();
}

function initModal() {
  const modal = $('#projectModal');
  $('#modalClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
}

// ——— Copiar correo ———
function initCopy() {
  const btn = $('#copyEmail');
  const hint = $('#copyHint');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      hint.textContent = '¡Copiado!';
    } catch (e) {
      window.location.href = `mailto:${btn.dataset.copy}`;
      return;
    }
    btn.classList.add('copied');
    setTimeout(() => { hint.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1800);
  });
}

// ——— Brillo que sigue al cursor e inclinación de la foto ———
function initPointer() {
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
  const photo = $('#photoCard');
  if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return;
  photo.addEventListener('pointermove', (e) => {
    const r = photo.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    photo.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  photo.addEventListener('pointerleave', () => { photo.style.transform = ''; });
}

// ——— Aparición al hacer scroll y enlace activo ———
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 70}ms`;
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(animateCount);
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const links = [...document.querySelectorAll('.nav-links a')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${en.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
}

// ——— Inicio ———
$('#year').textContent = new Date().getFullYear();
initTheme();
initStack();
initTimeline();
initProjects();
initModal();
initCopy();
initPointer();
initClock();
initTyped();
initReveal();

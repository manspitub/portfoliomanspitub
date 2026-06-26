const publicUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const profile = {
  name: 'Manuel Spínola',
  role: {
    es: 'Desarrollador web full-stack junior',
    en: 'Junior full-stack web developer',
  },
  email: 'manspitub@hotmail.com',
  cvUrl: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/manuel-spinola-dev/',
    github: 'https://github.com/manspitub',
  },
};

export const languages = {
  es: {
    label: 'ES',
    nav: ['Inicio', 'Sobre mi', 'Experiencia', 'Skills', 'Proyectos', 'Contacto'],
    hero: {
      eyebrow: 'Full-stack junior con producto real, cloud y audiencia medible',
      title: 'No enseño maquetas: enseño sistemas funcionando.',
      summary:
        'Soy Manuel Spínola. He llevado proyectos desde la idea hasta el despliegue: un sistema de teleasistencia con impacto social, una plataforma de encuestas con backend, frontend y base de datos cloud, y un canal digital con millones de visualizaciones analizadas desde datos.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contactar',
      download: 'Descargar CV',
      stats: [
        ['8,2M', 'Visualizaciones gestionadas en KIROFIFA'],
        ['3', 'Proyectos con demos, datos o despliegue real'],
        ['Odoo 11-18', 'ERP, servidores y PostgreSQL'],
      ],
      proof: [
        ['01', 'VotaVision', 'Angular + Spring Boot + Docker + Aiven + Render/Vercel'],
        ['02', 'Teleasistencia', 'Software para cuidado, llamadas, usuarios y tratamientos'],
        ['03', 'KIROFIFA', '5,7k suscriptores y decisiones guiadas por analítica'],
      ],
    },
    about: {
      title: 'Mi punto fuerte es conectar piezas que normalmente se explican por separado.',
      text:
        'No quería un portfolio de tarjetas bonitas y frases vacías. Quería dejar claro cómo trabajo: entiendo el problema, construyo la interfaz, conecto el backend, cuido la base de datos, despliego en cloud y reviso si lo creado se entiende. Esa mezcla viene de DAW, DAM, prácticas con TPV/Odoo y proyectos propios con usuarios reales.',
      cards: [
        ['Construyo completo', 'Frontend, backend, SQL, Docker, cloud y formularios reales; no me quedo solo en una pantalla.'],
        ['Pienso en uso real', 'Teleasistencia prioriza claridad para usuarios sensibles; VotaVision prioriza gestión, seguridad y análisis.'],
        ['Mido lo que ocurre', 'KIROFIFA aporta algo poco común en un perfil junior: audiencia, retención, alcance y aprendizaje desde datos.'],
      ],
    },
    experienceTitle: 'Experiencia y formación',
    skillsTitle: 'Stack técnico',
    projectsTitle: 'Proyectos destacados',
    projectsIntro:
      'Proyectos creados para resolver problemas reales: cuidado digital, seguridad, participación online, analítica y despliegue completo en la nube.',
    contact: {
      title: 'Si quieres un junior que ya haya peleado con producto real, hablemos.',
      text:
        'Puedo aportar en equipos donde haga falta alguien que aprenda rápido, documente, resuelva incidencias y no tenga miedo a moverse entre frontend, backend, bases de datos y despliegue.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      configured: 'Formulario conectado mediante Formspree.',
      missing:
        'Sin Formspree configurado: el formulario abrirá tu cliente de correo con el mensaje preparado.',
      subject: 'Contacto desde portfolio - Manuel Spínola',
      success: 'Mensaje enviado. Gracias por contactar.',
      error: 'No se pudo enviar el mensaje. Revisa la configuración o inténtalo más tarde.',
    },
    footer: 'Portfolio construido como dossier técnico: proyectos, evidencias, demos y contacto directo.',
  },
  en: {
    label: 'EN',
    nav: ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'],
    hero: {
      eyebrow: 'Junior full-stack profile with real product, cloud and measurable audience',
      title: 'I do not show mockups: I show working systems.',
      summary:
        'I am Manuel Spínola. I have taken projects from idea to deployment: a telecare system with social impact, a survey platform with backend, frontend and cloud database, and a digital channel with millions of views analyzed through data.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact',
      download: 'Download CV',
      stats: [
        ['8.2M', 'Views managed through KIROFIFA'],
        ['3', 'Projects with demos, data or real deployment'],
        ['Odoo 11-18', 'ERP, servers and PostgreSQL'],
      ],
      proof: [
        ['01', 'VotaVision', 'Angular + Spring Boot + Docker + Aiven + Render/Vercel'],
        ['02', 'Telecare', 'Software for care, calls, users and treatments'],
        ['03', 'KIROFIFA', '5.7K subscribers and analytics-driven decisions'],
      ],
    },
    about: {
      title: 'My strength is connecting pieces that are usually explained separately.',
      text:
        'I did not want a portfolio made of pretty cards and empty claims. I wanted to show how I work: understand the problem, build the interface, connect the backend, care for the database, deploy to the cloud and check whether the result is understandable. That mix comes from DAW, DAM, POS/Odoo practice and personal projects with real users.',
      cards: [
        ['I build complete flows', 'Frontend, backend, SQL, Docker, cloud and real forms; I do not stop at one screen.'],
        ['I think about real use', 'Telecare prioritizes clarity for sensitive users; VotaVision prioritizes management, security and analytics.'],
        ['I measure what happens', 'KIROFIFA adds something uncommon in a junior profile: audience, retention, reach and data-based learning.'],
      ],
    },
    experienceTitle: 'Experience and education',
    skillsTitle: 'Technical stack',
    projectsTitle: 'Featured projects',
    projectsIntro:
      'Projects created to solve real problems: digital care, safety, online participation, analytics and full cloud deployment.',
    contact: {
      title: 'If you need a junior who has already dealt with real product work, let us talk.',
      text:
        'I can contribute in teams that need someone who learns fast, documents, solves incidents and can move across frontend, backend, databases and deployment.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      configured: 'Form connected through Formspree.',
      missing:
        'Formspree is not configured: the form will open your email client with the message ready.',
      subject: 'Contact from portfolio - Manuel Spínola',
      success: 'Message sent. Thank you for reaching out.',
      error: 'The message could not be sent. Check the configuration or try again later.',
    },
    footer: 'Portfolio built as a technical dossier: projects, evidence, demos and direct contact.',
  },
};

export const timeline = [
  {
    type: 'work',
    date: { es: 'Oct 2022 - Dic 2022', en: 'Oct 2022 - Dec 2022' },
    title: { es: 'Desarrollador web y software', en: 'Web and software developer' },
    place: 'Tactilware / Numier TPV',
    body: {
      es: 'Primer contacto serio con software de negocio: pantallas de gestión TPV, mantenimiento de funcionalidades, corrección de bugs y consultas sobre PostgreSQL/MySQL en un entorno donde cada incidencia afecta al uso diario.',
      en: 'First serious contact with business software: POS management screens, feature maintenance, bug fixing and PostgreSQL/MySQL queries in an environment where each issue affects daily use.',
    },
  },
  {
    type: 'work',
    date: { es: 'Mar 2025 - Jun 2025', en: 'Mar 2025 - Jun 2025' },
    title: { es: 'Técnico de sistemas y desarrollador junior', en: 'Systems technician and junior developer' },
    place: 'JLBBERP',
    body: {
      es: 'Trabajo entre desarrollo y sistemas: Odoo ERP, servidores cloud, PostgreSQL, firewalls, DNS, redes y Linux. Aprendí a mirar una aplicación completa, no solo el código.',
      en: 'Work between development and systems: Odoo ERP, cloud servers, PostgreSQL, firewalls, DNS, networks and Linux. I learned to look at a full application, not only the code.',
    },
  },
  {
    type: 'work',
    date: { es: 'Sep 2025 - Nov 2025', en: 'Sep 2025 - Nov 2025' },
    title: { es: 'Teleoperador de telecomunicaciones', en: 'Telecommunications call center agent' },
    place: 'Foundever',
    body: {
      es: 'Atención al cliente en jornada parcial, resolución de incidencias y venta de productos y servicios de telecomunicaciones, con orientación a resultados y captación de clientes.',
      en: 'Part-time customer service role handling incident resolution and sales of telecommunications products and services, with a focus on results and customer acquisition.',
    },
  },
  {
    type: 'education',
    date: { es: '2023 - 2025', en: '2023 - 2025' },
    title: { es: 'Técnico Superior en Desarrollo de Aplicaciones Web', en: 'Higher Technician in Web Application Development' },
    place: 'IES Jacaranda',
    body: {
      es: 'Etapa donde construyo VotaVision y Teleasistencia: arquitectura web, API, frontend, persistencia, despliegue y presentacion de producto.',
      en: 'Stage where I built VotaVision and Telecare: web architecture, API, frontend, persistence, deployment and product presentation.',
    },
  },
  {
    type: 'education',
    date: { es: '2020 - 2022', en: '2020 - 2022' },
    title: { es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', en: 'Higher Technician in Multiplatform Application Development' },
    place: 'Salesianos San Pedro',
    body: {
      es: 'Base de programación y lógica de negocio que me permite entender proyectos desde estructura, datos y comportamiento, no solo desde la interfaz.',
      en: 'Programming and business-logic foundation that helps me understand projects through structure, data and behavior, not only through the interface.',
    },
  },
];

export const skills = [
  ['Interfaces', ['React', 'Angular', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']],
  ['Backend', ['Spring Boot', 'Java', 'Node.js', 'PHP', 'Laravel', 'Python', 'Dart']],
  ['Datos', ['PostgreSQL', 'MySQL', 'Oracle', 'SQL', 'Consultas', 'Modelado']],
  ['Cloud/Sistemas', ['Docker', 'Render', 'Vercel', 'Aiven', 'Linux', 'VPS', 'Windows Server']],
  ['ERP/Odoo', ['Odoo v11-v18', 'OpenUpgrade', 'PostgreSQL admin', 'Procesos empresariales']],
  ['Operación', ['Git', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Trello', 'Notion', 'IA generativa']],
];

export const projects = [
  {
    title: { es: 'Teleasistencia Jacaranda', en: 'Jacaranda Telecare' },
    status: { es: 'Seguridad y acompañamiento digital', en: 'Safety and digital companionship' },
    description: {
      es: 'Aplicación web desarrollada en equipo durante DAW para mejorar la atención a personas mayores. Nació con una buena causa: acercar la tecnología a situaciones donde la rapidez, el acompañamiento y la seguridad pueden marcar una diferencia real.',
      en: 'Team-built web application developed during DAW to improve care for elderly people. It was created for a meaningful cause: bringing technology closer to situations where speed, companionship and safety can make a real difference.',
    },
    challenge: {
      es: 'Resuelve problemas de seguimiento, comunicación y respuesta ante incidencias, ofreciendo una experiencia clara para usuarios vulnerables y para quienes deben atenderlos.',
      en: 'It solves monitoring, communication and incident-response problems, offering a clear experience for vulnerable users and for the people who support them.',
    },
    highlights: {
      es: [
        'Centraliza la atención para reducir desorganización y tiempos de respuesta.',
        'Prioriza una interfaz sencilla, util y accesible para un contexto sensible.',
        'Demuestra capacidad para trabajar en equipo y construir software con impacto social.',
      ],
      en: [
        'Centralizes care to reduce disorganization and response times.',
        'Prioritizes a simple, useful and accessible interface for a sensitive context.',
        'Shows teamwork and the ability to build software with social impact.',
      ],
    },
    stack: ['Impacto social', 'Teleasistencia', 'DAW', 'Trabajo en equipo'],
    technologies: ['Thymeleaf', 'Spring Boot', 'Java', 'Spring Security', 'JPA', 'MySQL', 'Docker', 'Render'],
    quickGuide: {
      es: {
        title: 'Guia rapida para probar',
        summary: 'Recorrido recomendado para evaluar la operativa diaria de teleasistencia sin entrar en zonas sensibles.',
        points: [
          'Entrar como USER y revisar llamadas propias.',
          'Abrir una ficha de usuario y consultar llamadas, medicacion, telefonos y cuidadores.',
          'Crear una llamada para validar el flujo principal de seguimiento.',
        ],
        linkLabel: 'Descargar guia completa',
        url: publicUrl('/guides/GUIA_RAPIDA_RECLUTADOR.md'),
        download: 'GUIA_RAPIDA_RECLUTADOR.md',
      },
      en: {
        title: 'Quick testing guide',
        summary: 'Recommended path to evaluate day-to-day telecare operation without entering sensitive admin areas.',
        points: [
          'Log in as USER and review own calls.',
          'Open a user record and check calls, medication, phones and carers.',
          'Create a call to validate the main follow-up flow.',
        ],
        linkLabel: 'Download full guide',
        url: publicUrl('/guides/GUIA_RAPIDA_RECLUTADOR.md'),
        download: 'GUIA_RAPIDA_RECLUTADOR.md',
      },
    },
    demoAccount: {
      es: {
        title: 'Acceso demo USER',
        fields: [
          ['Rol', 'USER'],
          ['Acceso', 'Solicitar por contacto'],
          ['Ruta', '/login'],
        ],
        note: 'No se publican credenciales concretas. El recorrido USER permite probar llamadas propias, usuarios, telefonos, medicacion y cuidadores.',
      },
      en: {
        title: 'USER demo access',
        fields: [
          ['Role', 'USER'],
          ['Access', 'Request through contact'],
          ['Route', '/login'],
        ],
        note: 'Concrete credentials are not published. The USER path lets reviewers test own calls, users, phones, medication and carers.',
      },
    },
    demoAccess: {
      es: {
        title: 'Acceso demo por roles',
        fields: [
          ['Roles avanzados', 'Solo admin'],
          ['Credenciales', 'Solicitar por contacto'],
        ],
        warning: 'Para revisar supervision global y mantenimiento, pide credenciales de admin.',
        requestLabel: 'Solicitar acceso de prueba',
        requests: [
          {
            label: 'Probar admin',
            message: 'Hola Manuel, quiero probar Teleasistencia Jacaranda con rol admin. ¿Me puedes enviar usuario y contraseña de prueba?\n\nGracias.',
          },
        ],
      },
      en: {
        title: 'Role-based demo access',
        fields: [
          ['Advanced roles', 'Admin only'],
          ['Credentials', 'Request through contact'],
        ],
        warning: 'To review global supervision and maintenance, request admin credentials.',
        requestLabel: 'Request test access',
        requests: [
          {
            label: 'Test admin',
            message: 'Hi Manuel, I want to test Jacaranda Telecare with the admin role. Could you send me a test username and password?\n\nThanks.',
          },
        ],
      },
    },
    demoUrl: 'https://teleasistenciajacaranda.onrender.com/',
    repoUrl: '',
    image: publicUrl('/projects/teleasistencia-jacaranda.png'),
    links: [
      { label: 'Demo', url: 'https://teleasistenciajacaranda.onrender.com/', icon: 'ExternalLink' },
      { label: 'Repo privado', url: '', icon: 'Github' },
    ],
  },
  {
    title: { es: 'VotaVision', en: 'VotaVision' },
    status: { es: 'Plataforma de encuestas monetizadas', en: 'Monetized survey platform' },
    description: {
      es: 'Proyecto final de ciclo DAW: una plataforma de encuestas online donde usuarios pueden ganar dinero respondiendo encuestas y creadores pueden publicarlas, gestionarlas y analizar resultados con facilidad.',
      en: 'Final DAW project: an online survey platform where users can earn money by answering surveys and creators can publish, manage and analyze results easily.',
    },
    challenge: {
      es: 'Convierte una idea de producto en una solución completa: backend, frontend responsive, base de datos, administración, moderación, seguridad y despliegue cloud de principio a fin.',
      en: 'It turns a product idea into a complete solution: backend, responsive frontend, database, administration, moderation, security and end-to-end cloud deployment.',
    },
    highlights: {
      es: [
        'Permite crear, publicar, responder y analizar encuestas desde una misma plataforma.',
        'Incluye panel de administración para moderar contenido y proteger la seguridad del sistema.',
        'Resuelve la conexion entre empresas que necesitan datos y usuarios que quieren obtener recompensa por participar.',
        'Backend en Spring Boot desplegado con Docker en Render, frontend Angular en Vercel y PostgreSQL en Aiven.',
      ],
      en: [
        'Allows surveys to be created, published, answered and analyzed from one platform.',
        'Includes an admin panel to moderate content and protect platform security.',
        'Connects organizations that need data with users who want to be rewarded for participating.',
        'Spring Boot backend deployed with Docker on Render, Angular frontend on Vercel and PostgreSQL on Aiven.',
      ],
    },
    stack: ['Full-stack', 'Encuestas', 'Admin panel', 'Cloud deploy'],
    technologies: ['Angular', 'Spring Boot', 'Java', 'Docker', 'Render', 'Vercel', 'PostgreSQL', 'Aiven', 'GitHub'],
    quickGuide: {
      es: {
        title: 'Guia rapida por roles',
        summary: 'Mapa visual para probar VotaVision como USER, CREATOR y ADMIN y entender que demuestra cada flujo.',
        points: [
          'USER: panel personal, encuestas activas, filtros, borrador, recompensa e historial.',
          'CREATOR: crear encuestas, gestionar las propias y revisar resultados.',
          'ADMIN: moderar reportes, gestionar usuarios y revisar encuestas globales.',
        ],
        linkLabel: 'Descargar guia completa',
        url: publicUrl('/guides/guia_rapida_roles_votavision.md'),
        download: 'guia_rapida_roles_votavision.md',
      },
      en: {
        title: 'Role quick guide',
        summary: 'Visual map to test VotaVision as USER, CREATOR and ADMIN and understand what each flow proves.',
        points: [
          'USER: personal dashboard, active surveys, filters, draft, reward and history.',
          'CREATOR: create surveys, manage own surveys and review results.',
          'ADMIN: moderate reports, manage users and review global surveys.',
        ],
        linkLabel: 'Download full guide',
        url: publicUrl('/guides/guia_rapida_roles_votavision.md'),
        download: 'guia_rapida_roles_votavision.md',
      },
    },
    demoAccount: {
      es: {
        title: 'Usuario demo visible',
        fields: [
          ['Rol', 'USER'],
          ['Email', 'demo.user@votavision.app'],
          ['Contrasena', 'Lolaso300!'],
          ['Ruta', '/login'],
        ],
        note: 'Cuenta publica pensada para probar el flujo USER: panel personal, encuestas activas, filtros, borrador, recompensa e historial.',
      },
      en: {
        title: 'Visible demo user',
        fields: [
          ['Role', 'USER'],
          ['Email', 'demo.user@votavision.app'],
          ['Password', 'Lolaso300!'],
          ['Route', '/login'],
        ],
        note: 'Public account intended to test the USER flow: personal dashboard, active surveys, filters, draft, reward and history.',
      },
    },
    demoAccess: {
      es: {
        title: 'Acceso demo por roles',
        fields: [
          ['Roles avanzados', 'Creador y admin'],
          ['Credenciales', 'Solicitar por contacto'],
        ],
        warning: 'Si quieres probar mas funcionalidades, pide usuario y contraseña para el rol que necesites.',
        requestLabel: 'Solicitar acceso de prueba',
        requests: [
          {
            label: 'Probar creador',
            message: 'Hola Manuel, quiero probar VotaVision con rol creador. ¿Me puedes enviar usuario y contraseña de prueba?\n\nGracias.',
          },
          {
            label: 'Probar admin',
            message: 'Hola Manuel, quiero probar VotaVision con rol admin. ¿Me puedes enviar usuario y contraseña de prueba?\n\nGracias.',
          },
          {
            label: 'Probar ambos roles',
            message: 'Hola Manuel, quiero probar VotaVision con los roles creador y admin para revisar mas funcionalidades. ¿Me puedes enviar usuario y contraseña de prueba?\n\nGracias.',
          },
        ],
      },
      en: {
        title: 'Role-based demo access',
        fields: [
          ['Advanced roles', 'Creator and admin'],
          ['Credentials', 'Request through contact'],
        ],
        warning: 'If you want to test more functionality, request a username and password for the role you need.',
        requestLabel: 'Request test access',
        requests: [
          {
            label: 'Test creator',
            message: 'Hi Manuel, I want to test VotaVision with the creator role. Could you send me a test username and password?\n\nThanks.',
          },
          {
            label: 'Test admin',
            message: 'Hi Manuel, I want to test VotaVision with the admin role. Could you send me a test username and password?\n\nThanks.',
          },
          {
            label: 'Test both roles',
            message: 'Hi Manuel, I want to test VotaVision with the creator and admin roles to review more functionality. Could you send me test usernames and passwords?\n\nThanks.',
          },
        ],
      },
    },
    demoUrl: 'https://vota-vision-git-deployconfirmed-manspitubs-projects.vercel.app/',
    repoUrl: '',
    image: publicUrl('/projects/votavision.png'),
    links: [
      { label: 'Demo', url: 'https://vota-vision-git-deployconfirmed-manspitubs-projects.vercel.app/', icon: 'ExternalLink' },
      { label: 'Backend', url: 'https://github.com/manspitub/VotaVisionBackEnd', icon: 'Github' },
      { label: 'Frontend', url: 'https://github.com/manspitub/VotaVisionFrontEnd', icon: 'Github' },
    ],
  },
  {
    title: { es: 'KIROFIFA', en: 'KIROFIFA' },
    status: { es: 'Canal digital con audiencia real', en: 'Digital channel with real audience' },
    description: {
      es: 'Canal de YouTube sobre EA Sports FC / FIFA Shorts creado y gestionado como un proyecto propio de crecimiento digital. Lo destaco porque demuestra constancia, lectura de datos, criterio de producto y capacidad para crear contenido que conecta con una audiencia internacional.',
      en: 'YouTube channel about EA Sports FC / FIFA Shorts created and managed as a personal digital growth project. I highlight it because it shows consistency, data reading, product judgement and the ability to create content that connects with an international audience.',
    },
    challenge: {
      es: 'El reto fue convertir una temática competitiva en un canal medible: publicar con ritmo, analizar rendimiento, entender audiencia y optimizar formatos para retención y alcance.',
      en: 'The challenge was turning a competitive niche into a measurable channel: publishing consistently, analyzing performance, understanding the audience and optimizing formats for retention and reach.',
    },
    highlights: {
      es: [
        '5,7 mil suscriptores y 8,2 millones de visualizaciones acumuladas.',
        '1,2 millones de usuarios únicos y 31,8 mil horas de visualización.',
        '85,1 % de porcentaje medio visto, senal de contenido breve y bien orientado.',
        'Audiencia internacional con presencia destacada en Italia, Turquia, Alemania, Francia y Argelia.',
      ],
      en: [
        '5.7K subscribers and 8.2M total views.',
        '1.2M unique viewers and 31.8K watch hours.',
        '85.1% average percentage viewed, a sign of focused short-form content.',
        'International audience with notable reach in Italy, Turkey, Germany, France and Algeria.',
      ],
    },
    stack: ['Analitica', 'Producto digital', 'Audiencia', 'Crecimiento'],
    technologies: ['YouTube Studio', 'Analytics', 'SEO', 'Short-form content', 'Audience strategy'],
    demoUrl: '',
    repoUrl: '',
    image: publicUrl('/projects/kirofifa-media-kit.png'),
    links: [
      { label: 'Kit de medios', url: publicUrl('/projects/kirofifa-media-kit.pdf'), icon: 'ExternalLink' },
    ],
  },
];

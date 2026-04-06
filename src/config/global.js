export default {
  global: {
    Name: 'Competencias blandas aplicadas al trabajo en equipo',
    Description:
      'Este componente formativo aborda el desarrollo de competencias blandas aplicadas al trabajo colaborativo en contextos laborales. Se analizan los fundamentos del trabajo en equipo, los roles dentro de los grupos de trabajo, las habilidades sociales para la interacción laboral y las estrategias para la resolución de problemas y toma de decisiones en equipo. Asimismo, se reflexiona sobre la importancia del trabajo colaborativo para fortalecer la productividad organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de trabajo en equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de trabajo en equipo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Grupo de trabajo y equipo de trabajo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trabajo en equipo en las organizaciones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Beneficios del trabajo colaborativo',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Roles y dinámicas en el equipo de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de roles en equipos de trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Liderazgo y participación en el equipo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Responsabilidad individual y compartida',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Competencias blandas para el trabajo colaborativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Comunicación efectiva en equipos de trabajo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Empatía y respeto en la interacción laboral',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Gestión emocional en contextos colaborativos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Resolución de problemas y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estrategias para la resolución de conflictos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Toma de decisiones en grupo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Construcción de acuerdos y compromisos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trabajo colaborativo y productividad organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Adaptabilidad y cooperación en el equipo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Creatividad e iniciativa en el trabajo colaborativo',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Competencias blandas en situaciones laborales ',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Adaptabilidad</strong>',
      significado:
        'capacidad de una persona u organización para ajustarse con eficacia a nuevas situaciones, cambios o entornos de trabajo.',
    },
    {
      termino: '<strong>Competencias blandas</strong>',
      significado:
        'habilidades interpersonales y socioemocionales que facilitan la interacción efectiva entre personas en contextos laborales y sociales.',
    },
    {
      termino: '<strong>Comunicación efectiva</strong>',
      significado:
        'proceso de transmisión y recepción de mensajes de forma clara, precisa y oportuna entre los integrantes de un grupo.',
    },
    {
      termino: '<strong>Empatía</strong>',
      significado:
        'disposición afectiva que permite comprender los sentimientos y perspectivas ajenas, favoreciendo relaciones de respeto mutuo.',
    },
    {
      termino: '<strong>Liderazgo</strong>',
      significado:
        'capacidad de una persona para influir, guiar y motivar a un grupo hacia el logro de objetivos comunes.',
    },
    {
      termino: '<strong>Productividad organizacional</strong>',
      significado:
        'relación entre los resultados obtenidos por una organización y los recursos empleados para alcanzarlos.',
    },
    {
      termino: '<strong>Resolución de conflictos</strong>',
      significado:
        'proceso orientado a gestionar y solucionar desacuerdos entre personas, mediante el diálogo y la búsqueda de acuerdos constructivos.',
    },
    {
      termino: '<strong>Responsabilidad compartida</strong>',
      significado:
        'compromiso colectivo de los integrantes de un equipo para responder conjuntamente por las metas y resultados asignados.',
    },
    {
      termino: '<strong>Trabajo en equipo</strong>',
      significado:
        'forma de organización laboral en la que un grupo de personas colabora de manera coordinada para alcanzar objetivos comunes.',
    },
    {
      termino: '<strong>Toma de decisiones</strong>',
      significado:
        'proceso cognitivo mediante el cual se evalúan alternativas y se selecciona la opción más conveniente para resolver un problema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alles, M. (2012). Desarrollo del talento humano basado en competencias. Granica.',
      link: '',
    },
    {
      referencia:
        'Bisquerra, R. (2009). Educación emocional y bienestar. Praxis.',
      link: '',
    },
    {
      referencia:
        'Boyatzis, R., & McKee, A. (2005). Resonant leadership: Renewing yourself and connecting with others through mindfulness, hope, and compassion. Harvard Business School Press.',
      link: '',
    },
    {
      referencia:
        'Carnegie, D. (2010). Cómo ganar amigos e influir sobre las personas. Edhasa.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2017). Gestión del talento humano. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Covey, S. (2005). Los siete hábitos de la gente altamente efectiva. Paidós.',
      link: '',
    },
    {
      referencia: 'Echeverría, R. (2011). Ontología del lenguaje. Granica.',
      link: '',
    },
    {
      referencia: 'Goleman, D. (2013). Inteligencia emocional. Kairós.',
      link: '',
    },
    {
      referencia:
        'Robbins, S., & Judge, T. (2017). Comportamiento organizacional. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Rosenberg, M. (2003). Comunicación no violenta: un lenguaje de vida. Gran Aldea Editores.',
      link: '',
    },
    {
      referencia:
        'Senge, P. (2006). La quinta disciplina: el arte y la práctica de la organización que aprende. Granica.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2019). <em>Diseño curricular del programa Fortalecimiento de las competencias blandas para la vida y la productividad</em>. SENA.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2020). <em>Guía metodológica para el desarrollo de competencias transversales</em>. SENA.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED) ',
          centro: 'Dirección General  ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

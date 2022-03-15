export default {
  global: {
    componenteFormativo: 'Pruebas de jarras y equipos de dosificación.',
    descripcionCurso:
      'En este componente formativo, se abordan temas importantes que le permitirá adquirir habilidades para realizar pruebas a una muestra de agua y posteriormente dosificar la cantidad correcta de sustancias químicas para su potabilización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pruebas de jarras.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de resultados agua cruda.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Lineamientos técnicos de agua potable y saneamiento.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cloración. ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Unidades de medida.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normatividad de calidad de agua. ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Castañeda, Mónica; Bernal, Lina. Trabajo de Grado. Establecer la demanda de cloro en el acueducto tribunas Córcega de la ciudad de Pereira. Pereira, 2008.',
      link: 'https://core.ac.uk/download/pdf/71396109.pdf',
    },
    {
      referencia:
        'DESIN, S.A. ¿Qué es, para qué sirve y cuándo se debe realizar una prueba de jarras?, 15 de junio de 2021.',
      link:
        'https://www.disin.com/que-es-para-que-sirve-y-cuando-se-debe-realizar-una-prueba-de-jarras/',
    },
    {
      referencia: 'ISA, Ingeniería y Servicios Ambientales. Prueba de Jarras.',
      link: 'https://isa.ec/prueba-de-jarras/',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. Nov,2000. REGLAMENTO TÉCNICO DEL SECTOR DE AGUA POTABLE Y SANEAMIENTO BÁSICO, RAS.',
      link: 'https://procurement-notices.undp.org/view_file.cfm?doc_id=16483',
    },
    {
      referencia:
        'SENA, Programa de capacitación y certificación del sector de agua potable y saneamiento básico.',
      link:
        'https://repositorio.sena.edu.co/sitios/calidad_del_agua/index.html#',
    },
  ],
  glosario: [
    {
      termino: 'Calidad del agua',
      significado:
        'Es el resultado entre la comparación de las características presentes en el agua contra los parámetros que están contenidos en las normas que regulan el agua potable.',
    },
    {
      termino: 'Cloración del agua',
      significado:
        'Es el proceso por el cual se desinfecta el agua utilizando cloro o compuestos clorados.',
    },
    {
      termino: 'Desinfección',
      significado:
        'En este proceso se eliminan todos aquellos organismos patógenos que se encuentren presentes en el agua. ',
    },
    {
      termino: 'Muestreo',
      significado:
        'Es el proceso por el cual se toma una muestra para ser analizada en un laboratorio y así obtener información sobre la calidad del agua en un área específica.',
    },
    {
      termino: 'Prueba de jarras',
      significado:
        'Es un ensayo de laboratorio que permite simular las etapas de coagulación – floculación para realizar dicha selección de los químicos adecuados y obtener una determinada calidad de agua final.',
    },
  ],
  complementario: [
    {
      texto: 'Resolución 0330, 8 de junio del 2017.',
      tipo: 'Página web',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/0330-2017.pdf ',
    },
    {
      texto:
        'ALAC Cajamarca. Proceso de cloración de sistemas de agua potable. 18 de dic. 2020.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=AqJ9HY-gqsE',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Instructor',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital.',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}

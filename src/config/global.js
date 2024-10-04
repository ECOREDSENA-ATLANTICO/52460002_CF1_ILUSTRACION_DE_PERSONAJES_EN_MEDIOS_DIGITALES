export default {
  global: {
    componenteFormativo: 'Bases conceptuales de la ilustración',
    descripcionCurso:
      'La ilustración de personajes para medios digitales comienza con un brief que define el proyecto, ya sea didáctico, publicitario o para entretenimiento. Basado en este brief, se eligen esquemas de color, texturas y perspectivas para dar forma a la personalidad y concepto del personaje. El proceso incluye bocetos iniciales, análisis psicológico y desarrollo del diseño visual.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Brief y tipos de proyectos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Esquemas de color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Anatomía humana y animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de ilustración digital',
        desarrolloContenidos: true,
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
        download: 'downloads/prueba.pdf',
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
      tema: '<em>Brief</em> y tipos de proyectos',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.google.com/search?q=video+de+bref+y+tipos+de+proyectos&rlz=1C1GCEA_enCO924CO924&oq=video+de+bref+y+tipos+de+proyectos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigAdIBCjEyMjE0ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:d6e12477,vid:P7f51UukyIw,st:0 ',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje significativo',
      significado:
        'orientado a una forma de aprender desde la percepción y el sentido crítico, permitiendo incorporar y apropiar el conocimiento por medio de elementos que despierten el interés en el aprendiz.',
    },
    {
      termino: '<em>Brief</em>',
      significado:
        'es el documento guía para iniciar el diseño y desarrollo de un proyecto, donde se establecen los parámetros, las características y los alcances. Arista: es el constructo a partir de líneas de una cara, también conocida como lado',
    },
    {
      termino: 'Character sheet animation',
      significado:
        'es el estudio del personaje, se denomina así porque se utiliza para hacer el diseño del personaje en diferentes posiciones y expresiones para tener mejor vista del personaje elaborado',
    },
    {
      termino: 'Creatividad',
      significado:
        'proceso de generar ideas originales y soluciones innovadoras en el diseño de personajes y proyectos visuales',
    },
    {
      termino: 'Concept art',
      significado:
        'ilustraciones preliminares que visualizan conceptos y diseños para proyectos, sirviendo como referencia para el desarrollo final',
    },
    {
      termino: 'Línea oblicua',
      significado:
        'es llamada a la línea recta que no excede el ángulo de 90° al cruzarse con otra recta.  ',
    },
    {
      termino: 'Mercadeo',
      significado:
        'es el conjunto de estrategias planeadas y ejecutadas con el fin de satisfacer las necesidades de los usuarios por medio de la compra de productos, servicios e ideas',
    },
    {
      termino: 'Modelado poligonal',
      significado:
        'es la técnica de modelación que se desarrolló a partir de puntos y líneas (vértices y aristas) en las tres coordenadas X, Y y Z.',
    },
    {
      termino: 'Packaging (embalaje)',
      significado:
        'sistema de empaque, caja o envoltura que contiene y protege un producto.',
    },
    {
      termino: 'Plano',
      significado:
        'imagen que se define desde la perspectiva de los personajes, objetos y elementos, desde un punto de vista determinado. Los principales son: general, americano, medio, primer plano, primerísimo primer plano y plano detalle.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'público al que se dirigido una estrategia, producto o servicio. Posible usuario o consumidor del producto diseñado. Punto de fuga: en la técnica de representación 2D, es el punto en el que se encuentran líneas que en la realidad serían paralelas y ayudan a crear la perspectiva en el dibujo',
    },
    {
      termino: 'Vértice',
      significado: 'punto en el que se encuentran las aristas de un polígono',
    },
  ],
  referencias: [
    {
      referencia:
        'AccesoPerú.com. (Sin fecha). Los esquemas de colores. El círculo cromático. Recuperado el 15 junio de 2017',
      link:
        'http://s3.accesoperu.com/wp6/includes/htmlarea/mezclador/ayuda/ec.htm',
    },
    {
      referencia:
        'Arte y empresa. (Sin fecha). Diseño de personajes. Recuperado el 18 de junio de 2017.',
      link: 'http://www.arteyempresa.ugto.mx/docs/esp_personjaes.pdf',
    },
    {
      referencia:
        'Blackburn Berezina, V. (2016). Motion Capture History, Technologies and Applications. Recuperado el 26 de junio de 2017.',
      link:
        'https://accad.osu.edu/~vberezin/classes/mocap/MotionCaptureOverview2016.pdf',
    },
    {
      referencia:
        'Cahuex, A. (2014). Ilustración digital. Recuperado el 27 de junio de 2017, en http://biblio3.url.edu.gt/Tesario/2014/03/05/Cahuex-Ana.pdf Real Academia Española.  (Sin fecha). Anatomía. Recuperado el 1 de julio de 2017.',
      link: 'http://dle.rae.es/?id=2X6ixmm',
    },
    {
      referencia:
        'Canon del cuerpo humano. Recuperado el 27 de junio de 2017, en http://www.linearteytrazos.cl/pdf/16.pdf Nogueira, P. (2011). Motion Capture Fundamentals. Recuperado el 26 de junio de 2017. .',
      link: 'https://paginas.fe.up.pt/~prodei/dsie12/papers/paper_7.pdf Sola',
    },
    {
      referencia:
        'Chacón Gordillo, P. D. (2011). ¿Cómo interpretan los niños y niñas de educación infantil las series y películas de animación y los videojuegos? Un análisis a través del dibujo (Tesis doctoral). Editorial de la Universidad de Granada. Recuperado el 13 junio de 2017',
      link: 'https://hera.ugr.es/tesisugr/19835929.pdf  ',
    },
    {
      referencia:
        'Garcerá Moreno, M. (Sin fecha). Diseño de personaje para animación. Recuperado el 18 de junio de 2017.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/49941/TFG.%20Dise%C3%B1o%20de%20 personaje%20para%20animaci%C3%B3n.%20Magode%2C%20la% 20bruja.%20Mar%C3%ADa%20Garcer%C3%A1%20Moreno.pdf?sequence=1',
    },
    {
      referencia:
        'Garrido Domínguez, A. (1996). El texto narrativo. Recuperado el 22 de junio de 2017.',
      link:
        'http://cmap.javeriana.edu.co/servlet/SBReadResourceServlet?rid=1280929324856_673167432_1792',
    },
    {
      referencia:
        'Garces Montaño, L. D. (Sin fecha). Diseño de personajes. Recuperado el 16 junio de 2017.',
      link: 'https://issuu.com/luzdeicygarcesmontano/- docs/dise__o_de_',
    },
    {
      referencia:
        'González, R. (2011). Apuntes generales de anatomía morfológica aplicada cánones y proporciones. Recuperado el 26 de junio de 2017.',
      link:
        'http://eprints.ucm.es/13413/1/C%C3%81NONES_ANTROPOM%C3%89TRICOS_APLICADOS_AL_DIBUJO_DE_FIGURA.pdf personajes_33865798c67bd6 Linearteytrazos.com.',
    },
    {
      referencia:
        'López Fumero, D. (2015). Creación de personajes y escenarios para entornos de video juegos en 3D. Recuperado el 18 de junio de 2017.',
      link: 'https://riull.ull.es/xmlui/handle/915/1346 ',
    },
    {
      referencia:
        'Migliónico Molina, R. (Sin fecha). Qué es el brief y cómo realizarlo. Recuperado el 13 junio de 2017.',
      link:
        'https://rossami.com/para-que-lean-ycon-gusto/que-es-el-brief-y-como-realizarlo/  ',
    },
    {
      referencia:
        'Navarro Lizandra, J. L. (Sin fecha). Fundamentos del diseño. Temas para la introducción a los fundamentos del diseño. Recuperado el 15 junio de 2017',
      link: 'https://goo.gl/ipEdVp',
    },
    {
      referencia:
        'Papeldeperiodico.com. (2015). El dibujo en el arte: la perspectiva. Recuperado el 15 junio de 2017.',
      link:
        'http://papeldeperiodico.com/2013/06/ el-dibujo-en-el-arte-la-perspectiva/',
    },
    {
      referencia:
        'Reina Flores, M del C. (Sin fecha). Series animadas y población infantil. Recuperado el 16 junio de 2017.',
      link:
        'https://www.revistacomunicar.com /verpdf.php?numero=25&articulo=25-2005-',
    },
    {
      referencia:
        'Sotelino Couñago, A. (2015). Psicoviñetas: la psicología a través del cómic. Recuperado el 20 de junio de 2017.',
      link:
        'http://www.psicome morias.com/psicovinetas-la-psicologia-a-traves-del-comic/',
    },
    {
      referencia:
        'Vecellio Reane, F.L. (Sin fecha). ¿Qué es un brief y cómo realizarlo? Recuperado el 12 junio de 2017, en https://rossami.com/para-que-lean-y -con-gusto/que-es-el-brief-y-como-realizarlo/ Muñis, R. (Sin fecha). Atributos de producto. Recuperado el 13 junio de 2017.',
      link: 'http://www.marketing-xxi.com/atributos-de-producto-35.htm .',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

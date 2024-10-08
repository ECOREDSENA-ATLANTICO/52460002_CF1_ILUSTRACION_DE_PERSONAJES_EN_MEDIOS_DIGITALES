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
      link: 'https://youtu.be/P7f51UukyIw',
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
      termino: '<em>Character sheet animation</em>',
      significado:
        'es el estudio del personaje, se denomina así porque se utiliza para hacer el diseño del personaje en diferentes posiciones y expresiones para tener mejor vista del personaje elaborado',
    },
    {
      termino: 'Creatividad',
      significado:
        'proceso de generar ideas originales y soluciones innovadoras en el diseño de personajes y proyectos visuales',
    },
    {
      termino: '<em>Concept art</em>',
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
      termino: '<em>Packaging </em>(embalaje)',
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
        'AccesoPerú.com. (s.f.). Los esquemas de colores. El círculo cromático.',
      link:
        'http://s3.accesoperu.com/wp6/includes/htmlarea/mezclador/ayuda/ec.htm',
    },
    {
      referencia: 'Arte y empresa. (Sin fecha). Diseño de personajes.',
      link: 'http://www.arteyempresa.ugto.mx/docs/esp_personjaes.pdf',
    },
    {
      referencia:
        'Blackburn Berezina, V. (2016). Motion Capture History, Technologies and Applications.  BerezinaBlackburnCV_2017.pdf (ohio-state.edu)',
      link:
        'https://www.asc.ohio-state.edu/berezina-blackburn.1/BerezinaBlackburnCV_2017.pdf',
    },
    {
      referencia:
        'Cahuex, A. (2014). Ilustración digital. http://biblio3.url.edu.gt/Tesario/2014/03/05/Cahuex-Ana.pdf Real Academia Española.  (s.f.). Anatomía.',
      link: 'http://dle.rae.es/?id=2X6ixmm',
    },
    {
      referencia: 'Canon del cuerpo humano. (s. f.).',
      link:
        'https://guiapolyclay.jimdofree.com/anatom%C3%ADa-art%C3%ADstica/canon-del-cuerpo-humano/',
    },
    {
      referencia:
        'Chacón Gordillo, P. D. (2011). ¿Cómo interpretan los niños y niñas de educación infantil las series y películas de animación y los videojuegos? Un análisis a través del dibujo (Tesis doctoral). Editorial de la Universidad de Granada.',
      link: 'https://digibug.ugr.es/handle/10481/18411',
    },
    {
      referencia:
        'Expresiones de un personaje (2024). Freepik.es. Personaje mostrando emociones | Vector Gratis (freepik.es)',
      link:
        'https://www.freepik.es/vector-gratis/personaje-mostrando-emociones_4222627.htm#',
    },
    {
      referencia:
        'Garcerá Moreno, M. (s. f.). Diseño de personaje para animación. ',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/49941/TFG.%20Dise%C3%B1o%20de%20%20personaje%20para%20animaci%C3%B3n.%20Magode%2C%20la%20bruja.%20Mar%C3%ADa%20Garcer%C3%A1%20Moreno.pdf?sequence=1',
    },
    {
      referencia:
        'Garrido Domínguez, A. (1996). El texto narrativo. Diseño de personajes by Luz Deicy Garces Montano - Issuu',
      link:
        'http://cmap.javeriana.edu.co/servlet/SBReadResourceServlet?rid=1280929324856_673167432_1792',
    },
    {
      referencia:
        'González, R. (2011). Apuntes generales de anatomía morfológica aplicada cánones y proporciones.',
      link:
        'http://eprints.ucm.es/13413/1/C%C3%81NONES_ANTROPOM%C3%89TRICOS_APLICADOS_AL_DIBUJO_DE_FIGURA.pdf',
    },
    {
      referencia:
        'Hoja del personaje. Reddit Media. (s.f.) Custom Curse-of-Strahd Character Sheet 5e (download in comment) : r/CurseofStrahd (reddit.com)',
      link:
        'https://www.reddit.com/r/CurseofStrahd/comments/11pptos/custom_curseofstrahd_character_sheet_5e_download/',
    },
    {
      referencia:
        'López Fumero, D. (2015). Creación de personajes y escenarios para entornos de video juegos en 3D.',
      link: 'https://riull.ull.es/xmlui/handle/915/1346',
    },
    {
      referencia:
        'Migliónico Molina, R. (s.f.). Qué es el brief y cómo realizarlo.',
      link:
        'https://rossami.com/para-que-lean-ycon-gusto/que-es-el-brief-y-como-realizarlo/',
    },
    {
      referencia: 'Muñis, R. (s.f.). Atributos de producto.',
      link: 'http://www.marketing-xxi.com/atributos-de-producto-35.htm',
    },
    {
      referencia:
        'Navarro Lizandra, J. L. (s.f.). Fundamentos del diseño. Temas para la introducción a los fundamentos del diseño.',
      link: 'https://goo.gl/ipEdVp',
    },
    {
      referencia: 'Nogueira, P. (2011). Motion Capture Fundamentals',
      link: 'https://paginas.fe.up.pt/~prodei/dsie12/papers/paper_7.pdf',
    },
    {
      referencia:
        'Personaje textura. Freepik.es (2024). Una figura caprichosa se levanta sin esfuerzo rodeada de luz etérea y sombras tranquilas. | Imagen Premium generada con IA (freepik.es)',
    },
    {
      referencia: 'Real Academia Española. (s. f.). Anatomía.',
      link: 'http://dle.rae.es/?id=2X6ixmm',
    },
    {
      referencia:
        'Reina Flores, M. del C. (s. f.). Series animadas y población infantil.',
      link:
        'https://www.revistacomunicar.com/verpdf.php?numero=25&articulo=25-2005-194',
    },
    {
      referencia:
        'Sotelino Couñago, A. (2015). Psicoviñetas: la psicología a través del cómic. GuiandenaprendizajenRAP2 385f12aca35d269 PDF | PDF | Diseño | Caso de estudio (scribd.com)',
      link:
        'https://es.scribd.com/document/471148693/GuiandenaprendizajenRAP2-385f12aca35d269-pdf',
    },
    {
      referencia:
        'Técnicas artísticas (s.f.). Estudio descriptivo. Recuperado el 8 de octubre de 2024.',
      link:
        'https://artistica.mineduc.cl/wp-content/uploads/sites/58/2016/04/TECNICAS-ARTISTICAS.pdf',
    },
    {
      referencia:
        'Trazos de lápiz de un personaje. (2024). Freepik.es. Fotografías renderizadas en 3D de dibujos de personajes de caricaturas y animales | Imagen Premium generada con IA (freepik.es)',
      link:
        'https://www.freepik.es/imagen-ia-premium/fotografias-renderizadas-3d-dibujos-personajes-caricaturas-animales_293663269.htm#fromView=search&page=1&position=8&uuid=e3b3826e-4893-4ab4-bb7d-e620453878d0',
    },
    {
      referencia:
        'Vecellio Reane, F.L. (s.f.). ¿Qué es un brief y cómo realizarlo?',
      link:
        ' https://rossami.com/para-que-lean-y -con-gusto/que-es-el-brief-y-como-realizarlo/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Elena Montoya Rendón',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Marcela María Cardona Molina',
          cargo: 'Instructora',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Gilberto Herrera delgans',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollor <em> full stack</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Productor audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },

        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
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

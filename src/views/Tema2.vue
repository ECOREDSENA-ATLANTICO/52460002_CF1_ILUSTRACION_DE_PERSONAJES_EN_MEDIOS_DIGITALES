<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Esquemas de color
    .fondo.f-2
      .row.justify-content-center.align-items-center.mb-5.fnd-2(data-aos="zoom-in")
        .col-lg-3.col-sm-6.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img-1.png").img400
        .col-lg-9
          p La selección del color en el diseño de personajes es fundamental para el desarrollo del concepto: los seres humanos tenemos la capacidad de responder a estímulos visuales y los colores forman parte de las herramientas más potentes usadas en la publicidad, por medio de la teoría de la psicología del color, donde se establece una serie de conceptos y significados asociados a cada uno de los colores; por ejemplo:
          .row
            .col-xl-3.col-md-6.mb-3
              .tarjeta.p-4.fnd-3.tarjeta--slyder
                h4.mb-0 01
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema2/img-2.svg", alt="alt").img100
                p.text-center.mb-0 Ayuda a comunicar emociones.
            .col-xl-3.col-md-6.mb-3
              .tarjeta.p-4.fnd-3.tarjeta--slyder
                h4.mb-0 02
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema2/img-3.svg", alt="alt").img100
                p.text-center.mb-0 Genera atmósfera o contexto.
            .col-xl-3.col-md-6.mb-3
              .tarjeta.p-4.fnd-3.tarjeta--slyder
                h4.mb-0 03
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema2/img-4.svg", alt="alt").img100
                p.text-center.mb-0 Define un tiempo específico.
            .col-xl-3.col-md-6.mb-3
              .tarjeta.p-4.fnd-3.tarjeta--slyder
                h4.mb-0 04
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/temas/tema2/img-5.svg", alt="alt").img100
                p.text-center.mb-0.mb-xl-4 Resalta atributos.
                


      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-lg-8.mb-5.order-2.order-lg-1 
          LineaTiempoD.color-acento-botones
            p(numero="1" titulo="Rojo") Es asociado con sentimientos apasionados, energía, amor y a su vez peligro y alerta. Es el color más vibrante por ser el que tiene mayor longitud de onda respecto a los otros colores.

            p(numero="2" titulo="Naranja") Es un color asociado a la creatividad y a la juventud, la diversión y la innovación. En señalética indica precaución.

            p(numero="3" titulo="Amarillo") Es usado específicamente con carácter de advertencia y a su vez catalogado como un color enérgico, vivaz y luminoso. 

            p(numero="4" titulo="Verde") Especializado para caracterizar condiciones medioambientales y éticas. Otorga un ambiente fresco y natural.

            p(numero="5" titulo="Azul") Es considerado un color de características como la tranquilidad y la transparencia. Constantemente es empleado en el ámbito institucional para generar ambientes asépticos, limpios.

            p(numero="6" titulo="Violeta") Tiene diferentes interpretaciones. Por un lado, lo mágico e irreal. También al lujo y, a su vez, está asociado a los rituales eclesiásticos y a la muerte.	 

            p(numero="7" titulo="Negro") Aunque no es un color propiamente dicho, sino un valor equivalente a la ausencia de luz, tiene una connotación de elegancia y estatus, aunque dependiendo del contraste y el contexto se asocia con maldad y oscurantismo.	

            p(numero="8" titulo="Blanco") El valor blanco está asociado a la presencia de luz, a la limpieza e inocencia. Utilizado para reforzar conceptos de naturalidad, asepsia y pureza.

        .col-md-8.col-lg-4.order-1.order-lg-2.mb-5
          figure
            img.l(src="@/assets/curso/temas/tema2/img-6.png", alt="alt")      

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Textura
            .circle

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-8.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El manejo de la textura en el diseño es de suma importancia porque es un detalle que amplifica y especifica el diseño, al ser un elemento que genera una sensación visual o táctil, lo que permite fortalecer la personalidad de un personaje, su concepto y afianza los sentimientos o pensamientos asociados a él.         
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-9
          p Por medio del uso de texturas, los diseñadores o ilustradores logran desde una representación bidimensional (2D) una imitación o acercamiento a las sensaciones visuales y táctiles de objetos y formas de la cotidianidad; por medio del uso adecuado de la técnica de ilustración o modelado, el uso de la luz, la oscuridad y las gradaciones de color.
          .cajon.color-secundario.p-4.mb-4.fnd-4
            p.mb-0 En la siguiente figura se puede observar la textura del cuerpo del personaje, suave y afelpada. Además, los colores evocan la fantasía y la magia; por consiguiente, el personaje puede asociarse a sentimientos de ternura y dulzura.

        .col-lg-3.col-md-8
          figure
            img.l(src="@/assets/curso/temas/tema2/img-9.png", alt="alt")   

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span <em>Textura</em>
          figure
            img(src='@/assets/curso/temas/tema2/img-10.png', alt='Textura')
            figcaption Fuente: www.recursosdeingenieria.com

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Perspectiva
            .circle

      p.mb-5 Técnica empleada para proyectar la profundidad, la lejanía, el volumen y la disposición de los objetos en un espacio, bajo uno o varios puntos de fuga, a partir de esto. A continuación, consulte los diferentes tipos de perspectivas:

      .tarjeta--container.row.mb-5(data-aos="fade-left")
        .col-md.tarjeta.color-secundario.p-lg-5.p-md-3.fnd-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img-11.svg')

          h3.text-center Perspectiva paralela
          p Técnica que usa un solo punto de fuga. Las líneas, que son paralelas, convergen y se vuelven oblicuas. Así genera la sensación de profundidad.
        .col-md.tarjeta.color-primario.text-white.p-lg-5.p-md-3
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img-12.svg')

          h3.text-center Perspectiva oblicua
          p Usa dos puntos de fuga ubicados en el plano de horizonte, equivalente al punto de vista del usuario. Las líneas verticales se mantienen paralelas.
        .col-md.tarjeta.color-acento-contenido.p-lg-5.p-md-3.fnd-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img-13.svg')

          h3.text-center Perspectiva aérea
          p A partir de tres puntos de fuga se establece el dibujo, convirtiendo las líneas verticales y horizontales en oblicuas al dirigirse a los puntos, dos situados en la línea horizonte y otro en diferente posición.	 

      .row.align-items-center.mb-5(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 <em>Psique</em> del personaje
            .circle
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
        .col-lg-3.col-sm-6.mb-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img-14.png").img400    
        .col-lg-9
          p Algunos de los aspectos que se deben establecer para la construcción de la estructura psicológica de un personaje son: carácter, relación con otros personajes y las acciones. Esto permite asociar coherentemente un aspecto físico con un esquema psicológico y comunicativo. 
          p Al definir el perfil psicológico de un personaje se conectarán los requerimientos expuestos por el cliente en el <em>brief</em> con los elementos visuales, lo que conllevará a que el <em>target</em> o público objetivo pueda sentirse identificado con la propuesta. 
          p Las decisiones estéticas deben surgir desde la creación de la <em>psique</em> del personaje: elementos visuales como la proporción, las formas, el tamaño, la expresión del rostro, la postura del cuerpo, los accesorios a usar y el vestuario; y cómo interactúa con el entorno y los demás personajes. 
          .cajon.color-secundario.p-4.mb-4.fnd-4
            p.mb-0 La creación de la<em> psique</em> del personaje puede desarrollarse desde distintas premisas, a continuación, en la siguiente infografía puede consultarlas:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/img-15.svg', alt='Etapas del modelo de desarrollo de campañas de Yale publicitaria.')

            .tarjeta.fnd-6.p-3.p1(x="5.5%" y="47%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-2
                  figure
                    img(src="@/assets/curso/temas/tema2/img-16.svg").img118
                .col-lg-8
                  .h3.mb-2 Rasgos
                  p.mb-0 Se construye el perfil psicológico a partir de características específicas. Por ejemplo, el personaje es manipulador y, por lo tanto, actúa como tal.
            .tarjeta.fnd-6.p-3.p1(x="21.1%" y="85.5%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-2
                  figure
                    img(src="@/assets/curso/temas/tema2/img-17.svg").img118
                .col-lg-8
                  .h3.mb-2 Contradicciones narrativas
                  p.mb-0 Se enfoca en las características del actuar del personaje desde algo que quiere y no puede o no debe realizar, basar su perfil en el conflicto interno que vive.
            .tarjeta.fnd-6.p-3.p1(x="77.8%" y="86.4%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-2
                  figure
                    img(src="@/assets/curso/temas/tema2/img-18.svg").img118
                .col-lg-8
                  .h3.mb-2 Conflicto
                  p.mb-0 Iniciar la construcción de la psique desde la problematización del nudo de la historia.
            .tarjeta.fnd-6.p-3.p1(x="94.7%" y="47%" numero="+")
              .row.justify-content-center.align-items-center
                .col-4.mb-2
                  figure
                    img(src="@/assets/curso/temas/tema2/img-19.svg").img118
                .col-lg-8
                  .h3.mb-2 Relación con los personajes
                  p.mb-0 Frente a los demás cómo se comporta; definir si es víctima, salvador, influenciador, apático, etc.                              

      .row.align-items-center.mb-5(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 <em>Character sheet</em>
            .circle

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-20.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Expresión para referirse a una hoja de personaje, en la que se registran todas sus cualidades y atributos. Generalmente es usada para los personajes de videojuegos, aunque en cualquier tipo de proyecto de ilustración de personajes se puede desarrollar, modificar y personalizar dicho formato con la intención de generar de manera esquemática y organizada la información pertinente para el desarrollo del concepto estético y comportamental del personaje en cuestión. En la siguiente figura, se puede apreciar un ejemplo de hoja de personaje:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span <em>Hoja de personaje</em>
          figure
            img(src='@/assets/curso/temas/tema2/img-21.jpg', alt='Textura')
            figcaption Fuente: www.reddit.com

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Expresiones
            .circle

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.col-md-8
          figure
            img(src="@/assets/curso/temas/tema2/img-22.png").img400 
        .col-lg-8
          p En esta hoja de personajes, independiente que sea para un proyecto de historieta, series animadas, publicitario, cine o videojuego se plantean también las diferentes posiciones y expresiones del personaje, lo que permite crear una referencia desde la psique del personaje, cubriendo las vistas básicas y los movimientos frecuentes. 
          .cajon.color-secundario.p-4.mb-4.fnd-4
            p.mb-0 Para el diseño gráfico del personaje y la ilustración de sus características, el diseñador debe analizar distintos referentes y explorar con creatividad las diferentes propuestas.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span <em>Expresiones</em>
          figure
            img(src='@/assets/curso/temas/tema2/img-23.png', alt='Textura')
            figcaption Fuente: fearsomebeastie.com

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Creatividad
            .circle

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.col-md-8.mb-4
          figure
            img(src="@/assets/curso/temas/tema2/img-24.png").img400 
        .col-lg-8
          p Toda idea, concepto o creación artística nace de un proceso creativo, que no es más que una serie de pasos secuenciales o no que permiten la inspiración del creador y el posterior planteamiento de soluciones.
          .cajon.color-secundario.p-4.mb-4.fnd-4
            p.mb-0 El pensamiento disruptivo es una de las características de los diseñadores e ilustradores, debido a que tienen la capacidad de otorgar vida a personajes, objetos, gráficos y demás productos, dejando de lado los esquemas y patrones convencionales. Dentro de las reglas para lograr diseñar un producto creativo, en este caso, un personaje, se pueden mencionar:
      .row.justify-content-center.align-items-center(data-aos="fade-left")        
        .col-lg-10
          PasosA.color-acento-botones.mb-5(tipo="n")
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p Agudizar la capacidad de observación y la revisión de referentes y tendencias en el campo audiovisual.
              .col-md-4
                figure
                  img(src='@/assets/curso/temas/tema2/img-25.png')
                  

            .row.justify-content-center.align-items-center
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/img-26.png')
                  
              .col-md-8
                p Contar con la disposición para analizar en detalle lo que se conoce y se vive diariamente y analizarlo en pro del proyecto (inspiración).
            .row.d-flex
              .col-md-8.mb-4.mb-md-0
                p Revisar referentes es una práctica pertinente para cualquier profesión: consultar autores, dibujantes, diseñadores, temáticas y productos asociados al proyecto trabajado. Generalmente se hace virtual, pero cabe dentro de ella, la consulta de textos físicos o la utilización de otras herramientas de información como las entrevistas a expertos o la observación de fenómenos. Conductas que puedan inspirar a un personaje especifico.
              .col-md-4.a-left
                figure
                  img(src='@/assets/curso/temas/tema2/img-27.png').img133
                  
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8
          p Aunque generalmente se asocia la creatividad con el desorden, la casualidad o la iluminación divina, se debe tener en cuenta que es un proceso ordenado que lleva a un fin dependiendo de su estructuración y disciplina.
          p Los seres humanos son potencialmente creativos, pero se debe dar rienda suelta a la imaginación sin prejuicios ni patrones mentales que conllevan a hacer siempre lo mismo.
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Después de la observación y la revisión de referentes, el proceso creativo se desarrolla a partir de bocetos y esquemas mentales que dan forma al<em> concept art.</em>
        .col-lg-4.col-md-8
          figure
            img(src='@/assets/curso/temas/tema2/img-28.png')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 <i>Concept art</i>
            .circle



      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-29.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Estilo de ilustración en el que se establece, por medio de representaciones visuales, la historia o la idea del proyecto. En pocas palabras, mediante la ilustración se plasma el concepto de diseño del personaje.   

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8
          p Se usa para todos los tipos de proyectos y es la herramienta principal para el desarrollo de la dirección de arte en un proyecto.
          p Se puede identificar el <i>concept art </i> en la figura 10 en trazos a lápiz, para establecer la intencionalidad de la escena, el movimiento y la expresión buscados para tal cuadro.
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Paralela se encuentra la imagen final producida, con las tonalidades de color escogidas, la textura, el manejo de luz y demás elementos que alimentan el concepto. A continuación, en la siguiente figura se puede apreciar un ejemplo de trazos con lápiz.

        .col-lg-4.col-md-8
          figure
            img(src='@/assets/curso/temas/tema2/img-30.png')

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4. 
            span <em>Trazos de lápiz</em>
          figure
            img(src='@/assets/curso/temas/tema2/img-31.png', alt='Textura')
            figcaption Fuente: www.reddit.com


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

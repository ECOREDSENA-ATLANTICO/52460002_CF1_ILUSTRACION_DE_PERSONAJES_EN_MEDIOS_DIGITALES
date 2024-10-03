<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Esquemas de color

    .row.justify-content-center.align-items-center.mb-5.fnd-2(data-aos="zoom-in")
      .col-lg-3.col-sm-6.mb-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img-1.png").img400
      .col-lg-9
        p La selección del color en el diseño de personajes es fundamental para el desarrollo del concepto: Los seres humanos tenemos la capacidad de responder a estímulos visuales y los colores forman parte de las herramientas más potentes usadas en la publicidad, por medio de la teoría de la psicología del color, donde se establece una serie de conceptos y significados asociados a cada uno de los colores; por ejemplo:
        .row
          .col-xl-3.col-md-6
            .tarjeta.p-4.fnd-3.tarjeta--slyder
              h4.mb-0 01
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img-2.svg", alt="alt").img100
              p.text-center.mb-0 Ayuda a comunicar emociones.
          .col-xl-3.col-md-6
            .tarjeta.p-4.fnd-3.tarjeta--slyder
              h4.mb-0 02
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img-3.svg", alt="alt").img100
              p.text-center.mb-0 Genera atmósfera o contexto.
          .col-xl-3.col-md-6
            .tarjeta.p-4.fnd-3.tarjeta--slyder
              h4.mb-0 03
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img-4.svg", alt="alt").img100
              p.text-center.mb-0 Define un tiempo específico.
          .col-xl-3.col-md-6
            .tarjeta.p-4.fnd-3.tarjeta--slyder
              h4.mb-0 04
              .row.justify-content-center.mb-3
                .col-8
                  img(src="@/assets/curso/temas/tema2/img-5.svg", alt="alt").img100
              p.text-center.mb-0 Resalta atributos.
              <br>

    .cajon.color-secundario.p-4.mb-4.fnd-4
      p.mb-0 Los seres humanos tenemos la capacidad de responder a estímulos visuales y los colores forman parte de las herramientas más potentes usadas en la publicidad, se utiliza la psicología del color, donde se establece una serie de conceptos y significados asociados a cada uno de los colores. A continuación, consulte los diferentes esquemas de colores:   


    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Rojo") Es asociado con sentimientos apasionados, energía, amor y a su vez peligro y alerta. Es el color más vibrante por ser el que tiene mayor longitud de onda respecto a los otros colores.

          p(numero="2" titulo="Naranja") Es un color asociado a la creatividad y a la juventud, la diversión y la innovación. En señalética indica precaución.

          p(numero="3" titulo="Amarillo") Es usado específicamente con carácter de advertencia y a su vez catalogado como un color enérgico, vivaz y luminoso. 

          p(numero="4" titulo="Verde") Especializado para caracterizar condiciones medioambientales y éticas. Otorga un ambiente fresco y natural.

          p(numero="5" titulo="Azul") Es considerado un color de características como la tranquilidad y la transparencia. Constantemente es empleado en el ámbito institucional para generar ambientes asépticos, limpios.

          p(numero="6" titulo="Violeta") Tiene diferentes interpretaciones. Por un lado, lo mágico e irreal. También al lujo y, a su vez, está asociado a los rituales eclesiásticos y a la muerte.	 

          p(numero="7" titulo="Negro") Aunque no es un color propiamente dicho, sino un valor equivalente a la ausencia de luz, tiene una connotación de elegancia y estatus, aunque dependiendo del contraste y el contexto se asocia con maldad y oscurantismo.	

          p(numero="8" titulo="Blanco") El valor blanco está asociado a la presencia de luz, a la limpieza e inocencia. Utilizado para reforzar conceptos de naturalidad, asepsia y pureza	 

      .col-8.col-lg-4
        figure
          img.l(src="@/assets/curso/temas/tema2/img-6.png", alt="alt")      

    .row.align-items-center.mb-5
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
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Por medio del uso de texturas, los diseñadores o ilustradores logran desde una representación bidimensional (2D) una imitación o acercamiento a las sensaciones visuales y táctiles de objetos y formas de la cotidianidad; por medio del uso adecuado de la técnica de ilustración o modelado, el uso de la luz, la oscuridad y las gradaciones de color.
        .cajon.color-secundario.p-4.mb-4.fnd-4
          p En la siguiente figura se puede observar la textura del cuerpo del personaje, suave y afelpada. Además, los colores evocan la fantasía y la magia; por consiguiente, el personaje puede asociarse a sentimientos de ternura y dulzura.

      .col-lg-3.col-md-8
        figure
          img.l(src="@/assets/curso/temas/tema2/img-9.png", alt="alt")   

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1. 
          span Textura
        figure
          img(src='@/assets/curso/temas/tema2/img-10.png', alt='Textura')
          figcaption Fuente: www.recursosdeingenieria.com

    .row.align-items-center.mb-5
      .col-auto
        .button
          h3.mb-0 Perspectiva
          .circle

    p.mb-5 Técnica empleada para proyectar la profundidad, la lejanía, el volumen y la disposición de los objetos en un espacio, bajo uno o varios puntos de fuga, a partir de esto. A continuación, consulte los diferentes tipos de perspectivas:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5.fnd-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-11.svg', alt='Texto que describa la imagen')

        h3.text-center Perspectiva paralela
        p Técnica que usa un solo punto de fuga. Las líneas, que son paralelas, convergen y se vuelven oblicuas. Así genera la sensación de profundidad.
      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-12.svg', alt='Texto que describa la imagen')

        h3.text-center Perspectiva oblicua
        p Usa dos puntos de fuga ubicados en el plano de horizonte, equivalente al punto de vista del usuario. Las líneas verticales se mantienen paralelas
      .col-md.tarjeta.color-acento-contenido.p-5.fnd-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-13.svg', alt='Texto que describa la imagen')

        h3.text-center Perspectiva aérea
        p Perspectiva aérea: a partir de tres puntos de fuga se establece el dibujo, convirtiendo las líneas verticales y horizontales en oblicuas al dirigirse a los puntos, dos situados en la línea horizonte y otro en diferente posición.	 

    .row.align-items-center.mb-5
      .col-auto
        .button
          h3.mb-0 Psique del personaje
          .circle



    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-3.col-sm-6.mb-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img-14.png").img400    
      .col-lg-9
        p Algunos de los aspectos que se deben establecer para la construcción de la estructura psicológica de un personaje son: carácter, relación con otros personajes y las acciones. Esto permite asociar coherentemente un aspecto físico con un esquema psicológico y comunicativo. 
        p Al definir el perfil psicológico de un personaje se conectarán los requerimientos expuestos por el cliente en el brief con los elementos visuales, lo que conllevará a que el target o público objetivo pueda sentirse identificado con la propuesta. 
        p Las decisiones estéticas deben surgir desde la creación de la psique del personaje: elementos visuales como la proporción, las formas, el tamaño, la expresión del rostro, la postura del cuerpo, los accesorios a usar y el vestuario; y cómo interactúa con el entorno y los demás personajes. 
        .cajon.color-secundario.p-4.mb-4.fnd-4
          p La creación de la psique del personaje puede desarrollarse desde distintas premisas, a continuación, en la siguiente infografía puede consultarlas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure.mb-4
              img(src='@/assets/curso/temas/tema2/img-15.svg', alt='Etapas del modelo de desarrollo de campañas de Yale publicitaria.')

          .tarjeta.fnd-6.p-3.p1(x="5.5%" y="47%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4
                figure
                  img(src="@/assets/curso/temas/tema2/img-16.svg").img400 
              .col-lg-8
                .h3.mb-2 Rasgos
                p.mb-0 Se construye el perfil psicológico a partir de características específicas. Por ejemplo, el personaje es manipulador y, por lo tanto, actúa como tal.
          .tarjeta.fnd-6.p-3.p1(x="21.1%" y="85.5%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4
                figure
                  img(src="@/assets/curso/temas/tema2/img-17.svg").img400 
              .col-lg-8
                .h3.mb-2 Contradicciones narrativas
                p.mb-0 Se enfoca en las características del actuar del personaje desde algo que quiere y no puede o no debe realizar, basar su perfil en el conflicto interno que vive.
          .tarjeta.fnd-6.p-3.p1(x="77.8%" y="86.4%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4
                figure
                  img(src="@/assets/curso/temas/tema2/img-18.svg").img400 
              .col-lg-8
                .h3.mb-2 Conflicto
                p.mb-0 Iniciar la construcción de la psique desde la problematización del nudo de la historia.
          .tarjeta.fnd-6.p-3.p1(x="94.7%" y="47%" numero="+")
            .row.justify-content-center.align-items-center
              .col-lg-4
                figure
                  img(src="@/assets/curso/temas/tema2/img-19.svg").img400 
              .col-lg-8
                .h3.mb-2 Relación con los personajes
                p.mb-0 Frente a los demás cómo se comporta; definir si es víctima, salvador, influenciador, apático, etc.                              

    .row.align-items-center.mb-5
      .col-auto
        .button
          h3.mb-0 Character sheet
          .circle

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Expresión para referirse a una hoja de personaje, en la que se registran todas sus cualidades y atributos. Generalmente es usada para los personajes de videojuegos, aunque en cualquier tipo de proyecto de ilustración de personajes se puede desarrollar, modificar y personalizar dicho formato con la intención de generar de manera esquemática y organizada la información pertinente para el desarrollo del concepto estético y comportamental del personaje en cuestión. En la siguiente figura, se puede observar un ejemplo de hoja de personaje:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Hoja de personaje.
        figure
          img(src='@/assets/curso/temas/tema2/img-21.jpg', alt='Textura')
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

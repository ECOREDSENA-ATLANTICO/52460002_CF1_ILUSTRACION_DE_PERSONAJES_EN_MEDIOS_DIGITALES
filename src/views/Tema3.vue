<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Anatomía humana y animal
    .fondo.f-3
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-12
          .img-fnd-flot.mb-lg-5
            img.b-img(src='@/assets/curso/temas/tema3/img-1.png' alt='Anatomía humana y animal')
            .fl-box
              p.mb-0 Según el diccionario de la Real Academia Española, el término anatomía, en su primera acepción hace referencia a la ciencia que estudia la estructura y forma de los seres vivos y las relaciones entre las diversas partes que los constituyen.     

      h5.mb-4.text-center La anatomía humana y animal puede entenderse desde diferentes perspectivas para la ilustración, a continuación, en el siguiente carrusel puede consultarlas:

      .row.justify-content-center.align-items-center.mb-5.fnd-1.p-5(data-aos="zoom-in")
        .tarjeta.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.col-sm-12.mb-4.mb-md-0.px-md-5.pt-lg-5.px-sm-0
                h5 Anatomías femenina y masculina 
                p La anatomía es constantemente estudiada desde las ramas de la salud para diversos estudios que comprometen el funcionamiento y la estructura. 
                p.mb-md-4 No obstante, para el diseño y conceptualización de personajes, se trabaja con la anatomía tanto humana como animal, para consolidar desde las formas estándar, la propuesta de diseño del cuerpo del personaje, las proporciones a usar, los tamaños y su estructura dependiendo del género y edad.      
              .col-lg-6.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema3/img-2.png')

            .row.justify-content-center
              .col-lg-6.col-sm-12.mb-4.mb-md-0.px-md-5.pt-lg-5.px-sm-0
                h5 Boceto cuerpo humano
                p.mb-md-4 Para aprender a ilustrar la figura humana, es recomendado trabajar desde una estructura en la que se definan las diferentes articulaciones y construir el cuerpo a partir de formas básicas.         
              .col-lg-6.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema3/img-3.png')    

            .row.justify-content-center              
              .col-lg-6.col-sm-12.mb-4.mb-md-0.px-md-5.pt-lg-5.px-sm-0
                h5 Anatomía animal.
                p.mb-md-4 De otro lado, para el diseño de un personaje a partir de la anatomía animal, se recomienda iniciar de la misma manera como sucede en el diseño de personaje humanoide: se define una posición a través de una estructura lineal que asemeja la estructura ósea o muscular del animal.         
              .col-lg-6.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema3/img-4.png')    

            .row.justify-content-center              
              .col-lg-6.col-sm-12.mb-4.mb-md-0.px-md-5.pt-lg-5.px-sm-0
                h5 Anatomía animal en 3D
                p.mb-md-4 Después de tener el esquema de líneas y formas básicas se procede a trabajar sobre el diseño de las texturas y los colores del pelaje, en el caso que lo requiera.         
              .col-lg-6.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema3/img-5.png')                                                     


      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Expresión corporal
            .circle

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-4.mb-4.col-md-8
          figure
            img(src='@/assets/curso/temas/tema3/img-6.png')
        .col-lg-8
          p Hace referencia a la capacidad de transmitir un mensaje a través del uso del cuerpo y la gestualidad, es decir, el cuerpo como vehículo para representar ideas, sentimientos y conceptos. Es una expresión abordada principalmente desde las artes escénicas, en la que el cuerpo es el instrumento que guía un hilo narrativo. 
          
          .cajon.color-secundario.p-4.mb-lg-4
            p.mb-0 En el ámbito del diseño de personajes, la expresión corporal es trascendente para definir atributos y conceptos de estos, porque la forma de comunicación es visual; por ejemplo, los personajes publicitarios que frecuentemente actúan como la representación de una marca desde una imagen estática y la ausencia de sonido, todo se vuelca sobre la importancia de la expresión corporal del personaje y su representación visual. A continuación, en la siguiente figura se puede evidenciar una expresión corporal en la anatomía animal. 

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            span Anatomía animal
          figure
            img(src='@/assets/curso/temas/tema3/img-7.png', alt='Textura')
            figcaption Fuente: Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos. Risaralda. (2017).

      p Hace referencia a la capacidad de transmitir un mensaje a través del uso del cuerpo y la gestualidad, es decir, el cuerpo como vehículo para representar ideas, sentimientos y conceptos.

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.fnd-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-8.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es una expresión abordada principalmente desde las artes escénicas, en la que el cuerpo es el instrumento que guía un hilo narrativo. 
          

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.mb-4.col-md-8
          figure
            img(src='@/assets/curso/temas/tema3/img-9-.png')
        .col-lg-8
          p El canon universal diseñado inicialmente para la escultura figurativa cuenta con unas relaciones establecidas para garantizar la proporción de los cuerpos humanoides adultos, dicho canon es el de 8 cabezas, el cual señala que la altura de un cuerpo debe constituirse por la suma de la altura de 8 cabezas. Para ello, se parte de una altura de cabeza de 22,5 cm como medida de un adulto ideal y una altura total de 1,80 cm
          
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Las proporciones para personajes infantiles son inferiores y varían en las etapas del crecimiento: van desde las 4 cabezas hasta las 7 cabezas.

      .row.align-items-center.mb-5(data-aos="zoom-in")
        .col-auto
          .button
            h3.mb-0 Proporciones
            .circle


      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
    
        .col-lg-8.order-2.order-lg-1
          p El concepto hace referencia a la condición de relación, equilibrio o simetría entre dos o más elementos, que a su vez son parte de un conjunto. Es corresponsable de la construcción social de la belleza, lo que se considera proporcionado o basado en el orden o la relación, es determinante frente a la percepción de bonito o bien hecho. 
          
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 La proporción de 8 cabezas se usa para el diseño de personajes realistas como algunos superhéroes y personajes de videojuegos. Para el diseño de personajes tipo caricatura o generalmente para series animadas infantiles, no se respeta dicha proporción y se exageran las características y dimensiones de algunas partes del cuerpo. 

        .col-lg-4.col-sm-8.mb-4.order-1.order-lg-2
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img-10.png").img400 

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Depende de los requerimientos del proyecto y del estilo gráfico que trabaje el diseñador. A continuación, se hace un paralelo de las diferentes proporciones a usar en el cuerpo del personaje dependiendo de la cantidad de cabezas a usar para definir la altura total..         

            
</template>

<script>
export default {
  name: 'Tema3',
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

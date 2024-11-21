<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 <em>Brief</em> y tipos de proyectos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-4.col-md-8
        figure
          img(src='@/assets/curso/temas/tema1/img-1.png', alt='')
      .col-lg-8
        p El <em>brief</em> es un documento que elabora el cliente para definir al diseñador o ilustrador, los requerimientos del proyecto. En este se establecen los parámetros, objetivos, alcances y entregables del proceso, por lo que es el punto de partida para el diseño de un proyecto creativo o un plan de medios. Durante el proceso se puede actualizar. Un <em>brief</em> puede ser de producto, servicio o estrategia, dependiendo de los alcances del proyecto y los entregables finales. 

        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Dentro de la ilustración de personajes, el <em>brief</em> otorga claridad en el enfoque del diseño y permite diferenciar para qué tipo de proyecto se trabaja y, así, sus alcances y parámetros. Los proyectos de ilustración de personajes pueden ser de tipo:


    .row.justify-content-center.align-items-center.mb-5.fnd-1(data-aos="zoom-in")
      .tarjeta.p-4
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-6.col-sm-12.mb-4.mb-md-0
              h5 Didáctico
              p Este tipo de proyectos complementa recursos didácticos y herramientas pedagógicas que aporten a la enseñanza – aprendizaje.
              p Pueden utilizarse en videos, animaciones, contenido audiovisual, actividades interactivas, entre otros. El personaje debe aportar al aprendizaje significativo, por medio de una relación cercana y dinámica con el aprendiz.      
            .col-lg-6.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/img-2.png', alt='Didáctico, Este tipo de proyectos complementa recursos didácticos y herramientas pedagógicas que aporten a la enseñanza – aprendizaje.')

          .row.align-items-center.justify-content-center
            .col-lg-6.col-sm-12.mb-4.mb-md-0
              h5 Publicitario
              p Los personajes se utilizan para fortalecer el concepto de una marca o un producto, personificando los atributos y las características que se desean comunicar mediante medios publicitarios. Pueden ser ficticios o no, y humanizan la marca, generando un lazo de cercanía entre el producto y el usuario, lo que facilita el posicionamiento y recordación de una marca, conllevando a que las ventas incrementen.
              p Para su creación es importante realizar estudios de mercado e identificar, en el <em>brief</em>, el grupo objetivo para generar relaciones directas y asertivas personaje – usuario; lo que define una personalidad, rasgos y demás elementos que establezcan claramente la intención de la marca, el personaje y su concepto.        
            .col-lg-6.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/img-3.png', alt='Publicitario, Los personajes se utilizan para fortalecer el concepto de una marca o un producto, personificando los atributos y las características que se desean comunicar mediante medios publicitarios')

          .row.align-items-center.justify-content-center
            .col-lg-6.col-sm-12.mb-4.mb-md-0
              h5 Series animadas
                p Los personajes para series animadas deben ser parte de un entorno, una historia y unas condiciones que permitan enlazar uno a uno los capítulos. Dependiendo del público se establecen los rasgos, las características y el contexto de la acción.
                p En la actualidad, se manejan técnicas digitales en 2D y 3D, los cuales reevalúan constantemente los estándares visuales de las producciones, promoviendo el sello personal del diseñador, el contenido de la historia y las características psicológicas del personaje.        
            .col-lg-6.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/img-4.png', alt='Series animadas Los personajes para series animadas deben ser parte de un entorno, una historia y unas condiciones que permitan enlazar uno a uno los capítulos. Dependiendo del público se establecen los rasgos, las características y el contexto de la acción.')

          .row.align-items-center.justify-content-center
            .col-lg-6.col-sm-12.mb-4.mb-md-0
              h5 Cine
              p Aquí se establece, como en todo diseño de personaje, una identidad y su personificación (gestos, actos, vestuario, accesorios, luz, etc.). El personaje se relaciona directamente con el entorno y la historia. Las diferentes técnicas han evolucionado hasta llegar al uso de equipos de captura de movimientos y rasgos de personas reales para dotar de estos a personajes animados.
              p A diferencia de las series animadas, el cine utiliza de manera variada los elementos visuales, como encuadres, cambios de plano, enfoques, ángulos, entre otros; estos procesos obligan a plantear una serie de posturas en 360° para establecer todos los detalles posibles del personaje, simulando su movimiento, rotación o transformación, condiciones que enriquecen la trama y la manera como se concibe la producción audiovisual.        
            .col-lg-6.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/img-5.png', alt='Cine, Aquí se establece, como en todo diseño de personaje, una identidad y su personificación (gestos, actos, vestuario, accesorios, luz, etc.).')

          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 Videojuegos
              p Son pensados en 3 dimensiones como los personajes para cine y algunos para series animadas; pero adquieren condiciones especiales que complejizan su diseño y desarrollo; ejemplo de esto es la relación de los detalles del diseño frente a la capacidad de la consola destino, esto quiere decir que el diseño debe establecerse dentro de los parámetros de la consola que ejecutará el juego.
              p Esto define la calidad de detalle (modelado poligonal) en el personaje y en el entorno para que sean ejecutados rápidamente, por esta razón, generalmente los personajes secundarios y los entornos lejanos cuentan con menos detalles que los principales.
  
          
            .col-lg-6.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/img-6.png', alt='Videojuegos, Son pensados en 3 dimensiones como los personajes para cine y algunos para series animadas; pero adquieren condiciones especiales que complejizan su diseño y desarrollo;')                                          
          


              
        


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

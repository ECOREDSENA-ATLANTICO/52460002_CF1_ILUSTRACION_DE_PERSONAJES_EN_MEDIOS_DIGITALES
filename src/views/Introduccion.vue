<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El componente formativo bases conceptuales de la ilustración, se enfoca en describir el proceso del diseño y creación a partir de un brief inicial del proyecto, ya sea didáctico, publicitario, para series animadas, cinematográfico o para videojuegos. A partir de este se pueden tomar decisiones acertadas sobre la selección del esquema de color, las texturas y la perspectiva a emplear; elementos que consolidan una personalidad, una intención y un concepto de diseño a cada uno de los personajes. De esta manera, en este material de formación se estudiarán estas herramientas, para que el aprendiz ilustre personajes para medios digitales analizando las necesidades del proyecto. Bienvenido a este componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sena (2024).




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

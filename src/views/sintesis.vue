<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La ilustración digital abarca varias áreas y técnicas fundamentales. Un brief inicial define las necesidades y objetivos de un proyecto, que puede ser didáctico, publicitario, para series animadas, cine o videojuegos. 

    p La selección adecuada del esquema de color (monocromático, análogo, complementario, triádico o tetrádico) y la textura (que simula superficies y añade realismo) son esenciales para el diseño. 

    p La perspectiva crea la ilusión de profundidad, mientras que la psique del personaje aborda su psicología y emociones para una representación auténtica. Un character sheet documenta el diseño del personaje desde diversos ángulos y poses, y el concept art sirve para visualizar y desarrollar ideas preliminares.

    p El conocimiento de anatomía humana y animal es crucial para el realismo en las ilustraciones. La expresión corporal y las proporciones garantizan que los personajes transmitan emociones y mantengan coherencia visual.

    p La creatividad impulsa la generación de ideas originales, y las técnicas de ilustración digital (software y tabletas gráficas) permiten una ejecución detallada y estilizada. Finalmente, la edición de parámetros refina colores, texturas y detalles, perfeccionando la ilustración digital final.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

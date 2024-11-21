<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La ilustración digital abarca varias áreas y técnicas fundamentales. Un <em>brief</em> inicial define las necesidades y objetivos de un proyecto, que puede ser didáctico, publicitario, para series animadas, cine o videojuegos. 

    p La selección adecuada del esquema de color (monocromático, análogo, complementario, triádico o tetrádico) y la textura (que simula superficies y añade realismo) son esenciales para el diseño. 

    p La perspectiva crea la ilusión de profundidad, mientras que la <em>psique</em> del personaje aborda su psicología y emociones para una representación auténtica. Un <em>character sheet</em> documenta el diseño del personaje desde diversos ángulos y poses, y el <em>concept art</em> sirve para visualizar y desarrollar ideas preliminares.

    p El conocimiento de anatomía humana y animal es crucial para el realismo en las ilustraciones. La expresión corporal y las proporciones garantizan que los personajes transmitan emociones y mantengan coherencia visual.

    p.mb-5 La creatividad impulsa la generación de ideas originales, y las técnicas de ilustración digital (<em>software</em> y tabletas gráficas) permiten una ejecución detallada y estilizada. Finalmente, la edición de parámetros refina colores, texturas y detalles, perfeccionando la ilustración digital final.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se detalla las bases conceptuales de la ilustración: 1. Ilustración de personajes: didáctico, publicitario, series animadas, cine, videojuegos. 2. Esquema de color: textura, esquema de color, perspectiva. 3. Psique de los personajes: character sheet, creatividad, concept art. 4. Anatomía humana y animal: expresión corporal, proporciones, técnicas de ilustración digital.")
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

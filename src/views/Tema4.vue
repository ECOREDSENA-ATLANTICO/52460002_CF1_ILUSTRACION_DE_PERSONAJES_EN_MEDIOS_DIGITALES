<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de ilustración digital
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La técnica es el conjunto de acciones o procesos que se ejecutan con experticia para un fin. En el caso de las técnicas de ilustración digital son los procedimientos apoyados del uso de diferentes herramientas que consolidan un resultado de diseño para medios digitales, es decir, la creación de imágenes empleando herramientas informáticas. Para ello, se tiene en cuenta: 
      
    .row.align-items-center.mb-4
      .col-auto
        .button
          h3.mb-0 Boceto
          .circle
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .img-fnd-flot.mb-lg-5
          img.b-img(src='@/assets/curso/temas/tema4/img-2.svg' alt='Técnicas de ilustración digital')
          .fl-box
            p.mb-0 el proceso inicia con el desarrollo de un esbozo del personaje según los criterios del cliente. De este modo, se esquematiza de manera general el personaje usando herramientas análogas, como el lápiz de grafito, lápices de colores o tizas pastel.         

    .row.align-items-center.mb-4
      .col-auto
        .button
          h3.mb-0 Ilustración y sus alcances
          .circle
          .circle
              
    h5.text-center.mb-4 De otro lado, la ilustración en general se puede dividir, según sus alcances, en:

    .row.justify-content-center.align-items-center.mb-5.fnd-1.p-5(data-aos="zoom-in")
          .tarjeta.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-6.col-sm-12.mb-4.mb-md-0
                  h5 Ilustración vectorial 
                  p Basa su proceso, como su nombre lo indica, en el uso y edición de vectores, es decir, formatos de archivo visual construidos a partir de puntos (nodos), líneas y formas que pueden escalar y transformar el color de relleno, el color o el grosor del trazo, la forma, entre otros atributos sin alterar su calidad. 
                  p Existen diferentes aplicaciones para convertir un boceto o imagen en vector. Entre ellas se encuentra software de libre descarga, como <i>Inkscape</i> o Vextractor; software de licencia, como Adobe Ilustrador o Corel Drew; y plataformas en línea, como vectormagic. Los formatos pueden ser .eps, .ai, .svg y .dxf.      
                .col-lg-6.col-md-10
                  figure
                    img(src='@/assets/curso/temas/tema4/img-3.svg')

              .row.justify-content-center
                .col-lg-6.col-sm-12.mb-4.mb-md-0
                  h5 Mapa de bits
                  p Es la ilustración digital que usa una rejilla de cuadros denominados pixeles, creados para unas dimensiones específicas. Por eso cuando se aumenta su tamaño, pierden resolución.
                  p Un pixel es el elemento mínimo en que se descompone una imagen, se le asigna un bit y una información como un valor de color y luz propia. No se trata de una unidad de medida, ya que no es equivalente a un tamaño específico, es una unidad de información. Entre mayor cantidad de pixeles por área, menor es su tamaño individual y por consiguiente mayor cantidad de información en la totalidad de la imagen – mapa de bits.          
                .col-lg-6.col-md-10
                  figure.mb-4
                    img(src='@/assets/curso/temas/tema4/img-4.svg')

                .col-lg-12
                  .cajon.color-secundario.p-4.mb-4.fnd-4
                      p.mb-0 Por su parte, los mapas de bits son los archivos que se obtienen a partir de procesos de escaneo y fotografía, y se editan gracias a software especializado como Adobe Photoshop, Gimp o Corel Photo Paint; y editores en línea, como Queeky. Los formatos de una ilustración de mapa de bits son: .jpeg, .tiff, .gif y .png. 

              .row.justify-content-center
                  h5 Modelado en 3D
                  p Es una técnica de ilustración que emplea gráficos tridimensionales a través de software especializados en modelado y renderizado 3D. Al producto se le llama modelo 3D y se puede exportar como imagen, hacer recorridos como videos y simulaciones y puede ser impreso en 3D. La construcción de estos modelos parte de construcciones geométricas, mallas poligonales, superficies y volúmenes dentro de un espacio en tres dimensiones: ancho, altura y profundidad. Pueden ser escaneados desdemodelos a escala por medio de un escáner 3D o realizar el modelado desde el inicio en un software, como Autodesk Maya,<i> Poser, Rhinoceros,</i> 3D <i>max </i>o <i>Blender</i>.

                  .col-lg-6.col-sm-12.mb-4.mb-md-0
                    p Los modelos 3D se pueden categorizar en sólidos, trabajados desde objetos macizos; y contornos o carcasas, trabajados desde superficies con espesor.
                    .cajon.color-secundario.p-4.mb-4.fnd-4
                      p.mb-0 Generalmente la ilustración en 3D necesita un software de modelado y un software complementario para renderizar (procedimiento de otorgar texturas, escenarios, color y materiales al modelo 3D). Algunos motores de render son: Iray para Maya, V-ray, Mental Ray, <i>Penguin</i> para <i>Rhino</i>, entre otros.
                  .col-lg-6.col-md-10
                    figure
                      img(src='@/assets/curso/temas/tema4/img-5.svg')

    .row.align-items-center.mb-5
      .col-auto
        .button
          h3.mb-0 Edición de los parámetros
          .circle


    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4.col-md-10
        figure
          img(src='@/assets/curso/temas/tema4/img-6.svg')

      .col-lg-8
        .cajon.color-secundario.p-4.mb-4.fnd-4
          p Después de digitalizar, el proceso de ilustración o modelado 3D se complementa con la edición de los parámetros y la adecuación de luces, colores, texturas y formas dependiendo de los requerimientos del brief y enfocando el producto final en el requerimiento, según el tipo de proyecto. Por ejemplo, para el desarrollo de un personaje para una película animada.          




</template>

<script>
export default {
  name: 'Tema4',
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

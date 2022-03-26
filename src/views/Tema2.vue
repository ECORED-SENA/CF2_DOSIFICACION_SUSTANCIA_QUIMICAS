<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de resultados agua cruda
    p.my-5 Es necesario tener en cuenta dos pasos fundamentales, la coagulación, en donde se desestabilizan los coloides por medio de la neutralización de las cargas, y la floculación, en donde se forman los flóculos y es posible su decantación.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Mediante el uso de la prueba de jarras se determinarán las dosis de químicos necesarias para la potabilización del agua. El pH juega un papel muy importante para determinar los fenómenos de coagulación y floculación, dado que el pH debe estar dentro de la zona que corresponde al mínimo de solubilidad de los iones metálicos del coagulante que se haya utilizado.

    p.my-5 El PH desempeña un papel muy importante en el estudio de los fenómenos de coagulación-floculación, preferiblemente el PH debe quedar dentro de la zona correspondiente al mínimo de solubilidad de los iones metálicos del coagulante usado. La temperatura también es un factor que influye bastante, ya que según disminuye la temperatura del agua deberá aumentarse la dosis de productos químicos utilizados como coagulante para obtener unos flóculos adecuados. 

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p El tiempo de mezclado del coagulante en el agua que se va a tratar será el necesario para que el producto coagulante que se vaya a utilizar se disuelva con la mayor brevedad posible. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/imagen2.jpg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/imagen3.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p Teniendo en cuenta que el tiempo de coagulación es menos de un segundo se debe tener certeza que la neutralización sea total antes de añadir el coagulante. 

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/imagen4.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p Para la evaluación de los resultados de una prueba de jarras no existen unos criterios los cuales deban ser seguidos estrictamente.

    .row.justify-content-center
      .col-6.fondo2
        p.py-2.mb-0.text-center No obstante, al momento de la práctica se pueden observar diferentes criterios los cuales nos guiaran para analizar los resultados, los cuales son: 

    LineaTiempoB.my-5(:datos="datosLineaTiempoB")
    .row.fondo24
      .col-12
        .row.justify-content-center
          .col-lg-6.col-md-6
            hr.linea
        .row.justify-content-center
          .col-lg-8.col-md-8
            p.my-1.text-center Es de valioso interés que en este análisis de resultados de agua cruda también se logre incorporar métodos estándar para análisis de aguas en laboratorio.
        .row.justify-content-center
          .col-lg-6.col-md-6
            hr.linea
        .row
          .col-lg-5.col-md-12
            img.my-5(src='@/assets/curso/tema2/imagen5.png', alt='Métodos estándar para análisis de aguas en laboratorio')
          .col-lg-7.col-md-12.py-5
            h3.my-5 Métodos estándar para análisis de aguas en laboratorio
            p Una vez se realiza la recepción de las muestras en el laboratorio se procede con la asignación a un analista para su procesamiento. Esto implica someter la muestra objeto de estudio a una serie de procesos que buscan determinar las características de la fuente de origen. Para esto, es necesario cumplir con los métodos definidos y previamente validados para su análisis en el laboratorio.
            p.my-5 Dentro de los métodos estándar más reconocidos para el análisis muestreo y análisis de aguas se encuentran el <em>Standard Methods</em> y las Normas ISO.
        h3 <em>Standard Methods</em>
        p.mb-4 El <em>Standard Methods</em> es un referente que, de manera integral, compila todos los aspectos relacionados con las técnicas de análisis de agua incluyendo las aguas residuales.
        .cajon.fondo3.p-4.mb-4.color-primario
          p Este referente ha sido publicado desde 1905 y desde entonces se actualiza constantemente, hoy en día va en su edición número 23. Esta es una publicación producida con recursos y conocimiento conjunto de las 3 asociaciones de salud pública y agua, reconocidas a nivel mundial: La Asociación Americana de la Salud Pública (APHA), Asociación Americana de trabajos del Agua (AWWA) y La Federación del ambiente agua (WEF).
        p.my-5 El <em>Standard Methods</em> contiene más de 400 métodos para el análisis de agua, debidamente revisados y aprobados por expertos. Estos métodos están divididos en 10 apartados que van desde el apartado 1000 al 10000.

        .row.align-items-end.justify-content-center
          .col-lg-2.col-md-2.col-sm-2
            img.my-5(src='@/assets/curso/tema2/cientifico.png', alt='Métodos estándar para análisis de aguas en laboratorio')
          .col-lg-6.col-md-8.col-sm-8
            img.my-5(src='@/assets/curso/tema2/standardMethods.png', alt='Métodos estándar para análisis de aguas en laboratorio')
          .col-lg-2.col-md-2.col-sm-2
            img.my-5(src='@/assets/curso/tema2/cientifica.png', alt='Métodos estándar para análisis de aguas en laboratorio')
    .row.justify-content-center
      .col-10
        p.my-4 En cada uno de los apartados citados anteriormente se encuentra información sobre las técnicas de muestreo, incluyendo la preservación y el almacenamiento de aguas para cada uno de los parámetros analizados dentro de estos 10 tipos de ensayo.
        p.mb-5 Puede consultar el resumen de los contenidos de cada apartado en la versión <em>web</em> disponible en el siguiente enlace:
    .row.justify-content-center
      .col-8
        a.anexo.mb-4.mb-lg-0(href="https://www.standardmethods.org" target="_blank")
          .anexo__icono
            img.mt-4(src="@/assets/template/tema2/icono-link.svg")
          .anexo__texto
            p Enlace <em>web</em>. Para consultar las normas internacionales por las cuales también son regidos los ensayos de laboratorio que se realizan en el país, puede consultar los <em>Standard Methods for the examination of water and wastewater</em>.

    h3 Normas ISO
    p.my-5 Las normas ISO son otro referente importante para el muestreo y análisis microbiológico y fisicoquímico del agua, elaborados por la organización internacional de normalización ISO con sede en Ginebra suiza y conformada por más de 160 países miembros.

    .row.justify-content-center.lineaPeq
      .col-lg-7.p-4.col-md-10.fondo3
        p.mb-3 Las normas son realizadas por comités técnicos, expertos en cada uno de los temas de normalización. En el caso del muestreo y análisis de agua, el comité técnico encargado es el ISO TC 146 y el subcomité 6 es el encargado de trabajar en guías y normas para el muestreo de aguas. El subcomité 4 es el encargado de trabajar específicamente en los aspectos relacionados con el análisis microbiológico de aguas.
        p La serie de normas 5667 proporcionan directrices para la toma de muestras para el análisis de la calidad del agua. En el caso de muestreo para análisis microbiológico se recomienda consultar la ISO 19458.
      .col-lg-3.col-md-10
        img.imagenPeq(src="@/assets/curso/tema2/imagen6.jpg")        
    .row.justify-content-center.my-5
      .col-10
        p Las guías y normas ISO son revisadas y adoptadas como normas técnicas colombianas por el Instituto Colombiano de Normas Técnicas (ICONTEC). Entonces, para consultar las normas ISO traducidas al español y adaptadas al ámbito colombiano se recomienda consultar las normas NTC- ISO.
    .row.justify-content-center.my-5
      .col-7.fondo23.p-4
        p.text-bold.text-center.mb-0 Debe ingresar a biblioteca SENA, ir a ICONTEC, buscar norma NTC 5667 y escoger la que desee visualizar


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        texto:
          'Las características de los flóculos, su tamaño, si son uniformes, la velocidad con la que aparecen, el peso aparente que presentan.',
        icono: require('@/assets/componentes/tema2/icono1.svg'),
      },
      {
        texto:
          'La claridad y la transparencia de la muestra es el criterio con mayor relevancia, es por esto que en la mayoría de plantas de tratamiento de aguas encontramos turbidímetros para poder observar si la muestra es totalmente transparente o si presenta materiales suspendidos.',
        icono: require('@/assets/componentes/tema2/icono2.svg'),
      },
      {
        texto:
          'Se debe tener en cuenta la velocidad con la que se sedimentan los flóculos en el momento que se detiene de agitar el equipo. Allí se podrán observar diferentes parámetros tales como lo son la sedimentación apresurada, lenta o casi nula.',
        icono: require('@/assets/componentes/tema2/icono3.svg'),
      },
    ],
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

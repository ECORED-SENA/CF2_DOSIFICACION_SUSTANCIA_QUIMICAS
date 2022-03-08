<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de resultados agua cruda
    p.my-4 Es necesario tener en cuenta dos pasos fundamentales, la coagulación, en donde se desestabilizan los coloides por medio de la neutralización de las cargas, y la floculación, en donde se forman los flóculos y es posible su decantación.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Mediante el uso de la prueba de jarras se determinarán las dosis de químicos necesarias para la potabilización del agua. El pH juega un papel muy importante para determinar los fenómenos de coagulación y floculación, dado que el pH debe estar dentro de la zona que corresponde al mínimo de solubilidad de los iones metálicos del coagulante que se haya utilizado.
    p.my-4 El PH desempeña un papel muy importante en el estudio de los fenómenos de coagulación-floculación, preferiblemente el PH debe quedar dentro de la zona correspondiente al mínimo de solubilidad de los iones metálicos del coagulante usado. La temperatura también es un factor que influye bastante, ya que según disminuye la temperatura del agua deberá aumentarse la dosis de productos químicos utilizados como coagulante para obtener unos flóculos adecuados. 
    .row.justify-content-center
      .col-lg-4.col-md-12
        img.my-4(src='@/assets/curso/tema2/imagen2.jpg', alt='Análisis de resultados agua cruda')
      .col-lg-4.col-md-12
        img.my-4(src='@/assets/curso/tema2/imagen3.jpg', alt='Análisis de resultados agua cruda')
      .col-lg-4.col-md-12
        img.my-4(src='@/assets/curso/tema2/imagen4.jpg', alt='Análisis de resultados agua cruda')

    .row.justify-content-center
      .col-6.fondo2
        p.py-2.mb-0.text-center No obstante, al momento de la práctica se pueden observar diferentes criterios los cuales nos guiaran para analizar los resultados, los cuales son: 

    LineaTiempoB.my-5(:datos="datosLineaTiempoB")
    .row.fondo1
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
            img.my-4(src='@/assets/curso/tema2/imagen5.png', alt='Métodos estándar para análisis de aguas en laboratorio')
          .col-lg-7.col-md-12.py-5
            h3.my-5 Métodos estándar para análisis de aguas en laboratorio
            p Una vez se realiza la recepción de las muestras en el laboratorio se procede con la asignación a un analista para su procesamiento. Esto implica someter la muestra objeto de estudio a una serie de procesos que buscan determinar las características de la fuente de origen. Para esto, es necesario cumplir con los métodos definidos y previamente validados para su análisis en el laboratorio.
            p.my-4 Dentro de los métodos estándar más reconocidos para el análisis muestreo y análisis de aguas se encuentran el Standard Methods y las Normas ISO.
        h3.my-4 <em>Standard Methods</em>
        p.mb-4 El <em>Standard Methods</em> es un referente que, de manera integral, compila todos los aspectos relacionados con las técnicas de análisis de agua incluyendo las aguas residuales.
        .cajon.fondo3.p-4.mb-4.color-primario
          p Este referente ha sido publicado desde 1905 y desde entonces se actualiza constantemente, hoy en día va en su edición número 23. Esta es una publicación producida con recursos y conocimiento conjunto de las 3 asociaciones de salud pública y agua, reconocidas a nivel mundial: La Asociación Americana de la Salud Pública (APHA), Asociación Americana de trabajos del Agua (AWWA) y La Federación del ambiente agua (WEF).
        p.my-4 El <em>Standard Methods</em> contiene más de 400 métodos para el análisis de agua, debidamente revisados y aprobados por expertos. Estos métodos están divididos en 10 apartados que van desde el apartado 1000 al 10000.

</template>

<script>
export default {
  name: 'Tema2',
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

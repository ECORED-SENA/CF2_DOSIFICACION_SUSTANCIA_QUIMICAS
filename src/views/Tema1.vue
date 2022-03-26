<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Prueba de jarras.

    p.my-5 Para el tratamiento de aguas es necesario determinar los productos químicos y las cantidades que se requieren para su potabilización y el funcionamiento de manera óptima y se reduzcan los costos, para esto se realizan los ensayos de dosificación en escala de laboratorio y obtienen el nombre de pruebas de jarras. 

    .row.justify-content-center
      .col-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              p Las pruebas de Jarras básicamente se utilizan para determinar la dosis óptima de coagulante en un proceso de tratamiento de aguas, pasando por tres fases que son: mezcla rápida, mezcla lenta y sedimentación.
            .col-md-6
              figure
                img(src='@/assets/template/tema1/imagen1.svg', alt='Prueba de jarras')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/tema1/imagen2.svg', alt='Prueba de jarras')
            .col-md-6
              p Para estas pruebas se utilizan 6 diferentes jarras en donde en cada una de ellas se añade una variación de coagulante, el cual permite la reducción de los coloides en suspensión mediante el proceso de floculación, lo cual permite ajustar el pH de cada muestra hasta llegar al valor necesario que oscila entre los 7.3 y los 7.6. 

          .row
            .col-md-6.mb-4.mb-md-0
              p Estas representan una etapa muy importante dentro del proceso de tratamiento de aguas residuales dado que de su correcto desarrollo y cálculo de los respectivos parámetros se puede establecer la dosis óptima a usar a escala real en una PTAR.
          
            .col-md-6
              figure
                img(src='@/assets/template/tema1/imagen3.svg', alt='Prueba de jarras')

          .row
            .col-md-6.mb-4.mb-md-0
              p Cabe resaltar que las cantidades de los coagulantes deben variarse en rangos de 0,5 ml por cada litro de agua, ya que esto permite que la muestra no se sature.
          
            .col-md-6
              figure
                img(src='@/assets/template/tema1/imagen4.svg', alt='Prueba de jarras')

    .row.fondo1.py-5.justify-content-center
      .col-12.my-5
        p.my-5.text-center.mb-0 Vamos ahora a visualizar mediante el siguiente video el proceso de tratamiento de aguas, centrándonos en las tres fases que son:  
        p.color-texto.text-center.mb-0.text-bold mezcla rápida, mezcla lenta y sedimentación. 
        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-8.fondo2
        p.py-2.mb-0.text-center Si realmente se ha realizado cada una de las fases explicadas, es momento entonces de tener claridad en el adecuado procedimiento para realizar la prueba de jarras: 

    .row.justify-content-center
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/uno.png', alt='fase uno')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/dos.png', alt='fase dos')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/tres.png', alt='fase tres')
    .row.justify-content-center
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/cuatro.png', alt='fase cuatro')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/cinco.png', alt='fase cinco')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/seis.png', alt='fase seis')
    .row.justify-content-center
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/siete.png', alt='fase siete')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/ocho.png', alt='fase ocho')
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/tema1/nueve.png', alt='fase nueve')
    //-img.my-5(src='@/assets/curso/tema1/imagen5.jpg', alt='procedimiento para realizar la prueba de jarras')
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
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

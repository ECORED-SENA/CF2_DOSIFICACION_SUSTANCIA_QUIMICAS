<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-12.fondo13
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 6
          h1 Normatividad de calidad de agua
        img(src='@/assets/curso/tema6/fondotema6.png')
        p.mt-4 En Colombia, la calidad del agua se rige por diferentes normas y decretos que abarcan todos los parámetros y características que debe tener el agua para el consumo humano y animal, el decreto 1575 de 2007 describe que el agua potable es aquella que cumpla con las características físicas, químicas y microbiológicas que están reglamentadas en las normas de calidad de agua en Colombia. 
        p.mb-5 En la siguiente tabla se relacionan los parámetros de mayor relevancia y control en el monitoreo de la calidad de agua, según la resolución 2115 de 2007:

        .row.justify-content-center
          .col-lg-8.col-md-12
            .titulo-sexto.color-acento-contenido.mb-5
              h5 Tabla 2.
              span Resolución 2115 de 2007.
            .tabla-b.mb-5
              table
                caption Nota. SENA,2021.
                tr.fondo17.text-white
                  th Características fisícas
                  th Valor máximo aceptable
                tr
                  th Color Aparente
                  td 15
                tr
                  th Olor y Sabor
                  td Aceptable.
                tr
                  th Turbiedad
                  td S
                tr.fondo17.text-white
                  th Características químicas
                  th Valor máximo aceptable
                tr
                  th Cloro residual
                  td 0,3 a 2,0 
                tr
                  th Ph
                  td 6,5 a 9,0
                tr
                  th Nitratos
                  td 10
                tr
                  th Dureza Total
                  td 300
                tr
                  th Sulfatos
                  td 250
                tr
                  th Nitritos
                  td 0,1
                tr
                  th Carbono orgánico total
                  td 5,0
                tr
                  th Sulfatos
                  td 250
                tr
                  th Manganeso
                  td 0,1
                tr
                  th Hierro total
                  td 0,3
                tr
                  th Alcalinidad total
                  td 200
                tr
                  th Aluminio
                  td 0,2
                tr
                  th Coliformes totales
                  td 0 UFC/100cm3
                tr
                  th Coliformes fecales
                  td 0 UFC/100cm2
                tr
                  th Mercurio
                  td 0,001
                tr
                  th Cianuro libre
                  td 0,05
                tr.fondo17.text-white
                  th Características microbiológicas
                  th Valor máximo aceptable
                tr
                  th Coliformes totales
                  td 0
                tr
                  th Eschericha coli
                  td 0
                tr
                  th Mesófilos
                  td <= 100
        .row.justify-content-center
          .col-lg-8.col-md-10.bordes4
            .row
              .col-3.centrar
                a.mb-4.mb-lg-0(href="https://laboratoriodeanalisis.lasalle.edu.co/wcm/connect/LIAC/d951c109-a227-44a3-8a42-1d1f87db2b43/Resoluci%C3%B3n_2115-2007.pdf?MOD=AJPERES&CVID=lMo0SFe" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace.svg")
              .col-9.p-4
                p.mb-0.text-white Resolución 2115 de 2007, por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano
    p.my-5 A continuación, se describen cuáles son las normas que rigen la calidad del agua potable en Colombia: 
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 3.
      span Normas Calidad Agua Potable.

    .tabla-b.mb-5
      table
        caption Nota. SENA,2021.
        tr.fondo17.text-white
          td.ancho1 Norma
          th Concepto
          td.ancho1 Enlaces
        tr
          th.ancho Decreto 1575 de 2007
          td Protección y control de la calidad del agua
          td.ancho1 
            .row.justify-content-center
              .col-lg-10.col-md-12.col-sm-12.centrar
                a.mb-4.mb-lg-0(href="https://www.ins.gov.co/TyS/Documents/Decreto%201575%20de%202007%2CMPS-MAVDT.pdf" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace2.svg")
        tr
          th Resolución 2115 de 2007
          td Características, instrumentos básicos y frecuencias del control y vigilancia para la calidad del agua para consumo humano.
          td
            .row.justify-content-center
              .col-lg-10.col-md-12.col-sm-12.centrar
                a.mb-4.mb-lg-0(href="https://laboratoriodeanalisis.lasalle.edu.co/wcm/connect/LIAC/d951c109-a227-44a3-8a42-1d1f87db2b43/Resoluci%C3%B3n_2115-2007.pdf?MOD=AJPERES&CVID=lMo0SFe" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace2.svg")
        tr
          th Resolución 0811 de 2008
          td Lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución. 
          td
            .row.justify-content-center
              .col-lg-10.col-md-12.col-sm-12.centrar
                a.mb-4.mb-lg-0(href="http://aplicacionespruebas.ins.gov.co/sivicap_new/Anexos/Resoluciones/Resolucion811de2008PuntosMuestreo.pdf" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace2.svg")
        tr
          th Resolución 082 de 2009
          td Formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano.
          td
            .row.justify-content-center
              .col-lg-10.col-md-12.col-sm-12.centrar
                a.mb-4.mb-lg-0(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2009%20Resoluci%C3%B3n%20082%20Buenas%20pr%C3%A1cticas%20sanitarias.pdf" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace2.svg")
        tr
          th Resolución 0082 de 2009
          td Lineamientos para la formulación de mapas de riesgos de cuencas. 
          td
            .row.justify-content-center
              .col-lg-10.col-md-12.col-sm-12.centrar
                a.mb-4.mb-lg-0(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2009%20Resoluci%C3%B3n%20082%20Buenas%20pr%C3%A1cticas%20sanitarias.pdf" target="_blank")
                  img.mt-2(src="@/assets/curso/tema6/enlace2.svg")


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema6',
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

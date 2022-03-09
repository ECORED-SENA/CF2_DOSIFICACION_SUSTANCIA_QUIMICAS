<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lineamientos técnicos de agua potable y saneamiento

    .row.justify-content-center
      .col-lg-7.col-md-12.p-4
        p.mb-3.fondo4 Para le regulación del sector de potabilización del agua contamos con el reglamento técnico del sector de agua potable y saneamiento básico RAS, el cual es una herramienta creada por el ministerio de vivienda en Colombia para mejorar la calidad de la prestación de servicios en agua potable y saneamiento básico, estas guías tienen mucha información de diseño.
        p En Colombia el uso de las guías y manuales del RAS es obligatorio para los sistemas de captación, conducción, almacenamiento y tratamiento de agua residual y potable según la resolución 0330 de 2017. Hasta el momento hay 14 manuales definidos por el gobierno sobre las buenas prácticas en el sector de saneamiento y agua en Colombia y a su vez están disponibles 8 guías para que las personas involucradas en desarrollo de proyectos en agua y saneamiento básico puedan desenvolverse correctamente.
      .col-lg-5.col-md-12
        img.my-4(src='@/assets/curso/tema3/imagen1.png')

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.fondo5.centrar
        .row
          .col-12
            p.text-center.my-5 En Colombia el uso de las Guías y Manuales del RAS es obligatorio para los sistemas de captación, conducción, almacenamiento y tratamiento de agua residual y potable según la resolución 0330 de 2017.

      .col-md.tarjeta.color-primario.p-5.fondo6.centrar
        .row
          .col-12
            p.text-center.my-5 Hasta el momento hay 14 manuales definidos por el gobierno sobre las buenas prácticas en el sector de saneamiento y agua en Colombia.

      .col-md.tarjeta.color-primario.p-5.fondo7.centrar
        .row
          .col-12
            p.text-center.my-5 A su vez están disponibles 8 guías para que las personas involucradas en desarrollo de proyectos en agua y saneamiento básico podamos desenvolverse correctamente.
    .row.fondo8.align-items-center
      .col-lg-5.col-md-12
        img.my-4(src='@/assets/curso/tema3/imagen2.png')
      .col-lg-7.col-md-12.bordes
        p.p-3 La resolución 0330 de 2017 reglamenta cuales son los requisitos técnicos que se deben cumplir en cada una de las etapas, de diseño, construcción, puesta en marcha, operación, mantenimiento y rehabilitación de aquella infraestructura que esté relacionada con los servicios de alcantarillado, acueducto y aseo.        
      p.my-4 El contenido que maneja esta resolución 0330 de 2012 es el siguiente: 
      .row.justify-content-center
        .col-lg-8.col-md-10
          PasosA.color-primario.mb-5.px-5(tipo="l")
            div
              p Se presentan las condiciones generales del reglamento técnico para los sectores de agua potable y saneamiento básico.

            div
              p Se especifican los requisitos técnicos: En esta resolución se esclarecen los procesos que se deben involucrar en el diseño, la construcción y previa supervisión de los sistemas de acueducto, alcantarillado y aseo que se desarrollen en el país.

            div
              p Se hace un control y régimen de sanciones del reglamento técnico del sector de agua potable y saneamiento básico.

            div
              p Se enumeran las certificaciones, licencias y permisos necesarios dentro del reglamento técnico del sector de agua potable y saneamiento básico.
            div
              p Definición de conceptos.
      h3.my-4 Pruebas de tratabilidad
      p.mb-4 Las pruebas de tratabilidad son utilizadas para definir el diseño adecuado de una planta de tratamiento de agua para potabilización dado que este es el método que más se utiliza para poder determinar y evaluar los procesos de coagulación y floculación.

      .bloque-texto-g.p-3.p-sm-4.p-md-5.fondo9
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El color y la turbiedad son algunas de las características del agua las cuales representan una mayor calificación dentro del Índice de Riesgo de la Calidad del Agua (IRCA), es por esto que los objetivos de una planta de tratamiento deben estar enfocados a obtener unas condiciones óptimas de tratabilidad del agua.
      h3.my-4 NTC Prueba de jarras.
      p.mb-4 Para la correcta realización de la prueba de jarras para la determinación de la correcta tratabilidad del agua se encuentra la Norma 
        span.marcador <a href="https://pdfslide.net/documents/ntc-3903-ensayo-de-jarras-561824949d208.html" style="color: white; text-decoration-line: none;" target="_blank">Técnica Colombiana NTC 3903 </a> 
        | procedimiento para el método de jarras en la coagulación-floculación del agua.

    img.my-4(src='@/assets/curso/tema3/Norma.png', alt='Norma Técnica de Colombia')

    .row
      .col-lg-4.col-md-10.centrar
        img.my-4(src='@/assets/curso/tema3/imagen4.png', alt='Cálculo de remoción')
      .col-lg-7.col-md-12
        h3.my-4 Cálculo de remoción
        p.mb-4 Para poder obtener un cálculo acertado de la remoción de la carga contaminante en un sistema de tratamiento de aguas se debe utilizar la siguiente fórmula:
        .row.justify-content-center
          .col-lg-3.col-md-6.fondo10
            p.text-white.text-center.mb-0 E = (So - S) / So x 100
        p.my-4 En donde respectivamente:

        .row
          .col-5.ms-5

            .row.my-4
              .col-auto
                a.boton.fondo11.indicador__container(@click="modal1 = true")
                  span.text-white E
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal1")
              p Eficiencia de remoción del sistema.

            .row
              .col-auto
                a.boton.fondo11.indicador__container(@click="modal2 = true")
                  span.text-white S
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal2")
              p Carga contaminante de salida.

            .row.my-4
              .col-auto
                a.boton.fondo11.indicador__container(@click="modal3 = true")
                  span.text-white So
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal3")
              p Carga contaminante de entrada. 
        p.my-4 A su vez, existen diversos factores que pueden afectar la eficiencia de la remoción, algunos de ellos pueden ser, el tiempo de residencia hidráulico, el medio de soporte, la configuración de los reactores, la temperatura y el pH.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
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

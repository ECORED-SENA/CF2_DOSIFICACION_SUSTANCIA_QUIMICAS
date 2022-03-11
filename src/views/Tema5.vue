<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Unidades de medida
    .row.justify-content-center.my-5
      .col-7.fondo15
        p.mb-0.text-white.text-center En esta unidad de medida se debe tener muy presente las dos siguiente.
    LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")
    .row
      .col-12.fondo13
        .row.justify-content-center
          .col-7.fondo2.my-5
            p.mb-0.text-center.p-3 Para la correcta determinación de la dosis adecuada de insumos químicos es necesario tener en cuenta los siguientes pasos: 
        .row.justify-content-center
          .col-lg-4.col-md-10
            img(src='@/assets/curso/tema4/imagen2.png')
          .col-lg-4.col-md-10

            .row.justify-content-center.mb-5
              .col-md-12
                SlyderF(columnas="col-12")
                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/uno.svg')
                    p.text-center Al agua cruda se le debe determinar los parámetros: temperatura, turbiedad, color y pH.

                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/dos.svg')
                    p.text-center En cada uno de los recipientes del equipo de jarras se deben adicionar dos litros de agua que previamente ha sido agitada.
                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/tres.svg')
                    p.text-center Es necesario tomar volúmenes conocidos de coagulante PAC a una concentración de 1% (P/V), para dosificar en las 6 jarras de 2 litros cada una.

                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/cuatro.svg')
                    p.text-center Se deben ubicar las paletas dentro de las jarras.

                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/cinco.svg')
                    p.text-center Se activa y se pone en marcha el sistema de agitación al máximo (300 rpm).
                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/seis.svg')
                    p.text-center Una vez inicie el proceso de agitación, se dosifica el coagulante, de tal modo que en todas las jarras se aplique a la misma profundidad y al mismo tiempo.
                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/siete.svg')
                    p.text-center Una vez transcurridos 20 o 30 segundos de agitación, se disminuye la velocidad de rotación de las paletas a 30 rpm y se deja flocular durante 15 minutos.

                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/ocho.svg')
                    p.text-center Transcurrido el tiempo de floculación, se suspende la agitación y se extrae las paletas, ubicando las jarras con precaución sobre la mesa.
                  .tarjeta.fondo16.p-4
                    .row.justify-content-center.mb-3
                      .col-3
                        img(src='@/assets/componentes/tema5/nueve.svg')
                    p.text-center Una vez transcurridos 5 minutos de sedimentación se deben tomar muestras de cada una de las jarras que sean a la misma profundidad y a al mismo tiempo y se les analiza la turbiedad, el color, el pH y el índice de Wilcomb. La jarra con las mejores características se define como la óptima.
        .row
          .col-12.bordes3
            h3.my-5 Equipos de dosificación
            p.mb-5 Los equipos de dosificación son utilizados para suministrar una cantidad de producto fija en el siguiente proceso, estos equipos permiten una gran precisión volumétrica y una continuidad y reproducibilidad. Existen dos tipos de equipos, los volumétricos y los gravimétricos, Los sistemas volumétricos dosifican el material en función de las cantidades, los sistemas gravimétricos pesan el material y lo dosifican en función de la masa.

        .row.mt-2
          .col-lg-4.col-md-12
            img(src='@/assets/curso/tema5/tarjeta1.svg')
          .col-lg-4.col-md-12
            img(src='@/assets/curso/tema5/tarjeta2.svg')
          .col-lg-4.col-md-12
            img(src='@/assets/curso/tema5/tarjeta3.svg')

        p.my-5 Antes de manipular una sustancia química se debe conocer la hoja de datos de seguridad en la cual debe estar estipulada la siguiente información: 

        .row
          .col-lg-6.col-md-12
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Nombre, fórmula del producto químico e identificación de la compañía y fábrica que lo realiza.
              li
                  i.fas.fa-angle-right
                  | Deben estar identificados los peligros.
              li 
                i.fas.fa-angle-right
                | La composición e información sobre los componentes debe ser explícita.
              li 
                i.fas.fa-angle-right
                | El procedimiento de primeros auxilios en caso de accidente.
              li 
                i.fas.fa-angle-right
                | Se deben establecer las medidas en caso de incendio.
              li 
                i.fas.fa-angle-right
                | Las medidas a tomar en caso de vertido accidental.
              li 
                i.fas.fa-angle-right
                | El manejo y almacenamiento del producto.
              li 
                i.fas.fa-angle-right
                | Los controles de exposición y protección del personal.
              li 
                i.fas.fa-angle-right
                | Las propiedades físicas y químicas del producto.
              li 
                i.fas.fa-angle-right
                | Su estabilidad y reactividad.
              li 
                i.fas.fa-angle-right
                | Debe estar detallada la información toxicológica.
              li 
                i.fas.fa-angle-right
                | Es necesario tener las consideraciones de disposición.
              li 
                i.fas.fa-angle-right
                | Información sobre transporte.

          .col-lg-6.col-md-12.centrar
            img(src='@/assets/curso/tema5/imagen1.png')

    .row.justify-content-center
      .col-lg-8.col-md-12
        p.py-4.me-0.ms-5 Adicional a ello, es indispensable contar con lo siguiente: 
          a.boton.fondo11.indicador__container.ms-2.sublineado(@click="modal1 = true")
            span.text-white Equipo de seguridad
            .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      p Para trabajo rutinario con sustancias químicas y/o residuos peligrosos se debe contar al menos con el siguiente equipo de seguridad:
      ul.lista-ul.ms-5
        li 
          i.lista-ul__vineta
          | Casco protector.
        li
          i.lista-ul__vineta
          | Gafas de seguridad.
        li 
          i.lista-ul__vineta
          | Máscaras para polvo o gases peligrosos.
        li 
          i.lista-ul__vineta
          | Ropa de protección contra salpicaduras químicas.
        li 
          i.lista-ul__vineta
          | Guantes de caucho o látex. 
        li 
          i.lista-ul__vineta
          | Delantal plástico o de goma.
        li 
          i.lista-ul__vineta
          | Botas de seguridad punta de acero.
    img.my-5(src='@/assets/curso/tema5/imagen2.png')

    .row.justify-content-center
      .col-lg-4.col-md-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/tema5/iconopdf.svg")
          .anexo__texto
            p Anexo. Infografía procedimientos de manipulación.

</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    // variables de vue
    modal1: false,
    datosLineaTiempoA: [
      {
        ano: 'Medición del caudal',
        texto:
          'Es necesario conocer y medir constantemente y con exactitud el caudal del agua cruda que se va a tratar ya que este dato será de vital importancia al momento de calcular los químicos que deberán ser adicionados.' +
          '<br><br>' +
          'Para la medición del caudal se utiliza la canaleta Parshall, vertedero o canal cuando es un flujo libre. Por lectura visual utilizando una regleta o por lectura y registro electrónico a través de un sensor eléctrico o ultrasonido. ',
      },
      {
        ano: 'Dosificación de coagulante',
        texto:
          'Al momento de dosificar el coagulante se deberá agregar equitativamente sobre todo el caudal para producir la desestabilización y aglutinación de los sólidos que se encuentran suspendidos en el agua. El coagulante que se utiliza con mayor frecuencia es el sulfato de aluminio junto con el cloruro férrico. Estos son aplicados mediante dosificadores asegurando la aplicación homogénea del coagulante.',
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

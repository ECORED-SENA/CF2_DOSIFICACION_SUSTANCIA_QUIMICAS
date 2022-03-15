<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cloración
    .row.fondo13
      .col-12
        img(src='@/assets/curso/tema4/fondotema4.png')
        p.my-5 La cloración es un método muy sencillo y eficaz para la desinfección de aguas y hacerla potable. 
        .row.justify-content-center
          .col-lg-5.col-md-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/componentes/tema4/pastillasdecloro.svg' alt='Métodos de cloración')
              .tarjeta.fondo12
                .py-5.ps-4.pe-3
                  p Consiste básicamente en introducir productos clorados que en su mayoría son pastillas, en el agua para matar todos aquellos microorganismos que se encuentren presentes.    
          .col-lg-5.col-md-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/componentes/tema4/redes.svg' alt='Cloración en redes de distribución de agua')
              .tarjeta.fondo12
                .p-4
                  p Este procedimiento se utiliza en las grandes redes de distribución de agua potable desde hace ya varias décadas atrás añadiendo cloro al agua para que durante su transporte no se contamine con microorganismos presentes en los sistemas de alcantarillado.
          .col-lg-5.col-md-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/componentes/tema4/efectoscloro.svg' alt='Efectos del cloro')
              .tarjeta.fondo12
                .py-5.ps-4.pe-3
                  p Usualmente el proceso tarda alrededor de unos 30 minutos y gracias al efecto remanente que tiene el cloro, el efecto continuo durante horas o incluso días.   
          .col-lg-5.col-md-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/componentes/tema4/desinfeccionagua.svg' alt='Tratamiento de eliminación de patógenos')
              .tarjeta.fondo12
                .py-4.ps-4.pe-5
                  p.mb-4 Este tratamiento permite evitar enfermedades como lo son fiebres tifoideas, disentería y la cólera, aunque es incapaz de eliminar algunos parásitos patógenos, ya que este proceso desinfecta el agua, pero no la purifica por completo.
        p.my-5 El proceso de clorar agua para consumo humano tiene tres etapas, dentro de las cuales existen equipos y procedimientos diferentes. Las etapas de la cloración del agua en una planta de tratamiento se describen en la siguiente tabla: 

        .row.justify-content-center
          .col-10
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Tabla 1.
              span Etapas de Cloración
            .tabla-a.color-acento-contenido.mb-5 
              table
                caption Nota. SENA, 2021.
                thead.fondo21
                  tr
                    th.ancho Etapa
                    th Concepto
                tbody
                  tr
                    td.ancho Precloración
                    td En la etapa de precloración es donde se agrega la cantidad de cloro necesaria en el punto de interrupción para garantizar que el nivel de cloro residual pueda alcanzar niveles de desinfección mas lejanos.
                  tr
                    td.ancho Desinfección en plantas
                    td La etapa de desinfección se realiza dentro del depósito, es allí donde se genera el agua tratada. Se debe determinar el tiempo de contacto para que se mantenga el nivel residual de cloro y así asegurar que no haya una contaminación microbiológica. 
                  tr
                    td.ancho Postcloración
                    td Una vez que el agua haya salido del último tanque es posible adicionar cloro para garantizar que los niveles residuales sean adecuados para el consumo humano. El equipo de control deberá ser el responsable de esta adición. 
        h3.my-4 Curva demanda de cloro
        p.mb-4 Cuando se aplica cloro al agua que tiene agentes conductores, amoniaco y aminas orgánicas se mide y se genera una gráfica se puede obtener una curva como se observa en la imagen 2, esta curva se conoce como la demanda de cloro. Allí se puede observar el incremento exponencial en la demanda de cloro, posteriormente podemos ver una declinación y finalmente un nuevo incremento el cual es conocido como punto de quiebre. 
        .row.justify-content-center
          .col-10
            .bloque-texto-g2.p-3.p-sm-4.p-md-5.fondo14
              .bloque-texto-g__img2(
                :style="{'background-image': `url(${require('@/assets/curso/tema4/imagen1.jpg')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Estos cambios repentinos se presentan porque al inicio se logra satisfacer la demanda del cloro y hace que las monocloraminas y las dicloraminas aumenten, aunque luego disminuyan el segundo incremento se produce por la acción del cloro residual.
            p.my-5 Se debe resaltar que la demanda de cloro será diferente para cada muestra de agua ya que esta dependerá de la dosis de cloro que fue aplicada, de su magnitud y del tiempo de contacto, así mismo como el pH y la temperatura de la misma. En términos generales, cuanto mayor sea el tiempo de contacto y la temperatura del agua, más efectiva será la desinfección.
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure
      img(src='@/assets/curso/intro/1.png', alt='', style="width: 1220px").m-auto

    p.mt-4 El fortalecimiento de las competencias blandas se ha convertido en un elemento fundamental para el desarrollo personal y profesional en los contextos laborales actuales. Las organizaciones demandan cada vez más trabajadores capaces de interactuar de manera efectiva con otras personas, resolver problemas de forma colaborativa y contribuir al logro de objetivos comunes. En este escenario, el trabajo en equipo se consolida como una competencia clave que permite integrar conocimientos, habilidades y experiencias de diferentes individuos para generar resultados colectivos. En el presente componente formativo se abordan los principales fundamentos del trabajo en equipo y su relación con el desarrollo de competencias blandas aplicadas a los contextos organizacionales.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p A lo largo del contenido se analizan aspectos como los roles y las dinámicas dentro de los equipos de trabajo, las habilidades sociales necesarias para la interacción laboral, la comunicación efectiva, la empatía y la gestión emocional en entornos colaborativos. Estos elementos permiten comprender cómo las relaciones interpersonales influyen en el desempeño de los equipos y en la construcción de ambientes laborales positivos. De igual manera, se desarrollan estrategias para la resolución de problemas y la toma de decisiones en equipo, así como la construcción de acuerdos y compromisos orientados al logro de metas comunes. Estos procesos fortalecen la participación de los integrantes del equipo y promueven la responsabilidad individual y compartida dentro de los grupos de trabajo.

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/2.png', alt='', style="width: 500px").m-auto
      .col-lg-5
        p Asimismo, se analizan competencias relacionadas con la creatividad, la iniciativa, la adaptabilidad y la cooperación como factores que contribuyen al desarrollo de equipos más eficientes. El componente formativo orienta la comprensión sobre la importancia de aplicar las competencias blandas en situaciones reales del entorno laboral, considerando que el trabajo colaborativo es un factor determinante para mejorar la productividad organizacional y fortalecer la convivencia en los espacios de trabajo. De esta manera, el desarrollo de estas habilidades contribuye a formar personas capaces de desempeñarse de manera responsable, participativa y efectiva dentro de los equipos de trabajo. 

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-3(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/intro/3.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
              .col-lg
                p.p-2 Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en el ámbito del trabajo colaborativo, se recomienda acceder al recurso audiovisual que acompaña esta sección.


    .row.justify-content-center.align-items-center.mt-4           
          .col-lg-12
            figure(data-aos="fade-down")
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/FTgn1feG5c0?si=1ZAhgaJCmTT7sgOh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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

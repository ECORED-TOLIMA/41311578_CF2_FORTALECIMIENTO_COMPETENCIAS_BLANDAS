<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El trabajo colaborativo representa un elemento fundamental para el fortalecimiento del desempeño organizacional y para la construcción de ambientes laborales basados en la cooperación y el respeto en los diferentes sectores productivos de Colombia. En este sentido, se abordan los principios del trabajo en equipo, las diferencias entre grupo de trabajo y equipo de trabajo, los roles y las dinámicas que se desarrollan al interior del grupo, y las competencias blandas esenciales para el trabajo colaborativo, entre las que se destacan la comunicación efectiva, la empatía, las habilidades sociales y la gestión emocional en contextos laborales del país. De igual manera, se integran estrategias para la resolución de problemas, la toma de decisiones grupales y la construcción de acuerdos orientados al logro de objetivos comunes, resaltando la adaptabilidad y la creatividad como competencias clave para responder a los retos que enfrentan los equipos de trabajo en las organizaciones. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre Competencias blandas aplicadas al trabajo en equipo. El nodo central se fundamenta en cuatro ramas principales: Fundamentos del trabajo en equipo, que incluyen la diferencia entre grupo y equipo de trabajo y los principios del trabajo colaborativo; Competencias blandas, que desarrollan la comunicación efectiva, la empatía y respeto, y las habilidades sociales; Resolución de problemas, que comprende las etapas del proceso, las estrategias de conflicto y las decisiones grupales; y Productividad organizacional, que exige adaptabilidad y creatividad e iniciativa como competencias clave para el desempeño de los equipos en las organizaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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

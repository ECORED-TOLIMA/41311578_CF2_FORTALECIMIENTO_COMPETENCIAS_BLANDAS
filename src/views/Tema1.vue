<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de trabajo en equipo

    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/1.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        p El trabajo en equipo se constituye como una de las competencias fundamentales en los entornos organizacionales contemporáneos, ya que permite integrar conocimientos, habilidades y experiencias de diferentes personas para alcanzar objetivos comunes. A diferencia del trabajo individual, el trabajo en equipo implica cooperación, coordinación y comunicación constante entre los miembros del grupo, lo cual favorece la construcción colectiva de soluciones y el logro de metas compartidas. En este sentido, el trabajo colaborativo se convierte en un elemento clave para mejorar la productividad, fortalecer la convivencia y promover ambientes laborales basados en el respeto y la confianza.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p Asimismo, el trabajo en equipo se fundamenta en principios como la responsabilidad compartida, la participación y la complementariedad de habilidades. Cada integrante aporta desde sus capacidades y conocimientos, lo que permite que las tareas se desarrollen de manera más eficiente y con una mayor diversidad de perspectivas. De acuerdo con Robbins y Judge (2017), los equipos de trabajo bien estructurados logran un mejor desempeño organizacional porque fomentan la cooperación, la toma de decisiones conjunta y el compromiso con los resultados obtenidos.

    p.mt-4 Por otra parte, el desarrollo de equipos de trabajo efectivos requiere el fortalecimiento de diversas competencias blandas que facilitan la interacción entre los integrantes del grupo y contribuyen a la construcción de relaciones interpersonales positivas. A continuación, se presentan las principales competencias que favorecen el trabajo colaborativo dentro de las organizaciones:

    SlyderB.mb-5.mt-4.bg-base4.p-4(:datos="datosSlyder")

    p.mt-4 Estas habilidades facilitan la interacción entre los integrantes del equipo y contribuyen a la construcción de relaciones interpersonales positivas. En consecuencia, comprender los fundamentos del trabajo en equipo permite a las personas desenvolverse de manera más adecuada en contextos sociales, educativos y laborales donde la colaboración se convierte en un factor determinante para el éxito colectivo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El trabajo en equipo se sustenta en diversos elementos que permiten que la interacción entre las personas sea efectiva y orientada al logro de objetivos comunes. Estos elementos facilitan la organización de las tareas, fortalecen la comunicación entre los integrantes y promueven la cooperación dentro del grupo. Cuando los miembros de un equipo comprenden estos fundamentos, es más probable que se genere un ambiente de confianza, participación y compromiso con los resultados. En la tabla 1, se presentan algunos de los principales fundamentos que permiten comprender el funcionamiento del trabajo en equipo y su importancia en contextos personales, académicos y laborales.

    .row.mt-4
      .titulo-sexto.color-acento-contenido.mb-3.mt-4
        h5 Tabla 1.
        span Fundamentos del trabajo en equipo

      .tabla-a.color-acento-contenido
        table
          thead(style="background-color: #A0F7FE")
            tr
              th(style="width: 300px;") Fundamento
              th Descripción
          tbody
            tr(style="background-color: #F6F6F6")
              td.text-start #[b Objetivo común]
              td.text-start El equipo se organiza alrededor de metas compartidas que orientan el trabajo de todos los integrantes.

            tr
              td.text-start #[b Comunicación efectiva]
              td.text-start Permite el intercambio claro de ideas, información y opiniones entre los miembros del equipo.


            tr(style="background-color: #F6F6F6")
              td.text-start #[b Cooperación]
              td.text-start Los integrantes trabajan de manera conjunta apoyándose mutuamente para lograr los objetivos propuestos.

            tr
              td.text-start #[b Responsabilidad compartida]
              td.text-start Cada miembro asume un rol y contribuye al cumplimiento de las tareas asignadas dentro del equipo.


            tr(style="background-color: #F6F6F6")
              td.text-start #[b Confianza]
              td.text-start Se construye a partir del respeto, la transparencia y la seguridad en las capacidades de los demás integrantes.

            tr
              td.text-start #[b Complementariedad de habilidades]
              td.text-start Los miembros del equipo aportan diferentes conocimientos, experiencias y competencias que enriquecen el trabajo colectivo.


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto de trabajo en equipo   

    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/7.svg', alt='', style="width: 380px").m-auto
          .col-lg-8
            p El trabajo en equipo se define como la colaboración organizada de un grupo de personas que comparten un objetivo común y coordinan sus esfuerzos para alcanzarlo de manera eficiente. En este tipo de interacción, cada integrante aporta conocimientos, habilidades y experiencias que contribuyen al desarrollo de las tareas y al cumplimiento de las metas propuestas. A diferencia del trabajo individual, el trabajo en equipo promueve la integración de diferentes perspectivas, lo que permite analizar los problemas desde múltiples puntos de vista y generar soluciones más completas.

            .row.align-items-start.mt-4
              .col-lg-2.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema1/8.svg', style='width: 100px').m-auto
              
              .col
                p En los entornos educativos, sociales y laborales, esta forma de colaboración se considera una estrategia fundamental para mejorar la productividad y fortalecer la convivencia entre las personas. Su funcionamiento efectivo depende de diversos elementos que favorecen la interacción entre los integrantes del grupo, la distribución adecuada de las tareas y la construcción colectiva de resultados. A continuación, se presentan los componentes esenciales del trabajo en equipo, junto con ejemplos que ilustran su aplicación en contextos organizacionales:


    .row.bg-05.mt-4
      .col-12
        .p-5
          .row.align-items-center.p-5
            .tarjeta.bg-9.p-4
              PasosB.color-acento-contenido
                //-Primer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/9.png', alt='')
                    
                  .col-md-6
                    h4 Distribución de tareas 
                    p Organización del trabajo colectivo en función de las fortalezas, conocimientos y habilidades de cada integrante, lo cual facilita la ejecución de procesos más eficientes y organizados. Por ejemplo, al elaborar un informe de gestión, un integrante analiza los datos, otro redacta el documento y un tercero diseña la presentación visual. 

                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/10.png', alt='')
                    
                  .col-md-6
                    h4 Responsabilidad compartida 

                    p Compromiso que asume cada integrante frente a las funciones del grupo, lo cual permite avanzar de forma coordinada hacia las metas colectivas y construir resultados que difícilmente se alcanzarían de manera individual. Por ejemplo, cada miembro analiza un área específica de la organización y presenta sus hallazgos al grupo.

                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/11.png', alt='')
                    
                  .col-md-6
                    h4 Comunicación efectiva

                    p Capacidad de expresar ideas, opiniones e información de forma clara y respetuosa, lo cual facilita la comprensión mutua y la toma de decisiones conjuntas dentro del equipo. Por ejemplo, durante una reunión de planificación, los integrantes exponen sus propuestas, escuchan las observaciones y llegan a una decisión consensuada. 
                    
            
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/12.png', alt='')
                    
                  .col-md-6
                    h4 Empatía

                    p Habilidad para comprender las emociones y perspectivas de otras personas, lo cual permite establecer relaciones interpersonales basadas en la confianza y el reconocimiento del otro. Por ejemplo, cuando un compañero atraviesa una situación difícil, los demás integrantes redistribuyen las tareas para apoyarlo sin afectar los objetivos. 

                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/13.png', alt='')
                    
                  .col-md-6
                    h4 Diversidad de opiniones 

                    p Disposición para escuchar y valorar los diferentes puntos de vista que aportan los integrantes del equipo, lo cual enriquece el análisis colectivo y fortalece la cooperación. Por ejemplo, ante una decisión estratégica, el equipo analiza todas las propuestas y selecciona la alternativa que mejor responde a los objetivos. 


                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/14.png', alt='')
                    
                  .col-md-6
                    h4  Resolución constructiva de conflictos  

                    p Capacidad para gestionar desacuerdos mediante el diálogo y la búsqueda de soluciones concertadas, lo cual contribuye a mantener un ambiente de trabajo armónico y orientado al logro de los objetivos comunes. Por ejemplo, ante una diferencia de criterios sobre la metodología, el grupo abre un espacio de diálogo y define una alternativa conjunta.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p De acuerdo con lo anterior, comprender el concepto de trabajo en equipo permite reconocer que la colaboración efectiva no depende únicamente de la agrupación de personas, sino del desarrollo conjunto de competencias que fortalecen la interacción, la coordinación y el compromiso colectivo. Elementos como la distribución adecuada de tareas, la comunicación clara, la empatía y la capacidad para gestionar diferencias constituyen la base sobre la cual se construyen equipos capaces de alcanzar resultados significativos. De esta manera, el trabajo en equipo se consolida como una competencia clave para enfrentar los retos de los contextos actuales y contribuir al cumplimiento de metas comunes en los ámbitos educativo, social y organizacional.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Grupo de trabajo y equipo de trabajo

    p En los contextos organizacionales y sociales es común utilizar los términos grupo de trabajo y equipo de trabajo como si fueran equivalentes; sin embargo, ambos conceptos presentan diferencias importantes en cuanto a su estructura, funcionamiento y nivel de colaboración entre los integrantes. Un grupo de trabajo está conformado por varias personas que realizan actividades relacionadas dentro de una misma organización o contexto, pero cuyas tareas se desarrollan principalmente de manera individual. En este caso, cada integrante es responsable de sus propias funciones y los resultados obtenidos dependen del desempeño personal de cada miembro.

    p Las siguientes diferencias permiten distinguir con claridad entre el grupo de trabajo y el equipo de trabajo en los contextos organizacionales y sociales:

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/15.svg', style="width: 128px").m-auto
            p.text-center
              b Naturaleza de las tareas 
            p.text-center.mb-0 En el grupo de trabajo las tareas se desarrollan principalmente de manera individual; en el equipo se ejecutan de forma coordinada y conjunta.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/16.svg', style="width: 128px").m-auto
            p.text-center
              b Toma de decisiones 
            p.text-center.mb-0 En el grupo cada integrante responde por sus propias funciones; en el equipo las decisiones se toman de forma colectiva.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/17.svg', style="width: 128px").m-auto
            p.text-center
              b Nivel de comunicación 
            p.text-center.mb-0 En el grupo la interacción es limitada y orientada al cumplimiento individual; en el equipo la comunicación es constante y necesaria para coordinar acciones.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/18.svg', style="width: 128px").m-auto
            p.text-center
              b Responsabilidad 
            p.text-center.mb-0 En el grupo los resultados dependen del desempeño personal de cada miembro; en el equipo se comparten responsabilidades y se buscan resultados colectivos.


          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/19.svg', style="width: 128px").m-auto
            p.text-center
              b Integración de esfuerzos
            p.text-center.mb-0 El grupo puede funcionar de manera organizada pero independiente; el equipo se caracteriza por la integración de habilidades, experiencias y perspectivas diversas.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Por otra parte, un equipo de trabajo se caracteriza por la cooperación activa entre sus integrantes para alcanzar objetivos comunes. A diferencia del grupo de trabajo, en el equipo existe una mayor integración de esfuerzos, ya que las tareas se desarrollan de manera coordinada y las decisiones se toman de forma conjunta. Los miembros del equipo comparten responsabilidades, intercambian ideas y colaboran para resolver problemas, lo que permite generar resultados colectivos que superan el aporte individual de cada integrante.


        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/20.svg', style='width: 100px').m-auto
          
          .col
            p Otra diferencia importante entre ambos conceptos se relaciona con el nivel de comunicación y compromiso que existe entre las personas que participan en la actividad. En un grupo de trabajo la interacción suele ser limitada y está orientada principalmente al cumplimiento de tareas individuales. En cambio, en un equipo de trabajo la comunicación es constante, ya que los integrantes deben coordinar acciones, compartir información y tomar decisiones que contribuyan al logro de los objetivos establecidos.


    p.mt-4 Comprender las diferencias entre grupo de trabajo y equipo de trabajo permite reconocer la importancia de la colaboración y la cooperación dentro de las organizaciones y de los diferentes contextos sociales. A continuación, se presentan las características principales de cada uno:

    SlyderB.mb-5.mt-4.bg-base4.p-4(:datos="datosSlyder2")

    p.mt-4 Por esta razón, el fortalecimiento del trabajo en equipo se considera una competencia clave para mejorar la productividad, la convivencia y la eficacia en los entornos laborales y educativos. Reconocer estas diferencias facilita la identificación del tipo de dinámica que se desarrolla en cada contexto y permite adoptar estrategias adecuadas para fortalecer la cooperación entre las personas. Sobre este aspecto, resulta necesario analizar cómo las organizaciones integran el trabajo en equipo dentro de sus procesos, estructuras y dinámicas operativas, lo cual se aborda en el siguiente apartado.


    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Trabajo en equipo en las organizaciones


    .row.align-items-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/23.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p El trabajo en equipo es un elemento fundamental para el funcionamiento eficiente de las organizaciones, ya que permite integrar los conocimientos, habilidades y experiencias de diferentes personas para alcanzar objetivos comunes. En un entorno organizacional, las tareas y responsabilidades suelen requerir la participación de varios individuos que deben coordinar sus esfuerzos para lograr resultados efectivos. Cuando las personas trabajan de manera colaborativa, es posible optimizar los recursos, mejorar la calidad de las decisiones y fortalecer la capacidad de la organización para responder a los desafíos del entorno.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p El intercambio de ideas, opiniones y experiencias entre los integrantes del equipo favorece la innovación, el aprendizaje colectivo y la construcción de estrategias que permiten mejorar el desempeño organizacional.


    p.mt-4 Además, la labor colaborativa contribuye al fortalecimiento de la comunicación y la cooperación entre los miembros de una organización. A través de este intercambio constante, los integrantes del equipo pueden analizar diversas perspectivas y generar soluciones más completas frente a los problemas que se presentan, lo cual impulsa la mejora continua de los procesos internos.

    .row.align-items-center(data-aos="fade-down")
      .col-lg-8
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base4(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/24.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
                  .col-lg
                    p Otro aspecto relevante del trabajo en equipo en las organizaciones es que promueve un mayor compromiso de los colaboradores con las metas institucionales. Cuando las personas se sienten parte de un equipo y reconocen que su aporte es valioso para el logro de los objetivos, aumenta su motivación y su sentido de pertenencia hacia la organización. Esta situación contribuye a fortalecer el clima laboral, mejorar las relaciones interpersonales y fomentar una cultura organizacional basada en la cooperación y el respeto.

        p.mt-4 Finalmente, la colaboración entre áreas y profesionales permite que las organizaciones desarrollen una mayor capacidad de adaptación frente a los cambios del entorno. Desde esta perspectiva, se identifican los principales aportes del trabajo en equipo al fortalecimiento organizacional:
            
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/25.png', alt='', style="width: 480px").m-auto
          
    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/26.png', alt='', style="width: 390px").m-auto
          .col-lg-8
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 1
                p.mb-0 Identificación de oportunidades de mejora en los procesos internos de la organización. 
              
              hr(style="margin-top: -3px")
        
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 2
                p.mb-0 Resolución de problemas mediante el análisis colectivo de las situaciones que se presentan. 

              hr(style="margin-top: -3px")
        
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 3
                p.mb-0 Toma de decisiones estratégicas fundamentadas en la participación de los integrantes del equipo. 

              hr(style="margin-top: -3px")

              li 
                .lista-ol--cuadro__vineta
                  span.text-black 4
                p.mb-0 Fortalecimiento de la innovación a través del intercambio de conocimientos y experiencias. 
              
              hr(style="margin-top: -3px")
        
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 5
                p.mb-0 Mejora de la productividad mediante la coordinación eficiente de las actividades. 

              hr(style="margin-top: -3px")
        
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 6
                p.mb-0 Crecimiento sostenible de las organizaciones en contextos cada vez más dinámicos y competitivos.
        
    p.mt-4 Así, el trabajo en equipo se convierte en una herramienta clave para el desarrollo organizacional, al integrar las capacidades individuales en función de los objetivos compartidos que fortalecen tanto la eficiencia operativa como la convivencia en los espacios laborales.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Beneficios del trabajo colaborativo

    p El trabajo colaborativo representa una estrategia fundamental para mejorar el desempeño laboral dentro de las organizaciones, ya que promueve la interacción entre las personas y el aprovechamiento de las capacidades individuales en favor de objetivos comunes. Cuando los trabajadores colaboran entre sí, se facilita el intercambio de conocimientos, experiencias y habilidades que enriquecen el desarrollo de las actividades. Este proceso permite que las tareas se realicen de manera más eficiente y que los resultados obtenidos reflejen el esfuerzo conjunto de los integrantes del equipo.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Asimismo, el trabajo colaborativo contribuye a fortalecer el aprendizaje dentro del entorno laboral. Al interactuar con otros compañeros, las personas tienen la oportunidad de compartir buenas prácticas, aprender nuevas formas de resolver problemas y desarrollar habilidades que favorecen su crecimiento profesional. Este intercambio constante de información y experiencias permite que los equipos se adapten con mayor facilidad a los cambios y que las organizaciones puedan mejorar sus procesos y resultados.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/27.svg', style='width: 100px').m-auto
          
          .col
            p Otro aspecto relevante del trabajo colaborativo es el fortalecimiento de las relaciones interpersonales en el ambiente laboral. La cooperación entre los miembros de un equipo promueve valores y actitudes que contribuyen a generar un clima organizacional más positivo. Desde esta perspectiva, se destacan cuatro elementos que la colaboración aporta al entorno de trabajo:

    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/28.png', alt='', style="width: 480px").m-auto
          .col-lg-8
            .row.justify-content-center
              .col-lg-12
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-1")
                  .tarjeta.clr--pink02.p-4(titulo="Relaciones interpersonales")
                    .row.align-items-center
                      p La interacción constante entre los integrantes del equipo fortalece los vínculos laborales, lo cual facilita la coordinación de las actividades y la construcción de un ambiente de trabajo más armónico. 
            
                  div(titulo="Valores compartidos")
                    .row.align-items-center
                      p La cooperación promueve el respeto, la confianza y la empatía entre los miembros del equipo, lo cual favorece una convivencia laboral basada en el reconocimiento mutuo. 
            
                  div(titulo="Clima organizacional")
                    .row.align-items-center
                      p Un ambiente de trabajo fundamentado en la colaboración genera condiciones más favorables para el desempeño de las personas, lo cual repercute de manera positiva en los resultados del equipo. 
            
                  div(titulo="Motivación y compromiso ")
                    .row.align-items-center
                      p Cuando los colaboradores perciben un entorno de cooperación y participación, aumenta su sentido de pertenencia y su disposición para contribuir al cumplimiento de las metas institucionales.


    p.mt-4 De igual manera, el trabajo colaborativo favorece la innovación y la toma de decisiones más efectivas dentro de las organizaciones. Al integrar diferentes puntos de vista y experiencias, los equipos pueden analizar las situaciones desde diversas perspectivas y proponer soluciones más creativas y acertadas. En consecuencia, la labor conjunta no solo mejora el desempeño laboral de los individuos, sino que también fortalece la capacidad de las organizaciones para enfrentar los retos del entorno y alcanzar sus objetivos de manera sostenible.


    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/29.svg', alt='', style="width: 480px").m-auto
          .col-lg-8
            p Considerando los aspectos desarrollados en los párrafos anteriores, es posible identificar los principales aportes que la colaboración genera en el desempeño laboral y en el fortalecimiento de los equipos dentro de las organizaciones. En este sentido, se destacan los siguientes beneficios del trabajo colaborativo:

            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Favorece el intercambio de conocimientos y experiencias entre los miembros del equipo.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Permite resolver problemas de manera más eficiente mediante la participación colectiva.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Fortalece la creatividad y la generación de nuevas ideas dentro del equipo.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Facilita la distribución de tareas de acuerdo con las habilidades de cada integrante.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Contribuye al desarrollo de habilidades sociales y competencias blandas.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Incrementa la productividad y la eficiencia en el cumplimiento de las actividades laborales.

    p.mt-4 De acuerdo con lo anterior, el trabajo colaborativo constituye un factor determinante para el crecimiento de las organizaciones y el desarrollo profesional de las personas que las integran. Su práctica constante fortalece tanto la eficiencia operativa como la convivencia en los espacios laborales, al promover relaciones basadas en la cooperación, el respeto y el compromiso colectivo. Estos elementos permiten comprender por qué la colaboración se consolida como una competencia esencial en los contextos organizacionales actuales.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Comunicación efectiva',
        texto:
          'Capacidad de transmitir ideas, opiniones e información de forma clara y respetuosa, lo cual facilita la comprensión mutua y la coordinación de actividades dentro del equipo.',
        imagen: require('@/assets/curso/tema1/2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Empatía',
        texto:
          'Habilidad para comprender las emociones y perspectivas de otras personas, lo cual permite establecer relaciones interpersonales basadas en la confianza y el reconocimiento del otro. ',
        imagen: require('@/assets/curso/tema1/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Respeto por la diversidad de opiniones',
        texto:
          'Disposición para escuchar y valorar los diferentes puntos de vista que aportan los integrantes del equipo, lo cual enriquece el análisis colectivo y fortalece la cooperación. ',
        imagen: require('@/assets/curso/tema1/4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Resolución constructiva de conflictos',
        texto:
          'Capacidad para gestionar desacuerdos mediante el diálogo y la búsqueda de soluciones concretadas, lo cual contribuye a mantener un ambiente de trabajo armónico y orientado al logro de los objetivos comunes.',
        imagen: require('@/assets/curso/tema1/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Grupo de trabajo ',
        texto:
          'Conjunto de personas que cumplen funciones de manera organizada pero independiente, donde cada integrante responde por sus propias tareas y la interacción entre los miembros es limitada.',
        imagen: require('@/assets/curso/tema1/21.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Equipo de trabajo',
        texto:
          'Forma de organización en la que los integrantes coordinan sus esfuerzos para alcanzar objetivos comunes, a través de la responsabilidad compartida, la comunicación constante y la búsqueda conjunta de resultados.',
        imagen: require('@/assets/curso/tema1/22.png'),
        // leyendaImagen: 'Leyenda de la imagen',
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

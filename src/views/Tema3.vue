<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Competencias blandas para el trabajo colaborativo

    figure
      img(src='@/assets/curso/tema3/1.png', alt='', style="width: 1220px").m-auto

    p.mt-4 Las competencias blandas son habilidades personales y sociales que permiten a las personas interactuar de manera efectiva con los demás en diferentes contextos de la vida cotidiana. En el ámbito laboral y profesional, estas competencias adquieren una gran relevancia, ya que facilitan la cooperación, la comunicación y la resolución de problemas dentro de los equipos de trabajo. El desarrollo de competencias blandas favorece la construcción de ambientes de trabajo más colaborativos, donde los integrantes del equipo pueden compartir ideas, coordinar acciones y trabajar de manera conjunta para alcanzar objetivos comunes.

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/2.png', alt='', style="width: 480px").m-auto
      .col-lg-6
        p En el trabajo colaborativo, las competencias blandas permiten que los miembros del equipo se comuniquen de manera clara, respeten las opiniones de los demás y participen activamente en la toma de decisiones. Habilidades como la empatía, la escucha activa, la capacidad de adaptación y el respeto por la diversidad de ideas contribuyen a fortalecer la interacción entre los integrantes del equipo. Estas competencias facilitan la construcción de relaciones interpersonales basadas en la confianza y la cooperación, lo cual resulta fundamental para el buen funcionamiento de los equipos de trabajo.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color3.p-4
                  p Cuando las personas desarrollan habilidades para comunicarse, colaborar y resolver conflictos de manera constructiva, se favorece la productividad y se generan ambientes laborales más positivos.

    .row.justify-content-center  
      .col-lg-10 
        p.mt-4 Por esta razón, el fortalecimiento de las competencias blandas se considera un elemento clave para mejorar el desempeño de los equipos en los entornos laborales y profesionales. Cuando los integrantes de un equipo incorporan estas habilidades en su desempeño diario, se generan condiciones favorables que fortalecen la dinámica del grupo y facilitan el cumplimiento de los objetivos propuestos. En este sentido, se identifican cinco aportes fundamentales que estas competencias generan en el trabajo colaborativo:


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
                      img(src='@/assets/curso/tema3/3.png', alt='')
                    
                  .col-md-6
                    h4 Mejora de la comunicación 

                    p El desarrollo de habilidades interpersonales permite que la información circule de manera clara y oportuna entre los integrantes del equipo, lo cual reduce los malentendidos y fortalece la coordinación de las actividades.

                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/4.png', alt='')
                    
                  .col-md-6
                    h4 Fortalecimiento de la confianza 

                    p Cuando los miembros del equipo practican la escucha, el respeto y la empatía en su interacción diaria, se construyen vínculos laborales más sólidos que favorecen la cooperación y el apoyo mutuo.

                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/5.png', alt='')
                    
                  .col-md-6
                    h4 Prevención de conflictos

                    p La aplicación de estas habilidades permite identificar y abordar las diferencias de manera oportuna, lo cual contribuye a mantener un ambiente de trabajo armónico y orientado al logro de las metas colectivas.
                    
            
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/6.png', alt='')
                    
                  .col-md-6
                    h4 Incremento de la productividad 

                    p Los equipos que integran competencias blandas en sus procesos de trabajo logran coordinar sus esfuerzos con mayor eficiencia, lo cual se refleja en la calidad de los resultados obtenidos.

                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/7.png', alt='')
                    
                  .col-md-6
                    h4 Construcción de ambientes positivos 

                    p El ejercicio constante de estas habilidades favorece la generación de espacios laborales basados en el respeto, la participación y la colaboración, lo cual fortalece el sentido de pertenencia y el compromiso con los objetivos del equipo.


    .row.align-items-center(data-aos="fade-down")
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Con el propósito de fortalecer la capacidad de interacción y colaboración en los entornos laborales, se presenta a continuación el recurso de audio que desarrolla, de manera clara y estructurada, la importancia de las competencias blandas en el trabajo en equipo. A través de este podcast es posible identificar la relevancia de la inteligencia emocional, el asertividad y la empatía como herramientas clave para optimizar la comunicación, facilitar la resolución de conflictos y potenciar la productividad colectiva en los contextos cotidianos y profesionales.

        .row.mt-4.bg-r8.bg-base.p-2.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/36.svg', alt='', style="width: 230px").m-auto
          .col-lg-8
            p(style="color: #FFDFFC")
              b Pódcast

            p.text-white Lo invitamos a escuchar el siguiente Pódcast:

            .row.justify-content-center.mt-4.text-white.bg-base
              .tarjeta.h-100
                TarjetaAudio.color-acento-botones.bg-base.mb-3(
                texto="Pódcast Instruccional"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              )

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/8.png', alt='', style="width: 480px").m-auto
          

    p.mt-4 Una vez comprendida la importancia de las competencias blandas en el trabajo colaborativo, resulta pertinente identificar de manera específica las habilidades que facilitan la interacción entre los miembros de un equipo. Cada una de estas competencias cumple una función particular que contribuye al fortalecimiento de la comunicación, la cooperación y la convivencia dentro del grupo. En la siguiente tabla se presentan las competencias blandas más relevantes para el trabajo colaborativo, junto con su descripción y su aporte al desempeño del equipo:


    .row.mt-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Competencias blandas para el trabajo colaborativo

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #A0F7FE")
              tr
                th(style="width: 300px;") Competencia blanda
                th Descripción
                th Importancia en el trabajo colaborativo
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start #[b Comunicación efectiva]
                td.text-start Capacidad de expresar ideas y escuchar a los demás de manera clara y respetuosa.
                td.text-start Facilita el intercambio de información y la comprensión entre los integrantes del equipo.

              tr
                td.text-start #[b Empatía]
                td.text-start Habilidad para comprender las emociones y perspectivas de otras personas.
                td.text-start Favorece el respeto y mejora las relaciones interpersonales dentro del equipo.


              tr(style="background-color: #F6F6F6")
                td.text-start #[b Trabajo en equipo]
                td.text-start Capacidad para colaborar con otros en el desarrollo de tareas y objetivos comunes.
                td.text-start Permite coordinar esfuerzos y fortalecer la cooperación entre los miembros del grupo.

              tr
                td.text-start #[b Adaptabilidad]
                td.text-start Habilidad para ajustarse a cambios, nuevas ideas o diferentes formas de trabajo.
                td.text-start Facilita la respuesta del equipo frente a situaciones nuevas o desafíos organizacionales.

              tr(style="background-color: #F6F6F6")
                td.text-start #[b Resolución de conflictos]
                td.text-start Capacidad para gestionar desacuerdos mediante el diálogo y la búsqueda de soluciones.
                td.text-start Contribuye a mantener un ambiente de trabajo armonioso y productivo.

              tr
                td.text-start #[b Responsabilidad]
                td.text-start Compromiso con el cumplimiento de las tareas y los objetivos del equipo.
                td.text-start Garantiza la participación de los integrantes en el trabajo colaborativo.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p El reconocimiento de estas competencias permite comprender que el desempeño de un equipo no depende exclusivamente de los conocimientos técnicos de sus integrantes, sino también del desarrollo de habilidades que fortalecen la interacción y la convivencia dentro del grupo. Cuando estas competencias se aplican de manera constante en el entorno laboral, se generan condiciones favorables para la cooperación, la confianza y el cumplimiento de los objetivos colectivos. En el siguiente apartado se analizan las habilidades sociales y su papel dentro del trabajo en equipo.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Comunicación efectiva en equipos de trabajo

    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/9.png', alt='', style="width: 380px").m-auto
          .col-lg-8
            p La comunicación efectiva es uno de los pilares fundamentales para el funcionamiento adecuado de los equipos de trabajo, ya que permite que la información circule de manera clara entre los integrantes del grupo. A través de la comunicación, los miembros del equipo pueden compartir ideas, expresar opiniones, coordinar actividades y establecer acuerdos que orienten el desarrollo de las tareas. Cuando este proceso se desarrolla de forma organizada y respetuosa, se facilita la comprensión mutua y se fortalece la colaboración entre las personas que participan en el equipo.

            .row.align-items-start.mt-4
              .col-lg-2.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema3/10.svg', style='width: 90px').m-auto
              
              .col
                p De igual manera, la comunicación dentro de los equipos de trabajo requiere habilidades que van más allá de la simple transmisión de mensajes. Estas habilidades permiten comprender diferentes puntos de vista, valorar las aportaciones de los demás y construir soluciones colectivas frente a los retos que enfrenta el equipo. Desde esta perspectiva, se destacan las siguientes habilidades comunicativas esenciales para el trabajo colaborativo:

    .row.justify-content-center.mt-4
      .col-lg-6
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Escucha atenta")
            .col-md-12.mb-4.mb-md-0
              p Capacidad de prestar atención al mensaje que transmiten los demás integrantes del equipo, lo cual permite comprender sus ideas y necesidades antes de formular una respuesta.
    
          .row(numero="2" titulo="Interpretación adecuada")
            .col-md-12.mb-4.mb-md-0
              p Habilidad para analizar correctamente la información recibida, considerando tanto el contenido del mensaje como el contexto en el que se produce la interacción.
    
          .row(numero="3" titulo="Respuesta constructiva")
            .col-md-12.mb-4.mb-md-0
              p Capacidad de responder de forma clara y respetuosa frente a las ideas y opiniones de los demás, lo cual contribuye a fortalecer el diálogo y la cooperación dentro del grupo.
    
      .col-lg-6.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/11.png', alt='', style="width: 100%").m-auto

    p.mt-4 En este sentido, una comunicación clara y oportuna también contribuye a mejorar diferentes dimensiones de la interacción dentro del equipo. Cuando los integrantes comparten información de manera precisa y mantienen espacios de diálogo abiertos, se generan condiciones favorables para el desarrollo de las actividades. Sobre este aspecto, se identifican tres dimensiones clave de la comunicación efectiva en el trabajo colaborativo:

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
          
        h4.text-center Reducción de malentendidos 
        p Una comunicación clara y oportuna permite disminuir los errores de interpretación que pueden surgir durante el desarrollo de las actividades, lo cual favorece la fluidez en los procesos de trabajo y la confianza entre los integrantes del equipo.

      .col-md.tarjeta.bg-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
          
        h4.text-center Coordinación de tareas
        p El intercambio preciso de información facilita la organización y distribución de las actividades dentro del grupo, lo cual permite que los esfuerzos se orienten de manera eficiente hacia el cumplimiento de los objetivos establecidos.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/14.svg', alt='Texto que describa la imagen')
          
        h4.text-center Lenguaje verbal y no verbal 
        p La utilización adecuada tanto de las palabras como de los gestos, posturas y expresiones corporales contribuye a que los mensajes sean interpretados de forma correcta, lo cual fortalece la interacción y el entendimiento mutuo dentro del equipo.



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Los equipos que promueven el diálogo, la escucha y el respeto por las opiniones de los demás logran desarrollar procesos de trabajo más organizados, participativos y orientados al cumplimiento de las metas colectivas.

    p.mt-4 De acuerdo con lo anterior, fomentar una comunicación efectiva dentro de los equipos de trabajo contribuye a mejorar el desempeño colectivo y el ambiente laboral. Esta habilidad se convierte en una herramienta esencial para fortalecer el trabajo colaborativo y alcanzar los objetivos establecidos en los entornos laborales y profesionales. En el siguiente apartado se analiza la importancia de la empatía y el respeto en la interacción laboral.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Empatía y respeto en la interacción laboral

    .row.align-items-center(data-aos="fade-down")
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/15.svg', alt='', style="width: 390px").m-auto
          .col-lg-8
            p La empatía y el respeto son valores fundamentales para fortalecer las relaciones interpersonales dentro de los entornos laborales. La empatía se refiere a la capacidad de comprender las emociones, pensamientos y situaciones que experimentan otras personas, lo que permite establecer relaciones más humanas y comprensivas dentro de los equipos de trabajo. Por su parte, el respeto implica reconocer la dignidad, las ideas y las diferencias de cada individuo, promoviendo un trato adecuado entre los integrantes de una organización.

            .row.align-items-start.mt-4
              .col-lg-2.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema3/16.svg', style='width: 80px').m-auto
              
              .col
                p En los espacios laborales, la práctica de la empatía facilita la construcción de ambientes de trabajo más colaborativos y armoniosos. Este proceso se desarrolla de manera progresiva a través de acciones que fortalecen la confianza y la cooperación entre los integrantes del equipo. En este sentido, se identifican los pasos que describen cómo la empatía se integra en la dinámica del trabajo colaborativo:


    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/17.svg', style="width: 128px").m-auto
            p.text-center
              b Comprensión
            p.text-center.mb-0 Los integrantes del equipo procuran comprender las situaciones personales y laborales que experimentan sus compañeros, lo cual permite identificar sus necesidades y perspectivas.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/18.svg', style="width: 128px").m-auto
            p.text-center
              b Apoyo y solidaridad 
            p.text-center.mb-0 A partir de esa comprensión, se generan actitudes de apoyo y cooperación que fortalecen los vínculos entre los miembros del grupo y favorecen un ambiente de trabajo más humano.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/19.svg', style="width: 128px").m-auto
            p.text-center
              b Confianza mutua 
            p.text-center.mb-0 Las acciones de apoyo constante contribuyen a fortalecer la confianza entre los integrantes, lo cual facilita la comunicación abierta y la coordinación de las actividades del equipo.

          .tarjeta.bg-04.p-4.text-white
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/20.svg', style="width: 128px").m-auto
            p.text-center
              b Reconocimiento y valoración
            p.text-center.mb-0 Cuando cada persona se siente valorada y reconocida dentro del grupo, se incrementa su compromiso con las metas colectivas y se fortalece el sentido de pertenencia hacia el equipo.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Del mismo modo, el respeto en la interacción laboral implica aceptar la diversidad de opiniones, experiencias y formas de pensar que existen dentro de los equipos de trabajo. Las organizaciones están conformadas por personas con diferentes conocimientos, culturas y perspectivas, por lo que esta competencia se convierte en un elemento clave para garantizar una convivencia adecuada. Desde esta perspectiva, se destacan las prácticas que favorecen la interacción respetuosa en los entornos laborales:


    .row.align-items-center(data-aos="fade-down")        
      .col-lg-8
        .row.justify-content-center
          .col-lg-12
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-1")
              .tarjeta.clr--pink02.p-4(titulo="Aceptación de la diversidad")
                .row.align-items-center
                  p Reconocer y valorar las diferentes opiniones, experiencias y formas de pensar que aportan los integrantes del equipo, lo cual enriquece el análisis colectivo y fortalece la cooperación.
        
              div(titulo="Escucha respetuosa")
                .row.align-items-center
                  p Prestar atención a las ideas y propuestas de los demás integrantes sin interrumpir ni descalificar, lo cual favorece un ambiente de diálogo abierto y constructivo.
        
              div(titulo="Prevención de la discriminación")
                .row.align-items-center
                  p Evitar actitudes que excluyan o menosprecien a otros integrantes del equipo por sus diferencias, lo cual contribuye a mantener una convivencia laboral basada en la equidad.
        
              div(titulo="Trato cordial y profesional")
                .row.align-items-center
                  p Mantener una comunicación respetuosa y amable en la interacción diaria con los compañeros, lo cual fortalece las relaciones interpersonales y genera un clima laboral positivo.

      .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema3/21.png', alt='', style="width: 390px").m-auto
    



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color3.p-4
              p Cuando las personas desarrollan la empatía y el respeto como habilidades sociales, se generan ambientes laborales más positivos que favorecen la cooperación, la comunicación y el logro de objetivos comunes.


    p.mt-4 De acuerdo con lo anterior, promover la empatía y el respeto dentro de los equipos de trabajo contribuye a mejorar la comunicación, fortalecer las relaciones interpersonales y prevenir conflictos innecesarios. Estas competencias se consolidan como herramientas esenciales para el trabajo colaborativo y la convivencia en los entornos laborales y profesionales. En el siguiente apartado se analiza la gestión emocional y su importancia en los contextos colaborativos.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Gestión emocional en contextos colaborativos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión emocional hace referencia a la capacidad que tienen las personas para reconocer, comprender y regular sus emociones en diferentes situaciones de la vida cotidiana. En los contextos colaborativos, esta habilidad adquiere una gran importancia, ya que el trabajo en equipo implica la interacción constante entre personas con diferentes opiniones, experiencias y formas de pensar. Cuando los integrantes de un equipo logran gestionar adecuadamente sus emociones, se favorece una comunicación más clara y se fortalecen las relaciones interpersonales dentro del grupo.


    p.mt-4 En los equipos de trabajo, las emociones pueden influir de manera significativa en la forma en que las personas se comunican, toman decisiones y enfrentan los desafíos laborales. Existen situaciones frecuentes que pueden generar reacciones emocionales que afectan la dinámica del equipo. En este sentido, se identifican tres escenarios comunes y las emociones que pueden producir:


    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/23.svg', alt='Texto que describa la imagen')
          
        h4.text-center Presión por cumplir metas 
        p Las exigencias relacionadas con plazos de entrega y resultados esperados pueden generar estrés y ansiedad entre los integrantes del equipo, lo cual afecta la concentración y la calidad del trabajo realizado.

      .col-md.tarjeta.bg-2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/24.svg', alt='Texto que describa la imagen')
          
        h4.text-center Desacuerdos entre compañeros 
        p Las diferencias de criterio u opinión durante el desarrollo de las actividades pueden producir frustración o tensión, lo cual dificulta la comunicación y la coordinación dentro del grupo.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/25.svg', alt='Texto que describa la imagen')
          
        h4.text-center Cambios en las tareas
        p Las modificaciones inesperadas en las funciones o en los procesos de trabajo pueden generar incertidumbre y preocupación, lo cual afecta la estabilidad emocional y la disposición de los integrantes del equipo.

    p.mt-4 Por esta razón, desarrollar habilidades para gestionar las emociones permite responder de manera más equilibrada ante estas situaciones y contribuir a mantener un ambiente de trabajo respetuoso y colaborativo. Esta capacidad contribuye al fortalecimiento de competencias como la comunicación asertiva y la capacidad de negociación. Cuando las personas aprenden a reconocer sus emociones y a comprender las de los demás, la interacción dentro del equipo se desarrolla de manera más consciente y respetuosa, lo cual facilita la construcción de relaciones laborales basadas en la confianza y el apoyo mutuo.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La gestión emocional se convierte en un elemento clave para el desarrollo del trabajo colaborativo y para el logro de objetivos dentro de los entornos laborales y profesionales.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/37.svg', style='width: 100px').m-auto
          
          .col
            p En relación con lo anterior, el manejo adecuado de las emociones en los contextos colaborativos favorece la construcción de ambientes laborales más positivos y productivos. Los equipos que desarrollan estas habilidades logran enfrentar los desafíos de manera más efectiva y fortalecer su desempeño colectivo. Con este propósito, se presentan las principales estrategias para la gestión emocional en el trabajo colaborativo:

    .row.justify-content-center.bg-03
      .col-11
        .p-1
          .row.align-items-center
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/38.png',  style='width: 396px').m-auto
    
            .col-lg-8
              SlyderF.p-5(columnas="col-lg-6 col-xl-6")
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/26.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 A. Reconocer las emociones propias antes de reaccionar ante una situación laboral.
                       
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/27.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 B. Practicar la escucha activa para comprender las emociones y opiniones de los demás.
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/28.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 C. Mantener una actitud de respeto frente a las diferencias de opinión dentro del equipo.
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/29.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 D. Expresar las emociones de manera clara y adecuada mediante la comunicación asertiva.
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/30.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 E. Evitar respuestas impulsivas ante situaciones de tensión o desacuerdo.
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/31.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 F. Buscar soluciones conjuntas cuando se presentan conflictos dentro del equipo.
                
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/32.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 G. Promover el diálogo y la reflexión antes de tomar decisiones importantes.
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/33.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 H. Fomentar un ambiente de trabajo basado en la confianza y el apoyo mutuo. 
    
                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/33.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 I. Desarrollar habilidades de autocontrol frente a situaciones de estrés o presión laboral.

                .tarjeta.bg-3.p-4
                  .row.justify-content-center
                    .col-8
                      img(src='@/assets/curso/tema3/34.svg', style="width: 96px").m-auto
                  p.text-center.mb-0 J. Valorar el aporte de los demás miembros del equipo y reconocer sus esfuerzos.



    p.mt-4 De acuerdo con lo anterior, la gestión emocional constituye una competencia fundamental para fortalecer la interacción entre los integrantes de un equipo y mejorar la dinámica del trabajo colaborativo. Su práctica constante permite que las personas respondan de manera equilibrada frente a los desafíos del entorno laboral y contribuyan a la construcción de espacios de trabajo más armónicos. En el siguiente apartado se analizan las estrategias de resolución de problemas y toma de decisiones en equipo.


</template>

<script>
export default {
  name: 'Tema3',
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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Competencias blandas en acción',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar la apropiación de los conceptos fundamentales del componente formativo mediante preguntas de selección múltiple sobre el trabajo en equipo y competencias blandas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por trabajo en equipo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar tareas de forma individual sin coordinación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Colaboración organizada entre varias personas para alcanzar objetivos comunes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Delegar todas las tareas a un líder.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competir entre los miembros del grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El principio fundamental que permite generar un ambiente de seguridad y respeto en el equipo es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La competencia entre compañeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El individualismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La jerarquía rígida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La comunicación y confianza.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la diferencia entre grupo de trabajo y equipo de trabajo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El equipo trabaja con cooperación activa e integración de esfuerzos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El grupo siempre tiene un número mayor de integrantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El grupo toma decisiones de forma colectiva en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El equipo carece de objetivos definidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de las siguientes es una competencia blanda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manejo de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empatía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué capacidad permite expresar opiniones y sentimientos de manera clara y respetuosa, sin agredir ni someterse a los demás:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Liderazgo organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asertividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organización de tareas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Productividad laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'La comunicación efectiva dentro de un equipo de trabajo se facilita mediante:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El intercambio claro, preciso y oportuno de información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La reducción drástica de reuniones de coordinación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La omisión de opiniones divergentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El desarrollo de las actividades de forma aislada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué función principal debe cumplir el líder o coordinador dentro de un equipo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las sugerencias de los demás miembros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar las actividades y facilitar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar todas las tareas de manera individual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar asumir responsabilidades sobre los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El compromiso colectivo de los integrantes para responder conjuntamente por las metas se denomina:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responsabilidad individual restringida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deslinde de compromisos grupales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Autonomía operativa absoluta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Responsabilidad compartida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es el primer paso para resolver un problema en equipo?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar el problema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Discutir sin analizar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar la situación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tomar decisiones rápidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El mecanismo más efectivo para gestionar desacuerdos y conflictos internos es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar el contacto o la comunicación entre los involucrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diálogo abierto y la negociación constructiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar la situación hasta que se resuelva por sí sola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Imponer decisiones de manera autoritaria sobre los demás.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué implica la toma de decisiones grupales?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una sola persona decide.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar opiniones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integrar diferentes perspectivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Trabajar individualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La capacidad de una persona para ajustarse con eficacia a nuevos entornos o cambios laborales se llama:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Adaptabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Creatividad aplicada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Liderazgo situacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autoridad jerárquica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el factor principal que potencia la productividad organizacional en la actualidad?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La falta sistemática de coordinación entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El trabajo colaborativo y la cooperación interna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El individualismo como única forma de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La presencia de conflictos no resueltos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Un beneficio directo del trabajo colaborativo en el desempeño laboral es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menor comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menor participación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Menos cooperación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejor intercambio de conocimientos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué habilidad permite controlar las emociones en situaciones laborales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión emocional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Productividad técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Autoridad de mando.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Competencia individual externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué elemento fortalece la confianza dentro del equipo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falta de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Respeto entre los integrantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Competencia interna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Individualismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permite la creatividad dentro del contexto del trabajo colaborativo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar opiniones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar cambios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar nuevas ideas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la participación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'El rol específico encargado de facilitar el diálogo y la búsqueda de acuerdos ante conflictos es:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediador.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Observador externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutor de tareas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analista de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'La competencia blanda que favorece la construcción de relaciones interpersonales positivas es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autoridad jerárquica estricta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Competitividad individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empatía y habilidades sociales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control operativo absoluto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué acción contribuye de manera determinante al logro de los objetivos estratégicos de una organización?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El fomento del trabajo colaborativo y participativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El desarrollo exclusivo del trabajo de forma aislada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La falta sistemática de coordinación entre los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La promoción de conflictos constantes entre áreas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

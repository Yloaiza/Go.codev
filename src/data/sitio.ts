// =====================================================================
//  TODO EL TEXTO EDITABLE DEL SITIO VIVE AQUÍ (y los proyectos en
//  src/content/proyectos/). Cambia lo que quieras y guarda.
// =====================================================================

export const sitio = {
  nombre: 'Go.Codev',
  lema: 'Código con buena vibra',
  titulo: 'Go.Codev | Software a la medida para negocios y empresas',
  descripcion:
    'Desarrollamos páginas web, apps y sistemas a la medida para negocios y empresas. Te hablamos claro, sin tecnicismos, y cumplimos lo que prometemos.',

  // ⚠️ CAMBIA ESTOS TRES DATOS ANTES DE PUBLICAR
  contacto: {
    whatsapp: '573013562679', // solo números, con indicativo de país (Colombia = 57)
    correo: 'loaizaagudeloy@gmail.com',
    instagram: 'go.codev', // tu usuario, sin @
  },

  historia:
    'Nacimos con una idea simple: que tener software propio sea fácil de entender para cualquier negocio, sin importar su tamaño.',
};

export const servicios = [
  {
    icono: 'web',
    titulo: 'Páginas web',
    texto: 'Sitios rápidos, claros y pensados para que tus clientes te encuentren y te escriban.',
  },
  {
    icono: 'app',
    titulo: 'Apps móviles',
    texto: 'Aplicaciones para que tu equipo o tus clientes tengan tu negocio en el bolsillo.',
  },
  {
    icono: 'sistema',
    titulo: 'Sistemas a la medida',
    texto: 'Inventarios, reservas, facturación, paneles de control: el sistema que se adapta a cómo trabajas.',
  },
  {
    icono: 'rayo',
    titulo: 'Automatización',
    texto: 'Dejamos que el software haga las tareas repetitivas para que tú te dediques a vender.',
  },
];

export const pasos = [
  { titulo: 'Conversamos', texto: 'Escuchamos tu negocio y tu idea. Sin compromiso y sin palabras raras.' },
  { titulo: 'Propuesta clara', texto: 'Te explicamos qué vamos a hacer, en cuánto tiempo y cuánto cuesta, antes de empezar.' },
  { titulo: 'Desarrollo con avances', texto: 'Te mostramos el progreso por etapas para que puedas opinar y ajustar a tiempo.' },
  { titulo: 'Entrega y apoyo', texto: 'Lanzamos tu proyecto y te acompañamos después para resolver dudas y mejorarlo.' },
];

export const valores = [
  { titulo: 'Hablamos claro', texto: 'Sin tecnicismos ni letra pequeña. Entiendes lo que se está construyendo.' },
  { titulo: 'Cumplimos lo que prometemos', texto: 'Fechas y alcance acordados desde el inicio, con avances a lo largo del camino.' },
  { titulo: 'Código con buena vibra', texto: 'Trabajar con nosotros es ligero y cercano, y el resultado es serio y profesional.' },
];

export const frases = [
  'Páginas web',
  'Apps móviles',
  'Sistemas a la medida',
  'Automatización',
  'Código con buena vibra',
];

export const preguntas = [
  {
    p: '¿Cuánto cuesta un proyecto?',
    r: 'Depende del alcance: no es lo mismo una página informativa que un sistema con usuarios, pagos o reportes. Primero conversamos, y luego te enviamos una cotización clara y sin costo. Sabes cuánto vale todo antes de empezar, sin cobros sorpresa.',
  },
  {
    p: '¿Cuánto tarda?',
    r: 'Una página web suele estar lista en pocos días o un par de semanas. Una app o un sistema a la medida toma desde algunas semanas hasta un par de meses, según lo que necesites. En la propuesta te damos un cronograma por etapas para que sepas qué esperar y cuándo.',
  },
  {
    p: '¿Cómo se paga?',
    r: 'Normalmente por etapas: un anticipo para arrancar y pagos que van de la mano con los avances y la entrega. Así ambos tenemos tranquilidad. La forma exacta se acuerda en la propuesta.',
  },
  {
    p: '¿Necesito saber de tecnología?',
    r: 'Para nada. Tú nos cuentas qué necesita tu negocio, aunque la idea todavía esté borrosa, y nosotros nos encargamos de la parte técnica explicándotelo todo en palabras sencillas. Si tienes ejemplos que te gusten, tu logo o tus colores, ¡mejor!, pero no es obligatorio.',
  },
  {
    p: '¿El proyecto y el código son míos?',
    r: 'Sí. Al terminar y completar el pago, el proyecto es tuyo: te entregamos los accesos y el código para que tu negocio no dependa de nadie.',
  },
  {
    p: '¿Incluyen dominio y hosting?',
    r: 'Te ayudamos a elegirlos, configurarlos y dejarlos a tu nombre. El costo del dominio y del hosting lo cubre el cliente porque son servicios de terceros, pero nos encargamos de que todo quede funcionando sin que tengas que complicarte.',
  },
  {
    p: '¿Qué pasa después de la entrega? ¿Puedo pedir cambios?',
    r: 'Durante el desarrollo puedes pedir ajustes, para eso están los avances por etapas. Después de la entrega te acompañamos para resolver dudas y corregir cualquier detalle. Si más adelante quieres mejoras, nuevas funciones o mantenimiento, lo conversamos y lo cotizamos aparte.',
  },
  {
    p: '¿Trabajan con negocios de otras ciudades o países?',
    r: 'Sí. Trabajamos 100 % en línea: videollamadas, WhatsApp y correo. Donde estés, podemos desarrollar tu proyecto.',
  },
];

// Aviso en consola al compilar si todavía hay datos de ejemplo
export function datosPendientes(): string[] {
  const c = sitio.contacto;
  const falta: string[] = [];
  if (c.whatsapp === '573000000000') falta.push('WhatsApp');
  if (c.correo === 'hola@tudominio.com') falta.push('correo');
  if (c.instagram === 'gocodev') falta.push('Instagram');
  return falta;
}

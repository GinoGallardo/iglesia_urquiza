export interface Ministerio {
  slug: string;
  nombre: string;
  /** Nombre corto del grupo (ej: Pulso) */
  grupo?: string;
  tagline: string;
  descripcion: string;
  imagen: string;
  logo?: string;
  /** Logo grande para hero tipo Prisma (marquee) */
  logoHero?: string;
  /** Hero con marquesinas animadas */
  heroMarquee?: boolean;
  marqueeTop?: string;
  marqueeBottom?: string;
  highlights: string[];
  instagram?: string;
  facebook?: string;
  youtube?: string;
  /** Bloques extra de contenido */
  secciones?: Array<{
    titulo: string;
    texto: string;
    ctaLabel?: string;
    ctaHref?: string;
    /** Si está, el CTA abre WhatsApp con este mensaje */
    ctaWhatsApp?: string;
  }>;
}

export const MINISTERIOS: Ministerio[] = [
  {
    slug: "pulso",
    nombre: "Jóvenes",
    grupo: "Pulso",
    tagline: "Somos el grupo de jóvenes de Iglesia de Urquiza.",
    descripcion:
      "Somos el grupo de jóvenes de Iglesia de Urquiza. Creamos música y tenemos reuniones cada semana.",
    imagen: "/assets/jovenes.webp",
    logo: "/assets/pulso-transparente.png",
    logoHero: "/assets/pulso-transparente.png",
    heroMarquee: true,
    marqueeTop: "JÓVENES — PULSO",
    marqueeBottom: "REUNIONES PULSO — MÚSICA",
    highlights: ["Reuniones", "Alabanza", "Enseñanzas", "Salidas", "Comunidad"],
    instagram: "https://www.instagram.com/jovenesurquiza/",
    facebook:
      "https://www.facebook.com/search/top?q=j%C3%B3venes%20urquiza",
    secciones: [
      {
        titulo: "Reuniones",
        texto:
          "Te invitamos a nuestras reuniones cada semana. Seguinos en Instagram para ver horarios y novedades de Pulso.",
        ctaLabel: "Instagram",
        ctaHref: "https://www.instagram.com/jovenesurquiza/",
      },
      {
        titulo: "Comunidad",
        texto:
          "Creemos que Jesús es lo que todas las personas necesitan. En Pulso hacemos amistad, servimos y crecemos en la fe juntos.",
      },
    ],
  },
  {
    slug: "transformados",
    nombre: "Adolescentes",
    grupo: "Transformados",
    tagline: "Somos el grupo de adolescentes de Iglesia de Urquiza.",
    descripcion:
      "Transformados es el espacio para adolescentes. Un lugar para conocer a Jesús, hacer amigos y vivir la fe con juegos, enseñanzas y salidas.",
    imagen: "/assets/adolescente.webp",
    logo: "/assets/transformado-transparente.png",
    logoHero: "/assets/transformado-transparente.png",
    heroMarquee: true,
    marqueeTop: "ADOLESCENTES — TRANSFORMADOS",
    marqueeBottom: "REUNIONES — JUEGOS — ENSEÑANZA",
    highlights: [
      "Juegos",
      "Enseñanzas",
      "Alabanza",
      "Salidas",
      "Comunidad",
    ],
    instagram: "https://www.instagram.com/adolescentesroosevelt/",
    facebook: "https://www.facebook.com/adolescentesroosevelt.ice",
    secciones: [
      {
        titulo: "Reuniones",
        texto:
          "Cada encuentro está pensado para que los adolescentes crezcan en la Palabra en un ambiente divertido y seguro.",
        ctaLabel: "Instagram",
        ctaHref: "https://www.instagram.com/adolescentesroosevelt/",
      },
      {
        titulo: "Comunidad",
        texto:
          "Visitamos iglesias, salimos juntos y construimos amistades que acompañan el camino de fe.",
      },
    ],
  },
  {
    slug: "escuelita-biblica",
    nombre: "Niños",
    grupo: "Escuelita Bíblica",
    tagline: "¡En Iglesia de Urquiza, los niños también tienen un lugar!",
    descripcion:
      "En Escuelita Bíblica los más pequeños aprenden de Jesús con clases bíblicas divertidas, juegos y alabanza, en su propio lenguaje y ritmo.",
    imagen: "/assets/escuela-biblica.webp",
    logo: "/assets/logo-escuelita.webp",
    highlights: ["Juegos", "Enseñanzas", "Alabanza"],
    instagram: "https://www.instagram.com/escuelabiblicaurquiza/",
    facebook:
      "https://www.facebook.com/search/top?q=escuela%20b%C3%ADblica%20urquiza",
    secciones: [
      {
        titulo: "Durante las reuniones",
        texto:
          "Mientras los adultos están en la reunión general, los niños participan de actividades diseñadas especialmente para ellos.",
      },
      {
        titulo: "Un ambiente seguro",
        texto:
          "Queremos que cada niño se sienta querido, acompañado y pueda dar sus primeros pasos en la fe.",
      },
    ],
  },
  {
    slug: "oracion",
    nombre: "Oración",
    grupo: "Reunión de Oración",
    tagline: "Primer sábado del mes · después compartimos una comida.",
    descripcion:
      "El primer sábado de cada mes nos reunimos a orar. Nos juntamos en grupos reducidos, por edad y sexo, porque creemos en el poder de la oración y en caminar juntos ante Dios. Después de la reunión nos quedamos a compartir una comida.",
    imagen: "/assets/reunion-oracion.webp",
    logo: "/assets/logo-iglesia.webp",
    highlights: [
      "1º sábado del mes",
      "Grupos reducidos",
      "Por edad y sexo",
      "Comida compartida",
    ],
    secciones: [
      {
        titulo: "Cuándo nos reunimos",
        texto:
          "El primer sábado de cada mes es reunión de oración. Oramos en grupos pequeños para poder compartir con confianza, cuidando un ambiente seguro y cercano.",
      },
      {
        titulo: "Después de la reunión",
        texto:
          "Al terminar nos quedamos a compartir una comida juntos. Es un tiempo de comunión y de conocernos mejor como familia de fe.",
      },
      {
        titulo: "Tu petición importa",
        texto:
          "Como iglesia creemos en el poder de la oración. Abajo podés enviarnos tu petición o agradecimiento para que oremos con vos.",
      },
    ],
  },
  {
    slug: "mujeres",
    nombre: "Mujeres",
    grupo: "Encuentro Femenino",
    tagline: "Segundo sábado del mes · Mujeres sabias.",
    descripcion:
      "El segundo sábado de cada mes es el encuentro femenino. Hay alabanza, enseñanza —el tema de este año es «Mujeres sabias»— y también compartimos juegos y merienda.",
    imagen: "/assets/ICE-urquiza.webp",
    logo: "/assets/logo-iglesia.webp",
    highlights: [
      "2º sábado del mes",
      "Alabanza",
      "Enseñanza",
      "Juegos y merienda",
    ],
    secciones: [
      {
        titulo: "Cuándo nos reunimos",
        texto:
          "El segundo sábado de cada mes es mujeres o encuentro femenino. Un espacio para crecer juntas en la Palabra y animarnos a seguir a Jesús.",
      },
      {
        titulo: "Qué hacemos",
        texto:
          "Hay alabanza, enseñanza y un tiempo de juegos y merienda. El tema de este año es «Mujeres sabias».",
      },
      {
        titulo: "Comunidad",
        texto:
          "Creemos que Dios transforma vidas a través de la comunión entre hermanas. Acá hay lugar para cada una.",
      },
    ],
  },
  {
    slug: "alabanza",
    nombre: "Alabanza",
    grupo: "Reunión de Alabanza",
    tagline: "Tercer sábado del mes · después compartimos una comida.",
    descripcion:
      "El tercer sábado de cada mes es reunión de alabanza. Adoramos a Jesús con música y corazón, y después de la reunión compartimos una comida juntos.",
    imagen: "/assets/portada-web.webp",
    logo: "/assets/logo-iglesia.webp",
    logoHero: "/assets/logo-iglesia.webp",
    heroMarquee: true,
    marqueeTop: "ALABANZA — IGLESIA DE URQUIZA",
    marqueeBottom: "ADORACIÓN — ENSAYOS — SERVICIO",
    highlights: [
      "3º sábado del mes",
      "Adoración",
      "Comida compartida",
      "Equipo",
    ],
    youtube: "https://www.youtube.com/@IGLESIADEURQUIZA",
    secciones: [
      {
        titulo: "Cuándo nos reunimos",
        texto:
          "El tercer sábado de cada mes es reunión de alabanza. Creemos que la alabanza abre el corazón a Dios y que Jesús es lo que todas las personas necesitan.",
        ctaLabel: "YouTube",
        ctaHref: "https://www.youtube.com/@IGLESIADEURQUIZA",
      },
      {
        titulo: "Después de la reunión",
        texto:
          "Al terminar se comparte una comida. Un tiempo para seguir juntos, charlar y fortalecer la comunión.",
      },
      {
        titulo: "Sumate al equipo",
        texto:
          "Si tocás un instrumento, cantás o querés aprender, acercate y charlemos. Hay lugar para crecer y servir.",
      },
    ],
  },
  {
    slug: "evangelismo",
    nombre: "Evangelismo",
    grupo: "Evangelismo",
    tagline: "Cuarto sábado del mes · salimos a predicar.",
    descripcion:
      "El cuarto sábado de cada mes salimos a evangelizar: a casas de hermanos que invitan vecinos, a hospitales, geriátricos y plazas. Nos dividimos en grupos. Si querés participar, escribinos.",
    imagen: "/assets/portada-web.webp",
    logo: "/assets/logo-iglesia.webp",
    highlights: [
      "4º sábado del mes",
      "Casas y vecinos",
      "Hospitales y geriátricos",
      "Plazas",
    ],
    secciones: [
      {
        titulo: "Cuándo salimos",
        texto:
          "El cuarto sábado de cada mes es evangelismo. Salimos a predicar la Buena Noticia en distintos lugares de la ciudad.",
      },
      {
        titulo: "Dónde vamos",
        texto:
          "Vamos a casas de hermanos que invitan a sus vecinos, a hospitales, geriátricos y plazas. Nos dividimos en grupos según el lugar.",
      },
      {
        titulo: "¿Querés participar?",
        texto:
          "Si el mes tiene un quinto sábado, ese día queda libre. Para sumarte al evangelismo del cuarto sábado, escribinos y te contamos cómo participar.",
        ctaLabel: "Escribinos por WhatsApp",
        ctaWhatsApp:
          "Hola, quiero participar del evangelismo del cuarto sábado.",
      },
    ],
  },
];

export function getMinisterio(slug: string): Ministerio | undefined {
  return MINISTERIOS.find((m) => m.slug === slug);
}

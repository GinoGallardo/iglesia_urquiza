export interface VersiculoReferencia {
  /** ID numérico del libro en la API (canon protestante: Génesis 1 … Apocalipsis 66) */
  bookId: number;
  chapter: number;
  verse: number;
  /** Etiqueta legible en español (ej: "Juan 3:16") */
  label: string;
  /** Texto RVR1960 de respaldo si la API falla */
  fallbackTexto: string;
}

/**
 * ~30 referencias curadas para versículo del día.
 * Los textos de respaldo son RVR1960, igual que la versión que sirve la API.
 */
export const VERSICULOS_CURADOS: VersiculoReferencia[] = [
  {
    bookId: 19,
    chapter: 23,
    verse: 1,
    label: "Salmos 23:1",
    fallbackTexto: "Jehová es mi pastor; nada me faltará.",
  },
  {
    bookId: 43,
    chapter: 3,
    verse: 16,
    label: "Juan 3:16",
    fallbackTexto:
      "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
  },
  {
    bookId: 50,
    chapter: 4,
    verse: 13,
    label: "Filipenses 4:13",
    fallbackTexto: "Todo lo puedo en Cristo que me fortalece.",
  },
  {
    bookId: 20,
    chapter: 3,
    verse: 5,
    label: "Proverbios 3:5",
    fallbackTexto:
      "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.",
  },
  {
    bookId: 20,
    chapter: 3,
    verse: 6,
    label: "Proverbios 3:6",
    fallbackTexto:
      "Reconócelo en todos tus caminos, y él enderezará tus veredas.",
  },
  {
    bookId: 40,
    chapter: 11,
    verse: 28,
    label: "Mateo 11:28",
    fallbackTexto:
      "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
  },
  {
    bookId: 40,
    chapter: 5,
    verse: 16,
    label: "Mateo 5:16",
    fallbackTexto:
      "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos.",
  },
  {
    bookId: 43,
    chapter: 14,
    verse: 6,
    label: "Juan 14:6",
    fallbackTexto:
      "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.",
  },
  {
    bookId: 43,
    chapter: 14,
    verse: 27,
    label: "Juan 14:27",
    fallbackTexto:
      "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.",
  },
  {
    bookId: 45,
    chapter: 8,
    verse: 28,
    label: "Romanos 8:28",
    fallbackTexto:
      "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
  },
  {
    bookId: 45,
    chapter: 12,
    verse: 2,
    label: "Romanos 12:2",
    fallbackTexto:
      "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta.",
  },
  {
    bookId: 19,
    chapter: 46,
    verse: 10,
    label: "Salmos 46:10",
    fallbackTexto: "Estad quietos, y conoced que yo soy Dios.",
  },
  {
    bookId: 19,
    chapter: 119,
    verse: 105,
    label: "Salmos 119:105",
    fallbackTexto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
  },
  {
    bookId: 19,
    chapter: 27,
    verse: 1,
    label: "Salmos 27:1",
    fallbackTexto:
      "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?",
  },
  {
    bookId: 19,
    chapter: 34,
    verse: 8,
    label: "Salmos 34:8",
    fallbackTexto:
      "Gustad, y ved que es bueno Jehová; Dichoso el hombre que confía en él.",
  },
  {
    bookId: 19,
    chapter: 37,
    verse: 5,
    label: "Salmos 37:5",
    fallbackTexto: "Encomienda a Jehová tu camino, y confía en él; y él hará.",
  },
  {
    bookId: 5,
    chapter: 31,
    verse: 6,
    label: "Deuteronomio 31:6",
    fallbackTexto:
      "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará.",
  },
  {
    bookId: 58,
    chapter: 11,
    verse: 1,
    label: "Hebreos 11:1",
    fallbackTexto:
      "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.",
  },
  {
    bookId: 58,
    chapter: 13,
    verse: 8,
    label: "Hebreos 13:8",
    fallbackTexto: "Jesucristo es el mismo ayer, y hoy, y por los siglos.",
  },
  {
    bookId: 59,
    chapter: 1,
    verse: 17,
    label: "Santiago 1:17",
    fallbackTexto:
      "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación.",
  },
  {
    bookId: 46,
    chapter: 13,
    verse: 13,
    label: "1 Corintios 13:13",
    fallbackTexto:
      "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor.",
  },
  {
    bookId: 46,
    chapter: 16,
    verse: 14,
    label: "1 Corintios 16:14",
    fallbackTexto: "Todas vuestras cosas sean hechas con amor.",
  },
  {
    bookId: 49,
    chapter: 2,
    verse: 8,
    label: "Efesios 2:8",
    fallbackTexto:
      "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",
  },
  {
    bookId: 49,
    chapter: 3,
    verse: 20,
    label: "Efesios 3:20",
    fallbackTexto:
      "Y a Aquel que es poderoso para hacer todas las cosas mucho más abundantemente de lo que pedimos o entendemos, según el poder que actúa en nosotros.",
  },
  {
    bookId: 51,
    chapter: 3,
    verse: 23,
    label: "Colosenses 3:23",
    fallbackTexto:
      "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.",
  },
  {
    bookId: 60,
    chapter: 5,
    verse: 7,
    label: "1 Pedro 5:7",
    fallbackTexto:
      "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.",
  },
  {
    bookId: 62,
    chapter: 4,
    verse: 19,
    label: "1 Juan 4:19",
    fallbackTexto: "Nosotros le amamos a él, porque él nos amó primero.",
  },
  {
    bookId: 42,
    chapter: 6,
    verse: 31,
    label: "Lucas 6:31",
    fallbackTexto:
      "Y como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos.",
  },
  {
    bookId: 41,
    chapter: 12,
    verse: 30,
    label: "Marcos 12:30",
    fallbackTexto:
      "Y amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente y con todas tus fuerzas. Este es el principal mandamiento.",
  },
  {
    bookId: 44,
    chapter: 16,
    verse: 31,
    label: "Hechos 16:31",
    fallbackTexto:
      "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.",
  },
  {
    bookId: 66,
    chapter: 21,
    verse: 4,
    label: "Apocalipsis 21:4",
    fallbackTexto:
      "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.",
  },
  {
    bookId: 18,
    chapter: 19,
    verse: 25,
    label: "Job 19:25",
    fallbackTexto:
      "Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo.",
  },
];

export const FALLBACK_GLOBAL = {
  texto:
    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
  referencia: "Juan 3:16",
} as const;

/** Reina-Valera 1960. */
export const BIBLE_API_VERSION = "RV1960";
export const BIBLE_API_BASE = "https://bolls.life/get-verse";

export interface Iglesia {
  id: string;
  nombre: string;
  /** Barrio o localidad corta para el listado */
  ciudad: string;
  /** Provincia / jurisdicción */
  provincia: string;
  pais: string;
  direccion: string;
  lat: number;
  lng: number;
  /** Horarios de reunión (opcional) */
  horarios?: string[];
  /** Cantidad aproximada de reuniones semanales (badge) */
  servicios?: number;
  imagen?: string;
  whatsapp?: string;
  web?: string;
  /** Marca la sede principal del sitio */
  destacada?: boolean;
  /** Nota corta visible en la tarjeta */
  nota?: string;
}

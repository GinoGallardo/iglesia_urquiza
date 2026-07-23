import type { ComponentType } from "react";

/** Estructura de cada ítem en public/data/actividades.json */
export interface Actividad {
  name: string;
  logo: string;
  img: string;
  description?: string[];
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export type ActividadesResponse = Actividad[];

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
}

export interface Devocional {
  id: string;
  fecha: string;
  titulo: string;
  versiculo_referencia: string;
  contenido: string;
  autor_id: string;
  created_at: string;
  updated_at?: string;
}

export interface DevocionalInput {
  fecha: string;
  titulo: string;
  versiculo_referencia: string;
  contenido: string;
}

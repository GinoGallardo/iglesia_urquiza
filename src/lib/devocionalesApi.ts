import { getSupabase } from "../lib/supabase";
import type { Devocional, DevocionalInput } from "../types/devocional";

function todayISO(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

export async function fetchDevocionalDeHoy(): Promise<Devocional | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("devocionales")
    .select("*")
    .eq("fecha", todayISO())
    .maybeSingle();

  if (error) {
    console.error("Error fetching devocional:", error.message);
    return null;
  }
  return data as Devocional | null;
}

export async function listDevocionales(): Promise<Devocional[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("devocionales")
    .select("*")
    .order("fecha", { ascending: false });

  if (error) {
    console.error("Error listing devotionals:", error.message);
    return [];
  }
  return (data ?? []) as Devocional[];
}

export async function upsertDevocional(
  input: DevocionalInput,
  autorId: string,
  id?: string
): Promise<{ data: Devocional | null; error: string | null }> {
  const supabase = getSupabase();
  if (!supabase) return { data: null, error: "Supabase no configurado" };

  if (id) {
    const { data, error } = await supabase
      .from("devocionales")
      .update({
        fecha: input.fecha,
        titulo: input.titulo,
        versiculo_referencia: input.versiculo_referencia,
        contenido: input.contenido,
      })
      .eq("id", id)
      .select()
      .single();
    return {
      data: (data as Devocional) ?? null,
      error: error?.message ?? null,
    };
  }

  const { data, error } = await supabase
    .from("devocionales")
    .insert({
      ...input,
      autor_id: autorId,
    })
    .select()
    .single();

  return {
    data: (data as Devocional) ?? null,
    error: error?.message ?? null,
  };
}

export async function deleteDevocional(
  id: string
): Promise<{ error: string | null }> {
  const supabase = getSupabase();
  if (!supabase) return { error: "Supabase no configurado" };
  const { error } = await supabase.from("devocionales").delete().eq("id", id);
  return { error: error?.message ?? null };
}

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useAuth } from "../../contexts/useAuth";
import {
  deleteDevocional,
  listDevocionales,
  upsertDevocional,
} from "../../lib/devocionalesApi";
import type { Devocional, DevocionalInput } from "../../types/devocional";

const emptyForm: DevocionalInput = {
  fecha: new Date().toISOString().slice(0, 10),
  titulo: "",
  versiculo_referencia: "",
  contenido: "",
};

export default function AdminDevocionalesPage() {
  const { user, signOut } = useAuth();
  const [items, setItems] = useState<Devocional[]>([]);
  const [form, setForm] = useState<DevocionalInput>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const data = await listDevocionales();
      if (!cancelled) {
        setItems(data);
        setLoading(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const refresh = async () => {
    const data = await listDevocionales();
    setItems(data);
  };
  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError(null);
    setMessage(null);

    const result = await upsertDevocional(
      form,
      user.id,
      editingId ?? undefined
    );
    setSaving(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setMessage(editingId ? "Devocional actualizado." : "Devocional creado.");
    resetForm();
    await refresh();
  };

  const onEdit = (item: Devocional) => {
    setEditingId(item.id);
    setForm({
      fecha: item.fecha,
      titulo: item.titulo,
      versiculo_referencia: item.versiculo_referencia,
      contenido: item.contenido,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDelete = async (id: string) => {
    if (!window.confirm("¿Eliminar este devocional?")) return;
    const result = await deleteDevocional(id);
    if (result.error) {
      setError(result.error);
      return;
    }
    if (editingId === id) resetForm();
    await refresh();
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-black/5 bg-white">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <p className="subtitulo text-lg text-brand">Admin</p>
            <h1 className="font-sans text-xl font-bold text-ink">
              Devocionales
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="/" className="font-sans text-sm text-brand underline">
              Ver sitio
            </a>
            <Button variant="secondary" size="sm" onClick={() => void signOut()}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="section-shell grid gap-10 py-10 lg:grid-cols-2">
        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="font-sans text-lg font-semibold text-ink">
            {editingId ? "Editar devocional" : "Nuevo devocional"}
          </h2>
          <form className="mt-4 space-y-4" onSubmit={(e) => void onSubmit(e)}>
            <label className="block text-sm font-medium text-ink">
              Fecha de publicación
              <input
                type="date"
                required
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Título
              <input
                type="text"
                required
                value={form.titulo}
                onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Referencia del versículo
              <input
                type="text"
                required
                placeholder="Ej: Juan 3:16"
                value={form.versiculo_referencia}
                onChange={(e) =>
                  setForm({ ...form, versiculo_referencia: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Contenido
              <textarea
                required
                rows={8}
                value={form.contenido}
                onChange={(e) =>
                  setForm({ ...form, contenido: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
              />
            </label>

            {error && (
              <p className="text-sm text-red-700" role="alert">
                {error}
              </p>
            )}
            {message && (
              <p className="text-sm text-green-700" role="status">
                {message}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <Button type="submit" variant="primary" disabled={saving}>
                {saving
                  ? "Guardando…"
                  : editingId
                    ? "Guardar cambios"
                    : "Publicar"}
              </Button>
              {editingId && (
                <Button type="button" variant="ghost" onClick={resetForm}>
                  Cancelar edición
                </Button>
              )}
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="font-sans text-lg font-semibold text-ink">
            Publicados
          </h2>
          {loading ? (
            <p className="mt-4 text-muted">Cargando…</p>
          ) : items.length === 0 ? (
            <p className="mt-4 text-muted">Todavía no hay devocionales.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-black/5 p-4"
                >
                  <p className="text-xs font-medium tracking-wide text-brand uppercase">
                    {item.fecha}
                  </p>
                  <h3 className="mt-1 font-semibold text-ink">{item.titulo}</h3>
                  <p className="text-sm text-muted">{item.versiculo_referencia}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-ink/80">
                    {item.contenido}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onEdit(item)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => void onDelete(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

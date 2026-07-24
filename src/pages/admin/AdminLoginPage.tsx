import type { FormEvent } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAuth } from "../../contexts/useAuth";

export default function AdminLoginPage() {
  const { signIn, session, isAdmin, loading, configured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const from =
    (location.state as { from?: { pathname?: string } } | null)?.from
      ?.pathname ?? "/admin/devocionales";

  if (!loading && session && isAdmin) {
    return <Navigate to={from} replace />;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const result = await signIn(email.trim(), password);
    setSubmitting(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <p className="subtitulo text-xl text-brand">Administración</p>
        <h1 className="mt-1 font-sans text-2xl font-bold text-ink">
          Iniciar sesión
        </h1>
        <p className="mt-2 font-sans text-sm text-muted">
          Acceso solo para administradores de la iglesia.
        </p>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
            Falta configurar las variables de Supabase.
          </p>
        )}

        <form className="mt-6 space-y-4" onSubmit={(e) => void onSubmit(e)}>
          <label className="block font-sans text-sm font-medium text-ink">
            Email
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 font-sans text-base outline-none focus:border-brand"
            />
          </label>
          <label className="block font-sans text-sm font-medium text-ink">
            Contraseña
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 font-sans text-base outline-none focus:border-brand"
            />
          </label>

          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={submitting || !configured}
          >
            {submitting ? "Ingresando…" : "Ingresar"}
          </Button>
        </form>

        <a
          href="/"
          className="mt-6 block text-center font-sans text-sm text-brand underline"
        >
          Volver al sitio
        </a>
      </div>
    </div>
  );
}

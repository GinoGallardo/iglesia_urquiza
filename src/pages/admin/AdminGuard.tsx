import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

export default function AdminGuard() {
  const { loading, session, isAdmin, configured } = useAuth();
  const location = useLocation();

  if (!configured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center font-sans text-muted">
        <h1 className="text-2xl font-bold text-ink">Admin no configurado</h1>
        <p className="mt-3">
          Definí <code>VITE_SUPABASE_URL</code> y{" "}
          <code>VITE_SUPABASE_ANON_KEY</code> en el entorno.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans text-muted">
        Verificando sesión…
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center font-sans">
        <h1 className="text-2xl font-bold text-ink">Sin permisos</h1>
        <p className="mt-3 text-muted">
          Tu usuario no está en la tabla <code>admins</code>. Pedile a un
          administrador que te agregue.
        </p>
        <a href="/" className="mt-6 inline-block text-brand underline">
          Volver al sitio
        </a>
      </div>
    );
  }

  return <Outlet />;
}

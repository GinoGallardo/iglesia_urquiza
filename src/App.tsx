import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import SiteLayout from "./layouts/SiteLayout";
import Landing from "./page/Landing";
import "./App.css";

const UbicacionesPage = lazy(() => import("./pages/UbicacionesPage"));
const CalendarioPage = lazy(() => import("./pages/CalendarioPage"));
const NosotrosPage = lazy(() => import("./pages/NosotrosPage"));
const MinisterioPage = lazy(() => import("./pages/MinisterioPage"));
const EmprendimientosPage = lazy(() => import("./pages/EmprendimientosPage"));
const AdminGuard = lazy(() => import("./pages/admin/AdminGuard"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminDevocionalesPage = lazy(
  () => import("./pages/admin/AdminDevocionalesPage")
);

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center font-sans text-muted">
      Cargando…
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<Landing />} />
              <Route path="nosotros" element={<NosotrosPage />} />
              <Route path="ubicaciones" element={<UbicacionesPage />} />
              <Route path="calendario" element={<CalendarioPage />} />
              <Route
                path="emprendimientos"
                element={<EmprendimientosPage />}
              />
              <Route
                path="actividades"
                element={<Navigate to="/" replace />}
              />
              <Route path="actividades/:slug" element={<MinisterioPage />} />
            </Route>
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminGuard />}>
              <Route index element={<Navigate to="devocionales" replace />} />
              <Route path="devocionales" element={<AdminDevocionalesPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

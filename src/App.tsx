import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Seo from "./components/Seo/Seo";
import Landing from "./page/Landing";
import "./App.css";

const AdminGuard = lazy(() => import("./pages/admin/AdminGuard"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminDevocionalesPage = lazy(
  () => import("./pages/admin/AdminDevocionalesPage")
);

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-muted">
      Cargando…
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<AdminFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Seo />
                  <Landing />
                </>
              }
            />
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

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabase, isSupabaseConfigured } from "../lib/supabase";
import { AuthContext, type AuthContextValue } from "./auth-context";

async function checkIsAdmin(userId: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;
  const { data, error } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) {
    console.error("Error checking admin:", error.message);
    return false;
  }
  return Boolean(data);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(() => isSupabaseConfigured);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      return;
    }

    let mounted = true;

    const sync = async (next: Session | null) => {
      if (!mounted) return;
      setSession(next);
      if (next?.user) {
        const admin = await checkIsAdmin(next.user.id);
        if (mounted) setIsAdmin(admin);
      } else if (mounted) {
        setIsAdmin(false);
      }
      if (mounted) setLoading(false);
    };

    void supabase.auth.getSession().then(({ data }) => {
      void sync(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void sync(nextSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const supabase = getSupabase();
    if (!supabase) {
      return { error: "Supabase no está configurado." };
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return { error: error.message };

    const userId = data.user?.id;
    if (userId) {
      const admin = await checkIsAdmin(userId);
      setSession(data.session);
      setIsAdmin(admin);
      if (!admin) {
        await supabase.auth.signOut();
        setSession(null);
        setIsAdmin(false);
        return {
          error:
            "Tu cuenta no tiene permisos de administrador. Pedí que te agreguen a la tabla admins.",
        };
      }
    }
    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;
    await supabase.auth.signOut();
    setIsAdmin(false);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      isAdmin,
      loading,
      configured: isSupabaseConfigured,
      signIn,
      signOut,
    }),
    [session, isAdmin, loading, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

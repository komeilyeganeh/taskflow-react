import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/config/supabase";
import { getCurrentUser, getUserProfile } from "@/config/auth-service";

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const currentUser = await getCurrentUser();
                if (currentUser) {
                    setUser(currentUser);
                    const userProfile = await getUserProfile(currentUser.id);
                    setProfile(userProfile);
                }
            } catch (error: any) {
                console.error("Error checking authentication:", error);
            } finally {
                setLoading(false);
            }
        }
        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            const currentUser = session?.user || null;
            setUser(currentUser);
            if (currentUser) {
                const userProfile = await getUserProfile(currentUser.id);
                setProfile(userProfile);
            } else {
                setProfile(null);
            }
        })

        return () => subscription.unsubscribe();
    }, [])

    const value = {
        user,
        profile,
        loading,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

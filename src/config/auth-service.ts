import { supabase } from "./supabase";

// signup function
export const signUp = async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })

    if (error) return { error };

    if (data?.user) {
        await createUser(data.user)
    }

    return { data };
}

// signin function
export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) return { error };
    return { data };
}

/// signout function
export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

// create user function
const createUser = async (user: any) => {
    const { error } = await supabase.from("users").upsert({
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || ""
    })

    if (error) throw error;
}

// get current user function
export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// get user profile function
export const getUserProfile = async (userId: string) => {
    const { data, error } = await supabase.from("users").select("*").eq("id", userId).single();
    if (error) throw error;
    return data;
}


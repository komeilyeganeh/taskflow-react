export type User = {
    id: string;
    email: string;
    password: string;
    name: string;
    created_at: string;
    user_metadata?: {
        name?: string;
    }
}
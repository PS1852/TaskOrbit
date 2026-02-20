import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => Promise<void>;
    signup: (email: string, name: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------------------------------------------------------------------------
// AuthProvider — wraps the app; persists auth state in localStorage
// ---------------------------------------------------------------------------
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('taskorbit_user');
        return stored ? (JSON.parse(stored) as User) : null;
    });
    const [isLoading] = useState(false);

    /** Restore session from localStorage if needed (handled in initializer now) */
    useEffect(() => {
        // This is now purely for syncing if external tabs change, 
        // but for now we'll keep it simple as the initializer handles it.
    }, []);

    /** Simulate network login — accepts any email/password (demo mode) */
    const login = async (email: string): Promise<void> => {
        await new Promise<void>((resolve) => setTimeout(resolve, 800));
        const mockUser: User = { id: 'user-1', email, name: email.split('@')[0] };
        setUser(mockUser);
        localStorage.setItem('taskorbit_user', JSON.stringify(mockUser));
    };

    /** Simulate network signup */
    const signup = async (email: string, name: string): Promise<void> => {
        await new Promise<void>((resolve) => setTimeout(resolve, 800));
        const mockUser: User = { id: `user-${Date.now()}`, email, name };
        setUser(mockUser);
        localStorage.setItem('taskorbit_user', JSON.stringify(mockUser));
    };

    const logout = (): void => {
        setUser(null);
        localStorage.removeItem('taskorbit_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

// ---------------------------------------------------------------------------
// useAuth hook — must be used inside <AuthProvider>
// ---------------------------------------------------------------------------
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

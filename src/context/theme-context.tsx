import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProviderType = {
    children: React.ReactNode
}
const ThemeContext = createContext<{
    theme: string,
    toggleTheme: () => void
}>({
    theme: "",
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }: ThemeContextProviderType) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme;
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            return systemTheme;
        }
        return "light";
    });
    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
}
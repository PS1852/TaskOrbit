import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'taskorbit_theme';

/** Reads the preferred theme from localStorage or system preference. */
function getInitialTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ---------------------------------------------------------------------------
// ThemeToggle — persists dark/light mode preference across sessions
// ---------------------------------------------------------------------------
export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    /** Apply theme class to <html> and persist to localStorage */
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    return (
        <button
            type="button"
            onClick={toggle}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}

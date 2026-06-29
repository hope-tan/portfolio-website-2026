import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import {cn} from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme === "light") {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };
    
    return (
        <button onClick ={toggleTheme} className={cn("link-buttons fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]"
        )}
        > 
            {isDarkMode ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-[#EDE8D0]" />}
        </button>
    );
};
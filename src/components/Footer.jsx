import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return ( 
        <footer className="bottom-6 font-mono">
            <p className="text-sm transition-colors font-[hsl(var(--foreground))] font-semibold">&copy; {new Date().getFullYear()} Hope Tan, all rights reserved. </p>
            <a href="#hope" className="link-buttons fixed bottom-6 right-4 p-2">
                <ArrowUp className="text-[hsl(var(--primary))] hover:text-[hsl(var(--background))]"/>
            </a>
        </footer>
    );
}
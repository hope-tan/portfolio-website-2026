import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hope"},
    {name: "Experience", href: "#experience"},
    {name: "Education", href: "#education"},
    {name: "Competitions", href: "#competitions"},
    {name: "Projects", href: "#projects"},
    {name: "Certifications", href: "#certifications"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
    <nav 
        className={cn(
            "fixed w-full z-40 transition-all duration-300 py-1",
            isScrolled ? "py-1 bg-[hsl(var(--background))]/80 backdrop-blur-xs shadow-xs" : "py-1"
        )}
        >
            <div className="container flex items-center justify-between w--full">
                <a 
                    className="text-xl font-bold text-[hsl(var(--primary))] flex items-center transition-colors duration-300 p-5 hover:shadow-[0_0_7px_hsl(var(--primary))]/60 card-hover"
                    href="#hope"
                >
                    <span className="relative z-10 font-bold font-mono cursor-pointer flex">
                        <img src={"/projects/h.png"} alt='logo' className='w-7 h-7 object-contain' />
                        <span>&nbsp;Hope Tan's Portfolio</span> 
                    </span>
                </a>

                {/* Desktop version */}
                <div className="hidden md:flex md:space-x-1 lg:space-x-3">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300 px-3 py-5 lg:px-4 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60 font-mono"
                            >
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* Mobile version */}

                <button 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-[hsl(var(--foreground))] z-50"
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                    { isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}{""}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-[hsl(var(--background))]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    
                )}>
                 <div className="flex flex-col space-y-8">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
                            onClick = {() => setIsMobileMenuOpen(false)}
                            >
                            {item.name}
                        </a>
                    ))}
                </div>
                </div>

            </div>
            </nav>
    );
};

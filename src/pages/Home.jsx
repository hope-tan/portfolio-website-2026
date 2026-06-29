import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { CloudBackground } from "@/components/CloudBackground";
import { Navbar } from "@/components/Navbar";
import { HopeTan } from "@/components/HopeTan";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Skills } from "../components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    const observer = new MutationObserver(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors">
        {isDarkMode ? <StarBackground /> : <CloudBackground />}
        <ThemeToggle />
        
        {/*Navigation bar*/}
        <Navbar />

        {/*Main content*/}
        <main>
        <HopeTan />
        <Projects />
        <About/>
        <Certifications/>
        <Skills/>
        <Contact />
        </main>

        {/*Footer*/}
        <Footer/>
    </div>
  );
};

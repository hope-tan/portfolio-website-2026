import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter'
import { Photo } from "./Photo";

export const HopeTan = () => {
    return (
    <section 
        id="hope" 
        className="relative min-h-screen flex items-center justify-center px-4"
    >
        <div className="container max-w-6xl mx-auto z-10">
            <div className="flex flex-col md:flex-row h-screen">
                {/* Top Mobile */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 block md:hidden">
                    <div>
                        <Photo />
                    </div>
                </div>
                { /* Left Side Desktop / Bottom Mobile */ }
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <div className="space-y-6">
                        <h1 className="text-2xl hidden md:block">&nbsp;</h1>
                        <h1 className="text-2xl md:text-4xl sm:text-large font-bold font-mono tracking-tight">
                            <Typewriter
                                words={["Hi, I'm Hope Tan!"]}
                                loop={1} // 0 = no loop, or set to number of loops
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={35}
                                delaySpeed={1500}
                            />
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
                            Cybersecurity engineer focused on <span className="text-[hsl(var(--primary))] font-bold">cloud security</span>, <span className="text-[hsl(var(--primary))] font-bold">product security</span>, and secure systems, with a passion for clear communication and team leadership.
                        </p>
                        
                        <div className="flex justify-center gap-6">
                            <a
                                href="mailto:hopedtan@gmail.com"
                            >
                                <div className="link-buttons">
                                    <Mail className="h-6 w-6 text-[hsl(var(--primary))] hover:text-[hsl(var(--background))]"/>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hopetan/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="link-buttons">
                                    <Linkedin className="h-6 w-6 text-[hsl(var(--primary))] hover:text-[hsl(var(--background))]"/>
                                </div>
                            </a>
                            <a
                                href="https://github.com/hope-tan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="link-buttons">
                                    <Github className="h-6 w-6 text-[hsl(var(--primary))] hover:text-[hsl(var(--background))]"/>
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center pt-4">
                            <a href="#projects" className="buttons ">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
                {/* Right Side Desktop */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                    <div className="hidden md:block">
                        <Photo />
                    </div>
                </div>

            </div>
        </div>
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-[hsl(var(--primary))]">
            <ArrowDown className="h-5 w-5" />
        </div>
    </section>
    );
};

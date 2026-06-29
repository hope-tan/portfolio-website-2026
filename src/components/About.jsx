import { School, User } from "lucide-react";
import { motion as Motion } from "motion/react";

const experience = [
    "Cloud Security Engineering Intern - Capital One '26-now",
    "Product Security Analyst - Calix '25-'26",
    "Cloud Product Security Engineering Intern - Calix Summer '25",
    "Team Captain - DoE CyberForce '25-now",
    "Team Captain - CCDC '26-now",
    "Team Captain/MVP - NCAE CyberGames '24-'25",
];

const education = [
    "B.S. Computer Science: Cybersecurity expected 2027",
    "4.0 GPA",
    "National Merit Full-Tuition Scholarship",
    "Honors Program",
    "Dean's List",
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    About Me
                </h2>
                <div className="grid grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-[hsl(var(--muted-foreground))] text-left">
                            <span className="text-[hsl(var(--primary))] font-bold">Cybersecurity engineering, cloud security, product security, and people. </span>
                            I build secure systems with a focus on practical risk reduction, clear communication, and steady leadership in technical teams.
                            My experience spans cloud and product security work, competition team leadership, and hands-on security engineering across modern infrastructure.
                        </p>
                        <Motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-170px" }}
                            className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                                    <User className="h-6 w-6 text-[hsl(var(--primary))]" />
                                </div>
                                <div className="text-left w-full">
                                    <h4 className="font-semibold text-lg">Technical Experience</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {experience.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                        <Motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-170px" }}
                            className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                                    <School className="h-6 w-6 text-[hsl(var(--primary))]" />
                                </div>
                                <div className="text-left w-full">
                                    <h4 className="font-semibold text-lg">Education</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {education.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Motion.div>
                        <p className="text-[hsl(var(--muted-foreground))] text-left">
                            These experiences gave me hands-on practice in <span className="text-[hsl(var(--primary))] font-bold">AWS, GCP, Azure, application security, identity systems, Linux, Windows Server, incident response, and secure automation</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="buttons"> Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { ExternalLink, Github } from "lucide-react";
import { motion as Motion } from "motion/react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "The website you're looking at right now, built as a React and Tailwind portfolio for cybersecurity work, projects, and competition experience.",
        image: "/projects/website.png",
        tags: ["React", "JavaScript", "TailwindCSS", "Web Deployment"],
        demoUrl: "#projects",
        githubUrl: "https://github.com/hope-tan",
    },
    {
        id: 2,
        title: "DoE CyberForce Competition",
        description: "Team captain experience defending energy-sector systems, coordinating incident response, and communicating technical tradeoffs under pressure.",
        image: "/projects/cyberforce-2025.jpeg",
        tags: ["Incident Response", "Linux", "Network Defense"],
        demoUrl: "https://www.liberty.edu/news/2025/12/05/cyberforce-team-finishes-in-top-10-at-annual-national-competition-in-chicago/",
    },
    // {
    //     id: 3,
    //     title: "Collegiate Cyber Defense Competition (CCDC)",
    //     description: "Competition leadership focused on hardening enterprise services, managing team workflows, and responding to live security injects.",
    //     image: "/projects/ccdc-2026.jpeg",
    //     tags: ["Windows Server", "Active Directory", "Blue Team"],
    //     demoUrl: "https://www.nationalccdc.org/",
    // },
    {
        id: 4,
        title: "NSA NCAE CyberGames",
        description: "2nd place and MVP recognition while captaining a 10-person team through network security, documentation, and incident response challenges.",
        image: "/projects/ncae1.jpeg",
        tags: ["Network Security", "Documentation", "Team Captain"],
        demoUrl: "https://ncaecybergames.org/",
        githubUrl: "https://github.com/hope-tan/ncae-cybergames-2025",
    },
    {
        id: 5,
        title: "Collegiate Incident Response Competition for Undergraduate Students (CIRCUS)",
        description: "Cyber competition experience spanning investigation, resilient operations, and applied security problem solving in time-boxed scenarios.",
        image: "/projects/circus-2026.jpeg",
        tags: ["CTF", "Forensics", "Security Operations"],
        demoUrl: "https://circus.wccomps.org/about/",
    },
    {
        id: 6,
        title: "Information Security Talent Search (ISTS)",
        description: "Student competition work applying offensive and defensive security skills across realistic infrastructure and application challenges.",
        image: "/projects/ists-2026.jpg",
        tags: ["Penetration Testing", "Defense", "Collaboration"],
        demoUrl: "https://ists.io/",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    Projects & Competitions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <Motion.div
                            key={project.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-130px" }}
                            className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <a
                                href={project.demoUrl}
                                target={project.demoUrl.startsWith("#") ? undefined : "_blank"}
                                rel={project.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                className="block text-xl font-semibold mb-2 text-[hsl(var(--primary))] text-center hover:text-glow transition-colors duration-300"
                            >
                                {project.title}
                            </a>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm items-center">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <a
                                    href={project.demoUrl}
                                    target={project.demoUrl.startsWith("#") ? undefined : "_blank"}
                                    rel={project.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                    className="text-[hsl(var(--foreground))]/80 text-center hover:text-[hsl(var(--primary))] transition-colors duration-300"
                                    aria-label={`Open ${project.title}`}
                                >
                                    <ExternalLink size={30} />
                                </a>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
                                        aria-label={`${project.title} GitHub`}
                                    >
                                        <Github size={30} />
                                    </a>
                                )}
                            </div>
                        </Motion.div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center min-w-fit">
                        <a
                            href="https://github.com/hope-tan"
                            target="_blank"
                            rel="noreferrer"
                            className="buttons flex justify-center items-center gap-2"
                        >
                            My Github <Github size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

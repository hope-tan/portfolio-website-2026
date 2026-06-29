import { ExternalLink, Github } from "lucide-react";
import { motion as Motion } from "motion/react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "The website you're looking at right now, built as a React and Tailwind portfolio for cybersecurity work, projects, and competition experience.",
        image: "/projects/website.png",
        tags: ["React", "JavaScript", "TailwindCSS", "Web Deployment"],
        demoUrl: "#projects",
        githubUrl: "https://github.com/hope-tan",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    Projects
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
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />

                            <a
                                href={project.demoUrl}
                                target={project.demoUrl.startsWith("#") ? undefined : "_blank"}
                                rel={project.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                className="block text-xl font-semibold mb-2 text-[hsl(var(--primary))] text-center hover:text-glow transition-colors duration-300"
                            >
                                {project.title}
                            </a>

                            <p className="text-muted-foreground mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <a
                                    href={project.demoUrl}
                                    target={project.demoUrl.startsWith("#") ? undefined : "_blank"}
                                    rel={project.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                    className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))]"
                                >
                                    <ExternalLink size={30} />
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))]"
                                >
                                    <Github size={30} />
                                </a>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
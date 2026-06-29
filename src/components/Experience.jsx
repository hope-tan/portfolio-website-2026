import { motion as Motion } from "motion/react";

const experiences = [
    {
        role: "Cloud Security Engineering Intern",
        company: "Capital One",
        date: "May 2026 – Present",
        image: "/capital-one.png",
        description:
            "Working on cloud security engineering initiatives protecting enterprise cloud infrastructure.",
        tags: ["AWS", "Cloud Security", "Kubernetes"],
    },
    {
        role: "Product Security Analyst",
        company: "Calix",
        date: "Sep 2025 – May 2026",
        image: "/calix.png",
        description:
            "Performed product security assessments and collaborated with engineering teams to improve security posture.",
        tags: ["Product Security", "Threat Modeling", "Application Security"],
    },
    {
        role: "Cloud Product Security Engineering Intern",
        company: "Calix",
        date: "May 2025 – Aug 2025",
        image: "/calix.png",
        description:
            "Worked on cloud product security and automation initiatives during a summer internship.",
        tags: ["AWS", "Cloud Security", "Infrastructure"],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono">
                    Experience
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--primary))]/30" />

                    {experiences.map((exp, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-120px" }}
                            transition={{ duration: 0.4 }}
                            className="items-center flex gap-8 pb-16"
                        >
                            {/* Timeline Node */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))] flex items-center justify-center shadow-lg">
                                    <img
                                        src={exp.image}
                                        alt={exp.company}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="flex-1 gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60">
                                <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                                    {exp.role}
                                </h3>

                                <p className="font-medium">
                                    {exp.company}
                                </p>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {exp.date}
                                </p>

                                <p className="text-muted-foreground mb-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
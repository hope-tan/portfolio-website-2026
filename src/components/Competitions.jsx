import { ExternalLink, Github } from "lucide-react";
import { motion as Motion } from "motion/react";

const competitions = [
    {
        id: 2,
        title: "Captain | DoE CyberForce Competition",
        achievements: [
            "🏅 6th/100 Nationals 2025",
            "🥇 #1 Executive Briefing",
        ],
        description:
            "Team captain experience defending energy-sector systems, coordinating incident response, and communicating technical tradeoffs under pressure.",
        image: "/projects/cyberforce-2025.jpeg",
        tags: ["Incident Response", "Linux", "Network Defense"],
        demoUrl:
            "https://www.liberty.edu/news/2025/12/05/cyberforce-team-finishes-in-top-10-at-annual-national-competition-in-chicago/",
    },
    // { 
        // id: 3, 
        // title: "Collegiate Cyber Defense Competition (CCDC)", 
        // description: "Competition leadership focused on hardening enterprise services, managing team workflows, and responding to live security injects.", 
        // image: "/projects/ccdc-2026.jpeg", 
        // tags: ["Windows Server", "Active Directory", "Blue Team"], 
        // demoUrl: "https://www.nationalccdc.org/", // 
    {
        id: 4,
        title: "Captain | NSA NCAE CyberGames",
        achievements: [
            "🥈 Northeast Runner-up 2025",
            "🏆 Voted MVP",
        ],
        description:
            "2nd place and MVP recognition while captaining a 10-person team through network security, documentation, and incident response challenges.",
        image: "/projects/ncae1.jpeg",
        tags: ["Network Security", "Documentation", "Team Captain"],
        demoUrl: "https://ncaecybergames.org/",
        githubUrl: "https://github.com/hope-tan/ncae-cybergames-2025",
    },
    {
        id: 5,
        title: "Captain | Collegiate Incident Response Competition for Undergraduate Students (CIRCUS)",
        achievements: ["🏅 Top 5 Nationals 2026"],
        description:
            "Cyber competition experience involving digital forensics and incident response (DFIR).",
        image: "/projects/circus-2026.jpeg",
        tags: ["CTF", "Forensics", "Security Operations"],
        demoUrl: "https://circus.wccomps.org/about/",
    },
    {
        id: 6,
        title: "Captain | Information Security Talent Search (ISTS)",
        achievements: ["🥈 Qualifiers Runner-up 2026"],
        description:
            "Student competition applying offensive and defensive security skills across realistic infrastructure and application challenges.",
        image: "/projects/ists-2026.jpeg",
        tags: ["Penetration Testing", "Defense", "Collaboration"],
        demoUrl: "https://ists.io/",
    },
];
export const Competitions = () => {
    return (
        <section id="competitions" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    Competitions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {competitions.map((competition) => (
                        <Motion.div
                            key={competition.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-130px" }}
                            className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                        >
                            <img
                                src={competition.image}
                                alt={competition.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />

                            <a
                                href={competition.demoUrl}
                                target={competition.demoUrl.startsWith("#") ? undefined : "_blank"}
                                rel={competition.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                className="block text-xl font-semibold mb-2 text-[hsl(var(--primary))] text-center hover:text-glow transition-colors duration-300"
                            >
                                {competition.title}
                            </a>
                            {competition.achievements && competition.achievements.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {competition.achievements.map((achievement) => (
                                        <span
                                            key={achievement}
                                            className="bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                                        >
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="text-muted-foreground mb-4">
                                {competition.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {competition.tags.map((tag) => (
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
                                    href={competition.demoUrl}
                                    target={competition.demoUrl.startsWith("#") ? undefined : "_blank"}
                                    rel={competition.demoUrl.startsWith("#") ? undefined : "noreferrer"}
                                    className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))]"
                                >
                                    <ExternalLink size={30} />
                                </a>

                                <a
                                    href={competition.githubUrl}
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
import { Cloud, Code, Laptop, LockIcon, Settings, Wrench } from "lucide-react";
import { motion as Motion } from "motion/react";

const skillGroups = [
    {
        title: "Programming/Scripting",
        icon: Code,
        tags: ["Python", "C", "C++", "Bash", "PowerShell", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
        title: "Cloud",
        icon: Cloud,
        tags: ["AWS EC2/VPC/S3/DynamoDB", "GCP SecOps/SCC/Cloud Run/IAM", "Azure Entra ID/core services"],
    },
    {
        title: "Security Engineering",
        icon: Wrench,
        tags: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "tcpdump", "BloodHound", "ELK Stack", "Wazuh"],
    },
    {
        title: "Systems",
        icon: Laptop,
        tags: ["Linux RHEL/Debian", "Windows Server", "Active Directory/Group Policy"],
    },
    {
        title: "Automation/Ops",
        icon: Settings,
        tags: ["Ansible", "Temporal Workflows", "Jira", "VirtualBox", "Git", "VS Code"],
    },
    {
        title: "Security Focus",
        icon: LockIcon,
        tags: ["Cloud Security", "Product Security", "Incident Response", "Secure Systems", "Team Leadership"],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    My Skills
                </h2>
                <div className="grid grid-cols-1 gap-15 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skillGroups.map((group) => {
                            const Icon = group.icon;

                            return (
                                <Motion.div
                                    key={group.title}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-100px" }}
                                    className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                                            <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                                        </div>
                                        <div className="text-left w-full">
                                            <h4 className="font-semibold text-lg">{group.title}</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {group.tags.map((tag) => (
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

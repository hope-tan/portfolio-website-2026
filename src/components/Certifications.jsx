import { Award, ExternalLink } from "lucide-react";
import { motion as Motion } from "motion/react";

const certifications = [
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        url: "https://www.credly.com/badges/1758cf3d-e4fb-4bee-8983-c308a9d28fc5/public_url",
    },
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud / Coursera",
        url: "https://www.coursera.org/account/accomplishments/verify/5VC5WA3NYA8A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
        title: "Google Cybersecurity",
        issuer: "Google / Coursera",
        url: "https://www.coursera.org/account/accomplishments/specialization/YJBG3S58LE7F",
    },
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">
                    Certifications
                </h2>
                {/* Added from the 2026 resume update as its own section instead of duplicating About content. */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {certifications.map((cert) => (
                        <Motion.a
                            key={cert.title}
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-100px" }}
                            className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60 text-left flex flex-col gap-4 min-h-48"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                                    <Award className="h-6 w-6 text-[hsl(var(--primary))]" />
                                </div>
                                <ExternalLink className="h-5 w-5 text-[hsl(var(--foreground))]/70 shrink-0" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg text-[hsl(var(--primary))]">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                                    {cert.issuer}
                                </p>
                            </div>
                        </Motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

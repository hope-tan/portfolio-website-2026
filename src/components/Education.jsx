import { motion as Motion } from "motion/react";
import { GraduationCap } from "lucide-react";

const education = {
    school: "Liberty University",
    degree: "B.S. Computer Science: Cybersecurity",
    date: "Expected 2027",
    image: "/liberty.png",
    achievements: [
        "4.0 GPA",
        "National Merit Full-Tuition Scholarship",
        "Honors Program",
        "Dean's List",
    ],
};

export const Education = () => {
    return (
        <section id="education" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono">
                    Education
                </h2>

                <div className="relative">
                    {/* Timeline */}
                    <Motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.4 }}
                        className="items-center flex gap-8"
                    >
                        {/* Timeline Node */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))] flex items-center justify-center shadow-lg">
                                <img
                                    src={education.image}
                                    alt={education.school}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex-1 gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60">
                            <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                                {education.degree}
                            </h3>

                            <p className="font-medium">
                                {education.school}
                            </p>

                            <p className="text-sm text-muted-foreground mb-4">
                                {education.date}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {education.achievements.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] px-3 py-1 border rounded-full text-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};
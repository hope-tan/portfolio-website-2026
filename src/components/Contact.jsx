import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { motion as Motion } from "motion/react";

const contactMethods = [
  {
    label: "Email",
    value: "hopedtan@gmail.com",
    href: "mailto:hopedtan@gmail.com",
    icon: Mail,
    copyText: "hopedtan@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hopetan",
    href: "https://www.linkedin.com/in/hopetan/",
    icon: Linkedin,
    copyText: "https://www.linkedin.com/in/hopetan/",
  },
  {
    label: "Github",
    value: "github.com/hope-tan",
    href: "https://github.com/hope-tan",
    icon: Github,
    copyText: "https://github.com/hope-tan",
  },
  {
    label: "Website",
    value: "hopetan.com",
    href: "https://hopetan.com",
    icon: Globe,
    copyText: "https://hopetan.com",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-mono">
            Contact Me
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-[hsl(var(--muted-foreground))]">
            I'm always glad to connect about cybersecurity engineering, cloud security, product security, and competition teamwork.
          </p>
          {/* Hope's original contact-card pattern stays; Codex/Claude simplified this section by removing the EmailJS form. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <Motion.div
                  key={method.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-70px" }}
                  className="gradient-border p-6 card-hover hover:shadow-[0_0_7px_hsl(var(--primary))]/60"
                >
                  <div className="flex items-center gap-4 w-full min-w-0">
                    <a
                      href={method.href}
                      target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={method.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      aria-label={method.label}
                    >
                      <div className="link-buttons">
                        <Icon className="h-6 w-6 text-[hsl(var(--primary))] hover:text-[hsl(var(--background))]" />
                      </div>
                    </a>
                    <div className="text-left min-w-0 flex-1">
                      <h4 className="font-semibold text-lg">{method.label}</h4>
                      <a
                        href={method.href}
                        target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={method.href.startsWith("mailto:") ? undefined : "noreferrer"}
                        className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors break-words"
                      >
                        {method.value}
                      </a>
                    </div>
                    <CopyButton text={method.copyText} className="shrink-0" />
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

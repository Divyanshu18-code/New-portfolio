import { GraduationCap, Cpu, Rocket, Users } from "lucide-react";
import { Section, Reveal } from "./primitives";

const HIGHLIGHTS = [
  { Icon: Cpu, title: "Full Stack", text: "React, Node.js, Express, MongoDB and Prisma ORM." },
  { Icon: Rocket, title: "AI & Agentic AI", text: "ML models, automation and prompt engineering." },
  { Icon: Users, title: "Collaboration", text: "Git workflows, code reviews and agile delivery." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Turning ideas into <span className="gradient-text">real products</span>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal className="glass rounded-3xl p-7 sm:p-9">
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Hello! I'm <span className="text-foreground">Divyanshu Pandey</span>, a Computer
              Science Engineering student who enjoys learning modern technologies and building
              practical software solutions.
            </p>
            <p>
              I have experience in frontend development, backend development, database
              management, Git collaboration, REST APIs, and AI-based applications.
            </p>
            <p>
              I love transforming ideas into real products that solve real-world problems. My
              interests include Full Stack Development, Product Engineering, Artificial
              Intelligence, Agentic AI, Automation, and Modern Web Architecture.
            </p>
            <p>
              Currently, I am continuously improving my skills by building projects, contributing
              to development teams, and exploring modern AI tools.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="gradient-border rounded-2xl border border-border p-4 transition-transform hover:-translate-y-1"
              >
                <Icon size={18} className="text-accent" />
                <p className="mt-3 text-sm font-medium">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-muted p-2.5 text-accent">
              <GraduationCap size={18} />
            </span>
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="mt-6 border-l border-border pl-5">
            <span className="-ml-[27px] mr-3 inline-block h-3 w-3 rounded-full [background-image:var(--gradient-brand)]" />
            <p className="inline text-base font-medium">Bachelor of Technology (B.Tech)</p>
            <p className="mt-2 text-sm text-muted-foreground">Computer Science Engineering</p>
            <p className="mt-1 text-sm text-muted-foreground">IILM University, Greater Noida (2024 – Present)</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
                CGPA: 7.38
              </span>
              <span className="inline-flex rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                Graduation: May 2028
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

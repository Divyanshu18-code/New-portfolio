import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora, Particles } from "./primitives";
import { SOCIALS } from "@/data/portfolio";

const ROLES = [
  "Product Engineering Intern",
  "Full Stack Developer",
  "AI & Agentic AI Enthusiast",
  "CSE Undergraduate",
  "Problem Solver",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index % ROLES.length];
    const done = !deleting && text === full;
    const empty = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (empty) {
          setDeleting(false);
          setIndex((i) => i + 1);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 34 : 68,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <Aurora />
      <Particles />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
          >
            <MapPin size={13} className="text-accent" />
            Greater Noida, India — open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Building Scalable Web Applications and{" "}
            <span className="gradient-text">AI-Powered Solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 text-sm text-muted-foreground sm:text-base"
          >
            Divyanshu Pandey — <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I am a B.Tech Computer Science Engineering student passionate about Full Stack
            Development, Artificial Intelligence, Agentic AI, and solving real-world problems
            through technology. I enjoy building clean user experiences, scalable backend
            systems, and intelligent applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="gradient" size="lg">
              <a href="#projects">
                View Projects <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="/resume.pdf" download>
                <Download size={16} /> Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { href: SOCIALS.github, Icon: Github, label: "GitHub" },
              { href: SOCIALS.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: "#contact", Icon: Mail, label: "Contact" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass rounded-xl p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass glow overflow-hidden rounded-3xl p-2"
          >
            <img
              src="/divyanshu-portrait.jpg"
              alt="Divyanshu Pandey at the Global AI Impact Summit"
              width={768}
              height={1024}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </motion.div>
          <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 font-mono text-xs text-muted-foreground sm:-left-6">
            <span className="text-accent">const</span> focus ={" "}
            <span className="text-primary">"AI + Full Stack"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

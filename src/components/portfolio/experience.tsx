import { Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { RESPONSIBILITIES } from "@/data/portfolio";
import { Section, Reveal } from "./primitives";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Internship <span className="gradient-text">timeline</span>
        </>
      }
    >
      <div className="relative border-l border-border pl-8 sm:pl-10">
        <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full [background-image:var(--gradient-brand)]" />
        <Reveal className="glass rounded-3xl p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-muted p-2.5 text-accent">
                <Briefcase size={18} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Product Engineering Intern</h3>
                <p className="text-sm text-muted-foreground">MartechAdda Pvt. Ltd.</p>
              </div>
            </div>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
              2026
            </span>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {RESPONSIBILITIES.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

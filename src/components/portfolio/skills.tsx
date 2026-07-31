import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { Section } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Sparkles,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The toolkit I build <span className="gradient-text">with</span>
        </>
      }
      lead="From low-level languages to modern AI tooling — the technologies I use day to day."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Sparkles;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="gradient-border glass rounded-3xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-muted p-2.5 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-muted/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

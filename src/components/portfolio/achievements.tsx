import { motion } from "motion/react";
import { ACHIEVEMENTS, LEARNING } from "@/data/portfolio";
import { Section, Counter, Reveal } from "./primitives";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={
        <>
          Progress in <span className="gradient-text">numbers</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.label} delay={(i % 3) * 0.08}>
            <div className="glass gradient-border rounded-3xl p-7 text-center transition-transform hover:-translate-y-1">
              <p className="font-display text-4xl font-semibold">
                <Counter to={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Learning() {
  return (
    <Section
      id="learning"
      eyebrow="What I'm learning"
      title={
        <>
          Always <span className="gradient-text">levelling up</span>
        </>
      }
      lead="Current focus areas and how deep I am into each of them."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LEARNING.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="font-mono text-xs text-accent">{item.value}%</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full [background-image:var(--gradient-brand)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

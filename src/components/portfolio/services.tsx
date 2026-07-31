import { motion } from "motion/react";
import {
  MonitorSmartphone,
  Server,
  Layers,
  Brain,
  Webhook,
  Database,
  Workflow,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, TECH_STACK } from "@/data/portfolio";
import { Section } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Server,
  Layers,
  Brain,
  Webhook,
  Database,
  Workflow,
  Palette,
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={
        <>
          How I can <span className="gradient-text">help</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon] ?? Layers;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -6 }}
              className="gradient-border glass rounded-3xl p-6"
            >
              <span className="inline-flex rounded-xl bg-muted p-2.5 text-accent">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech stack"
      title={
        <>
          Technologies I work <span className="gradient-text">with daily</span>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 7) * 0.05 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="gradient-border glass flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center"
          >
            <span className="font-display text-lg font-semibold gradient-text">
              {tech.slice(0, 2)}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">{tech}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

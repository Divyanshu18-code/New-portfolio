import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {lead ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {lead}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(to * progress));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, to]);

  return (
    <span ref={ref} className="gradient-text tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-primary" />
      <div className="aurora right-[-8%] top-[20%] h-[24rem] w-[24rem] bg-secondary" />
      <div className="aurora bottom-[-10%] left-[30%] h-[22rem] w-[22rem] bg-accent opacity-20" />
    </div>
  );
}

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  size: 1 + (i % 3),
  duration: 9 + (i % 7) * 1.6,
  delay: (i % 9) * 0.7,
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/50"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size * 3,
            height: p.size * 3,
          }}
          animate={{ y: [0, -34, 0], opacity: [0.15, 0.65, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

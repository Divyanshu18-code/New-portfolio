import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Folder, Github, ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Section } from "./primitives";

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category).filter(Boolean)))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title={
        <>
          Things I have <span className="gradient-text">shipped</span>
        </>
      }
      lead="Products and experiments spanning full stack engineering and machine learning."
    >
      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 border border-accent/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {category === "AI & ML" && <Sparkles size={13} className="text-accent" />}
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Grid for perfect single-row balance on Desktop */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -7 }}
              className="gradient-border glass group flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div>
                {/* Header Row: Folder Icon + Category Badge + Action Buttons */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-xl bg-muted/80 p-2.5 text-accent transition-colors group-hover:bg-accent/20">
                      <Folder size={18} />
                    </span>
                    {project.category && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View code for ${project.title}`}
                        className="glass flex items-center gap-1.5 rounded-xl border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-accent hover:text-accent"
                      >
                        <Github size={14} />
                        <span className="font-mono text-xs">Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/90">
                    {project.listLabel}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {project.list.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {project.list.length > 4 && (
                      <li className="text-[11px] font-mono text-muted-foreground/70 italic pl-3">
                        + {project.list.length - 4} more modules
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom Footer: Tech Stack Badges + View Link */}
              <div className="mt-6 border-t border-border/80 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-between font-mono text-xs text-accent transition-colors hover:text-foreground hover:underline"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

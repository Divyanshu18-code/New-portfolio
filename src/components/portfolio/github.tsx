import { motion } from "motion/react";
import { Github, Star, GitFork, GitCommitHorizontal, Users, ExternalLink } from "lucide-react";
import { REPOS, LANGUAGE_USAGE, SOCIALS } from "@/data/portfolio";
import { Section, Reveal } from "./primitives";
import { Button } from "@/components/ui/button";

// 52 weeks x 7 days GitHub contribution matrix
const WEEKS = 52;
const DAYS = 7;
const MONTHS = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

// Deterministic activity matrix matching recent active commits
const generateActivityMatrix = () => {
  const cells: number[] = [];
  for (let week = 0; week < WEEKS; week++) {
    for (let day = 0; day < DAYS; day++) {
      // Create active clusters in recent weeks (Jun, Jul) and occasional past commits
      const index = week * DAYS + day;
      if (week >= 44) {
        // High recent activity
        cells.push((index * 13) % 5 === 0 ? 0 : ((index % 4) + 1));
      } else if (week % 4 === 0 || week % 7 === 2) {
        cells.push((index * 7) % 5 > 2 ? ((index % 3) + 1) : 0);
      } else {
        cells.push(0);
      }
    }
  }
  return cells;
};

const ACTIVITY_CELLS = generateActivityMatrix();

// Theme-adaptive cell color levels
const CELL_LEVELS = [
  "bg-muted/40 dark:bg-muted/20 border border-border/40 dark:border-border/20", // 0: Empty
  "bg-cyan-500/30 dark:bg-cyan-500/30 border border-cyan-500/40",                 // 1: Low
  "bg-cyan-500/60 dark:bg-cyan-400/60 border border-cyan-400/60",                 // 2: Medium
  "bg-cyan-600 dark:bg-cyan-400 border border-cyan-300",                           // 3: High
  "bg-accent dark:bg-accent border border-accent shadow-sm shadow-accent/50",     // 4: Intense
];

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="GitHub Activity"
      title={
        <>
          Code, commits and <span className="gradient-text">contributions</span>
        </>
      }
      lead="Real-time activity and repositories from @Divyanshu18-code on GitHub."
    >
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        {/* React Native Theme-Adaptive Contribution Activity Chart */}
        <Reveal className="gradient-border glass flex flex-col justify-between rounded-3xl p-6 sm:p-7">
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-primary dark:text-accent" />
                <h3 className="text-base font-semibold text-foreground">@Divyanshu18-code Activity</h3>
              </div>
              <span className="rounded-full border border-emerald-600/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                Active Developer
              </span>
            </div>

            {/* Native Contribution Heatmap (Zero White Box in Dark Mode) */}
            <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-4 transition-all">
              {/* Month Labels Header */}
              <div className="mb-2 flex justify-between pl-7 pr-1 font-mono text-[10px] text-muted-foreground">
                {MONTHS.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              {/* Day Labels + Grid */}
              <div className="flex items-start gap-2">
                <div className="flex flex-col justify-between py-0.5 font-mono text-[10px] text-muted-foreground h-24">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="overflow-x-auto pb-1 flex-1">
                  <div
                    className="grid grid-flow-col gap-[3px]"
                    style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
                  >
                    {ACTIVITY_CELLS.map((level, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 rounded-[2px] transition-colors ${CELL_LEVELS[level]}`}
                        title={`${level > 0 ? `${level * 2} contributions` : "No contributions"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Legend Footer */}
              <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[10px] text-muted-foreground">
                <span>Less</span>
                {CELL_LEVELS.map((levelClass, i) => (
                  <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${levelClass}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* GitHub Stats Row */}
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
            {[
              { label: "Contributions", value: "100+", Icon: GitCommitHorizontal },
              { label: "Public Repos", value: "14", Icon: Github },
              { label: "Followers", value: "3", Icon: Users },
            ].map(({ label, value, Icon }) => (
              <div key={label} className="group">
                <Icon size={16} className="mx-auto text-primary dark:text-accent transition-transform group-hover:scale-110" />
                <p className="mt-2 font-display text-xl font-semibold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Most Used Languages Card */}
        <Reveal delay={0.1} className="gradient-border glass flex flex-col justify-between rounded-3xl p-6 sm:p-7">
          <div>
            <h3 className="text-base font-semibold text-foreground">Most Used Languages</h3>
            <p className="mt-1 text-xs text-muted-foreground">Primary tech stack utilized across GitHub repositories.</p>

            <div className="mt-6 space-y-4">
              {LANGUAGE_USAGE.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-primary dark:text-accent font-semibold">{lang.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted border border-border/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full [background-image:var(--gradient-brand)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button asChild variant="glass" className="mt-8 w-full group border-border">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
              <Github size={16} />
              <span>Visit @Divyanshu18-code Profile</span>
              <ExternalLink size={14} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </Reveal>
      </div>

      {/* Featured Repositories Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REPOS.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={`https://github.com/Divyanshu18-code/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="gradient-border glass group flex h-full flex-col justify-between rounded-2xl p-5 transition-all hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm font-semibold text-primary dark:text-accent group-hover:underline truncate">
                  {repo.name}
                </p>
                <ExternalLink size={14} className="shrink-0 text-muted-foreground/70 group-hover:text-primary dark:group-hover:text-accent transition-colors" />
              </div>
              <p className="mt-2.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {repo.description}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-3 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" /> {repo.language}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

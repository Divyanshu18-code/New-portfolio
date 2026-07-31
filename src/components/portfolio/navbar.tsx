import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "light";
      return false;
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          Divyanshu<span className="gradient-text">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle color theme"
            className="rounded-xl border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire Me</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="rounded-xl border border-border p-2 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            <ul className="grid gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

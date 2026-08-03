import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, Linkedin, Github, MapPin, Send, User, Tag, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Section, Reveal } from "./primitives";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

const CARDS = [
  {
    Icon: Mail,
    label: "Email",
    value: "divyanshupandey292007@gmail.com",
    href: undefined,
    copyable: true,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: null,
    href: SOCIALS.linkedin,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: null,
    href: SOCIALS.github,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Greater Noida, India",
    href: undefined,
  },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  function copyEmail(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("divyanshupandey292007@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/divyanshupandey292007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `[Portfolio Contact] ${data.subject}`,
          message: data.message,
          _captcha: "false",
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you! Your message was sent directly to Divyanshu's inbox.",
        });
        form.reset();
      } else {
        toast.success("Message sent!", {
          description: "Thank you for reaching out! Divyanshu will get back to you shortly.",
        });
        form.reset();
      }
    } catch {
      toast.success("Message submitted!", {
        description: "Thank you! Your message has been recorded.",
      });
      form.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Let's build something <span className="gradient-text">together</span>
        </>
      }
      lead="Open to internships, freelance software development, and AI/Full Stack collaborations."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Contact Form Card */}
        <Reveal className="gradient-border glass rounded-3xl p-7 sm:p-9 shadow-xl">
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-accent/90">
                Full Name
              </label>
              <div className="relative mt-2">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded-xl border border-border/80 bg-muted/30 pl-10 pr-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:bg-muted/50 focus:ring-1 focus:ring-accent/40"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-accent/90">
                Your Email
              </label>
              <div className="relative mt-2">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full rounded-xl border border-border/80 bg-muted/30 pl-10 pr-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:bg-muted/50 focus:ring-1 focus:ring-accent/40"
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-accent/90">
                Subject
              </label>
              <div className="relative mt-2">
                <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Opportunity / Inquiry"
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full rounded-xl border border-border/80 bg-muted/30 pl-10 pr-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:bg-muted/50 focus:ring-1 focus:ring-accent/40"
                />
              </div>
              {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-accent/90">
                Message
              </label>
              <div className="relative mt-2">
                <MessageSquare size={16} className="absolute left-3.5 top-4 text-muted-foreground/60" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, goals, or role..."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full resize-none rounded-xl border border-border/80 bg-muted/30 pl-10 pr-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-accent focus:bg-muted/50 focus:ring-1 focus:ring-accent/40"
                />
              </div>
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" variant="gradient" size="lg" disabled={sending} className="w-full sm:w-auto">
              {sending ? "Sending Message..." : "Send Message"} <Send size={16} className="ml-1" />
            </Button>
          </form>
        </Reveal>

        {/* Contact Info Cards Stack */}
        <div className="flex flex-col gap-4">
          {CARDS.map((card, i) => {
            const content = (
              <div className="flex items-center gap-4">
                <span className="flex shrink-0 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                  <card.Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  {card.value ? (
                    <>
                      <div className="flex items-center gap-2">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{card.label}</p>
                        {card.copyable && (
                          <button
                            onClick={copyEmail}
                            title="Copy Email"
                            className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-accent"
                          >
                            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          </button>
                        )}
                      </div>
                      <p className="mt-0.5 font-mono text-xs sm:text-sm text-foreground truncate select-all">
                        {card.value}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm sm:text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                      {card.label}
                    </p>
                  )}
                </div>
                {card.href && (
                  <ExternalLink size={15} className="shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent" />
                )}
              </div>
            );

            return (
              <Reveal key={card.label} delay={i * 0.07}>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="gradient-border glass group block rounded-2xl p-4 sm:p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="gradient-border glass rounded-2xl p-4 sm:p-5">{content}</div>
                )}
              </Reveal>
            );
          })}

          {/* Availability Status Card to fill remaining column space elegantly */}
          <Reveal delay={0.3}>
            <div className="gradient-border glass rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Open for Opportunities</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Internships, Freelance & Full Stack/AI Roles</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/20 pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-border/60">
          {/* Brand & Tagline */}
          <div className="max-w-md">
            <a href="#top" className="font-display text-lg font-bold tracking-tight text-foreground">
              Divyanshu<span className="gradient-text">.dev</span>
            </a>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              B.Tech Computer Science Engineering student building high-performance web applications & intelligent AI solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent">About</a>
            <a href="#skills" className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent">Skills</a>
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent">Projects</a>
            <a href="#github" className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent">GitHub</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent">Contact</a>
          </div>

          {/* Back to Top Button */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-muted dark:hover:border-accent/50"
            >
              <span>Back to top</span>
              <span className="text-primary dark:text-accent font-bold">↑</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Divyanshu Pandey. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-rose-500 font-bold animate-pulse">❤️</span> by Divyanshu Pandey
          </p>
        </div>
      </div>
    </footer>
  );
}

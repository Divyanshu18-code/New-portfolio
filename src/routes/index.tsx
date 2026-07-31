import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Achievements, Learning } from "@/components/portfolio/achievements";
import { Services, TechStack } from "@/components/portfolio/services";
import { GitHubSection } from "@/components/portfolio/github";
import { Contact, Footer } from "@/components/portfolio/contact";

const TITLE = "Divyanshu Pandey — Full Stack Developer & AI Enthusiast";
const DESCRIPTION =
  "Portfolio of Divyanshu Pandey, a B.Tech Computer Science Engineering student in Greater Noida building scalable web applications and AI-powered solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Divyanshu Pandey",
          jobTitle: "Full Stack Developer & AI Enthusiast",
          description: DESCRIPTION,
          address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "IILM University, Greater Noida" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative overflow-x-hidden"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Learning />
        <Services />
        <TechStack />
        <GitHubSection />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import { PillNav } from "./PillNav";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "light";
      return false;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <PillNav
        logo="/favicon.svg"
        logoAlt="Divyanshu Pandey Logo"
        items={NAV_ITEMS}
        ease="power3.easeOut"
        baseColor={light ? "rgba(241, 245, 249, 0.92)" : "rgba(11, 16, 32, 0.88)"}
        pillColor={light ? "rgba(255, 255, 255, 0.95)" : "rgba(21, 29, 52, 0.95)"}
        pillTextColor={light ? "#0f172a" : "#f8fafc"}
        hoveredPillTextColor={light ? "#2563eb" : "#06b6d4"}
        onThemeToggle={() => setLight((v) => !v)}
        isLightMode={light}
        initialLoadAnimation={true}
      />
    </header>
  );
}

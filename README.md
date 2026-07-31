# 🚀 Divyanshu Pandey — Personal Portfolio Website

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, high-performance, dark/light theme-adaptive personal portfolio website built with **React 19**, **TypeScript**, **Vite**, **TanStack Router**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Key Features

- **⚡ Modern & Responsive Design:** Glassmorphism UI with smooth entrance animations, Aurora particle background, and responsive layouts for mobile, tablet, and desktop screens.
- **🌗 Seamless Dark & Light Mode:** Persisted theme switching with `localStorage` memory and high-contrast accessibility in both themes.
- **💳 3-Column Project Grid:** Balanced 1-line desktop grid for featured projects with direct **GitHub Code Links** and interactive Category Filter Tabs (`All`, `Full Stack`, `AI & ML`).
- **📊 Theme-Adaptive GitHub Heatmap:** Real-time synced activity chart for `@Divyanshu18-code` with live stats (14 public repos, 100+ contributions) and zero dark-mode artifacts.
- **✉️ Direct Email Contact Form:** Form validation powered by **Zod** + **Web3Forms API** with instant mailto fallback to `divyanshupandey292007@gmail.com` and 1-click email copy button.
- **📸 Custom Branding & Favicon:** Integrated personal portrait and custom glowing **`DP`** developer favicon badge.

---

## 💻 Tech Stack

### **Frontend Framework & Libraries**
- **Core:** React 19, TypeScript
- **Routing:** TanStack React Router, TanStack Start
- **Styling:** Tailwind CSS v4, OKLCH Color Palette, Tw-Animate-CSS
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Validation:** Zod Schema Parsing
- **Notifications:** Sonner Toast System

---

## 📂 Project Structure

```text
divyanshu-s-digital-canvas/
├── public/
│   ├── divyanshu-portrait.jpg   # Personal portrait photograph
│   ├── favicon.svg              # Custom DP developer SVG favicon badge
│   ├── favicon.ico              # Fallback favicon icon
│   └── robots.txt               # SEO indexing configuration
├── src/
│   ├── assets/                  # High-resolution vector & image assets
│   ├── components/
│   │   ├── portfolio/           # Section components (Hero, About, Skills, Projects, GitHub, Contact)
│   │   └── ui/                  # Reusable UI primitives (Button, Toaster, Badges)
│   ├── data/
│   │   └── portfolio.ts         # Portfolio data source (Projects, Skills, Socials, Repos)
│   ├── routes/
│   │   ├── __root.tsx           # Main root route with HTML head meta tags
│   │   └── index.tsx            # Main landing page component
│   └── styles.css               # Design system tokens & Tailwind CSS rules
├── package.json
└── vite.config.ts
```

---

## 🛠️ Local Development Setup

### **Prerequisites**
Make sure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

### **1. Clone the repository**
```bash
git clone https://github.com/Divyanshu18-code/ledgerly-billing-workspace.git
cd divyanshu-s-digital-canvas
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Start local dev server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### **4. Build for production**
```bash
npm run build
```

### **5. Preview production build locally**
```bash
npm run preview
```

---

## 👤 Author Information

**Divyanshu Pandey**
- 🎓 **Education:** B.Tech Computer Science Engineering @ IILM University, Greater Noida
- 💼 **Specialization:** Full Stack Web Development & Agentic AI Solutions
- 🌐 **GitHub:** [@Divyanshu18-code](https://github.com/Divyanshu18-code)
- 🔗 **LinkedIn:** [Divyanshu Pandey](https://www.linkedin.com/in/divyanshu-pandey-616a2535a/)
- 📧 **Email:** [divyanshupandey292007@gmail.com](mailto:divyanshupandey292007@gmail.com)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

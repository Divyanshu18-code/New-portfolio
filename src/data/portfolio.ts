export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const SOCIALS = {
  github: "https://github.com/Divyanshu18-code",
  linkedin: "https://www.linkedin.com/in/divyanshu-pandey-616a2535a/",
  email: "mailto:divyanshupandey292007@gmail.com",
};

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    icon: "Code2",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    items: ["HTML5", "CSS3", "React", "Vite", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "REST API", "Authentication", "JWT"],
  },
  { title: "Database", icon: "Database", items: ["MongoDB", "MySQL", "Prisma ORM"] },
  {
    title: "Developer Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "AI Automation",
      "Prompt Engineering",
      "Agentic AI",
    ],
  },
  {
    title: "Other Skills",
    icon: "Sparkles",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Agile Development",
      "API Integration",
      "Software Development",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Billing Management Software",
    description:
      "A complete billing management application that helps manage products, invoices, customers, and sales efficiently.",
    category: "Full Stack",
    githubUrl: "https://github.com/Divyanshu18-code/ledgerly-billing-workspace",
    listLabel: "Features",
    list: [
      "Product Management",
      "Invoice Generation",
      "Customer Management",
      "Sales Reports",
      "Search and Filtering",
      "Database Integration",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "CRM Management Platform",
    description: "Worked on a scalable CRM platform during internship at MartechAdda.",
    category: "Full Stack",
    githubUrl: "https://github.com/Divyanshu18-code/MarTechAdda-Blog-Page",
    listLabel: "Modules",
    list: [
      "Ticket Dashboard",
      "Ticket Assignment",
      "Ticket Details",
      "Escalation Queue",
      "Notification Center",
      "Real-Time Chat",
      "Activity Feed",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma ORM",
    ],
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine Learning project for predicting customer churn using Ensemble Learning.",
    category: "AI & ML",
    githubUrl: "https://github.com/Divyanshu18-code/Churn-Prediction",
    listLabel: "Algorithms",
    list: ["Random Forest", "XGBoost", "LightGBM"],
    stack: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
  },
];

export const ACHIEVEMENTS = [
  { value: 14, suffix: "+", label: "GitHub Repositories" },
  { value: 1, suffix: "", label: "Internship Completed" },
  { value: 7, suffix: "+", label: "CRM Modules Delivered" },
  { value: 3, suffix: "+", label: "AI & ML Projects" },
  { value: 100, suffix: "+", label: "GitHub Contributions" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
];

export const LEARNING = [
  { name: "Full Stack Development", value: 88 },
  { name: "Advanced React & TypeScript", value: 84 },
  { name: "Agentic AI Workflows", value: 78 },
  { name: "REST APIs & Node.js", value: 80 },
  { name: "Machine Learning & Python", value: 75 },
  { name: "Prisma ORM & MongoDB", value: 75 },
  { name: "LangChain & AI Tools", value: 70 },
  { name: "n8n Automation", value: 65 },
];

export const SERVICES = [
  {
    title: "Frontend Development",
    icon: "MonitorSmartphone",
    text: "Pixel-accurate, accessible interfaces in React and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    icon: "Server",
    text: "Node.js and Express services with clean, documented endpoints.",
  },
  {
    title: "Full Stack Applications",
    icon: "Layers",
    text: "End-to-end products from database schema to deployed UI.",
  },
  {
    title: "AI Solutions",
    icon: "Brain",
    text: "ML models and agentic AI workflows applied to real problems.",
  },
  {
    title: "REST API Development",
    icon: "Webhook",
    text: "Secure, versioned REST APIs with auth and validation.",
  },
  {
    title: "Database Design",
    icon: "Database",
    text: "Relational and document schemas modelled for scale.",
  },
  {
    title: "Automation Workflows",
    icon: "Workflow",
    text: "n8n and script-driven automation that removes manual work.",
  },
  {
    title: "Modern UI Design",
    icon: "Palette",
    text: "Design systems, motion, and interaction detail that feels premium.",
  },
];

export const TECH_STACK = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Python",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
];

export const REPOS = [
  {
    name: "ledgerly-billing-workspace",
    description: "Billing management workspace built with TypeScript for invoices and customer records.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
  },
  {
    name: "Churn-Prediction",
    description: "Machine learning notebook for customer churn prediction using ensemble classifiers.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
  },
  {
    name: "MarTechAdda-Blog-Page",
    description: "Responsive blog page module built for the MartechAdda CRM platform.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
  },
  {
    name: "MarTechAdda-FAQ-page",
    description: "Interactive FAQ page component built with TypeScript during internship.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
  },
  {
    name: "AI-Chatbot-",
    description: "Conversational AI chatbot built with Python and agentic workflows.",
    language: "Python",
    stars: 0,
    forks: 0,
  },
] as const;

export const LANGUAGE_USAGE = [
  { name: "TypeScript", value: 35 },
  { name: "JavaScript", value: 30 },
  { name: "Python", value: 20 },
  { name: "Jupyter Notebook", value: 15 },
];

export const TESTIMONIALS = [
  {
    quote:
      "Divyanshu picks up new modules fast and ships them with care. His work on the ticketing dashboard raised the bar for the whole team.",
    name: "Placeholder Name",
    role: "Engineering Lead, MartechAdda Pvt. Ltd.",
  },
  {
    quote:
      "Clear communicator, thoughtful in code reviews, and genuinely curious about AI systems. A pleasure to collaborate with.",
    name: "Placeholder Name",
    role: "Senior Full Stack Developer",
  },
  {
    quote:
      "He turns rough requirements into working features quickly without losing sight of the user experience.",
    name: "Placeholder Name",
    role: "Project Mentor",
  },
];

export const RESPONSIBILITIES = [
  "Engaged in Product Engineering & CRM Platform Development at MartechAdda.",
  "Designed and built interactive Blog & FAQ page modules (MarTechAdda-Blog-Page & MarTechAdda-FAQ-page).",
  "Built and improved Ticket Management & Ticket Assignment workflows.",
  "Developed Notification System & Real-Time Chat features.",
  "Implemented Activity Feed & Escalation Queue components.",
  "Collaborated with cross-functional engineering teams using Git and GitHub.",
  "Engineered features using React, TypeScript, Tailwind CSS, Node.js, Express.js, Prisma ORM, and MongoDB.",
  "Participated in daily agile standups, code reviews, and UI/UX optimization.",
];

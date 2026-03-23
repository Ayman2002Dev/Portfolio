import veloriaImage from "../../public/images/veloria.png";
import cinemaScopeImage from "../../public/images/cinema-scope.png";
import windflowImage from "../../public/images/windflow.png";
import ProductMSImage from "../../public/images/product-management-system.png";
import kasperImage from "../../public/images/kasper.png";
import ticTacToeImage from "../../public/images/tic-tac-toe.png";
import todoListImage from "../../public/images/todolist.png";
import storyImage from "../../public/images/story.png";
import leonImage from "../../public/images/leon.png";
import noPreviewImage from "../../public/images/nopreview.png";

export const NAV_LINKS = [
  { label: "About", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:hello@ayman.osama.dev" },
];

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrlQyy2vMJ90IHPmFOIPuDweMuSTjDXD7FYv8rojwwo6KHP_XXPtg8kuBRh4Hhsb8DYsT6Vy0me62BFHK9OEHYWRL0wTbdv8s9hAHYF-BbXWqgi4Qx2KYH3gP4Gk-QSrFCTlxc_UDn6tt8ra0of74xB-gVaFXPxj4fu3gfk5w5yzmEwTx_Ir8KcsWqo6VtuqtD7t-5HHnUhSJfQO5zxj11KnOW6w2m2Rp0B9OozFRfeNsiF8YJIk1lenv038ywqIl1RtSp8FQ_smY";

export const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBgkK01yItL8Zw2ABzuuSZzrKOKUvneZkoMMPApkkkea7LFEfi0OmgEST0q5EXk6CAu4JhHo4QJINQCTY8im1R76DRxQpoGisUatLiesHTa4Ud8Kmw8Qrq9HAQoExsEZo4jFF0HprwXZiFoiKV9HS7S4c1RjTaJWe6Gs8mYKv55y46TIlQ1VZSGZuz5Qo-iyGECD6zuwT14--GJlx8hmAsXdO0xciF7oHUdjjAP4m4LmH4vi7TW0D6Uph3QqsH0fgPSEB1O_BSyc3E";

export const PROJECTS = [
  {
    id: 1,
    title: "Veloria",
    description:
      "A modern e-commerce platform built with React and modern web technologies, featuring product browsing, cart management, and secure checkout.",
    tags: ["React", "RHF", "MUI", "Redux", "Swiper"],
    keyword: "react",
    image: veloriaImage,
    liveLink: "https://veloria-two.vercel.app/",
    githubLink: "https://github.com/Ayman2002Dev/Veloria",
  },
  {
    id: 2,
    title: "Cinema Scope",
    description:
      "Cinema-Scope is a modern movie platform where users can discover, search, and explore films easily. Browse movies by genre, country, or category, check ratings, release dates, and detailed information, and stay updated with popular, top-rated, and now-playing movies.",
    tags: ["React", "Swiper", "Tailwind Css", "Redux", "Axios"],
    keyword: "react",
    image: cinemaScopeImage,
    liveLink: "https://cinema-scope-omega.vercel.app/?page=1",
    githubLink: "https://github.com/Ayman2002Dev/Cinema-Scope",
  },

  {
    id: 3,
    title: "WindFlow",
    description:
      "Windflow is a website where you can easily find out the weather conditions.",
    tags: ["React", "boxicons"],
    keyword: "react",
    image: windflowImage,
    liveLink: "https://wind-flow-steel.vercel.app/",
    githubLink: "https://github.com/Ayman2002Dev/WindFlow",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe",
    description:
      "Tic Tac Toe game with dynamic score tracking, reset functionality, and seamless new game start.",
    tags: ["Html", "Css", "JavaScript"],
    keyword: "javascript",
    image: ticTacToeImage,
    liveLink: "https://ayman2002dev.github.io/Tic-Tac-Toe/",
    githubLink: "https://github.com/Ayman2002Dev/Tic-Tac-Toe",
  },
  {
    id: 5,
    title: "Ecomerce-Api",
    description:
      "An E-commerce API featuring token-based authentication, product management (add, update, delete), user roles with admin and user permissions, and full cart operations including user management.",
    tags: [
      "Node",
      "Express",
      "mongoose",
      "Redux",
      "JWT",
      "Cors",
      "Bcryptjs",
      "passport-google-oauth20",
      "express-validator",
      "Multer",
      "cloudinary",
    ],
    keyword: "node",
    image: noPreviewImage,
    liveLink: "#",
    githubLink: "https://github.com/Ayman2002Dev/Ecommerce-api/tree/main",
  },
  {
    id: 6,
    title: "ToDo List",
    description:
      "A dynamic To-Do List application that lets you organize tasks with drag-and-drop functionality. Easily move tasks between stages—Pending, In Progress, and Complete—while keeping track of priorities and progress. Built for a smooth and interactive user experience.",
    tags: ["Html", "Css", "JavaScript"],
    keyword: "javascript",
    image: todoListImage,
    liveLink: "https://ayman2002dev.github.io/to-do-drag-and-drop/",
    githubLink: "https://github.com/Ayman2002Dev/to-do-drag-and-drop",
  },
  {
    id: 7,
    title: "Product Management System",
    description:
      "A Product Management app to add, update, and delete products while tracking total quantity, total price, total values, total products, and average price.",
    tags: ["Html", "Css", "TypeScript"],
    keyword: "typescript",
    image: ProductMSImage,
    liveLink: "https://ayman2002dev.github.io/Product-Management-System/",
    githubLink: "https://ayman2002dev.github.io/Product-Management-System/",
  },
  {
    id: 8,
    title: "Story",
    description:
      "A personal Story Website to share my life experiences, books I’m reading, games I’m playing, and other stories and events.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    image: storyImage,
    liveLink: "https://ayman2002dev.github.io/Story-website/",
    githubLink: "https://github.com/Ayman2002Dev/Story-website",
  },
  {
    id: 9,
    title: "Kasper",
    description:
      "A demo project to improve my web design skills and gain practical experience.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    keyword: "html&css",
    image: kasperImage,
    liveLink: "https://ayman2002dev.github.io/Kasper/",
    githubLink: "https://github.com/Ayman2002Dev/Kasper",
  },
  {
    id: 10,
    title: "Leon",
    description:
      "A demo project to improve my web design skills and gain practical experience.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    image: leonImage,
    liveLink: "https://ayman2002dev.github.io/Leon/",
    githubLink: "https://github.com/Ayman2002Dev/Leon",
  },
  {
    id: 11,
    title: "Tracer",
    description:
      "A face recognition-based attendance system that automates tracking and provides students with access to their records, grades, and task evaluations.",
    tags: ["Html", "Css", "JavaScript", "Flask", "Machine Learning", "My SQL"],
    keyword: "javascript",
    image: noPreviewImage,
    liveLink: "#",
    githubLink: "https://github.com/Ayman2002Dev/Tracer-Project",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    icon: "verified",
    title: "React JS",
    issuer: "Mahara Tech",
    date: "JAN 2025",
  },
  {
    id: 2,
    icon: "verified",
    title:
      "The Complete Node.js Course (RESTful Web Services with Node.js, Express, and MongoDB)",
    issuer: "Mahara Tech",
    date: "AUG 2025",
  },
  {
    id: 3,
    icon: "verified",
    title: "Learn HTML and CSS",
    issuer: "Mahara Tech",
    date: "JAN 2025",
  },
  {
    id: 4,
    icon: "verified",
    title: "Introduction to mongoDB",
    issuer: "Mahara Tech",
    date: "NOV 2025",
  },
  {
    id: 5,
    icon: "verified",
    title: "Database Fundamentals",
    issuer: "Mahara Tech",
    date: "OCT 2025",
  },
  {
    id: 6,
    icon: "school",
    title: "Frontend Web Developer",
    issuer: "ITI",
    date: "AUG 202",
  },
];

export const SKILLS = {
  frontend: {
    title: "Frontend Engineering",
    subtitle: "Crafting immersive user experiences with modern frameworks.",
    icon: "web",
    items: [
      { name: "React / Next.js" },
      { name: "TypeScript" },
      { name: "Material-UI" },
      { name: "React-Hook-Form" },
      { name: "Redux-Toolkit" },
      { name: "React-router" },
      { name: "Swipper.js" },
      { name: "React-Toastify" },
      { name: "Tailwind CSS" },
    ],
  },
  backend: {
    title: "Backend Engineering",
    subtitle: "Building robust, scalable systems for modern applications.",
    icon: "dns",
    items: [
      { name: "Node.js / Express" },
      { name: "Mongoose" },
      { name: "JSON Web Token" },
      { name: "Bcrypt" },
    ],
  },
  tools: {
    title: "Tools",
    subtitle:
      "Utilizing cutting-edge tools to deliver high-performance and scalable solutions.",
    icon: "build",
    items: [
      { name: "Postman" },
      { name: "Git" },
      { name: "Vercel" },
      { name: "Vite" },
      { name: "Axios" },
      { name: "Apidog" },
    ],
  },
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Lead Full Stack Engineer",
    company: "NovaTech Systems",
    period: "2022 – Present",
    description:
      "Architected and led the development of a real-time analytics platform processing 1B+ events/day. Managed a team of 8 engineers across frontend, backend, and DevOps.",
    tags: ["React", "Go", "Kubernetes", "AWS"],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Cipher Labs",
    period: "2020 – 2022",
    description:
      "Built the core payment processing microservice, handling $50M+ in daily transactions with 99.99% uptime. Reduced API latency by 60%.",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "CreativeFlow Studio",
    period: "2018 – 2020",
    description:
      "Developed and maintained 15+ client web applications. Pioneered the adoption of React and TypeScript, reducing development time by 40%.",
    tags: ["React", "TypeScript", "CSS-in-JS"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Information Systems",
    school: "Zagazig University",
    period: "2020 – 2024",
    description:
      "Graduated with Very Good from the Information Systems department, with a strong focus on data",
  },
];

export const SOCIAL_CHANNELS = [
  {
    icon: "code",
    label: "GitHub",
    handle: "github.com/Ayman2002Dev",
    href: "https://github.com/Ayman2002Dev",
    color: "#a3a6ff",
  },
  {
    icon: "work",
    label: "LinkedIn",
    handle: "in/aymanosama",
    href: "https://www.linkedin.com/in/ayman-osama-089357238/",
    color: "#c180ff",
  },
  {
    icon: "chat",
    label: "Twitter",
    handle: "@AymanOs85197088",
    href: "https://x.com/AymanOs85197088",
    color: "#c890ff",
  },
  {
    icon: "rss_feed",
    label: "Dev.to",
    handle: "dev.to/ayman",
    href: "https://dev.to/ao2432002",
    color: "#a3aac4",
  },
];

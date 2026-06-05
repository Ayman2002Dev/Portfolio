import veloriaImage from "../../public/images/veloria.webp";
import cinemaScopeImage from "../../public/images/cinema-scope.webp";
import windflowImage from "../../public/images/windflow.webp";
import ProductMSImage from "../../public/images/product-management-system.webp";
import kasperImage from "../../public/images/kasper.webp";
import ticTacToeImage from "../../public/images/tic-tac-toe.webp";
import todoListImage from "../../public/images/todolist.webp";
import storyImage from "../../public/images/story.webp";
import leonImage from "../../public/images/leon.webp";
import noPreviewImage from "../../public/images/nopreview.webp";
import myWebsiteImage from "../../public/images/mywebsite.webp";

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "A personal portfolio showcasing my work in building responsive and user-friendly web interfaces using modern technologies like React and Next.js. The site highlights my projects, technical skills, and practical experience, along with a basic understanding of backend development to support full-stack workflows.",
    tags: ["React", "RHF", "MUI"],
    keyword: "react",
    image: myWebsiteImage,
    imageWidth: 1363,
    imageHeight: 648,
    liveLink: "https://ayman-osama.vercel.app/",
    githubLink: "https://github.com/Ayman2002Dev/Portfolio",
  },
  {
    id: 2,
    title: "Veloria",
    description:
      "A modern e-commerce platform built with React and modern web technologies, featuring product browsing, cart management, and secure checkout.",
    tags: ["React", "RHF", "MUI", "Redux", "Swiper"],
    keyword: "react",
    image: veloriaImage,
    imageWidth: 1348,
    imageHeight: 650,
    liveLink: "https://veloria-two.vercel.app/",
    githubLink: "https://github.com/Ayman2002Dev/Veloria",
  },
  {
    id: 3,
    title: "Cinema Scope",
    description:
      "Cinema-Scope is a modern movie platform where users can discover, search, and explore films easily. Browse movies by genre, country, or category, check ratings, release dates, and detailed information, and stay updated with popular, top-rated, and now-playing movies.",
    tags: ["React", "Swiper", "Tailwind Css", "Redux", "Axios"],
    keyword: "react",
    image: cinemaScopeImage,
    imageWidth: 1361,
    imageHeight: 648,
    liveLink: "https://cinema-scope-omega.vercel.app/?page=1",
    githubLink: "https://github.com/Ayman2002Dev/Cinema-Scope",
  },

  {
    id: 4,
    title: "WindFlow",
    description:
      "Windflow is a website where you can easily find out the weather conditions.",
    tags: ["React", "boxicons"],
    keyword: "react",
    image: windflowImage,
    imageWidth: 1004,
    imageHeight: 647,
    liveLink: "https://wind-flow-steel.vercel.app/",
    githubLink: "https://github.com/Ayman2002Dev/WindFlow",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description:
      "Tic Tac Toe game with dynamic score tracking, reset functionality, and seamless new game start.",
    tags: ["Html", "Css", "JavaScript"],
    keyword: "javascript",
    image: ticTacToeImage,
    imageWidth: 1018,
    imageHeight: 647,
    liveLink: "https://ayman2002dev.github.io/Tic-Tac-Toe/",
    githubLink: "https://github.com/Ayman2002Dev/Tic-Tac-Toe",
  },
  {
    id: 6,
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
    imageWidth: 512,
    imageHeight: 512,
    liveLink: "#",
    githubLink: "https://github.com/Ayman2002Dev/Ecommerce-api/tree/main",
  },
  {
    id: 7,
    title: "ToDo List",
    description:
      "A dynamic To-Do List application that lets you organize tasks with drag-and-drop functionality. Easily move tasks between stages—Pending, In Progress, and Complete—while keeping track of priorities and progress. Built for a smooth and interactive user experience.",
    tags: ["Html", "Css", "JavaScript"],
    keyword: "javascript",
    image: todoListImage,
    imageWidth: 1366,
    imageHeight: 648,
    liveLink: "https://ayman2002dev.github.io/to-do-drag-and-drop/",
    githubLink: "https://github.com/Ayman2002Dev/to-do-drag-and-drop",
  },
  {
    id: 8,
    title: "Product Management System",
    description:
      "A Product Management app to add, update, and delete products while tracking total quantity, total price, total values, total products, and average price.",
    tags: ["Html", "Css", "TypeScript"],
    keyword: "typescript",
    image: ProductMSImage,
    imageWidth: 1351,
    imageHeight: 647,
    liveLink: "https://ayman2002dev.github.io/Product-Management-System/",
    githubLink: "https://ayman2002dev.github.io/Product-Management-System/",
  },
  {
    id: 9,
    title: "Story",
    description:
      "A personal Story Website to share my life experiences, books I’m reading, games I’m playing, and other stories and events.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    image: storyImage,
    imageWidth: 1352,
    imageHeight: 647,
    liveLink: "https://ayman2002dev.github.io/Story-website/",
    githubLink: "https://github.com/Ayman2002Dev/Story-website",
  },
  {
    id: 10,
    title: "Kasper",
    description:
      "A demo project to improve my web design skills and gain practical experience.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    image: kasperImage,
    imageWidth: 1348,
    imageHeight: 646,
    liveLink: "https://ayman2002dev.github.io/Kasper/",
    githubLink: "https://github.com/Ayman2002Dev/Kasper",
  },
  {
    id: 11,
    title: "Leon",
    description:
      "A demo project to improve my web design skills and gain practical experience.",
    tags: ["Html", "Css"],
    keyword: "html&css",
    image: leonImage,
    imageWidth: 1349,
    imageHeight: 648,
    liveLink: "https://ayman2002dev.github.io/Leon/",
    githubLink: "https://github.com/Ayman2002Dev/Leon",
  },
  {
    id: 12,
    title: "Tracer",
    description:
      "A face recognition-based attendance system that automates tracking and provides students with access to their records, grades, and task evaluations.",
    tags: ["Html", "Css", "JavaScript", "Flask", "Machine Learning", "My SQL"],
    keyword: "javascript",
    image: noPreviewImage,
    imageWidth: 512,
    imageHeight: 512,
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


// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from "./assets/tech_logo/angular.png";
// import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
// import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
// import postmanLogo from "./assets/tech_logo/postman.png";
// import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import nextTech from "./assets/company_logo/nexttech.png";

import cholobazar from "./assets/company_logo/cholobazar.png";

// Education Section Logo's
import green from "./assets/education_logo/green.png";
import dinajpur from "./assets/education_logo/dinajpur.png";
import jagonnathpur_logo from "./assets/education_logo/jagonnathpur_logo.jpg";

// Project Section Logo's
import portfolio from "../src/assets/work_logo/portfolio.png";
import cholo from "../src/assets/work_logo/cholob.png";
import rinterio from "../src/assets/work_logo/rinterio.png";
import shoplio from "../src/assets/work_logo/shoplio.png";
import hungryUp from "../src/assets/work_logo/hungryUp.png";
import medInsight from "../src/assets/work_logo/medinsight.png";
import gubAR from "../src/assets/work_logo/gubAR.jpeg";
import jobPortal from "../src/assets/work_logo/job-portal.png";
import teaHouse from "../src/assets/work_logo/tea-house.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      // { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      // { name: "Postman", logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: nextTech,
    role: "Frontend Developer Intern",
    company: "NextTech Ltd",
    date: "October 2025 - December 2025",
    desc: "Completed a 3-month internship as a Frontend Developer Intern at NextTech Ltd, where I worked on production-level web applications. Built and optimized responsive UI components using React.js and Tailwind CSS, collaborated with backend developers, implemented reusable components, and followed Git/GitHub workflows in a team environment.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Git",
      "GitHub",
      "REST API",
    ],
  },
  {
    id: 1,
    img: cholobazar,
    role: "Front-End Developer",
    company: "Academic Team-Project",
    date: "June 2024 - November 2024",
    desc: "We built the Cholobazar E-commerce Website using the MERN stack, featuring user login, product, cart and order functionalities. We has designed a responsive UI with React.js and Tailwind CSS, integrated REST APIs and managed the project with Git/GitHub.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Next Js",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: green,
    school: "Green University of Bangladesh, Narayanganj",
    date: "December 2021 - December 2025",
    grade: "CGPA 3.18",
    desc: "I completed my Bachelor's in Computer Science and Engineering from Green University of Bangladesh, gaining strong knowledge in programming, software development and core CS principles. Through courses, projects and workshops, I enhanced practical skills and prepared myself for a software industry career.",
    degree: "Bachelor of Computer Science & Engineering",
  },
  {
    id: 1,
    img: dinajpur,
    school: "Dinajpur Government College, Dinajpur",
    date: "June 2017 - July 2020",
    grade: "GPA 5.00",
    desc: "I completed my HSC in Science from Dinajpur Government College, building strong knowledge in Physics, Chemistry, Mathematics and Biology. This enhanced my analytical, problem-solving and reasoning skills while extracurricular activities developed teamwork, leadership and discipline, preparing me for Computer Science studies.",
    degree: "Higher Secondary Certificate (HSC) in Science",
  },
  {
    id: 2,
    img: jagonnathpur_logo,
    school: "Jagonnathpur High School, Chirirbandor",
    date: "January 2015 - March 2017",
    grade: "GPA 5.00",
    desc: "Completed Secondary School Certificate (SSC) in Science from Jagonnathpur High School, with a strong foundation in Physics, Chemistry, Mathematics, and General Science that developed my logical reasoning and problem-solving skills.",
    degree: "Secondary School Certificate (SSC) in Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS, featuring reusable components, smooth animations and responsive layouts to highlight skills, projects and achievements professionally.",
    image: portfolio,
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/mahamudul-hasan-milon/my-portfolio",
    webapp: "https://m-h-milon.vercel.app/",
  },
  {
    id: 1,
    title: "Cholobazar - Ecommerce Website",
    description:
      "Cholobazar is a full-featured MERN stack e-commerce site with user authentication, product management, shopping cart and responsive UI built using React.js and Tailwind CSS.",
    image: cholo,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "The Tea House – Freshly Brewed Tea Experience",
    description:
      "Tea House is a modern tea shop website crafted with HTML and Tailwind CSS, designed to showcase premium tea selections with a clean layout, responsive design, featured products, and visually engaging sections that highlight freshness, quality, and a delightful tea-drinking experience.",
    image: teaHouse,
    tags: ["HTML", "CSS", "Tailwind CSS"],
    github: "https://github.com/mahamudul-hasan-milon/tea-house",
    webapp: "https://tea-house5.netlify.app/",
  },
  {
    id: 3,
    title: "Rinterio - Design Home",
    description:
      "I developed Rinterio - a home design website using DaisyUI and Tailwind CSS. The website features interactive product listings, responsive layouts and user-friendly navigation. I implemented dynamic content integration, enhanced UX with smooth animations and managed the project using Git/GitHub.",
    image: rinterio,
    tags: ["HTML", "TailwindCSS", "daisyUI"],
    github:
      "https://github.com/mahamudul-hasan-milon/assignment-3?tab=readme-ov-file",
    webapp: "https://polite-chimera-f08a0d.netlify.app/",
  },
  {
    id: 4,
    title: "Shoplio - E-commerce Website",
    description:
      "Shoplio is a comprehensive e-commerce website designed for seamless online shopping, offering a wide variety of products, secure payment options, fast and reliable delivery, user-friendly interface, personalized recommendations and exceptional customer service to enhance the overall shopping experience.",
    image: shoplio,
    tags: ["HTML", "TailwindCSS", "JavaScript", "API", "React JS"],
    github: "https://github.com/mahamudul-hasan-milon/shoplio-website",
    webapp: "https://shoplio-website.vercel.app/",
  },
  {
    id: 5,
    title: "Hungry Up – Food Ordering Website",
    description:
      "Hungry Up is a modern food ordering website designed for quick and convenient online meal ordering, offering curated restaurant listings, interactive menus, secure checkout, real-time order tracking, and a user-friendly interface to deliver a smooth and reliable dining experience.",
    image: hungryUp,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mahamudul-hasan-milon/hungry-up",
    webapp: "https://hungry-up.vercel.app/",
  },
  {
    id: 6,
    title: "MedInsight – Medicine & Healthcare Analytics Platform",
    description:
      "MedInsight is a modern healthcare analytics platform designed to transform medical data into actionable insights, offering intuitive dashboards, real-time data visualization, secure data management, and intelligent reporting to support informed clinical and operational decision-making with accuracy and efficiency.",
    image: medInsight,
    tags: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/jakaria2055/medinsight_client",
    webapp: "https://medinsight-client.netlify.app/",
  },
  {
    id: 7,
    title: "Green University AR – Indoor Navigation System",
    description:
      "Green University AR is an augmented reality–based indoor navigation system designed to help students and visitors easily navigate campus buildings, providing real-time directional guidance, interactive AR overlays, location-based assistance and an intuitive interface to improve accessibility and on-campus mobility.",
    image: gubAR,
    tags: ["AR", "Unity", "Vuforia", "Android", "C#"],
    github: "https://github.com/mahamudul-hasan-milon/gub-ar-nav-app",
    webapp: "https://gub-ar-nav-app.vercel.app/",
  },
  {
    id: 8,
    title: "Job Portal – Smart Recruitment & Job Search Platform",
    description:
      "Job Portal is a modern recruitment platform designed to connect job seekers and employers efficiently, offering advanced job listings, seamless application management, role-based dashboards, secure authentication and an intuitive user experience to simplify hiring and career discovery.",
    image: jobPortal,
    tags: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/mahamudul-hasan-milon/job-portal-client",
    webapp: "https://job-portal-74771.web.app/",
  },
];

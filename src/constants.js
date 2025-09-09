// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
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
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
// import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import myself from "./assets/profile2.jpg";
import cholobazar from "./assets/company_logo/cholobazar.png";

// Education Section Logo's
import green from "./assets/education_logo/green.png";
import dinajpur from "./assets/education_logo/dinajpur.png";
import jagonnathpur_logo from "./assets/education_logo/jagonnathpur_logo.jpg";

// Project Section Logo's
import cat from "./assets/work_logo/cat.png";
import house from "./assets/work_logo/house.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
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
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cholobazar,
    role: "MERN Stack Developer",
    company: "Academic Project",
    date: "June 2024 - November 2024",
    desc: "I built the Cholobazar E-commerce Website using the MERN stack, featuring user login, product, cart and order functionalities. I designed a responsive UI with React.js and Tailwind CSS, integrated REST APIs and managed the project with Git/GitHub.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: myself,
    role: "Front-End Web Developer",
    company: "Self-Project",
    date: "January 2024 - May 2024",
    desc: "I created a portfolio website using React.js and Tailwind CSS, featuring responsive layouts with reusable components and smooth animations for enhanced UX. I deployed the site for a professional presence and managed hosting and version control with Git/GitHub.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: green,
    school: "Green University of Bangladesh, Rupganj, Narayanganj",
    date: "December 2021 - December 2025",
    grade: "3.18 CGPA",
    desc: "I have completed my Bachelor's degree in Computer Science and Engineering (CSE) from Green University of Bangladesh. Throughout my studies, I gained a strong foundation in programming, software development and computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development and Software Engineering. I also worked on academic projects and participated in technical workshops, which enhanced my practical skills and prepared me for a career in the software industry.",
    degree: "Bachelor of Computer Science & Engineering",
  },
  {
    id: 1,
    img: dinajpur,
    school: "Dinajpur Government College, Dinajpur",
    date: "June 2017 - July 2020",
    grade: "A+",
    desc: "I have completed my Higher Secondary Certificate (HSC) in Science from Dinajpur Government College. During my studies, I developed a strong foundation in core subjects such as Physics, Chemistry, Mathematics and Biology. This academic background enhanced my analytical thinking, problem-solving ability, and logical reasoning skills. I actively participated in various academic and extracurricular activities, which helped me build discipline, teamwork and leadership qualities. My time at Dinajpur Government College played an important role in shaping my academic journey and preparing me for higher studies in Computer Science and Engineering.",
    degree: "Higher Secondary Certificate (HSC) in Science",
  },
  {
    id: 2,
    img: jagonnathpur_logo,
    school: "Jagonnathpur High School, Chirirbandor",
    date: "January 2015 - March 2017",
    grade: "A+",
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
    image: myself,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Cholobazar - E-commerce Website",
    description:
      " Cholobazar is a full-featured MERN stack e-commerce site with user authentication, product management, shopping cart and responsive UI built using React.js and Tailwind CSS.",
    image: cholobazar,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Pet Adoption Website",
    description:
      "Created a responsive pet adoption website using HTML, CSS and JavaScript (ES6), featuring pet listings, adoption guidance, shelter directory, application tracking and care resources with dynamic interactions via arrow functions and callbacks.",
    image: cat,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Rinterio - Design Home",
    description:
      "I developed Rinterio - a home design website using DaisyUI and Tailwind CSS. The website features interactive product listings, responsive layouts and user-friendly navigation. I implemented dynamic content integration, enhanced UX with smooth animations and managed the project using Git/GitHub.",
    image: house,
    tags: ["HTML", "TailwindCSS", "daisyUI"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  gym1,
  gym2,
  gpt3,
  ticketBooking,
  ecommerce1,
  ecommerce2,
  recipes,
  landing
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  // {
  //   title: "ReactJs Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Frontend Developer",
  //   icon: backend,
  // },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "react responsive e-commerce website allow users to add items to card ,delete items and purchase for them ,the website is protected by authorization and connected to firebase so to sign in you have to create new account or simply type abc222@gmail.com for username and 123456 for password.", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce1,
    source_code_link: "https://github.com/MohamedAshraf2222/React-Ecommerce-website",
    live_demo_link: "https://react-ecommerce-website-orcin.vercel.app/",
  },
  {
    name: "Around the world",
    description:
    "react airplane ticket booking website allow users to login , register ,logout. the website is protected by authorization and connected to firebase so to sign in you have to create new account or simply type abc222@gmail.com for username and 123456 for password.",
    
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ticketBooking,
    source_code_link: "https://github.com/MohamedAshraf2222/React-flight-ticket-booking-site",
    live_demo_link: "https://react-flight-ticket-booking-site.vercel.app/",
  },
  {
    name: "GPT-3",
    description:
    "react responsive scientific website with amazing features, modern design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/MohamedAshraf2222/React-Responsive-Modren-Website",
    live_demo_link: "https://react-responsive-modren-website.vercel.app/",

  },
  {
    name: "GYM",
    description:
      "GYM website with great design made by native html and css .",
      tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gym1,
    source_code_link: "https://github.com/MohamedAshraf2222/Gym-Website",
    live_demo_link: "https://gym-website-nine.vercel.app/",

  },
  {
    name: "Fitbody",
    description:
    "react responsive GYM website with animated components and amazing features with great design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym2,
    source_code_link: "https://github.com/MohamedAshraf2222/React-Responsive-GYM-Website",
    live_demo_link: "https://react-responsive-gym-website.vercel.app/",

  },
  {
    name: "Amazon",
    description:
    "react responsive ecommerce website with animated components and amazing features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce2,
    source_code_link: "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
    live_demo_link: "https://responsive-ecommerce-webpage.vercel.app/",
  },
  {
    name: "Recipes",
    description:
    "react Recipes website with great design , multiple pages with react routing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: recipes,
    source_code_link: "https://github.com/MohamedAshraf2222/responsive-ecommerce-webpage",
    live_demo_link: "https://recipes-website-tau.vercel.app/",
  },
    {
    name: "Landing Page",
    description:
    "React Landing page with great design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/MohamedAshraf2222/landing-page",
    live_demo_link: "https://landing-page-mauve-sigma.vercel.app/",
  },  
];

export { services, technologies, projects };

enum techniechsName {
  JS = "JS",
  VUE = "VUE",
  REACT = "REACT",
  FIREBASE = "FIREBASE",
  SUPABASE = "SUPABASE",
  NUXT = "NUXT",
  HTML = "HTML",
  CSS = "CSS",
  SASS = "SASS",
  TS = "TS",
  TAILWIND = "TAILWIND",
  BOOTSTRAP = "BOOTSTRAP",
  LOCALSTORAGE = "LOCALSTORAGE",
  MARKDOWN = "MARKDOWN",
  DARKMODE = "Dark & Light",
}

const projects = [
  {
    id: Math.random() + Math.random(),
    title: "Nuxt-Finance-Tracker (2025)",
    description:
      "The Finance Tracker is a resbonsive website Built with Nuxt 3, Tailwind CSS and Supabase.",
    projectUrl: "https://finance-tracker-mohammad-sokar.vercel.app",
    imageUrl: "/images/finance-tracker.png",
    techniechs: [
      techniechsName.NUXT,
      techniechsName.SUPABASE,
      techniechsName.TAILWIND,
      techniechsName.DARKMODE,
    ],
    type: "fullstack",
  },
  {
    id: Math.random() + Math.random(),
    title: "Nuxt-Portfolio (2025)",
    description:
      "The Portfolio is a responsive website Built with Nuxt 3 and Tailwind CSS.",
    projectUrl: "https://nuxt-portfolio-2025.vercel.app",
    imageUrl: "/images/portfolio.png",
    techniechs: [
      techniechsName.NUXT,
      techniechsName.TAILWIND,
      techniechsName.MARKDOWN,
      techniechsName.DARKMODE,
    ],
    type: "frontend",
  },
  {
    id: Math.random() + Math.random(),
    title: "Nuxt-MY-Portfolio (2025)",
    description:
      "This is my portfolio website built with Nuxt 3 and Tailwind CSS. It showcases my skills and projects. You can find my projects and contact information here.",
    projectUrl: "https://portfolio-mohamed-sokar.vercel.app",
    imageUrl: "/images/my-portfolio.png",
    techniechs: [
      techniechsName.NUXT,
      techniechsName.TAILWIND,
      techniechsName.TS,
      techniechsName.DARKMODE,
    ],
    type: "frontend",
  },

  {
    id: Math.random() + Math.random(),
    title: "Vue settings (2025)",
    description:
      " The Vue settings is a responsive website built with Vue 3 With localstorage.",
    projectUrl: "https://vue-settings-2025-mohammad-sokar.netlify.app",
    imageUrl: "/images/vue-settings.png",
    techniechs: [
      techniechsName.VUE,
      techniechsName.TS,
      techniechsName.LOCALSTORAGE,
    ],
    type: "frontend",
  },
  {
    id: Math.random() + Math.random(),
    title: "Vue-Task-Manager (2025)",
    description:
      " The Vue settings is a responsive website built with Vue 3, TS and localstorage.",
    projectUrl: "https://task-manager-mohamed-sokar.netlify.app",
    imageUrl: "/images/task-manager.png",
    techniechs: [
      techniechsName.VUE,
      techniechsName.TS,
      techniechsName.LOCALSTORAGE,
    ],
    type: "frontend",
  },
  {
    id: Math.random() + Math.random(),
    title: "Vue-trello-clone (2025)",
    description:
      " The Vue settings is a responsive website built with Vue 3, TS and localstorage.",
    projectUrl: "https://vue-trello-clone-2025.netlify.app",
    imageUrl: "/images/trello-clone.png",
    techniechs: [
      techniechsName.VUE,
      techniechsName.TS,
      techniechsName.LOCALSTORAGE,
    ],
    type: "frontend",
  },
  {
    id: Math.random() + Math.random(),
    title: "MoAafa (2023)",
    description:
      "The MoAafa landing page is a responsive website built with HTML, CSS, JS and Bootstrap.",
    projectUrl: "https://moaafa-mohammad-sokar.netlify.app",
    imageUrl: "/images/moaafa.png",
    techniechs: [
      techniechsName.HTML,
      techniechsName.SASS,
      techniechsName.JS,
      techniechsName.BOOTSTRAP,
    ],
    type: "frontend",
  },
  {
    id: Math.random() + Math.random(),
    title: "Coca (2023)",
    description:
      "The Coca landing page is a responsive website built with HTML, CSS, JS and Bootstrap.",
    projectUrl: "https://coca-mohammad-sokar.netlify.app",
    imageUrl: "/images/coca.png",
    techniechs: [
      techniechsName.HTML,
      techniechsName.SASS,
      techniechsName.JS,
      techniechsName.BOOTSTRAP,
    ],
    type: "frontend",
  },
];

export { projects, techniechsName };

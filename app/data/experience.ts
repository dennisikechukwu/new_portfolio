export interface Experience {
  id: string
  role: string
  company: string
  date: string
  highlights: string[]
}

export const workExperience: Experience[] = [
  {
    id: 'winich-swe',
    role: 'Software Engineer',
    company: 'Winich Farms',
    date: 'Feb 2026 – Present',
    highlights: [
      'Engineered role-based admin and workforce platforms centralising employee onboarding, attendance, leave, and internal operations.',
      'Built a merchant card platform supporting secure, API-driven card operations and merchant workflows.',
      'Developed a Java/Spring Boot bill-payment microservice integrated with wallet services for wallet-backed transactions.',
      'Integrate services against OpenAPI/Swagger contracts and investigate frontend and backend issues using browser tooling, Postman, and Burp Suite; participate in Agile delivery, code reviews, and cross-functional debugging.'
    ]
  },
  {
    id: 'winich-intern',
    role: 'Software Engineering Intern',
    company: 'Winich Farms',
    date: 'Jun 2025 – Feb 2026',
    highlights: [
      'Led frontend development of winichfarms.com with Vue.js, Nuxt.js, and Tailwind CSS, translating Figma designs into responsive, reusable components.',
      'Collaborated with a backend engineer on a loan application, implementing API-driven user flows, frontend logic, and responsive interfaces.'
    ]
  },
  {
    id: 'freelance',
    role: 'Frontend Engineer / Web Developer',
    company: 'Freelance / Prodigy InfoTech',
    date: 'Nov 2024 – May 2025',
    highlights: [
      'Built responsive client websites and frontend applications with React.js and Next.js, focusing on component reuse, mobile-first behavior, and REST API integration.'
    ]
  }
]


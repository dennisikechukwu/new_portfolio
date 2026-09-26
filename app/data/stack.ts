export interface StackCategory {
  id: string
  title: string
  items: string[]
}

export const stackData: StackCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'Python']
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: ['Spring Boot', 'Node.js', 'RESTful APIs', 'Microservices', 'WebSockets', 'JWT Auth']
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    items: ['Vue 3', 'Nuxt 4', 'Tailwind CSS', 'TypeScript', 'Pinia', 'HTML5/CSS3']
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    items: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'Supabase']
  },
  {
    id: 'tools',
    title: 'Tooling & DevOps',
    items: ['Git', 'Docker', 'Vercel', 'AWS', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions']
  }
]

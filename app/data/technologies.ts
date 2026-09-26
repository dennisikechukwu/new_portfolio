export interface Technology {
  name: string
  iconUrl: string
}

export interface Capability {
  id: string
  title: string
  description: string
}

export const coreTechnologies: Technology[] = [
  { name: 'Java', iconUrl: 'https://cdn.simpleicons.org/openjdk/white' },
  { name: 'Spring Boot', iconUrl: 'https://cdn.simpleicons.org/springboot/white' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.simpleicons.org/postgresql/white' },
  { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Nuxt', iconUrl: 'https://cdn.simpleicons.org/nuxt/white' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/white' },
]

export const coreCapabilities: Capability[] = [
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    description: 'I design and build robust backend architectures using Java and Spring Boot, focusing on modular monoliths, secure data access, and transactional integrity.'
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'I develop RESTful APIs tailored for seamless frontend integration, ensuring high performance, proper versioning, and comprehensive OpenAPI documentation.'
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'I structure scalable relational databases with PostgreSQL, utilizing JPA/Hibernate for efficient querying and Flyway for reliable schema migrations.'
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Integration',
    description: 'I bridge the gap between backend services and modern user interfaces, leveraging Nuxt, Vue.js, and TypeScript to deliver cohesive digital products.'
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud & Deployment',
    description: 'I containerize applications using Docker and manage deployments on platforms like Render, ensuring reliable, isolated, and scalable environments.'
  },
  {
    id: 'testing-security',
    title: 'Testing & Security',
    description: 'I prioritize system integrity through integration testing and API validation using tools like Postman and Burp Suite, alongside robust OAuth2 and JWT implementations.'
  }
]

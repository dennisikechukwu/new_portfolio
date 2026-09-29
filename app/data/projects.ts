export interface Project {
  id: string
  title: string
  shortDescription: string
  liveUrl?: string
  githubUrl?: string
}

export const featuredProjects: Project[] = [
  {
    id: 'kohrah',
    title: 'Kohrah',
    shortDescription: 'Professional networking platform featuring dynamic public profiles, live vCards, and secure QR code lead capture.',
    liveUrl: 'https://kohrah.dennislab.me/',
    githubUrl: 'https://github.com/dennisikechukwu/Kohrah'
  },
  {
    id: 'hemo-grid',
    title: 'HemoGrid',
    shortDescription: 'Real-Time Blood Availability & Emergency Coordination Network designed to handle critical data under high concurrency.',
    liveUrl: '#',
    githubUrl: 'https://github.com/dennisikechukwu/hemo-grid-backend'
  },
  {
    id: 'sona',
    title: 'Sona',
    shortDescription: 'AI-powered video call platform that transcribes every word, identifies every speaker, and hands you a clean summary with action items the moment your call ends.',
    liveUrl: 'https://sona.dennislab.me/',
    githubUrl: 'https://github.com/dennisikechukwu/Sona'
  },
  {
    id: 'bukka-ai',
    title: 'Bukka AI',
    shortDescription: 'Get restaurant reviews written in authentic Nigerian voice — or find your next favourite spot using culturally resonant AI.',
    liveUrl: 'https://bukkaai.vercel.app',
    githubUrl: 'https://github.com/dennisikechukwu/bukka_ai'
  }
]

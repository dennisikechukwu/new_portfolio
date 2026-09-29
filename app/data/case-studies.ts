export interface CaseStudy {
  id: string
  title: string
  year: string
  role: string
  overview: string
  keyFeatures: string[]
  techStack: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'winich-farms',
    title: 'Winich Farms',
    year: '2025',
    role: 'Frontend Engineering',
    overview: 'The core public platform for a major agritech company connecting over 300,000 farmers to credit and off-takers. I led the frontend architecture and development.',
    keyFeatures: [
      'Led the end-to-end frontend development of winichfarms.com using Vue.js and Nuxt.js.',
      'Engineered pixel-perfect, highly responsive components directly from Figma using Tailwind CSS.',
      'Implemented complex API-driven user flows and logic for a critical loan application portal.',
      'Collaborated with backend engineers to integrate REST APIs and ensure seamless data hydration.'
    ],
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/winich-website.png',
    liveUrl: 'https://winichfarms.com'
  },
  {
    id: 'kohrah',
    title: 'Kohrah',
    year: '2026',
    role: 'Full-Stack Engineering',
    overview: 'A professional networking and relationship-continuity platform. Kohrah enables users to create dynamic public profiles, share live vCards, and securely capture connections.',
    keyFeatures: [
      'Implemented passwordless Magic Link authentication via Supabase and Resend.',
      'Designed dynamic public profiles generating .vcf files on the fly and logging analytics.',
      'Built a lead capture system allowing guests to securely leave contact info.',
      'Engineered dynamic, scannable QR codes for seamless networking at live events.'
    ],
    techStack: ['Nuxt', 'Vue', 'TypeScript', 'Supabase'],
    imageUrl: '/kohrah.png',
    liveUrl: 'https://kohrah.dennislab.me/',
    githubUrl: 'https://github.com/dennisikechukwu/Kohrah'
  },
  {
    id: 'hemo-grid',
    title: 'HemoGrid',
    year: '',
    role: 'Backend Architecture',
    overview: 'Real-Time Blood Availability & Emergency Coordination Network. A system designed to handle critical data under high concurrency, ensuring absolute data integrity during simultaneous transactional writes across hospitals and blood banks.',
    keyFeatures: [
      'Engineered with Java and Spring Boot for critical healthcare infrastructure.',
      'Implemented strict transaction boundaries and pessimistic locking to prevent race conditions.',
      'Designed a distributed architecture linking frontend portals with a unified backend ledger.',
      'Secured sensitive healthcare data using robust JWT-based Role-Based Access Control.'
    ],
    techStack: ['Java', 'Spring Boot', 'TypeScript', 'PostgreSQL'],
    imageUrl: '/hemo-grid.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/dennisikechukwu/hemo-grid-backend'
  },
  {
    id: 'sona',
    title: 'Sona',
    year: '',
    role: 'Full-Stack Engineering',
    overview: 'Sona is an AI-powered video call platform that transcribes every word, identifies every speaker, and hands you a clean summary with action items the moment your call ends.',
    keyFeatures: [
      'Integrated real-time video streaming with sub-second latency.',
      'Piped live audio streams into AI transcription models for instant speaker diarization.',
      'Generated structured post-meeting action items and executive summaries using LLMs.',
      'Managed asynchronous state and real-time presence across multiple active callers.'
    ],
    techStack: ['TypeScript', 'Vue', 'Nuxt', 'WebRTC', 'LLMs'],
    imageUrl: '/sona.png',
    liveUrl: 'https://sona.dennislab.me/',
    githubUrl: 'https://github.com/dennisikechukwu/Sona'
  },
  {
    id: 'bukka-ai',
    title: 'Bukka AI',
    year: '',
    role: 'AI & Frontend Integration',
    overview: 'Get restaurant reviews written in authentic Nigerian voice — or find your next favourite spot. Bukka AI parses restaurant data and generates culturally resonant reviews using large language models.',
    keyFeatures: [
      'Integrated generative AI to provide localized, culturally authentic restaurant reviews.',
      'Designed a sleek, mobile-first interface optimized for rapid content discovery.',
      'Engineered efficient API routing to minimize latency when interfacing with AI models.',
      'Implemented dynamic hydration for SEO-friendly, blazing-fast page loads.'
    ],
    techStack: ['Vue', 'Nuxt', 'TypeScript', 'Generative AI'],
    imageUrl: '/bukka-ai.png',
    liveUrl: 'https://bukkaai.vercel.app',
    githubUrl: 'https://github.com/dennisikechukwu/bukka_ai'
  },
  {
    id: 'meridian-core',
    title: 'Meridian Core',
    year: '',
    role: 'Backend Engineering',
    overview: 'A bank-grade platform for customer onboarding, accounts, double-entry ledgers, transfers, savings, loans, approvals, statements and end-of-day processing. Currently in active development.',
    keyFeatures: [
      'Architected a robust double-entry ledger system for immutable financial transactions.',
      'Designed complex workflows for loan origination, savings plans, and staff approvals.',
      'Implemented end-of-day (EOD) processing batch jobs for accurate financial reporting.',
      'Ensured bank-grade security protocols for customer onboarding and KYC workflows.'
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    imageUrl: '',
    liveUrl: '#',
    githubUrl: 'https://github.com/dennisikechukwu/Meridian-Core'
  },
  {
    id: 'betwixt',
    title: 'Betwixt',
    year: '',
    role: 'Frontend Development',
    overview: 'Prediction Market Intelligence platform. Betwixt provides real-time insights and analytics for prediction markets, designed to handle high-frequency data updates gracefully.',
    keyFeatures: [
      'Engineered a real-time analytics dashboard with reactive Vue architecture.',
      'Optimized data visualization components for high-frequency market updates.',
      'Implemented robust state management for complex market intelligence datasets.',
      'Deployed a seamless CI/CD pipeline targeting Vercel edge infrastructure.'
    ],
    techStack: ['Vue', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/betwixt.png',
    liveUrl: 'https://betwixt-bice.vercel.app',
    githubUrl: 'https://github.com/dennisikechukwu/Betwixt'
  },
  {
    id: 'careers-api',
    title: 'Careers API',
    year: '',
    role: 'API Design & Backend',
    overview: 'A robust, scalable backend service built to manage job postings, applicant tracking, and recruiter workflows efficiently.',
    keyFeatures: [
      'Architected RESTful endpoints specifically optimized for rapid search queries.',
      'Implemented secure data validation layers to protect applicant information.',
      'Designed an efficient relational database schema for complex queries.',
      'Leveraged Java and Spring Boot for enterprise-level stability and security.'
    ],
    techStack: ['Java', 'Spring Boot', 'SQL', 'REST API'],
    imageUrl: '',
    liveUrl: '#',
    githubUrl: 'https://github.com/dennisikechukwu/careers-api'
  },
  {
    id: 'craftid',
    title: 'CraftID',
    year: '',
    role: 'Full-Stack Fintech',
    overview: 'CraftID is a fintech MVP that gives Nigerian artisans a payment identity and credit score. Artisans receive payments through a unique link, and every transaction builds their CraftScore.',
    keyFeatures: [
      'Designed a unique payment linking system for seamless, unbanked transactions.',
      'Engineered a proprietary "CraftScore" algorithm based on transaction history.',
      'Integrated third-party virtual card issuing APIs for instant liquidity.',
      'Built a highly scalable ledger to track nano-loans and automated repayments.'
    ],
    techStack: ['TypeScript', 'Fintech APIs', 'PostgreSQL', 'Redis'],
    imageUrl: '/craft-id.png',
    liveUrl: 'https://craft-id-ecru.vercel.app',
    githubUrl: 'https://github.com/dennisikechukwu/craftID'
  },
  {
    id: 'agent-coach',
    title: 'Agent Coach',
    year: '',
    role: 'Web3 Engineering',
    overview: 'A Web3-enabled accountability platform that combines financial incentives with AI coaching. Users stake tokens on their goals, and an AI agent tracks progress, delivers coaching, and releases funds upon verified completion.',
    keyFeatures: [
      'Integrated smart contract staking mechanisms for goal-based financial accountability.',
      'Built an AI coaching agent that tracks user progress and delivers personalized guidance.',
      'Designed a token-gated reward system that releases staked funds upon goal verification.',
      'Engineered a seamless Web3 wallet connection flow for frictionless onboarding.'
    ],
    techStack: ['TypeScript', 'Web3', 'Smart Contracts', 'AI'],
    imageUrl: '/agent-coach.png',
    liveUrl: 'https://agentcoach.dennislab.me/',
    githubUrl: 'https://github.com/dennisikechukwu/Agent-Coach'
  }
]

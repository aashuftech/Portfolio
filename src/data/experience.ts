import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Full-Stack Software Engineer',
    role: 'Full-Stack & Web Application Developer',
    location: 'Remote / Hybrid',
    period: '2024 — Present',
    current: true,
    description: 'Engineering scalable full-stack web applications, architecting RESTful APIs, and implementing high-performance UI workflows using React, TypeScript, and Node.js.',
    achievements: [
      'Designed and deployed full-stack architectures utilizing Node.js, Express, MongoDB, and Redis caching layers.',
      'Constructed responsive, accessible frontends with React 19, TypeScript, Tailwind CSS, and Framer Motion.',
      'Implemented robust authentication and authorization flows utilizing JWT tokens, OAuth, and secure cookie storage.',
      'Containerized development environments with Docker to ensure consistency across staging and production pipelines.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS', 'Docker'],
  },
  {
    id: 'exp-2',
    company: 'Software Engineering Projects & Open Source',
    role: 'Full-Stack Developer & Contributor',
    location: 'Open Source',
    period: '2023 — 2024',
    current: false,
    description: 'Developed and maintained open-source developer tooling, full-stack templates, and real-time WebSocket applications.',
    achievements: [
      'Authored modular backend services and API boilerplates following clean controller-service-repository patterns.',
      'Optimized MongoDB query performance by designing compound indexes and aggregation pipelines for nested datasets.',
      'Conducted unit and integration testing to ensure high reliability across critical business logic pathways.',
    ],
    techStack: ['JavaScript / ES6+', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Git', 'Postman'],
  },
];

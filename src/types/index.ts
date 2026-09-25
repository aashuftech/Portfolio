export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'auth-payments'
  | 'tools'
  | 'deployment'
  | 'genai';

export interface TechStackItem {
  name: string;
  category?: TechCategory;
}

export interface CaseStudyData {
  problem: string;
  solution: string;
  architecture: string;
  keyHighlights: string[];
  techStackDetailed: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  languages?: string[];
  category: string;
  caseStudy: CaseStudyData;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  verifyUrl: string;
  image?: string;
  tag?: string;
}

export interface CredlyBadgeItem {
  id: string;
  title: string;
  issuer: string;
  verifyUrl: string;
  category: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  status: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
}

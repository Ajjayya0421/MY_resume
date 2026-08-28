export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startYear: string;
  endYear: string;
  score: string;
  scoreLabel: string; // e.g. "CGPA" or "Percentage"
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  techStack: string[];
  duration?: string;
  githubUrl?: string;
  liveUrl?: string;
  descriptionBullets: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skillsLearned?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'sports' | 'academic' | 'hackathon' | 'leadership';
  description: string;
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  portfolio?: string;
  summary: string;
  education: EducationItem[];
  skills: {
    programmingLanguages: string[];
    coreCompetencies: string[];
    cyberSecurityAndNetworking: string[];
    databases: string[];
    developerTools: string[];
    languages: { language: string; proficiency: string }[];
  };
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}

export type TemplateStyle = 'cyber-shield' | 'elegant-dark' | 'harvard' | 'modern' | 'minimal' | 'executive';
export type FontChoice = 'garamond' | 'source' | 'sans' | 'inter';
export type AccentColor = 'navy' | 'slate' | 'emerald' | 'royal' | 'burgundy' | 'charcoal';
export type PageDensity = 'compact' | 'standard' | 'spacious';

export interface ResumeSettings {
  template: TemplateStyle;
  font: FontChoice;
  accent: AccentColor;
  density: PageDensity;
  showQrCode: boolean;
  showCoursework: boolean;
  showSports: boolean;
  showSummary: boolean;
}

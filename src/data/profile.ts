export const profile = {
  name: 'JM Niroshan',
  title: 'AI Full Stack Developer',
  location: 'Sri Lanka',
  email: 'jmniroshan99@gmail.com',
  phone: '+94 71 188 6467',
  telephone: '+94711886467',
  github: 'https://github.com/jmniroshan99',
  linkedin: 'https://linkedin.com/in/jm-niroshan-891b71ab',
  currentPortfolio: 'https://jmniroshanhealthit.netlify.app',
  cv: '/cv/JM_Niroshan_Full_Stack_CV.pdf',
  healthCv: '/cv/JM_Niroshan_Digital_Health_CV.pdf',
  softwareCv: '/cv/JM_Niroshan_Software_Developer_CV.pdf',
  intro: 'I’m JM Niroshan, a Health Information and Communication Technology undergraduate building full-stack applications, exploring AI integration, and developing digital health solutions.',
} as const;

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Tech skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const;

export const skillLevels = {
  project: { label: 'Project experience', description: 'Used in this portfolio or in project work described in my CV.' },
  foundation: { label: 'Foundational knowledge', description: 'Part of my toolkit, with practical depth still developing.' },
  learning: { label: 'Research & ongoing learning', description: 'Topics I am exploring and developing further.' },
} as const;

export type SkillLevel = keyof typeof skillLevels;
export interface SkillGroup {
  name: string;
  icon: 'web' | 'api' | 'mobile' | 'database' | 'ai' | 'tools';
  featured?: boolean;
  description: string;
  sets: { level: SkillLevel; skills: string[] }[];
  applications: string[];
  projects?: { label: string; href: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Web development', icon: 'web', featured: true,
    description: 'Responsive web applications built around reusable components, clear navigation, and practical user workflows.',
    sets: [{ level: 'project', skills: ['React.js', 'TypeScript', 'JavaScript', 'Vite', 'HTML5', 'CSS3', 'Responsive UI'] }],
    applications: ['Reusable components, responsive layouts, and accessible navigation.', 'Form validation, theme systems, and API-connected dashboards.'],
    projects: [{ label: 'GovCare', href: '/projects/govcare' }, { label: 'This portfolio', href: '/projects/portfolio' }],
  },
  {
    name: 'Mobile & cross-platform', icon: 'mobile', featured: true,
    description: 'Flutter and Dart project work across responsive interfaces, inventory workflows, and Flutter Web applications.',
    sets: [
      { level: 'project', skills: ['Flutter', 'Dart', 'Flutter Web', 'Responsive cross-platform UI', 'QR scanning'] },
      { level: 'foundation', skills: ['Kotlin'] },
    ],
    applications: ['QR-based item identification and inventory interfaces.', 'Loading/startup debugging and vehicle-policy workflows.'],
    projects: [{ label: 'InsureDrive', href: '/projects/insuredrive' }, { label: 'FIHST Inventory', href: '/projects/fihst' }],
  },
  {
    name: 'Backend & API development', icon: 'api',
    description: 'Connecting application interfaces to server-side logic, authenticated APIs, and workflow operations.',
    sets: [{ level: 'project', skills: ['Java', 'Spring Boot', 'REST APIs', 'API integration', 'Supabase Edge Functions'] }],
    applications: ['Frontend-to-backend integration and role-aware application workflows.', 'Patient, visit, queue, vehicle, and policy operations.'],
    projects: [{ label: 'GovCare', href: '/projects/govcare' }, { label: 'InsureDrive', href: '/projects/insuredrive' }],
  },
  {
    name: 'Databases & secure access', icon: 'database',
    description: 'Relational data, authentication, file storage, and permissions that follow the application workflow.',
    sets: [{ level: 'project', skills: ['PostgreSQL', 'SQL', 'Supabase Auth', 'Supabase Storage', 'Row-level security (RLS)', 'Role-based access (RBAC)', 'Schema migrations'] }],
    applications: ['Relational schema changes, access rules, and document workflows.', 'Separate visit/queue identifiers and support for multiple patient tokens.'],
    projects: [{ label: 'GovCare', href: '/projects/govcare' }, { label: 'InsureDrive', href: '/projects/insuredrive' }],
  },
  {
    name: 'AI integration & digital health', icon: 'ai',
    description: 'Connecting my healthcare background with AI fundamentals and responsible clinical-support research.',
    sets: [
      { level: 'foundation', skills: ['Python', 'AI / ML fundamentals', 'EHR & CDSS workflows', 'FHIR R4 concepts'] },
      { level: 'learning', skills: ['Predictive analytics', 'Explainable AI concepts', 'CKD decision-support integration', 'FHIR R4 mapping'] },
    ],
    applications: ['Exploring clinician-support workflows and healthcare data interoperability.', 'Keeping research, implementation, and validation limits clear.'],
    projects: [{ label: 'GovCare research scope', href: '/projects/govcare#research' }],
  },
  {
    name: 'Development tools & practices', icon: 'tools',
    description: 'A practical workflow for version control, API testing, debugging, and repeatable development.',
    sets: [
      { level: 'project', skills: ['Git', 'GitHub', 'Postman', 'npm', 'Flutter tooling', 'Debugging', 'Validation', 'Workflow design'] },
      { level: 'foundation', skills: ['Docker basics', 'Notification architecture (FCM)'] },
    ],
    applications: ['API checks, Git-based changes, and systematic debugging.', 'Build verification and diagnosing startup or loading issues.'],
    projects: [{ label: 'This portfolio', href: '/projects/portfolio' }, { label: 'FIHST Inventory', href: '/projects/fihst' }],
  },
];

export const education = {
  period: '2023 — 2027',
  title: 'B.H.Sc. (Hons) in Health Information and Communication Technology',
  institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
  status: 'Undergraduate · Expected completion 2027',
};

export const certifications = [
  { title: 'Healthcare Data Security, Privacy, and Compliance', provider: 'Johns Hopkins University', platform: 'Coursera', year: '2026' },
  { title: 'Introduction to Healthcare', provider: 'Stanford Online', platform: 'Coursera', year: '2026' },
  { title: 'Medical Terminology I', provider: 'Rice University', platform: 'Coursera', year: '2026' },
];

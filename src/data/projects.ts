export type ProjectId = 'govcare' | 'portfolio' | 'insuredrive' | 'fihst';
export type ProjectFilter = 'all' | 'web' | 'mobile' | 'health';
export interface StudySection { id: string; title: string; paragraphs?: string[]; items?: string[] }
export interface Project {
  id: ProjectId; number: string; name: string; title: string; category: string;
  summary: string; status: string; role: string; stack: string[];
  filters: ProjectFilter[]; sections: StudySection[];
  repo?: string; reference?: string;
}

export const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'web', label: 'Web & full-stack' },
  { id: 'mobile', label: 'Cross-platform' },
  { id: 'health', label: 'Digital health' },
];

export const projects: Project[] = [
  {
    id: 'govcare', number: '01', name: 'GovCare',
    title: 'Healthcare Platform with AI-Assisted Clinical Decision Support',
    category: 'FULL-STACK / DIGITAL HEALTH',
    summary: 'Connecting patient records, clinical workflows, and role-based access—with CKD decision support as a research direction.',
    status: 'Development & research', role: 'Full-stack development & workflow design',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'FHIR R4 concepts'],
    filters: ['web', 'health'], repo: 'https://github.com/jmniroshan99/govcare-ehr-system',
    sections: [
      { id: 'overview', title: 'Care is a connected workflow.', paragraphs: ['GovCare is a healthcare software project focused on patient records and hospital workflows in a Sri Lankan context. The application brings registration, visits, queues, clinical services, and role-based access into one system.', 'The public repository reviewed for this portfolio uses a React/TypeScript frontend, a Spring Boot REST API, and PostgreSQL. It is presented as development and research work; no clinical deployment or clinical validation is claimed.'] },
      { id: 'problem', title: 'The problem & the people', paragraphs: ['A patient record needs to remain connected as a person moves between registration, consultation, and supporting departments. Identifiers, permissions, and workflow state need to stay consistent across those handoffs.'], items: ['Records officers: registration, patient search, and demographic records.', 'Doctors: queues, consultation, prescriptions, and investigation requests.', 'Laboratory and pharmacy teams: department-specific workflows.', 'Administrators and patients: appropriate access to operational and personal records.'] },
      { id: 'contribution', title: 'My contribution', paragraphs: ['My CV describes development and improvement of EHR workflows, patient records, visits, queues and token handling, role-based access, and database migrations. It also describes CKD risk-assessment and CDSS integration work.'], items: ['Improved patient and visit workflows, including separate visit and queue identifiers.', 'Worked on collision-safe numbering and support for multiple patient tokens.', 'Structured relational data and migrations for evolving healthcare workflows.', 'Connected frontend workflows with backend APIs and permission-aware access.'] },
      { id: 'implemented', title: 'What the source supports', paragraphs: ['The reviewed repository contains patient registration and profile screens, OPD queues, clinical departmental modules, JWT authentication, role/permission structures, and Flyway migrations. The migration for multiple active patient tokens is present.', 'This is a targeted source review, not an end-to-end audit of the EHR. Features documented only in my CV are identified separately from source-verified architecture.'] },
      { id: 'architecture', title: 'A clear application boundary', paragraphs: ['React and TypeScript handle the interface. REST requests connect it to Spring Boot, with Spring Security and JWT for authenticated access. PostgreSQL stores application data; Flyway applies versioned schema migrations.', 'The repository describes server-side authorization as authoritative. Interface visibility helps users navigate; it does not replace backend access checks.'] },
      { id: 'data', title: 'Data & access control', items: ['Relational patient, visit, queue, and clinical workflow records.', 'Roles and permissions stored in PostgreSQL.', 'Authenticated API requests and permission-aware server behavior.', 'Audit and login-activity workflows in the repository.', 'No identifiable patient records are shown. The supplied administrative screenshot contains aggregate interface figures whose provenance and deployment context have not been verified.'] },
      { id: 'research', title: 'AI, CDSS & interoperability', paragraphs: ['CKD risk assessment, predictive analytics, and AI-assisted CDSS are described in my CV as integration and research work. The reviewed public source snapshot does not establish a trained CKD model, measured accuracy, or a validated five-year forecast.', 'FHIR R4-oriented mapping and interoperability are areas of work described in my CV. Full FHIR conformance is not asserted. Explainable AI and longer-horizon forecasting remain research directions unless supported by separately verified implementation.', 'Any future clinical decision-support output requires clinician interpretation. It is not autonomous diagnosis or a treatment recommendation.'] },
      { id: 'screenshots', title: 'A view of the interface', paragraphs: ['The image above is a supplied GovCare administrative dashboard capture. It shows activity cards and operational navigation. Its aggregate figures and institution labels are not verified adoption, patient-count, or deployment claims. No identifiable patient record is displayed.', 'The screenshot documents the visible interface; it does not establish backend correctness, clinical performance, or conformance.'] },
      { id: 'learning', title: 'Engineering challenges & lessons', paragraphs: ['Queue and visit identifiers need distinct responsibilities. Supporting more than one active patient token illustrates why database constraints must follow the real workflow.', 'The backend migration also makes the value of explicit API contracts, repeatable schema changes, and permission checks clear. These are design lessons; no unmeasured efficiency or clinical outcome claims are made.'] },
      { id: 'next', title: 'Next development steps', items: ['Broaden automated coverage of patient, visit, and permission workflows.', 'Document and validate resource mappings against the intended FHIR R4 profiles.', 'Evaluate CKD models only with authorized data and an appropriate evaluation protocol.', 'Add interpretable output, limitations, and clinician review to research interfaces.'] },
    ],
  },
  {
    id: 'portfolio', number: '02', name: 'Developer Portfolio',
    title: 'Personal Brand and Project Showcase', category: 'WEB / DESIGN ENGINEERING',
    summary: 'A considered home for my work: accessible interfaces, two complete themes, and project stories with technical substance.',
    status: 'Portfolio redesign', role: 'Personal portfolio & content direction',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS design tokens'], filters: ['web'],
    repo: 'https://github.com/jmniroshan99/healthit', reference: 'https://jmniroshanhealthit.netlify.app',
    sections: [
      { id: 'overview', title: 'A portfolio with a clear point of view.', paragraphs: ['This downloadable edition redesigns my existing React/Vite portfolio around web, mobile, and AI development, while preserving digital health as a distinctive specialization.', 'The previous healthit repository was reviewed as source. Its React/Vite foundation, routing, project filtering, theme preference, and contact paths informed the redesign. The public Netlify website could not be inspected during this build; visual comparisons to the deployed version are not claimed.'] },
      { id: 'problem', title: 'Make the work easy to understand', paragraphs: ['A recruiter or collaborator should be able to understand my background, explore a real project, and find a practical next step without navigating a complicated interface.', 'The revised structure places project evidence alongside the design: GovCare is the lead case study, followed by this portfolio and cross-platform project work.'] },
      { id: 'implemented', title: 'What changed in this edition', items: ['Typed content files for profile, skills, education, and case studies.', 'Dedicated case-study routes instead of relying only on project modals.', 'Complete Midnight Graphite and Porcelain Blue themes.', 'System theme preference with a persistent manual override.', 'Accessible navigation, project filters, focus states, and mobile menu.', 'Supplied CV downloads, real contact links, and an honest email handoff.', 'Page-specific metadata, a favicon, and a social sharing image.', 'Supplied portrait and project screenshots, with responsive presentation and reserved image dimensions.'] },
      { id: 'architecture', title: 'Simple by design', paragraphs: ['React components render typed content. React Router owns page navigation, while CSS tokens define both themes. The production output is static and can be hosted without a database or account system.', 'The source includes a small Node static server so the included production build can be previewed after extraction. Netlify configuration and an optional Netlify Forms mode are retained for deployment.'] },
      { id: 'learning', title: 'Design decisions that serve the reader', paragraphs: ['The redesign replaces percentage-based skill ratings with experience descriptions, and removes distracting typing and tilt effects. Supplied project screenshots and my portrait are used alongside the clearly labeled portfolio illustration. Interface screenshots are distinguished from verified deployment outcomes.', 'The theme system responds to system changes until a manual choice is made. Reduced-motion settings, semantic sections, and keyboard access are built into the interaction model.'] },
      { id: 'next', title: 'Next steps', items: ['Add further approved workflow screenshots with synthetic demonstration records.', 'Add verified project outcomes and certificate links as evidence becomes available.', 'Configure and verify a hosted contact service if direct submissions are desired.'] },
    ],
  },
  {
    id: 'insuredrive', number: '03', name: 'InsureDrive', title: 'Vehicle Insurance & Fleet Management', category: 'CROSS-PLATFORM / OPERATIONS',
    summary: 'A Sri Lanka-focused platform for policy records, renewals, compliance dates, and evolving fleet workflows.',
    status: 'Project work · CV-supported', role: 'Application workflows & data integration',
    stack: ['Flutter Web', 'Dart', 'Supabase', 'PostgreSQL', 'RLS', 'Edge Functions', 'FCM'], filters: ['web', 'mobile'],
    sections: [
      { id: 'overview', title: 'Keeping vehicle obligations in view.', paragraphs: ['InsureDrive is described in my CV as a vehicle insurance and compliance platform for administrators, insurance officers, and vehicle owners in Sri Lanka. The confirmed platform description is Flutter Web; no Android or iOS store release is claimed.'] },
      { id: 'implemented', title: 'Application work described in my CV', items: ['Role-based vehicle and policy management.', 'Renewal history and document/compliance tracking.', 'Insurance, revenue licence, emission, and fitness-expiry monitoring.', 'Database-authoritative due dates and notification history.', 'Architecture for automated reminders.'] },
      { id: 'architecture', title: 'Data & integrations', paragraphs: ['The listed stack combines Flutter Web and Dart with Supabase authentication, PostgreSQL, row-level security, and Edge Functions. FCM is part of the notification technology described in the CV.', 'No live backend, delivery guarantees, or deployed reminder schedule is demonstrated by this portfolio.'] },
      { id: 'next', title: 'Fleet work & continuing development', paragraphs: ['The CV also describes GPS/fleet work involving location, trips, overspeed/geofence events, secure device pairing, and realtime dashboard concepts. These are presented as evolving workflows and concepts, rather than independently verified production capabilities.'] },
    ],
  },
  {
    id: 'fihst', number: '04', name: 'FIHST Inventory', title: 'QR-Based Inventory Management', category: 'CROSS-PLATFORM / INVENTORY',
    summary: 'Making item identification and stock workflows more straightforward with QR-enabled interfaces.',
    status: 'Project work · CV-supported', role: 'Inventory workflows & debugging',
    stack: ['Flutter', 'Dart', 'QR identification', 'Responsive UI'], filters: ['mobile'],
    sections: [
      { id: 'overview', title: 'A simpler path from item to record.', paragraphs: ['FIHST Inventory Management System is a Flutter/Dart project described in my CV. Its focus is QR-based item identification and inventory workflows.'] },
      { id: 'contribution', title: 'My contribution', items: ['Developed and debugged QR item-identification and stock-management workflows.', 'Resolved loading and startup issues while preserving existing functionality.', 'Worked on responsive interfaces for the inventory experience.'] },
      { id: 'learning', title: 'Practical engineering lessons', paragraphs: ['Inventory tools need clear feedback while loading, identifying items, and updating records. Debugging startup behavior reinforced the value of handling loading and failure states deliberately.', 'The portfolio does not claim a published mobile app, a specific device rollout, or measured operational outcomes.'] },
    ],
  },
];

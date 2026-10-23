import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, Database, Github, Layers3, Monitor, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { usePageMetadata } from '../hooks/usePageMetadata';
import ProjectVisual from '../components/ProjectVisual';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.id === slug);
  usePageMetadata(project ? `${project.name} — Case Study | JM Niroshan` : 'Project not found | JM Niroshan', project?.summary ?? 'Explore selected projects by JM Niroshan.');
  if (!project) return <main id="main-content" tabIndex={-1} className="container missing-page"><span className="eyebrow">PROJECT NOT FOUND</span><h1>Let’s find<br/>the right project.</h1><Link to="/#projects" className="button primary">View all projects <ArrowRight size={18}/></Link></main>;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main id="main-content" tabIndex={-1}>
    <section className="case-hero container"><Link to="/#projects" className="back-link"><ArrowLeft size={17}/> All projects</Link><div className="case-title-row"><span className="eyebrow">{project.number} / {project.category}</span><span className="status-pill"><i/>{project.status}</span></div><h1>{project.name}<span>.</span></h1><p className="case-subtitle">{project.title}</p><p className="case-summary">{project.summary}</p><div className="case-info"><div><span>MY FOCUS</span><strong>{project.role}</strong></div><div><span>TECHNOLOGIES</span><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div></div><ProjectVisual id={project.id} large/>
    </section>
    <div className="container case-layout"><aside className="case-sidebar"><span className="eyebrow">IN THIS CASE STUDY</span><nav aria-label="Case study contents">{project.sections.map(section => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}</nav>{project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer"><Github size={16}/> {project.id === 'portfolio' ? 'Original source' : 'View repository'} <ArrowUpRight size={14}/></a>}{project.reference && <a className="text-link" href={project.reference} target="_blank" rel="noopener noreferrer">Previous portfolio <ArrowUpRight size={14}/></a>}</aside><div className="case-content">
      {project.sections.map(section => <section id={section.id} className="case-section" key={section.id}><h2>{section.title}</h2>{section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
        {section.id === 'architecture' && (project.id === 'govcare' || project.id === 'portfolio') && <div className="architecture" aria-label="Application architecture"><div><Monitor/><strong>Interface</strong><span>React + TypeScript</span></div><ArrowRight className="architecture-arrow"/><div><Braces/><strong>{project.id === 'govcare' ? 'REST API' : 'Navigation'}</strong><span>{project.id === 'govcare' ? 'Spring Boot' : 'React Router'}</span></div><ArrowRight className="architecture-arrow"/><div>{project.id === 'govcare' ? <Database/> : <Layers3/>}<strong>{project.id === 'govcare' ? 'Persistence' : 'Content'}</strong><span>{project.id === 'govcare' ? 'PostgreSQL + Flyway' : 'Typed local data'}</span></div><div className="architecture-note"><ShieldCheck size={15}/>{project.id === 'govcare' ? 'Server-side authorization · JWT · Roles & permissions' : 'Static build · Theme tokens · Accessible components'}</div></div>}
      </section>)}
      {project.id === 'govcare' && <div className="evidence-note"><span className="eyebrow">EVIDENCE & SCOPE</span><p>Architecture and selected workflow details were checked against the public repository. Personal contributions and research experience are based on the supplied CVs. This portfolio is not a clinical validation report.</p><a href="https://github.com/jmniroshan99/govcare-ehr-system/tree/4f8bbba4b3208e0922a425b412d8ac3a1180af7b" target="_blank" rel="noopener noreferrer">Reviewed source snapshot <ArrowUpRight size={14}/></a></div>}
    </div></div>
    <section className="next-project"><div className="container"><div><span className="eyebrow">KEEP EXPLORING</span><Link to={`/projects/${next.id}`}><h2>{next.name}</h2><ArrowRight size={38}/></Link><p>{next.category}</p></div><Link className="button secondary" to="/#contact">Discuss a project <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}

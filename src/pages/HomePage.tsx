import { useState } from 'react';
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, Braces, Code2, Database, Github, GraduationCap, HeartPulse, Layers3, Linkedin, MapPin, Network, Smartphone, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile, education, certifications } from '../data/profile';
import { projects, filters, type ProjectFilter } from '../data/projects';
import { usePageMetadata } from '../hooks/usePageMetadata';
import ProjectVisual, { HeroVisual } from '../components/ProjectVisual';
import Contact from '../components/Contact';
import TechnicalSkills from '../components/TechnicalSkills';
import { Portrait, AdditionalPreview } from '../components/SuppliedImage';


export default function HomePage() {
  usePageMetadata('JM Niroshan | AI Full Stack Developer · Web & Mobile', 'JM Niroshan’s portfolio: full-stack web and cross-platform development, AI exploration, and digital health. Explore GovCare and selected projects.');
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const shown = projects.filter(project => filter === 'all' || project.filters.includes(filter));
  return <main id="main-content" tabIndex={-1}>
    <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="hero-person hero-profile">
          <Portrait/>
          <div className="hero-profile-details">
            <strong>{profile.name}</strong>
            <span className="hero-profile-title">{profile.title}</span>
            <p><MapPin size={13} aria-hidden="true"/> Undergraduate based in Sri Lanka</p>
          </div>
        </div><div className="eyebrow hero-eyebrow"><span className="small-square"/>WEB · MOBILE · APPLIED AI</div><h1>Building intelligent<br/><em>experiences.</em><span>for web and mobile.</span></h1><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={19}/></a><a className="button secondary" href={profile.cv} download>Download CV <ArrowDownToLine size={18}/></a></div><div className="hero-social"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href="#expertise">My tech stack <ArrowRight size={13}/></a></div></div><HeroVisual/></div>
      <div className="container hero-bottom"><span>THOUGHTFUL CODE. USEFUL EXPERIENCES.</span><a href="#projects">Scroll to explore <ArrowDown size={15}/></a></div>
    </section>
    <div className="stack-strip"><div className="container"><span className="stack-caption">BUILT WITH PURPOSE</span><span><Code2/> React & TypeScript</span><span><Braces/> Spring Boot</span><span><Smartphone/> Flutter & Dart</span><span><Database/> PostgreSQL</span><span><HeartPulse/> Digital Health</span></div></div>
    <section id="projects" className="section projects-section"><div className="container"><div className="section-heading heading-inline"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>From an idea<br/>to something useful<span>.</span></h2></div><p>Real projects. Thoughtful decisions.<br/>A closer look at what I’m building.</p></div>
      <div className="project-filters" role="group" aria-label="Filter projects">{filters.map(item => <button type="button" key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id} className={filter === item.id ? 'selected' : ''}>{item.label}{item.id === 'all' && <span>04</span>}</button>)}</div><p className="sr-only" role="status">Showing {shown.length} projects.</p>
      <div className="project-grid">{shown.map(project => <article key={project.id} className={`project-card ${project.id === 'govcare' ? 'featured-project' : ''}`}><Link to={`/projects/${project.id}`} className="project-image-link" tabIndex={-1} aria-hidden="true"><ProjectVisual id={project.id}/></Link><div className="project-body"><div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3><Link to={`/projects/${project.id}`}>{project.name}<ArrowUpRight/></Link></h3><p>{project.summary}</p><div className="tags">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-foot"><span><i/>{project.status}</span><Link to={`/projects/${project.id}`} aria-label={`Read ${project.name} case study`}>View case study <ArrowRight size={16}/></Link></div></div></article>)}</div>
      <AdditionalPreview/>
      <a className="text-link more-code" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> Explore more on GitHub <ArrowUpRight size={16}/></a>
    </div></section>
    <section id="about" className="section about-section"><div className="container about-grid"><div><span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span><h2>Technology with<br/>a human purpose<span>.</span></h2><p className="about-lead">I’m Niroshan—a developer who likes understanding the workflow before writing the code.</p><p>My background in Health Information and Communication Technology connects software engineering with the people and processes it supports. I work across interfaces, APIs, databases, and access-control workflows.</p><p>I’m developing my skills in AI integration and cross-platform applications, with a particular interest in responsible digital health. The goal is simple: build software that is clear, practical, and useful.</p><a href={profile.cv} download className="text-link">More about my background <ArrowDownToLine size={17}/></a></div><div className="about-principles"><div className="about-profile"><Portrait large/><div><strong>JM Niroshan</strong><span>Developer. Curious learner.</span><small>CODE WITH CONTEXT.</small></div></div><div className="principle"><Workflow/><div><h3>Understand the workflow</h3><p>Start with the problem and the people using the system.</p></div></div><div className="principle"><Layers3/><div><h3>Connect the whole stack</h3><p>Think through the interface, API, data, and permissions.</p></div></div><div className="principle"><Network/><div><h3>Keep learning, deliberately</h3><p>Explore new tools with clear limitations and real use cases.</p></div></div></div></div></section>
    <TechnicalSkills/>
    <section id="journey" className="section journey-section"><div className="container journey-grid"><div className="section-heading"><span className="eyebrow">04 / EDUCATION & LEARNING</span><h2>A foundation<br/>for what’s next<span>.</span></h2><p>Bringing software development and healthcare knowledge together.</p><div className="language-note"><span>LANGUAGES</span><strong>Sinhala <i/> English</strong></div></div><div className="journey-content"><article className="education-card"><div className="education-top"><GraduationCap size={27}/><span>{education.period}</span></div><span className="eyebrow">EDUCATION</span><h3>{education.title}</h3><p>{education.institution}</p><span className="education-status">{education.status}</span></article><div className="cert-heading"><h3>Continuous learning</h3><span>COURSE CERTIFICATES</span></div><div className="certifications">{certifications.map((cert, i) => <article key={cert.title} className="cert-row"><span className="cert-number">0{i + 1}</span><div><h4>{cert.title}</h4><p>{cert.provider} · {cert.platform}</p></div><span className="cert-year">{cert.year}</span></article>)}</div></div></div></section>
    <Contact/>
  </main>;
}

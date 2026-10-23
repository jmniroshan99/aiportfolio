import { ArrowUpRight, Braces, Database, Monitor, Smartphone, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skillGroups, skillLevels } from '../data/profile';

const skillIcons = { web: Monitor, api: Braces, mobile: Smartphone, database: Database, ai: Sparkles, tools: Terminal };

export default function TechnicalSkills() {
  return <section id="expertise" className="section technical-skills" aria-labelledby="technical-skills-title">
    <div className="container">
      <div className="section-heading heading-inline">
        <div><span className="eyebrow">03 / TECHNICAL SKILLS</span><h2 id="technical-skills-title">Web. Mobile.<br/>The stack behind the work<span>.</span></h2></div>
        <p>From responsive interfaces to APIs and data—skills developed through practical projects and continued learning.</p>
      </div>
      <div className="skill-legend" aria-label="How skill experience is described">
        {Object.entries(skillLevels).map(([id, level]) => <div key={id}><strong>{level.label}</strong><span>{level.description}</span></div>)}
      </div>
      <div className="technical-skills-grid">
        {skillGroups.map(group => {
          const Icon = skillIcons[group.icon];
          return <article className={`technical-skill-card${group.featured ? ' technical-skill-featured' : ''}`} key={group.name}>
            <div className="technical-skill-heading"><Icon size={25}/><h3>{group.name}</h3></div>
            <p>{group.description}</p>
            <div className="skill-sets">{group.sets.map(set => <div className="skill-set" key={set.level}>
              <h4>{skillLevels[set.level].label}</h4><ul className="skill-tags">{set.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            </div>)}</div>
            <div className="skill-applications"><span>HOW I APPLY IT</span><ul>{group.applications.map(item => <li key={item}>{item}</li>)}</ul></div>
            {group.projects && <div className="skill-project-links"><span>RELATED WORK</span>{group.projects.map(project => <Link key={project.href} to={project.href}>{project.label}<ArrowUpRight size={14}/></Link>)}</div>}
          </article>;
        })}
      </div>
    </div>
  </section>;
}

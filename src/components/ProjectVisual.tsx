import { ArrowUpRight, Layers3, LockKeyhole } from 'lucide-react';
import type { ProjectId } from '../data/projects';
import { media, screenshotCopy } from '../data/media';
import { SuppliedImage } from './SuppliedImage';

function BrowserBar({ text }: { text: string }) {
  return <div className="browser-bar"><span className="window-dots"><i/><i/><i/></span><span className="browser-address"><LockKeyhole size={10}/>{text}</span><span className="browser-more">···</span></div>;
}

export function HeroVisual() {
  return <figure className="hero-visual hero-with-screenshots"><div className="hero-visual-grid" aria-hidden="true"/><div className="visual-top-note"><span>REAL PROJECTS. REAL INTERFACES.</span><Layers3 size={15}/></div>
    <div className="hero-browser"><div className="browser-window"><BrowserBar text="GovCare / Development workspace"/><SuppliedImage image={media.govcare} priority/></div><span className="capture-label">GovCare · Web interface</span></div>
    <div className="hero-phone"><div className="screenshot-phone"><SuppliedImage image={media.insuredrive}/></div><span className="capture-label">InsureDrive · Interface</span></div>
    <figcaption>Supplied screenshots · Interface views, not deployment metrics</figcaption>
  </figure>;
}

function PortfolioScreen() {
  return <div className="browser-window portfolio-screen"><BrowserBar text="JM Niroshan / Portfolio"/><div className="portfolio-screen-nav"><b>JN<span>.</span></b><span>About &nbsp; Work &nbsp; Contact</span><i>↗</i></div><div className="portfolio-screen-body"><small>WEB · MOBILE · APPLIED AI</small><h4>Thoughtful code.<br/><em>Useful experiences.</em></h4><p>JM Niroshan — Developer portfolio</p><div className="mock-portfolio-button">Explore my work ↗</div><div className="mock-portfolio-stack"><span>React</span><span>TypeScript</span><span>Vite</span></div></div><div className="portfolio-screen-footer"><span>01 / Selected work</span><span>Built with care</span></div></div>;
}


export default function ProjectVisual({ id, large = false }: { id: ProjectId; large?: boolean }) {
  if (id === 'portfolio') return <figure className={`project-visual visual-portfolio${large ? ' visual-large' : ''}`}><div className="project-visual-inner" aria-hidden="true"><PortfolioScreen/></div><figcaption>Illustrative interface</figcaption></figure>;
  const content = screenshotCopy[id];
  return <figure className={`project-visual visual-${id} supplied-project${large ? ' visual-large' : ''}`}>
    <div className="supplied-project-layout">
      {id === 'govcare' ? <div className="browser-window"><BrowserBar text="GovCare / Development workspace"/><SuppliedImage image={media[id]}/></div> : <><div className="screenshot-phone"><SuppliedImage image={media[id]}/></div><div className="screenshot-summary"><span className="eyebrow">{content.label}</span><h4>{content.title}</h4><p>{content.detail}</p><span className="screenshot-origin">Supplied project screenshot</span></div></>}
    </div>
    <figcaption>{large ? <><span>{content.caption}</span><a href={media[id].src} target="_blank" rel="noopener noreferrer">Open full image <ArrowUpRight size={14}/></a></> : id === 'govcare' ? 'Supplied screenshot · Figures are unverified' : 'Supplied project screenshot'}</figcaption>
  </figure>;
}

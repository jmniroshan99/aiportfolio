import { ArrowUp, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-top">
    <Link to="/#home" className="footer-brand"><span className="monogram">JN<span>.</span></span><span>Thoughtful code.<br /><strong>Useful experiences.</strong></span></Link>
    <div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14}/></a></div>
  </div><div className="container footer-bottom"><span>© 2026 JM Niroshan. Built with care in Sri Lanka.</span><button type="button" onClick={() => { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.getElementById('main-content')?.focus({ preventScroll: true }); }}>Back to top <ArrowUp size={15}/></button></div></footer>;
}

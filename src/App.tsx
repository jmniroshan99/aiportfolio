import { useEffect } from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import { usePageMetadata } from './hooks/usePageMetadata';

function NavigationEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
      else window.scrollTo(0, 0);
      if (!hash) document.getElementById('main-content')?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  usePageMetadata('Page not found | JM Niroshan', 'Return to JM Niroshan’s developer portfolio.');
  return <main id="main-content" tabIndex={-1} className="container missing-page"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page took<br/>a different route.</h1><p>Explore the projects or head back to the portfolio.</p><Link className="button primary" to="/">Back to home →</Link></main>;
}

function ThankYou() {
  usePageMetadata('Contact | JM Niroshan', 'Contact JM Niroshan about projects and opportunities.');
  return <main id="main-content" tabIndex={-1} className="container missing-page"><span className="eyebrow">LET’S CONNECT</span><h1>Thanks for<br/>reaching out.</h1><p>This page does not confirm delivery. The contact form shows the submission result, or you can email me directly.</p><Link to="/#contact" className="button primary">Return to contact →</Link></main>;
}

export default function App() {
  return <><Header/><NavigationEffects/><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects/:slug" element={<CaseStudyPage/>}/><Route path="/thank-you" element={<ThankYou/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>;
}

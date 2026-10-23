import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/profile';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (pathname !== '/') return;
    const update = () => {
      const sections = navigation.map(item => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
      let current = 'home';
      for (const section of sections.sort((a, b) => a.offsetTop - b.offsetTop)) {
        if (section.getBoundingClientRect().top <= 160) current = section.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [pathname]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    };
    const wide = window.matchMedia('(min-width: 1001px)');
    const close = () => { if (wide.matches) setOpen(false); };
    window.addEventListener('keydown', escape);
    wide.addEventListener('change', close);
    return () => { window.removeEventListener('keydown', escape); wide.removeEventListener('change', close); };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/#home" className="brand" aria-label="JM Niroshan — home" onClick={() => setOpen(false)}>
          <span className="monogram">JN<span>.</span></span><span className="brand-name">JM Niroshan<span>Developer portfolio</span></span>
        </Link>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>
          {navigation.map(item => <Link key={item.id} to={`/#${item.id}`} onClick={() => setOpen(false)} aria-current={pathname === '/' && active === item.id ? 'location' : undefined}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={theme === 'dark' ? 'Porcelain Blue theme' : 'Midnight Graphite theme'}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button>
          <Link to="/#contact" className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={16} /></Link>
          <button ref={menuButton} className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  </>;
}

import { useEffect, useState } from 'react';
export type Theme = 'light' | 'dark';
const key = 'jn-portfolio-theme-v1';

export function useTheme() {
  // Keep SSR and hydration deterministic. The head script applies the correct
  // colors before paint; this effect then synchronizes the control's state.
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = () => {
      try { const saved = localStorage.getItem(key); return saved === 'dark' || saved === 'light' ? saved : null; }
      catch { return null; }
    };
    const sync = () => {
      const next = savedTheme() ?? (query.matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    sync();
    query.addEventListener('change', sync);
    window.addEventListener('storage', sync);
    return () => { query.removeEventListener('change', sync); window.removeEventListener('storage', sync); };
  }, []);
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(key, next); } catch { /* Theme still works for this visit. */ }
    document.documentElement.dataset.theme = next;
    setTheme(next);
  };
  return { theme, toggleTheme };
}

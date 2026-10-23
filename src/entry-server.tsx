import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { projects } from './data/projects';

export const routes = ['/', ...projects.map(project => `/projects/${project.id}`), '/thank-you', '/404'];
export function render(path: string) {
  const project = projects.find(item => path === `/projects/${item.id}`);
  const title = project ? `${project.name} — Case Study | JM Niroshan` : path === '/404' ? 'Page not found | JM Niroshan' : path === '/thank-you' ? 'Contact | JM Niroshan' : 'JM Niroshan | AI Full Stack Developer · Web & Mobile';
  const description = project?.summary ?? 'JM Niroshan’s portfolio: full-stack web and cross-platform development, AI exploration, and digital health. Explore GovCare and selected projects.';
  return { html: renderToString(<StaticRouter location={path}><App /></StaticRouter>), title, description };
}

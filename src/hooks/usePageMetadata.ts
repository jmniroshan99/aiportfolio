import { useEffect } from 'react';

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    for (const [selector, content] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ]) document.querySelector(selector)?.setAttribute('content', content);
  }, [title, description]);
}

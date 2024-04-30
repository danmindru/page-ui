import { useEffect, useState, useRef } from 'react';

export function useTocHeadObserver() {
  const observer = useRef<null | IntersectionObserver>();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry?.isIntersecting) {
          setActiveId('#' + entry.target.id);
        }
      }
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0px 0px -98% 0px',
    });

    const elements = document.querySelectorAll('h1 ,h2 ,h3 ,h4 ,h5 ,h6');
    elements.forEach((elem) => {
      if (observer.current) {
        observer.current.observe(elem);
      }
    });

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}

'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

export const DemoToc = ({
  titleComponent,
}: {
  titleComponent: React.ReactNode;
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  useEffect(() => {
    // only select heading elements with an id attribute
    const headingElements = Array.from(
      document.querySelectorAll('h2, h3, h4, h5, h6'),
    ).filter((headingElement) => headingElement.id);

    const headingsData: Heading[] = headingElements.map((headingElement) => ({
      level: parseInt(headingElement.tagName.charAt(1)),
      text: headingElement.textContent || '',
      id: headingElement.id,
    }));

    setHeadings(headingsData);

    const handleScroll = () => {
      let activeId: string | null = null;

      for (const heading of headingsData) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top - 50 <= 0) {
            activeId = heading.id;
          }
        }
      }

      setActiveHeading(activeId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            scroll-padding-top: 30px;
          }
        `}
      </style>

      <div className="table-of-contents">
        <div className="font-semibold flex gap-4">{titleComponent}</div>
        <ul className="flex flex-col gap-1 mt-4">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className="text-sm"
              style={{
                borderLeftWidth: heading.level > 2 ? `2px` : '',
                paddingLeft:
                  heading.level > 2 ? `${(heading.level - 2) * 10}px` : '',
              }}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  'inline-block hover:opacity-70 transition-opacity',
                  heading.level === 2 ? 'font-semibold mt-4' : '',
                  activeHeading === heading.id
                    ? 'font-semibold fancy-text-purple'
                    : '',
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

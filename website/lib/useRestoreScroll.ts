'use client';

import { useEffect } from 'react';

// Check the scroll position of the passed element id and restore it if it exists.
// Save the position to local storage on scroll.
export const useRestoreScrollPosition = ({
  elementId,
}: {
  elementId: string;
}) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const scrollPosition = localStorage.getItem(elementId);
    if (!scrollPosition) return;

    setTimeout(() => {
      element.scrollTop = parseInt(scrollPosition);
    }, 1);
  }, [elementId]);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const onScroll = () => {
      localStorage.setItem(elementId, element.scrollTop.toString());
    };

    element.addEventListener('scroll', onScroll);

    return () => {
      element.removeEventListener('scroll', onScroll);
    };
  }, [elementId]);

  return null;
};

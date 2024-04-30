'use client';
import { useRestoreScrollPosition } from '@/lib/useRestoreScroll';

export const ScrollRestoration = ({ elementId }: { elementId: string }) => {
  useRestoreScrollPosition({ elementId });
  return null;
};

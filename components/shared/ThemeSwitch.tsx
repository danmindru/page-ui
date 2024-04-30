'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isSystem = theme === 'system';

  const isDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = isSystem ? (isDark ? 'dark' : 'light') : theme;

  const updateTheme = () => {
    if (isSystem) {
      if (isDark) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    } else {
      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const animation = {
    initial: { opacity: 0, translateY: 10 },
    animate: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    exit: { opacity: 0, translateY: -10 },
  };

  if (!mounted) {
    return <div className="w-6 h-6"></div>;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={updateTheme}
      className="inline-block relative w-6 h-6"
    >
      {currentTheme === 'dark' ? (
        <motion.div
          {...animation}
          key="dark"
          className="absolute left-0 top-0 w-6 h-6"
        >
          <MoonIcon />
        </motion.div>
      ) : (
        <motion.div
          {...animation}
          key="light"
          className="absolute left-0 top-0 w-6 h-6"
        >
          <SunIcon />
        </motion.div>
      )}
    </button>
  );
};

export default ThemeSwitch;

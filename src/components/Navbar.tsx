'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export const Navbar = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[200] flex h-14 items-center border-b border-[var(--border)] bg-[rgba(246,244,239,0.92)] backdrop-blur-2xl transition-colors duration-300 dark:bg-[rgba(17,17,16,0.92)]">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-9">
        <div className="font-serif text-base text-[var(--text)]">{portfolioData.name}</div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            {['About', 'Journey', 'Education', 'Experience'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[0.78rem] font-medium tracking-[0.07em] uppercase text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text)]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a 
            href={portfolioData.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-[var(--text-muted)] transition-all hover:border-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a 
            href={portfolioData.links.resume} 
            download 
            className="inline-flex items-center gap-1.5 rounded border border-[var(--text)] bg-[var(--text)] px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-[var(--bg)] transition-all hover:opacity-80"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button 
            onClick={toggleDarkMode}
            className="inline-flex items-center justify-center rounded border border-[var(--border)] p-1.5 transition-all hover:border-[var(--text-muted)]"
            title="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

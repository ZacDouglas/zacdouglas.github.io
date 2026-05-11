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
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-logo">{portfolioData.name}</div>
        <nav>
          <ul className="topbar-nav">
            {['About', 'Journey', 'Education', 'Experience'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="topbar-right">
          <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="topbar-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href={portfolioData.links.resume} download className="topbar-btn primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>Resume</span>
          </a>
          <button onClick={toggleDarkMode} className="topbar-btn" title="Toggle dark mode">
            {isDark ? '☀️' : '🌓'}
          </button>
        </div>
      </div>
    </header>
  );
};

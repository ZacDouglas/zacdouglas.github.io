'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

type Theme = 'light' | 'dark' | 'retro';

export const Navbar = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (t: Theme) => {
    document.documentElement.classList.remove('dark', 'retro');
    if (t !== 'light') document.documentElement.classList.add(t);
  };

  const switchTheme = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    localStorage.setItem('theme', t);
  };

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-logo">{portfolioData.name}</div>
        <nav>
          <ul className="topbar-nav">
            {['About', 'Journey', 'Education', 'Experience', 'Resources'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="topbar-right">
          <div className="theme-switcher">
            {(['light', 'dark', 'retro'] as Theme[]).map((t) => (
              <button
                key={t}
                className={theme === t ? 'active' : ''}
                onClick={() => switchTheme(t)}
              >
                {t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '🎮'}
              </button>
            ))}
          </div>
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
        </div>
      </div>
    </header>
  );
};

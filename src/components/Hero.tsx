'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end border-b border-[var(--border)] px-9 pb-18 pt-20">
      <div className="mb-5 animate-fade-up text-[0.78rem] font-medium uppercase tracking-[0.1em] text-[var(--sage)] opacity-0 [animation-delay:0.1s]">
        {portfolioData.eyebrow}
      </div>
      <h1 className="mb-10 animate-fade-up font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.95] tracking-tight text-[var(--text)] opacity-0 [animation-delay:0.2s]">
        Zac<br />
        <em className="italic text-[var(--sage)]">Douglas</em>
      </h1>
      <div className="flex animate-fade-up flex-wrap items-end justify-between gap-8 opacity-0 [animation-delay:0.35s]">
        <p className="max-w-[380px] text-[0.95rem] leading-[1.7] text-[var(--text-muted)]">
          {portfolioData.description}
        </p>
        <div className="flex shrink-0 gap-2">
          <a href="#about" className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-[var(--text-muted)] transition-all hover:border-[var(--text-muted)] hover:text-[var(--text)]">
            About
          </a>
          <a href={portfolioData.links.resume} download className="inline-flex items-center gap-1.5 rounded border border-[var(--text)] bg-[var(--text)] px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-[var(--bg)] transition-all hover:opacity-80">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

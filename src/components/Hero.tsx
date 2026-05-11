'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center border-b border-[var(--border)] px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-6 animate-fade-up text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--sage)] opacity-0 [animation-delay:0.1s]">
          {portfolioData.eyebrow}
        </div>
        <h1 className="mb-12 animate-fade-up font-serif text-[clamp(4.5rem,12vw,10rem)] font-normal leading-[0.9] tracking-tighter text-[var(--text)] opacity-0 [animation-delay:0.2s]">
          Zac<br />
          <span className="italic text-[var(--sage)] inline-block translate-x-4">Douglas</span>
        </h1>
        <div className="flex animate-fade-up flex-wrap items-end justify-between gap-10 opacity-0 [animation-delay:0.4s]">
          <p className="max-w-[420px] text-[1.05rem] leading-[1.8] text-[var(--text-muted)] font-medium">
            {portfolioData.description}
          </p>
          <div className="flex shrink-0 gap-3">
            <a href="#about" className="group relative inline-flex items-center overflow-hidden rounded-full border border-[var(--border)] px-8 py-3 text-[0.85rem] font-bold tracking-wide text-[var(--text)] transition-all hover:border-[var(--text)]">
              <span className="relative z-10">About me</span>
              <div className="absolute inset-0 -translate-x-full bg-[var(--text)] transition-transform duration-300 group-hover:translate-x-0"></div>
              <span className="absolute inset-0 flex items-center justify-center text-[var(--bg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">About me</span>
            </a>
            <a href={portfolioData.links.resume} download className="group relative inline-flex items-center overflow-hidden rounded-full bg-[var(--text)] px-8 py-3 text-[0.85rem] font-bold tracking-wide text-[var(--bg)] transition-all hover:opacity-90">
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

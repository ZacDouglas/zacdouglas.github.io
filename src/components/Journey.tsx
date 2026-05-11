'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Journey = () => {
  return (
    <Section id="journey" label="Journey" title="Career timeline">
      <div className="relative grid grid-cols-1 gap-0 sm:grid-cols-5 timeline-container">
        {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="absolute top-1.5 left-1.5 right-1.5 h-px bg-[var(--border)] hidden sm:block"></div>
        <div className="absolute top-1.5 bottom-0 left-1.5 w-px bg-[var(--border)] sm:hidden"></div>

        {portfolioData.timeline.map((item, i) => (
          <div key={i} className="group relative pl-5 pr-5 pt-6 sm:pl-0 sm:pt-6.5 sm:first:pl-0">
            <div className="absolute top-0 left-0 h-3.5 w-3.5 rounded-full border-[1.5px] border-[var(--border)] bg-[var(--bg)] transition-all group-hover:scale-120 group-hover:bg-[var(--sage)] group-hover:border-[var(--sage)] sm:left-0 sm:top-0"></div>
            <div className="mb-2 text-[0.7rem] font-semibold tracking-[0.08em] text-[var(--text-faint)] transition-colors group-hover:text-[var(--sage)]">
              {item.year}
            </div>
            <div className="mb-1.5 text-[0.82rem] font-semibold leading-tight text-[var(--text)]">
              {item.title}
            </div>
            <div className="text-[0.78rem] leading-[1.55] text-[var(--text-muted)]">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

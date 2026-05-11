'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Journey = () => {
  return (
    <Section id="journey" label="Journey" title="Career timeline">
      <div className="relative pt-8">
        {/* Horizontal Track (Desktop) */}
        <div className="absolute top-[41px] left-0 right-0 h-px bg-[var(--border)] hidden sm:block"></div>
        
        {/* Vertical Track (Mobile) */}
        <div className="absolute top-8 bottom-0 left-[7px] w-px bg-[var(--border)] sm:hidden"></div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
          {portfolioData.timeline.map((item, i) => (
            <div key={i} className="group relative pl-8 sm:pl-0">
              {/* Dot */}
              <div className="absolute top-[6px] left-0 h-3.5 w-3.5 rounded-full border-[1.5px] border-[var(--border)] bg-[var(--bg)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--sage)] group-hover:border-[var(--sage)] sm:top-0 sm:left-0">
                <div className="absolute inset-0 scale-0 rounded-full bg-[var(--sage)] opacity-20 transition-transform duration-300 group-hover:scale-[2.5]"></div>
              </div>
              
              <div className="sm:pt-8">
                <div className="mb-2 text-[0.7rem] font-bold tracking-[0.1em] text-[var(--text-faint)] uppercase transition-colors group-hover:text-[var(--sage)]">
                  {item.year}
                </div>
                <div className="mb-2 text-[0.9rem] font-semibold leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--sage-dark)] dark:group-hover:text-[var(--sage-light)]">
                  {item.title}
                </div>
                <div className="text-[0.8rem] leading-[1.6] text-[var(--text-muted)]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

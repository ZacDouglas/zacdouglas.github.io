'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Experience = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section id="experience" label="Experience" title="Professional journey">
      <div className="flex flex-col gap-6">
        {portfolioData.experience.map((exp, i) => (
          <div 
            key={i} 
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
              openIndex === i 
                ? 'border-[var(--sage)] bg-[var(--sage-pale)]' 
                : 'border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--text-muted)]'
            }`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full flex-col p-8 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-10"
            >
              <div className="flex-1">
                <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-wider text-[var(--sage)]">
                  {exp.period}
                </div>
                <div className="text-[1.4rem] font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--sage-dark)] dark:group-hover:text-[var(--sage-light)]">
                  {exp.company}
                </div>
                <div className="mt-1 text-[1rem] font-medium text-[var(--text-muted)]">
                  {exp.role}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[0.8rem] font-bold text-[var(--text-faint)] sm:mt-1">
                {openIndex === i ? 'CLOSE' : 'DETAILS'}
                <div className={`flex h-6 w-6 items-center justify-center rounded-full border border-current transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ↓
                </div>
              </div>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-[var(--border)] p-8 pt-6">
                <div className="max-w-[800px] text-[1.05rem] leading-[1.7] text-[var(--text-muted)]">
                  {exp.details}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

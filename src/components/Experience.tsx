'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Experience = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="experience" label="Experience" title="Work history">
      <div className="flex flex-col gap-[1px] overflow-hidden rounded-md border border-[var(--border)] bg-[var(--border)]">
        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="bg-[var(--card-bg)] px-6 py-5 transition-colors hover:bg-[var(--sage-pale)]">
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr,auto]">
              <div>
                <div className="text-[0.88rem] font-semibold text-[var(--text)]">{exp.company}</div>
                <div className="mt-0.5 text-[0.8rem] text-[var(--text-muted)]">{exp.role}</div>
              </div>
              <div className="text-left text-[0.76rem] whitespace-nowrap pt-1 text-[var(--text-faint)] sm:text-right">
                {exp.period}
              </div>
            </div>
            
            <button 
              onClick={() => toggleCard(i)}
              className="mt-2 inline-flex items-center gap-1 text-[0.74rem] font-medium tracking-wide text-[var(--text-faint)] transition-colors hover:text-[var(--sage)]"
            >
              {openIndex === i ? 'Hide details' : 'Show details'} 
              <span className={`transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>↓</span>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-350 ease-in-out ${
                openIndex === i ? 'max-h-[300px] pt-3 opacity-100' : 'max-h-0 pt-0 opacity-0'
              }`}
            >
              <div className="text-[0.8rem] leading-[1.65] text-[var(--text-muted)]">
                {exp.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

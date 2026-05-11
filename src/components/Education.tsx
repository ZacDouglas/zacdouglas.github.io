'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Education = () => {
  return (
    <Section id="education" label="Education" title="Academic background">
      <div className="border-t border-[var(--border)]">
        {portfolioData.education.map((edu, i) => (
          <div key={i} className="grid grid-cols-1 gap-1 border-b border-[var(--border)] py-5.5 sm:grid-cols-[1fr,auto]">
            <div>
              <div className="text-[0.88rem] font-semibold text-[var(--text)]">{edu.institution}</div>
              <div className="mt-1 text-[0.8rem] leading-normal text-[var(--text-muted)]">{edu.degree}</div>
              {edu.details && (
                <div className="mt-1 text-[0.8rem] leading-normal text-[var(--text-muted)] opacity-80">{edu.details}</div>
              )}
            </div>
            <div className="text-left text-[0.76rem] whitespace-nowrap pt-1 text-[var(--text-faint)] sm:text-right">
              {edu.period}
            </div>
            {edu.note && (
              <div className="col-span-full mt-3 rounded bg-[var(--sage-pale)] border-l-2 border-[var(--sage-light)] px-3.5 py-2.5 text-[0.78rem] leading-[1.6] text-[var(--text-muted)]">
                {edu.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

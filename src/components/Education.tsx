'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Education = () => {
  return (
    <Section id="education" label="Academic" title="Education & credentials">
      <div className="flex flex-col gap-12">
        {portfolioData.education.map((edu, i) => (
          <div key={i} className="group relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr,200px]">
            <div className="order-2 lg:order-1">
              <div className="mb-2 inline-flex rounded-full bg-[var(--sage-pale)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--sage)]">
                {edu.period}
              </div>
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--sage)]">
                {edu.institution}
              </h3>
              <p className="mt-2 text-[1.1rem] font-medium text-[var(--text-muted)]">
                {edu.degree}
              </p>
              {edu.details && (
                <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--text-faint)]">
                  {edu.details}
                </p>
              )}
              {edu.note && (
                <div className="mt-6 flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all hover:border-[var(--sage)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--sage-pale)] text-[1.2rem]">
                    💡
                  </div>
                  <div>
                    <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-wide text-[var(--sage)]">Industry Project</div>
                    <p className="text-[0.95rem] leading-[1.6] text-[var(--text-muted)]">{edu.note}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="order-1 flex items-center justify-end lg:order-2">
              {/* Optional: Add degree icons or university logos here if needed */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

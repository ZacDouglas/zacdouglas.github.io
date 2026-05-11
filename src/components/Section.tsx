'use client';

import React from 'react';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({ id, label, title, children }: SectionProps) => {
  return (
    <section id={id} className="reveal mt-20 border-t border-[var(--border)] pt-20">
      <div className="grid gap-12 sm:grid-cols-[140px,1fr]">
        <span className="sticky top-18 pt-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--text-faint)]">
          {label}
        </span>
        <div className="max-w-[1080px]">
          <h2 className="mb-9 font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-normal leading-[1.1] text-[var(--text)]">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

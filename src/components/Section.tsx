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
    <section id={id} className="reveal mt-32 border-t border-[var(--border)] pt-20 px-6 sm:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[200px,1fr]">
          <div className="lg:sticky lg:top-24 h-fit">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--sage)]">
              {label}
            </span>
          </div>
          <div>
            <h2 className="mb-12 font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-[var(--text)]">
              {title}
            </h2>
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

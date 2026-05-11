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
    <section id={id} className="section reveal">
      <div className="container">
        <div className="section-grid">
          <span className="section-label">{label}</span>
          <div className="section-content">
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

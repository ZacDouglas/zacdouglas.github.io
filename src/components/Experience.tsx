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
      <div className="card-stack">
        {portfolioData.experience.map((exp, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <div className="card-title">{exp.company}</div>
              <div className="card-sub">{exp.role}</div>
            </div>
            <div className="card-side">
              <div className="card-date">{exp.period}</div>
            </div>
            <button className="card-toggle" onClick={() => toggleCard(i)}>
              {openIndex === i ? 'Hide details' : 'Show details'}{' '}
              <i className="chevron" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none' }}>↓</i>
            </button>
            <div className={`card-detail ${openIndex === i ? 'open' : ''}`}>
              {exp.details}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

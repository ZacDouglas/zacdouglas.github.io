'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Journey = () => {
  return (
    <Section id="journey" label="Journey" title="Career timeline">
      <div className="timeline-track">
        {portfolioData.timeline.map((item, i) => (
          <div key={i} className="tl-node">
            <div className="tl-dot"></div>
            <div className="tl-year">{item.year}</div>
            <div className="tl-title">{item.title}</div>
            <div className="tl-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

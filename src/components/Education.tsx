'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Education = () => {
  return (
    <Section id="education" label="Education" title="Academic background">
      <div className="edu-list">
        {portfolioData.education.map((edu, i) => (
          <div key={i} className="edu-card">
            <div>
              <div className="edu-name">{edu.institution}</div>
              <div className="edu-detail">{edu.degree}</div>
              {edu.details && <div className="edu-detail">{edu.details}</div>}
            </div>
            <div className="edu-year">{edu.period}</div>
            {edu.note && (
              <div className="edu-note">
                <strong>Industry Project —</strong> {edu.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

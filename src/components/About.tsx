'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const About = () => {
  return (
    <Section id="about" label="About" title="Who I am">
      <div className="flex flex-col gap-4 max-w-[600px] text-[1.05rem] leading-[1.8] text-[var(--text)]">
        {portfolioData.about.map((paragraph, i) => (
          <p key={i}>
            {i === 0 ? (
              <>
                I&apos;m a <strong>finance graduate</strong> with a strong foundation in economics, logistics, ERP Implementation, and am currently on a rotational program at <strong>WiseTech Global</strong> at the Sydney HQ. I&apos;m energised by work at the intersection of <strong>finance and technology</strong>, and I value continuous learning and developing meaningful professional connections.
              </>
            ) : paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
};

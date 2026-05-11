'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const About = () => {
  return (
    <Section id="about" label="Background" title="The philosophy & drive">
      <div className="flex flex-col gap-8 max-w-[720px] text-[1.2rem] leading-[1.8] text-[var(--text-muted)] font-medium">
        <p className="text-[var(--text)]">
          I&apos;m a <strong>finance graduate</strong> with a strong foundation in economics, logistics, and ERP Implementation, currently on a rotational program at <strong>WiseTech Global</strong> at the Sydney HQ. I&apos;m energized by work at the intersection of <strong>finance and technology</strong>, and I value continuous learning and developing meaningful professional connections.
        </p>
        <p>
          My interests span the <strong>global economy</strong>, trade flows, and supply chains — the infrastructure that moves the world — as well as the emerging financial layer being built on top of it: <strong>digital finance, Web3, and real-world asset tokenization</strong>. I believe these technologies will fundamentally reshape how capital and value move across borders.
        </p>
        <p className="text-[1rem] italic border-l-2 border-[var(--sage)] pl-6 py-2">
          &quot;I believe in striving for free markets—ones with reduced deadweight loss—and leveraging expertise to create positive change through a not-for-profit organization in the long term.&quot;
        </p>
      </div>
    </Section>
  );
};

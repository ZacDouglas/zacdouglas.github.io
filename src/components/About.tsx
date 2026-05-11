'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const About = () => {
  return (
    <Section id="about" label="About" title="Who I am">
      <p className="about-text">
        I&apos;m a <strong>finance graduate</strong> with a strong foundation in economics, logistics, ERP Implementation, and am currently on a rotational program at <strong>WiseTech Global</strong> at the Sydney HQ. I&apos;m energised by work at the intersection of <strong>finance and technology</strong>, and I value continuous learning and developing meaningful professional connections.
      </p>
      <p className="about-text" style={{ marginTop: 16 }}>
        My interests span the <strong>global economy</strong>, trade flows, and supply chains — the infrastructure that moves the world — as well as the emerging financial layer being built on top of it: <strong>digital finance, Web3, real-world asset tokenisation, and stablecoins</strong>. I believe these technologies will fundamentally reshape how capital and value move across borders. Lets strive for free markets, ones with reduced deadweight loss.
      </p>
      <p className="about-text" style={{ marginTop: 16 }}>
        In the long term, I hope to leverage my expertise, connections and capital to create positive change through a not-for-profit organisation.
      </p>
    </Section>
  );
};

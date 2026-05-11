'use client';

import React from 'react';
import { Section } from './Section';

const resources = [
  { name: 'Solana', url: 'solana.com', href: 'https://solana.com/', desc: 'High-performance blockchain built for global-scale decentralised applications and digital finance.' },
  { name: 'Game Theory 101', url: 'gametheory101.com', href: 'https://gametheory101.com/', desc: 'Accessible introductions to strategic decision-making, Nash equilibria, and applied game theory.' },
  { name: 'Financial Education', url: 'youtube.com/@FinancialEducation', href: 'https://www.youtube.com/@FinancialEducation', desc: 'Practical investing and finance content covering markets, stocks, and personal wealth building.' },
  { name: 'Chainlink', url: 'chain.link', href: 'https://chain.link/', desc: 'The decentralised oracle network enabling real-world asset tokenisation and smart contract connectivity.' },
];

export const Resources = () => {
  return (
    <Section id="resources" label="Resources" title="Useful resources">
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 24, maxWidth: 480, lineHeight: 1.65 }}>
        Links I return to regularly — spanning blockchain infrastructure, game theory, and financial education.
      </p>
      <div className="resource-list">
        {resources.map((r, i) => (
          <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" className="resource-item">
            <div className="resource-name">{r.name}</div>
            <div className="resource-url">{r.url}</div>
            <div className="resource-desc">{r.desc}</div>
          </a>
        ))}
      </div>
    </Section>
  );
};

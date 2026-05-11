'use client';

import React from 'react';
import { Section } from './Section';

const hobbies = [
  { icon: '🏄', label: 'Surfing — North Curly & Queensie' },
  { icon: '⛷️', label: 'Skiing — Perisher' },
  { icon: '🌿', label: 'Time in nature' },
  { icon: '💪', label: 'Physical health' },
  { icon: '🤝', label: 'Socialising' },
  { icon: '🎓', label: 'Learning' },
];

export const OutsideWork = () => {
  return (
    <Section id="outside" label="Outside Work" title="In my free time">
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 20, maxWidth: 480, lineHeight: 1.65 }}>
        I love spending time outdoors or catching up with friends. This year I&apos;m focused on maintaining my wellbeing and improving my physical health.
      </p>
      <div className="hobby-list">
        {hobbies.map((h, i) => (
          <div key={i} className="hobby-item">
            <span className="hi" style={{ fontSize: '1.1rem' }}>{h.icon}</span>
            {h.label}
          </div>
        ))}
      </div>
    </Section>
  );
};

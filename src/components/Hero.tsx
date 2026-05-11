'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">{portfolioData.eyebrow}</div>
        <h1>
          Zac<br />
          <em>Douglas</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">{portfolioData.description}</p>
          <div className="hero-actions">
            <a href="#about" className="topbar-btn">About</a>
            <a href={portfolioData.links.resume} download className="topbar-btn primary">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

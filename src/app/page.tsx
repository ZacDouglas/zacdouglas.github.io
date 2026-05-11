'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Journey } from '@/components/Journey';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Aspirations } from '@/components/Aspirations';
import { OutsideWork } from '@/components/OutsideWork';
import { Resources } from '@/components/Resources';

export default function Home() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="dark-bg-dots"></div>
      <main>
        <Hero />
        <div className="container" style={{ paddingBottom: 120 }}>
          <About />
          <Journey />
          <Education />
          <Experience />
          <Aspirations />
          <OutsideWork />
          <Resources />
        </div>
      </main>
    </>
  );
}

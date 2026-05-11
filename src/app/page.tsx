'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Journey } from '@/components/Journey';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';

export default function Home() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[1080px] px-9 pb-30">
      <Hero />
      <About />
      <Journey />
      <Education />
      <Experience />
    </main>
  );
}

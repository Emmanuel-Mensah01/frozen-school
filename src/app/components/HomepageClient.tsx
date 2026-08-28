'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProgramsSection from './ProgramsSection';
import LeadershipSection from './LeadershipSection';
import RulesSection from './RulesSection';
import AdmissionsCTA from './AdmissionsCTA';
import CampusGallery from './CampusGallery';
import FacilitiesSection from './FacilitiesSection';

export default function HomepageClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const [activeSection, setActiveSection] = useState<string>('/');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      hero: '/',
      about: '/',
      programs: '/',
      gallery: '/gallery',
      facilities: '/facilities',
      leadership: '/',
      rules: '/',
      admissions: '/admissions',
    };
    const sectionIds = ['hero', 'about', 'programs', 'gallery', 'facilities', 'leadership', 'rules', 'admissions'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Near footer — clear highlight
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('');
        return;
      }

      // Find the section whose top is closest to (but not past) 1/3 of the viewport
      const triggerPoint = scrollY + windowHeight * 0.35;

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= triggerPoint) {
          current = sectionMap[id];
        }
      }

      setActiveSection(current || '/');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} activeSection={activeSection} />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ProgramsSection lang={lang} />
        <CampusGallery lang={lang} />
        <FacilitiesSection lang={lang} />
        <LeadershipSection lang={lang} />
        <RulesSection lang={lang} />
        <AdmissionsCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GraduationHero from './GraduationHero';
import GraduationGallery from './GraduationGallery';
import GraduationMessage from './GraduationMessage';

export default function GraduationClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <GraduationHero lang={lang} />
        <GraduationMessage lang={lang} />
        <GraduationGallery lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

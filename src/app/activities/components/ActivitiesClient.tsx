'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivitiesHero from './ActivitiesHero';
import ActivitiesGrid from './ActivitiesGrid';

export default function ActivitiesClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <ActivitiesHero lang={lang} />
        <ActivitiesGrid lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

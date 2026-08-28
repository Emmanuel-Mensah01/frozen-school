'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesHero from './FacilitiesHero';
import FacilitiesGrid from './FacilitiesGrid';

export default function FacilitiesClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <FacilitiesHero lang={lang} />
        <FacilitiesGrid lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

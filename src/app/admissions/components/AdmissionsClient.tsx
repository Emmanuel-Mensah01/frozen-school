'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdmissionsHero from './AdmissionsHero';
import AdmissionsInfo from './AdmissionsInfo';
import ApplicationForm from './ApplicationForm';

export default function AdmissionsClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <AdmissionsHero lang={lang} />
        <AdmissionsInfo lang={lang} />
        <ApplicationForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
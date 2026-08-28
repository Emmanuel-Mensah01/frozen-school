'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactDetails from './ContactDetails';
import ContactMap from './ContactMap';

export default function ContactClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <ContactHero lang={lang} />
        <ContactDetails lang={lang} />
        <ContactMap lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from './GalleryHero';
import GalleryGrid from './GalleryGrid';

export default function GalleryClient() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'sw' : 'en'));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <GalleryHero lang={lang} />
        <GalleryGrid lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

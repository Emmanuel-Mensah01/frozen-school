'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function GalleryHero({ lang }: Props) {
  return (
    <section className="relative min-h-[52vh] flex items-end pt-16 overflow-hidden">
      <div className="absolute inset-0">
        {/* Cultural day video background.
            - autoPlay + muted + playsInline is required for autoplay to work on mobile browsers (esp. iOS Safari)
            - loop keeps it playing continuously since there's no user control
            - poster shows a fallback frame while the video loads, or if video fails to load */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/cultural_day_poster.png"
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/culture-day.mp4" type="video/mp4" />
          {/* Fallback text for browsers that don't support <video> at all */}
          {lang === 'en'
            ? 'Your browser does not support the video tag.'
            : 'Kivinjari chako hakiwezi kucheza video hii.'}
        </video>

        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.92) 0%, rgba(10,36,99,0.55) 50%, rgba(193,18,31,0.2) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/15 mb-5">
            <Icon name="CameraIcon" size={13} />
            {lang === 'en' ? 'Photo Gallery' : 'Picha za Shule'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {lang === 'en' ? 'Life at Frozen Mountain' : 'Maisha katika Frozen Mountain'}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            {lang === 'en'
              ? 'A visual journey through our campus — world-class facilities, memorable school events, and the everyday moments that define student life.'
              : 'Safari ya kuona kampasi yetu — miundombinu ya kiwango cha dunia, matukio ya shule, na nyakati za kila siku zinazofafanua maisha ya wanafunzi.'}
          </p>
        </div>
      </div>
    </section>
  );
}
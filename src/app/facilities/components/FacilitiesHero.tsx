'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function FacilitiesHero({ lang }: Props) {
  return (
    <section className="relative min-h-[52vh] flex items-end pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <AppImage
          src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_classroom.png&w=3840&q=75"
          alt="Modern spacious classroom at Frozen Mountain School with smart boards and student desks"
          width={1920}
          height={800}
          priority
          className="w-full h-full object-cover"
          sizes="100vw" />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(7,26,74,0.92) 0%, rgba(10,36,99,0.6) 50%, rgba(10,36,99,0.2) 100%)' }} />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/15 mb-5">
            <Icon name="BuildingOffice2Icon" size={13} />
            {lang === 'en' ? 'Our Facilities' : 'Miundombinu Yetu'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {lang === 'en' ? 'A World-Class Learning Environment' : 'Mazingira ya Kujifunza ya Kiwango cha Dunia'}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            {lang === 'en' ? 'Our campus is designed to inspire, engage, and support every aspect of a child\'s development — academic, physical, creative, and social.' : 'Kampasi yetu imeundwa kuhamasisha, kushirikisha, na kusaidia kila kipengele cha maendeleo ya mtoto — kitaaluma, kimwili, kiubunifu, na kijamii.'}
          </p>

          {/* Safety badge */}
          <div className="mt-6 inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
            <Icon name="ShieldCheckIcon" size={18} className="text-green-400" />
            <span className="text-white text-sm font-semibold">
              {lang === 'en' ? 'Safe & Secure — 24/7 campus security & CCTV monitoring' : 'Salama — Usalama wa kampasi masaa 24/7 na ufuatiliaji wa CCTV'}
            </span>
          </div>
        </div>
      </div>
    </section>);

}
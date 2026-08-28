'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function ActivitiesHero({ lang }: Props) {
  return (
    <section className="relative min-h-[52vh] flex items-end pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <AppImage
          src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_music.png&w=3840&q=75"
          alt="Students performing music and arts at Frozen Mountain School stage event"
          width={1920}
          height={800}
          priority
          className="w-full h-full object-cover"
          sizes="100vw" />
        
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(193,18,31,0.88) 0%, rgba(193,18,31,0.5) 45%, rgba(10,36,99,0.3) 100%)' }} />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/15 mb-5">
            <Icon name="SparklesIcon" size={13} />
            {lang === 'en' ? 'Beyond the Classroom' : 'Zaidi ya Darasa'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {lang === 'en' ? 'Co-Curricular Activities' : 'Shughuli za Ziada'}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            {lang === 'en' ? 'Education extends beyond textbooks. Our rich programme develops well-rounded, confident, and socially responsible individuals.' : 'Elimu inaendelea zaidi ya vitabu. Programu yetu tajiri inakuza watu wazima, wajasiri, na wenye uwajibikaji wa kijamii.'}
          </p>
        </div>
      </div>
    </section>);

}
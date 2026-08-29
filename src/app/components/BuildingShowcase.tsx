'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const content = {
  en: {
    tag: 'Our Campus',
    headline: 'A World-Class Campus Built for Excellence',
    sub: 'From our iconic red-column façade to our expansive aerial campus — Frozen Mountain School is a landmark of educational excellence in Dar es Salaam.',
    card1Caption: 'Main School Building',
    card1Sub: "King'anzi A, Ubungo, Dar es Salaam",
    card2Caption: 'Campus at Night',
    card2Sub: 'A beacon of learning — day and night',
    card3Caption: 'Aerial Campus View',
    card3Sub: 'Expansive grounds for holistic development',
    badge1: 'Modern Infrastructure',
    badge2: 'Safe & Secure',
    badge3: 'Peaceful Environment',
  },
  sw: {
    tag: 'Kampasi Yetu',
    headline: 'Kampasi ya Daraja la Dunia Iliyojengwa kwa Ubora',
    sub: 'Kutoka façade yetu ya nguzo nyekundu hadi kampasi yetu ya angani — Shule ya Frozen Mountain ni alama ya ubora wa elimu Dar es Salaam.',
    card1Caption: 'Jengo Kuu la Shule',
    card1Sub: "King'anzi A, Ubungo, Dar es Salaam",
    card2Caption: 'Kampasi Usiku',
    card2Sub: 'Taa ya elimu — mchana na usiku',
    card3Caption: 'Mtazamo wa Angani wa Kampasi',
    card3Sub: 'Viwanja vikubwa kwa maendeleo kamili',
    badge1: 'Miundombinu ya Kisasa',
    badge2: 'Salama na Imara',
    badge3: 'Mazingira ya Amani',
  },
};

export default function BuildingShowcase({ lang }: Props) {
  const t = content[lang];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="campus-building"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0A2463 0%, #0d2d7a 50%, #0A2463 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(193,18,31,0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-5">
            <Icon name="BuildingOffice2Icon" size={14} />
            {t.tag}
          </div>
          <h2 className="text-section-title font-extrabold text-white tracking-tight mb-4">
            {t.headline}
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto leading-relaxed">{t.sub}</p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[t.badge1, t.badge2, t.badge3].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-school-red inline-block" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bento Grid — 3 building photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1: Daytime 3-story building — large feature */}
          <div className="lg:col-span-7 fade-in-left">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              style={{ height: '420px' }}
            >
              <AppImage
                src="/assets/images/building_1-1788001389374.png"
                alt="Frozen Mountain School main 3-story building with iconic red columns and white facade in King'anzi A, Ubungo, Dar es Salaam — daytime exterior view"
                width={900}
                height={420}
                priority
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,36,99,0.75) 0%, rgba(10,36,99,0.1) 50%, transparent 100%)',
                }}
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-extrabold text-xl leading-tight mb-1">
                      {t.card1Caption}
                    </p>
                    <p className="text-white/65 text-sm flex items-center gap-1.5">
                      <Icon name="MapPinIcon" size={13} className="text-school-red" />
                      {t.card1Sub}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/25">
                    <Icon name="BuildingOffice2Icon" size={18} className="text-white" />
                  </div>
                </div>
              </div>
              {/* Top badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-school-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                  {lang === 'en' ? 'Our School' : 'Shule Yetu'}
                </span>
              </div>
            </div>
          </div>

          {/* Right column: 2 stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 fade-in-right">
            {/* Card 2: Nighttime dramatic shot */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group flex-1"
              style={{ minHeight: '195px' }}
            >
              <AppImage
                src="/assets/images/building_2-1788001323600.jpeg"
                alt="Frozen Mountain School building dramatically illuminated at night with warm golden lights glowing against the dark sky — a beacon of education in Dar es Salaam"
                width={600}
                height={210}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,36,99,0.8) 0%, rgba(10,36,99,0.2) 55%, transparent 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-base leading-tight mb-0.5">
                      {t.card2Caption}
                    </p>
                    <p className="text-white/60 text-xs">{t.card2Sub}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-400/20 backdrop-blur-sm flex items-center justify-center border border-amber-400/30">
                    <Icon name="StarIcon" size={14} className="text-amber-300" />
                  </div>
                </div>
              </div>
              {/* Night badge */}
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/15">
                  🌙 {lang === 'en' ? 'Night View' : 'Usiku'}
                </span>
              </div>
            </div>

            {/* Card 3: Aerial campus drone shot */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl group flex-1"
              style={{ minHeight: '195px' }}
            >
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_29__2026__11_00_56_AM-1788001392365.png"
                alt="Aerial drone view of Frozen Mountain School campus showing the full school grounds, buildings, and surrounding neighborhood in Dar es Salaam, Tanzania"
                width={600}
                height={210}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(10,36,99,0.75) 0%, rgba(10,36,99,0.15) 55%, transparent 100%)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-base leading-tight mb-0.5">
                      {t.card3Caption}
                    </p>
                    <p className="text-white/60 text-xs">{t.card3Sub}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sky-400/20 backdrop-blur-sm flex items-center justify-center border border-sky-400/30">
                    <Icon name="GlobeAltIcon" size={14} className="text-sky-300" />
                  </div>
                </div>
              </div>
              {/* Aerial badge */}
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/15">
                  🚁 {lang === 'en' ? 'Aerial View' : 'Angani'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function AdmissionsHero({ lang }: Props) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(160deg, rgba(10,36,99,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 0%, rgba(193,18,31,0.06) 0%, transparent 50%)'
        }} />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-5 animate-clip-in">
            <div className="section-tag">
              <Icon name="DocumentTextIcon" size={14} />
              {lang === 'en' ? 'Admissions' : 'Usajili'}
            </div>

            <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'Join Frozen Mountain School' : 'Jiunge na Shule ya Frozen Mountain'}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {lang === 'en' ? 'We welcome students from all backgrounds. Find out how to apply and what to expect when joining our school family.' : 'Tunakaribisha wanafunzi kutoka asili zote. Jua jinsi ya kuomba na nini cha kutarajia unapojiunga na familia yetu ya shule.'}
            </p>

            {/* Key fee callout */}
            <div className="inline-flex items-center gap-3 bg-school-red/8 border border-school-red/25 rounded-2xl px-5 py-4">
              <Icon name="InformationCircleIcon" size={20} className="text-school-red shrink-0" />
              <p className="text-sm text-foreground font-semibold">
                {lang === 'en' ? 'Admission Form + Interview Fee: TZS 10,000 (paid physically at school)' : 'Ada ya Fomu ya Usajili + Mahojiano: TZS 10,000 (inalipwa kimwili shuleni)'}
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-clip-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl img-zoom-inner img-card-hover">
              <AppImage
                src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_gallery4.png&w=3840&q=75"
                alt="African school children in uniforms walking into school building on admission day at Frozen Mountain"
                width={700}
                height={420}
                className="w-full h-72 object-cover img-inner"
                priority />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.4) 0%, transparent 55%)' }} />

              <div className="absolute bottom-4 left-4">
                <div className="glass-panel rounded-xl px-4 py-2.5">
                  <p className="text-xs font-semibold text-foreground">
                    {lang === 'en' ? '🎓 Admissions Now Open' : '🎓 Usajili Umefunguliwa'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
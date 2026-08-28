'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function LeadershipSection({ lang }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const tier1 = {
    en: { title: 'Director', desc: 'Overall school vision & strategic leadership', icon: 'StarIcon' },
    sw: { title: 'Mkurugenzi', desc: 'Maono ya jumla ya shule na uongozi wa kimkakati', icon: 'StarIcon' },
  };

  const tier2 = {
    en: { title: 'School Manager', desc: 'Day-to-day operations & administration', icon: 'UserIcon' },
    sw: { title: 'Meneja wa Shule', desc: 'Uendeshaji wa kila siku na utawala', icon: 'UserIcon' },
  };

  const tier3 = [
    { en: { title: 'Parent Committee', icon: 'UserGroupIcon', desc: 'Community liaison & support' }, sw: { title: 'Kamati ya Wazazi', icon: 'UserGroupIcon', desc: 'Uhusiano wa jamii na msaada' } },
    { en: { title: 'Bursar', icon: 'CurrencyDollarIcon', desc: 'Financial management' }, sw: { title: 'Msimamizi wa Fedha', icon: 'CurrencyDollarIcon', desc: 'Usimamizi wa fedha' } },
    { en: { title: 'Head Teacher', icon: 'AcademicCapIcon', desc: 'Academic leadership' }, sw: { title: 'Mwalimu Mkuu', icon: 'AcademicCapIcon', desc: 'Uongozi wa kitaaluma' } },
  ];

  const tier4 = [
    { en: { title: 'Academic Teacher', icon: 'BookOpenIcon', desc: 'Curriculum & instruction' }, sw: { title: 'Mwalimu wa Masomo', icon: 'BookOpenIcon', desc: 'Mtaala na mafunzo' } },
    { en: { title: 'Disciplinary Teacher', icon: 'ShieldCheckIcon', desc: 'Student conduct & welfare' }, sw: { title: 'Mwalimu wa Nidhamu', icon: 'ShieldCheckIcon', desc: 'Mwenendo na ustawi wa wanafunzi' } },
    { en: { title: 'Social Teacher', icon: 'HeartIcon', desc: 'Counselling & social dev.' }, sw: { title: 'Mwalimu wa Kijamii', icon: 'HeartIcon', desc: 'Ushauri na maendeleo ya kijamii' } },
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#F0F3FA' }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(193,18,31,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <div className="section-tag mx-auto mb-4">
            <Icon name="BuildingOfficeIcon" size={14} />
            {lang === 'en' ? 'Leadership' : 'Uongozi'}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            {lang === 'en' ? 'School Leadership Structure' : 'Muundo wa Uongozi wa Shule'}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
            {lang === 'en' ?'Our dedicated leadership team ensures the highest standards of education and school management.' :'Timu yetu ya uongozi iliyojitolea inahakikisha viwango vya juu zaidi vya elimu na usimamizi wa shule.'}
          </p>
        </div>

        {/* Org Chart */}
        <div className="flex flex-col items-center gap-0 fade-in-up stagger-1">
          {/* Tier 1: Director */}
          <div
            className="rounded-2xl px-8 py-5 text-center shadow-lg min-w-[260px] scale-in relative"
            style={{
              background: 'linear-gradient(135deg, #0A2463 0%, #071A4A 100%)',
              border: '2px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #0A2463, transparent)' }} />
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-2">
              <Icon name="StarIcon" size={24} className="text-white" />
            </div>
            <p className="font-bold text-white text-base">{tier1[lang].title}</p>
            <p className="text-xs text-white/60 mt-0.5">{tier1[lang].desc}</p>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-school-navy/30" />

          {/* Tier 2: Manager */}
          <div
            className="rounded-2xl px-8 py-5 text-center shadow-md min-w-[260px] scale-in stagger-1"
            style={{
              background: 'linear-gradient(135deg, #C1121F 0%, #8B0D16 100%)',
              border: '2px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-2">
              <Icon name="UserIcon" size={24} className="text-white" />
            </div>
            <p className="font-bold text-white text-base">{tier2[lang].title}</p>
            <p className="text-xs text-white/60 mt-0.5">{tier2[lang].desc}</p>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-school-red/30" />

          {/* Tier 3 */}
          <div className="w-full">
            <div className="grid grid-cols-3 gap-4">
              {tier3.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-border" />
                  <div
                    className="bg-white rounded-2xl px-3 py-5 text-center w-full shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 scale-in group"
                    style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-school-navy/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-school-navy/20 transition-colors">
                      <Icon name={item[lang].icon as 'UserGroupIcon'} size={20} className="text-school-navy" />
                    </div>
                    <p className="font-bold text-sm text-foreground leading-tight">{item[lang].title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{item[lang].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connector from Head Teacher */}
          <div className="w-0.5 h-8 bg-border" />

          {/* Tier 4 */}
          <div className="w-full">
            <div className="grid grid-cols-3 gap-4">
              {tier4.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-border" />
                  <div
                    className="bg-white/80 rounded-2xl px-3 py-5 text-center w-full border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1 scale-in group"
                    style={{ transitionDelay: `${0.35 + i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-school-red/8 flex items-center justify-center mx-auto mb-2 group-hover:bg-school-red/15 transition-colors">
                      <Icon name={item[lang].icon as 'BookOpenIcon'} size={20} className="text-school-red" />
                    </div>
                    <p className="font-semibold text-sm text-foreground leading-tight">{item[lang].title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{item[lang].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
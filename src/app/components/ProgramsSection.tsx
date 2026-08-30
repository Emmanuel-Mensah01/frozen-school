'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

type ProgramKey = 'nursery' | 'primary' | 'secondary';

const programData = {
  en: {
    tag: 'Academic Programmes',
    headline: 'World-Class Education at Every Stage',
    sub: 'From Nursery through Primary and into our upcoming Secondary Division — a seamless, high-quality educational journey.',
    tabs: [
    { key: 'nursery' as ProgramKey, label: 'Nursery Division' },
    { key: 'primary' as ProgramKey, label: 'Primary Division' },
    { key: 'secondary' as ProgramKey, label: 'Secondary Division', badge: 'Coming Soon' }],

    programs: {
      nursery: {
        title: 'Nursery Division',
        subtitle: 'Ages 2–4 Years',
        icon: 'StarIcon',
        accentColor: '#C1121F',
        bgColor: 'rgba(193,18,31,0.06)',
        borderColor: 'rgba(193,18,31,0.2)',
        image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_nursery.png&w=3840&q=75',
        imageAlt: 'Young African children playing and learning in a colorful nursery school classroom at Frozen Mountain',
        desc: 'Our Nursery programme nurtures curiosity and creativity in a warm, play-based environment. Children develop foundational social, emotional, and cognitive skills through guided exploration, storytelling, music, and hands-on activities that spark a lifelong love of learning.',
        features: ['Play-Based Learning', 'Language & Literacy', 'Numeracy Basics', 'Arts & Crafts', 'Music & Movement', 'Social Skills'],
        cta: 'Apply for Nursery Division'
      },
      primary: {
        title: 'Primary Division',
        subtitle: 'Standard 1–7',
        icon: 'BookOpenIcon',
        accentColor: '#0A2463',
        bgColor: 'rgba(10,36,99,0.06)',
        borderColor: 'rgba(10,36,99,0.2)',
        image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_primary.png&w=3840&q=75',
        imageAlt: 'African primary school students in uniforms sitting in classroom during lesson at Frozen Mountain School',
        desc: 'A comprehensive primary education building strong academic foundations. Our curriculum prepares students for secondary school and beyond through rigorous academics, English medium instruction, sports, and holistic development.',
        features: ['Core Subjects', 'English Medium', 'Sports & Activities', 'Guidance & Counselling', 'Character Development', 'NECTA Curriculum'],
        cta: 'Apply for Primary Division'
      },
      secondary: {
        title: 'Secondary Division',
        subtitle: 'Form I–IV (Expanding)',
        icon: 'TrophyIcon',
        accentColor: '#1a5c2e',
        bgColor: 'rgba(26,92,46,0.06)',
        borderColor: 'rgba(26,92,46,0.2)',
        image: '/assets/images/modern_classroom-1788122373129.png',
        imageAlt: 'African teacher with students in red plaid uniforms in a modern classroom at Frozen Mountain School',
        desc: 'Form I–IV Ordinary Level education building on primary foundations. Students from Frozen Mountain Primary School continue their journey here, and admission is also open to students from other primary schools.',
        features: ['Form I – Form IV', 'O-Level Curriculum', 'Day & Boarding', 'Career Guidance', 'NECTA Preparation', 'Extracurricular Activities'],
        cta: 'Express Interest',
        badge: 'Expanding'
      }
    }
  },
  sw: {
    tag: 'Programu za Kitaaluma',
    headline: 'Elimu ya Kiwango cha Juu kwa Kila Hatua',
    sub: 'Kutoka Chekechea kupitia Msingi na hadi Sekondari — safari ya elimu ya hali ya juu inayoendelea.',
    tabs: [
    { key: 'nursery' as ProgramKey, label: 'Kitengo cha Chekechea' },
    { key: 'primary' as ProgramKey, label: 'Kitengo cha Msingi' },
    { key: 'secondary' as ProgramKey, label: 'Kitengo cha Sekondari', badge: 'Inakuja' }],

    programs: {
      nursery: {
        title: 'Kitengo cha Chekechea',
        subtitle: 'Umri wa Miaka 2–4',
        icon: 'StarIcon',
        accentColor: '#C1121F',
        bgColor: 'rgba(193,18,31,0.06)',
        borderColor: 'rgba(193,18,31,0.2)',
        image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_nursery.png&w=3840&q=75',
        imageAlt: 'Watoto wadogo wa Afrika wakicheza na kujifunza katika darasa la chekechea Frozen Mountain',
        desc: 'Programu yetu ya Chekechea inalelewa udadisi na ubunifu katika mazingira ya joto ya kujifunza kupitia mchezo. Watoto hukuza ujuzi wa kijamii, kihisia, na utambuzi kupitia uchunguzi ulioongozwa.',
        features: ['Kujifunza kwa Mchezo', 'Lugha na Kusoma', 'Misingi ya Hesabu', 'Sanaa na Ufundi', 'Muziki na Harakati', 'Ujuzi wa Kijamii'],
        cta: 'Omba kwa Kitengo cha Chekechea'
      },
      primary: {
        title: 'Kitengo cha Msingi',
        subtitle: 'Darasa la 1–7',
        icon: 'BookOpenIcon',
        accentColor: '#0A2463',
        bgColor: 'rgba(10,36,99,0.06)',
        borderColor: 'rgba(10,36,99,0.2)',
        image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_primary.png&w=3840&q=75',
        imageAlt: 'Wanafunzi wa shule ya msingi Afrika wakiwa katika sare wakisoma darasani Frozen Mountain',
        desc: 'Elimu ya msingi inayojenga misingi imara ya kitaaluma. Mtaala wetu unaandaa wanafunzi kwa sekondari na zaidi kupitia masomo makali, lugha ya Kiingereza, michezo, na maendeleo ya jumla.',
        features: ['Masomo ya Msingi', 'Lugha ya Kiingereza', 'Michezo & Shughuli', 'Ushauri', 'Ukuaji wa Tabia', 'Mtaala wa NECTA'],
        cta: 'Omba kwa Kitengo cha Msingi'
      },
      secondary: {
        title: 'Kitengo cha Sekondari',
        subtitle: 'Kidato I–IV (Inakua)',
        icon: 'TrophyIcon',
        accentColor: '#1a5c2e',
        bgColor: 'rgba(26,92,46,0.06)',
        borderColor: 'rgba(26,92,46,0.2)',
        image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_hero_classroom.png&w=3840&q=75',
        imageAlt: 'Wanafunzi wa sekondari Afrika wakisoma pamoja katika darasa zuri Frozen Mountain School',
        desc: 'Elimu ya Kidato cha I–IV ikijengwa juu ya msingi wa msingi. Wanafunzi kutoka Shule ya Msingi ya Frozen Mountain wanaendelea safari yao hapa, na usajili pia uko wazi kwa wanafunzi kutoka shule nyingine.',
        features: ['Kidato I – Kidato IV', 'Mtaala wa O-Level', 'Siku & Bweni', 'Mwongozo wa Kazi', 'Maandalizi ya NECTA', 'Shughuli za Ziada'],
        cta: 'Onyesha Nia',
        badge: 'Inakua'
      }
    }
  }
};

export default function ProgramsSection({ lang }: Props) {
  const d = programData[lang];
  const [activeTab, setActiveTab] = useState<ProgramKey>('nursery');
  const sectionRef = useRef<HTMLDivElement>(null);
  const prog = d.programs[activeTab];

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

  return (
    <section id="programs" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(10,36,99,0.04) 0%, transparent 60%)' }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="section-tag mx-auto mb-4">
            <Icon name="AcademicCapIcon" size={14} />
            {d.tag}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">{d.headline}</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{d.sub}</p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 fade-in-up" style={{ transitionDelay: '0.1s' }}>
          <div className="inline-flex bg-muted rounded-2xl p-1.5 gap-1 flex-wrap justify-center">
            {d.tabs.map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === tab.key ?
              'bg-white text-foreground shadow-md' :
              'text-muted-foreground hover:text-foreground'}`
              }>
              
                {tab.label}
                {tab.badge &&
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-school-red text-white">
                    {tab.badge}
                  </span>
              }
              </button>
            )}
          </div>
        </div>

        {/* Program detail — elite card */}
        <div
          key={activeTab}
          className="grid lg:grid-cols-2 gap-8 items-stretch scale-in"
          style={{ animation: 'fadeUp 0.5s ease-out forwards' }}>
          
          {/* Image side */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl img-zoom-inner group" style={{ minHeight: '380px' }}>
            <AppImage
              src={prog.image}
              alt={prog.imageAlt}
              width={700}
              height={480}
              className="w-full h-full object-cover img-inner"
              sizes="(max-width: 768px) 100vw, 50vw" />
            
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to top, ${prog.accentColor}88 0%, transparent 55%)` }} />
            
            {/* Bottom label */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="glass-panel rounded-2xl px-5 py-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: prog.bgColor, border: `1px solid ${prog.borderColor}` }}>
                  
                  <Icon name={prog.icon as 'StarIcon'} size={20} style={{ color: prog.accentColor }} />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{prog.title}</p>
                  <p className="text-xs text-muted-foreground">{prog.subtitle}</p>
                </div>
                {prog.badge &&
                <span
                  className="ml-auto text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: prog.accentColor }}>
                  
                    {prog.badge}
                  </span>
                }
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className="bg-white rounded-3xl p-8 flex flex-col gap-6 shadow-sm border border-border"
            style={{ borderTopColor: prog.accentColor, borderTopWidth: '3px' }}>
            
            <div>
              <h3 className="font-extrabold text-2xl text-foreground mb-1">{prog.title}</h3>
              <p className="text-sm text-muted-foreground">{prog.subtitle}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm flex-1">{prog.desc}</p>

            {/* Features grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: prog.accentColor }}>
                {lang === 'en' ? 'Key Subjects & Areas' : 'Masomo na Maeneo Muhimu'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {prog.features.map((f) =>
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-foreground bg-muted/50 rounded-xl px-3 py-2">
                  
                    <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: prog.bgColor }}>
                    
                      <Icon name="CheckIcon" size={11} style={{ color: prog.accentColor }} />
                    </span>
                    {f}
                  </div>
                )}
              </div>
            </div>

            <Link href="/admissions" className="btn-primary w-fit">
              {prog.cta}
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}
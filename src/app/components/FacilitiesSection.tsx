'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const facilities = [
{
  id: 'classrooms',
  image: '/assets/images/modern_classroom-1788003857606.png',
  alt: 'Teacher instructing young students in a bright modern classroom at Frozen Mountain School',
  icon: 'AcademicCapIcon' as const,
  accentColor: '#0A2463',
  en: { title: 'Modern Classrooms', tag: 'Academic' },
  sw: { title: 'Madarasa ya Kisasa', tag: 'Kitaaluma' }
},
{
  id: 'sports',
  image: '/assets/images/sports__2_-1788002759222.png',
  alt: 'Frozen Mountain School students in tracksuits playing football on the school sports grounds',
  icon: 'TrophyIcon' as const,
  accentColor: '#0A2463',
  en: { title: 'Sports & Athletics', tag: 'Athletics' },
  sw: { title: 'Michezo na Riadha', tag: 'Michezo' }
},
{
  id: 'ict',
  image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_ict.png&w=3840&q=75',
  alt: 'Frozen Mountain School students using computers and tablets in the modern ICT laboratory',
  icon: 'ComputerDesktopIcon' as const,
  accentColor: '#1a5c2e',
  en: { title: 'ICT Laboratory', tag: 'Digital' },
  sw: { title: 'Maabara ya TEHAMA', tag: 'Kidijitali' }
},
{
  id: 'lab',
  image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_lab.png&w=3840&q=75',
  alt: 'Fully equipped science laboratory with experiment stations at Frozen Mountain School',
  icon: 'BeakerIcon' as const,
  accentColor: '#C1121F',
  en: { title: 'Science Laboratory', tag: 'STEM' },
  sw: { title: 'Maabara ya Sayansi', tag: 'STEM' }
},
{
  id: 'library',
  image: '/assets/images/library__2_-1788002498750.png',
  alt: 'Well-stocked school library with bookshelves and reading tables at Frozen Mountain',
  icon: 'BookOpenIcon' as const,
  accentColor: '#1a5c2e',
  en: { title: 'Library & Resource Centre', tag: 'Resources' },
  sw: { title: 'Maktaba na Rasilimali', tag: 'Rasilimali' }
}];


export default function FacilitiesSection({ lang }: Props) {
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
    sectionRef.current?.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="facilities" ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(10,36,99,0.04) 0%, transparent 70%)' }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 fade-in-up">
          <div>
            <div className="section-tag mb-3">
              <Icon name="BuildingOffice2Icon" size={14} />
              {lang === 'en' ? 'Our Campus' : 'Kampasi Yetu'}
            </div>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'World-Class Facilities' : 'Miundombinu ya Kiwango cha Juu'}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg">
              {lang === 'en' ? 'Every corner of our campus is thoughtfully designed to support learning, creativity, and growth.' : 'Kila pembe ya kampasi yetu imeundwa kwa makini kusaidia kujifunza, ubunifu, na ukuaji.'}
            </p>
          </div>
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 bg-school-navy text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-300 hover:bg-school-red hover:shadow-lg hover:shadow-school-red/30 hover:-translate-y-0.5 shrink-0">
            
            {lang === 'en' ? 'View All Facilities' : 'Tazama Miundombinu Yote'}
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>

        {/* 2x2 grid preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {facilities.map((facility, i) =>
          <div
            key={facility.id}
            className="relative rounded-3xl overflow-hidden group cursor-pointer scale-in h-64"
            style={{ transitionDelay: `${i * 0.1}s` }}>
            
              <AppImage
              src={facility.image}
              alt={facility.alt}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
            
              <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, ${facility.accentColor}ee 0%, ${facility.accentColor}66 40%, transparent 70%)`
              }} />
            
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-black" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: `${facility.accentColor}cc`, border: '1px solid rgba(255,255,255,0.2)' }}>
                
                  <Icon name={facility.icon} size={12} className="text-white" />
                  {facility[lang].tag}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-extrabold text-base leading-tight drop-shadow-lg">
                  {facility[lang].title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
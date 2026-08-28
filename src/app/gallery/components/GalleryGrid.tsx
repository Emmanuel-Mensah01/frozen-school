'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

type Category = 'all' | 'facilities' | 'events' | 'student-life';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Category;
  span: string;
  caption: {en: string;sw: string;};
  tag: {en: string;sw: string;};
}

const galleryItems: GalleryItem[] = [
{
  id: 'g1',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_ict.png&w=3840&q=75',
  alt: 'Frozen Mountain School students using computers and tablets in the modern ICT laboratory',
  category: 'facilities',
  span: 'col-span-2 row-span-2',
  caption: { en: 'ICT Laboratory', sw: 'Maabara ya TEHAMA' },
  tag: { en: 'Facilities', sw: 'Miundombinu' }
},
{
  id: 'g2',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_lab.png&w=3840&q=75',
  alt: 'Fully equipped science laboratory with experiment stations and scientific equipment at Frozen Mountain School',
  category: 'facilities',
  span: 'col-span-1 row-span-2',
  caption: { en: 'Science Laboratory', sw: 'Maabara ya Sayansi' },
  tag: { en: 'Facilities', sw: 'Miundombinu' }
},
{
  id: 'g3',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_classroom.png&w=3840&q=75',
  alt: 'Spacious well-ventilated classroom with smart boards and child-friendly furniture at Frozen Mountain School',
  category: 'facilities',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Modern Classrooms', sw: 'Madarasa ya Kisasa' },
  tag: { en: 'Facilities', sw: 'Miundombinu' }
},
{
  id: 'g4',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_music.png&w=3840&q=75',
  alt: 'Students performing choir, drama and dance at Frozen Mountain School performing arts event',
  category: 'events',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Music & Performing Arts', sw: 'Muziki na Sanaa za Maonyesho' },
  tag: { en: 'Events', sw: 'Matukio' }
},
{
  id: 'g5',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_library_facility.png&w=3840&q=75',
  alt: 'Well-stocked school library with bookshelves, reading tables and quiet study spaces at Frozen Mountain',
  category: 'facilities',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Library & Resource Centre', sw: 'Maktaba na Kituo cha Rasilimali' },
  tag: { en: 'Facilities', sw: 'Miundombinu' }
},
{
  id: 'g6',
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_sports_grounds.png&w=3840&q=75',
  alt: 'Frozen Mountain School students in tracksuits playing football on the school sports grounds',
  category: 'student-life',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Sports & Athletics', sw: 'Michezo na Riadha' },
  tag: { en: 'Student Life', sw: 'Maisha ya Wanafunzi' }
},
{
  id: 'g7',
  src: '/assets/images/A0C36620-BF27-4CA6-B47C-85646590E16D-1787904990643.jpg',
  alt: 'Frozen Mountain School students in red plaid uniforms standing proudly on the school staircase in Tanzania',
  category: 'student-life',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Our Students — Proud & Ready', sw: 'Wanafunzi Wetu — Wenye Fahari' },
  tag: { en: 'Student Life', sw: 'Maisha ya Wanafunzi' }
},
{
  id: 'g8',
  src: '/assets/images/BD3D3181-CD02-4863-A2D9-1B0C48749864-1787904173254.png',
  alt: 'Frozen Mountain School primary students engaged in a classroom learning session in Tanzania',
  category: 'student-life',
  span: 'col-span-1 row-span-1',
  caption: { en: 'Primary Class in Session', sw: 'Darasa la Msingi Linafundishwa' },
  tag: { en: 'Student Life', sw: 'Maisha ya Wanafunzi' }
},
];


const categoryAccent: Record<Category, string> = {
  all: '#0A2463',
  facilities: '#0A2463',
  events: '#C1121F',
  'student-life': '#1a5c2e'
};

const tabs: {key: Category;en: string;sw: string;icon: string;}[] = [
{ key: 'all', en: 'All Photos', sw: 'Picha Zote', icon: 'PhotoIcon' },
{ key: 'facilities', en: 'Facilities', sw: 'Miundombinu', icon: 'BuildingOffice2Icon' },
{ key: 'events', en: 'School Events', sw: 'Matukio ya Shule', icon: 'SparklesIcon' },
{ key: 'student-life', en: 'Student Life', sw: 'Maisha ya Wanafunzi', icon: 'AcademicCapIcon' }];


export default function GalleryGrid({ lang }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 fade-in-up">
          <div className="section-tag mx-auto mb-4">
            <Icon name="CameraIcon" size={14} />
            {lang === 'en' ? 'Photo Collection' : 'Mkusanyiko wa Picha'}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            {lang === 'en' ? 'Explore Our Campus' : 'Chunguza Kampasi Yetu'}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {lang === 'en' ? 'Browse through our facilities, school events, and the vibrant student life that makes Frozen Mountain unique.' : 'Vinjari miundombinu yetu, matukio ya shule, na maisha ya wanafunzi yanayofanya Frozen Mountain kuwa ya kipekee.'}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up">
          {tabs.map((tab) =>
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === tab.key ?
            'text-white shadow-lg scale-105' :
            'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'}`
            }
            style={
            activeCategory === tab.key ?
            { background: categoryAccent[tab.key], boxShadow: `0 4px 20px ${categoryAccent[tab.key]}55` } :
            {}
            }>
            
              <Icon name={tab.icon as 'PhotoIcon'} size={14} />
              {lang === 'en' ? tab.en : tab.sw}
            </button>
          )}
        </div>

        {/* Count badge */}
        <div className="flex items-center justify-between mb-6 fade-in-up">
          <p className="text-sm text-muted-foreground font-medium">
            {lang === 'en' ? `${filtered.length} photos` : `Picha ${filtered.length}`}
          </p>
          <div className="h-px flex-1 mx-4 bg-border" />
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Icon name="EyeIcon" size={13} />
            {lang === 'en' ? 'Hover to explore' : 'Sogeza kuona'}
          </div>
        </div>

        {/* Portfolio bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
          {filtered.map((item, i) =>
          <div
            key={item.id}
            className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer scale-in`}
            style={{ transitionDelay: `${i % 6 * 0.07}s` }}>
            
              {/* Image */}
              <AppImage
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw" />
            

              {/* Gradient overlay */}
              <div
              className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-90"
              style={{
                background: `linear-gradient(to top, ${categoryAccent[item.category]}dd 0%, ${categoryAccent[item.category]}44 50%, transparent 80%)`
              }} />
            

              {/* Category tag — top left */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span
                className="inline-flex items-center gap-1 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                style={{ background: `${categoryAccent[item.category]}cc`, border: '1px solid rgba(255,255,255,0.2)' }}>
                
                  {lang === 'en' ? item.tag.en : item.tag.sw}
                </span>
              </div>

              {/* Caption — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                  {lang === 'en' ? item.caption.en : item.caption.sw}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center fade-in-up">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 bg-school-navy rounded-3xl px-10 py-8"
            style={{ background: 'linear-gradient(135deg, #0A2463 0%, #071A4A 100%)' }}>
            
            <div className="text-left">
              <p className="text-white font-extrabold text-xl">
                {lang === 'en' ? 'See it for yourself' : 'Jionee mwenyewe'}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {lang === 'en' ? 'Schedule a campus tour and experience Frozen Mountain in person.' : 'Panga ziara ya kampasi na upate uzoefu wa Frozen Mountain.'}
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-school-red text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-school-red/30 hover:-translate-y-0.5">
              
              {lang === 'en' ? 'Book a Tour' : 'Panga Ziara'}
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>);

}
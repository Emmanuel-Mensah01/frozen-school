'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Props {
  lang: 'en' | 'sw';
}

const galleryImages = [
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_ict.png&w=3840&q=75',
  alt: 'Frozen Mountain School students using computers and tablets in the modern ICT laboratory',
  caption: { en: 'ICT Laboratory', sw: 'Maabara ya TEHAMA' }
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_lab.png&w=3840&q=75',
  alt: 'Fully equipped science laboratory with experiment stations at Frozen Mountain School',
  caption: { en: 'Science Laboratory', sw: 'Maabara ya Sayansi' }
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_classroom.png&w=3840&q=75',
  alt: 'Spacious modern classroom with smart boards and Tanzanian students at Frozen Mountain School',
  caption: { en: 'Modern Classrooms', sw: 'Madarasa ya Kisasa' }
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_music.png&w=3840&q=75',
  alt: 'Tanzanian students performing choir and drama at Frozen Mountain School performing arts event',
  caption: { en: 'Music & Performing Arts', sw: 'Muziki na Sanaa za Maonyesho' }
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_library_facility.png&w=3840&q=75',
  alt: 'Well-stocked school library with bookshelves and reading spaces at Frozen Mountain',
  caption: { en: 'Library & Resource Centre', sw: 'Maktaba na Kituo cha Rasilimali' }
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_sports_grounds.png&w=3840&q=75',
  alt: 'Frozen Mountain School Tanzanian students in tracksuits playing football on the school sports grounds',
  caption: { en: 'Sports & Athletics', sw: 'Michezo na Riadha' }
},
{
  src: '/assets/images/A0C36620-BF27-4CA6-B47C-85646590E16D-1787904990643.jpg',
  alt: 'Frozen Mountain School students in red plaid uniforms on the school staircase in Tanzania',
  caption: { en: 'Our students — proud & ready', sw: 'Wanafunzi wetu — wenye fahari' }
},
{
  src: '/assets/images/BD3D3181-CD02-4863-A2D9-1B0C48749864-1787904173254.png',
  alt: 'Frozen Mountain School primary students in classroom learning session in Tanzania',
  caption: { en: 'Primary class in session', sw: 'Darasa la msingi linafundishwa' }
}];


const marqueeImages = [...galleryImages, ...galleryImages];

export default function CampusGallery({ lang }: Props) {
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
    sectionRef.current?.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 overflow-hidden" style={{ background: '#F0F3FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 fade-in-up">
          <div>
            <div className="section-tag mb-4">
              <Icon name="CameraIcon" size={14} />
              {lang === 'en' ? 'Campus Life' : 'Maisha ya Kampasi'}
            </div>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'Life at Frozen Mountain' : 'Maisha katika Frozen Mountain'}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              {lang === 'en' ? 'Every day is filled with discovery, laughter, and growth. Real moments from our campus — captured, not staged.' : 'Kila siku imejaa ugunduzi, kicheko, na ukuaji. Matukio ya kweli kutoka kampasi yetu — yaliyopigwa picha, si ya kuigiza.'}
            </p>
          </div>
          {/* CTA */}
          <div className="flex flex-col items-end gap-3">
            <div className="bg-school-navy rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-extrabold text-white">500+</p>
              <p className="text-xs text-white/60 font-medium">
                {lang === 'en' ? 'Families who trust Frozen Mountain' : 'Familia zinazomwamini Frozen Mountain'}
              </p>
            </div>
            <Link href="/gallery" className="btn-primary shrink-0">
              {lang === 'en' ? 'View Full Gallery' : 'Tazama Picha Zote'}
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F0F3FA, transparent)' }} />
        
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F0F3FA, transparent)' }} />
        

        <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {marqueeImages.map((img, i) =>
          <div key={i} className="relative w-72 h-52 rounded-2xl overflow-hidden shrink-0 group cursor-pointer">
              <AppImage
              src={img.src}
              alt={img.alt}
              width={400}
              height={280}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="288px" />
            
              {/* Caption on hover */}
              <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end"
              style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.7) 0%, transparent 60%)' }}>
              
                <p className="text-white text-xs font-semibold px-4 pb-4">{img.caption[lang]}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
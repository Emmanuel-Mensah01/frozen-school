'use client';

import React, { useEffect, useRef } from 'react';
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
  icon: 'AcademicCapIcon',
  accentColor: '#0A2463',
  span: 'lg:col-span-2 lg:row-span-2',
  en: {
    title: 'Modern Classrooms',
    desc: 'Spacious, well-ventilated classrooms equipped with smart boards, learning aids, and child-friendly furniture designed to inspire focused learning.',
    tag: 'Academic'
  },
  sw: {
    title: 'Madarasa ya Kisasa',
    desc: 'Madarasa ya nafasi, yenye hewa nzuri yaliyoandaliwa na ubao wa kisasa, vifaa vya kujifunzia, na samani zinazofaa watoto.',
    tag: 'Kitaaluma'
  }
},
{
  id: 'sports',
  image: '/assets/images/sports__2_-1788002759222.png',
  alt: 'Young students in red and navy sports uniforms running on a field at Frozen Mountain School',
  icon: 'TrophyIcon',
  accentColor: '#0A2463',
  span: 'lg:col-span-1 lg:row-span-1',
  en: {
    title: 'Sports & Athletics',
    desc: 'Expansive outdoor spaces including a football pitch, netball courts, athletics track, and age-appropriate playground equipment for all students.',
    tag: 'Athletics'
  },
  sw: {
    title: 'Michezo na Riadha',
    desc: 'Nafasi kubwa za nje ikiwa ni pamoja na uwanja wa mpira, korti za netiboli, njia ya riadha, na vifaa vya kucheza.',
    tag: 'Michezo'
  }
},
{
  id: 'ict',
  image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_ict.png&w=3840&q=75',
  alt: 'Frozen Mountain School students using computers and tablets in the modern ICT laboratory',
  icon: 'ComputerDesktopIcon',
  accentColor: '#1a5c2e',
  span: 'lg:col-span-1 lg:row-span-1',
  en: {
    title: 'ICT Laboratory',
    desc: 'A modern computer lab equipped with computers and tablets, providing age-appropriate digital literacy, coding basics, and technology skills for every student.',
    tag: 'Digital'
  },
  sw: {
    title: 'Maabara ya TEHAMA',
    desc: 'Maabara ya kisasa ya kompyuta yenye vifaa vya kidijitali, inayotoa ujuzi wa TEHAMA, misingi ya uandishi wa programu, na teknolojia kwa kila mwanafunzi.',
    tag: 'Kidijitali'
  }
},
{
  id: 'lab',
  image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_lab.png&w=3840&q=75',
  alt: 'Fully equipped science laboratory with experiment stations and scientific equipment at Frozen Mountain School',
  icon: 'BeakerIcon',
  accentColor: '#C1121F',
  span: 'lg:col-span-1 lg:row-span-1',
  en: {
    title: 'Science Laboratory',
    desc: 'A fully equipped science lab where students conduct experiments, develop analytical skills, and discover the wonders of the natural world.',
    tag: 'STEM'
  },
  sw: {
    title: 'Maabara ya Sayansi',
    desc: 'Maabara iliyoandaliwa kikamilifu ambapo wanafunzi hufanya majaribio na kukuza ujuzi wa uchanganuzi.',
    tag: 'STEM'
  }
},
{
  id: 'library',
  image: '/assets/images/library__2_-1788002498750.png',
  alt: 'Well-stocked school library with bookshelves, reading tables and quiet study spaces at Frozen Mountain',
  icon: 'BookOpenIcon',
  accentColor: '#1a5c2e',
  span: 'lg:col-span-2 lg:row-span-1',
  en: {
    title: 'Library & Resource Centre',
    desc: 'A well-stocked library with thousands of books, digital resources, and quiet reading spaces that cultivate a lifelong love of learning.',
    tag: 'Resources'
  },
  sw: {
    title: 'Maktaba na Kituo cha Rasilimali',
    desc: 'Maktaba yenye vitabu elfu nyingi, rasilimali za kidijitali, na nafasi za kusoma kwa utulivu.',
    tag: 'Rasilimali'
  }
}];


export default function FacilitiesGrid({ lang }: Props) {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <div className="section-tag mx-auto mb-4">
            <Icon name="BuildingOffice2Icon" size={14} />
            {lang === 'en' ? 'Campus Facilities' : 'Miundombinu ya Kampasi'}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            {lang === 'en' ? 'Built for Excellence' : 'Imejengwa kwa Ubora'}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {lang === 'en' ? 'Every corner of our campus is thoughtfully designed to support learning, creativity, and growth.' : 'Kila pembe ya kampasi yetu imeundwa kwa makini kusaidia kujifunza, ubunifu, na ukuaji.'}
          </p>
        </div>

        {/* Elite photography bento grid */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-5 auto-rows-[280px]">
          {facilities.map((facility, i) =>
          <div
            key={facility.id}
            className={`${facility.span} relative rounded-3xl overflow-hidden group cursor-pointer scale-in`}
            style={{ transitionDelay: `${i * 0.1}s` }}>
            
              {/* Full-bleed image */}
              <AppImage
              src={facility.image}
              alt={facility.alt}
              width={900}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            

              {/* Gradient overlay — always visible at bottom, intensifies on hover */}
              <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, ${facility.accentColor}ee 0%, ${facility.accentColor}88 35%, transparent 65%)`
              }} />
            

              {/* Hover overlay — extra darkening */}
              <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ background: '#000' }} />
            

              {/* Tag pill — top left */}
              <div className="absolute top-4 left-4">
                <span
                className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: `${facility.accentColor}cc`, border: '1px solid rgba(255,255,255,0.2)' }}>
                
                  <Icon name={facility.icon as 'AcademicCapIcon'} size={12} className="text-white" />
                  {facility[lang].tag}
                </span>
              </div>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2 drop-shadow-lg">
                  {facility[lang].title}
                </h3>
                <p
                className="text-white/80 text-sm leading-relaxed max-w-sm overflow-hidden transition-all duration-500"
                style={{ maxHeight: '0', opacity: 0 }}
                ref={(el) => {
                  if (el) {
                    el.closest('.group')?.addEventListener('mouseenter', () => {
                      el.style.maxHeight = '80px';
                      el.style.opacity = '1';
                    });
                    el.closest('.group')?.addEventListener('mouseleave', () => {
                      el.style.maxHeight = '0';
                      el.style.opacity = '0';
                    });
                  }
                }}>
                
                  {facility[lang].desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
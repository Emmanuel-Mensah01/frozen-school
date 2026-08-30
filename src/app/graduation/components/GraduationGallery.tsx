'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

interface Props {
  lang: 'en' | 'sw';
}

const photos = [
  {
    src: '/assets/images/ChatGPT_Image_Aug_28__2026__06_24_40_PM-1787941687662.png',
    alt: 'Frozen Mountain School graduating boys dressed in sharp navy blue suits celebrating their graduation day',
    caption: { en: 'Our Graduating Boys', sw: 'Wavulana Wetu Wahitimu' },
    sub: { en: 'Graduating Boys — Navy & Gold', sw: 'Wavulana Wahitimu — Bluu ya Bahari na Dhahabu' },
    span: 'lg:col-span-2 lg:row-span-2',
    accent: '#0A2463',
    objectPosition: 'object-top',
  },
  {
    src: '/assets/images/ChatGPT_Image_Aug_28__2026__06_26_25_PM-1787941687295.png',
    alt: 'Frozen Mountain School founder and director standing with two graduating students wearing graduation sashes and gowns',
    caption: { en: 'Founder with Graduates', sw: 'Mwanzilishi na Wahitimu' },
    sub: { en: 'A proud moment for the school', sw: 'Wakati wa fahari kwa shule' },
    span: 'lg:col-span-1 lg:row-span-1',
    accent: '#D4AF37',
    objectPosition: 'object-[center_35%]',
  },
  {
    src: '/assets/images/ChatGPT_Image_Aug_28__2026__06_27_42_PM-1787941687996.png',
    alt: 'Frozen Mountain School graduating girls in sky blue uniforms smiling proudly on their graduation day in Tanzania',
    caption: { en: 'Our Graduating Girls', sw: 'Wasichana Wetu Wahitimu' },
    sub: { en: 'Graduating Girls — Sky Blue', sw: 'Wasichana Wahitimu — Bluu ya Anga' },
    span: 'lg:col-span-1 lg:row-span-1',
    accent: '#1a5c8a',
    objectPosition: 'object-center',
  },
  {
    src: '/assets/images/ChatGPT_Image_Aug_28__2026__06_49_09_PM-1787943055725.png',
    alt: 'Frozen Mountain School boys in white shirts and red plaid ties celebrating with fist pumps at their graduation ceremony',
    caption: { en: 'Spirit & Pride', sw: 'Roho na Fahari' },
    sub: { en: 'Boys celebrating their achievement', sw: 'Wavulana wakisherehekea mafanikio yao' },
    span: 'lg:col-span-2 lg:row-span-1',
    accent: '#8B0000',
    objectPosition: 'object-top',
  },
  {
    src: '/assets/images/ChatGPT_Image_Aug_28__2026__06_50_22_PM-1787943055089.png',
    alt: 'Frozen Mountain School founder kneeling with a large group of girls in red plaid uniforms and red socks at graduation',
    caption: { en: 'Founder & Our Girls', sw: 'Mwanzilishi na Wasichana Wetu' },
    sub: { en: 'A family of excellence', sw: 'Familia ya ubora' },
    span: 'lg:col-span-1 lg:row-span-1',
    accent: '#6B1A1A',
    objectPosition: 'object-top',
  },
];

export default function GraduationGallery({ lang }: Props) {
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
    sectionRef.current?.querySelectorAll('.grad-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 grad-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            {lang === 'en' ? 'Graduation Ceremony' : 'Sherehe ya Kuhitimu'}
          </div>
          <h2 className="font-extrabold text-foreground tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            {lang === 'en' ? 'Captured in Gold' : 'Imepigwa Picha kwa Dhahabu'}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            {lang === 'en' ?'Every frame tells a story of hard work, sacrifice, and the joy of achievement. These are the faces of Frozen Mountain\'s finest.' :'Kila picha inasimulisha hadithi ya kazi ngumu, dhabihu, na furaha ya mafanikio. Hizi ni nyuso za bora zaidi za Frozen Mountain.'}
          </p>
        </div>

        {/* Cinematic bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[320px] gap-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} relative rounded-3xl overflow-hidden group cursor-pointer grad-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <AppImage
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={700}
                className={`w-full h-full object-cover ${photo.objectPosition} transition-transform duration-1000 ease-out group-hover:scale-105`}
              />

              {/* Cinematic overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-50 group-hover:opacity-80"
                style={{ background: `linear-gradient(to top, ${photo.accent}f0 0%, ${photo.accent}55 50%, transparent 80%)` }}
              />

              {/* Gold shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, transparent 50%, #D4AF37 100%)' }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                {/* Gold accent line */}
                <div
                  className="w-10 h-0.5 mb-3 transition-all duration-500 group-hover:w-16"
                  style={{ background: '#D4AF37' }}
                />
                <h3 className="text-white font-extrabold text-xl leading-tight drop-shadow-lg">
                  {lang === 'en' ? photo.caption.en : photo.caption.sw}
                </h3>
                <p className="text-white/60 text-sm mt-1 font-medium">
                  {lang === 'en' ? photo.sub.en : photo.sub.sw}
                </p>
              </div>

              {/* Corner badge for first photo */}
              {i === 0 && (
                <div
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(212,175,55,0.9)', color: '#071A4A', backdropFilter: 'blur(8px)' }}
                >
                  {lang === 'en' ? 'Our Graduates' : 'Wahitimu Wetu'}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 grad-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A2463 0%, #071A4A 50%, #0d1f3c 100%)', border: '1px solid rgba(212,175,55,0.2)' }}
        >
          <div className="px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-px" style={{ background: '#D4AF37' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4AF37' }}>
                  {lang === 'en' ? 'Next Step' : 'Hatua Inayofuata'}
                </span>
              </div>
              <h3 className="text-white font-extrabold text-2xl leading-tight">
                {lang === 'en' ? 'Be Part of the Next Class' : 'Kuwa Sehemu ya Darasa Lijalo'}
              </h3>
              <p className="text-white/50 text-sm mt-2 max-w-md">
                {lang === 'en' ?'Enrol your child at Frozen Mountain School and give them the foundation for a life of excellence.' :'Andikisha mtoto wako katika Shule ya Frozen Mountain na umpe msingi wa maisha ya ubora.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-sm"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', color: '#071A4A', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}
              >
                {lang === 'en' ? 'Apply Now' : 'Omba Sasa'}
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-8 rounded-full text-sm transition-all duration-300 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
              >
                {lang === 'en' ? 'View Gallery' : 'Tazama Picha'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

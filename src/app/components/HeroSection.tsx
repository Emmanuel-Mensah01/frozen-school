'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const content = {
  en: {
    admissionsOpen: 'Admissions Open — 2025/2026 Academic Year',
    headline: 'Where Every Child',
    headlineAccent: 'Finds Their Way',
    sub: 'Frozen Mountain Nursery, Primary & Secondary School — nurturing curious minds, building strong character, and inspiring a lifelong love of learning.',
    cta1: 'Apply for Admission',
    cta2: 'Discover Our School',
    badge1: 'Ministry Accredited',
    badge2: 'Day & Boarding',
    badge3: 'NECTA Curriculum',
    badge4: '500+ Families',
    statLabel: '15+ Years of Excellence',
    stats: [
    { value: '500+', label: 'Enrolled Students' },
    { value: '40+', label: 'Qualified Teachers' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '98%', label: 'Parent Satisfaction' }]

  },
  sw: {
    admissionsOpen: 'Usajili Umefunguliwa — Mwaka wa Masomo 2025/2026',
    headline: 'Mahali Kila Mtoto',
    headlineAccent: 'Anapata Njia Yake',
    sub: 'Shule ya Frozen Mountain Chekechea, Msingi & Sekondari — ikilelewa akili za udadisi, kujenga tabia imara, na kuhamasisha upendo wa kujifunza maishani.',
    cta1: 'Omba Usajili',
    cta2: 'Gundua Shule Yetu',
    badge1: 'Imeidhinishwa na Wizara',
    badge2: 'Siku & Bweni',
    badge3: 'Mtaala wa NECTA',
    badge4: 'Familia 500+',
    statLabel: 'Miaka 15+ ya Ubora',
    stats: [
    { value: '500+', label: 'Wanafunzi Waliojisajili' },
    { value: '40+', label: 'Walimu Waliohitimu' },
    { value: '15+', label: 'Miaka ya Ubora' },
    { value: '98%', label: 'Ridhaa ya Wazazi' }]

  }
};

const heroImages = [
{
  src: '/assets/images/building_1-1788001389374.png',
  alt: "Frozen Mountain School main 3-story building with iconic red columns and white facade in King'anzi A, Ubungo, Dar es Salaam"
},
{
  src: '/assets/images/building_2-1788001323600.jpeg',
  alt: 'Frozen Mountain School building dramatically illuminated at night — a beacon of learning in Dar es Salaam'
},
{
  src: '/assets/images/ChatGPT_Image_Aug_29__2026__11_00_56_AM-1788001392365.png',
  alt: 'Aerial drone view of Frozen Mountain School campus showing full school grounds and surrounding neighborhood in Dar es Salaam'
}];


export default function HeroSection({ lang }: Props) {
  const t = content[lang];
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Auto-cycle hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Parallax mouse effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const blob = el.querySelector('.hero-blob') as HTMLElement;
      if (blob) blob.style.transform = `translate(${x * 50 - 25}px, ${y * 40 - 20}px)`;
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Stats counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F8F9FC 0%, #EEF1F8 45%, #F8F9FC 100%)' }}>
        
        {/* Animated blobs */}
        <div
          className="hero-blob absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(10,36,99,0.09) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }} />
        
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(193,18,31,0.08) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }} />
        

        {/* Floating geometric accents */}
        <div className="absolute top-28 right-[44%] w-3 h-3 rounded-full bg-school-red opacity-40 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-44 right-[37%] w-2 h-2 rounded-full bg-school-navy opacity-30 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-36 left-[8%] w-5 h-5 rounded-full border-2 border-school-red/30 animate-float-slow" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/3 left-[5%] w-2 h-2 rounded-full bg-school-navy/20 animate-float-slow" style={{ animationDelay: '2.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Content */}
            <div className="space-y-7 animate-clip-in" style={{ animationDelay: '0.1s' }}>
              {/* Admissions open badge */}
              <div className="inline-flex items-center gap-2 bg-school-red/10 border border-school-red/25 text-school-red text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-school-red animate-pulse-ring" />
                {t.admissionsOpen}
              </div>

              <h1 className="text-hero-xl font-extrabold text-foreground leading-tight tracking-tight">
                {t.headline}{' '}
                <span
                  className="relative inline-block shimmer-text"
                  style={{ animationDuration: '3s' }}>
                  
                  {t.headlineAccent}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t.sub}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[t.badge1, t.badge2, t.badge3, t.badge4].map((badge, i) =>
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white border border-border text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:border-school-navy/40 hover:shadow-md hover:-translate-y-0.5"
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  
                    <span className="w-1.5 h-1.5 rounded-full bg-school-navy inline-block" />
                    {badge}
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/admissions" className="btn-primary">
                  {t.cta1}
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                <a href="#about" className="btn-outline">
                  {t.cta2}
                </a>
              </div>

              {/* Quick contact */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
                <a
                  href="tel:+255717437788"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-school-navy transition-colors group">
                  
                  <span className="w-7 h-7 rounded-full bg-school-navy/10 flex items-center justify-center group-hover:bg-school-navy/20 transition-colors">
                    <Icon name="PhoneIcon" size={13} className="text-school-navy" />
                  </span>
                  +255 717 437 788
                </a>
                <a
                  href="https://wa.me/255717437788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-school-red transition-colors group">
                  
                  <span className="w-7 h-7 rounded-full bg-school-red/10 flex items-center justify-center group-hover:bg-school-red/20 transition-colors">
                    <Icon name="ChatBubbleLeftRightIcon" size={13} className="text-school-red" />
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT: Image carousel with floating cards */}
            <div className="relative animate-clip-in" style={{ animationDelay: '0.3s' }}>
              {/* Main image with crossfade */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ height: '480px' }}>
                {heroImages.map((img, i) =>
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-1000"
                  style={{ opacity: activeImg === i ? 1 : 0 }}>
                  
                    <AppImage
                    src={img.src}
                    alt={img.alt}
                    width={700}
                    height={480}
                    priority={i === 0}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                  
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.45) 0%, transparent 55%)' }} />
                

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-panel rounded-xl px-4 py-2.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-school-red animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">
                      Frozen Mountain School — Dar es Salaam
                    </span>
                  </div>
                </div>

                {/* Image dots */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {heroImages.map((_, i) =>
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImg === i ? 'bg-white w-5' : 'bg-white/40'}`} />

                  )}
                </div>
              </div>

              {/* Floating stat card — top right */}
              <div
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3 shadow-xl animate-float z-10"
                style={{
                  animationDelay: '1.2s',
                  background: 'linear-gradient(135deg, #C1121F 0%, #8B0D16 100%)'
                }}>
                
                <p className="text-xs text-white/70 font-medium">{t.statLabel}</p>
                <p className="text-sm font-bold text-white">King&apos;anzi A, Ubungo</p>
              </div>

              {/* Small accent image */}
              <div
                className="absolute -right-8 top-1/3 w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-white hidden lg:block animate-float-slow"
                style={{ animationDelay: '2s' }}>
                
                <AppImage
                  src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_nursery.png&w=3840&q=75"
                  alt="Nursery children at Frozen Mountain School"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  sizes="96px" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div
        ref={statsRef}
        className="relative z-10 bg-school-navy border-y border-white/10"
        style={{ background: 'linear-gradient(90deg, #0A2463 0%, #071A4A 50%, #0A2463 100%)' }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {t.stats.map((stat, i) =>
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 0.12}s` }}>
              
                <span className="text-3xl font-extrabold text-white leading-none">{stat.value}</span>
                <span className="text-xs text-white/55 font-medium mt-1 uppercase tracking-wider">{stat.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>);

}
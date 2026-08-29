'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Props {
  lang: 'en' | 'sw';
}

export default function GraduationHero({ lang }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 12;
      const yPct = (clientY / innerHeight - 0.5) * 8;
      const img = el.querySelector('.parallax-img') as HTMLElement;
      if (img) img.style.transform = `scale(1.08) translate(${xPct}px, ${yPct}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <AppImage
          src="/assets/images/ChatGPT_Image_Aug_28__2026__06_24_40_PM-1787941687662.png"
          alt="Frozen Mountain School graduating boys in navy blue suits celebrating their achievement"
          width={1920}
          height={1080}
          className="parallax-img w-full h-full object-cover transition-transform duration-700 ease-out"
          priority
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000000f0 0%, #00000088 40%, #00000022 75%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A2463aa 0%, transparent 60%)' }} />
        {/* Gold shimmer top bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F5D76E, #D4AF37, transparent)' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              background: '#D4AF37',
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 5) * 15}%`,
              animation: `float-particle ${3 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            {lang === 'en' ? 'Class of 2025' : 'Darasa la 2025'}
          </div>

          {/* Main headline */}
          <h1
            className="font-extrabold leading-none tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
          >
            {lang === 'en' ? (
              <>
                A Moment of<br />
                <span style={{ color: '#D4AF37' }}>Triumph</span> &amp;<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>Legacy</span>
              </>
            ) : (
              <>
                Wakati wa<br />
                <span style={{ color: '#D4AF37' }}>Ushindi</span> &amp;<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>Urithi</span>
              </>
            )}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
            {lang === 'en' ?'Frozen Mountain School proudly celebrates the graduation of our outstanding students — the future leaders of Tanzania.' :'Shule ya Frozen Mountain inasherehekea kwa fahari wahitimu wetu bora — viongozi wa kesho wa Tanzania.'}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { num: '2025', label: lang === 'en' ? 'Graduation Year' : 'Mwaka wa Kuhitimu' },
              { num: '100%', label: lang === 'en' ? 'Pass Rate' : 'Kiwango cha Kufaulu' },
              { num: '★★★★★', label: lang === 'en' ? 'Excellence' : 'Ubora' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-extrabold text-2xl" style={{ color: '#D4AF37' }}>{stat.num}</span>
                <span className="text-white/50 text-xs font-medium tracking-wide uppercase mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase">{lang === 'en' ? 'Scroll' : 'Sogeza'}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes float-particle {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}

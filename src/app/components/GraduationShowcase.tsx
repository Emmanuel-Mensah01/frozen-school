'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

interface Props {
  lang: 'en' | 'sw';
}

export default function GraduationShowcase({ lang }: Props) {
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
    sectionRef.current?.querySelectorAll('.gs-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="graduation"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #071A4A 0%, #0A2463 50%, #0d1f3c 100%)' }}
    >
      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #F5D76E, #D4AF37, transparent)' }}
      />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px), radial-gradient(circle at 80% 20%, #D4AF37 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14 gs-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.35)', color: '#D4AF37' }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            {lang === 'en' ? 'Our Graduates' : 'Wahitimu Wetu'}
          </div>
          <h2
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            {lang === 'en' ? 'Graduation Ceremony' : 'Sherehe ya Kuhitimu'}
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            {lang === 'en' ?'Celebrating the achievements of our outstanding graduates — the future leaders of Tanzania.' :'Kusherehekea mafanikio ya wahitimu wetu bora — viongozi wa kesho wa Tanzania.'}
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Large feature photo */}
          <div
            className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer gs-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
            style={{ height: '420px', transitionDelay: '0.1s' }}
          >
            <AppImage
              src="/assets/images/ChatGPT_Image_Aug_28__2026__06_24_40_PM-1787941687662.png"
              alt="Frozen Mountain School graduating boys in sharp navy blue suits celebrating their graduation day"
              width={900}
              height={600}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #0A2463f0 0%, #0A246355 50%, transparent 80%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="w-10 h-0.5 mb-3 transition-all duration-500 group-hover:w-16" style={{ background: '#D4AF37' }} />
              <h3 className="text-white font-extrabold text-xl leading-tight drop-shadow-lg">
                {lang === 'en' ? 'Our Graduating Boys' : 'Wavulana Wetu Wahitimu'}
              </h3>
              <p className="text-white/60 text-sm mt-1 font-medium">
                {lang === 'en' ? 'Graduating Boys — Navy & Gold' : 'Wavulana Wahitimu — Bluu ya Bahari na Dhahabu'}
              </p>
            </div>
            <div
              className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(212,175,55,0.9)', color: '#071A4A', backdropFilter: 'blur(8px)' }}
            >
              {lang === 'en' ? 'Our Graduates' : 'Wahitimu Wetu'}
            </div>
          </div>

          {/* Stack of two smaller photos */}
          <div className="flex flex-col gap-5">
            <div
              className="relative rounded-3xl overflow-hidden group cursor-pointer gs-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
              style={{ height: '200px', transitionDelay: '0.2s' }}
            >
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_28__2026__06_26_25_PM-1787941687295.png"
                alt="Frozen Mountain School founder with graduating boy and girl students wearing graduation gowns and sashes"
                width={500}
                height={300}
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #D4AF37cc 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                  {lang === 'en' ? 'Founder with Graduates' : 'Mwanzilishi na Wahitimu'}
                </h3>
              </div>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden group cursor-pointer gs-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
              style={{ height: '200px', transitionDelay: '0.3s' }}
            >
              <AppImage
                src="/assets/images/ChatGPT_Image_Aug_28__2026__06_27_42_PM-1787941687996.png"
                alt="Frozen Mountain School graduating girls in sky blue uniforms smiling proudly on graduation day in Tanzania"
                width={500}
                height={300}
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #1a5c8acc 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm leading-tight drop-shadow-lg">
                  {lang === 'en' ? 'Our Graduating Girls' : 'Wasichana Wetu Wahitimu'}
                </h3>
              </div>
            </div>
          </div>

          {/* New photo: Boys fist pumping — wide */}
          <div
            className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer gs-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
            style={{ height: '260px', transitionDelay: '0.4s' }}
          >
            <AppImage
              src="/assets/images/ChatGPT_Image_Aug_28__2026__06_49_09_PM-1787943055725.png"
              alt="Frozen Mountain School boys in white shirts and red plaid ties celebrating with fist pumps at their graduation ceremony"
              width={900}
              height={400}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #8B0000e0 0%, transparent 65%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-10 h-0.5 mb-2 transition-all duration-500 group-hover:w-16" style={{ background: '#D4AF37' }} />
              <h3 className="text-white font-extrabold text-lg leading-tight drop-shadow-lg">
                {lang === 'en' ? 'Spirit & Pride' : 'Roho na Fahari'}
              </h3>
              <p className="text-white/60 text-sm mt-0.5 font-medium">
                {lang === 'en' ? 'Boys celebrating their achievement' : 'Wavulana wakisherehekea mafanikio yao'}
              </p>
            </div>
          </div>

          {/* New photo: Founder with girls in red plaid */}
          <div
            className="md:col-span-1 relative rounded-3xl overflow-hidden group cursor-pointer gs-reveal opacity-0 translate-y-10 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0"
            style={{ height: '260px', transitionDelay: '0.5s' }}
          >
            <AppImage
              src="/assets/images/ChatGPT_Image_Aug_28__2026__06_50_22_PM-1787943055089.png"
              alt="Frozen Mountain School founder kneeling with a large group of girls in red plaid uniforms and red socks at graduation"
              width={500}
              height={400}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #6B1A1Ae0 0%, transparent 65%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-10 h-0.5 mb-2 transition-all duration-500 group-hover:w-16" style={{ background: '#D4AF37' }} />
              <h3 className="text-white font-extrabold text-base leading-tight drop-shadow-lg">
                {lang === 'en' ? 'Founder & Our Girls' : 'Mwanzilishi na Wasichana Wetu'}
              </h3>
              <p className="text-white/60 text-xs mt-0.5 font-medium">
                {lang === 'en' ? 'A family of excellence' : 'Familia ya ubora'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats + CTA row */}
        <div
          className="gs-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl px-8 py-8"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.2)', transitionDelay: '0.35s' }}
        >
          {/* Stats */}
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            {[
              { num: '100%', label: lang === 'en' ? 'Pass Rate' : 'Kiwango cha Kufaulu' },
              { num: '★★★★★', label: lang === 'en' ? 'Excellence' : 'Ubora' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="font-extrabold text-2xl" style={{ color: '#D4AF37' }}>{stat.num}</span>
                <span className="text-white/40 text-xs font-medium tracking-wide uppercase mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/graduation"
            className="inline-flex items-center justify-center gap-2 font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-sm shrink-0"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', color: '#071A4A', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}
          >
            {lang === 'en' ? 'View Full Ceremony' : 'Tazama Sherehe Kamili'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Gold bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }}
      />
    </section>
  );
}

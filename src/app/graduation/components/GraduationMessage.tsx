'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Props {
  lang: 'en' | 'sw';
}

export default function GraduationMessage({ lang }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2463 0%, #071A4A 60%, #0d1f3c 100%)' }}>
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)' }} />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px), radial-gradient(circle at 80% 20%, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Owner photo — left */}
          <div className="reveal opacity-0 translate-x-[-40px] transition-all duration-700 ease-out [&.visible]:opacity-100 [&.visible]:translate-x-0">
            <div className="relative">
              {/* Gold frame accent */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #D4AF37, transparent, #D4AF37)', padding: 2 }}
              />
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{ border: '1px solid rgba(212,175,55,0.3)' }}
              />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <AppImage
                  src="/assets/images/ChatGPT_Image_Aug_28__2026__06_26_25_PM-1787941687295.png"
                  alt="Frozen Mountain School owner standing proudly with two graduating students wearing graduation sashes"
                  width={700}
                  height={875}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, rgba(7,26,74,0.8), transparent)' }} />

                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="inline-flex flex-col px-5 py-3 rounded-xl"
                    style={{ background: 'rgba(7,26,74,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.3)' }}
                  >
                    <span className="text-white font-bold text-base leading-tight">
                      {lang === 'en' ? 'School Founder & Director' : 'Mwanzilishi na Mkurugenzi'}
                    </span>
                    <span style={{ color: '#D4AF37' }} className="text-xs font-semibold mt-0.5">
                      Frozen Mountain School
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D76E)', boxShadow: '0 8px 32px rgba(212,175,55,0.5)' }}
              >
                <span className="text-school-navy font-extrabold text-lg leading-none">2025</span>
                <span className="text-school-navy/70 text-xs font-bold leading-tight">CLASS</span>
              </div>
            </div>
          </div>

          {/* Message — right */}
          <div className="reveal opacity-0 translate-x-[40px] transition-all duration-700 delay-200 ease-out [&.visible]:opacity-100 [&.visible]:translate-x-0">
            {/* Quote mark */}
            <div className="text-8xl font-serif leading-none mb-4 select-none" style={{ color: 'rgba(212,175,55,0.2)', fontFamily: 'Georgia, serif' }}>&ldquo;</div>

            <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {lang === 'en' ? (
                <>A Message from Our <span style={{ color: '#D4AF37' }}>Founder</span></>
              ) : (
                <>Ujumbe kutoka kwa <span style={{ color: '#D4AF37' }}>Mwanzilishi Wetu</span></>
              )}
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed text-base">
              <p>
                {lang === 'en' ?'Today marks not just the end of a chapter, but the beginning of a magnificent journey. Each one of you has proven that with dedication, discipline, and the right environment, excellence is not a destination — it is a way of life.' :'Leo si mwisho wa sura tu, bali ni mwanzo wa safari nzuri. Kila mmoja wenu amethibitisha kwamba kwa bidii, nidhamu, na mazingira sahihi, ubora si lengo — ni mtindo wa maisha.'}
              </p>
              <p>
                {lang === 'en' ?'At Frozen Mountain School, we have always believed that every child carries within them the seed of greatness. Our role has been to water that seed, to nurture it, and to watch it bloom into the extraordinary individuals you are today.' :'Katika Shule ya Frozen Mountain, tumekuwa tukiamini daima kwamba kila mtoto ana ndani yake mbegu ya ukuu. Jukumu letu limekuwa kumwagilia mbegu hiyo, kuiangalia, na kuishuhudia ikichanua kuwa watu wa kipekee mnaokuwa leo.'}
              </p>
              <p>
                {lang === 'en' ?'Go forth and make Tanzania proud. The world is waiting for what only you can bring to it.' :'Nendeni mbele na mfanye Tanzania iwe na fahari. Dunia inangoja kile ambacho ninyi peke yenu mnaweza kuleta.'}
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-px" style={{ background: '#D4AF37' }} />
              <div>
                <p className="text-white font-bold text-sm">{lang === 'en' ? 'With Pride & Love' : 'Kwa Fahari na Upendo'}</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: '#D4AF37' }}>
                  {lang === 'en' ? 'Founder, Frozen Mountain School' : 'Mwanzilishi, Shule ya Frozen Mountain'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

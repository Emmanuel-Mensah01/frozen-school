'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const testimonials = [
  {
    name: 'Mrs. Amina Hassan',
    role: { en: 'Parent, Nursery Division', sw: 'Mzazi, Kitengo cha Chekechea' },
    quote: {
      en: '"Frozen Mountain has transformed my daughter completely. The teachers are dedicated, caring, and truly invested in every child\'s success. She looks forward to school every single day."',
      sw: '"Frozen Mountain imembadilisha binti yangu kabisa. Walimu wana bidii, wapole, na wanajali mafanikio ya kila mtoto. Yeye hutarajia shule kila siku."',
    },
    color: '#C1121F',
  },
  {
    name: 'Mr. John Mwangi',
    role: { en: 'Parent, Primary Division', sw: 'Mzazi, Kitengo cha Msingi' },
    quote: {
      en: '"The academic standard here is exceptional. My son\'s performance improved dramatically within one term. The school\'s motto truly reflects how they operate."',
      sw: '"Kiwango cha kitaaluma hapa ni cha kipekee. Utendaji wa mwanangu uliboreshwa sana ndani ya muhula mmoja. Kauli mbiu ya shule inaonyesha kweli jinsi wanavyofanya kazi."',
    },
    color: '#0A2463',
  },
  {
    name: 'Mrs. Grace Kimani',
    role: { en: 'Parent, Primary Division', sw: 'Mzazi, Kitengo cha Msingi' },
    quote: {
      en: '"What sets Frozen Mountain apart is the balance between academics and character development. My children are not just learning — they are growing into confident individuals."',
      sw: '"Kinachomtofautisha Frozen Mountain ni usawa kati ya masomo na ukuaji wa tabia. Watoto wangu hawajifunzi tu — wanakua kuwa watu wajasiri."',
    },
    color: '#1a5c2e',
  },
  {
    name: 'Mr. David Osei',
    role: { en: 'Parent, Nursery Division', sw: 'Mzazi, Kitengo cha Chekechea' },
    quote: {
      en: '"The facilities are outstanding and the environment is safe and nurturing. As a parent, I have complete peace of mind knowing my children are in such capable hands."',
      sw: '"Miundombinu ni ya kipekee na mazingira ni salama na ya malezi. Kama mzazi, nina amani kamili ya akili kujua watoto wangu wako mikononi mwenye uwezo."',
    },
    color: '#C1121F',
  },
];

export default function AdmissionsCTA({ lang }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    wrapperRef.current?.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      {/* TESTIMONIALS */}
      <section id="admissions" className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(193,18,31,0.04) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <div className="section-tag mx-auto mb-4">
              <Icon name="ChatBubbleLeftRightIcon" size={14} />
              {lang === 'en' ? 'Parent Testimonials' : 'Maoni ya Wazazi'}
            </div>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'Trusted by Families Who Care' : 'Wazazi Wanaothamini Elimu Wanaamini'}
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              {lang === 'en' ? '500+ Families Trust Frozen Mountain' : 'Familia 500+ Zinaamini Frozen Mountain'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 scale-in group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Quote mark */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl leading-none"
                  style={{ background: t.color }}
                >
                  &ldquo;
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  {t.quote[lang]}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="pb-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-3xl overflow-hidden fade-in-up"
            style={{ background: 'linear-gradient(135deg, #0A2463 0%, #071A4A 60%, #0A2463 100%)' }}
          >
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <AppImage
                src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_gallery5.png&w=3840&q=75"
                alt="African school students in classroom background at Frozen Mountain School"
                width={1200}
                height={500}
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            {/* Decorative circles */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #C1121F 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
            />

            <div className="relative z-10 px-8 py-14 lg:py-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Text */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-school-red animate-pulse" />
                    {lang === 'en' ? 'Admissions Open — 2026/2027' : 'Usajili Umefunguliwa — 2026/2027'}
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {lang === 'en' ? 'Join the Frozen Mountain Family' : 'Jiunge na Familia ya Frozen Mountain'}
                  </h2>

                  <p className="text-white/70 leading-relaxed">
                    {lang === 'en' ?'Our admissions process is simple, transparent, and designed to welcome every family warmly. Admission forms are available physically at the school.' :'Mchakato wetu wa usajili ni rahisi, uwazi, na umeundwa kukaribisha kila familia kwa upole. Fomu za usajili zinapatikana kimwili shuleni.'}
                  </p>

                  {/* Fee highlight */}
                  <div className="inline-flex items-center gap-2.5 bg-school-red/20 border border-school-red/40 rounded-xl px-5 py-3">
                    <Icon name="InformationCircleIcon" size={18} className="text-school-red shrink-0" />
                    <span className="text-white text-sm font-semibold">
                      {lang === 'en' ? 'Admission Form + Interview Fee: TZS 20,000' : 'Ada ya Fomu ya Usajili + Mahojiano: TZS 20,000'}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href="/admissions" className="btn-accent">
                      {lang === 'en' ? 'Apply Online' : 'Omba Mtandaoni'}
                      <Icon name="ArrowRightIcon" size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors border border-white/25 hover:border-white/50 px-5 py-2.5 rounded-full"
                    >
                      {lang === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}
                    </Link>
                  </div>
                </div>

                {/* Right: Image card */}
                <div className="hidden lg:block scale-in stagger-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom-inner">
                    <AppImage
                      src="https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_gallery2.png&w=3840&q=75"
                      alt="African school students smiling and engaged in learning activities in classroom at Frozen Mountain"
                      width={600}
                      height={380}
                      className="w-full h-64 object-cover img-inner"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.5) 0%, transparent 50%)' }}
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-panel rounded-xl px-4 py-2.5">
                        <p className="text-xs font-semibold text-foreground">
                          {lang === 'en' ? '🎓 Enroll your child today' : '🎓 Sajili mtoto wako leo'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
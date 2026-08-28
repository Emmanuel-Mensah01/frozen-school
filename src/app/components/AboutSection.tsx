'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const content = {
  en: {
    tag: 'Our Story',
    headline: 'A Growing School With a Vision for Excellence',
    body: "Frozen Mountain Nursery and Primary School is a growing educational institution located in King'anzi A, Kwembe Ward, Ubungo District, Dar es Salaam. The school is expanding its educational services to include Ordinary Level Secondary Education from Form I to Form IV, creating a continuous learning journey for students.",
    body2: "Conveniently accessible from Ilala through Kinyerezi, and from Ubungo through Mbezi Mwisho. Situated away from noise and congestion, the location provides a peaceful and welcoming environment where students can concentrate on their studies, develop their talents, and enjoy school life.",
    vision: 'Vision',
    visionText: 'To be a centre of excellence in promoting quality education that is competitive both locally and internationally.',
    mission: 'Mission',
    missionText: 'To develop well-rounded, confident, and responsible individuals who aspire to achieve their full potential, by providing a welcoming, happy, and supportive learning environment in which everyone is equal and all achievements are celebrated.',
    accredBadge: 'Ministry Accredited',
    accredSub: 'Ministry of Education, Tanzania',
    cta: 'Explore Our Programmes',
    stats: [
    { value: 'Nursery', label: 'to Secondary', icon: 'AcademicCapIcon' },
    { value: 'Day &', label: 'Boarding Options', icon: 'HomeIcon' },
    { value: 'Boys &', label: 'Girls Welcome', icon: 'UserGroupIcon' },
    { value: 'All', label: 'Backgrounds', icon: 'HeartIcon' }],

    accessLabel: 'Easy to Reach',
    accessText: "From Ilala via Kinyerezi · From Ubungo via Mbezi Mwisho"
  },
  sw: {
    tag: 'Hadithi Yetu',
    headline: 'Shule Inayokua na Maono ya Ubora',
    body: "Shule ya Frozen Mountain ni taasisi ya elimu inayokua iliyoko King'anzi A, Kata ya Kwembe, Wilaya ya Ubungo, Dar es Salaam. Shule inakuwa kwa kuongeza Elimu ya Sekondari ya Kawaida kuanzia Kidato cha I hadi IV.",
    body2: "Inafikiwa kwa urahisi kutoka Ilala kupitia Kinyerezi, na kutoka Ubungo kupitia Mbezi Mwisho. Iko mbali na kelele na msongamano, mahali panapotoa mazingira ya amani ambapo wanafunzi wanaweza kujizatiti.",
    vision: 'Maono',
    visionText: 'Kuwa kituo cha ubora katika kukuza elimu bora inayoshindana ndani na nje ya nchi.',
    mission: 'Dhamira',
    missionText: 'Kukuza watu wazima, wajasiri, na wenye uwajibikaji wanaojitahidi kufikia uwezo wao kamili, kwa kutoa mazingira ya kujifunza yanayokaribisha, ya furaha, na ya msaada.',
    accredBadge: 'Imeidhinishwa na Wizara',
    accredSub: 'Wizara ya Elimu, Tanzania',
    cta: 'Chunguza Programu Zetu',
    stats: [
    { value: 'Chekechea', label: 'hadi Sekondari', icon: 'AcademicCapIcon' },
    { value: 'Siku &', label: 'Chaguo la Bweni', icon: 'HomeIcon' },
    { value: 'Wavulana &', label: 'Wasichana', icon: 'UserGroupIcon' },
    { value: 'Wote', label: 'Wanakaribisha', icon: 'HeartIcon' }],

    accessLabel: 'Rahisi Kufika',
    accessText: 'Kutoka Ilala kupitia Kinyerezi · Kutoka Ubungo kupitia Mbezi Mwisho'
  }
};

const schoolImages = [
{
  src: "/assets/images/A0C36620-BF27-4CA6-B47C-85646590E16D-1787904990643.jpg",
  alt: 'Frozen Mountain students in red plaid uniforms on school stairs',
  span: 'col-span-2 row-span-2'
},
{
  src: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2FIMG_8364-1787769922934.PNG&w=3840&q=75',
  alt: 'Frozen Mountain School outdoor area with students and school facilities visible',
  span: 'col-span-1 row-span-1'
},
{
  src: '/assets/images/BD3D3181-CD02-4863-A2D9-1B0C48749864-1787904173254.png',
  alt: 'Frozen Mountain School building interior corridor with elegant red and white checkered floors and red railings showcasing the school\'s prestigious architecture',
  span: 'col-span-1 row-span-1'
}];


export default function AboutSection({ lang }: Props) {
  const t = content[lang];
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
    sectionRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#F0F3FA' }}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse at center, rgba(10,36,99,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Text */}
          <div className="space-y-6 fade-in-left">
            <div className="section-tag">
              <Icon name="InformationCircleIcon" size={14} />
              {t.tag}
            </div>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
              {t.headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{t.body}</p>
            <p className="text-muted-foreground leading-relaxed">{t.body2}</p>

            {/* Ministry accreditation badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-school-navy/15 rounded-2xl px-5 py-3 shadow-sm fade-in-up stagger-1">
              <div className="w-10 h-10 rounded-xl bg-school-navy/10 flex items-center justify-center shrink-0">
                <Icon name="ShieldCheckIcon" size={20} className="text-school-navy" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">{t.accredBadge}</p>
                <p className="text-xs text-muted-foreground">{t.accredSub}</p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl border-l-4 border-l-school-navy bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 fade-in-up stagger-2">
                <p className="text-xs font-bold text-school-navy uppercase tracking-widest mb-1.5">{t.vision}</p>
                <p className="text-sm text-foreground leading-relaxed">{t.visionText}</p>
              </div>
              <div className="p-5 rounded-2xl border-l-4 border-l-school-red bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 fade-in-up stagger-3">
                <p className="text-xs font-bold text-school-red uppercase tracking-widest mb-1.5">{t.mission}</p>
                <p className="text-sm text-foreground leading-relaxed">{t.missionText}</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Image bento grid + stats */}
          <div className="space-y-4 fade-in-right">
            {/* Bento image grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-96">
              {schoolImages.map((img, i) =>
              <div
                key={i}
                className={`${img.span} rounded-2xl overflow-hidden shadow-md img-zoom-inner img-card-hover relative`}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                
                  <AppImage
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className={`w-full h-full ${i === 0 ? 'object-cover object-top' : 'object-cover'} img-inner`}
                  sizes="(max-width: 768px) 50vw, 25vw" />
                
                  <div
                  className="img-overlay absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.4) 0%, transparent 60%)' }} />
                
                </div>
              )}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {t.stats.map((stat, i) =>
              <div
                key={i}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 scale-in"
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
                
                  <div className="w-9 h-9 rounded-xl bg-school-navy/10 flex items-center justify-center shrink-0">
                    <Icon name={stat.icon as 'AcademicCapIcon'} size={18} className="text-school-navy" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground leading-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )}

              {/* Access info */}
              <div className="col-span-2 bg-school-navy rounded-2xl p-4 flex items-center gap-3 scale-in stagger-5">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-0.5">{t.accessLabel}</p>
                  <p className="text-xs text-white/65 leading-relaxed">{t.accessText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
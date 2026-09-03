'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Props {
  lang: 'en' | 'sw';
}

const activities = [
{
  id: 'sports',
  num: '02',
  image: '/assets/images/sports__2_-1788002759222.png',
  alt: 'Students playing football and netball on sports grounds at Frozen Mountain School',
  icon: 'TrophyIcon',
  accentColor: '#0A2463',
  span: 'lg:col-span-1',
  en: {
    title: 'Sports & Athletics',
    desc: 'Football, netball, athletics, and indoor games that promote teamwork, discipline, and physical fitness in every student.'
  },
  sw: {
    title: 'Michezo na Riadha',
    desc: 'Mpira wa miguu, netiboli, riadha, na michezo ya ndani inayokuza ushirikiano, nidhamu, na afya ya kimwili.'
  }
},
{
  id: 'science',
  num: '03',
  image: '/assets/images/lab.png',
  alt: 'Students conducting science experiments and STEM projects in laboratory at Frozen Mountain School',
  icon: 'BeakerIcon',
  accentColor: '#1a5c2e',
  span: 'lg:col-span-1',
  en: {
    title: 'Science & Innovation',
    desc: 'Hands-on experiments, STEM projects that ignite curiosity and develop critical thinking from an early age.'
  },
  sw: {
    title: 'Sayansi na Ubunifu',
    desc: 'Majaribio ya vitendo, miradi ya STEM inayochochea udadisi na kukuza fikira za kina tangu umri mdogo.'
  }
},
{
  id: 'reading',
  num: '04',
  image: '/assets/images/library__2_-1788002498750.png',
  alt: 'Students reading books and participating in debate club at Frozen Mountain School library',
  icon: 'BookOpenIcon',
  accentColor: '#0A2463',
  span: 'lg:col-span-1',
  en: {
    title: 'Reading & Debate Club',
    desc: 'Structured reading programmes and debate competitions that build vocabulary, critical thinking, and public speaking confidence.'
  },
  sw: {
    title: 'Klabu ya Kusoma na Mjadala',
    desc: 'Programu za kusoma zilizopangwa na mashindano ya mjadala yanayojenga msamiati, fikira za kina, na ujasiri wa kuzungumza.'
  }
},
{
  id: 'community',
  num: '05',
  image: '/assets/images/cuommunity service.png',
  alt: 'Students participating in community service and charity drives organized by Frozen Mountain School',
  icon: 'HeartIcon',
  accentColor: '#C1121F',
  span: 'lg:col-span-1',
  en: {
    title: 'Community Service',
    desc: 'Regular outreach and charity drives that instil compassion, social responsibility, and servant leadership in every student.'
  },
  sw: {
    title: 'Huduma ya Jamii',
    desc: 'Ufikiaji wa mara kwa mara na misaada inayopanda huruma, uwajibikaji wa kijamii, na uongozi wa kutumikia.'
  }
},
{
  id: 'ict',
  num: '06',
  image: 'https://frozenmountain-xi.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ffrozen_mountain_ict.png&w=3840&q=75',
  alt: 'Students learning computer skills and digital literacy in ICT lab at Frozen Mountain School',
  icon: 'ComputerDesktopIcon',
  accentColor: '#1a5c2e',
  span: 'lg:col-span-2',
  en: {
    title: 'ICT & Digital Literacy',
    desc: 'Age-appropriate computer education, coding basics, and digital citizenship preparing students for a technology-driven world.'
  },
  sw: {
    title: 'TEHAMA na Ujuzi wa Kidijitali',
    desc: 'Elimu ya kompyuta inayofaa umri, misingi ya uandishi wa programu, na uraia wa kidijitali kuandaa wanafunzi kwa ulimwengu wa teknolojia.'
  }
}];


export default function ActivitiesGrid({ lang }: Props) {
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
        <div className="text-center mb-14 fade-in-up">
          <div className="section-tag mx-auto mb-4">
            <Icon name="SparklesIcon" size={14} />
            {lang === 'en' ? 'Student Life' : 'Maisha ya Mwanafunzi'}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            {lang === 'en' ? 'Discover Your Passion' : 'Gundua Shauku Yako'}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {lang === 'en' ? 'Six enriching programmes that shape character, build confidence, and celebrate every student\'s unique talent.' : 'Programu sita za kuimarisha zinazounda tabia, kujenga ujasiri, na kusherehekea kipaji cha kipekee cha kila mwanafunzi.'}
          </p>
        </div>

        {/* Elite photography card grid — asymmetric bento */}
        <div className="grid lg:grid-cols-3 gap-5">
          {activities.map((activity, i) =>
          <div
            key={activity.id}
            className={`${activity.span} relative rounded-3xl overflow-hidden group cursor-pointer scale-in`}
            style={{ height: i === 0 || i === 5 ? '380px' : '300px', transitionDelay: `${i * 0.08}s` }}>
            
              {/* Full-bleed image */}
              <AppImage
              src={activity.image}
              alt={activity.alt}
              width={900}
              height={500}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            

              {/* Gradient overlay */}
              <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to top, ${activity.accentColor}f0 0%, ${activity.accentColor}80 40%, transparent 70%)`
              }} />
            

              {/* Number badge — top left */}
              <div className="absolute top-4 left-4">
                <span
                className="text-white/90 text-xs font-black tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}>
                
                  {activity.num}
                </span>
              </div>

              {/* Icon — top right */}
              <div className="absolute top-4 right-4">
                <div
                className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-sm"
                style={{ background: `${activity.accentColor}cc`, border: '1px solid rgba(255,255,255,0.2)' }}>
                
                  <Icon name={activity.icon as 'MusicalNoteIcon'} size={16} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2 drop-shadow-lg">
                  {activity[lang].title}
                </h3>
                <p className="text-white/0 group-hover:text-white/85 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                  {activity[lang].desc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 fade-in-up">
          <Link href="/admissions" className="btn-primary">
            {lang === 'en' ? 'Join Our School Community' : 'Jiunge na Jamii ya Shule Yetu'}
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>);

}
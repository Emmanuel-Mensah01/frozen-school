'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function ContactDetails({ lang }: Props) {
  const cards = [
    {
      icon: 'PhoneIcon',
      titleEn: 'Phone',
      titleSw: 'Simu',
      content: (
        <div className="space-y-2">
          <a
            href="tel:+255717437788"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            <Icon name="PhoneIcon" size={15} />
            +255 717 437 788
          </a>
          <a
            href="tel:+255767539963"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            <Icon name="PhoneIcon" size={15} />
            +255 767 539 963
          </a>
        </div>
      ),
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      titleEn: 'WhatsApp',
      titleSw: 'WhatsApp',
      content: (
        <div className="space-y-2">
          <a
            href="https://wa.me/255717437788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-green-600 transition-colors w-fit"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} />
            {lang === 'en' ? 'Chat on WhatsApp' : 'Zungumza WhatsApp'}
          </a>
          <p className="text-xs text-muted-foreground">
            {lang === 'en' ? 'Quick responses during school hours' : 'Majibu ya haraka wakati wa shule'}
          </p>
        </div>
      ),
    },
    {
      icon: 'EnvelopeIcon',
      titleEn: 'Email',
      titleSw: 'Barua Pepe',
      content: (
        <a
          href="mailto:frozenschools.mountain24@gmail.com"
          className="text-primary font-semibold text-sm hover:underline break-all"
        >
          frozenschools.mountain24@gmail.com
        </a>
      ),
    },
    {
      icon: 'MapPinIcon',
      titleEn: 'Address',
      titleSw: 'Anwani',
      content: (
        <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
          <p className="text-foreground font-semibold">King&apos;anzi &quot;A&quot;, Kwembe Ward</p>
          <p>Ubungo District, Dar es Salaam</p>
          <p>Tanzania</p>
          <p className="text-xs mt-2 text-muted-foreground">
            {lang === 'en' ?'Via Kinyerezi (from Ilala) · Via Mbezi Mwisho (from Ubungo)' :'Kupitia Kinyerezi (kutoka Ilala) · Kupitia Mbezi Mwisho (kutoka Ubungo)'}
          </p>
        </div>
      ),
    },
    {
      icon: 'ClockIcon',
      titleEn: 'School Hours',
      titleSw: 'Muda wa Shule',
      content: (
        <div className="text-sm space-y-1">
          <p className="text-foreground font-semibold">7:30 AM – 3:00 PM</p>
          <p className="text-muted-foreground">
            {lang === 'en' ? 'Monday – Friday' : 'Jumatatu – Ijumaa'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {lang === 'en' ? 'Gate closes at 9:00 AM' : 'Lango linafungwa saa tatu asubuhi'}
          </p>
        </div>
      ),
    },
    {
      icon: 'CameraIcon',
      titleEn: 'Instagram',
      titleSw: 'Instagram',
      content: (
        <div className="space-y-2">
          <a
            href="https://instagram.com/frozen_mountainschooltz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 font-semibold text-sm hover:underline"
          >
            <Icon name="CameraIcon" size={15} />
            @frozen_mountainschooltz
          </a>
          <p className="text-xs text-muted-foreground">
            {lang === 'en' ? 'Follow us for school updates' : 'Tufuate kwa habari za shule'}
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-school-navy"
                  style={{ background: 'rgba(10,36,99,0.1)' }}
                >
                  <Icon
                    name={card.icon as 'PhoneIcon'}
                    size={18}
                    className="text-school-navy group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <p className="font-bold text-foreground text-sm">
                  {lang === 'en' ? card.titleEn : card.titleSw}
                </p>
              </div>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
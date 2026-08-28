'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function ContactHero({ lang }: Props) {
  return (
    <section className="relative pt-28 pb-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 0%, rgba(10,36,99,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(193,18,31,0.05) 0%, transparent 50%)'
        }} />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-5 animate-clip-in">
            <div className="section-tag">
              <Icon name="PhoneIcon" size={14} />
              {lang === 'en' ? 'Get In Touch' : 'Wasiliana Nasi'}
            </div>
            <h1 className="text-hero-xl font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'Contact Frozen Mountain School' : 'Wasiliana na Shule ya Frozen Mountain'}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {lang === 'en' ? "We're here to answer your questions. Reach us by phone, WhatsApp, email, or visit us in King'anzi \"A\", Ubungo." : 'Tuko hapa kujibu maswali yako. Wasiliana nasi kwa simu, WhatsApp, barua pepe, au tutembelee King\'anzi "A", Ubungo.'}
            </p>

            {/* Quick contact pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="tel:+255717437788"
                className="inline-flex items-center gap-2 bg-school-navy text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:bg-school-navy-dark hover:shadow-lg hover:-translate-y-0.5">

                <Icon name="PhoneIcon" size={14} />
                +255 717 437 788
              </a>
              <a
                href="https://wa.me/255717437788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-school-red text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5">

                <Icon name="ChatBubbleLeftRightIcon" size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-clip-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl img-zoom-inner img-card-hover">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1c2f2a13f-1764925904325.png"
                alt="African school teacher warmly welcoming parents and students at school entrance"
                width={700}
                height={400}
                className="w-full h-64 object-cover img-inner"
                priority />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,36,99,0.4) 0%, transparent 55%)' }} />

              <div className="absolute bottom-4 left-4">
                <div className="glass-panel rounded-xl px-4 py-2.5">
                  <p className="text-xs font-semibold text-foreground">
                    📍 King&apos;anzi A, Ubungo, Dar es Salaam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
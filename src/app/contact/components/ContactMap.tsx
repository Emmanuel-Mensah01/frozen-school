'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

export default function ContactMap({ lang }: Props) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="section-tag mb-4">
          <Icon name="MapIcon" size={14} />
          {lang === 'en' ? 'Find Us' : 'Tupate'}
        </div>
        <h2 className="text-xl font-extrabold text-foreground mb-6">
          {lang === 'en' ? 'Our Location' : 'Mahali Tulipo'}
        </h2>

        <div className="warm-card rounded-3xl overflow-hidden">
          {/* Map embed */}
          <div className="relative w-full" style={{ paddingTop: '50%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5!2d39.19!3d-6.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDUnMzYuMCJTIDM5wrAxMScyNC4wIkU!5e0!3m2!1sen!2stz!4v1!5m2!1sen!2stz"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Frozen Mountain School Location - King'anzi A, Kwembe Ward, Ubungo, Dar es Salaam"
            />
          </div>

          {/* Address bar below map */}
          <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border">
            <div className="flex items-start gap-3">
              <Icon name="MapPinIcon" size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground text-sm">
                  King&apos;anzi &quot;A&quot;, Kwembe Ward, Ubungo District
                </p>
                <p className="text-xs text-muted-foreground">Dar es Salaam, Tanzania</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/255717437788"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm py-2 px-4"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={15} />
                WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=King'anzi+A+Kwembe+Ubungo+Dar+es+Salaam+Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2 px-4"
              >
                <Icon name="MapIcon" size={15} />
                {lang === 'en' ? 'Open in Maps' : 'Fungua Ramani'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
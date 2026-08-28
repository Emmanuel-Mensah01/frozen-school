import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  lang: 'en' | 'sw';
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #0A2463 0%, #071A4A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Logo + Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo src="/assets/images/5428A89D-591D-49E3-818A-765903FB3257-1787328230955.jpg" size={48} className="rounded-full overflow-hidden" />
              <div>
                <p className="font-bold text-white text-sm leading-tight">Frozen Mountain School</p>
                <p className="text-white/50 text-xs">King&apos;anzi A, Ubungo, Dar es Salaam</p>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-[220px]">
              {lang === 'en' ?'Nurturing knowledgeable, disciplined, and confident young people.' :'Kukuza vijana wenye ujuzi, nidhamu, na ujasiri.'}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">
              {lang === 'en' ? 'Quick Links' : 'Viungo'}
            </p>
            {[
              { href: '/', label: lang === 'en' ? 'Home' : 'Nyumbani' },
              { href: '/facilities', label: lang === 'en' ? 'Facilities' : 'Miundombinu' },
              { href: '/activities', label: lang === 'en' ? 'Activities' : 'Shughuli' },
              { href: '/admissions', label: lang === 'en' ? 'Admissions' : 'Usajili' },
              { href: '/contact', label: lang === 'en' ? 'Contact' : 'Wasiliana' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
              >
                <span className="w-1 h-1 rounded-full bg-school-red opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">
              {lang === 'en' ? 'Contact' : 'Mawasiliano'}
            </p>
            <a
              href="tel:+255717437788"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Icon name="PhoneIcon" size={14} className="text-school-red" />
              +255 717 437 788
            </a>
            <a
              href="https://wa.me/255717437788"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={14} className="text-school-red" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com/frozen_mountainschooltz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Icon name="CameraIcon" size={14} className="text-school-red" />
              @frozen_mountainschooltz
            </a>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © 2026 Frozen Mountain School. {lang === 'en' ? 'All rights reserved.' : 'Haki zote zimehifadhiwa.'}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-school-red animate-pulse-ring" />
            <span className="text-xs text-white/35">
              {lang === 'en' ? 'Admissions Open' : 'Usajili Umefunguliwa'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
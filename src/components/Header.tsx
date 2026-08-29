'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  lang: 'en' | 'sw';
  onToggleLang: () => void;
  activeSection?: string;
}

export default function Header({ lang, onToggleLang, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const handleScroll = () => setMobileOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: lang === 'en' ? 'Home' : 'Nyumbani' },
    { href: '/facilities', label: lang === 'en' ? 'Facilities' : 'Miundombinu' },
    { href: '/activities', label: lang === 'en' ? 'Activities' : 'Shughuli' },
    { href: '/graduation', label: lang === 'en' ? 'Graduation' : 'Kuhitimu' },
    { href: '/gallery', label: lang === 'en' ? 'Gallery' : 'Picha' },
    { href: '/admissions', label: lang === 'en' ? 'Admissions' : 'Usajili' },
    { href: '/contact', label: lang === 'en' ? 'Contact' : 'Wasiliana' },
  ];

  const isActive = (href: string) => {
    // On the homepage, use scroll-based activeSection if provided
    if (pathname === '/' || pathname === '/homepage') {
      if (activeSection !== undefined) {
        return activeSection === href;
      }
      return href === '/';
    }
    if (href === '/') return false;
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-school-navy shadow-lg shadow-school-navy/20 border-b border-white/10'
            : 'bg-transparent'
        }`}
        style={{ transition: 'background 0.4s cubic-bezier(0.25,1,0.5,1), box-shadow 0.4s ease' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <AppLogo src="/assets/images/5428A89D-591D-49E3-818A-765903FB3257-1787328230955.jpg" size={40} className="rounded-full overflow-hidden" />
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg leading-tight tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-foreground'}`}>
                Frozen Mountain
              </span>
              <br />
              <span className={`text-xs font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-white/60' : 'text-muted-foreground'}`}>
                School
              </span>
            </div>
            <span className={`font-bold text-base tracking-tight sm:hidden transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-foreground'}`}>
              Frozen Mountain
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative overflow-hidden ${
                  isActive(link.href)
                    ? 'bg-school-red text-white shadow-md shadow-school-red/30'
                    : isScrolled
                    ? 'text-white/80 hover:text-white hover:bg-white/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-200 ${
                isScrolled
                  ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' :'border-border bg-card text-foreground hover:bg-muted'
              }`}
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-school-red font-bold' : (isScrolled ? 'text-white/50' : 'text-muted-foreground')}>EN</span>
              <span className={isScrolled ? 'text-white/30' : 'text-muted-foreground'}>/</span>
              <span className={lang === 'sw' ? 'text-school-red font-bold' : (isScrolled ? 'text-white/50' : 'text-muted-foreground')}>SW</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'}`}
              aria-label="Toggle menu"
            >
              <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-school-navy/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute top-16 left-0 right-0 border-b border-white/10 shadow-2xl px-4 py-6"
            style={{ background: 'linear-gradient(160deg, #0A2463 0%, #071A4A 100%)' }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors min-h-[44px] flex items-center ${
                    isActive(link.href)
                      ? 'bg-school-red text-white' :'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-school-red text-white font-semibold py-3 px-6 rounded-xl transition-all hover:bg-red-700"
              >
                {lang === 'en' ? 'Apply Now' : 'Omba Sasa'}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Frozen Mountain School Dar es Salaam',
  description:
  "Contact Frozen Mountain School in King'anzi A, Ubungo, Dar es Salaam. Call +255 717 437 788, WhatsApp, or visit us. Get directions and school location.",
  keywords: [
  'Frozen Mountain School contact',
  'school contact Dar es Salaam',
  "King'anzi A school location",
  'Ubungo school Tanzania',
  'school phone number Tanzania',
  'school WhatsApp Tanzania'],

  alternates: {
    canonical: 'https://www.frozenmountainschools.com/contact'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.frozenmountainschools.com/contact',
    title: 'Contact Frozen Mountain School — Dar es Salaam',
    description:
    "Reach us at King'anzi A, Ubungo, Dar es Salaam. Call +255 717 437 788 or WhatsApp. We're here to help.",
    siteName: 'Frozen Mountain School',
    images: [
    {
      url: "https://images.unsplash.com/photo-1549272286-edf5af789810",
      width: 1200,
      height: 630,
      alt: 'Frozen Mountain School building at night — contact us'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Frozen Mountain School',
    description: "King'anzi A, Ubungo, Dar es Salaam. +255 717 437 788",
    images: ['https://www.frozenmountainschools.com/assets/images/building_2-1788001323600.jpeg']
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
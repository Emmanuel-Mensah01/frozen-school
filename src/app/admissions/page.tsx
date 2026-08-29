import React from 'react';
import type { Metadata } from 'next';
import AdmissionsClient from './components/AdmissionsClient';

export const metadata: Metadata = {
  title: 'Admissions 2025/2026 — Frozen Mountain School Dar es Salaam',
  description:
  "Apply to Frozen Mountain Nursery, Primary & Secondary School in Dar es Salaam. Admissions open for 2025/2026. NECTA curriculum, day & boarding. Application fee TZS 10,000.",
  keywords: [
  'school admissions Dar es Salaam',
  'Frozen Mountain School admissions',
  'enroll school Tanzania 2025',
  'nursery admissions Ubungo',
  'primary school enrollment Tanzania',
  'secondary school Form I Tanzania',
  'school application Tanzania',
  'NECTA school enrollment'],

  alternates: {
    canonical: 'https://frozenmoun5485.builtwithrocket.new/admissions'
  },
  openGraph: {
    type: 'website',
    url: 'https://frozenmoun5485.builtwithrocket.new/admissions',
    title: 'Admissions 2025/2026 — Frozen Mountain School',
    description:
    "Enroll your child at Frozen Mountain School, Dar es Salaam. Nursery through Form IV. Day & boarding. Apply online today.",
    siteName: 'Frozen Mountain School',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b548bb60-1788001662698.png",
      width: 1200,
      height: 630,
      alt: 'Frozen Mountain School building — admissions open for 2025/2026'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions Open — Frozen Mountain School Dar es Salaam',
    description: 'Apply now for 2025/2026. Nursery, Primary & Secondary. Day & boarding options available.',
    images: ['https://frozenmoun5485.builtwithrocket.new/assets/images/building_1-1788001389374.png']
  }
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
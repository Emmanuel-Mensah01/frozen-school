import React from 'react';
import type { Metadata } from 'next';
import HomepageClient from './components/HomepageClient';

export const metadata: Metadata = {
  title: 'Frozen Mountain School — Best Nursery, Primary & Secondary School in Dar es Salaam',
  description:
  "Frozen Mountain Nursery, Primary & Secondary School in King'anzi A, Ubungo, Dar es Salaam. Ministry-accredited, NECTA curriculum, day & boarding. Enroll your child today.",
  keywords: [
  'Frozen Mountain School',
  'best school Dar es Salaam',
  'nursery school Ubungo',
  'primary school Dar es Salaam',
  'secondary school Tanzania',
  'NECTA school Tanzania',
  'boarding school Dar es Salaam',
  'school admissions Tanzania',
  "King'anzi school",
  'Kwembe school',
  'Ubungo school',
  'Tanzania school fees',
  'best private school Tanzania',
  'shule bora Dar es Salaam'],

  alternates: {
    canonical: 'https://frozenmoun5485.builtwithrocket.new'
  },
  openGraph: {
    type: 'website',
    url: 'https://frozenmoun5485.builtwithrocket.new',
    title: 'Frozen Mountain School — Best Nursery, Primary & Secondary School in Dar es Salaam',
    description:
    "Ministry-accredited school in King'anzi A, Ubungo, Dar es Salaam. Nursery through Form IV. Day & boarding options. Enroll now for 2025/2026.",
    siteName: 'Frozen Mountain School',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a5eb3b18-1788001662665.png",
      width: 1200,
      height: 630,
      alt: "Frozen Mountain School main building with iconic red columns in Dar es Salaam, Tanzania"
    }],

    locale: 'en_TZ'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frozen Mountain School — Best School in Dar es Salaam',
    description:
    "Ministry-accredited Nursery, Primary & Secondary School in Ubungo, Dar es Salaam. NECTA curriculum. Day & boarding. Admissions open 2025/2026.",
    images: ['https://frozenmoun5485.builtwithrocket.new/assets/images/building_1-1788001389374.png']
  }
};

export default function HomePage() {
  return <HomepageClient />;
}
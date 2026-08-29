import React from 'react';
import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://frozenmoun5485.builtwithrocket.new';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frozen Mountain School — Best Nursery, Primary & Secondary School in Dar es Salaam',
    template: '%s | Frozen Mountain School',
  },
  description:
    "Frozen Mountain Nursery, Primary & Secondary School in King'anzi A, Ubungo, Dar es Salaam. Ministry-accredited, NECTA curriculum, day & boarding. Enroll your child today.",
  keywords: [
    'Frozen Mountain School',
    'best school Dar es Salaam',
    'nursery school Tanzania',
    'primary school Dar es Salaam',
    'secondary school Tanzania',
    'NECTA school',
    'boarding school Tanzania',
    'school admissions 2025',
    "King'anzi school",
    'Ubungo school',
    'shule bora Tanzania',
  ],
  authors: [{ name: 'Frozen Mountain School', url: siteUrl }],
  creator: 'Frozen Mountain School',
  publisher: 'Frozen Mountain School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: siteUrl,
    siteName: 'Frozen Mountain School',
    title: 'Frozen Mountain School — Best Nursery, Primary & Secondary School in Dar es Salaam',
    description:
      "Ministry-accredited school in King'anzi A, Ubungo, Dar es Salaam. Nursery through Form IV. Day & boarding. Enroll now for 2025/2026.",
    images: [
      {
        url: `${siteUrl}/assets/images/building_1-1788001389374.png`,
        width: 1200,
        height: 630,
        alt: "Frozen Mountain School main building with iconic red columns in Dar es Salaam, Tanzania",
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frozen Mountain School — Best School in Dar es Salaam',
    description:
      "Ministry-accredited Nursery, Primary & Secondary School in Ubungo, Dar es Salaam. NECTA curriculum. Day & boarding. Admissions open 2025/2026.",
    images: [`${siteUrl}/assets/images/building_1-1788001389374.png`],
    creator: '@FrozenMountainSchool',
  },
  verification: {
    google: 'frozen-mountain-school-google-verification',
  },
  category: 'education',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${siteUrl}/#school`,
      name: 'Frozen Mountain School',
      alternateName: ['Frozen Mountain Nursery and Primary School', 'Frozen Mountain Secondary School'],
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/images/app_logo.png`,
        width: 200,
        height: 200,
      },
      image: [
        `${siteUrl}/assets/images/building_1-1788001389374.png`,
        `${siteUrl}/assets/images/building_2-1788001323600.jpeg`,
        `${siteUrl}/assets/images/ChatGPT_Image_Aug_29__2026__11_00_56_AM-1788001392365.png`,
      ],
      description:
        "Frozen Mountain Nursery, Primary & Secondary School is a Ministry-accredited educational institution in King'anzi A, Ubungo District, Dar es Salaam, Tanzania. Offering Nursery through Form IV education with NECTA curriculum, day and boarding options.",
      telephone: '+255717437788',
      email: 'frozenschools.mountain24@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "King'anzi A, Kwembe Ward",
        addressLocality: 'Ubungo',
        addressRegion: 'Dar es Salaam',
        addressCountry: 'TZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.7924,
        longitude: 39.2083,
      },
      hasMap: 'https://maps.google.com/?q=Frozen+Mountain+School+Dar+es+Salaam',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '17:00',
        },
      ],
      sameAs: [`https://wa.me/255717437788`],
      numberOfStudents: 500,
      accreditation: 'Ministry of Education, Tanzania',
      educationalCredentialAwarded: ['NECTA Primary School Leaving Certificate', 'NECTA Certificate of Secondary Education'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Educational Programmes',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Nursery Education', description: 'Early childhood education for ages 3-5' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Primary Education', description: 'Standard I to Standard VII following NECTA curriculum' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Secondary Education', description: 'Form I to Form IV Ordinary Level following NECTA curriculum' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Frozen Mountain School',
      description: "Official website of Frozen Mountain Nursery, Primary & Secondary School, Dar es Salaam",
      publisher: { '@id': `${siteUrl}/#school` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Admissions', item: `${siteUrl}/admissions` },
        { '@type': 'ListItem', position: 3, name: 'Gallery', item: `${siteUrl}/gallery` },
        { '@type': 'ListItem', position: 4, name: 'Facilities', item: `${siteUrl}/facilities` },
        { '@type': 'ListItem', position: 5, name: 'Activities', item: `${siteUrl}/activities` },
        { '@type': 'ListItem', position: 6, name: 'Graduation', item: `${siteUrl}/graduation` },
        { '@type': 'ListItem', position: 7, name: 'Contact', item: `${siteUrl}/contact` },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Frozen Mountain School',
      image: `${siteUrl}/assets/images/building_1-1788001389374.png`,
      priceRange: '$$',
      telephone: '+255717437788',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "King'anzi A, Kwembe Ward",
        addressLocality: 'Ubungo',
        addressRegion: 'Dar es Salaam',
        addressCountry: 'TZ',
      },
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
</head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
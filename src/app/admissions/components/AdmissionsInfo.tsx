'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const steps = {
  en: [
    {
      step: '01',
      title: 'Express Interest Online',
      desc: 'Fill in the short online application form below to let us know you\'re interested. This is not the official admission form.',
      icon: 'ComputerDesktopIcon',
    },
    {
      step: '02',
      title: 'Visit the School',
      desc: 'Come to the school in person to collect and complete the official admission form. Pay the TZS 10,000 form & interview fee at the school.',
      icon: 'BuildingOfficeIcon',
    },
    {
      step: '03',
      title: 'Attend the Interview',
      desc: 'Your child will attend a brief interview/assessment at the school on the agreed date.',
      icon: 'UserIcon',
    },
    {
      step: '04',
      title: 'Receive Outcome',
      desc: 'The school will inform you of the admission outcome and provide next steps for enrollment.',
      icon: 'CheckBadgeIcon',
    },
  ],
  sw: [
    {
      step: '01',
      title: 'Onyesha Nia Mtandaoni',
      desc: 'Jaza fomu fupi ya maombi ya mtandaoni hapa chini kutufahamisha una nia. Hii si fomu rasmi ya usajili.',
      icon: 'ComputerDesktopIcon',
    },
    {
      step: '02',
      title: 'Tembelea Shule',
      desc: 'Nenda shuleni binafsi kupata na kukamilisha fomu rasmi ya usajili. Lipa ada ya TZS 10,000 ya fomu na mahojiano shuleni.',
      icon: 'BuildingOfficeIcon',
    },
    {
      step: '03',
      title: 'Hudhuria Mahojiano',
      desc: 'Mtoto wako atahudhuria mahojiano/tathmini fupi shuleni katika tarehe iliyokubaliwa.',
      icon: 'UserIcon',
    },
    {
      step: '04',
      title: 'Pokea Matokeo',
      desc: 'Shule itakufahamisha matokeo ya usajili na kutoa hatua za mwisho za kuandikisha.',
      icon: 'CheckBadgeIcon',
    },
  ],
};

const requirements = {
  en: [
    'Original and copy of birth certificate',
    'Previous school report/progress card (if applicable)',
    'Passport-size photos (2 copies)',
    'Parent/guardian national ID copy',
    'Completed official admission form (obtained at school)',
    'Payment of TZS 10,000 admission form & interview fee (at school)',
  ],
  sw: [
    'Cheti cha kuzaliwa (asili na nakala)',
    'Ripoti ya shule ya awali/kadi ya maendeleo (ikitumika)',
    'Picha za pasipoti (nakala 2)',
    'Nakala ya kitambulisho cha taifa cha mzazi/mlezi',
    'Fomu rasmi ya usajili iliyokamilika (inapatikana shuleni)',
    'Malipo ya TZS 10,000 ya fomu ya usajili na mahojiano (shuleni)',
  ],
};

export default function AdmissionsInfo({ lang }: Props) {
  const stepsData = steps[lang];
  const reqs = requirements[lang];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Process */}
        <div className="mb-14">
          <div className="section-tag mb-4">
            <Icon name="ArrowPathIcon" size={14} />
            {lang === 'en' ? 'Admission Process' : 'Mchakato wa Usajili'}
          </div>
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight mb-8">
            {lang === 'en' ? 'How to Apply' : 'Jinsi ya Kuomba'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stepsData.map((s, i) => (
              <div key={i} className="warm-card rounded-2xl p-5 relative overflow-hidden">
                <span className="absolute top-3 right-4 text-4xl font-black text-primary/8 select-none">
                  {s.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={s.icon as 'ComputerDesktopIcon'} size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="section-tag mb-4">
              <Icon name="ClipboardDocumentCheckIcon" size={14} />
              {lang === 'en' ? 'Requirements' : 'Mahitaji'}
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-5">
              {lang === 'en' ? 'What to Bring' : 'Nini Kuleta'}
            </h2>
            <ul className="space-y-3">
              {reqs.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important notice */}
          <div className="space-y-4">
            <div className="warm-card rounded-2xl p-6 bg-school-navy/5 border-school-navy/20">
              <div className="flex items-start gap-3">
                <Icon name="ExclamationCircleIcon" size={20} className="text-school-navy shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-2">
                    {lang === 'en' ? 'Important Notice' : 'Taarifa Muhimu'}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === 'en' ?'The official admission form must be completed physically at the school. No online payment is required or accepted. The TZS 10,000 fee covers both the admission form and the interview.' :'Fomu rasmi ya usajili lazima ikamilishwe kimwili shuleni. Hakuna malipo ya mtandaoni yanayohitajika au kukubaliwa. Ada ya TZS 10,000 inajumuisha fomu ya usajili na mahojiano.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="warm-card rounded-2xl p-6 bg-school-red/5 border-school-red/20">
              <div className="flex items-start gap-3">
                <Icon name="CurrencyDollarIcon" size={20} className="text-school-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">
                    {lang === 'en' ? 'School Fees' : 'Ada za Shule'}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lang === 'en' ?'For current school fee information, please contact the school directly by phone or visit in person.' :'Kwa taarifa za sasa za ada za shule, tafadhali wasiliana na shule moja kwa moja kwa simu au tembelea binafsi.'}
                  </p>
                  <a
                    href="tel:+255717437788"
                    className="inline-flex items-center gap-1.5 text-sm text-school-navy font-semibold mt-2 hover:underline"
                  >
                    <Icon name="PhoneIcon" size={14} />
                    +255 717 437 788
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
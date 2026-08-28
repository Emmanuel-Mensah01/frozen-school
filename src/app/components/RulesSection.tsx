'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const rulesEn = [
  'All students must attend school regularly.',
  'Students are required to always be punctual.',
  'School starts at 7:30 am.',
  'The school gate will be closed at 9:00 am; pupils who arrive after this time will not be allowed to enter.',
  'Students must remain quiet, attentive, and well-behaved during lessons.',
  'Students must wear a neat school uniform and maintain high standards of personal hygiene.',
  'Hair plaiting is permitted for girls; boys must keep their hair short and tidy.',
  'Students are not allowed to bring valuables or large sums of money to school.',
  'The use of vulgar or abusive language is strictly prohibited. Any student who steals or engages in fighting that causes serious injury to others may be dismissed from school.',
  'Students must show respect to teachers, elders, and national as well as school symbols.',
  'Students must keep the school campus clean and must not damage any school property.',
  'Students are responsible for taking care of their personal belongings.',
  'Students are not allowed to leave the school campus during learning hours without permission.',
  'Students are required to speak English while at school.',
  'Students must maintain a minimum of 90% attendance to qualify for promotion to the next class. Any student who is absent for 14 consecutive days without authorization may be removed from the school register, including cases related to non-payment of school fees.',
];

const rulesSw = [
  'Wanafunzi wote lazima wahudhirie shule mara kwa mara.',
  'Wanafunzi wanatakiwa kuwa wachapakazi wakati wote.',
  'Shule inaanza saa moja na nusu asubuhi (7:30 am).',
  'Lango la shule litafungwa saa tatu asubuhi (9:00 am); wanafunzi wanaofika baada ya wakati huu hawataruhusiwa kuingia.',
  'Wanafunzi lazima wakae kimya, makini, na wenye tabia nzuri wakati wa masomo.',
  'Wanafunzi lazima wavae sare ya shule safi na kudumisha viwango vya juu vya usafi wa kibinafsi.',
  'Kusuka nywele kunaruhusiwa kwa wasichana; wavulana lazima waweke nywele zao fupi na nadhifu.',
  'Wanafunzi hawaruhusiwi kuleta vitu vya thamani au pesa nyingi shuleni.',
  'Matumizi ya lugha chafu au ya matusi yamepigwa marufuku kabisa. Mwanafunzi yeyote anayeiba au kushiriki katika mapigano yanayosababisha majeraha makubwa anaweza kufukuzwa shuleni.',
  'Wanafunzi lazima waoneshe heshima kwa walimu, wazee, na alama za kitaifa pamoja na za shule.',
  'Wanafunzi lazima wahifadhi mazingira ya shule safi na wasisababishe uharibifu wa mali yoyote ya shule.',
  'Wanafunzi wanawajibika kutunza vitu vyao vya kibinafsi.',
  'Wanafunzi hawaruhusiwi kuondoka katika mazingira ya shule wakati wa masomo bila ruhusa.',
  'Wanafunzi wanatakiwa kuzungumza Kiingereza wakiwa shuleni.',
  'Wanafunzi lazima wadumishe angalau 90% ya mahudhurio ili kustahili kupandishwa darasa. Mwanafunzi yeyote anayekosekana kwa siku 14 mfululizo bila idhini anaweza kuondolewa kwenye daftari la shule, ikiwa ni pamoja na kesi zinazohusiana na kutolipa ada za shule.',
];

// Icon mapping for rule categories
const ruleIcons = [
  'CalendarDaysIcon', 'ClockIcon', 'ClockIcon', 'LockClosedIcon',
  'SpeakerXMarkIcon', 'SparklesIcon', 'UserIcon', 'BanknotesIcon',
  'ShieldExclamationIcon', 'HandRaisedIcon', 'TrashIcon', 'BriefcaseIcon',
  'MapPinIcon', 'ChatBubbleBottomCenterTextIcon', 'ChartBarIcon',
];

export default function RulesSection({ lang }: Props) {
  const [ruleLang, setRuleLang] = useState<'en' | 'sw'>(lang);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setRuleLang(lang); }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    // Small delay to allow DOM to update after language switch
    const timeout = setTimeout(() => {
      sectionRef.current?.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => {
        // If already in viewport, mark visible immediately
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    }, 50);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [ruleLang]);

  const rules = ruleLang === 'en' ? rulesEn : rulesSw;

  return (
    <section id="rules" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(10,36,99,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 fade-in-up">
          <div>
            <div className="section-tag mb-3">
              <Icon name="ClipboardDocumentListIcon" size={14} />
              {lang === 'en' ? 'School Rules' : 'Kanuni za Shule'}
            </div>
            <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
              {lang === 'en' ? 'Rules & Regulations' : 'Sheria na Kanuni'}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg">
              {lang === 'en' ?'All students are expected to uphold these rules to ensure a safe, respectful, and productive learning environment.' :'Wanafunzi wote wanatarajiwa kuzingatia kanuni hizi kuhakikisha mazingira ya kujifunza salama, ya heshima, na yenye tija.'}
            </p>
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-2 bg-muted rounded-full p-1 w-fit shrink-0">
            <button
              onClick={() => setRuleLang('en')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                ruleLang === 'en' ? 'bg-school-navy text-white shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setRuleLang('sw')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                ruleLang === 'sw' ? 'bg-school-navy text-white shadow' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Kiswahili
            </button>
          </div>
        </div>

        {/* Rules as elite cards grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {rules.map((rule, i) => (
            <div
              key={`${ruleLang}-${i}`}
              className="bg-white rounded-2xl p-4 flex gap-4 items-start border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group scale-in"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              {/* Number badge */}
              <div className="shrink-0 flex flex-col items-center gap-1.5">
                <span className="w-8 h-8 rounded-xl bg-school-navy/10 text-school-navy text-xs font-bold flex items-center justify-center group-hover:bg-school-red group-hover:text-white transition-all duration-300">
                  {i + 1}
                </span>
              </div>
              {/* Icon + text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2">
                  <Icon
                    name={ruleIcons[i] as 'CalendarDaysIcon'}
                    size={15}
                    className="text-school-navy/40 shrink-0 mt-0.5 group-hover:text-school-red transition-colors duration-300"
                  />
                  <p className="text-sm text-foreground leading-relaxed">{rule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 p-4 bg-school-navy/5 border border-school-navy/15 rounded-2xl flex items-start gap-3 fade-in-up" style={{ transitionDelay: '0.3s' }}>
          <Icon name="InformationCircleIcon" size={18} className="text-school-navy shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            {lang === 'en' ?'These rules apply to all students. Parents/guardians are encouraged to review them with their children.' :'Kanuni hizi zinatumika kwa wanafunzi wote. Wazazi/walezi wanashauriwa kuzipitia na watoto wao.'}
          </p>
        </div>
      </div>
    </section>
  );
}
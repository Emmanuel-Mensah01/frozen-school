'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Props {
  lang: 'en' | 'sw';
}

const grades = {
  en: [
    'Nursery (Baby Class)',
    'Nursery (Middle Class)',
    'Nursery (Top Class)',
    'Standard 1',
    'Standard 2',
    'Standard 3',
    'Standard 4',
    'Standard 5',
    'Standard 6',
    'Standard 7',
    'Form I (Secondary)',
    'Form II (Secondary)',
    'Form III (Secondary)',
    'Form IV (Secondary)',
  ],
  sw: [
    'Chekechea (Darasa la Chini)',
    'Chekechea (Darasa la Kati)',
    'Chekechea (Darasa la Juu)',
    'Darasa la 1',
    'Darasa la 2',
    'Darasa la 3',
    'Darasa la 4',
    'Darasa la 5',
    'Darasa la 6',
    'Darasa la 7',
    'Kidato cha I (Sekondari)',
    'Kidato cha II (Sekondari)',
    'Kidato cha III (Sekondari)',
    'Kidato cha IV (Sekondari)',
  ],
};

interface FormData {
  guardianName: string;
  childName: string;
  phone: string;
  email: string;
  grade: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function ApplicationForm({ lang }: Props) {
  const [todayStr, setTodayStr] = React.useState('');

  React.useEffect(() => {
    setTodayStr(new Date().toISOString().split('T')[0]);
  }, []);

  const [form, setForm] = useState<FormData>({
    guardianName: '',
    childName: '',
    phone: '',
    email: '',
    grade: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const gradeOptions = grades[lang];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.guardianName || !form.childName || !form.phone || !form.grade) {
      setError(
        lang === 'en' ?'Please fill in all required fields.' :'Tafadhali jaza sehemu zote zinazohitajika.'
      );
      return;
    }
    setLoading(true);

    // Simulate form submission (mailto link approach)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const subject = encodeURIComponent(
      `Admission Application - ${form.childName} - ${form.grade}`
    );
    const body = encodeURIComponent(
      `NEW ADMISSION APPLICATION\n\n` +
        `Guardian/Parent Name: ${form.guardianName}\n` +
        `Child's Name: ${form.childName}\n` +
        `Grade Applying For: ${form.grade}\n` +
        `Phone Number: ${form.phone}\n` +
        `Email: ${form.email || 'Not provided'}\n` +
        `Preferred Interview Date: ${form.preferredDate || 'Flexible'}\n` +
        `Preferred Interview Time: ${form.preferredTime || 'Flexible'}\n` +
        `Additional Message: ${form.message || 'None'}\n\n` +
        `Submitted via Frozen Mountain School Website`
    );

    window.location.href = `mailto:frozenschools.mountain24@gmail.com?subject=${subject}&body=${body}`;

    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-card border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary transition-colors';

  const labelClass = 'block text-sm font-semibold text-foreground mb-1.5';

  if (submitted) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="warm-card rounded-3xl p-12 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground">
              {lang === 'en' ? 'Application Submitted!' : 'Maombi Yametumwa!'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {lang === 'en' ?'Thank you for your interest in Frozen Mountain School. Your application has been forwarded to our email. The school will contact you to confirm the interview date and next steps. Please remember to visit the school in person to complete the official admission form and pay the TZS 10,000 fee.' :'Asante kwa nia yako katika Shule ya Frozen Mountain. Maombi yako yametumwa kwenye barua pepe yetu. Shule itawasiliana nawe kuthibitisha tarehe ya mahojiano na hatua za mwisho. Tafadhali kumbuka kutembelea shule binafsi kukamilisha fomu rasmi ya usajili na kulipa ada ya TZS 10,000.'}
            </p>
            <a href="tel:+255717437788" className="btn-primary mt-2">
              <Icon name="PhoneIcon" size={16} />
              {lang === 'en' ? 'Call the School' : 'Piga Simu Shule'}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="section-tag mb-4">
          <Icon name="PencilSquareIcon" size={14} />
          {lang === 'en' ? 'Online Application' : 'Maombi ya Mtandaoni'}
        </div>
        <h2 className="text-section-title font-extrabold text-foreground tracking-tight mb-2">
          {lang === 'en' ? 'Express Your Interest' : 'Onyesha Nia Yako'}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {lang === 'en' ?'Fill in this short form to let us know you\'re interested. This is not the official admission form — you will still need to visit the school in person.'
            : 'Jaza fomu hii fupi kutufahamisha una nia. Hii si fomu rasmi ya usajili — bado utahitaji kutembelea shule binafsi.'}
        </p>

        <form onSubmit={handleSubmit} className="warm-card rounded-3xl p-6 sm:p-8 space-y-5">
          {/* Grade */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? 'Grade / Level Applying For' : 'Darasa / Kiwango Kinachotarajiwa'}
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">
                {lang === 'en' ? 'Select grade...' : 'Chagua darasa...'}
              </option>
              {gradeOptions.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Guardian Name */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? "Parent / Guardian's Name" : 'Jina la Mzazi / Mlezi'}
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="guardianName"
              value={form.guardianName}
              onChange={handleChange}
              placeholder={lang === 'en' ? 'e.g. John Mwangi' : 'mfano. John Mwangi'}
              className={inputClass}
              required
            />
          </div>

          {/* Child Name */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? "Child's / Ward's Name" : 'Jina la Mtoto / Mwanafunzi'}
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="childName"
              value={form.childName}
              onChange={handleChange}
              placeholder={lang === 'en' ? 'e.g. Amina Mwangi' : 'mfano. Amina Mwangi'}
              className={inputClass}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? "Parent / Guardian's Phone Number" : 'Nambari ya Simu ya Mzazi / Mlezi'}
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+255 7XX XXX XXX"
              className={inputClass}
              required
            />
          </div>

          {/* Email (optional) */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? 'Email Address (optional)' : 'Barua Pepe (si lazima)'}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={lang === 'en' ? 'your@email.com' : 'barua@pepe.com'}
              className={inputClass}
            />
          </div>

          {/* Preferred Interview Date & Time */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                {lang === 'en' ? 'Preferred Interview Date' : 'Tarehe Inayopendelewa ya Mahojiano'}
              </label>
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                min={todayStr}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                {lang === 'en' ? 'Preferred Time' : 'Wakati Unaopendelewa'}
              </label>
              <input
                type="time"
                name="preferredTime"
                value={form.preferredTime}
                onChange={handleChange}
                min="07:30"
                max="15:00"
                className={inputClass}
              />
            </div>
          </div>

          {/* Additional message */}
          <div>
            <label className={labelClass}>
              {lang === 'en' ? 'Additional Information (optional)' : 'Taarifa za Ziada (si lazima)'}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder={
                lang === 'en' ?'Any other information you would like to share...' :'Taarifa nyingine yoyote ungependa kushiriki...'
              }
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm flex items-center gap-2">
              <Icon name="ExclamationCircleIcon" size={16} />
              {error}
            </p>
          )}

          {/* Notice */}
          <div className="bg-muted/60 rounded-xl p-4 flex items-start gap-3">
            <Icon name="InformationCircleIcon" size={16} className="text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {lang === 'en' ?'This online form is for expressing interest only. No payment is required here. The official admission form must be collected and completed at the school, along with the TZS 10,000 fee.' :'Fomu hii ya mtandaoni ni kwa kuonyesha nia tu. Hakuna malipo yanayohitajika hapa. Fomu rasmi ya usajili lazima ichukuliwe na kukamilishwe shuleni, pamoja na ada ya TZS 10,000.'}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                {lang === 'en' ? 'Sending...' : 'Inatuma...'}
              </>
            ) : (
              <>
                <Icon name="PaperAirplaneIcon" size={18} />
                {lang === 'en' ? 'Submit Application' : 'Tuma Maombi'}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
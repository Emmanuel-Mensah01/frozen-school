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
    setError('');

    try {
      const res = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send application');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-200 shadow-sm';

  const labelClass = 'block text-sm font-semibold text-slate-700 mb-1.5';

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl p-12 flex flex-col items-center gap-5 shadow-xl border border-slate-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-200">
              <Icon name="CheckCircleIcon" size={40} variant="solid" className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                {lang === 'en' ? 'Application Submitted!' : 'Maombi Yametumwa!'}
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
            </div>
            <p className="text-slate-600 leading-relaxed text-sm max-w-sm">
              {lang === 'en' ?'Thank you for your interest in Frozen Mountain School. Your application has been sent directly to our admissions team. We will contact you shortly to confirm the interview date and next steps. Please remember to visit the school in person to complete the official admission form and pay the TZS 20,000 fee.' :'Asante kwa nia yako katika Shule ya Frozen Mountain. Maombi yako yametumwa moja kwa moja kwa timu yetu ya usajili. Tutawasiliana nawe hivi karibuni kuthibitisha tarehe ya mahojiano na hatua za mwisho. Tafadhali kumbuka kutembelea shule binafsi kukamilisha fomu rasmi ya usajili na kulipa ada ya TZS 20,000.'}
            </p>
            <a
              href="tel:+255717437788"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all duration-200 mt-2"
            >
              <Icon name="PhoneIcon" size={16} />
              {lang === 'en' ? 'Call the School' : 'Piga Simu Shule'}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">
            <Icon name="PencilSquareIcon" size={14} />
            {lang === 'en' ? 'Online Application' : 'Maombi ya Mtandaoni'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
            {lang === 'en' ? 'Express Your Interest' : 'Onyesha Nia Yako'}
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-md mx-auto text-sm">
            {lang === 'en'
              ? "Fill in this short form and your application will be sent directly to our admissions team. This is not the official admission form — you will still need to visit the school in person."
              : 'Jaza fomu hii fupi na maombi yako yatatumwa moja kwa moja kwa timu yetu. Hii si fomu rasmi ya usajili — bado utahitaji kutembelea shule binafsi.'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">

          {/* Card Top Accent */}
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" />

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

            {/* Section: Student Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Icon name="AcademicCapIcon" size={14} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  {lang === 'en' ? 'Student Information' : 'Taarifa za Mwanafunzi'}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Grade */}
                <div>
                  <label className={labelClass}>
                    {lang === 'en' ? 'Grade / Level Applying For' : 'Darasa / Kiwango Kinachotarajiwa'}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="grade"
                      value={form.grade}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
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
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <Icon name="ChevronDownIcon" size={16} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Child Name */}
                <div>
                  <label className={labelClass}>
                    {lang === 'en' ? "Child's / Ward's Full Name" : 'Jina Kamili la Mtoto / Mwanafunzi'}
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
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-slate-200" />

            {/* Section: Parent Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Icon name="UserIcon" size={14} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  {lang === 'en' ? 'Parent / Guardian Details' : 'Taarifa za Mzazi / Mlezi'}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Guardian Name */}
                <div>
                  <label className={labelClass}>
                    {lang === 'en' ? "Parent / Guardian's Full Name" : 'Jina Kamili la Mzazi / Mlezi'}
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

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      {lang === 'en' ? 'Phone Number' : 'Nambari ya Simu'}
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
                  <div>
                    <label className={labelClass}>
                      {lang === 'en' ? 'Email Address' : 'Barua Pepe'}
                      <span className="text-slate-400 text-xs font-normal ml-1">
                        ({lang === 'en' ? 'optional' : 'si lazima'})
                      </span>
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
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-slate-200" />

            {/* Section: Interview Preference */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <Icon name="CalendarDaysIcon" size={14} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  {lang === 'en' ? 'Interview Preference' : 'Upendeleo wa Mahojiano'}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    {lang === 'en' ? 'Preferred Interview Date' : 'Tarehe Inayopendelewa'}
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
            </div>

            {/* Additional message */}
            <div>
              <label className={labelClass}>
                {lang === 'en' ? 'Additional Information' : 'Taarifa za Ziada'}
                <span className="text-slate-400 text-xs font-normal ml-1">
                  ({lang === 'en' ? 'optional' : 'si lazima'})
                </span>
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

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                <Icon name="ExclamationCircleIcon" size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Notice */}
            <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3 border border-blue-100">
              <Icon name="InformationCircleIcon" size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed">
                {lang === 'en' ?'This online form is for expressing interest only. No payment is required here. The official admission form must be collected and completed at the school, along with the TZS 20,000 fee.' :'Fomu hii ya mtandaoni ni kwa kuonyesha nia tu. Hakuna malipo yanayohitajika hapa. Fomu rasmi ya usajili lazima ichukuliwe na kukamilishwe shuleni, pamoja na ada ya TZS 20,000.'}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {loading ? (
                <>
                  <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                  {lang === 'en' ? 'Sending Application...' : 'Inatuma Maombi...'}
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

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Icon name="LockClosedIcon" size={13} className="text-slate-400" />
            {lang === 'en' ? 'Secure & Private' : 'Salama & Faragha'}
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Icon name="EnvelopeIcon" size={13} className="text-slate-400" />
            {lang === 'en' ? 'Sent directly to school' : 'Inatumwa moja kwa moja shuleni'}
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Icon name="ClockIcon" size={13} className="text-slate-400" />
            {lang === 'en' ? 'Response within 24–48 hrs' : 'Jibu ndani ya masaa 24–48'}
          </div>
        </div>

      </div>
    </section>
  );
}
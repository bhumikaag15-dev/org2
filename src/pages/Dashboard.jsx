import React, { useState } from 'react';
import { Calendar, Bell, BookOpen, Heart, Smile, Meh, Frown, CheckCircle } from 'lucide-react';

export default function Dashboard({ userName, setActiveTab }) {
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif text-deepPlum">Good morning, {userName || 'Mother'} 🌷</h1>
        <p className="text-sm text-stone-500">Take care of yourself, one day at a time.</p>
      </div>

      {/* Pregnancy Progress Card */}
      <div className="glass-card rounded-3xl p-6 border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blush-50 to-warmCream">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-sageGreen">Current Progress</span>
          <h2 className="text-2xl font-serif text-deepPlum">24 Weeks Pregnant</h2>
          <p className="text-xs text-stone-600">Trimester 2 • Estimated due date: <span className="font-medium">18 November 2026</span></p>
          <div className="pt-2 flex items-center gap-4 text-xs font-medium text-stone-500">
            <span>112 Days Remaining</span>
          </div>
        </div>

        {/* Visual Progress Wheel */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="52" stroke="#fbeee6" strokeWidth="10" fill="transparent" />
            <circle cx="64" cy="64" r="52" stroke="#d98880" strokeWidth="10" strokeDasharray="326.7" strokeDashoffset="130" strokeLinecap="round" fill="transparent" />
          </svg>
          <span className="absolute font-serif text-lg text-deepPlum font-semibold">60%</span>
        </div>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Medications', detail: '2 pending today', icon: Bell, action: 'reminders' },
          { label: 'Appointments', detail: 'Next: Mon, 10:00 AM', icon: Calendar, action: 'appointments' },
          { label: 'Learning Hub', detail: '3 articles recommended', icon: BookOpen, action: 'education' },
          { label: 'Care Finder', detail: 'Local centers nearby', icon: Heart, action: 'facilities' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              onClick={() => setActiveTab(item.action)}
              className="p-5 rounded-3xl bg-white border border-rose-100/70 hover:shadow-md transition cursor-pointer space-y-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-softPeach flex items-center justify-center text-deepPlum">
                <Icon className="w-5 h-5 text-dustyRose" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-deepPlum text-sm">{item.label}</h4>
                <p className="text-xs text-stone-500 mt-1">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Check-In */}
      <div className="p-6 rounded-3xl bg-white border border-rose-100 space-y-4">
        <h3 className="text-lg font-serif text-deepPlum">How are you feeling today?</h3>
        <div className="flex gap-4">
          {[
            { label: 'Great', icon: Smile },
            { label: 'Okay', icon: Meh },
            { label: 'Not Great', icon: Frown },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.label}
                onClick={() => setMood(m.label)}
                className={`flex-1 p-3 rounded-2xl border text-xs font-medium flex flex-col items-center gap-2 transition ${
                  mood === m.label ? 'border-dustyRose bg-blush-50 text-deepPlum' : 'border-stone-200 text-stone-600'
                }`}
              >
                <Icon className="w-5 h-5 text-dustyRose" />
                {m.label}
              </button>
            );
          })}
        </div>
        <textarea
          placeholder="Add optional private note for today..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-dustyRose"
          rows="2"
        />
      </div>
    </div>
  );
}
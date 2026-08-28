import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';

export default function EducationPage() {
  const [filter, setFilter] = useState('All');

  const articles = [
    { id: 1, category: 'Nutrition', title: 'Essential Micronutrients in Second Trimester', readTime: '4 min read' },
    { id: 2, category: 'Wellness', title: 'Safe Breathing & Relaxation Techniques', readTime: '5 min read' },
    { id: 3, category: 'Postnatal', title: 'Understanding Early Newborn Sleep Patterns', readTime: '6 min read' },
    { id: 4, category: 'Nutrition', title: 'Hydration Guidelines for Expectant Mothers', readTime: '3 min read' },
  ];

  const filtered = filter === 'All' ? articles : articles.filter(a => a.category === filter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-deepPlum">Maternal Education Hub</h1>
        <p className="text-sm text-stone-500">Evidence-informed resources for antenatal and postnatal understanding.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-rose-100 pb-3 overflow-x-auto text-xs font-medium">
        {['All', 'Nutrition', 'Wellness', 'Postnatal'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition ${
              filter === cat ? 'bg-deepPlum text-white' : 'bg-white text-stone-600 hover:bg-softPeach'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((art) => (
          <div key={art.id} className="p-5 rounded-2xl bg-white border border-rose-100 space-y-3 hover:shadow-sm transition">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-sageGreen">{art.category}</span>
            <h4 className="font-serif font-semibold text-deepPlum text-base">{art.title}</h4>
            <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
              <span>{art.readTime}</span>
              <button className="text-dustyRose font-medium hover:underline">Read Guide →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
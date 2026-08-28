import React from 'react';
import { Heart, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-warmCream py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-deepPlum text-sm">MaatriCare</span>
          <span>— Supporting UN Sustainable Development Goal 3 (Good Health & Well-being)</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-dustyRose fill-dustyRose" />
          <span>for safe, informed motherhood. Educational software framework.</span>
        </div>
      </div>
    </footer>
  );
}
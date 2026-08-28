import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function FacilityFinderPage() {
  const facilities = [
    { name: "City Maternity & General Hospital", distance: "1.2 km away", address: "123 Healthcare Boulevard", phone: "+1 800 555 0199", open: "24/7 Emergency Care" },
    { name: "Sunrise Women's Wellness Clinic", distance: "3.4 km away", address: "45 Care Lane, Suite 200", phone: "+1 800 555 0142", open: "08:00 AM - 08:00 PM" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-deepPlum">Maternal Healthcare Directory</h1>
        <p className="text-sm text-stone-500">Locate verified regional maternal care centers and clinics.</p>
      </div>

      <div className="grid gap-4">
        {facilities.map((f, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white border border-rose-100 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif font-semibold text-lg text-deepPlum">{f.name}</h3>
                <p className="text-xs text-stone-500">{f.address}</p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-softPeach text-deepPlum">
                {f.distance}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs text-stone-600 pt-2 border-t border-rose-50">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-sageGreen" /> {f.open}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-sageGreen" /> {f.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
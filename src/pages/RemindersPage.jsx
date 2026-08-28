import React, { useState } from 'react';
import { Plus, Check, Pill } from 'lucide-react';

export default function RemindersPage() {
  const [reminders, setReminders] = useState([
    { id: 1, name: 'Prenatal Multivitamin', dose: '1 Tablet', time: '08:00 AM', taken: true },
    { id: 2, name: 'Calcium & Vitamin D3', dose: '1 Tablet', time: '02:00 PM', taken: false },
    { id: 3, name: 'Iron Supplement', dose: '1 Tablet', time: '08:00 PM', taken: false },
  ]);

  const toggleTaken = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, taken: !r.taken } : r));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-deepPlum">Daily Supplements & Medication</h1>
        <p className="text-sm text-stone-500">Educational reminder system. Maintain schedule provided by your care provider.</p>
      </div>

      <div className="p-4 rounded-2xl bg-softPeach/80 border border-rose-200 text-xs text-stone-700">
        <strong>Important Disclaimer:</strong> MaatriCare does not prescribe or alter prescriptions. Always confirm medication dosage with your doctor.
      </div>

      <div className="space-y-3">
        {reminders.map((item) => (
          <div 
            key={item.id} 
            className={`p-4 rounded-2xl border transition flex items-center justify-between ${
              item.taken ? 'bg-warmCream/60 border-rose-100 opacity-75' : 'bg-white border-rose-100 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.taken ? 'bg-sageGreen/20 text-sageGreen' : 'bg-blush-100 text-deepPlum'}`}>
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`font-semibold text-sm ${item.taken ? 'line-through text-stone-500' : 'text-deepPlum'}`}>
                  {item.name}
                </h4>
                <p className="text-xs text-stone-500">{item.dose} • {item.time}</p>
              </div>
            </div>

            <button 
              onClick={() => toggleTaken(item.id)}
              className={`p-2 rounded-full border transition ${
                item.taken 
                  ? 'bg-sageGreen text-white border-sageGreen' 
                  : 'border-stone-300 text-transparent hover:border-dustyRose'
              }`}
            >
              <Check className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
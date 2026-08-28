import React from 'react';
import { LayoutDashboard, Calendar, Bell, BookOpen, MapPin, AlertTriangle, HeartPulse } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'reminders', label: 'Medications', icon: Bell },
    { id: 'warning', label: 'Warning Signs', icon: AlertTriangle, badge: 'Crucial' },
    { id: 'education', label: 'Education Hub', icon: BookOpen },
    { id: 'facilities', label: 'Care Finder', icon: MapPin },
  ];

  return (
    <aside className="w-64 glass-card border-r border-rose-100/50 p-4 min-h-[calc(100vh-73px)] hidden md:block">
      <div className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-blush-100 text-deepPlum shadow-sm' 
                  : 'text-stone-600 hover:bg-warmCream hover:text-deepPlum'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-deepPlum' : 'text-mutedMauve'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-200 text-deepPlum">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-2xl bg-softPeach/60 border border-rose-100 text-xs text-stone-600">
        <div className="flex items-center gap-1.5 font-semibold text-deepPlum mb-1">
          <HeartPulse className="w-4 h-4 text-dustyRose" /> Maternal Support
        </div>
        Need urgent assistance? Always reach out directly to your care provider or emergency health line.
      </div>
    </aside>
  );
}
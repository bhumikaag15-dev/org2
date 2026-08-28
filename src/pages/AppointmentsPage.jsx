import React, { useState } from 'react';
import { Plus, Calendar as CalendarIcon, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([
    { id: 1, title: 'Routine Antenatal Check-up', doctor: 'Dr. Priya Sharma', facility: 'City Care Hospital', date: '2026-09-07', time: '10:00 AM', status: 'Upcoming' },
    { id: 2, title: 'Anomaly Scan (Ultrasound)', doctor: 'Dr. Mehta', facility: 'Apollo Healthcare Center', date: '2026-09-15', time: '02:30 PM', status: 'Upcoming' }
  ]);

  const [form, setForm] = useState({ title: '', doctor: '', facility: '', date: '', time: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    setAppointments([...appointments, { ...form, id: Date.now(), status: 'Upcoming' }]);
    setForm({ title: '', doctor: '', facility: '', date: '', time: '' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-deepPlum">Appointment Tracker</h1>
        <p className="text-sm text-stone-500">Organize antenatal visits and consultations.</p>
      </div>

      <form onSubmit={handleAdd} className="p-6 rounded-3xl bg-white border border-rose-100 space-y-4">
        <h3 className="font-serif text-lg text-deepPlum">Schedule New Visit</h3>
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <input 
            type="text" placeholder="Appointment Title / Reason" 
            value={form.title} onChange={(e) => setForm({...form, title: e.target.value})}
            className="p-3 rounded-xl border border-stone-200" required 
          />
          <input 
            type="text" placeholder="Doctor / Practitioner Name" 
            value={form.doctor} onChange={(e) => setForm({...form, doctor: e.target.value})}
            className="p-3 rounded-xl border border-stone-200" 
          />
          <input 
            type="text" placeholder="Hospital / Clinic Facility" 
            value={form.facility} onChange={(e) => setForm({...form, facility: e.target.value})}
            className="p-3 rounded-xl border border-stone-200" 
          />
          <div className="flex gap-2">
            <input 
              type="date" value={form.date} onChange={(e) => setForm({...form, date: e.target.value})}
              className="p-3 rounded-xl border border-stone-200 flex-1" required 
            />
            <input 
              type="time" value={form.time} onChange={(e) => setForm({...form, time: e.target.value})}
              className="p-3 rounded-xl border border-stone-200 flex-1" 
            />
          </div>
        </div>
        <button type="submit" className="px-5 py-2.5 rounded-full bg-deepPlum text-white text-xs font-medium flex items-center gap-2">
          <Plus className="w-4 h-4" /> Save Appointment
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="font-serif text-xl text-deepPlum">Upcoming Visits</h3>
        {appointments.map((app) => (
          <div key={app.id} className="p-5 rounded-2xl bg-white border border-rose-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-semibold text-deepPlum">{app.title}</h4>
              <p className="text-xs text-stone-500">{app.doctor} • {app.facility}</p>
              <div className="flex items-center gap-4 text-xs text-sageGreen pt-1">
                <span className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" /> {app.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {app.time}</span>
              </div>
            </div>
            <span className="self-start md:self-center px-3 py-1 rounded-full bg-blush-100 text-deepPlum text-xs font-medium">
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
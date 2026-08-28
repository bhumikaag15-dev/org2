import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AppointmentsPage from './pages/AppointmentsPage';
import RemindersPage from './pages/RemindersPage';
import WarningSignsPage from './pages/WarningSignsPage';
import EducationPage from './pages/EducationPage';
import FacilityFinderPage from './pages/FacilityFinderPage';

export default function App() {
  const [user, setUser] = useState(null); // Dynamic user object { name: '' }
  const [activeTab, setActiveTab] = useState('landing');
  const [authMode, setAuthMode] = useState(null); // 'login' or 'signup'
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!inputName.trim()) return;
    setUser({ name: inputName });
    setAuthMode(null);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('landing');
  };

  const renderContent = () => {
    // Show Auth Form Modal/Screen if requested
    if (authMode) {
      return (
        <div className="max-w-md mx-auto my-12 p-8 glass-card rounded-3xl border border-rose-100 space-y-6">
          <h2 className="text-2xl font-serif text-deepPlum text-center">
            {authMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-600 font-medium mb-1">Your Full Name</label>
              <input 
                type="text" 
                required
                placeholder="Enter your name" 
                value={inputName} 
                onChange={(e) => setInputName(e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-dustyRose"
              />
            </div>
            <div>
              <label className="block text-stone-600 font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="name@example.com" 
                value={inputEmail} 
                onChange={(e) => setInputEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 focus:outline-none focus:border-dustyRose"
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-3 rounded-full bg-deepPlum text-white font-medium hover:bg-opacity-90 transition"
            >
              {authMode === 'signup' ? 'Sign Up & Continue' : 'Log In'}
            </button>
          </form>
          <button 
            onClick={() => setAuthMode(null)} 
            className="w-full text-xs text-stone-500 hover:underline text-center block"
          >
            Cancel
          </button>
        </div>
      );
    }

    if (!user || activeTab === 'landing') {
      return <LandingPage onGetStarted={() => setAuthMode('signup')} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard userName={user.name} setActiveTab={setActiveTab} />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'reminders':
        return <RemindersPage />;
      case 'warning':
        return <WarningSignsPage />;
      case 'education':
        return <EducationPage />;
      case 'facilities':
        return <FacilityFinderPage />;
      default:
        return <Dashboard userName={user.name} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-warmCream text-stone-800">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user}
        onLoginClick={() => setAuthMode('login')}
        onSignupClick={() => setAuthMode('signup')}
        onLogout={handleLogout} 
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {user && activeTab !== 'landing' && !authMode && (
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        <main className="flex-1 p-6 md:p-10">
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
}
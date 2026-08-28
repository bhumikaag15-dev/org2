import React from 'react';
import { Flower2, Shield } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, user, onLoginClick, onSignupClick, onLogout }) {
  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-rose-100/50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab(user ? 'dashboard' : 'landing')}
        >
          <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-deepPlum">
            <Flower2 className="w-6 h-6 text-dustyRose animate-pulse" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-deepPlum">MaatriCare</span>
            <span className="block text-[10px] text-sageGreen font-medium uppercase tracking-wider">SDG 3 Aligned</span>
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveTab('warning')} 
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-200 hover:bg-red-100 transition"
            >
              <Shield className="w-3.5 h-3.5" /> Warning Signs
            </button>
            <div className="flex items-center gap-3 border-l border-rose-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-softPeach flex items-center justify-center text-deepPlum font-semibold text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <button 
                onClick={onLogout}
                className="text-xs text-stone-500 hover:text-deepPlum transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <button 
              onClick={onLoginClick} 
              className="text-sm font-medium text-deepPlum hover:text-dustyRose transition px-3 py-2"
            >
              Log In
            </button>
            <button 
              onClick={onSignupClick} 
              className="text-sm font-medium bg-deepPlum text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 shadow-sm transition"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
import React, { useState, useEffect } from 'react';
import { Sidebar } from '../dashboard/Sidebar';
import { Bell, Sun, Moon, Search, Menu } from 'lucide-react';
import { useFarmerContext } from '../../context/FarmerContext';

export const DesktopLayout = ({ children }) => {
  const { isDark, toggleTheme } = useFarmerContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] transition-colors duration-200 font-sans text-slate-900 dark:text-[#F8FAFC]">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <div className="ml-0 md:ml-64 flex flex-col h-screen">
        {/* Global Topbar */}
        <div className="h-20 flex-shrink-0 px-4 md:px-8 flex items-center justify-between border-b border-transparent">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2 mr-2 rounded-lg text-slate-600 dark:text-[#94A3B8] hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search Bar matching the new mockup */}
          <div className="flex-1 max-w-xl">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search products, orders, customers..." 
                className="w-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-green-500 dark:focus:border-green-500"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full border-2 border-white dark:border-[#020617]"></span>
            </button>

            {/* Small Profile Info */}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-[#334155]">
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-[#1E293B] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Ramesh Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-800 dark:text-[#F8FAFC]">Ramesh Yadav</p>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8] flex items-center gap-1">
                  Farmer
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-70"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

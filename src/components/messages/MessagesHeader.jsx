import React from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';

export const MessagesHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-[#F8FAFC]">Messages</h2>
        <p className="text-slate-500 dark:text-[#94A3B8] mt-1 text-sm">Communicate with your customers.</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
        <div className="relative flex-grow xl:w-64">
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-green-500 dark:focus:border-green-500 text-slate-800 dark:text-[#F8FAFC]"
          />
          <Search className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
        </div>
        
        <button className="flex items-center justify-between gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-[#F8FAFC] min-w-[160px]">
          <span>All Conversations</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        
        <button className="flex items-center gap-2 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/30 bg-green-50/50 dark:bg-green-500/10 px-4 py-2.5 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-500/20 transition-colors text-sm whitespace-nowrap">
          <Check className="w-4 h-4" />
          <span>Mark all as read</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Download, Calendar } from 'lucide-react';

export const EarningsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-[#F8FAFC]">Earnings</h2>
        <p className="text-slate-500 dark:text-[#94A3B8] mt-1 text-sm">Track your income and manage your finances.</p>
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none flex items-center justify-between gap-3 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-700 dark:text-[#F8FAFC] px-4 py-2.5 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors shadow-sm">
          <span>This Month (May 1 - May 31, 2024)</span>
          <Calendar className="w-4 h-4 text-slate-400" />
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/30 bg-green-50/50 dark:bg-green-500/10 px-4 py-2.5 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-500/20 transition-colors text-sm">
          <Download className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>
    </div>
  );
};

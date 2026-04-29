import React from 'react';
import { Download } from 'lucide-react';

export const OrdersHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-[#F8FAFC]">Orders</h2>
        <p className="text-slate-500 dark:text-[#94A3B8] mt-1 text-sm">Manage and track all your customer orders.</p>
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-700 dark:text-[#F8FAFC] px-4 py-2.5 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors shadow-sm text-sm">
          <Download className="w-4 h-4" />
          <span>Export Orders</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';

export const ProductsFilters = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 mb-6">
      {/* Search Input */}
      <div className="relative flex-1">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-green-500 dark:focus:border-green-500 text-slate-800 dark:text-[#F8FAFC]"
        />
        <Search className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
      </div>
      
      {/* Dropdowns */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
        <button className="flex items-center justify-between gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-[#F8FAFC] min-w-[140px]">
          <span>All Categories</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        <button className="flex items-center justify-between gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-[#F8FAFC] min-w-[120px]">
          <span>All Status</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        <button className="flex items-center justify-between gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-[#F8FAFC] min-w-[150px]">
          <span>Sort: Newest First</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BottomBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-xl p-5 mt-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 dark:bg-green-800/40 p-2.5 rounded-full text-green-600 dark:text-green-400">
          <Store className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC]">Keep your store updated</h3>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-0.5">Add new products regularly to get more orders and visibility.</p>
        </div>
      </div>
      <button onClick={() => navigate('/add-product')} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm dark:shadow-green-500/20">
        Add Product
      </button>
    </div>
  );
};

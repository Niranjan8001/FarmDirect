import React from 'react';
import { Plus, Package, CheckCircle2, AlertTriangle, XCircle, Camera, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SummaryItem = ({ icon: Icon, label, value, iconColor }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-[#334155] last:border-0">
    <div className="flex items-center gap-3">
      <Icon className={`w-4 h-4 ${iconColor}`} />
      <span className="text-sm text-slate-600 dark:text-[#94A3B8]">{label}</span>
    </div>
    <span className="font-semibold text-slate-800 dark:text-[#F8FAFC]">{value}</span>
  </div>
);

const CategoryItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-[#334155] last:border-0">
    <div className="flex items-center gap-3">
      <div className="text-slate-400">
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-sm text-slate-600 dark:text-[#94A3B8]">{label}</span>
    </div>
    <span className="font-semibold text-slate-800 dark:text-[#F8FAFC]">{value}</span>
  </div>
);

export const ProductsRightPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
      
      {/* Product Summary */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Product Summary</h3>
        
        <div className="mb-4">
          <SummaryItem icon={Package} label="Total Products" value="12" iconColor="text-slate-400" />
          <SummaryItem icon={CheckCircle2} label="Active Products" value="10" iconColor="text-green-500" />
          <SummaryItem icon={AlertTriangle} label="Low Stock" value="1" iconColor="text-amber-500" />
          <SummaryItem icon={XCircle} label="Out of Stock" value="1" iconColor="text-red-500" />
        </div>
        
        <button 
          onClick={() => navigate('/add-product')}
          className="w-full bg-green-50 hover:bg-green-100 dark:bg-green-500/10 dark:hover:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-500/20 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC]">Categories</h3>
          <button className="text-xs font-medium text-green-600 dark:text-green-400 hover:underline">Manage</button>
        </div>
        
        <div className="mb-4">
          {/* using generic package icon for all as placeholders based on mockup */}
          <CategoryItem icon={Package} label="Vegetables" value="6" />
          <CategoryItem icon={Package} label="Grains & Cereals" value="2" />
          <CategoryItem icon={Package} label="Pulses & Legumes" value="1" />
          <CategoryItem icon={Package} label="Oils & Ghee" value="1" />
          <CategoryItem icon={Package} label="Upcoming" value="2" />
          <CategoryItem icon={Package} label="Others" value="2" />
        </div>

        <button className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 hover:text-green-700 dark:hover:text-green-300">
          View all categories <span>→</span>
        </button>
      </div>

      {/* Tips to Boost Sales */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Tips to Boost Sales</h3>
        
        <div className="space-y-4 mb-4">
          <div className="flex gap-3">
            <div className="text-green-500 shrink-0 mt-0.5">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">Add high quality photos</p>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Products with photos get 3x more orders.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="text-slate-400 shrink-0 mt-0.5">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">Keep stock updated</p>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Updated stock builds customer trust.</p>
            </div>
          </div>
        </div>

        <button className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 hover:text-green-700 dark:hover:text-green-300">
          View all tips <span>→</span>
        </button>
      </div>

    </div>
  );
};

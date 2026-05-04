import React from 'react';
import { StatCards } from '../components/dashboard/StatCards';
import { ProductTable } from '../components/dashboard/ProductTable';
import { RightPanel } from '../components/dashboard/RightPanel';
import { BottomBanner } from '../components/dashboard/BottomBanner';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DesktopLayout } from '../components/layout/DesktopLayout';

export const DashboardView = () => {
  const navigate = useNavigate();

  return (
    <DesktopLayout>
      <div className="flex flex-col laptop:flex-row gap-fluid items-start">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0 w-full">
          {/* Content Header */}
          <div className="flex flex-col sm-mobile:flex-row items-start sm-mobile:items-center justify-between mb-8 gap-4">
            <div className="min-w-0">
              <h2 className="text-fluid-h2 font-bold text-slate-800 dark:text-[#F8FAFC] truncate">Good morning, Ramesh! 👋</h2>
              <p className="text-fluid-sm text-slate-500 dark:text-[#94A3B8] mt-1">Here's what's happening with your farm store today.</p>
            </div>
            
            <button 
              onClick={() => navigate('/add-product')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/20 active:scale-95 w-full sm-mobile:w-auto text-sm shrink-0"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Product</span>
            </button>
          </div>

          <div className="mb-8">
            <StatCards />
          </div>
          
          <div className="mb-8">
            <ProductTable />
          </div>
          
          <BottomBanner />
        </div>

        {/* Right Panel Column */}
        <aside className="w-full laptop:w-[320px] desktop:w-[380px] shrink-0 sticky top-28">
          <RightPanel />
        </aside>

      </div>
    </DesktopLayout>
  );
};

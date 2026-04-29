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
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          {/* Content Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-[#F8FAFC]">Good morning, Ramesh! 👋</h2>
              <p className="text-slate-500 dark:text-[#94A3B8] mt-1">Here's what's happening with your farm store today.</p>
            </div>
            
            <button 
              onClick={() => navigate('/add-product')}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm dark:shadow-green-500/20 w-full sm:w-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          <div className="mb-6">
            <StatCards />
          </div>
          <ProductTable />
          <BottomBanner />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <RightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

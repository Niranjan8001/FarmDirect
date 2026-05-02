import React from 'react';
import { ChevronDown, MapPin, CheckCircle, PlusCircle, ClipboardList, DollarSign, User } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const ProfileCard = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden">
    <div className="max-xs:h-16 h-24 overflow-hidden relative">
      <img 
        src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800&h=300" 
        alt="Farm Cover" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="max-xs:px-3 max-xs:pb-3 px-5 pb-5">
      <div className="relative flex justify-between items-start">
        <div className="max-xs:w-12 max-xs:h-12 w-16 h-16 rounded-full border-4 border-white dark:border-[#1E293B] overflow-hidden -mt-8 max-xs:-mt-6 relative z-10 bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" 
            alt="Ramesh Yadav" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="max-xs:text-base text-xl font-bold text-slate-800 dark:text-[#F8FAFC]">Ramesh Yadav</h3>
        <div className="flex items-center gap-1 max-xs:text-xs text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
          <MapPin className="w-3.5 h-3.5 max-xs:w-3 max-xs:h-3" />
          <span>Jaipur, Rajasthan</span>
        </div>
        
        <div className="mt-3 max-xs:mt-2 inline-flex items-center gap-1.5 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 px-2 py-1 rounded text-xs font-medium border border-green-100 dark:border-green-500/20">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Verified Farmer</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-xs:gap-2 mt-6 max-xs:mt-4 pt-5 max-xs:pt-3 border-t border-slate-100 dark:border-[#334155] text-center">
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC] flex items-center justify-center gap-1 max-xs:text-sm">
            4.8 <span className="text-amber-400 text-sm max-xs:text-xs">★</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 max-xs:text-[10px]">Rating</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC] max-xs:text-sm">245</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 max-xs:text-[10px]">Orders</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC] max-xs:text-sm">1.2K</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 max-xs:text-[10px]">Followers</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Desktop Quick Action Item (row layout) ──────────────────── */
const QuickActionItem = ({ icon: Icon, title, description, onClick }) => (
  <button onClick={onClick} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors w-full text-left group">
    <div className="bg-green-50 dark:bg-green-500/10 p-2 rounded-lg text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{title}</p>
      <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">{description}</p>
    </div>
  </button>
);

/* ── Mobile Quick Action Item (icon grid cell) ───────────────── */
const MobileQuickActionItem = ({ icon: Icon, title, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors group">
    <div className="bg-green-50 dark:bg-green-500/10 p-2.5 rounded-xl text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <p className="font-medium text-[11px] text-slate-700 dark:text-slate-300 text-center leading-tight">{title}</p>
  </button>
);

const QuickActions = () => {
  const navigate = useNavigate();
  const actions = [
    { icon: PlusCircle, title: 'Add Product', description: 'List a new product', path: '/add-product' },
    { icon: ClipboardList, title: 'Orders', description: 'View and process orders', path: '/orders' },
    { icon: DollarSign, title: 'Earnings', description: 'Check your earnings', path: '/earnings' },
    { icon: User, title: 'Profile', description: 'Update your farm details', path: '/profile' },
  ];

  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl max-xs:p-3 p-5">
      <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] max-xs:mb-2 mb-4 max-xs:text-sm">Quick Actions</h3>
      
      {/* Desktop: Row list */}
      <div className="max-xs:hidden space-y-1">
        {actions.map((a) => (
          <QuickActionItem key={a.path} icon={a.icon} title={a.title} description={a.description} onClick={() => navigate(a.path)} />
        ))}
      </div>

      {/* Mobile: 2×2 icon grid */}
      <div className="hidden max-xs:grid grid-cols-2 gap-1">
        {actions.map((a) => (
          <MobileQuickActionItem key={a.path} icon={a.icon} title={a.title} onClick={() => navigate(a.path)} />
        ))}
      </div>
    </div>
  );
};

const RecentOrders = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC]">Recent Orders</h3>
        <button onClick={() => navigate('/orders')} className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 hover:text-green-700 dark:hover:text-green-300">
          View all orders <span>→</span>
        </button>
      </div>
      
      <div className="space-y-4">
        {[
          { id: '#FD1256', date: 'May 22, 2024', amount: '₹480', status: 'Delivered' },
          { id: '#FD1255', date: 'May 22, 2024', amount: '₹760', status: 'Processing' },
          { id: '#FD1254', date: 'May 21, 2024', amount: '₹320', status: 'Delivered' }
        ].map((order) => (
          <div key={order.id} className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-[#334155] last:border-0 last:pb-0">
            <div>
              <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">Order {order.id}</p>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.amount}</p>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                order.status === 'Delivered' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400'
                  : 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400'
              }`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-[#334155] flex justify-between items-center">
        <span className="text-sm font-medium text-slate-600 dark:text-[#94A3B8]">Total Orders</span>
        <span className="font-bold text-slate-800 dark:text-[#F8FAFC]">32</span>
      </div>
    </div>
  );
};

export const RightPanel = () => {
  return (
    <div className="max-xs:w-full w-80 flex-shrink-0 flex flex-col max-xs:gap-3 gap-6 max-xs:pt-0 pt-[88px]">
      <ProfileCard />
      <QuickActions />
    </div>
  );
};

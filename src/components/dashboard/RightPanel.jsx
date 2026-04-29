import React from 'react';
import { ChevronDown, MapPin, CheckCircle, PlusCircle, ClipboardList, DollarSign, User } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const ProfileCard = () => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden">
    <div className="h-24 overflow-hidden relative">
      <img 
        src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800&h=300" 
        alt="Farm Cover" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="px-5 pb-5">
      <div className="relative flex justify-between items-start">
        <div className="w-16 h-16 rounded-full border-4 border-white dark:border-[#1E293B] overflow-hidden -mt-8 relative z-10 bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" 
            alt="Ramesh Yadav" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="text-xl font-bold text-slate-800 dark:text-[#F8FAFC]">Ramesh Yadav</h3>
        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-[#94A3B8] mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>Jaipur, Rajasthan</span>
        </div>
        
        <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 px-2 py-1 rounded text-xs font-medium border border-green-100 dark:border-green-500/20">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Verified Farmer</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-100 dark:border-[#334155] text-center">
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC] flex items-center justify-center gap-1">
            4.8 <span className="text-amber-400 text-sm">★</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1">Rating</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC]">245</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1">Orders</p>
        </div>
        <div>
          <p className="font-bold text-slate-800 dark:text-[#F8FAFC]">1.2K</p>
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1">Followers</p>
        </div>
      </div>
    </div>
  </div>
);

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

const QuickActions = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
      <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Quick Actions</h3>
      <div className="space-y-1">
        <QuickActionItem icon={PlusCircle} title="Add New Product" description="List a new product" onClick={() => navigate('/add-product')} />
        <QuickActionItem icon={ClipboardList} title="Manage Orders" description="View and process orders" onClick={() => navigate('/orders')} />
        <QuickActionItem icon={DollarSign} title="View Earnings" description="Check your earnings" onClick={() => navigate('/earnings')} />
        <QuickActionItem icon={User} title="Farm Profile" description="Update your farm details" onClick={() => navigate('/profile')} />
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
    <div className="w-80 flex-shrink-0 flex flex-col gap-6 pt-[88px]">
      <ProfileCard />
      <QuickActions />
      <RecentOrders />
    </div>
  );
};

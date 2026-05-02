import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ClipboardList, 
  DollarSign, 
  MessageSquare, 
  Star, 
  User, 
  Settings,
  HeadphonesIcon,
  X
} from 'lucide-react';

import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      active 
        ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 font-medium' 
        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-[#1E293B]'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-64 border-r border-slate-200 dark:border-[#334155] bg-white dark:bg-[#020617] flex flex-col pt-6 pb-4 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo and Close */}
        <div className="px-6 flex items-center justify-between mb-8">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigate('/dashboard')}
          >
            <div className="bg-green-500 rounded-lg p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22S4 14 4 8a8 8 0 1116 0c0 6-8 14-8 14zm0-11a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-800 dark:text-[#F8FAFC] leading-none">FarmDirect</h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">From Farm. To You.</p>
            </div>
          </div>
          
          <button 
            className="md:hidden p-1.5 -mr-2 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-[#1E293B]"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
      <nav className="flex-1 px-4 space-y-1">
        <NavItem icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/dashboard'} onClick={() => navigate('/dashboard')} />
        <NavItem icon={Package} label="My Products" active={location.pathname === '/inventory'} onClick={() => navigate('/inventory')} />
        <NavItem icon={ClipboardList} label="Orders" active={location.pathname.startsWith('/orders')} onClick={() => navigate('/orders')} />
        <NavItem icon={DollarSign} label="Earnings" active={location.pathname === '/earnings'} onClick={() => navigate('/earnings')} />
        <NavItem icon={MessageSquare} label="Messages" active={location.pathname === '/messages'} onClick={() => navigate('/messages')} />
        <NavItem icon={Star} label="Reviews" active={location.pathname === '/reviews'} onClick={() => navigate('/reviews')} />
        <NavItem icon={User} label="Farm Profile" active={location.pathname === '/profile'} onClick={() => navigate('/profile')} />
        <NavItem icon={Settings} label="Settings" active={location.pathname === '/settings'} onClick={() => navigate('/settings')} />
      </nav>

      {/* Need Help */}
      <div className="px-4 mt-auto">
        <button
          onClick={() => navigate('/need-help')}
          className={`w-full rounded-2xl p-4 flex items-center gap-3 transition-all cursor-pointer ${
            location.pathname === '/need-help'
              ? 'bg-green-100 dark:bg-green-500/15 ring-1 ring-green-400/30'
              : 'bg-green-50 dark:bg-[#0F172A] hover:bg-green-100 dark:hover:bg-green-500/10'
          }`}
        >
          <div className="bg-white dark:bg-[#1E293B] p-2 rounded-full shadow-sm text-green-600 dark:text-green-400">
            <HeadphonesIcon className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">Need Help?</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Contact Support</p>
          </div>
        </button>
      </div>
    </aside>
    </>
  );
};

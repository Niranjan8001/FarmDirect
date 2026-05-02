import React from 'react';
import { Eye, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const recentOrders = [
  {
    id: 'ORD-2847',
    customer: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    items: 'Tomatoes, Cucumbers',
    total: '₹540',
    date: 'Today, 10:32 AM',
    status: 'Delivered',
  },
  {
    id: 'ORD-2846',
    customer: 'Amit Patel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    items: 'Whole Wheat, Potatoes',
    total: '₹1,250',
    date: 'Today, 9:15 AM',
    status: 'Processing',
  },
  {
    id: 'ORD-2845',
    customer: 'Neha Gupta',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    items: 'Red Onions',
    total: '₹210',
    date: 'Yesterday',
    status: 'Shipped',
  },
  {
    id: 'ORD-2844',
    customer: 'Raj Malhotra',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    items: 'Tomatoes, Red Onions, Potatoes',
    total: '₹780',
    date: 'Yesterday',
    status: 'Delivered',
  },
  {
    id: 'ORD-2843',
    customer: 'Sunita Devi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    items: 'Cucumbers, Whole Wheat',
    total: '₹640',
    date: '28 Apr',
    status: 'Cancelled',
  },
];

const statusStyles = {
  Delivered: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',
  Processing: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  Shipped: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
};

/* ── Mobile Order Card (shown ≤420px) ─────────────────────────── */
const MobileOrderCard = ({ order, onClick }) => (
  <div 
    className="p-3 border-b border-slate-100 dark:border-[#334155] last:border-0 cursor-pointer active:bg-slate-50 dark:active:bg-[#0F172A] transition-colors"
    onClick={onClick}
  >
    {/* Top Row: Order ID + Date | Status */}
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-2 min-w-0">
        <span className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.id}</span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500">·</span>
        <span className="text-[10px] text-slate-500 dark:text-[#94A3B8] truncate">{order.date}</span>
      </div>
      <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ml-2 ${statusStyles[order.status]}`}>
        {order.status}
      </span>
    </div>
    {/* Middle: Items (truncated) */}
    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mb-1">{order.items}</p>
    {/* Bottom: Total */}
    <p className="text-sm font-bold text-slate-800 dark:text-[#F8FAFC]">{order.total}</p>
  </div>
);

export const ProductTable = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden max-xs:mt-3 mt-6">
      <div className="flex items-center justify-between max-xs:p-3 p-5 border-b border-slate-100 dark:border-[#334155]">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] max-xs:text-sm">Recent Orders</h3>
        <button onClick={() => navigate('/orders')} className="max-xs:text-xs text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center gap-1">
          View all orders
          <span>→</span>
        </button>
      </div>

      {/* ── Mobile Stacked Cards (≤420px) ───────────────────────── */}
      <div className="hidden max-xs:block">
        {recentOrders.map((order) => (
          <MobileOrderCard key={order.id} order={order} onClick={() => navigate(`/orders/${order.id}`)} />
        ))}
      </div>

      {/* ── Desktop/Tablet Table (>420px) ───────────────────────── */}
      <div className="overflow-x-auto max-xs:hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 dark:border-[#334155]">
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Order ID</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Customer</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Items</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Total</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Status</th>
              <th className="py-3 px-5 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <tr 
                key={order.id} 
                className={`group hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors ${
                  index !== recentOrders.length - 1 ? 'border-b border-slate-100 dark:border-[#334155]' : ''
                }`}
              >
                <td className="py-3 px-5">
                  <span className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.id}</span>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">{order.date}</p>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-3">
                    <img 
                      src={order.avatar} 
                      alt={order.customer} 
                      className="w-8 h-8 rounded-full object-cover shadow-sm border border-slate-200 dark:border-[#334155]"
                    />
                    <span className="font-medium text-sm text-slate-700 dark:text-slate-300">{order.customer}</span>
                  </div>
                </td>
                <td className="py-3 px-5">
                  <span className="text-sm text-slate-600 dark:text-slate-300 truncate max-w-[160px] block">{order.items}</span>
                </td>
                <td className="py-3 px-5">
                  <span className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.total}</span>
                </td>
                <td className="py-3 px-5">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => navigate(`/orders/${order.id}`)}
                      className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

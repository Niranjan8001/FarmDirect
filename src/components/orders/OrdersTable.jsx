import React from 'react';
import { Eye, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OrdersTable = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 dark:border-[#334155] bg-slate-50/50 dark:bg-[#0F172A]/50">
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Order ID</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Customer</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Products</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Quantity</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Amount</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Order Date</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Status</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8]">Payment</th>
              <th className="py-3 px-6 text-xs font-medium text-slate-500 dark:text-[#94A3B8] text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr 
                key={order.id} 
                className={`group hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors ${
                  index !== orders.length - 1 ? 'border-b border-slate-100 dark:border-[#334155]' : ''
                }`}
              >
                <td className="py-3 px-6">
                  <span className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.id}</span>
                </td>
                <td className="py-3 px-6">
                  <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.customer}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>{order.location}</span>
                  </div>
                </td>
                <td className="py-3 px-6">
                  <div className="flex items-center gap-2">
                    <img 
                      src={order.img} 
                      alt={order.product} 
                      className="w-8 h-8 rounded-md object-cover border border-slate-200 dark:border-[#334155]"
                    />
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.product}</p>
                      <p className="text-xs text-slate-500 dark:text-[#94A3B8]">{order.weight}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6">
                  <span className="text-sm text-slate-600 dark:text-[#CBD5E1]">{order.quantity}</span>
                </td>
                <td className="py-3 px-6">
                  <span className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{order.amount}</span>
                </td>
                <td className="py-3 px-6">
                  <p className="text-sm text-slate-800 dark:text-[#F8FAFC]">{order.date}</p>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">{order.time}</p>
                </td>
                <td className="py-3 px-6">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                    order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400' :
                    order.status === 'Confirmed' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                    order.status === 'Pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400' :
                    'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${
                    order.payment === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400' : 
                    order.payment === 'COD' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400' :
                    'bg-slate-100 text-slate-700 dark:bg-[#0F172A] dark:text-slate-400'
                  }`}>
                    {order.payment}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button 
                    onClick={() => navigate(`/orders/${order.id.replace('#', '')}`)}
                    className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors inline-flex"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-100 dark:border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-[#94A3B8]">
          Showing <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">1</span> to <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">8</span> of <span className="font-medium text-slate-800 dark:text-[#F8FAFC]">32</span> orders
        </p>
        
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-green-600 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] text-sm font-medium transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] text-sm font-medium transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] text-sm font-medium transition-colors">
            4
          </button>
          
          <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button className="flex items-center gap-2 ml-4 p-1.5 px-3 rounded-md border border-slate-200 dark:border-[#334155] text-sm text-slate-600 dark:text-[#94A3B8] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors">
            <span>10 / page</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

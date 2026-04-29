import React from 'react';
import { Eye, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const ordersData = [
  { id: '#ORD1256', customer: 'Priya Sharma', location: 'Jaipur, RJ', product: 'Fresh Tomatoes', weight: '5 kg', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹125', date: 'May 22, 2024', time: '10:30 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1255', customer: 'Amit Verma', location: 'Jaipur, RJ', product: 'Cucumbers', weight: '3 kg', img: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', quantity: '3 kg', amount: '₹60', date: 'May 22, 2024', time: '09:15 AM', status: 'Processing', payment: 'Paid' },
  { id: '#ORD1254', customer: 'Neha Singh', location: 'Sikar, RJ', product: 'Potatoes', weight: '10 kg', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', quantity: '10 kg', amount: '₹180', date: 'May 21, 2024', time: '07:45 PM', status: 'Shipped', payment: 'Paid' },
  { id: '#ORD1253', customer: 'Rahul Mehta', location: 'Ajmer, RJ', product: 'Red Onions', weight: '5 kg', img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹110', date: 'May 21, 2024', time: '04:30 PM', status: 'Confirmed', payment: 'COD' },
  { id: '#ORD1252', customer: 'Sunita Joshi', location: 'Jaipur, RJ', product: 'Whole Wheat', weight: '5 kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹120', date: 'May 20, 2024', time: '11:20 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1251', customer: 'Vikram Patel', location: 'Tonk, RJ', product: 'Green Chilies', weight: '250 g', img: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop', quantity: '250 g', amount: '₹25', date: 'May 20, 2024', time: '08:10 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1250', customer: 'Pooja Meena', location: 'Jaipur, RJ', product: 'Mustard Oil', weight: '1 L', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop', quantity: '1 L', amount: '₹180', date: 'May 19, 2024', time: '06:35 PM', status: 'Cancelled', payment: 'Refunded' },
  { id: '#ORD1249', customer: 'Mohit Kumar', location: 'Jaipur, RJ', product: 'Fresh Tomatoes', weight: '3 kg', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', quantity: '3 kg', amount: '₹75', date: 'May 19, 2024', time: '02:40 PM', status: 'Pending', payment: 'Paid' },
];

export const OrdersTable = () => {
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
            {ordersData.map((order, index) => (
              <tr 
                key={order.id} 
                className={`group hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors ${
                  index !== ordersData.length - 1 ? 'border-b border-slate-100 dark:border-[#334155]' : ''
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
                  <button className="p-1.5 rounded-md border border-slate-200 dark:border-[#334155] text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#1E293B] transition-colors inline-flex">
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

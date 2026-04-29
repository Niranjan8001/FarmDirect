import React from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Priya Sharma', order: '#ORD1256', message: 'Yes, tomatoes will be delivered to...', time: '10:30 AM', unread: 2, active: true, img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop' },
  { id: 2, name: 'Amit Verma', order: '#ORD1255', message: 'Thank you! I have received the order.', time: 'Yesterday', unread: 1, active: false, img: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop' },
  { id: 3, name: 'Neha Singh', order: '#ORD1254', message: 'When will my order be delivered?', time: 'May 22', unread: 0, active: false, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop' },
  { id: 4, name: 'Rahul Mehta', order: '#ORD1253', message: 'Please let me know if available.', time: 'May 21', unread: 0, active: false, img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop' },
  { id: 5, name: 'Sunita Joshi', order: '#ORD1252', message: 'Can I get 5 kg instead of 10 kg?', time: 'May 20', unread: 0, active: false, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop' },
  { id: 6, name: 'Vikram Patel', order: 'General Inquiry', message: 'Do you deliver to Tonk city?', time: 'May 19', unread: 0, active: false, img: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop' },
];

export const ContactList = () => {
  return (
    <div className="w-full lg:w-80 flex-shrink-0 flex flex-col bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden h-fit lg:h-[700px]">
      <div className="p-4 border-b border-slate-100 dark:border-[#334155]">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-[#334155] rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-green-500 text-slate-800 dark:text-[#F8FAFC]"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto">
        {contacts.map((contact) => (
          <button 
            key={contact.id} 
            className={`w-full p-4 flex items-start gap-3 border-b border-slate-50 dark:border-[#334155]/30 last:border-0 hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors text-left group ${contact.active ? 'bg-green-50/50 dark:bg-green-500/5 border-l-4 border-l-green-600 dark:border-l-green-500' : ''}`}
          >
            <img src={contact.img} alt={contact.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <p className="text-sm font-bold text-slate-800 dark:text-[#F8FAFC] truncate">{contact.name}</p>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">{contact.time}</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-[#94A3B8] font-medium mb-1">{contact.order}</p>
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs text-slate-500 dark:text-[#94A3B8] truncate">{contact.message}</p>
                {contact.unread > 0 && (
                  <span className="bg-green-600 dark:bg-green-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-100 dark:border-[#334155] bg-slate-50/30 dark:bg-[#0F172A]/30">
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Showing 1 to 6 of 24 conversations</p>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-400"><ChevronLeft className="w-3 h-3" /></button>
            <button className="w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-green-600 text-white rounded">1</button>
            <button className="w-5 h-5 flex items-center justify-center text-[10px] font-medium text-slate-600 dark:text-[#94A3B8]">2</button>
            <button className="p-1 rounded bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-[#94A3B8]"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

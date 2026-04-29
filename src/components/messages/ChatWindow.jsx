import React from 'react';
import { MoreVertical, ExternalLink, Paperclip, Smile, Send, CheckCheck } from 'lucide-react';

export const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl overflow-hidden h-[700px]">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 dark:border-[#334155] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop" alt="Priya" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-[#F8FAFC]">Priya Sharma</h4>
            <p className="text-[10px] text-slate-500 dark:text-[#94A3B8]">Order #ORD1256 • May 22, 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-[#334155] rounded-lg text-xs font-medium text-slate-700 dark:text-[#F8FAFC] hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Order</span>
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC]">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        <div className="flex justify-center">
          <span className="text-[10px] font-bold text-slate-400 dark:text-[#94A3B8] uppercase tracking-widest bg-slate-50 dark:bg-[#0F172A] px-3 py-1 rounded-full">Today</span>
        </div>
        
        {/* Incoming */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop" alt="Priya" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
          <div>
            <div className="bg-slate-100 dark:bg-[#0F172A] p-3 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-[#F8FAFC]">
              Hi! I placed an order for tomatoes (5 kg). I just wanted to confirm when it will be delivered?
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">10:15 AM</span>
          </div>
        </div>
        
        {/* Outgoing */}
        <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Farmer" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
          <div className="text-right">
            <div className="bg-green-600 dark:bg-green-600/90 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm">
              Hello Priya! Thank you for your order. When when my order be delivered tomorrow between 10 AM - 12 PM.
            </div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[10px] text-slate-400">10:18 AM</span>
              <CheckCheck className="w-3 h-3 text-green-500" />
            </div>
          </div>
        </div>
        
        {/* Incoming */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop" alt="Priya" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
          <div>
            <div className="bg-slate-100 dark:bg-[#0F172A] p-3 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-[#F8FAFC]">
              Great! Also, will the tomatoes be fresh and firm?
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">10:20 AM</span>
          </div>
        </div>
        
        {/* Outgoing */}
        <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Farmer" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
          <div className="text-right">
            <div className="bg-green-600 dark:bg-green-600/90 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm">
              Yes, absolutely! We ensure farm fresh and high quality produce.
            </div>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[10px] text-slate-400">10:22 AM</span>
              <CheckCheck className="w-3 h-3 text-green-500" />
            </div>
          </div>
        </div>
        
        {/* Incoming */}
        <div className="flex items-start gap-3 max-w-[80%]">
          <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop" alt="Priya" className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
          <div>
            <div className="bg-slate-100 dark:bg-[#0F172A] p-3 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-[#F8FAFC]">
              Thank you! Looking forward to it.
            </div>
            <span className="text-[10px] text-slate-400 mt-1 block">10:30 AM</span>
          </div>
        </div>
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-slate-100 dark:border-[#334155]">
        <div className="flex items-center gap-3 bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-[#334155] rounded-xl p-2 pl-4">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-800 dark:text-[#F8FAFC]"
          />
          <div className="flex items-center gap-1 pr-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC]"><Paperclip className="w-4 h-4" /></button>
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-[#F8FAFC]"><Smile className="w-4 h-4" /></button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors ml-1 shadow-md dark:shadow-green-500/20">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

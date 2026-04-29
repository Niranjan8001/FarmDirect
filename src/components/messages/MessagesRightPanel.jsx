import React from 'react';
import { MessageSquare, Clock, ArrowRight, Bell, Copy, Megaphone } from 'lucide-react';

const OverviewItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="p-2 rounded-lg bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs text-slate-500 dark:text-[#94A3B8]">{label}</p>
      <p className="font-bold text-slate-800 dark:text-[#F8FAFC]">{value}</p>
    </div>
  </div>
);

const QuickActionItem = ({ icon: Icon, title, description }) => (
  <button className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#0F172A] transition-colors w-full text-left group">
    <div className="text-green-600 dark:text-green-400 mt-0.5">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-sm text-slate-800 dark:text-[#F8FAFC]">{title}</p>
      <p className="text-[10px] text-slate-500 dark:text-[#94A3B8] mt-0.5">{description}</p>
    </div>
  </button>
);

export const MessagesRightPanel = () => {
  return (
    <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
      
      {/* Messaging Overview */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] mb-5">Messaging Overview</h3>
        <div className="space-y-5 mb-5">
          <div className="flex items-center justify-between">
            <OverviewItem icon={MessageSquare} label="Total Conversations" value="24" />
          </div>
          <div className="flex items-center justify-between">
            <OverviewItem icon={MessageSquare} label="Unread Messages" value="3" />
          </div>
          <div className="flex items-center justify-between">
            <OverviewItem icon={Clock} label="Avg. Response Time" value="1h 15m" />
          </div>
        </div>
        <button className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-1 hover:text-green-700 dark:hover:text-green-300">
          View Messaging Report <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Frequently Contacted */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC]">Frequently Contacted</h3>
          <button className="text-xs font-medium text-green-600 dark:text-green-400 hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Priya Sharma', order: 'Order #ORD1256', unread: 2, img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop' },
            { name: 'Amit Verma', order: 'Order #ORD1255', unread: 1, img: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop' },
            { name: 'Neha Singh', order: 'Order #ORD1254', unread: 0, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop' },
            { name: 'Rahul Mehta', order: 'Order #ORD1253', unread: 0, img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop' },
            { name: 'Sunita Joshi', order: 'Order #ORD1252', unread: 0, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop' },
          ].map((contact) => (
            <div key={contact.name} className="flex items-center gap-3">
              <img src={contact.img} alt={contact.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 dark:text-[#F8FAFC] truncate">{contact.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-[#94A3B8]">{contact.order}</p>
              </div>
              {contact.unread > 0 && (
                <span className="bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {contact.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5">
        <h3 className="font-bold text-slate-800 dark:text-[#F8FAFC] mb-4">Quick Actions</h3>
        <div className="space-y-1">
          <QuickActionItem icon={Megaphone} title="Create Announcement" description="Send updates to your customers" />
          <QuickActionItem icon={Copy} title="Shared Templates" description="Use saved replies for common questions" />
          <QuickActionItem icon={Bell} title="Notification Settings" description="Manage message notifications" />
        </div>
      </div>

    </div>
  );
};

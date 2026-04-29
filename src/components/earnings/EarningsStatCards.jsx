import React from 'react';
import { DollarSign, Wallet, ShoppingCart, TrendingUp, Clock } from 'lucide-react';

const Sparkline = () => (
  <div className="h-10 mt-4 w-full">
    <svg viewBox="0 0 100 30" className="w-full h-full preserve-aspect-ratio-none">
      <path 
        d="M0,25 C10,20 20,28 30,15 C40,5 50,15 60,10 C70,5 80,20 90,5 L100,0 L100,30 L0,30 Z" 
        fill="url(#greenGradient)" 
        opacity="0.2"
      />
      <path 
        d="M0,25 C10,20 20,28 30,15 C40,5 50,15 60,10 C70,5 80,20 90,5 L100,0" 
        fill="none" 
        stroke="#16a34a" 
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Card = ({ title, value, change, icon: Icon, iconColor, bgColor, hasSparkline, extraText }) => (
  <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5 flex flex-col justify-between">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg ${bgColor} ${iconColor}`}>
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium text-slate-600 dark:text-[#94A3B8]">{title}</span>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-800 dark:text-[#F8FAFC]">{value}</h3>
      {change && (
        <p className="text-xs mt-1">
          <span className="text-green-600 dark:text-green-400 font-medium">{change}</span>
          <span className="text-slate-500 dark:text-[#94A3B8]"> vs last month</span>
        </p>
      )}
      {extraText && (
        <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1">{extraText}</p>
      )}
    </div>
    
    {hasSparkline && <Sparkline />}
  </div>
);

export const EarningsStatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
      <Card 
        title="Total Earnings" 
        value="₹24,560" 
        change="+18%" 
        icon={DollarSign} 
        iconColor="text-green-600 dark:text-green-400" 
        bgColor="bg-green-50 dark:bg-green-500/10"
        hasSparkline
      />
      <Card 
        title="Net Earnings" 
        value="₹22,150" 
        change="+16%" 
        icon={Wallet} 
        iconColor="text-green-600 dark:text-green-400" 
        bgColor="bg-green-50 dark:bg-green-500/10"
        hasSparkline
      />
      <Card 
        title="Orders" 
        value="32" 
        change="+10%" 
        icon={ShoppingCart} 
        iconColor="text-green-600 dark:text-green-400" 
        bgColor="bg-green-50 dark:bg-green-500/10"
        hasSparkline
      />
      <Card 
        title="Average Order Value" 
        value="₹767" 
        change="+8%" 
        icon={TrendingUp} 
        iconColor="text-green-600 dark:text-green-400" 
        bgColor="bg-green-50 dark:bg-green-500/10"
        hasSparkline
      />
      <Card 
        title="Pending Payout" 
        value="₹2,410" 
        extraText="2 orders"
        icon={Clock} 
        iconColor="text-orange-500" 
        bgColor="bg-orange-50 dark:bg-orange-500/10"
      />
    </div>
  );
};

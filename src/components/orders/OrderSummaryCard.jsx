import React from 'react';
import { Calendar, Clock, CreditCard, IndianRupee, CheckCircle2, Circle, Loader } from 'lucide-react';

/* ── Mini Progress Dots ──────────────────────────────────── */
const statusSteps = ['Placed', 'Packed', 'Shipped', 'Delivered'];

const getActiveIndex = (status) => {
  switch (status) {
    case 'Delivered': return 4;
    case 'Shipped': return 3;
    case 'Processing': return 1;
    case 'Confirmed': return 1;
    case 'Pending': return 1;
    case 'Cancelled': return -1;
    default: return 0;
  }
};

const MiniProgress = ({ status }) => {
  const active = getActiveIndex(status);
  const isCancelled = status === 'Cancelled';

  return (
    <div className="flex items-center gap-1 mt-3">
      {statusSteps.map((step, i) => {
        const done = !isCancelled && i < active;
        const current = !isCancelled && i === active - 1;
        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  isCancelled
                    ? 'bg-red-300 dark:bg-red-500/40'
                    : done
                    ? 'bg-green-500 dark:bg-green-400 shadow-sm shadow-green-500/30'
                    : 'bg-slate-200 dark:bg-[#334155]'
                }`}
              />
              <span className={`text-[9px] leading-none font-medium ${
                done ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500'
              }`}>
                {step}
              </span>
            </div>
            {i < statusSteps.length - 1 && (
              <div className={`flex-1 h-0.5 rounded-full mb-3.5 min-w-[16px] ${
                isCancelled
                  ? 'bg-red-200 dark:bg-red-500/20'
                  : !isCancelled && i < active - 1
                  ? 'bg-green-400 dark:bg-green-500/50'
                  : 'bg-slate-200 dark:bg-[#334155]'
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/* ── Payment Method Icon Map ────────────────────────────── */
const paymentIcons = {
  UPI: '📱',
  COD: '💵',
  Card: '💳',
};

export const OrderSummaryCard = ({ order }) => {
  return (
    <div className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl p-5 sm:p-6">
      <h2 className="text-base font-bold text-slate-800 dark:text-[#F8FAFC] mb-5">
        Order Summary
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {/* Order Date */}
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 shrink-0 h-fit">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Order Date</p>
            <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">{order.date}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{order.time}</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 h-fit">
            <CreditCard className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Payment</p>
            <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC] flex items-center gap-1.5">
              <span>{paymentIcons[order.paymentMethod]}</span>
              {order.paymentMethod}
            </p>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 h-fit">
            <IndianRupee className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Total Amount</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">
              ₹{order.total}
            </p>
          </div>
        </div>

        {/* Items Count */}
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 h-fit">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Items</p>
            <p className="text-sm font-semibold text-slate-800 dark:text-[#F8FAFC]">
              {order.items.length} Product{order.items.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Mini Progress */}
      <div className="mt-5 pt-5 border-t border-slate-100 dark:border-[#334155]">
        <MiniProgress status={order.status} />
      </div>
    </div>
  );
};

import React from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { OrdersHeader } from '../components/orders/OrdersHeader';
import { OrdersTabs } from '../components/orders/OrdersTabs';
import { OrdersFilters } from '../components/orders/OrdersFilters';
import { OrdersTable } from '../components/orders/OrdersTable';
import { OrdersRightPanel } from '../components/orders/OrdersRightPanel';

export const OrdersView = () => {
  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <OrdersHeader />
          <OrdersTabs />
          <OrdersFilters />
          <OrdersTable />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <OrdersRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

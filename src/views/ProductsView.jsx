import React from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { ProductsHeader } from '../components/products/ProductsHeader';
import { ProductsTabs } from '../components/products/ProductsTabs';
import { ProductsFilters } from '../components/products/ProductsFilters';
import { ProductsTable } from '../components/products/ProductsTable';
import { ProductsRightPanel } from '../components/products/ProductsRightPanel';

export const ProductsView = () => {
  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <ProductsHeader />
          <ProductsTabs />
          <ProductsFilters />
          <ProductsTable />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ProductsRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

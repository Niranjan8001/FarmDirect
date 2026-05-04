import React, { useState, useMemo, useEffect } from 'react';
import { useFarmerContext } from '../context/FarmerContext';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { ProductsHeader } from '../components/products/ProductsHeader';
import { ProductsTabs } from '../components/products/ProductsTabs';
import { ProductsFilters } from '../components/products/ProductsFilters';
import { ProductsTable } from '../components/products/ProductsTable';
import { ProductsRightPanel } from '../components/products/ProductsRightPanel';
import { Loader2, AlertCircle } from 'lucide-react';

import { LoadingSpinner, ErrorState } from '../components/ui/Feedback';

export const ProductsView = () => {
  const { products, loading, error, fetchProducts, handleRetry } = useFarmerContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'active' && product.status === 'Active') ||
                        (activeTab === 'low-stock' && product.status === 'Low Stock') ||
                        (activeTab === 'out-of-stock' && product.status === 'Out of Stock');
      
      const matchesCategory = categoryFilter === 'All Categories' || product.category === categoryFilter;
      const matchesStatus = statusFilter === 'All Status' || product.status === statusFilter;

      return matchesSearch && matchesTab && matchesCategory && matchesStatus;
    });
  }, [products, searchQuery, activeTab, categoryFilter, statusFilter]);

  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <ProductsHeader />
          <ProductsTabs activeTab={activeTab} setActiveTab={setActiveTab} products={products} />
          <ProductsFilters 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          {loading ? (
            <LoadingSpinner message="Loading your products..." />
          ) : error ? (
            <ErrorState 
              message={error.message} 
              onRetry={handleRetry} 
              status={error.status} 
            />
          ) : (
            <ProductsTable products={filteredProducts} />
          )}
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ProductsRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

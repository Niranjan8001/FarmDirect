import React, { useState, useMemo, useEffect } from 'react';
import { useFarmerContext } from '../context/FarmerContext';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { ProductsHeader } from '../components/products/ProductsHeader';
import { ProductsTabs } from '../components/products/ProductsTabs';
import { ProductsFilters } from '../components/products/ProductsFilters';
import { ProductsTable } from '../components/products/ProductsTable';
import { ProductsRightPanel } from '../components/products/ProductsRightPanel';
import { Loader2, AlertCircle } from 'lucide-react';

export const ProductsView = () => {
  const { products, loading, error, fetchProducts } = useFarmerContext();
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
            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl">
              <Loader2 className="w-10 h-10 text-green-500 animate-spin mb-4" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">Loading your products...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] rounded-xl text-red-500">
              <AlertCircle className="w-10 h-10 mb-4" />
              <p className="font-bold text-lg mb-2">Error loading products</p>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{error}</p>
              <button 
                onClick={fetchProducts}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Try Again
              </button>
            </div>
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

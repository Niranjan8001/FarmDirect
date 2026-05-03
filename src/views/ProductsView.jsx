import React, { useState, useMemo } from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { ProductsHeader } from '../components/products/ProductsHeader';
import { ProductsTabs } from '../components/products/ProductsTabs';
import { ProductsFilters } from '../components/products/ProductsFilters';
import { ProductsTable } from '../components/products/ProductsTable';
import { ProductsRightPanel } from '../components/products/ProductsRightPanel';

const productsData = [
  { id: 1, name: 'Farm Fresh Tomatoes', weight: '2 kg', price: '₹60', unit: '/ kg', stock: '120 kg', sold: '75 kg', status: 'Active', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop' },
  { id: 2, name: 'Cucumbers', weight: '1 kg', price: '₹40', unit: '/ kg', stock: '85 kg', sold: '40 kg', status: 'Active', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop' },
  { id: 3, name: 'Red Onions', weight: '1 kg', price: '₹35', unit: '/ kg', stock: '60 kg', sold: '25 kg', status: 'Active', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop' },
  { id: 4, name: 'Whole Wheat', weight: '5 kg', price: '₹120', unit: '/ kg', stock: '200 kg', sold: '60 kg', status: 'Active', category: 'Grains', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop' },
  { id: 5, name: 'Potatoes', weight: '2 kg', price: '₹30', unit: '/ kg', stock: '150 kg', sold: '30 kg', status: 'Low Stock', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop' },
  { id: 6, name: 'Green Chilies', weight: '250 g', price: '₹25', unit: '/ 250g', stock: '0 kg', sold: '15 kg', status: 'Out of Stock', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop' },
  { id: 7, name: 'Mustard Oil', weight: '1 L', price: '₹180', unit: '/ L', stock: '25 L', sold: '10 L', status: 'Active', category: 'Oil', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop' },
];

export const ProductsView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'active' && product.status === 'Active') ||
                        (activeTab === 'low-stock' && product.status === 'Low Stock') ||
                        (activeTab === 'out-of-stock' && product.status === 'Out of Stock');
      
      const matchesCategory = categoryFilter === 'All Categories' || product.category === categoryFilter;
      const matchesStatus = statusFilter === 'All Status' || product.status === statusFilter;

      return matchesSearch && matchesTab && matchesCategory && matchesStatus;
    });
  }, [searchQuery, activeTab, categoryFilter, statusFilter]);

  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <ProductsHeader />
          <ProductsTabs activeTab={activeTab} setActiveTab={setActiveTab} products={productsData} />
          <ProductsFilters 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
          <ProductsTable products={filteredProducts} />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <ProductsRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

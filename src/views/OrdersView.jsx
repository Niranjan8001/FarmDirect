import React, { useState, useMemo } from 'react';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { OrdersHeader } from '../components/orders/OrdersHeader';
import { OrdersTabs } from '../components/orders/OrdersTabs';
import { OrdersFilters } from '../components/orders/OrdersFilters';
import { OrdersTable } from '../components/orders/OrdersTable';
import { OrdersRightPanel } from '../components/orders/OrdersRightPanel';

const ordersData = [
  { id: '#ORD1256', customer: 'Priya Sharma', location: 'Jaipur, RJ', product: 'Fresh Tomatoes', weight: '5 kg', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹125', date: 'May 22, 2024', time: '10:30 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1255', customer: 'Amit Verma', location: 'Jaipur, RJ', product: 'Cucumbers', weight: '3 kg', img: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', quantity: '3 kg', amount: '₹60', date: 'May 22, 2024', time: '09:15 AM', status: 'Processing', payment: 'Paid' },
  { id: '#ORD1254', customer: 'Neha Singh', location: 'Sikar, RJ', product: 'Potatoes', weight: '10 kg', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', quantity: '10 kg', amount: '₹180', date: 'May 21, 2024', time: '07:45 PM', status: 'Shipped', payment: 'Paid' },
  { id: '#ORD1253', customer: 'Rahul Mehta', location: 'Ajmer, RJ', product: 'Red Onions', weight: '5 kg', img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹110', date: 'May 21, 2024', time: '04:30 PM', status: 'Confirmed', payment: 'COD' },
  { id: '#ORD1252', customer: 'Sunita Joshi', location: 'Jaipur, RJ', product: 'Whole Wheat', weight: '5 kg', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop', quantity: '5 kg', amount: '₹120', date: 'May 20, 2024', time: '11:20 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1251', customer: 'Vikram Patel', location: 'Tonk, RJ', product: 'Green Chilies', weight: '250 g', img: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop', quantity: '250 g', amount: '₹25', date: 'May 20, 2024', time: '08:10 AM', status: 'Delivered', payment: 'Paid' },
  { id: '#ORD1250', customer: 'Pooja Meena', location: 'Jaipur, RJ', product: 'Mustard Oil', weight: '1 L', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop', quantity: '1 L', amount: '₹180', date: 'May 19, 2024', time: '06:35 PM', status: 'Cancelled', payment: 'Refunded' },
  { id: '#ORD1249', customer: 'Mohit Kumar', location: 'Jaipur, RJ', product: 'Fresh Tomatoes', weight: '3 kg', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', quantity: '3 kg', amount: '₹75', date: 'May 19, 2024', time: '02:40 PM', status: 'Pending', payment: 'Paid' },
];

export const OrdersView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [paymentFilter, setPaymentFilter] = useState('All Payment Status');

  const filteredOrders = useMemo(() => {
    return ordersData.filter(order => {
      // Search filter
      const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           order.customer.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Tab filter
      const matchesTab = activeTab === 'all' || order.status.toLowerCase() === activeTab.toLowerCase();
      
      // Dropdown status filter
      const matchesStatus = statusFilter === 'All Status' || order.status === statusFilter;
      
      // Dropdown payment filter
      const matchesPayment = paymentFilter === 'All Payment Status' || order.payment === paymentFilter;

      return matchesSearch && matchesTab && matchesStatus && matchesPayment;
    });
  }, [searchQuery, activeTab, statusFilter, paymentFilter]);

  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-8 flex flex-col lg:flex-row gap-8 mt-6">
        
        {/* Left Content Column */}
        <div className="flex-1 min-w-0">
          <OrdersHeader />
          <OrdersTabs activeTab={activeTab} setActiveTab={setActiveTab} orders={ordersData} />
          <OrdersFilters 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            paymentFilter={paymentFilter}
            setPaymentFilter={setPaymentFilter}
          />
          <OrdersTable orders={filteredOrders} />
        </div>

        {/* Right Panel Column */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <OrdersRightPanel />
        </div>

      </div>
    </DesktopLayout>
  );
};

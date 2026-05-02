import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DesktopLayout } from '../components/layout/DesktopLayout';
import { OrderDetailHeader } from '../components/orders/OrderDetailHeader';
import { OrderSummaryCard } from '../components/orders/OrderSummaryCard';
import { CustomerDetails } from '../components/orders/CustomerDetails';
import { ItemsOrdered } from '../components/orders/ItemsOrdered';
import { PaymentBreakdown } from '../components/orders/PaymentBreakdown';
import { DeliveryTimeline } from '../components/orders/DeliveryTimeline';
import { OrderActionButtons } from '../components/orders/OrderActionButtons';

/* ── Rich mock data keyed by order ID ────────────────────────────── */
const mockOrders = {
  /* ── Dashboard Recent Orders ───────────────────────────────────── */
  'ORD-2847': {
    id: 'ORD-2847',
    status: 'Delivered',
    date: 'Today',
    time: '10:32 AM',
    paymentMethod: 'UPI',
    total: 540,
    subtotal: 490,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      address: '42, Vaishali Nagar, Near Ridhi Sidhi Circle, Jaipur, Rajasthan – 302021',
      isRepeat: true,
    },
    items: [
      { name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 50, total: 250 },
      { name: 'Cucumbers', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', qty: 4, unit: 'kg', pricePerUnit: 35, total: 140 },
      { name: 'Green Chilies', image: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop', qty: 1, unit: 'kg', pricePerUnit: 100, total: 100 },
    ],
    timeline: {
      placed: { done: true, date: 'Today, 10:32 AM' },
      packed: { done: true, date: 'Today, 11:00 AM' },
      shipped: { done: true, date: 'Today, 12:30 PM' },
      delivered: { done: true, date: 'Today, 02:15 PM' },
    },
  },
  'ORD-2846': {
    id: 'ORD-2846',
    status: 'Processing',
    date: 'Today',
    time: '09:15 AM',
    paymentMethod: 'Card',
    total: 1250,
    subtotal: 1200,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Amit Patel',
      phone: '+91 99887 76655',
      email: 'amit.patel@email.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      address: '15, Lal Kothi, MI Road, Jaipur, Rajasthan – 302001',
      isRepeat: false,
    },
    items: [
      { name: 'Whole Wheat', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop', qty: 10, unit: 'kg', pricePerUnit: 60, total: 600 },
      { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 20, unit: 'kg', pricePerUnit: 30, total: 600 },
    ],
    timeline: {
      placed: { done: true, date: 'Today, 09:15 AM' },
      packed: { done: false, date: null },
      shipped: { done: false, date: null },
      delivered: { done: false, date: null },
    },
  },
  'ORD-2845': {
    id: 'ORD-2845',
    status: 'Shipped',
    date: 'Yesterday',
    time: '04:20 PM',
    paymentMethod: 'COD',
    total: 210,
    subtotal: 160,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Neha Gupta',
      phone: '+91 98712 34567',
      email: 'neha.gupta@email.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      address: '8, Sadar Bazaar, Main Market, Sikar, Rajasthan – 332001',
      isRepeat: true,
    },
    items: [
      { name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', qty: 4, unit: 'kg', pricePerUnit: 40, total: 160 },
    ],
    timeline: {
      placed: { done: true, date: 'Yesterday, 04:20 PM' },
      packed: { done: true, date: 'Yesterday, 05:00 PM' },
      shipped: { done: true, date: 'Today, 08:00 AM' },
      delivered: { done: false, date: null },
    },
  },
  'ORD-2844': {
    id: 'ORD-2844',
    status: 'Delivered',
    date: 'Yesterday',
    time: '11:45 AM',
    paymentMethod: 'UPI',
    total: 780,
    subtotal: 730,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Raj Malhotra',
      phone: '+91 95432 10987',
      email: 'raj.malhotra@email.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      address: '5, Pushkar Road, Near Ajmer Junction, Ajmer, Rajasthan – 305001',
      isRepeat: false,
    },
    items: [
      { name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', qty: 8, unit: 'kg', pricePerUnit: 50, total: 400 },
      { name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 40, total: 200 },
      { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 30, total: 150 },
    ],
    timeline: {
      placed: { done: true, date: 'Yesterday, 11:45 AM' },
      packed: { done: true, date: 'Yesterday, 12:30 PM' },
      shipped: { done: true, date: 'Yesterday, 02:00 PM' },
      delivered: { done: true, date: 'Yesterday, 05:30 PM' },
    },
  },
  'ORD-2843': {
    id: 'ORD-2843',
    status: 'Cancelled',
    date: '28 Apr',
    time: '03:10 PM',
    paymentMethod: 'UPI',
    total: 640,
    subtotal: 590,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Sunita Devi',
      phone: '+91 97123 45678',
      email: 'sunita.devi@email.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      address: '22, Raja Park, Near Central Park, Jaipur, Rajasthan – 302004',
      isRepeat: false,
    },
    items: [
      { name: 'Cucumbers', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', qty: 6, unit: 'kg', pricePerUnit: 35, total: 210 },
      { name: 'Whole Wheat', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 60, total: 300 },
      { name: 'Green Chilies', image: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop', qty: 1, unit: 'kg', pricePerUnit: 80, total: 80 },
    ],
    timeline: {
      placed: { done: true, date: '28 Apr, 03:10 PM' },
      packed: { done: false, date: null },
      shipped: { done: false, date: null },
      delivered: { done: false, date: null },
    },
  },

  /* ── Orders Page Table Orders ──────────────────────────────────── */
  'ORD1256': {
    id: '#ORD1256',
    status: 'Delivered',
    date: 'May 22, 2024',
    time: '10:30 AM',
    paymentMethod: 'UPI',
    total: 525,
    subtotal: 475,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      address: '42, Vaishali Nagar, Near Ridhi Sidhi Circle, Jaipur, Rajasthan – 302021',
      isRepeat: true,
    },
    items: [
      { name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 25, total: 125 },
      { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 10, unit: 'kg', pricePerUnit: 18, total: 180 },
      { name: 'Green Chilies', image: 'https://images.unsplash.com/photo-1588144210663-8f0a2021fb2e?w=100&h=100&fit=crop', qty: 1, unit: 'kg', pricePerUnit: 60, total: 60 },
      { name: 'Cucumbers', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', qty: 3, unit: 'kg', pricePerUnit: 20, total: 60 },
      { name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', qty: 2, unit: 'kg', pricePerUnit: 25, total: 50 },
    ],
    timeline: {
      placed: { done: true, date: 'May 22, 10:30 AM' },
      packed: { done: true, date: 'May 22, 11:45 AM' },
      shipped: { done: true, date: 'May 22, 01:15 PM' },
      delivered: { done: true, date: 'May 22, 04:30 PM' },
    },
  },
  'ORD1255': {
    id: '#ORD1255',
    status: 'Processing',
    date: 'May 22, 2024',
    time: '09:15 AM',
    paymentMethod: 'Card',
    total: 230,
    subtotal: 180,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Amit Verma',
      phone: '+91 99887 76655',
      email: 'amit.verma@email.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      address: '15, Lal Kothi, MI Road, Jaipur, Rajasthan – 302001',
      isRepeat: false,
    },
    items: [
      { name: 'Cucumbers', image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=100&h=100&fit=crop', qty: 3, unit: 'kg', pricePerUnit: 20, total: 60 },
      { name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', qty: 3, unit: 'kg', pricePerUnit: 25, total: 75 },
      { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 18, total: 90 },
    ],
    timeline: {
      placed: { done: true, date: 'May 22, 09:15 AM' },
      packed: { done: false, date: null },
      shipped: { done: false, date: null },
      delivered: { done: false, date: null },
    },
  },
  'ORD1254': {
    id: '#ORD1254',
    status: 'Shipped',
    date: 'May 21, 2024',
    time: '07:45 PM',
    paymentMethod: 'COD',
    total: 330,
    subtotal: 280,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Neha Singh',
      phone: '+91 98712 34567',
      email: 'neha.singh@email.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      address: '8, Sadar Bazaar, Main Market, Sikar, Rajasthan – 332001',
      isRepeat: true,
    },
    items: [
      { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 10, unit: 'kg', pricePerUnit: 18, total: 180 },
      { name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', qty: 4, unit: 'kg', pricePerUnit: 25, total: 100 },
    ],
    timeline: {
      placed: { done: true, date: 'May 21, 07:45 PM' },
      packed: { done: true, date: 'May 21, 09:00 PM' },
      shipped: { done: true, date: 'May 22, 08:00 AM' },
      delivered: { done: false, date: null },
    },
  },
  'ORD1250': {
    id: '#ORD1250',
    status: 'Cancelled',
    date: 'May 19, 2024',
    time: '06:35 PM',
    paymentMethod: 'UPI',
    total: 230,
    subtotal: 180,
    deliveryCharge: 30,
    platformFee: 20,
    customer: {
      name: 'Pooja Meena',
      phone: '+91 97123 45678',
      email: 'pooja.meena@email.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      address: '22, Raja Park, Near Central Park, Jaipur, Rajasthan – 302004',
      isRepeat: false,
    },
    items: [
      { name: 'Mustard Oil', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=100&h=100&fit=crop', qty: 1, unit: 'L', pricePerUnit: 180, total: 180 },
    ],
    timeline: {
      placed: { done: true, date: 'May 19, 06:35 PM' },
      packed: { done: false, date: null },
      shipped: { done: false, date: null },
      delivered: { done: false, date: null },
    },
  },
};

/* Fallback for any order id not in mock – generates one from the orders table data */
const fallbackOrder = {
  id: '#ORD1253',
  status: 'Processing',
  date: 'May 21, 2024',
  time: '04:30 PM',
  paymentMethod: 'COD',
  total: 310,
  subtotal: 260,
  deliveryCharge: 30,
  platformFee: 20,
  customer: {
    name: 'Rahul Mehta',
    phone: '+91 95432 10987',
    email: 'rahul.mehta@email.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    address: '5, Pushkar Road, Near Ajmer Junction, Ajmer, Rajasthan – 305001',
    isRepeat: false,
  },
  items: [
    { name: 'Red Onions', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 22, total: 110 },
    { name: 'Fresh Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop', qty: 3, unit: 'kg', pricePerUnit: 25, total: 75 },
    { name: 'Potatoes', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop', qty: 5, unit: 'kg', pricePerUnit: 18, total: 90 },
  ],
  timeline: {
    placed: { done: true, date: 'May 21, 04:30 PM' },
    packed: { done: false, date: null },
    shipped: { done: false, date: null },
    delivered: { done: false, date: null },
  },
};

export const OrderDetailView = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  /* Resolve order data — try raw id first, then stripped version */
  const cleanId = orderId?.replace('#', '');
  const initialOrder = mockOrders[orderId] || mockOrders[cleanId] || fallbackOrder;

  const [order, setOrder] = useState(initialOrder);

  /* ── Status Change Handlers ─────────────────────────────────── */
  const handleMarkShipped = () => {
    setOrder(prev => ({
      ...prev,
      status: 'Shipped',
      timeline: {
        ...prev.timeline,
        packed: { done: true, date: 'Just now' },
        shipped: { done: true, date: 'Just now' },
      },
    }));
  };

  const handleMarkDelivered = () => {
    setOrder(prev => ({
      ...prev,
      status: 'Delivered',
      timeline: {
        ...prev.timeline,
        packed: { done: true, date: prev.timeline.packed.date || 'Earlier' },
        shipped: { done: true, date: prev.timeline.shipped.date || 'Earlier' },
        delivered: { done: true, date: 'Just now' },
      },
    }));
  };

  const handleCancelOrder = () => {
    setOrder(prev => ({
      ...prev,
      status: 'Cancelled',
    }));
  };

  return (
    <DesktopLayout>
      <div className="px-4 md:px-8 pb-28 md:pb-8 max-xs:px-4 max-xs:pb-40">

        {/* Page Header */}
        <OrderDetailHeader order={order} />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">

          {/* ══════════ LEFT COLUMN ══════════ */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Order Summary */}
            <OrderSummaryCard order={order} />

            {/* Items Ordered */}
            <ItemsOrdered items={order.items} />

            {/* Delivery Timeline */}
            <DeliveryTimeline timeline={order.timeline} status={order.status} />

          </div>

          {/* ══════════ RIGHT COLUMN ══════════ */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-6">

            {/* Customer Details */}
            <CustomerDetails customer={order.customer} />

            {/* Payment Breakdown */}
            <PaymentBreakdown order={order} />

          </div>

        </div>
      </div>

      {/* Sticky Bottom Action Buttons (mobile-optimized) */}
      <OrderActionButtons
        status={order.status}
        onMarkShipped={handleMarkShipped}
        onMarkDelivered={handleMarkDelivered}
        onCancelOrder={handleCancelOrder}
      />
    </DesktopLayout>
  );
};

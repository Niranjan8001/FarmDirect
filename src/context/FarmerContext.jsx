import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, googleProvider, signInWithRedirect, getRedirectResult, signInWithPhoneNumber, RecaptchaVerifier } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { apiService } from '../services/apiService';

const FarmerContext = createContext();

export const useFarmerContext = () => useContext(FarmerContext);

export const FarmerProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currentUser, setCurrentUser] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  
  // Mock Orders
  const [orders, setOrders] = useState([
    { id: 101, productId: 1, productName: 'Tomatoes', quantity: 5, customerName: 'Ramesh Singh', status: 'Pending', total: 200, date: new Date().toISOString() },
    { id: 102, productId: 2, productName: 'Potatoes', quantity: 10, customerName: 'Suresh Kumar', status: 'Accepted', total: 300, date: new Date(Date.now() - 86400000).toISOString() },
    { id: 103, productId: 3, productName: 'Apples', quantity: 2, customerName: 'Priya Verma', status: 'Delivered', total: 240, date: new Date(Date.now() - 172800000).toISOString() },
  ]);

  // Handle Redirect Result on Mount
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        setLoading(true);
        console.log('Checking for redirect result...');
        const result = await getRedirectResult(auth);
        if (result?.user) {
          console.log('Redirect login successful:', result.user.email);
          setIsAuthenticated(true);
          setCurrentUser(result.user);
        }
      } catch (err) {
        console.error('Redirect login error:', err);
        setError({ message: 'Google login failed. Please try again.', type: 'auth' });
      } finally {
        setLoading(false);
      }
    };

    handleRedirect();
  }, []);

  // Listen for Auth changes
  useEffect(() => {
    if (MOCK_MODE) {
      console.log('[FarmerContext] MOCK_MODE active: Auto-logging in demo farmer');
      setIsAuthenticated(true);
      setCurrentUser({
        displayName: 'Ramesh Yadav',
        email: 'ramesh@demo.com',
        photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
      });
      fetchProducts();
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Auth state changed: User is logged in', user.email);
        setIsAuthenticated(true);
        setCurrentUser(user);
        fetchProducts();
      } else {
        console.log('Auth state changed: No user');
        setIsAuthenticated(false);
        setCurrentUser(null);
        setProducts([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const MOCK_MODE = true;

  const MOCK_PRODUCTS = [
    {
      id: 'mock-1',
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      price: '₹40',
      stock: '50 kg',
      quantity: 50,
      image: 'https://images.unsplash.com/photo-1595858602621-eebcbcd83e1c?w=400&h=400&fit=crop',
      status: 'Active',
      sold: '12 kg',
      unit: '/ kg',
      weight: '1 kg'
    },
    {
      id: 'mock-2',
      name: 'Farm Fresh Potatoes',
      category: 'Vegetables',
      price: '₹30',
      stock: '100 kg',
      quantity: 100,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
      status: 'Active',
      sold: '45 kg',
      unit: '/ kg',
      weight: '1 kg'
    },
    {
      id: 'mock-3',
      name: 'Green Spinach',
      category: 'Vegetables',
      price: '₹20',
      stock: '15 kg',
      quantity: 15,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
      status: 'Active',
      sold: '8 kg',
      unit: '/ bunch',
      weight: '500g'
    },
    {
      id: 'mock-4',
      name: 'Fresh Carrots',
      category: 'Vegetables',
      price: '₹60',
      stock: '5 kg',
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop',
      status: 'Low Stock',
      sold: '20 kg',
      unit: '/ kg',
      weight: '1 kg'
    },
    {
      id: 'mock-5',
      name: 'Organic Honey',
      category: 'Groceries',
      price: '₹250',
      stock: '0 kg',
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
      status: 'Out of Stock',
      sold: '10 kg',
      unit: '/ bottle',
      weight: '500g'
    }
  ];

  const fetchProducts = async () => {
    if (loading && !isRetrying) return; 

    try {
      setLoading(true);
      setError(null);
      
      if (MOCK_MODE) {
        console.log('[FarmerContext] MOCK_MODE is active. Skipping API call.');
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(MOCK_PRODUCTS);
        setLoading(false);
        return;
      }

      const result = await apiService.getProducts();
      
      if (result.success && result.data) {
        if (result.data.length === 0) {
          console.warn('API returned empty product list. Using mock data.');
          setProducts(MOCK_PRODUCTS);
        } else {
          // Map backend fields to frontend fields
          const mappedProducts = result.data.map(p => ({
            id: p._id,
            name: p.title || p.name,
            category: p.category,
            price: `₹${p.price}`,
            stock: `${p.stock} kg`,
            quantity: p.stock,
            image: p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1595858602621-eebcbcd83e1c?w=400&h=400&fit=crop',
            status: p.stock > 10 ? 'Active' : p.stock > 0 ? 'Low Stock' : 'Out of Stock',
            sold: '0 kg',
            unit: '/ kg',
            weight: '1 kg'
          }));
          setProducts(mappedProducts);
        }
      } else {
        throw new Error(result.message || 'Failed to fetch products');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError({ 
        message: err.status === 0 
          ? 'Network error. Backend might be offline.' 
          : err.message || 'Failed to load products.',
        type: 'fetch',
        status: err.status
      });
      
      // Fallback to mock data on error if no products exist
      if (products.length === 0) {
        setProducts(MOCK_PRODUCTS);
      }
    } finally {
      setLoading(false);
      setIsRetrying(false);
    }
  };

  const handleRetry = () => {
    setIsRetrying(true);
    fetchProducts();
  };

  const login = async (type = 'google', data = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      if (type === 'google') {
        console.log('Starting Google Redirect login flow...');
        await signInWithRedirect(auth, googleProvider);
        return true;
      }

      // Phone login (Mock for now)
      if (data.phone && data.otp === '1234') {
        setIsAuthenticated(true);
        setCurrentUser({ name: 'Mock Farmer', phone: data.phone });
        return true;
      }
      return false;
    } catch (err) {
      console.error('Login error:', err);
      setError({ message: 'Authentication failed. Please try again.', type: 'auth' });
      return false;
    } finally {
      // Don't set loading false for redirect as page will change
      if (type !== 'google') setLoading(false);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const addProduct = async (productData) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('Not authenticated');

      const token = await user.getIdToken();
      const result = await apiService.addProduct(productData, token);

      if (result.success) {
        console.log('Product added successfully:', result.data);
        await fetchProducts(); 
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.error('Add product error:', err);
      throw err;
    }
  };

  const updateProductQuantity = (id, newQuantity) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: newQuantity, stock: newQuantity } : p));
  };

  const updateOrderStatus = (id, status) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };

  // Derived Earnings
  const totalEarnings = orders
    .filter(o => o.status === 'Delivered')
    .reduce((sum, order) => sum + order.total, 0);

  const weeklyEarnings = totalEarnings; // simplified for mock

  return (
    <FarmerContext.Provider value={{
      isAuthenticated,
      currentUser,
      language,
      setLanguage,
      isDark,
      toggleTheme,
      login,
      logout,
      products,
      loading,
      error,
      fetchProducts,
      handleRetry,
      addProduct,
      updateProductQuantity,
      orders,
      updateOrderStatus,
      totalEarnings,
      weeklyEarnings
    }}>
      {children}
    </FarmerContext.Provider>
  );
};

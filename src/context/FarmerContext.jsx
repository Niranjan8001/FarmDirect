import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, googleProvider, signInWithRedirect, getRedirectResult, signInWithPhoneNumber, RecaptchaVerifier } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const FarmerContext = createContext();

export const useFarmerContext = () => useContext(FarmerContext);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const FarmerProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currentUser, setCurrentUser] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setError('Google login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    handleRedirect();
  }, []);

  // Listen for Auth changes
  useEffect(() => {
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

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/products`);
      const result = await response.json();
      if (result.success) {
        // Map backend fields to frontend fields
        const mappedProducts = result.data.map(p => ({
          id: p._id,
          name: p.title,
          category: p.category,
          price: `₹${p.price}`,
          stock: `${p.stock} kg`,
          quantity: p.stock,
          image: p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1595858602621-eebcbcd83e1c?w=400&h=400&fit=crop',
          status: p.stock > 10 ? 'Active' : p.stock > 0 ? 'Low Stock' : 'Out of Stock',
          sold: '0 kg', // Mock for now
          unit: '/ kg',
          weight: '1 kg'
        }));
        setProducts(mappedProducts);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
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
      setError('Authentication failed. Please try again.');
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
      
      // Since we might be sending images later, let's use FormData if it's a file upload, 
      // but for now AddProduct sends JSON.
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });

      const result = await response.json();
      if (result.success) {
        console.log('API Response:', result);
        await fetchProducts(); // Re-fetch to get the updated list
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

import React, { createContext, useState, useContext } from 'react';

const FarmerContext = createContext();

export const useFarmerContext = () => useContext(FarmerContext);

export const FarmerProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currentUser, setCurrentUser] = useState(null);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  
  // Mock Products (Inventory)
  const [products, setProducts] = useState([
    { id: 1, name: 'Tomatoes', category: 'Vegetables', price: 40, quantity: 50, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop' },
    { id: 2, name: 'Potatoes', category: 'Vegetables', price: 30, quantity: 100, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=200&fit=crop' },
    { id: 3, name: 'Apples', category: 'Fruits', price: 120, quantity: 20, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?w=200&h=200&fit=crop' },
  ]);

  // Mock Orders
  const [orders, setOrders] = useState([
    { id: 101, productId: 1, productName: 'Tomatoes', quantity: 5, customerName: 'Ramesh Singh', status: 'Pending', total: 200, date: new Date().toISOString() },
    { id: 102, productId: 2, productName: 'Potatoes', quantity: 10, customerName: 'Suresh Kumar', status: 'Accepted', total: 300, date: new Date(Date.now() - 86400000).toISOString() },
    { id: 103, productId: 3, productName: 'Apples', quantity: 2, customerName: 'Priya Verma', status: 'Delivered', total: 240, date: new Date(Date.now() - 172800000).toISOString() },
  ]);

  const login = (phoneNumber, otp) => {
    // Mock login logic
    if (phoneNumber && otp === '1234') {
      setIsAuthenticated(true);
      setCurrentUser({ phoneNumber, name: 'Mock Farmer' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProductQuantity = (id, newQuantity) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: newQuantity } : p));
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

import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FarmerProvider, useFarmerContext } from './context/FarmerContext';
import { Topbar } from './components/layout/Topbar';
import { BottomNavigation } from './components/layout/BottomNavigation';

// Views
import { Login } from './views/Login';
import { DashboardView } from './views/DashboardView';
import { AddProduct } from './views/AddProduct';
import { OrdersView } from './views/OrdersView';
import { ProductsView } from './views/ProductsView';
import { EarningsView } from './views/EarningsView';
import { MessagesView } from './views/MessagesView';
import { ReviewsView } from './views/ReviewsView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useFarmerContext();
  return isAuthenticated ? children : <Navigate to="/" />;
};

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  const getPageTitle = (path) => {
    switch (path) {
      case '/add-product': return 'Add Product';
      default: return 'FarmDirect';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Topbar title={getPageTitle(location.pathname)} />
      <main className="max-w-md mx-auto bg-white min-h-screen shadow-sm relative">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><DashboardView /></PrivateRoute>} />
      <Route path="/add-product" element={<PrivateRoute><MainLayout><AddProduct /></MainLayout></PrivateRoute>} />
      <Route path="/orders" element={<PrivateRoute><OrdersView /></PrivateRoute>} />
      <Route path="/inventory" element={<PrivateRoute><ProductsView /></PrivateRoute>} />
      <Route path="/earnings" element={<PrivateRoute><EarningsView /></PrivateRoute>} />
      <Route path="/messages" element={<PrivateRoute><MessagesView /></PrivateRoute>} />
      <Route path="/reviews" element={<PrivateRoute><ReviewsView /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfileView /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><SettingsView /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};




function App() {
  return (
    <FarmerProvider>
      <AppRoutes />
    </FarmerProvider>
  );
}

export default App;
